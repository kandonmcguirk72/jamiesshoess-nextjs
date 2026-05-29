'use client'

import { useEffect } from 'react'
import { useCart } from '@/lib/cart-context'

export default function CartDrawer() {
  const { cart, removeFromCart, isCartOpen, closeCart } = useCart()
  const subtotal = cart.reduce((s, i) => s + i.price, 0)

  useEffect(() => {
    document.body.style.overflow = isCartOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isCartOpen])

  return (
    <>
      {isCartOpen && (
        <div
          className="fixed inset-0 z-[400]"
          style={{ background: 'rgba(8,10,9,.6)', backdropFilter: 'blur(2px)' }}
          onClick={closeCart}
        />
      )}
      <aside
        className="fixed top-0 right-0 bottom-0 z-[401] flex flex-col"
        style={{
          width: 380,
          maxWidth: '94vw',
          background: '#080A09',
          boxShadow: '-8px 0 40px rgba(0,0,0,.7)',
          transform: isCartOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform .28s cubic-bezier(.4,0,.2,1)',
        }}
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-[18px] border-b border-white/[0.08]">
          <span
            className="font-display italic font-black uppercase text-minted"
            style={{ fontSize: 22, letterSpacing: '0.01em' }}
          >
            YOUR CART ({cart.length})
          </span>
          <button
            onClick={closeCart}
            className="border border-white/20 rounded text-white/60 w-8 h-8 flex items-center justify-center text-lg hover:text-white transition-colors"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-3 pb-10">
              <span className="text-5xl" role="img" aria-label="sneaker">👟</span>
              <span className="font-sans font-bold text-[13px] tracking-[0.12em] uppercase text-white/30">
                Your cart is empty
              </span>
            </div>
          ) : (
            cart.map((item, i) => (
              <div key={i} className="flex gap-3.5 items-center py-3.5 border-b border-white/[0.07]">
                <div
                  className="w-[54px] h-[54px] flex items-center justify-center text-2xl rounded flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,.06)' }}
                >
                  {item.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-sans font-bold text-[12px] tracking-[0.06em] uppercase text-white leading-tight truncate">
                    {item.name}
                  </div>
                  <div className="font-sans font-semibold text-[10px] tracking-[0.12em] uppercase text-white/35 mt-0.5">
                    SIZE: {item.size}
                  </div>
                </div>
                <span className="font-display italic font-black text-[18px] text-white flex-shrink-0">
                  ${item.price.toFixed(2)}
                </span>
                <button
                  onClick={() => removeFromCart(i)}
                  className="text-white/25 hover:text-white/60 text-lg leading-none transition-colors flex-shrink-0"
                  title="Remove"
                >
                  ×
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="px-5 py-4 border-t border-white/[0.08] flex flex-col gap-2.5">
            <div className="flex justify-between items-baseline">
              <span className="font-sans font-bold text-[11px] tracking-[0.14em] uppercase text-white/40">
                Subtotal
              </span>
              <span className="font-display italic font-black text-[26px] text-white">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <button
              className="w-full font-display italic font-black text-[20px] uppercase text-leather py-3.5 rounded-sm transition-colors"
              style={{ background: '#00ECF1', boxShadow: '0 0 20px rgba(0,236,241,.35)', letterSpacing: '0.02em' }}
            >
              CHECKOUT
            </button>
            <p className="font-sans font-semibold text-[10px] tracking-[0.1em] uppercase text-white/30 text-center leading-[1.6]">
              Select LOCAL PICKUP for free pickup at the store<br />
              302 Park Central East · Springfield, MO
            </p>
          </div>
        )}
      </aside>
    </>
  )
}
