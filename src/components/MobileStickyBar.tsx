// Mobile-only sticky bottom bar — hidden on desktop (md+)
export default function MobileStickyBar() {
  return (
    <nav
      aria-label="Quick actions"
      className="grid grid-cols-3 md:hidden"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        background: '#080A09',
        borderTop: '1px solid #1f2120',
      }}
    >
      <a
        href="https://maps.google.com/?q=302+Park+Central+East+Springfield+MO"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 5,
          padding: '10px 4px 12px',
          color: 'rgba(255,255,255,0.6)',
          textDecoration: 'none',
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        <span style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Directions
        </span>
      </a>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 5,
          padding: '10px 4px 12px',
          color: 'rgba(255,255,255,0.4)',
          borderLeft: '1px solid #1f2120',
          borderRight: '1px solid #1f2120',
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
        <span style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Open Wed–Sun
        </span>
      </div>

      <a
        href="https://www.instagram.com/JAMIESSHOESS/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 5,
          padding: '10px 4px 12px',
          color: 'rgba(255,255,255,0.6)',
          textDecoration: 'none',
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
        </svg>
        <span style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Instagram
        </span>
      </a>
    </nav>
  )
}
