import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Container, Eyebrow, GradeChip, GradeBadge, CtaBanner } from '@/components/ui/index'
import { Reveal } from '@/components/ui/Reveal'
import { allProducts, ALL_CATEGORY_META, type GradeKey, type Category } from '@/lib/products'

export function generateStaticParams() {
  return allProducts.map(p => ({ id: p.id }))
}

export async function generateMetadata({ params }:{ params:{ id:string } }): Promise<Metadata> {
  const p = allProducts.find(x => x.id === params.id)
  if (!p) return { title:'Product Not Found' }
  return {
    title:`${p.nameEn} — ${p.grades.filter(g=>g.startsWith('G')).length>0 ? 'SEMI G2–G5 Grade' : 'Multi-Grade'} | CAS ${p.cas}`,
    description: p.description.slice(0,155),
  }
}

export default function ProductDetailPage({ params }:{ params:{ id:string } }) {
  const p = allProducts.find(x => x.id === params.id)
  if (!p) notFound()

  const catMeta    = (ALL_CATEGORY_META as Record<string,{label:string;desc:string}>)[p.category] ?? {label:p.subcategory,desc:''}
  const related    = allProducts.filter(r => r.category===p.category && r.id!==p.id).slice(0,4)
  const elecGrades = p.grades.filter(g => g.startsWith('G'))
  const otherGrades= p.grades.filter(g => !g.startsWith('G'))

  // Which spec columns exist
  const hasG2     = p.specs.some(r=>r.g2)
  const hasG3     = p.specs.some(r=>r.g3)
  const hasG4     = p.specs.some(r=>r.g4)
  const hasG5     = p.specs.some(r=>r.g5)
  const hasPharma = p.specs.some(r=>r.pharma)
  const hasHplcP  = p.specs.some(r=>r.hplcPrep)
  const hasHplcG  = p.specs.some(r=>r.hplcGrad)
  const hasHplc   = p.specs.some(r=>r.hplc)
  const hasLcms   = p.specs.some(r=>r.lcms)
  const hasAnhy   = p.specs.some(r=>r.anhy)
  const hasAr     = p.specs.some(r=>r.ar)
  const hasGr     = p.specs.some(r=>r.gr)

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-[rgba(0,102,204,0.1)] py-3 bg-[#F2F6FB]">
        <Container>
          <nav className="flex items-center gap-2 text-[12px] flex-wrap" style={{ color:'#8BA8C0' }}>
            <Link href="/products" className="no-underline transition-colors hover:text-[#0066CC]" style={{ color:'#506880' }}>Products</Link>
            <span style={{ color:'#C5D8E8' }}>›</span>
            <Link href={`/products?cat=${p.category}`} className="no-underline transition-colors hover:text-[#0066CC]" style={{ color:'#506880' }}>{catMeta.label}</Link>
            <span style={{ color:'#C5D8E8' }}>›</span>
            <span className="text-[#0A1628] font-medium">{p.nameEn}</span>
          </nav>
        </Container>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden py-16"
        style={{ background:'linear-gradient(160deg,#020C1B 0%,#040D1E 52%,#0A1F3A 100%)' }}>
        <div className="wafer-bg absolute inset-0 opacity-28 pointer-events-none" />
        <div className="glow bg-[#0055CC]/22 w-[480px] h-[480px]" style={{ top:'-80px',right:0 }} />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-start">

            {/* Left */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-5">
                {elecGrades.slice(0,5).map(g=><GradeBadge key={g} g={g as GradeKey}/>)}
                {elecGrades.length===0 && otherGrades.slice(0,3).map(g=><GradeBadge key={g} g={g as GradeKey}/>)}
                <span className="text-[10px] font-mono border border-white/12 px-2 py-1 rounded" style={{ color:'rgba(255,255,255,0.35)' }}>{catMeta.label}</span>
              </div>

              <h1 className="font-serif text-[clamp(28px,4vw,48px)] text-white leading-[1.12] mb-2 tracking-[-0.4px]">{p.nameEn}</h1>
              <p className="font-mono text-[13.5px] mb-4" style={{ color:'rgba(255,255,255,0.42)' }}>
                {p.formula} · CAS {p.cas}
              </p>
              <p className="text-[15.5px] leading-[1.72] max-w-[580px] mb-6" style={{ color:'rgba(255,255,255,0.62)' }}>
                {p.description}
              </p>

              {/* Semiconductor application tags */}
              <div className="flex flex-wrap gap-1.5 mb-8">
                {p.semiApps.slice(0,7).map(a=>(
                  <span key={a} className="text-[11px] px-2.5 py-1 rounded-full font-medium"
                    style={{ background:'rgba(0,194,255,0.1)', color:'#22D3FF', border:'1px solid rgba(0,194,255,0.2)' }}>
                    {a}
                  </span>
                ))}
              </div>

              {/* Physical props */}
              <div className="flex flex-wrap gap-8 pt-6" style={{ borderTop:'1px solid rgba(255,255,255,0.08)' }}>
                {[
                  { k:'Molecular Weight', v:p.mw+' g/mol' },
                  { k:'Boiling Point',    v:p.bp },
                  { k:'Density',          v:p.density },
                ].map(prop=>(
                  <div key={prop.k}>
                    <p className="text-[10px] uppercase tracking-[0.1em] mb-0.5" style={{ color:'rgba(255,255,255,0.32)' }}>{prop.k}</p>
                    <p className="text-[14px] text-white font-mono font-semibold">{prop.v}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right quick card */}
            <div className="rounded-[16px] overflow-hidden"
              style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.09)' }}>
              <div className="px-5 pt-5 pb-4" style={{ borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
                <p className="text-[10px] uppercase tracking-[0.1em] mb-1" style={{ color:'rgba(255,255,255,0.3)' }}>Molecular Formula</p>
                <div className="font-mono text-[22px] font-bold text-[#4BAAF5] tracking-wider">{p.formula}</div>
                {p.semiStd && (
                  <span className="inline-block mt-2 text-[10px] font-bold font-mono px-2 py-0.5 rounded-[4px]"
                    style={{ background:'rgba(0,194,255,0.14)', color:'#00C2FF', border:'1px solid rgba(0,194,255,0.28)' }}>
                    {p.semiStd}
                  </span>
                )}
              </div>
              <div className="px-5 py-1">
                {[
                  { k:'CAS Number',    v:p.cas },
                  { k:'Boiling Point', v:p.bp },
                  { k:'Density',       v:p.density },
                  { k:'MW',            v:p.mw+' g/mol' },
                ].map((row,i,arr)=>(
                  <div key={row.k} className="flex justify-between py-2.5 text-[12.5px]"
                    style={{ borderBottom:i<arr.length-1?'1px solid rgba(255,255,255,0.05)':'none' }}>
                    <span style={{ color:'rgba(255,255,255,0.38)' }}>{row.k}</span>
                    <span className="text-white font-mono">{row.v}</span>
                  </div>
                ))}
              </div>
              {/* Available grades */}
              <div className="px-5 py-4" style={{ borderTop:'1px solid rgba(255,255,255,0.06)' }}>
                <p className="text-[10px] uppercase tracking-[0.1em] mb-2.5" style={{ color:'rgba(255,255,255,0.3)' }}>Available Grades</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.grades.map(g=><GradeChip key={g} g={g as GradeKey}/>)}
                </div>
              </div>
              {/* CTAs */}
              <div className="px-5 pb-5 pt-2 grid grid-cols-1 gap-2">
                <Link href="/contact"
                  className="block py-3 text-center text-[13px] font-semibold rounded-[8px] no-underline bg-[#0066CC] text-white hover:bg-[#1A7FEE] transition-colors">
                  Request Sample / Quote
                </Link>
                <Link href="/contact"
                  className="block py-3 text-center text-[13px] font-medium rounded-[8px] no-underline transition-colors hover:text-white"
                  style={{ border:'1px solid rgba(255,255,255,0.12)', color:'rgba(255,255,255,0.6)' }}>
                  Download SDS
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Analytical Specification Table ── */}
      {p.specs.length>0 && (
        <section className="py-16">
          <Container>
            <Reveal className="mb-8">
              <Eyebrow>Analytical Specification</Eyebrow>
              <h2 className="font-serif text-[28px] text-[#0A1628] tracking-[-0.3px]">Analytical Specification Table</h2>
              <p className="text-[14px] text-[#2C4160] mt-2 max-w-[640px] leading-[1.65]">
                All values represent maximum allowable limits unless noted ≥. A lot-specific Certificate of Analysis (CoA) with ICP-MS, LPC, and GC data is issued for every shipment. Full data packages available on request.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <div className="overflow-hidden rounded-[14px] border border-[rgba(0,102,204,0.1)]">
                <div className="overflow-x-auto">
                  <table className="w-full stbl border-collapse">
                    <thead>
                      <tr>
                        <th style={{ width:'26%',minWidth:'155px' }}>Parameter</th>
                        <th style={{ minWidth:'120px' }}>Test Method</th>
                        <th style={{ minWidth:'65px' }}>Unit</th>
                        {hasG2    && <th><span style={{ color:'#93CAFD' }}>G2</span></th>}
                        {hasG3    && <th><span style={{ color:'#4BAAF5' }}>G3</span></th>}
                        {hasG4    && <th><span style={{ color:'#22D3FF' }}>G4</span></th>}
                        {hasG5    && <th><span style={{ color:'#00C2FF' }}>G5 ★</span></th>}
                        {hasPharma && <th><span style={{ color:'#6EE7B7' }}>Pharma</span></th>}
                        {hasHplcP  && <th><span style={{ color:'#C4B5FD' }}>HPLC-P</span></th>}
                        {hasHplcG  && <th><span style={{ color:'#A78BFA' }}>HPLC-G</span></th>}
                        {hasHplc   && <th><span style={{ color:'#8B5CF6' }}>HPLC</span></th>}
                        {hasLcms   && <th><span style={{ color:'#7C3AED' }}>LC-MS</span></th>}
                        {hasAnhy   && <th><span style={{ color:'#93C5FD' }}>Anhy.</span></th>}
                        {hasAr     && <th><span style={{ color:'#7DD3FC' }}>AR</span></th>}
                        {hasGr     && <th><span style={{ color:'#38BDF8' }}>GR</span></th>}
                      </tr>
                    </thead>
                    <tbody>
                      {p.specs.map((row,i)=>(
                        <tr key={i}>
                          <td className="font-medium text-[#0A1628]">{row.param}</td>
                          <td>
                            <span className="font-mono text-[11px] bg-[#EEF4FB] border border-[rgba(0,102,204,0.1)] px-1.5 py-0.5 rounded text-[#2C4160]">
                              {row.method}
                            </span>
                          </td>
                          <td className="font-mono text-[11px] text-[#8BA8C0]">{row.unit}</td>
                          {hasG2    && <td><span className="font-mono text-[12.5px] font-medium text-[#0A1628]">{row.g2     || '—'}</span></td>}
                          {hasG3    && <td><span className="font-mono text-[12.5px] font-medium text-[#0A1628]">{row.g3     || '—'}</span></td>}
                          {hasG4    && <td><span className="font-mono text-[12.5px] font-semibold text-[#0055CC]">{row.g4    || '—'}</span></td>}
                          {hasG5    && <td><span className="font-mono text-[12.5px] font-bold text-[#0066CC]">{row.g5      || '—'}</span></td>}
                          {hasPharma && <td><span className="font-mono text-[12.5px] text-[#047857]">{row.pharma  || '—'}</span></td>}
                          {hasHplcP  && <td><span className="font-mono text-[12.5px] text-[#7C3AED]">{row.hplcPrep || '—'}</span></td>}
                          {hasHplcG  && <td><span className="font-mono text-[12.5px] text-[#7C3AED]">{row.hplcGrad || '—'}</span></td>}
                          {hasHplc   && <td><span className="font-mono text-[12.5px] text-[#5B21B6]">{row.hplc    || '—'}</span></td>}
                          {hasLcms   && <td><span className="font-mono text-[12.5px] text-[#4C1D95]">{row.lcms    || '—'}</span></td>}
                          {hasAnhy   && <td><span className="font-mono text-[12.5px] text-[#1D4ED8]">{row.anhy    || '—'}</span></td>}
                          {hasAr     && <td><span className="font-mono text-[12.5px] text-[#0369A1]">{row.ar      || '—'}</span></td>}
                          {hasGr     && <td><span className="font-mono text-[12.5px] text-[#0369A1]">{row.gr      || '—'}</span></td>}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-[11.5px] text-[#8BA8C0] mt-3 leading-[1.6]">
                ★ G5 = SEMI C1 Tier D (6N grade). All metal values by ICP-MS. Particle counts by in-line LPC during ISO Class 3 fill. CoA available on request.
              </p>
            </Reveal>
          </Container>
        </section>
      )}

      {/* ── Application Areas ── */}
      <section className="py-14 bg-[#F2F6FB]">
        <Container>
          <Reveal className="mb-8">
            <Eyebrow>Application Areas</Eyebrow>
            <h2 className="font-serif text-[26px] text-[#0A1628]">Where {p.nameEn.split('(')[0].trim()} Is Used</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title:'Semiconductor Process',   items:p.semiApps,     color:'#0066CC' },
              { title:'Laboratory & Analytical', items:p.labApps,      color:'#7C3AED' },
              { title:'Industrial & Other',      items:p.industryApps, color:'#047857' },
            ].filter(s=>s.items.length>0).map((sec,i)=>(
              <Reveal key={i} delay={i*80}>
                <div className="bg-white border border-[rgba(0,102,204,0.1)] rounded-[13px] p-6 h-full"
                  style={{ boxShadow:'0 1px 3px rgba(4,13,30,0.04)' }}>
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-8 h-[3px] rounded-full flex-shrink-0"
                      style={{ background:`linear-gradient(90deg,${sec.color},${sec.color}88)` }} />
                    <h3 className="text-[14px] font-semibold text-[#0A1628]">{sec.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {sec.items.map(a=>(
                      <li key={a} className="flex items-start gap-2.5 text-[13px] text-[#2C4160] leading-snug">
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                          style={{ background:sec.color }} />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Battery apps */}
          {p.batteryApps.length>0 && (
            <Reveal delay={200} className="mt-5">
              <div className="bg-white border border-[rgba(0,102,204,0.1)] rounded-[13px] p-6"
                style={{ boxShadow:'0 1px 3px rgba(4,13,30,0.04)' }}>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-[3px] rounded-full" style={{ background:'linear-gradient(90deg,#D97706,#F59E0B)' }} />
                  <h3 className="text-[14px] font-semibold text-[#0A1628]">Battery & Energy Storage</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {p.batteryApps.map(a=>(
                    <div key={a} className="flex items-start gap-2.5 text-[13px] text-[#2C4160] leading-snug">
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-[#D97706]" />
                      {a}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          )}
        </Container>
      </section>

      {/* ── Packaging ── */}
      <section className="py-12">
        <Container>
          <Reveal className="mb-6">
            <Eyebrow>Packaging & Supply</Eyebrow>
            <h2 className="font-serif text-[24px] text-[#0A1628]">Available Container Formats</h2>
          </Reveal>
          <Reveal delay={60}>
            <div className="flex flex-wrap gap-3">
              {p.packaging.map(pk=>(
                <div key={pk} className="px-5 py-3 rounded-[10px] text-[14px] font-mono font-bold text-[#0055CC]"
                  style={{ background:'#EEF4FF', border:'1px solid rgba(0,102,204,0.22)' }}>
                  {pk}
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── Related products ── */}
      {related.length>0 && (
        <section className="py-12 bg-[#F2F6FB]">
          <Container>
            <h2 className="text-[19px] font-semibold text-[#0A1628] mb-5">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map(r=>(
                <Link key={r.id} href={`/product/${r.id}`}
                  className="p-card bg-white border border-[rgba(0,102,204,0.1)] rounded-[12px] p-5 no-underline">
                  <div className="flex flex-wrap gap-1 mb-2">
                    {r.grades.filter(g=>g.startsWith('G')).slice(0,2).map(g=><GradeChip key={g} g={g as GradeKey} tiny/>)}
                    {!r.grades.some(g=>g.startsWith('G')) && <GradeChip g={r.grades[0] as GradeKey} tiny/>}
                  </div>
                  <h3 className="text-[13.5px] font-semibold text-[#0A1628] mb-0.5 line-clamp-2 leading-snug">{r.nameEn}</h3>
                  <p className="text-[11px] font-mono text-[#506880]">{r.formula} · CAS {r.cas}</p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBanner
        label="Get Started"
        title={<>Request a Sample or<br />Technical Quote</>}
        subtitle="Our application engineers respond with full CoA data, ICP-MS reports, and supply chain details within one business day."
        p1="Contact Us"           h1="/contact"
        p2="Browse All Products"  h2="/products"
      />
    </>
  )
}
