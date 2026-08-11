import React, { useState, useCallback } from 'react';
import { Play, RotateCcw } from 'lucide-react';

interface TerminalProps {
  commands: { command: string; output: string }[];
}

export const TerminalEmulator: React.FC<TerminalProps> = ({ commands }) => {
  const [executedLines, setExecutedLines] = useState<number>(0);
  const [isRunning, setIsRunning] = useState(false);

  const runNext = useCallback(() => {
    if (executedLines >= commands.length || isRunning) return;
    setIsRunning(true);
    setTimeout(() => {
      setExecutedLines(prev => prev + 1);
      setIsRunning(false);
    }, 600);
  }, [executedLines, commands.length, isRunning]);

  const runAll = useCallback(() => {
    setExecutedLines(commands.length);
  }, [commands.length]);

  const reset = useCallback(() => {
    setExecutedLines(0);
    setIsRunning(false);
  }, []);

  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="terminal-dot" style={{ background: '#ef4444' }} />
        <div className="terminal-dot" style={{ background: '#eab308' }} />
        <div className="terminal-dot" style={{ background: '#22c55e' }} />
        <span className="text-xs text-base-content/40 ml-2 font-mono">cyber-forge@lab:~$</span>
        <div className="flex-1" />
        <button
          className="btn btn-ghost btn-xs gap-1"
          onClick={executedLines < commands.length ? runNext : reset}
          disabled={isRunning}
        >
          {executedLines < commands.length ? <Play size={12} /> : <RotateCcw size={12} />}
          {executedLines < commands.length ? 'Run Next' : 'Reset'}
        </button>
        {executedLines < commands.length && (
          <button className="btn btn-ghost btn-xs gap-1" onClick={runAll}>
            Run All
          </button>
        )}
      </div>
      <div className="terminal-body">
        {commands.slice(0, executedLines).map((cmd, i) => (
          <div key={i} className="terminal-line">
            <div>
              <span className="terminal-prompt">$ </span>
              <span className="terminal-command">{cmd.command}</span>
            </div>
            <div className="terminal-output">{cmd.output}</div>
          </div>
        ))}
        {executedLines < commands.length && (
          <div className="terminal-line">
            <span className="terminal-prompt">$ </span>
            <span className="terminal-command opacity-50">{commands[executedLines].command}</span>
            <span className="animate-pulse text-success ml-1">▊</span>
          </div>
        )}
        {executedLines >= commands.length && commands.length > 0 && (
          <div className="terminal-line">
            <span className="terminal-prompt">$ </span>
            <span className="animate-pulse text-success">▊</span>
          </div>
        )}
      </div>
    </div>
  );
};
