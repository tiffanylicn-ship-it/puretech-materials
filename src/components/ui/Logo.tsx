// PureTech Materials Logo
// Light variant (on dark bg): white text
// Dark variant (on white/light bg): dark text + blue accent — fully visible

export function LogoMark({ size = 36, light = false }: { size?: number; light?: boolean }) {
  return (
    <div style={{
      width: size, height: size, flexShrink: 0,
      background: 'linear-gradient(135deg,#0055CC 0%,#0099E8 100%)',
      borderRadius: Math.round(size * 0.22),
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: light ? 'none' : '0 2px 8px rgba(0,102,204,0.35)',
    }}>
      {/* Hexagon atom / crystal lattice icon */}
      <svg width={size * 0.62} height={size * 0.62} viewBox="0 0 24 24" fill="none">
        {/* Outer hexagon */}
        <path d="M12 2L20.5 7V17L12 22L3.5 17V7L12 2Z"
          stroke="white" strokeWidth="1.6" strokeLinejoin="round" fill="rgba(255,255,255,0.12)"/>
        {/* Inner cross lines */}
        <line x1="12" y1="2"  x2="12" y2="22" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8"/>
        <line x1="3.5" y1="7"  x2="20.5" y2="17" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8"/>
        <line x1="20.5" y1="7" x2="3.5"  y2="17" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8"/>
        {/* Center atom */}
        <circle cx="12" cy="12" r="2.8" fill="white" opacity="0.95"/>
        {/* Corner nodes */}
        <circle cx="12"   cy="2"  r="1.2" fill="white" opacity="0.7"/>
        <circle cx="12"   cy="22" r="1.2" fill="white" opacity="0.7"/>
        <circle cx="20.5" cy="7"  r="1.2" fill="white" opacity="0.7"/>
        <circle cx="3.5"  cy="7"  r="1.2" fill="white" opacity="0.7"/>
        <circle cx="20.5" cy="17" r="1.2" fill="white" opacity="0.7"/>
        <circle cx="3.5"  cy="17" r="1.2" fill="white" opacity="0.7"/>
      </svg>
    </div>
  )
}

export function LogoText({ light = false }: { light?: boolean }) {
  return (
    <div className="leading-none select-none">
      <div className="flex items-baseline gap-0">
        <span style={{
          fontSize: 18, fontWeight: 800, letterSpacing: '-0.5px',
          fontFamily: "'Outfit',sans-serif",
          color: light ? '#FFFFFF' : '#0A1628',
        }}>
          Pure
        </span>
        <span style={{
          fontSize: 18, fontWeight: 800, letterSpacing: '-0.5px',
          fontFamily: "'Outfit',sans-serif",
          color: '#0066CC',
        }}>
          Tech
        </span>
      </div>
      <div style={{
        fontSize: 9, fontWeight: 700, letterSpacing: '0.22em',
        textTransform: 'uppercase',
        marginTop: 2,
        color: light ? 'rgba(255,255,255,0.42)' : '#506880',
        fontFamily: "'Outfit',sans-serif",
      }}>
        Materials
      </div>
    </div>
  )
}

// Combined logo for use in light backgrounds (e.g. footer light, auth pages)
export function Logo({ size = 36, light = false }: { size?: number; light?: boolean }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap: Math.round(size * 0.28) }}>
      <LogoMark size={size} light={light} />
      <LogoText light={light} />
    </div>
  )
}
