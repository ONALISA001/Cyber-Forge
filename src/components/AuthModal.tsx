import React, { useState } from 'react';
import { X, Lock, Mail, User as UserIcon, Loader2 } from 'lucide-react';
import {
  login,
  signup,
  requestPasswordRecovery,
  updateUser,
  AuthError,
  MissingIdentityError,
} from '@netlify/identity';

export type AuthMode = 'login' | 'signup' | 'forgot' | 'reset';

interface AuthModalProps {
  initialMode?: AuthMode;
  onClose: () => void;
  onSuccess: () => void;
}

function describeError(error: unknown, mode: AuthMode): string {
  if (error instanceof MissingIdentityError) {
    return 'Accounts are not available right now. Please try again later.';
  }
  if (error instanceof AuthError) {
    if (error.status === 401 && mode === 'login') return 'Invalid email or password.';
    if (error.status === 403) return 'Sign ups are currently closed.';
    if (error.status === 422) return error.message || 'Check your email and password.';
    return error.message;
  }
  return 'Something went wrong. Please try again.';
}

export const AuthModal: React.FC<AuthModalProps> = ({ initialMode = 'login', onClose, onSuccess }) => {
  const [mode, setMode] = useState<AuthMode>(initialMode);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const switchMode = (m: AuthMode) => {
    setMode(m);
    setError(null);
    setNotice(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setNotice(null);
    try {
      if (mode === 'login') {
        await login(email, password);
        onSuccess();
      } else if (mode === 'signup') {
        const user = await signup(email, password, { full_name: name.trim() || undefined });
        if (user.confirmedAt) {
          onSuccess();
        } else {
          setNotice('Account created! Check your email to confirm it, then log in.');
          setMode('login');
        }
      } else if (mode === 'forgot') {
        await requestPasswordRecovery(email);
        setNotice('If an account exists for that email, a reset link is on its way.');
      } else if (mode === 'reset') {
        await updateUser({ password });
        onSuccess();
      }
    } catch (err) {
      setError(describeError(err, mode));
    } finally {
      setLoading(false);
    }
  };

  const titles: Record<AuthMode, string> = {
    login: 'Log in',
    signup: 'Create your account',
    forgot: 'Reset your password',
    reset: 'Choose a new password',
  };

  const submitLabels: Record<AuthMode, string> = {
    login: 'Log in',
    signup: 'Sign up',
    forgot: 'Send reset link',
    reset: 'Update password',
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4" onClick={onClose}>
      <div
        data-theme="dark"
        className="card bg-base-200 border border-base-300 w-full max-w-sm shadow-xl fade-in"
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-title"
      >
        <div className="card-body p-6">
          <div className="flex items-center justify-between mb-2">
            <h2 id="auth-title" className="flex items-center gap-2 text-xl font-bold text-base-content font-mono">
              <Lock size={18} className="text-success" /> {titles[mode]}
            </h2>
            {mode !== 'reset' && (
              <button className="btn btn-ghost btn-sm btn-circle" onClick={onClose} aria-label="Close">
                <X size={18} />
              </button>
            )}
          </div>

          {notice && <div className="alert alert-success text-sm py-2">{notice}</div>}
          {error && <div className="alert alert-error text-sm py-2">{error}</div>}

          <form className="flex flex-col gap-3 mt-2" onSubmit={handleSubmit}>
            {mode === 'signup' && (
              <label className="input input-bordered flex items-center gap-2">
                <UserIcon size={16} className="opacity-50" />
                <input
                  type="text"
                  className="grow"
                  placeholder="Display name (optional)"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  autoComplete="name"
                />
              </label>
            )}
            {mode !== 'reset' && (
              <label className="input input-bordered flex items-center gap-2">
                <Mail size={16} className="opacity-50" />
                <input
                  type="email"
                  className="grow"
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                />
              </label>
            )}
            {mode !== 'forgot' && (
              <label className="input input-bordered flex items-center gap-2">
                <Lock size={16} className="opacity-50" />
                <input
                  type="password"
                  className="grow"
                  placeholder={mode === 'reset' ? 'New password' : 'Password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                  minLength={mode === 'login' ? undefined : 8}
                  required
                />
              </label>
            )}

            <button type="submit" className="btn btn-success mt-1" disabled={loading}>
              {loading && <Loader2 size={16} className="animate-spin" />}
              {submitLabels[mode]}
            </button>
          </form>

          <div className="text-sm text-center text-base-content/60 mt-3 flex flex-col gap-1">
            {mode === 'login' && (
              <>
                <button className="link link-hover" onClick={() => switchMode('forgot')}>Forgot password?</button>
                <span>
                  New here?{' '}
                  <button className="link link-success" onClick={() => switchMode('signup')}>Create an account</button>
                </span>
              </>
            )}
            {mode === 'signup' && (
              <span>
                Already have an account?{' '}
                <button className="link link-success" onClick={() => switchMode('login')}>Log in</button>
              </span>
            )}
            {mode === 'forgot' && (
              <button className="link link-success" onClick={() => switchMode('login')}>Back to log in</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
