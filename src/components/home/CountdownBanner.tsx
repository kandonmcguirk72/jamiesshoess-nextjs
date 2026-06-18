'use client'

import { useEffect, useState } from 'react'

function getNextDropTarget(): Date {
  const now = new Date()
  const dayOfWeek = now.getDay() // 0=Sun, 6=Sat
  const daysUntilSat = (6 - dayOfWeek + 7) % 7
  const sat = new Date(now)
  sat.setDate(now.getDate() + daysUntilSat)
  sat.setHours(12, 0, 0, 0)
  if (sat.getTime() <= now.getTime()) {
    sat.setDate(sat.getDate() + 7)
  }
  return sat
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

export default function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hrs: 0, mins: 0, secs: 0, live: false })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    function tick() {
      const target = getNextDropTarget()
      const diff = target.getTime() - Date.now()
      if (diff <= 0) {
        setTimeLeft({ days: 0, hrs: 0, mins: 0, secs: 0, live: true })
        return
      }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hrs: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
        secs: Math.floor((diff % 60000) / 1000),
        live: false,
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  if (!mounted) return null

  return (
    <div
      style={{
        width: '100%',
        background: '#0d0f0e',
        borderTop: '1px solid #1f2120',
        borderBottom: '1px solid #1f2120',
        padding: 'clamp(14px,2.5vw,20px) clamp(16px,4vw,52px)',
      }}
    >
      <div
        style={{
          maxWidth: 1260,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '12px 28px',
        }}
      >
        {timeLeft.live ? (
          <span
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontStyle: 'italic',
              fontWeight: 900,
              fontSize: 'clamp(16px,2.5vw,22px)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: '#00E5FF',
            }}
          >
            🔥 DROP IS LIVE — IN STORE NOW
          </span>
        ) : (
          <>
            <span
              style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontStyle: 'italic',
                fontWeight: 900,
                fontSize: 'clamp(13px,2vw,16px)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'rgba(255,255,255,0.5)',
                whiteSpace: 'nowrap',
              }}
            >
              Next Drop — Saturday 12:00 PM
            </span>

            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              {[
                { val: timeLeft.days, label: 'days' },
                { val: timeLeft.hrs, label: 'hrs' },
                { val: timeLeft.mins, label: 'mins' },
                { val: timeLeft.secs, label: 'secs' },
              ].map((unit, i) => (
                <div key={unit.label} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ textAlign: 'center' }}>
                    <div
                      style={{
                        fontFamily: 'monospace',
                        fontVariantNumeric: 'tabular-nums',
                        fontWeight: 700,
                        fontSize: 'clamp(22px,3.5vw,32px)',
                        color: '#00E5FF',
                        lineHeight: 1,
                      }}
                    >
                      {pad(unit.val)}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Rajdhani',system-ui,sans-serif",
                        fontWeight: 700,
                        fontSize: 9,
                        textTransform: 'uppercase',
                        letterSpacing: '0.14em',
                        color: 'rgba(255,255,255,0.25)',
                        marginTop: 3,
                      }}
                    >
                      {unit.label}
                    </div>
                  </div>
                  {i < 3 && (
                    <span style={{ color: 'rgba(0,229,255,0.4)', fontSize: 22, fontWeight: 700, lineHeight: 1, marginTop: -6 }}>:</span>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
