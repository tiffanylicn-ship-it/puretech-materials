import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Container, Eyebrow, SectionTitle, SectionSub,
  BtnPrimary, BtnGhost, BtnSecondary, GradeChip, CtaBanner,
} from '@/components/ui/index'
import { Reveal } from '@/components/ui/Reveal'
import { featuredProducts, allFeatured, allProducts, ALL_CATEGORY_META } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Semiconductor Electronic Chemicals — Electronic Grade IPA, PGMEA, H₂O₂, NH₄OH | PureTech',
  description: 'PureTech Materials supplies SEMI G2–G5 electronic grade chemicals for semiconductor fabs, foundries, OSAT, and EV battery manufacturers. IPA, PGMEA, NMP, H₂SO₄, H₂O₂, NH₄OH, HCl, TMAH — complete wet chemical portfolio.',
}

// ── Static data ─────────────────────────────────────────────────
const INDUSTRIES = [
  {
    id: 'logic',
    label: 'Logic & Foundry',
    node: 'Sub-3nm · EUV · GAA FinFET',
    desc: 'SEMI G5 IPA, PGMEA, H₂O₂, NH₄OH, and H₂SO₄ for the full wafer clean sequence — from pre-diffusion piranha to post-CMP Marangoni drying.',
    chemicals: ['EIPA G5','H₂O₂ G5','NH₄OH G5','H₂SO₄ G5','PGMEA G5','HCl G5'],
    color: '#0044BB',
    bgColor: 'rgba(0,68,187,0.08)',
    stat: '<0.1 ppb',
    statLabel: 'Metal limit G5',
  },
  {
    id: 'memory',
    label: 'DRAM & 3D NAND',
    node: 'High-Volume · IBC/Bulk Supply',
    desc: 'High-volume IPA, H₂O₂, H₃PO₄, and NH₄OH for multi-step CMP post-clean, Si₃N₄ selective etch, and capacitor hole clean in DRAM and NAND fabrication.',
    chemicals: ['EIPA G4/G5','H₂O₂ G4','H₃PO₄ G4','NH₄OH G4','HCl G4'],
    color: '#0055CC',
    bgColor: 'rgba(0,85,204,0.08)',
    stat: '200 L–IBC',
    statLabel: 'High-volume pack',
  },
  {
    id: 'packaging',
    label: 'Advanced Packaging',
    node: 'FOWLP · HBM · 2.5D · 3D-IC',
    desc: 'PGMEA and PGME for RDL lithography, NMP for polyimide HDI dielectric, IPA for substrate clean — complete solvent portfolio for heterogeneous integration.',
    chemicals: ['PGMEA G4','PGME G4','NMP G4/G5','EIPA G4','Acetone G3'],
    color: '#0066CC',
    bgColor: 'rgba(0,102,204,0.08)',
    stat: '2–5 μm',
    statLabel: 'RDL line width',
  },
  {
    id: 'battery',
    label: 'EV Lithium Battery',
    node: 'NMC · LFP · Solid-State',
    desc: 'G5 DMC and EMC for LiPF₆ electrolyte formulation, G5 NMP for PVDF cathode slurry — complete battery-grade solvent portfolio for EV gigafactory supply.',
    chemicals: ['DMC G5','EMC G4/G5','DEC G4','NMP G5','Ethanol G3'],
    color: '#0077DD',
    bgColor: 'rgba(0,119,221,0.08)',
    stat: '18% CAGR',
    statLabel: 'Battery chemical mkt',
  },
  {
    id: 'display',
    label: 'Display & OLED',
    node: 'TFT-LCD · AMOLED · MicroLED',
    desc: 'PGMEA for TFT photoresist patterning, TMAH 2.38% for positive resist development, NMP and DMSO for OLED organic layer coating — full display process portfolio.',
    chemicals: ['PGMEA G3','TMAH G3','NMP G3','DMSO G3','EIPA G3'],
    color: '#0088EE',
    bgColor: 'rgba(0,136,238,0.08)',
    stat: '10.5 G',
    statLabel: 'Gen 10.5 substrate',
  },
  {
    id: 'pharma',
    label: 'Pharmaceutical & HPLC',
    node: 'LC-MS · Drug Analysis · QC',
    desc: 'LC-MS grade acetonitrile, HPLC gradient methanol, anhydrous DCM and THF — meeting the tightest UV absorbance and residue specs for GMP-compliant pharmaceutical analysis.',
    chemicals: ['Acetonitrile LC-MS','Methanol HPLC-G','DCM Pharma','THF HPLC','n-Hexane HPLC'],
    color: '#0099FF',
    bgColor: 'rgba(0,153,255,0.08)',
    stat: 'ICH Q3C',
    statLabel: 'Residual solvent std',
  },
]

const PRODUCT_FAMILIES = [
  {
    key: 'electronic',
    title: 'Electronic Grade Solvents',
    count: 14,
    highlight: 'SEMI G2–G5',
    items: ['IPA (EIPA)','Ethanol','Acetone','Methanol','NMP','n-Heptane','DMC','DMSO'],
    href: '/products?cat=electronic',
  },
  {
    key: 'peroxide',
    title: 'Hydrogen Peroxide & Oxidants',
    count: 1,
    highlight: 'SEMI C30',
    items: ['H₂O₂ 30%','H₂O₂ 50%','H₂O₂ 31% (CMP)'],
    href: '/products?cat=peroxide',
  },
  {
    key: 'acid',
    title: 'Electronic Grade Process Acids',
    count: 4,
    highlight: 'G2–G5 Grades',
    items: ['H₂SO₄ (96–98%)','HCl (37%)','H₃PO₄ (85%)','HNO₃ (68%)'],
    href: '/products?cat=acid',
  },
  {
    key: 'base',
    title: 'Bases & Developers',
    count: 2,
    highlight: 'SEMI C12',
    items: ['NH₄OH (28–30%)','TMAH (2.38%)','TMAH (25%)'],
    href: '/products?cat=base',
  },
  {
    key: 'photoresist',
    title: 'Photoresist Solvents',
    count: 5,
    highlight: 'SEMI C12',
    items: ['PGMEA','PGME','n-Butyl Acetate','n-Propyl Acetate','iPrOAc'],
    href: '/products?cat=photoresist',
  },
  {
    key: 'battery',
    title: 'Battery Electrolyte Solvents',
    count: 4,
    highlight: 'G4/G5 Purity',
    items: ['DMC','EMC','DEC','GBL','EC (sourced)'],
    href: '/products?cat=battery',
  },
]

const RCA_STEPS = [
  { step:'1', name:'SPM Piranha',   formula:'H₂SO₄ + H₂O₂', role:'Organic & photoresist strip', temp:'120–130°C', prod:'H₂SO₄ G4 + H₂O₂ G4' },
  { step:'2', name:'HF Dip',        formula:'HF / BHF',       role:'Native oxide removal',        temp:'RT',        prod:'HF (third-party) + EIPA G4' },
  { step:'3', name:'SC-1 (APM)',    formula:'NH₄OH+H₂O₂+H₂O',role:'Particle & organic removal',  temp:'65–75°C',   prod:'NH₄OH G4 + H₂O₂ G4' },
  { step:'4', name:'SC-2 (HPM)',    formula:'HCl+H₂O₂+H₂O',  role:'Metal ion removal',           temp:'65–75°C',   prod:'HCl G4 + H₂O₂ G4' },
  { step:'5', name:'IPA Rinse',     formula:'IPA',             role:'DI water displacement rinse', temp:'RT',        prod:'EIPA G4/G5' },
  { step:'6', name:'Marangoni Dry', formula:'IPA vapor',       role:'Watermark-free drying',       temp:'RT',        prod:'EIPA G5' },
]

const QUALITY_FACTS = [
  { num:'28',    label:'Elements scanned per lot',     sub:'by ICP-MS, Na through Bi' },
  { num:'G5',    label:'Highest purity tier available', sub:'SEMI C1 Tier D · 6N purity' },
  { num:'100%',  label:'Lots with full CoA',            sub:'method-referenced, signed' },
  { num:'ISO 3', label:'Fill cleanroom class',          sub:'in-line LPC per container' },
  { num:'23+',   label:'Product lines',                 sub:'solvents · acids · bases · peroxides' },
  { num:'100,000',label:'t/a total capacity',          sub:'across all product lines' },
]

export default function HomePage() {
  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden"
        style={{ background:'linear-gradient(160deg,#020C1B 0%,#040D1E 40%,#071629 70%,#0A1F3A 100%)', minHeight:'calc(100vh - 68px)' }}>
        <div className="grid-bg grid-mask absolute inset-0 pointer-events-none opacity-80" />
        <div className="wafer-bg absolute inset-0 opacity-28 pointer-events-none" />
        <div className="glow bg-[#0055CC]/20 w-[800px] h-[800px]" style={{ top:'40%', left:'58%', transform:'translate(-50%,-50%)' }} />
        <div className="glow bg-[#00C2FF]/08 w-[500px] h-[500px]" style={{ top:'5%', left:'-5%' }} />

        <Container className="relative z-10 py-24 flex flex-col justify-center" style={{ minHeight:'calc(100vh - 68px)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-16 items-center">

            {/* Left */}
            <div>
              {/* Badges */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                <div className="flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em]"
                  style={{ color:'#22D3FF', border:'1px solid rgba(0,194,255,0.28)', background:'rgba(0,194,255,0.08)' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00C2FF] animate-pulse-dot" />
                  SEMI C1 · ISO 9001:2015
                </div>
                <div className="text-[11px] font-mono rounded-full px-3 py-1.5"
                  style={{ color:'rgba(255,255,255,0.42)', border:'1px solid rgba(255,255,255,0.12)' }}>
                  34+ Products · G2–G5 · Full Wet Chemical Portfolio
                </div>
              </div>

              <h1 className="font-serif leading-[1.07] text-white tracking-[-1px] mb-5"
                style={{ fontSize:'clamp(38px,5.2vw,66px)' }}>
                Complete Wet Chemical<br />
                <span className="grad-text">Portfolio</span> for<br />
                Semiconductor Fabs
              </h1>

              <p className="text-[17px] leading-[1.78] mb-6 max-w-[520px]"
                style={{ color:'rgba(255,255,255,0.65)' }}>
                From RCA cleaning chemistry to EUV photoresist solvents and EV battery electrolytes —
                PureTech supplies the full range of electronic grade wet chemicals for every process step.
                Single-source qualification. Consistent lot-to-lot purity.
              </p>

              {/* Chemical formula strip */}
              <div className="flex flex-wrap gap-2 mb-9">
                {['IPA G5','H₂O₂ G5','NH₄OH G5','H₂SO₄ G5','HCl G5','PGMEA G5','NMP G5','DMC G5','TMAH G4'].map(c => (
                  <span key={c} className="font-mono text-[11px] px-2.5 py-1 rounded-[5px] font-semibold"
                    style={{ background:'rgba(0,102,204,0.22)', color:'#4BAAF5', border:'1px solid rgba(0,102,204,0.32)' }}>
                    {c}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 flex-wrap mb-12">
                <BtnPrimary href="/products">
                  Full Product Catalog
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M2.5 7.5h10M8 3l4.5 4.5L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </BtnPrimary>
                <BtnGhost href="/contact">Request RFQ / Sample</BtnGhost>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-px overflow-hidden rounded-[12px]"
                style={{ background:'rgba(255,255,255,0.06)', outline:'1px solid rgba(255,255,255,0.07)' }}>
                {[
                  { val:'34+',    label:'Products' },
                  { val:'G5',     label:'Top Grade' },
                  { val:'100,000 t/a', label:'Capacity' },
                ].map((s,i)=>(
                  <div key={i} className="px-5 py-4" style={{ background:'rgba(2,12,27,0.72)' }}>
                    <div className="font-mono text-[18px] font-bold text-white leading-none">{s.val}</div>
                    <div className="text-[10px] uppercase tracking-[0.09em] mt-1.5" style={{ color:'rgba(255,255,255,0.38)' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — RCA process card */}
            <div className="hidden lg:block">
              <div className="rounded-[20px] p-6 relative overflow-hidden"
                style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', backdropFilter:'blur(12px)' }}>
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background:'linear-gradient(90deg,transparent,rgba(0,194,255,0.35),transparent)' }} />

                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] mb-4" style={{ color:'rgba(0,194,255,0.65)' }}>
                  Standard RCA Clean Sequence — Covered End-to-End
                </p>
                {RCA_STEPS.map((s,i)=>(
                  <div key={i} className="flex gap-3 items-start py-2.5"
                    style={{ borderBottom: i < RCA_STEPS.length-1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                    <span className="font-mono text-[10px] font-bold w-4 flex-shrink-0 mt-0.5"
                      style={{ color:'rgba(0,194,255,0.45)' }}>{s.step}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2">
                        <span className="text-[13px] font-semibold text-white">{s.name}</span>
                        <span className="font-mono text-[10px]" style={{ color:'rgba(255,255,255,0.35)' }}>{s.temp}</span>
                      </div>
                      <span className="font-mono text-[10.5px] text-[#4BAAF5]">{s.formula}</span>
                      <p className="text-[11px] mt-0.5" style={{ color:'rgba(255,255,255,0.38)' }}>{s.role}</p>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-[4px] flex-shrink-0 font-semibold"
                      style={{ background:'rgba(0,102,204,0.2)', color:'#4BAAF5', border:'1px solid rgba(0,102,204,0.3)' }}>
                      {s.prod}
                    </span>
                  </div>
                ))}

                <div className="mt-5 pt-4 flex items-center justify-between"
                  style={{ borderTop:'1px solid rgba(255,255,255,0.07)' }}>
                  <span className="text-[10.5px]" style={{ color:'rgba(255,255,255,0.3)' }}>All steps covered by PureTech supply</span>
                  <Link href="/applications" className="text-[11.5px] font-semibold text-[#4BAAF5] no-underline hover:underline">
                    View Process Map →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
          style={{ color:'rgba(255,255,255,0.2)' }}>
          <span className="text-[10px] uppercase tracking-[0.1em]">Scroll</span>
          <div className="w-px h-8" style={{ background:'linear-gradient(to bottom,rgba(255,255,255,0.2),transparent)' }} />
        </div>
      </section>

      {/* ══ TRUST BAR ════════════════════════════════════════ */}
      <section className="py-5 border-b" style={{ background:'#F2F6FB', borderColor:'rgba(0,102,204,0.1)' }}>
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-5 items-center">
              {['SEMI C1 Certified','ISO 9001:2015','SEMI C12','ISO 14001','REACH/RoHS Compliant','28-Element ICP-MS per Lot'].map(b=>(
                <div key={b} className="flex items-center gap-1.5 text-[12px] font-semibold text-[#2C4160]">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="#059669" strokeWidth="2.2">
                    <polyline points="2 6.5 5 9.5 11 3.5"/>
                  </svg>
                  {b}
                </div>
              ))}
            </div>
            <Link href="/contact" className="text-[12.5px] font-semibold text-[#0066CC] no-underline hover:underline flex items-center gap-1">
              Request CoA Templates →
            </Link>
          </div>
        </Container>
      </section>

      {/* ══ INDUSTRY APPLICATIONS (image-style cards) ════════ */}
      <section className="py-24">
        <Container>
          <Reveal className="mb-14">
            <Eyebrow>Industry Applications</Eyebrow>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
              <div>
                <SectionTitle>Serving Every Segment of the<br />Semiconductor Supply Chain</SectionTitle>
                <SectionSub>From sub-3nm logic foundry to EV gigafactory — matched chemistry for every application.</SectionSub>
              </div>
              <BtnSecondary href="/applications">View All Applications →</BtnSecondary>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind.id} delay={i * 55}>
                <Link href={`/applications#${ind.id}`}
                  className="group flex flex-col rounded-[18px] overflow-hidden no-underline border border-[rgba(0,102,204,0.1)] hover:shadow-[0_8px_32px_rgba(0,102,204,0.12)] hover:-translate-y-1 transition-all duration-250"
                  style={{ background:'white', boxShadow:'0 1px 3px rgba(4,13,30,0.05)' }}>

                  {/* Visual header */}
                  <div className="relative h-[140px] flex flex-col justify-between p-5 overflow-hidden"
                    style={{ background:`linear-gradient(135deg,#040D1E 0%,#071429 60%,${ind.color}33 100%)` }}>
                    <div className="wafer-bg absolute inset-0 opacity-30 pointer-events-none" />
                    <div className="glow w-[200px] h-[200px] -top-10 -right-10 pointer-events-none"
                      style={{ background:`${ind.color}25` }} />
                    <div className="relative z-10 flex items-start justify-between">
                      <div>
                        <div className="font-mono text-[28px] font-bold leading-none" style={{ color: ind.color }}>
                          {ind.stat}
                        </div>
                        <div className="text-[10px] mt-0.5 uppercase tracking-[0.09em]"
                          style={{ color:'rgba(255,255,255,0.42)' }}>{ind.statLabel}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[11px] font-mono" style={{ color:'rgba(255,255,255,0.35)' }}>{ind.node}</div>
                      </div>
                    </div>
                    <div className="relative z-10 flex flex-wrap gap-1.5">
                      {ind.chemicals.slice(0,3).map(c => (
                        <span key={c} className="font-mono text-[9.5px] px-2 py-0.5 rounded-[4px] font-semibold"
                          style={{ background:'rgba(255,255,255,0.09)', color:'rgba(255,255,255,0.72)', border:'1px solid rgba(255,255,255,0.12)' }}>
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-[15.5px] font-semibold text-[#0A1628] mb-2 group-hover:text-[#0055CC] transition-colors">
                      {ind.label}
                    </h3>
                    <p className="text-[13px] text-[#3A5570] leading-[1.62] flex-1">{ind.desc}</p>
                    <div className="mt-4 flex items-center gap-1 text-[12.5px] font-semibold text-[#0066CC]">
                      View chemistry
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2.5l3.5 3.5L6 9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ══ PRODUCT FAMILIES (Merck-style full portfolio) ════ */}
      <section className="py-24 bg-[#F2F6FB]">
        <Container>
          <Reveal className="mb-14">
            <Eyebrow>Complete Product Portfolio</Eyebrow>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
              <div>
                <SectionTitle>One Source for Your<br />Full Wet Chemical Needs</SectionTitle>
                <SectionSub>Qualify a single supplier for solvents, process acids, oxidants, and bases — reducing supply chain complexity and qualification burden.</SectionSub>
              </div>
              <BtnSecondary href="/products">Browse All 34+ Products →</BtnSecondary>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PRODUCT_FAMILIES.map((fam, i) => (
              <Reveal key={fam.key} delay={i * 60}>
                <Link href={fam.href}
                  className="group flex flex-col bg-white border border-[rgba(0,102,204,0.1)] rounded-[16px] p-6 no-underline hover:shadow-[0_6px_24px_rgba(0,102,204,0.10)] hover:-translate-y-0.5 transition-all duration-250"
                  style={{ boxShadow:'0 1px 3px rgba(4,13,30,0.04)' }}>

                  <div className="flex items-start justify-between mb-4">
                    <span className="text-[10.5px] font-bold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full bg-[#E8F2FF] text-[#0044BB]">
                      {fam.highlight}
                    </span>
                    <span className="text-[11px] font-mono text-[#8BA8C0]">{fam.count}+ products</span>
                  </div>

                  <h3 className="text-[15.5px] font-semibold text-[#0A1628] mb-3 group-hover:text-[#0055CC] transition-colors">
                    {fam.title}
                  </h3>

                  <div className="flex flex-col gap-1.5 flex-1">
                    {fam.items.map(item => (
                      <div key={item} className="flex items-center gap-2 text-[13px] text-[#2C4160]">
                        <span className="w-1 h-1 rounded-full bg-[#0066CC] flex-shrink-0" />
                        <span className="font-mono">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 pt-4 flex items-center gap-1.5 text-[13px] font-semibold text-[#0066CC]"
                    style={{ borderTop:'1px solid rgba(0,102,204,0.08)' }}>
                    Browse {fam.title}
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5h9M7 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ══ FEATURED ELECTRONIC GRADE (spotlight) ════════════ */}
      <section className="py-24">
        <Container>
          <Reveal className="mb-14">
            <Eyebrow>Featured Electronic Grade</Eyebrow>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
              <div>
                <SectionTitle>Electronic Grade Solvents<br />G2 through G5 (6N Purity)</SectionTitle>
                <SectionSub>SEMI C1 certified solvents with lot-specific ICP-MS and LPC data. Available from sample qualification lots to bulk tanker supply.</SectionSub>
              </div>
              <BtnSecondary href="/products?cat=electronic">View Electronic Grade →</BtnSecondary>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allFeatured.filter(p => p.category === 'electronic').slice(0, 6).map((p, i) => (
              <Reveal key={p.id} delay={i * 55}>
                <Link href={`/product/${p.id}`}
                  className="p-card flex flex-col bg-white border border-[rgba(0,102,204,0.1)] rounded-[14px] p-5 no-underline h-full"
                  style={{ boxShadow:'0 1px 3px rgba(4,13,30,0.04)' }}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex flex-wrap gap-1.5">
                      {p.grades.filter(g => g.startsWith('G')).slice(0, 3).map(g => (
                        <GradeChip key={g} g={g as never} />
                      ))}
                    </div>
                    <span className="font-mono text-[9.5px] text-[#8BA8C0] bg-[#F2F6FB] border border-[rgba(0,102,204,0.1)] px-1.5 py-0.5 rounded">
                      {p.cas}
                    </span>
                  </div>
                  <h3 className="text-[15px] font-semibold text-[#0A1628] mb-0.5 leading-snug">{p.nameEn}</h3>
                  <p className="text-[12.5px] text-[#3A5570] leading-[1.58] flex-1 line-clamp-2">{p.tagline}</p>
                  <div className="mt-4 pt-3.5 flex items-center justify-between"
                    style={{ borderTop:'1px solid rgba(0,102,204,0.08)' }}>
                    <span className="font-mono text-[11.5px] font-bold text-[#0A1628]">{p.bp}</span>
                    <span className="text-[12px] font-semibold text-[#0066CC] flex items-center gap-1">
                      Spec Sheet
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 5.5h8M5.5 2l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ══ WHY PURETECH (Merck-style value props) ═══════════ */}
      <section className="py-24" style={{ background:'linear-gradient(180deg,#040D1E 0%,#071429 100%)' }}>
        <Container>
          <Reveal className="mb-16">
            <Eyebrow light>Why PureTech</Eyebrow>
            <SectionTitle light>The Standard for Electronic<br />Grade Chemical Supply</SectionTitle>
            <SectionSub light>Built around the quality infrastructure that semiconductor fabs, OSATs, and battery manufacturers require.</SectionSub>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Quality facts grid */}
            <div className="grid grid-cols-2 gap-3">
              {QUALITY_FACTS.map((q, i) => (
                <Reveal key={i} delay={i * 50}>
                  <div className="rounded-[14px] p-6"
                    style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)' }}>
                    <div className="font-mono text-[28px] font-bold text-[#4BAAF5] leading-none mb-1">{q.num}</div>
                    <div className="text-[13px] font-semibold text-white mb-0.5">{q.label}</div>
                    <div className="text-[11px]" style={{ color:'rgba(255,255,255,0.38)' }}>{q.sub}</div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Value props list */}
            <Reveal delay={100}>
              <div className="space-y-0">
                {[
                  { title:'Single-Source Qualification',       desc:'Qualify one supplier for your complete wet chemical needs — solvents, process acids, oxidants, and bases. Reduces qualification timelines and supply complexity.' },
                  { title:'Lot-Specific CoA with Raw Data',    desc:'Every shipment carries a full Certificate of Analysis with actual ICP-MS measured values, LPC counts, and GC assay data — not pass/fail statements.' },
                  { title:'ISO Class 3 Fill Environment',      desc:'In-line liquid particle counting during fill certifies every container. G5 grade: ≤5 particles/mL at ≥0.5 μm, ≤20 at ≥0.2 μm.' },
                  { title:'Dedicated Field Application Support',desc:'Process engineers available for on-site qualification support, compatibility testing, and specification customization for non-standard applications.' },
                  { title:'Global Hazmat-Qualified Logistics',  desc:'UN/ADR/IATA-classified temperature-controlled shipping to fabs in Asia, North America, and Europe with N₂ blanket during transport.' },
                ].map((item, i, arr) => (
                  <div key={i} className="flex gap-4 items-start py-5"
                    style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                    <div className="w-6 h-6 rounded-full bg-[#0066CC] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="white" strokeWidth="2">
                        <polyline points="2 5.5 4.5 8 9 3"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[14.5px] font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-[13px] leading-[1.65]" style={{ color:'rgba(255,255,255,0.52)' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ══ PURITY SCALE ═════════════════════════════════════ */}
      <section className="py-20 bg-[#F2F6FB]">
        <Container>
          <Reveal className="mb-10">
            <Eyebrow>Electronic Grade Purity</Eyebrow>
            <SectionTitle>SEMI Grade G2 → G5 Explained</SectionTitle>
            <SectionSub>Match the right grade to your process node. Every tier certified by ICP-MS and in-line LPC.</SectionSub>
          </Reveal>
          <Reveal delay={60}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { g:'G2',pur:'99.9%',    met:'≤10 ppb',  parts:'≤100/mL', node:'180nm+',    c:'#003DA5', w:'55%' },
                { g:'G3',pur:'99.99%',   met:'≤2 ppb',   parts:'≤20/mL',  node:'45–180nm',  c:'#0050C8', w:'70%' },
                { g:'G4',pur:'99.999%',  met:'≤0.5 ppb', parts:'≤10/mL',  node:'7–45nm',    c:'#0066CC', w:'84%' },
                { g:'G5',pur:'99.9999%', met:'<0.1 ppb', parts:'≤5/mL',   node:'<7nm / EUV',c:'#0099E8', w:'100%' },
              ].map(g => (
                <div key={g.g} className="rounded-[14px] p-6 bg-white border border-[rgba(0,102,204,0.1)]"
                  style={{ boxShadow:'0 1px 3px rgba(4,13,30,0.04)' }}>
                  <div className="flex items-baseline gap-2 mb-3">
                    <div className="font-mono text-[32px] font-bold leading-none" style={{ color:g.c }}>{g.g}</div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.08em] px-2 py-0.5 rounded-full"
                      style={{ background:`${g.c}14`, color:g.c, border:`1px solid ${g.c}40` }}>
                      {g.node}
                    </div>
                  </div>
                  <div className="font-mono text-[18px] font-bold text-[#0A1628] mb-1">{g.pur}</div>
                  <div className="space-y-1 mb-4">
                    <div className="text-[12px] text-[#506880]">Metals: <strong className="text-[#0A1628]">{g.met}</strong></div>
                    <div className="text-[12px] text-[#506880]">Particles: <strong className="text-[#0A1628]">{g.parts}</strong></div>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background:'rgba(0,102,204,0.1)' }}>
                    <div className="h-full rounded-full pbar" style={{ width:g.w }} />
                  </div>
                  <Link href="/contact"
                    className="block mt-4 py-2 text-center text-[12px] font-semibold rounded-[7px] no-underline transition-colors"
                    style={{ background:`${g.c}14`, color:g.c, border:`1px solid ${g.c}35` }}>
                    Request {g.g} Sample
                  </Link>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ══ BLOG PREVIEW ═════════════════════════════════════ */}
      <section className="py-20">
        <Container>
          <Reveal className="mb-10">
            <Eyebrow>Technical Resources</Eyebrow>
            <div className="flex items-end justify-between gap-4">
              <SectionTitle>Process Chemistry<br />Knowledge Base</SectionTitle>
              <BtnSecondary href="/blog">All Articles →</BtnSecondary>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title:'Electronic Grade IPA G2–G5: Full Specification Guide', cat:'Electronic Grade Solvents', time:'12 min', slug:'electronic-grade-ipa-semiconductor-wafer-cleaning' },
              { title:'PGMEA as Photoresist Solvent for EUV & ArF Lithography', cat:'Photoresist & Lithography', time:'10 min', slug:'pgmea-photoresist-solvent-euv-arf-lithography' },
              { title:'NMP in Li-Battery Electrode Slurry: PVDF Binder Guide', cat:'Battery & Energy Storage', time:'11 min', slug:'nmp-battery-electrode-slurry-pvdf-binder' },
            ].map((a, i) => (
              <Reveal key={i} delay={i * 60}>
                <Link href={`/blog/${a.slug}`}
                  className="group flex flex-col bg-white border border-[rgba(0,102,204,0.1)] rounded-[14px] p-5 no-underline hover:shadow-[0_6px_20px_rgba(0,102,204,0.1)] transition-all duration-250"
                  style={{ boxShadow:'0 1px 3px rgba(4,13,30,0.04)' }}>
                  <span className="text-[10.5px] font-semibold uppercase tracking-[0.1em] px-2 py-0.5 rounded-full bg-[#E8F2FF] text-[#0044BB] self-start mb-3">{a.cat}</span>
                  <h3 className="text-[14.5px] font-semibold text-[#0A1628] leading-[1.4] mb-3 group-hover:text-[#0055CC] transition-colors flex-1">{a.title}</h3>
                  <div className="flex items-center justify-between pt-3 mt-auto" style={{ borderTop:'1px solid rgba(0,102,204,0.08)' }}>
                    <span className="text-[11.5px] text-[#8BA8C0]">{a.time} read</span>
                    <span className="text-[12px] font-semibold text-[#0066CC]">Read →</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        label="Start Your Qualification"
        title={<>Single-Source Wet Chemical<br />Supply from G2 to G5</>}
        subtitle="Request qualification lots with full CoA, ICP-MS data, and LPC certification. Our FAE team responds within one business day."
        p1="Request RFQ / Sample"   h1="/contact"
        p2="Browse Full Catalog"    h2="/products"
      />
    </>
  )
}
