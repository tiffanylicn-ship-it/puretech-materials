'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Container, Eyebrow, GradeChip } from '@/components/ui/index'
import { allProducts, type Product, type GradeKey } from '@/lib/products'

const CATS = [
  { key:'all',         label:'All Products',              count: 0 },
  { key:'electronic',  label:'Electronic Grade Solvents', count: 0 },
  { key:'acid',        label:'Process Acids',             count: 0 },
  { key:'peroxide',    label:'H₂O₂ & Oxidants',          count: 0 },
  { key:'base',        label:'Bases & Developers',        count: 0 },
  { key:'photoresist', label:'Photoresist / Litho',       count: 0 },
  { key:'battery',     label:'Battery Chemicals',         count: 0 },
  { key:'lab',         label:'Lab & HPLC',                count: 0 },
  { key:'general',     label:'General Purpose',           count: 0 },
] as const

const ALL_GRADES: GradeKey[] = [
  'G2','G3','G4','G5','PHARMA','HPLC_PREP','HPLC_GRADIENT',
  'HPLC','LC_MS','ANHYDROUS','AR','GR','INDUSTRIAL','FOOD','MEDICAL',
]
const GLABEL: Record<string, string> = {
  G2:'G2', G3:'G3', G4:'G4', G5:'G5',
  PHARMA:'Pharma', HPLC_PREP:'HPLC-P', HPLC_GRADIENT:'HPLC-G',
  HPLC:'HPLC', LC_MS:'LC-MS', ANHYDROUS:'Anhydrous',
  AR:'AR', GR:'GR', INDUSTRIAL:'Industrial', FOOD:'Food', MEDICAL:'Medical',
}

// Category colors for accent
const CAT_COLOR: Record<string, string> = {
  electronic: '#0066CC', acid: '#DC2626', peroxide: '#D97706',
  base: '#059669', photoresist: '#7C3AED', battery: '#0284C7',
  lab: '#4C1D95', general: '#475569',
}

function Card({ p }: { p: Product }) {
  const eg = p.grades.filter(g => g.startsWith('G'))
  const og = p.grades.filter(g => !g.startsWith('G'))
  const show = eg.length > 0 ? eg.slice(0, 4) : og.slice(0, 3)
  const accentColor = CAT_COLOR[p.category] ?? '#0066CC'

  return (
    <Link href={`/product/${p.id}`}
      className="p-card flex flex-col bg-white border border-[rgba(0,102,204,0.1)] rounded-[14px] p-5 no-underline h-full"
      style={{ boxShadow: '0 1px 3px rgba(4,13,30,0.04)' }}>

      {/* Category accent bar */}
      <div className="h-0.5 -mx-5 -mt-5 mb-4 rounded-t-[14px]"
        style={{ background: `linear-gradient(90deg,${accentColor},${accentColor}55)` }} />

      <div className="flex items-start justify-between mb-3">
        <div className="flex flex-wrap gap-1.5">
          {show.map(g => <GradeChip key={g} g={g as GradeKey} />)}
          {p.grades.length > 4 && (
            <span className="text-[9px] font-mono self-center" style={{ color: '#8BA8C0' }}>+{p.grades.length - 4}</span>
          )}
        </div>
        <span className="text-[9.5px] font-mono bg-[#F2F6FB] border border-[rgba(0,102,204,0.1)] px-1.5 py-0.5 rounded flex-shrink-0"
          style={{ color: '#8BA8C0' }}>
          #{p.no.toString().padStart(2, '0')}
        </span>
      </div>

      <h3 className="text-[14.5px] font-semibold text-[#0A1628] mb-0.5 leading-snug">{p.nameEn}</h3>
      <p className="text-[11px] font-mono mb-2" style={{ color: '#8BA8C0' }}>{p.formula}</p>
      <p className="text-[12.5px] text-[#3A5570] leading-[1.55] flex-1 line-clamp-2">{p.tagline}</p>

      <div className="mt-4 pt-3.5 flex items-center justify-between"
        style={{ borderTop: '1px solid rgba(0,102,204,0.07)' }}>
        <div>
          <p className="text-[9.5px] uppercase tracking-[0.08em] font-semibold mb-0.5" style={{ color: '#8BA8C0' }}>CAS</p>
          <p className="text-[12px] font-mono font-semibold text-[#0A1628]">{p.cas}</p>
        </div>
        <span className="text-[12px] font-semibold text-[#0066CC] flex items-center gap-0.5">
          Spec
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path d="M1.5 5.5h8M5.5 2l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </span>
      </div>
    </Link>
  )
}

export default function ProductsClient() {
  const params = useSearchParams()
  const [cat, setCat]     = useState((params.get('cat') ?? 'all') as string)
  const [grade, setGrade] = useState('all')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    let list = cat === 'all' ? allProducts : allProducts.filter(p => p.category === cat)
    if (grade !== 'all') list = list.filter(p => p.grades.includes(grade as GradeKey))
    if (query.trim()) {
      const q = query.toLowerCase()
      list = list.filter(p =>
        p.nameEn.toLowerCase().includes(q) ||
        p.cas.includes(q) || p.formula.toLowerCase().includes(q) ||
        p.semiApps.some(a => a.toLowerCase().includes(q)) ||
        p.subcategory.toLowerCase().includes(q)
      )
    }
    return list
  }, [cat, grade, query])

  const btnBase = 'px-3.5 py-1.5 rounded-full text-[12.5px] font-medium transition-all duration-200 cursor-pointer border'
  const gbtnBase = 'px-2.5 py-1 rounded-[6px] text-[11px] font-mono font-semibold cursor-pointer border transition-all'

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#020C1B 0%,#040D1E 60%,#071629 100%)' }}>
        <div className="wafer-bg absolute inset-0 opacity-25 pointer-events-none" />
        <div className="glow bg-[#0055CC]/18 w-[500px] h-[340px]"
          style={{ top: 0, left: '33%', transform: 'translateX(-50%)' }} />
        <Container className="relative z-10">
          <Eyebrow light>Product Catalog</Eyebrow>
          <h1 className="font-serif text-[clamp(30px,4vw,50px)] text-white leading-[1.12] mb-3 tracking-[-0.5px]">
            {allProducts.length}+ Products · 8 Categories
          </h1>
          <p className="text-[15.5px] max-w-[560px] leading-[1.7] mb-7" style={{ color: 'rgba(255,255,255,0.58)' }}>
            Electronic grade solvents, process acids, hydrogen peroxide, ammonium hydroxide, TMAH, photoresist solvents, and battery chemicals — complete wet chemical portfolio with G2–G5 SEMI certification.
          </p>

          {/* Category highlights */}
          <div className="flex flex-wrap gap-2 mb-7">
            {[
              { label: 'Electronic Grade IPA G5', color: '#0066CC' },
              { label: 'H₂O₂ 30% G5', color: '#D97706' },
              { label: 'NH₄OH G5', color: '#059669' },
              { label: 'TMAH 2.38% G4', color: '#7C3AED' },
              { label: 'PGMEA G5', color: '#6D28D9' },
              { label: 'DMC G5 Battery', color: '#0284C7' },
            ].map(({ label, color }) => (
              <span key={label} className="font-mono text-[11px] px-2.5 py-1 rounded-[5px] font-semibold"
                style={{ background: `${color}22`, color, border: `1px solid ${color}40` }}>
                {label}
              </span>
            ))}
          </div>

          {/* Search */}
          <div className="relative max-w-[520px]">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2" width="16" height="16"
              viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input value={query} onChange={e => setQuery(e.target.value)}
              placeholder="Search by name, CAS, formula, application…"
              className="w-full pl-10 pr-4 py-3 rounded-[10px] text-[13.5px] text-white outline-none"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', caretColor: '#4BAAF5' }} />
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          {/* Category tabs */}
          <div className="flex gap-2 flex-wrap mb-3">
            {CATS.map(c => {
              const count = c.key === 'all' ? allProducts.length : allProducts.filter(p => p.category === c.key).length
              return (
                <button key={c.key} onClick={() => { setCat(c.key); setGrade('all') }}
                  className={btnBase}
                  style={{
                    background:  cat === c.key ? '#0066CC' : 'white',
                    color:       cat === c.key ? 'white' : '#2C4160',
                    borderColor: cat === c.key ? '#0066CC' : 'rgba(0,102,204,0.18)',
                  }}>
                  {c.label}
                  <span className="ml-1.5 text-[11px] opacity-55">({count})</span>
                </button>
              )
            })}
          </div>

          {/* Grade filter */}
          <div className="flex gap-1.5 flex-wrap pb-5 mb-5"
            style={{ borderBottom: '1px solid rgba(0,102,204,0.08)' }}>
            <button onClick={() => setGrade('all')} className={gbtnBase}
              style={{
                background:  grade === 'all' ? '#EEF4FF' : 'transparent',
                color:       grade === 'all' ? '#0055CC' : '#506880',
                borderColor: grade === 'all' ? '#0066CC' : 'rgba(0,102,204,0.15)',
              }}>
              All Grades
            </button>
            {ALL_GRADES.map(g => (
              <button key={g} onClick={() => setGrade(g === grade ? 'all' : g)} className={gbtnBase}
                style={{
                  background:  grade === g ? '#EEF4FF' : 'transparent',
                  color:       grade === g ? '#0055CC' : '#506880',
                  borderColor: grade === g ? '#0066CC' : 'rgba(0,102,204,0.12)',
                }}>
                {GLABEL[g]}
              </button>
            ))}
          </div>

          {/* Result count + export hint */}
          <div className="flex items-center justify-between mb-5">
            <p className="text-[13px]" style={{ color: '#506880' }}>
              <strong className="text-[#0A1628] font-semibold">{filtered.length}</strong> products found
            </p>
            <Link href="/contact"
              className="text-[12.5px] font-semibold text-[#0066CC] no-underline hover:underline flex items-center gap-1">
              Request bulk RFQ for multiple products →
            </Link>
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[15px]" style={{ color: '#8BA8C0' }}>
                No products match. Try a different keyword or clear filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filtered.map(p => <Card key={p.id} p={p} />)}
            </div>
          )}

          {/* Bottom CTA */}
          <div className="mt-14 rounded-[18px] p-8 text-center"
            style={{ background: 'linear-gradient(135deg,#040D1E,#071429)', border: '1px solid rgba(0,102,204,0.2)' }}>
            <h3 className="font-serif text-[22px] text-white mb-2">Need a Custom Grade or Packaging?</h3>
            <p className="text-[14px] mb-6 max-w-[480px] mx-auto leading-[1.65]"
              style={{ color: 'rgba(255,255,255,0.55)' }}>
              We supply non-standard concentrations, custom container sizes, and specialty grades for unique process requirements. Contact our technical team.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/contact"
                className="inline-flex items-center gap-2 bg-[#0066CC] text-white px-6 py-3 rounded-[8px] text-[13.5px] font-semibold no-underline hover:bg-[#1A7FEE] transition-colors">
                Contact Technical Team
              </Link>
              <Link href="/blog"
                className="inline-flex items-center gap-2 border border-white/20 text-white/75 px-6 py-3 rounded-[8px] text-[13.5px] font-medium no-underline hover:bg-white/08 hover:text-white transition-colors">
                Read Product Guides
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
