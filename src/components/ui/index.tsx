import { ReactNode } from 'react'
import Link from 'next/link'
import { GRADE_META, type GradeKey } from '@/lib/products'

export function Container({ children, className='' }:{ children:ReactNode; className?:string }) {
  return <div className={`max-w-site mx-auto px-6 ${className}`}>{children}</div>
}

export function Eyebrow({ children, light=false }:{ children:ReactNode; light?:boolean }) {
  return (
    <div className="flex items-center gap-2.5 mb-3">
      <div className="w-8 h-[3px] rounded-full flex-shrink-0" style={{ background:'linear-gradient(90deg,#0066CC,#00C2FF)' }} />
      <p className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${light ? 'text-[#22D3FF]' : 'text-[#0055CC]'}`}>
        {children}
      </p>
    </div>
  )
}

export function SectionTitle({ children, light=false, center=false, className='' }:{
  children:ReactNode; light?:boolean; center?:boolean; className?:string
}) {
  return (
    <h2 className={`font-serif text-[clamp(26px,3.5vw,42px)] leading-[1.12] tracking-[-0.5px]
      ${light ? 'text-white' : 'text-[#0A1628]'}
      ${center ? 'text-center' : ''} ${className}`}>
      {children}
    </h2>
  )
}

export function SectionSub({ children, light=false, center=false, className='' }:{
  children:ReactNode; light?:boolean; center?:boolean; className?:string
}) {
  return (
    <p className={`text-[16px] leading-[1.75] mt-3 max-w-[560px]
      ${light ? 'text-[rgba(255,255,255,0.68)]' : 'text-[#2C4160]'}
      ${center ? 'mx-auto text-center' : ''} ${className}`}>
      {children}
    </p>
  )
}

export function BtnPrimary({ children, href, onClick, className='' }:{
  children:ReactNode; href?:string; onClick?:()=>void; className?:string
}) {
  const cls = `inline-flex items-center gap-2 bg-[#0066CC] text-white px-6 py-3.5 rounded-[8px] text-[14px] font-semibold no-underline transition-all duration-200 hover:bg-[#1A7FEE] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,102,204,0.32)] cursor-pointer border-none whitespace-nowrap ${className}`
  if (href) return <Link href={href} className={cls}>{children}</Link>
  return <button onClick={onClick} className={cls}>{children}</button>
}

export function BtnSecondary({ children, href, onClick, className='' }:{
  children:ReactNode; href?:string; onClick?:()=>void; className?:string
}) {
  const cls = `inline-flex items-center gap-2 bg-white text-[#0055CC] border border-[rgba(0,102,204,0.3)] px-6 py-3.5 rounded-[8px] text-[14px] font-semibold no-underline transition-all duration-200 hover:border-[#0066CC] hover:bg-[#EEF6FF] hover:-translate-y-0.5 cursor-pointer whitespace-nowrap ${className}`
  if (href) return <Link href={href} className={cls}>{children}</Link>
  return <button onClick={onClick} className={cls}>{children}</button>
}

export function BtnGhost({ children, href, onClick, className='' }:{
  children:ReactNode; href?:string; onClick?:()=>void; className?:string
}) {
  const cls = `inline-flex items-center gap-2 bg-transparent text-white border border-white/25 px-6 py-3.5 rounded-[8px] text-[14px] font-medium no-underline transition-all duration-200 hover:bg-white/10 hover:border-white/45 hover:text-white cursor-pointer whitespace-nowrap ${className}`
  if (href) return <Link href={href} className={cls}>{children}</Link>
  return <button onClick={onClick} className={cls}>{children}</button>
}

export function GradeChip({ g, tiny=false }:{ g:GradeKey; tiny?:boolean }) {
  const m = GRADE_META[g]
  if (!m) return null
  const lbl = g==='HPLC_PREP'?'HPLC-P':g==='HPLC_GRADIENT'?'HPLC-G':g==='LC_MS'?'LC-MS':g
  return (
    <span className={`gbadge ${tiny?'text-[8.5px] px-1.5 py-[1px]':''}`}
      style={{ background:`${m.color}1A`, color:m.color, border:`1px solid ${m.color}44` }}>
      {lbl}
    </span>
  )
}

export function GradeBadge({ g }:{ g:GradeKey }) {
  const m = GRADE_META[g]
  if (!m) return null
  return <span className="gbadge" style={{ background:m.color, color:m.text }}>{m.label}</span>
}

export function CtaBanner({ label, title, subtitle, p1, h1, p2, h2 }:{
  label:string; title:ReactNode; subtitle:string
  p1:string; h1:string; p2:string; h2:string
}) {
  return (
    <section className="relative overflow-hidden py-28"
      style={{ background:'linear-gradient(135deg,#030B18 0%,#040D1E 50%,#091830 100%)' }}>
      <div className="wafer-bg absolute inset-0 opacity-35 pointer-events-none" />
      <div className="glow bg-[#0055CC]/18 w-[560px] h-[560px]"
        style={{ top:'50%',left:'50%',transform:'translate(-50%,-50%)' }} />
      <Container className="relative z-10 text-center">
        <Eyebrow light>{label}</Eyebrow>
        <SectionTitle light center className="max-w-[600px] mx-auto">{title}</SectionTitle>
        <p className="text-[16px] mt-4 mb-10 max-w-[480px] mx-auto leading-[1.72]"
          style={{ color:'rgba(255,255,255,0.62)' }}>
          {subtitle}
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <BtnPrimary href={h1}>{p1}</BtnPrimary>
          <BtnGhost href={h2}>{p2}</BtnGhost>
        </div>
      </Container>
    </section>
  )
}
