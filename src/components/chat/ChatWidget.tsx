'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// The panel (and everything it pulls in — worker, model, KB, Fuse) only
// loads on first open. Zero impact on initial page weight.
const ChatPanel = dynamic(() => import('./ChatPanel'), { ssr: false });

export default function ChatWidget(): React.ReactElement | null {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [everOpened, setEverOpened] = useState(false);

  // Reveal the launcher only once the page is idle so it never competes
  // with LCP/interactivity.
  useEffect(() => {
    const show = (): void => setVisible(true);
    if (typeof window.requestIdleCallback === 'function') {
      const id = window.requestIdleCallback(show, { timeout: 4000 });
      return () => window.cancelIdleCallback(id);
    }
    const id = window.setTimeout(show, 2500);
    return () => window.clearTimeout(id);
  }, []);

  if (!visible) return null;

  return (
    <>
      {everOpened && open && <ChatPanel onClose={() => setOpen(false)} />}
      {!open && (
        <button
          type="button"
          aria-label="Open chat"
          onClick={() => {
            setOpen(true);
            setEverOpened(true);
          }}
          className="group fixed bottom-[4.75rem] right-4 z-[205] flex h-14 w-14 items-center justify-center rounded-full transition-shadow duration-300 focus:outline-none md:bottom-5 md:right-5"
          style={{
            background: '#080A09',
            border: '2px solid #00ECF1',
            boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
            marginBottom: 'env(safe-area-inset-bottom)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 0 24px rgba(243,34,179,0.55)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
          }}
          onFocus={(e) => {
            e.currentTarget.style.boxShadow = '0 0 24px rgba(243,34,179,0.55)';
          }}
          onBlur={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M4 6a3 3 0 013-3h10a3 3 0 013 3v7a3 3 0 01-3 3H9l-4.2 3.36A1 1 0 013 18.58V6z"
              fill="#00ECF1"
            />
            <circle cx="9" cy="9.5" r="1.2" fill="#080A09" />
            <circle cx="12.5" cy="9.5" r="1.2" fill="#080A09" />
            <circle cx="16" cy="9.5" r="1.2" fill="#080A09" />
          </svg>
        </button>
      )}
    </>
  );
}
