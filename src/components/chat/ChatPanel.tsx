'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { buildReply, fuzzyMatch, replyForIntent, SemanticEngine } from './engine';
import type { ChatMessage } from './types';

const STORAGE_KEY = 'jamies-chat-v1';

interface QuickChip {
  label: string;
  intentIds: string[];
  userText: string;
}

const QUICK_CHIPS: QuickChip[] = [
  { label: 'Hours & location', intentIds: ['hours', 'location'], userText: 'Hours & location' },
  { label: 'Shop online', intentIds: ['shop-online'], userText: 'Shop online' },
  { label: 'Sell/trade your stuff', intentIds: ['sell-to-us'], userText: 'Sell/trade your stuff' },
  { label: 'Restocks & drops', intentIds: ['drops-restocks'], userText: 'Restocks & drops' },
];

const WELCOME: ChatMessage = {
  role: 'bot',
  text: "yo! I'm the JAMIESSHOESS bot. hours, location, selling your kicks, drops — ask away.",
  ts: 0,
};

type ModelState = 'loading' | 'ready' | 'fallback';

function loadMessages(): ChatMessage[] {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as ChatMessage[];
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch {
    // ignore corrupt storage
  }
  return [WELCOME];
}

export default function ChatPanel({ onClose }: { onClose: () => void }): React.ReactElement {
  const [messages, setMessages] = useState<ChatMessage[]>(loadMessages);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [modelState, setModelState] = useState<ModelState>('loading');
  const engineRef = useRef<SemanticEngine | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const lastUserRef = useRef<string | null>(null);

  // Boot the semantic engine (worker + model + KB) on mount; fall back to
  // fuzzy matching if anything fails so the bot always works.
  useEffect(() => {
    const engine = new SemanticEngine();
    engineRef.current = engine;
    let cancelled = false;
    engine
      .init()
      .then(() => {
        if (!cancelled) setModelState('ready');
      })
      .catch(() => {
        if (!cancelled) setModelState('fallback');
      });
    return () => {
      cancelled = true;
      engine.dispose();
    };
  }, []);

  // Track the previous *user* message for follow-up detection.
  useEffect(() => {
    const users = messages.filter((m) => m.role === 'user');
    lastUserRef.current = users.length >= 2 ? users[users.length - 2].text : null;
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {
      // storage full/blocked — conversation just won't persist
    }
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, typing]);

  const respond = useCallback((text: string) => {
    // 500–900ms randomized delay — instant replies feel robotic.
    const delay = 500 + Math.random() * 400;
    setTyping(true);
    window.setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { role: 'bot', text, ts: Date.now() }]);
    }, delay);
  }, []);

  const handleChip = useCallback(
    (chip: QuickChip) => {
      setMessages((prev) => [...prev, { role: 'user', text: chip.userText, ts: Date.now() }]);
      const text = chip.intentIds.map((id) => replyForIntent(id)).join('\n\n');
      respond(text);
    },
    [respond],
  );

  const handleSend = useCallback(() => {
    const query = input.trim();
    if (!query || typing) return;
    const previous = (() => {
      const users = messages.filter((m) => m.role === 'user');
      return users.length > 0 ? users[users.length - 1].text : undefined;
    })();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text: query, ts: Date.now() }]);

    const engine = engineRef.current;
    if (modelState === 'ready' && engine) {
      engine
        .match(query, previous)
        .then((match) => respond(buildReply(match)))
        .catch(() => respond(buildReply(fuzzyMatch(query))));
    } else {
      respond(buildReply(fuzzyMatch(query)));
    }
  }, [input, typing, messages, modelState, respond]);

  const inputDisabled = modelState === 'loading';
  const showChips = useMemo(() => messages.filter((m) => m.role === 'user').length === 0, [messages]);

  return (
    <div
      className="fixed z-[210] flex flex-col overflow-hidden inset-0 sm:inset-auto sm:bottom-6 sm:right-6 sm:h-[600px] sm:max-h-[calc(100dvh-3rem)] sm:w-[380px] sm:rounded-2xl"
      style={{
        background: 'var(--color-leather, #080A09)',
        border: '1px solid rgba(0,236,241,0.25)',
        boxShadow: '0 12px 48px rgba(0,0,0,0.6), 0 0 24px rgba(243,34,179,0.15)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
      role="dialog"
      aria-label="JAMIESSHOESS chat"
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-3"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.12)', paddingTop: 'max(0.75rem, env(safe-area-inset-top))' }}
      >
        <div
          className="uppercase italic"
          style={{
            fontFamily: 'var(--font-barlow), sans-serif',
            fontWeight: 900,
            fontSize: '1.25rem',
            color: '#00ECF1',
            letterSpacing: '0.02em',
          }}
        >
          Jamiesshoess<span style={{ color: '#F322B3' }}>.</span>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close chat"
          className="rounded-full p-2 text-white/60 transition hover:text-white"
          style={{ lineHeight: 0 }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className="max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed"
              style={
                m.role === 'user'
                  ? { background: '#00ECF1', color: '#080A09', borderBottomRightRadius: 4 }
                  : {
                      background: 'var(--color-surface2, #1B1D1C)',
                      color: '#fff',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderBottomLeftRadius: 4,
                    }
              }
            >
              {m.text}
            </div>
          </div>
        ))}
        {typing && (
          <div className="flex justify-start">
            <div
              className="flex items-center gap-1 rounded-2xl px-4 py-3"
              style={{ background: 'var(--color-surface2, #1B1D1C)', border: '1px solid rgba(255,255,255,0.08)' }}
              aria-label="Bot is typing"
            >
              {[0, 1, 2].map((d) => (
                <span
                  key={d}
                  className="inline-block h-1.5 w-1.5 animate-bounce rounded-full"
                  style={{ background: '#00ECF1', animationDelay: `${d * 150}ms` }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Quick chips */}
      {showChips && (
        <div className="flex flex-wrap gap-2 px-4 pb-3">
          {QUICK_CHIPS.map((chip) => (
            <button
              key={chip.label}
              type="button"
              onClick={() => handleChip(chip)}
              className="rounded-full px-3 py-1.5 text-xs font-semibold transition"
              style={{
                border: '1px solid rgba(0,236,241,0.4)',
                color: '#00ECF1',
                background: 'rgba(0,236,241,0.06)',
              }}
            >
              {chip.label}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <form
        className="flex items-center gap-2 px-3 py-3"
        style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={inputDisabled}
          placeholder={inputDisabled ? 'warming up...' : 'ask us anything'}
          className="min-w-0 flex-1 rounded-full bg-transparent px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/35 disabled:opacity-60"
          style={{ border: '1px solid rgba(255,255,255,0.15)' }}
          aria-label="Type your message"
        />
        <button
          type="submit"
          disabled={inputDisabled || !input.trim()}
          aria-label="Send message"
          className="shrink-0 rounded-full p-2.5 transition disabled:opacity-40"
          style={{ background: '#00ECF1', color: '#080A09' }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M2 8h11M9 3.5L14 8l-5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </form>

      {/* Privacy note */}
      <div className="px-4 pb-2.5 text-center text-[10px] text-white/30">
        runs 100% in your browser — no cookies, no tracking, nothing leaves this device.
      </div>
    </div>
  );
}
