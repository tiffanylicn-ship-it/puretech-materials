'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LogoMark, LogoText } from '@/components/ui/Logo'

// ── Simplified dropdown config — label only, no icons, no sub-text ──
const NAV_ITEMS = [
  { href:'/home', label:'Home', dd:null },
  {
    href:'/products', label:'Products',
    dd:[
      { label:'Electronic Grade Solvents',     href:'/products?cat=electronic' },
      { label:'Process Acids (H₂SO₄, HCl…)',  href:'/products?cat=acid' },
      { label:'H₂O₂ & Oxidants',              href:'/products?cat=peroxide' },
      { label:'Bases & Developers (NH₄OH, TMAH)', href:'/products?cat=base' },
      { label:'Photoresist & Litho Solvents',  href:'/products?cat=photoresist' },
      { label:'Battery Chemicals',             href:'/products?cat=battery' },
      { label:'Laboratory & HPLC',             href:'/products?cat=lab' },
      { divider:true },
      { label:'View All 34+ Products →',       href:'/products' },
    ],
  },
  {
    href:'/applications', label:'Applications',
    dd:[
      { label:'Logic & Foundry',            href:'/applications#logic' },
      { label:'Memory — DRAM & NAND',       href:'/applications#memory' },
      { label:'Advanced Packaging',         href:'/applications#packaging' },
      { label:'EV Lithium Battery',         href:'/applications#battery' },
      { label:'Display & OLED',             href:'/applications#display' },
      { label:'Compound Semiconductor',     href:'/applications#compound' },
      { label:'HPLC & Pharma Lab',          href:'/applications#pharma' },
    ],
  },
  { href:'/blog', label:'Blog', dd:null },
  {
    href:'/about', label:'About',
    dd:[
      { label:'Company Overview',    href:'/about' },
      { label:'Manufacturing',       href:'/about#manufacturing' },
      { label:'Quality & Certs',     href:'/about#quality' },
      { divider:true },
      { label:'Contact Us →',        href:'/contact' },
    ],
  },
] as const

type DDItem = { label: string; href: string; divider?: never } | { divider: true; label?: never; href?: never }

export function Navbar() {
  const [scrolled, setScrolled]           = useState(false)
  const [mobileOpen, setMobileOpen]       = useState(false)
  const [expanded, setExpanded]           = useState<string|null>(null)
  const path = usePathname()

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', h, { passive:true })
    return () => window.removeEventListener('scroll', h)
  }, [])
  useEffect(() => { setMobileOpen(false); setExpanded(null) }, [path])

  const isActive = (href: string) =>
    path === href || (href !== '/home' && path.startsWith(href.split('?')[0]))

  // Nav text color — always clearly readable
  const navTextBase   = scrolled ? '#2C4160' : '#E8F0FA'
  const navTextHover  = scrolled ? '#0066CC' : '#FFFFFF'
  const navActiveBg   = scrolled ? '#EEF6FF' : 'rgba(255,255,255,0.14)'
  const navActiveClr  = scrolled ? '#0055CC' : '#FFFFFF'
  const navHoverBg    = scrolled ? '#F5F9FF' : 'rgba(255,255,255,0.10)'

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[1000] h-[68px] transition-all duration-300"
        style={{
          background:   scrolled ? 'rgba(10,22,40,0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
          boxShadow:    scrolled ? '0 4px 24px rgba(0,0,0,0.25)' : 'none',
        }}
      >
        <div className="max-w-site mx-auto px-6 h-full flex items-center justify-between">

          {/* Logo */}
          <Link href="/home" className="flex items-center gap-2.5 no-underline">
            <LogoMark />
            <LogoText light />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-0 list-none">
            {NAV_ITEMS.map(item => (
              <li key={item.href} className="nav-item relative">
                {item.dd ? (
                  <>
                    <Link href={item.href}
                      className="flex items-center gap-1 px-3.5 py-2.5 text-[13.5px] font-medium rounded-[8px] no-underline transition-all duration-150 select-none"
                      style={{
                        color:      isActive(item.href) ? navActiveClr : navTextBase,
                        background: isActive(item.href) ? navActiveBg  : 'transparent',
                      }}
                      onMouseEnter={e => {
                        if (!isActive(item.href)) {
                          (e.currentTarget as HTMLElement).style.color = navTextHover
                          ;(e.currentTarget as HTMLElement).style.background = navHoverBg
                        }
                      }}
                      onMouseLeave={e => {
                        if (!isActive(item.href)) {
                          (e.currentTarget as HTMLElement).style.color = navTextBase
                          ;(e.currentTarget as HTMLElement).style.background = 'transparent'
                        }
                      }}>
                      {item.label}
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" style={{ opacity:0.6, marginTop:1 }}>
                        <path d="M2 3.5l3.5 4 3.5-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </Link>

                    {/* Dropdown — dark, clean, label-only */}
                    <div className="nav-dd">
                      {(item.dd as readonly DDItem[]).map((d, i) => {
                        if ('divider' in d && d.divider) {
                          return <div key={i} className="nav-dd-divider" />
                        }
                        const di = d as { label:string; href:string }
                        return (
                          <Link key={i} href={di.href}>{di.label}</Link>
                        )
                      })}
                    </div>
                  </>
                ) : (
                  <Link href={item.href}
                    className="block px-3.5 py-2.5 text-[13.5px] font-medium rounded-[8px] no-underline transition-all duration-150"
                    style={{
                      color:      isActive(item.href) ? navActiveClr : navTextBase,
                      background: isActive(item.href) ? navActiveBg  : 'transparent',
                    }}
                    onMouseEnter={e => {
                      if (!isActive(item.href)) {
                        (e.currentTarget as HTMLElement).style.color = navTextHover
                        ;(e.currentTarget as HTMLElement).style.background = navHoverBg
                      }
                    }}
                    onMouseLeave={e => {
                      if (!isActive(item.href)) {
                        (e.currentTarget as HTMLElement).style.color = navTextBase
                        ;(e.currentTarget as HTMLElement).style.background = 'transparent'
                      }
                    }}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}

            <li>
              <Link href="/contact"
                className="block px-5 py-2.5 text-[13.5px] font-semibold rounded-[8px] no-underline ml-2 transition-all duration-200 hover:-translate-y-0.5"
                style={{ background:'#0066CC', color:'white', boxShadow:'0 0 0 1px rgba(255,255,255,0.15)' }}
                onMouseEnter={e=>(e.currentTarget as HTMLElement).style.background='#1A7FEE'}
                onMouseLeave={e=>(e.currentTarget as HTMLElement).style.background='#0066CC'}>
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu">
            {[0,1,2].map(i => (
              <span key={i} className="block w-6 h-0.5 rounded-full transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.9)',
                  transform: i===0&&mobileOpen ? 'rotate(45deg) translateY(7px)' : i===2&&mobileOpen ? 'rotate(-45deg) translateY(-7px)' : '',
                  opacity: i===1&&mobileOpen ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile drawer — dark theme consistent */}
      <div
        className="md:hidden fixed top-[68px] left-0 right-0 bottom-0 z-[999] overflow-y-auto transition-transform duration-300"
        style={{ background:'#0A1628', transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)' }}>
        <div className="p-4 flex flex-col gap-0.5">
          {NAV_ITEMS.map(item => (
            <div key={item.href}>
              {item.dd ? (
                <>
                  <button
                    onClick={() => setExpanded(expanded === item.href ? null : item.href)}
                    className="w-full flex items-center justify-between px-4 py-3.5 text-[15px] font-medium rounded-[8px] bg-transparent border-none cursor-pointer transition-all"
                    style={{ color:'rgba(255,255,255,0.85)', borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
                    {item.label}
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                      style={{ transform:expanded===item.href?'rotate(180deg)':'', transition:'transform .2s', opacity:0.5 }}>
                      <path d="M2 4.5l4.5 4.5 4.5-4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </button>
                  {expanded === item.href && (
                    <div className="pl-2 pb-1">
                      {(item.dd as readonly DDItem[]).map((d, i) => {
                        if ('divider' in d && d.divider) return <div key={i} className="nav-dd-divider mx-4 my-1" />
                        const di = d as { label:string; href:string }
                        return (
                          <Link key={i} href={di.href}
                            className="block px-4 py-2.5 text-[13.5px] rounded-[7px] no-underline transition-all"
                            style={{ color:'rgba(255,255,255,0.65)' }}
                            onMouseEnter={e=>(e.currentTarget as HTMLElement).style.color='#fff'}
                            onMouseLeave={e=>(e.currentTarget as HTMLElement).style.color='rgba(255,255,255,0.65)'}>
                            {di.label}
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </>
              ) : (
                <Link href={item.href}
                  className="block px-4 py-3.5 text-[15px] font-medium no-underline rounded-[8px] transition-all"
                  style={{ color:'rgba(255,255,255,0.85)', borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <div className="mt-4 px-1">
            <Link href="/contact"
              className="block py-3.5 text-[15px] font-semibold text-center rounded-[10px] no-underline"
              style={{ background:'#0066CC', color:'white' }}>
              Contact Us →
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
