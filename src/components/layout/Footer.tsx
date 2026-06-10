import Link from 'next/link'
import { LogoMark, LogoText } from '@/components/ui/Logo'

const COLS = {
  'Products': [
    { label:'Electronic Grade Solvents',    href:'/products?cat=electronic' },
    { label:'Process Acids (H₂SO₄, HCl)',  href:'/products?cat=acid' },
    { label:'H₂O₂ & Oxidants',            href:'/products?cat=peroxide' },
    { label:'NH₄OH / TMAH / Bases',        href:'/products?cat=base' },
    { label:'Photoresist & Litho',          href:'/products?cat=photoresist' },
    { label:'Battery Chemicals',            href:'/products?cat=battery' },
    { label:'View All 34+ Products',        href:'/products' },
  ],
  'Applications': [
    { label:'Logic / Foundry (<3nm)',        href:'/applications#logic' },
    { label:'Memory (DRAM / NAND)',          href:'/applications#memory' },
    { label:'Advanced Packaging',            href:'/applications#packaging' },
    { label:'EV Li-Battery',                 href:'/applications#battery' },
    { label:'Display & OLED',                href:'/applications#display' },
    { label:'HPLC & Pharma Lab',             href:'/applications#pharma' },
  ],
  'Resources': [
    { label:'Technical Blog',     href:'/blog' },
    { label:'IPA Specification Guide', href:'/blog/electronic-grade-ipa-semiconductor-wafer-cleaning' },
    { label:'PGMEA Litho Guide',  href:'/blog/pgmea-photoresist-solvent-euv-arf-lithography' },
    { label:'SEMI C1 Standard',   href:'/blog/semi-c1-standard-electronic-chemicals-semiconductor' },
  ],
  'Company': [
    { label:'About Us',        href:'/about' },
    { label:'Quality System',  href:'/about#quality' },
    { label:'Manufacturing',   href:'/about#manufacturing' },
    { label:'Contact Us',      href:'/contact' },
    { label:'Request Sample',  href:'/contact' },
  ],
}

const CERTS = ['ISO 9001:2015','SEMI C1','SEMI C12','ISO 14001','REACH/RoHS']

export function Footer() {
  return (
    <footer style={{ background:'#020C1B' }}>
      {/* Cert strip */}
      <div className="py-7" style={{ borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-site mx-auto px-6 flex flex-wrap items-center justify-between gap-5">
          <p className="text-[13px] leading-[1.6] max-w-[420px]" style={{ color:'rgba(255,255,255,0.45)' }}>
            Ultra-pure electronic chemicals, photoresist solvents, battery chemicals, and analytical grade reagents — engineered for the world's most demanding semiconductor and energy manufacturing processes.
          </p>
          <div className="flex flex-wrap gap-2">
            {CERTS.map(c => (
              <span key={c} className="text-[10px] font-mono font-bold uppercase tracking-[0.08em] px-2.5 py-1 rounded-[4px]"
                style={{ background:'rgba(0,102,204,0.15)', color:'#4BAAF5', border:'1px solid rgba(0,102,204,0.22)' }}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-site mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link href="/home" className="flex items-center gap-2.5 no-underline mb-4">
              <LogoMark /><LogoText light />
            </Link>
            <p className="text-[13px] leading-[1.68] mb-5" style={{ color:'rgba(255,255,255,0.42)' }}>
              Semiconductor wet chemicals, photoresist solvents, and analytical reagents.
              ISO 9001 · SEMI C1/C12 · 100,000 t/a production capacity.
            </p>
            <div className="flex gap-2 flex-wrap">
              {['LinkedIn','Email','WeChat'].map(s => (
                <span key={s}
                  className="text-[11px] px-2.5 py-1.5 rounded-[6px] cursor-pointer"
                  style={{ color:'rgba(255,255,255,0.40)', border:'1px solid rgba(255,255,255,0.10)' }}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {Object.entries(COLS).map(([section, links]) => (
            <div key={section}>
              <h5 className="text-[10px] font-bold uppercase tracking-[0.14em] mb-4"
                style={{ color:'rgba(255,255,255,0.28)' }}>
                {section}
              </h5>
              <ul className="space-y-2.5 list-none">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href}
                      className="text-[13px] no-underline transition-colors duration-200 hover:text-white"
                      style={{ color:'rgba(255,255,255,0.52)' }}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderTop:'1px solid rgba(255,255,255,0.07)' }}>
          <p className="text-[12px]" style={{ color:'rgba(255,255,255,0.28)' }}>
            © {new Date().getFullYear()} PureTech Materials Inc. All rights reserved.
          </p>
          <div className="flex gap-5">
            {['Privacy Policy','Terms of Use','Safety Data Sheets'].map(t => (
              <span key={t} className="text-[12px] cursor-pointer hover:text-white/55 transition-colors"
                style={{ color:'rgba(255,255,255,0.28)' }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
