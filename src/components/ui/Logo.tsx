export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <div style={{ width:size, height:size, background:'linear-gradient(135deg,#0055CC,#00C2FF)', borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
      <svg width={size*0.58} height={size*0.58} viewBox="0 0 22 22" fill="none">
        <path d="M11 2L19 6.5V15.5L11 20L3 15.5V6.5L11 2Z" stroke="white" strokeWidth="1.4"/>
        <path d="M11 6.5V15.5M7 9L11 6.5L15 9" stroke="white" strokeWidth="1.2"/>
        <circle cx="11" cy="11" r="2" fill="rgba(255,255,255,0.25)"/>
      </svg>
    </div>
  )
}
export function LogoText({ light=false }: { light?:boolean }) {
  return (
    <div className="leading-none">
      <span className="text-[17px] font-bold tracking-[-0.4px]" style={{ color: light ? '#fff' : '#040D1E' }}>
        Pure<span style={{ color:'#0066CC' }}>Tech</span>
      </span>
      <div className="text-[9px] font-semibold uppercase tracking-[0.2em] mt-0.5" style={{ color: light ? 'rgba(255,255,255,0.4)' : '#6B85A0' }}>
        Materials
      </div>
    </div>
  )
}
