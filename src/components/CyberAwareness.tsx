import React, { useState } from 'react';
import {
  Smartphone, CreditCard, Eye, Wifi, ChevronDown, ChevronUp,
  AlertTriangle, CheckCircle, XCircle, Info, ShieldAlert,
} from 'lucide-react';

interface Tip {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ThreatSection {
  id: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
  title: string;
  subtitle: string;
  warning: string;
  dos: Tip[];
  donts: string[];
}

const sections: ThreatSection[] = [
  {
    id: 'phone-theft',
    icon: <Smartphone size={22} />,
    color: 'text-error',
    bgColor: 'bg-error/5',
    borderColor: 'border-error/20',
    title: 'Phone Theft & SIM Swapping',
    subtitle: 'What to do before and after your phone is stolen',
    warning: 'In Mukuru and many Nairobi estates, phone snatching happens in seconds. Be ready before it happens.',
    dos: [
      { icon: <CheckCircle size={16} />, title: 'Set a SIM card PIN', description: 'Go to Settings > SIM > SIM Lock. Set a 4-digit PIN. If your SIM is stolen, nobody can use it without this code.' },
      { icon: <CheckCircle size={16} />, title: 'Write down your IMEI number', description: 'Dial *#06# and note the number. If your phone is stolen, call Safaricom/Airtel with this number to block it permanently.' },
      { icon: <CheckCircle size={16} />, title: 'Enable screen lock always', description: 'Use a PIN, pattern, or fingerprint. Never leave your phone unlocked, even for a second in public.' },
      { icon: <CheckCircle size={16} />, title: 'Know the Safaricom SIM swap block number', description: 'Call 100 or *100# immediately if your SIM is stolen. Ask them to block SIM swap requests on your number.' },
      { icon: <CheckCircle size={16} />, title: 'Back up contacts to Google', description: 'Go to Settings > Accounts > Google > Sync Contacts. If your phone is taken, your contacts are safe online.' },
    ],
    donts: [
      'Do not use your phone while walking or at a matatu stage  -  this is when most snatching happens',
      'Do not ignore SIM replacement SMS alerts  -  if you get one and did not request it, call your carrier immediately',
      'Do not store M-Pesa PIN or bank PINs as a note in your phone',
      'Do not use "0000" or "1234" as your SIM PIN  -  these are the first ones thieves try',
    ],
  },
  {
    id: 'mpesa',
    icon: <CreditCard size={22} />,
    color: 'text-warning',
    bgColor: 'bg-warning/5',
    borderColor: 'border-warning/20',
    title: 'Mobile Money Fraud (M-Pesa Scams)',
    subtitle: 'Common tricks used to steal your M-Pesa money',
    warning: 'M-Pesa fraud is the most common financial crime in Kenya. Scammers are professional and convincing.',
    dos: [
      { icon: <CheckCircle size={16} />, title: 'Always confirm the name before sending money', description: 'M-Pesa shows the account holder name before you confirm. Read it carefully. If the name is wrong, cancel.' },
      { icon: <CheckCircle size={16} />, title: 'Verify "wrong transfer" claims by calling Safaricom', description: 'If someone says you received their money by mistake, call 100 to verify before sending anything back. Most are scams.' },
      { icon: <CheckCircle size={16} />, title: 'Check your M-Pesa balance yourself', description: 'Never trust a stranger who says they sent you money. Check your own balance via *334# before doing anything.' },
      { icon: <CheckCircle size={16} />, title: 'Use M-Pesa lock (Jificha)', description: 'Safaricom has a lock feature. Dial *334# and explore security options to lock your M-Pesa when not in use.' },
      { icon: <CheckCircle size={16} />, title: 'Change your M-Pesa PIN regularly', description: 'Go to M-Pesa menu > My Account > Change PIN. Use a PIN that is not your birthday or phone number.' },
    ],
    donts: [
      'Do not share your M-Pesa PIN with anyone  -  not family, not a Safaricom "agent", not anyone',
      'Do not send money back to someone claiming they sent you money by mistake without calling 100 first',
      'Do not respond to SMS saying you have won a prize  -  these are always scams',
      'Do not let anyone "help" you use M-Pesa on your phone in public',
      'Do not use the same PIN for M-Pesa and your phone screen lock',
    ],
  },
  {
    id: 'social-engineering',
    icon: <Eye size={22} />,
    color: 'text-info',
    bgColor: 'bg-info/5',
    borderColor: 'border-info/20',
    title: 'Social Engineering & Phishing',
    subtitle: 'How scammers trick you using words, not technology',
    warning: 'Social engineering means someone is lying to you to steal from you. They sound professional and urgent.',
    dos: [
      { icon: <CheckCircle size={16} />, title: 'Slow down when someone creates urgency', description: 'Scammers always say "act now" or "you will lose your account". Real companies give you time. If someone is rushing you, it is a scam.' },
      { icon: <CheckCircle size={16} />, title: 'Call back on official numbers', description: 'If someone calls claiming to be from your bank or Safaricom, hang up and call the official number yourself to verify.' },
      { icon: <CheckCircle size={16} />, title: 'Confirm links before clicking', description: 'Safaricom links look like safaricom.co.ke. Scam links look like safar1com.net or m-pesa-kenya.com. Look carefully before tapping.' },
      { icon: <CheckCircle size={16} />, title: 'Trust your instincts', description: 'If something feels wrong, it probably is. You are allowed to say "I need to think about it" and hang up.' },
    ],
    donts: [
      'Do not give OTP codes (one-time passwords) to anyone  -  not even someone claiming to be from Safaricom',
      'Do not click links sent via WhatsApp or SMS from unknown numbers',
      'Do not fill in your phone number, PIN, or ID number on a website you reached through a text message',
      'Do not trust callers who already know your name and phone number  -  scammers buy lists of this information',
    ],
  },
  {
    id: 'wifi',
    icon: <Wifi size={22} />,
    color: 'text-success',
    bgColor: 'bg-success/5',
    borderColor: 'border-success/20',
    title: 'Public WiFi Dangers',
    subtitle: 'Staying safe on free WiFi at cyber cafes, hotspots, and shops',
    warning: 'Free WiFi is convenient but dangerous. Anyone on the same network can see what you are doing.',
    dos: [
      { icon: <CheckCircle size={16} />, title: 'Use mobile data for M-Pesa and banking', description: 'Never open your M-Pesa, bank app, or enter passwords on public WiFi. Use your own mobile data for anything financial.' },
      { icon: <CheckCircle size={16} />, title: 'Log out of everything after using a shared computer', description: 'At a cyber cafe, always log out of Gmail, Facebook, and any account before leaving. Clear the browser history too.' },
      { icon: <CheckCircle size={16} />, title: 'Check for HTTPS before entering any information', description: 'Look for a padlock icon in the browser address bar. If it is missing, do not enter any personal information on that site.' },
      { icon: <CheckCircle size={16} />, title: 'Forget the network after use', description: 'On your phone, go to WiFi settings and tap "Forget" on public networks so your phone does not auto-connect next time.' },
    ],
    donts: [
      'Do not access your bank or M-Pesa on public WiFi or at a cyber cafe',
      'Do not leave a shared computer without logging out of all accounts',
      'Do not connect to WiFi networks named "Free WiFi" or "Airtel Free" without confirming with the shop owner',
      'Do not save passwords in a public computer browser',
    ],
  },
];

export const CyberAwareness: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>('phone-theft');

  return (
    <div className="fade-in p-6 overflow-y-auto h-full scrollbar-thin max-w-3xl mx-auto">

      {/* Hero */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs text-base-content/40 uppercase tracking-widest mb-3">
          <ShieldAlert size={12} /> Community Security Awareness
        </div>
        <h1 className="text-3xl font-bold text-base-content mb-3 leading-tight">
          Protect Yourself <span className="text-success font-mono cyber-glow">Online and Offline</span>
        </h1>
        <p className="text-base-content/60 text-base leading-relaxed">
          You do not need to be a tech expert to stay safe. These are simple, practical steps
          anyone in Nairobi can follow to protect their phone, money, and personal information.
        </p>
      </div>

      {/* Alert banner */}
      <div className="alert bg-warning/10 border border-warning/30 mb-8">
        <AlertTriangle size={18} className="text-warning shrink-0" />
        <div>
          <p className="text-sm font-semibold text-base-content">Real threats, real people</p>
          <p className="text-xs text-base-content/60 mt-0.5">
            These scams happen every day in Nairobi. Knowing how they work is your best protection.
          </p>
        </div>
      </div>

      {/* Threat sections */}
      <div className="space-y-3 mb-8">
        {sections.map(section => {
          const isOpen = openSection === section.id;
          return (
            <div
              key={section.id}
              className={`card border ${section.borderColor} ${isOpen ? section.bgColor : 'bg-base-200'} transition-colors`}
            >
              {/* Section header */}
              <div
                className="card-body p-4 cursor-pointer"
                onClick={() => setOpenSection(isOpen ? null : section.id)}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className={section.color}>{section.icon}</span>
                    <div>
                      <p className={`font-semibold text-sm text-base-content`}>{section.title}</p>
                      <p className="text-xs text-base-content/50">{section.subtitle}</p>
                    </div>
                  </div>
                  <span className="text-base-content/30 shrink-0">
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </span>
                </div>

                {/* Warning line */}
                {isOpen && (
                  <div className="flex items-start gap-2 mt-3 p-3 rounded-lg bg-base-300">
                    <Info size={14} className={`${section.color} shrink-0 mt-0.5`} />
                    <p className="text-xs text-base-content/70 leading-relaxed">{section.warning}</p>
                  </div>
                )}
              </div>

              {/* Expanded content */}
              {isOpen && (
                <div className="px-4 pb-4 space-y-4">

                  {/* Do's */}
                  <div>
                    <p className="text-xs font-bold text-success uppercase tracking-widest mb-2 flex items-center gap-1">
                      <CheckCircle size={12} /> What to do
                    </p>
                    <div className="space-y-2">
                      {section.dos.map((tip, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-base-300">
                          <span className="text-success shrink-0 mt-0.5">{tip.icon}</span>
                          <div>
                            <p className="text-sm font-semibold text-base-content">{tip.title}</p>
                            <p className="text-xs text-base-content/60 mt-0.5 leading-relaxed">{tip.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Don'ts */}
                  <div>
                    <p className="text-xs font-bold text-error uppercase tracking-widest mb-2 flex items-center gap-1">
                      <XCircle size={12} /> What NOT to do
                    </p>
                    <div className="space-y-2">
                      {section.donts.map((dont, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-base-300">
                          <XCircle size={14} className="text-error shrink-0 mt-0.5" />
                          <p className="text-xs text-base-content/70 leading-relaxed">{dont}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Emergency contacts */}
      <div className="card bg-base-200 border border-base-300 mb-8">
        <div className="card-body p-5">
          <h2 className="text-base font-semibold text-base-content mb-3 flex items-center gap-2">
            <AlertTriangle size={16} className="text-error" /> Emergency Contacts
          </h2>
          <div className="space-y-2">
            {[
              { label: 'Safaricom Customer Care', number: '100', desc: 'Report SIM swap, M-Pesa fraud, stolen SIM' },
              { label: 'Airtel Customer Care', number: '0800 724 000', desc: 'Report stolen SIM or account fraud' },
              { label: 'DCI Cybercrime Unit', number: '0800 722 203', desc: 'Report online fraud and cybercrime' },
              { label: 'Kenya Bankers Association', number: '0711 087 000', desc: 'Report bank account fraud' },
            ].map((contact, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-base-300 gap-3">
                <div>
                  <p className="text-sm font-semibold text-base-content">{contact.label}</p>
                  <p className="text-xs text-base-content/50">{contact.desc}</p>
                </div>
                <a
                  href={`tel:${contact.number.replace(/\s/g, '')}`}
                  className="btn btn-sm btn-success font-mono shrink-0"
                >
                  {contact.number}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Share prompt */}
      <div className="card bg-success/5 border border-success/20">
        <div className="card-body p-5 text-center">
          <p className="text-sm font-semibold text-base-content mb-1">Share this with someone you know</p>
          <p className="text-xs text-base-content/50">
            You do not need to understand tech to get scammed. Share this page with family, neighbours,
            and anyone in your community who uses a phone or M-Pesa.
          </p>
        </div>
      </div>

    </div>
  );
};
