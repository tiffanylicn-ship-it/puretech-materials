import type { Metadata } from 'next'
import { Container, Eyebrow, SectionTitle, SectionSub, CtaBanner } from '@/components/ui/index'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title:'About — Precision Chemistry for Advanced Semiconductor Manufacturing',
  description:'PureTech Materials: ISO 9001 certified, SEMI C1/C12 compliant. 100,000 t/a capacity, ISO Class 3 fill, 28-element ICP-MS lot testing.',
}

const STATS = [
  { val:'23',      sub:'Product Lines',             note:'Across 5 categories' },
  { val:'100,000', sub:'Annual Capacity (t/a)',      note:'Total production across all lines' },
  { val:'G2 – G5', sub:'Electronic Grade Range',     note:'SEMI C1 Tier A–D' },
  { val:'ISO 3',   sub:'Fill Cleanroom Class',       note:'Online LPC monitoring' },
  { val:'28',      sub:'Elements per Lot (ICP-MS)',  note:'Including Na,K,Fe,Cu,Cr,Ni,Al,Zn…' },
  { val:'100%',    sub:'Lots with Full CoA',         note:'Method-referenced certificates' },
]

const VALUES = [
  { title:'Specification Integrity',   desc:'Every CoA reflects actual measured data from the production lot shipped. No interpolated or assumed values — ever.' },
  { title:'Process Partnership',       desc:'We work alongside your process and procurement engineers from qualification through production ramp to ensure seamless integration.' },
  { title:'Supply Reliability',        desc:'Dual-qualified raw material sources and strategic inventory buffers eliminate unplanned supply interruptions to your fab.' },
  { title:'Continuous Improvement',    desc:'Our R&D team continuously tightens specifications as analytical capability and node requirements evolve.' },
  { title:'Environmental Stewardship', desc:'ISO 14001 certified operations with solvent recovery programmes and reduced-emission packaging initiatives.' },
]

const QUALITY = [
  { title:'In-House Analytical Lab',      desc:'ICP-MS, IC, GC-FID/MS, KF titration, LPC, UV spectrophotometry — zero outsourcing of critical lot-release tests.' },
  { title:'ISO Class 3 Fill Room',         desc:'Dedicated cleanroom fill with real-time airborne and liquid particle monitoring. Container-level certification included.' },
  { title:'Statistical Process Control',   desc:'SPC charts on all critical parameters. Trend alerts trigger corrective action before specification exceedance.' },
  { title:'Raw Material Traceability',     desc:'Full upstream traceability from certified suppliers. Incoming QC and scheduled supplier qualification audits.' },
  { title:'N₂ Blanket Packaging',          desc:'Inert-atmosphere fill and hermetic seal to prevent moisture absorption and oxidation during storage and transit.' },
  { title:'SEMI C1 / C12 Compliance',     desc:'Specifications designed against SEMI C1 (electronic grade) and SEMI C12 (photoresist solvent) standards.' },
]

const CERTS = [
  { name:'ISO 9001:2015',    scope:'Quality Management System — Manufacturing & QC operations' },
  { name:'ISO 14001:2015',   scope:'Environmental Management System — Certified operations' },
  { name:'SEMI C1 Tier D',   scope:'G5 Grade Electronic Chemicals — IPA, Ethanol, Acetone, NMP' },
  { name:'SEMI C12',         scope:'Photoresist Process Chemicals — PGMEA, PGME' },
  { name:'REACH / RoHS',     scope:'EU Regulatory Compliance — SDS available in 16 languages' },
  { name:'UN ADR / IATA',    scope:'Hazardous Material Transport Classification — Global shipping' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden"
        style={{ background:'linear-gradient(135deg,#020C1B 0%,#040D1E 55%,#0A1F3A 100%)' }}>
        <div className="grid-bg grid-mask absolute inset-0 pointer-events-none" />
        <div className="glow bg-[#0055CC]/20 w-[580px] h-[380px]" style={{ top:0,right:0 }} />
        <Container className="relative z-10">
          <Eyebrow light>About PureTech Materials</Eyebrow>
          <h1 className="font-serif text-[clamp(30px,4.5vw,54px)] text-white leading-[1.1] mb-4 tracking-[-0.5px]">
            Precision Chemistry for<br />Advanced Semiconductor<br /><span className="grad-text">Manufacturing</span>
          </h1>
          <p className="text-[16px] leading-[1.72] max-w-[560px]" style={{ color:'rgba(255,255,255,0.62)' }}>
            Founded by materials scientists and semiconductor process engineers, PureTech Materials is dedicated exclusively to the development and supply of ultra-high purity electronic chemicals for the world's most advanced fabs, foundries, OSAT operations, and energy storage manufacturers.
          </p>
        </Container>
      </section>

      {/* Mission + Stats */}
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <Reveal>
              <h2 className="font-serif text-[32px] text-[#0A1628] mb-5 tracking-[-0.3px]">Our Mission</h2>
              <p className="text-[#2C4160] leading-[1.78] mb-4 text-[15px]">
                PureTech Materials exists to solve the contamination challenge in semiconductor wet processing. As device dimensions shrink below 3nm and advanced packaging complexity grows, the purity requirements for process chemicals have become more demanding than any other industrial segment.
              </p>
              <p className="text-[#2C4160] leading-[1.78] mb-4 text-[15px]">
                We combine deep expertise in inorganic purification chemistry, analytical metrology, and semiconductor process engineering to produce electronic-grade solvents that consistently meet — and regularly exceed — the purity specifications of leading logic fabs, memory manufacturers, and OSAT operations worldwide.
              </p>
              <p className="text-[#2C4160] leading-[1.78] text-[15px]">
                Our ISO Class 3 production facility operates under ISO 9001:2015 with real-time liquid particle counting, 28-element ICP-MS verification, and full lot traceability on every shipment. We do not compromise on specification integrity — every container carries a full, method-referenced Certificate of Analysis.
              </p>

              <div className="mt-10">
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-8 h-[3px] rounded-full" style={{ background:'linear-gradient(90deg,#0066CC,#00C2FF)' }} />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0055CC]">Core Values</p>
                </div>
                {VALUES.map((v,i) => (
                  <div key={i} className="flex gap-4 items-start py-3.5"
                    style={{ borderBottom:i<VALUES.length-1?'1px solid #E8F0F8':'none' }}>
                    <span className="w-2 h-2 rounded-full bg-[#0066CC] flex-shrink-0 mt-1.5" />
                    <div>
                      <h4 className="text-[14.5px] font-semibold text-[#0A1628] mb-0.5">{v.title}</h4>
                      <p className="text-[13.5px] text-[#2C4160] leading-[1.6]">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Stats card */}
            <Reveal delay={100}>
              <div className="bg-[#040D1E] rounded-[22px] p-9 text-white lg:sticky lg:top-[calc(68px+24px)]">
                <p className="text-[10px] uppercase tracking-[0.14em] mb-6" style={{ color:'rgba(255,255,255,0.32)' }}>Company at a Glance</p>
                <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[12px]"
                  style={{ background:'rgba(255,255,255,0.07)' }}>
                  {STATS.map((s,i) => (
                    <div key={i} className="px-5 py-5" style={{ background:'#071429' }}>
                      <div className="font-mono text-[26px] font-bold text-[#4BAAF5] tracking-tight leading-none">{s.val}</div>
                      <div className="text-[12.5px] text-white font-medium mt-1">{s.sub}</div>
                      <div className="text-[11px] mt-0.5" style={{ color:'rgba(255,255,255,0.38)' }}>{s.note}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 p-5 rounded-[13px]"
                  style={{ background:'rgba(0,102,204,0.12)', border:'1px solid rgba(0,102,204,0.22)' }}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#4BAAF5] mb-2">Technical Team</p>
                  <p className="text-[13px] leading-[1.65]" style={{ color:'rgba(255,255,255,0.58)' }}>
                    Our team includes process engineers with hands-on backgrounds in wet clean, CMP, lithography, and advanced packaging from leading IDMs and foundries. Field application engineers available for on-site qualification and process optimisation.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Manufacturing */}
      <section id="manufacturing" className="py-20 bg-[#F2F6FB]">
        <Container>
          <Reveal className="mb-12">
            <Eyebrow>Manufacturing</Eyebrow>
            <SectionTitle>Production Capacity & Facility Overview</SectionTitle>
            <SectionSub>Our state-of-the-art production facility is purpose-built for high-purity electronic chemical manufacturing.</SectionSub>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title:'100,000 t/a Total Capacity',   desc:'Combined annual production across all 23 product lines. Electronic grade IPA represents the largest single-product capacity across the portfolio.' },
              { title:'ISO Class 3 Fill Environment', desc:'Dedicated cleanroom filling suites with continuous airborne and liquid particle monitoring. Container-level purity certification issued with every batch.' },
              { title:'In-House QC Laboratory',       desc:'ICP-MS, IC, GC-FID/MS, Karl Fischer, LPC, and UV spectrophotometry. Every production lot tested before release — zero outsourcing of critical tests.' },
            ].map((item,i) => (
              <Reveal key={i} delay={i*70}>
                <div className="bg-white border border-[rgba(0,102,204,0.1)] rounded-[13px] p-7 h-full"
                  style={{ boxShadow:'0 1px 3px rgba(4,13,30,0.04)' }}>
                  <div className="w-10 h-1 rounded-full mb-4" style={{ background:'linear-gradient(90deg,#0066CC,#00C2FF)' }} />
                  <h3 className="text-[15px] font-semibold text-[#0A1628] mb-2">{item.title}</h3>
                  <p className="text-[13px] text-[#2C4160] leading-[1.65]">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Quality System */}
      <section id="quality" className="py-24"
        style={{ background:'linear-gradient(180deg,#040D1E 0%,#071429 100%)' }}>
        <Container>
          <Reveal className="text-center mb-16">
            <Eyebrow light>Quality Philosophy</Eyebrow>
            <SectionTitle light center>Built on Analytical Rigor</SectionTitle>
            <p className="text-[15.5px] mt-3 max-w-[500px] mx-auto leading-[1.7]"
              style={{ color:'rgba(255,255,255,0.58)' }}>
              Our quality system is purpose-built for semiconductor chemical supply — not adapted from general industrial practice.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px overflow-hidden rounded-[20px]"
            style={{ background:'rgba(255,255,255,0.06)', outline:'1px solid rgba(255,255,255,0.06)' }}>
            {QUALITY.map((q,i) => (
              <Reveal key={i} delay={i*55}>
                <div className="p-8 h-full hover:bg-[#0A1F3D] transition-colors"
                  style={{ background:'rgba(4,13,30,0.65)' }}>
                  <div className="w-8 h-[3px] rounded-full mb-4" style={{ background:'linear-gradient(90deg,#0066CC,#00C2FF)' }} />
                  <h3 className="text-[15px] font-semibold text-white mb-2">{q.title}</h3>
                  <p className="text-[13px] leading-[1.65]" style={{ color:'rgba(255,255,255,0.52)' }}>{q.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <Container>
          <Reveal className="mb-12">
            <Eyebrow>Certifications & Standards</Eyebrow>
            <SectionTitle>Quality & Compliance</SectionTitle>
            <SectionSub>Our manufacturing, quality, and environmental management systems are independently audited and certified annually.</SectionSub>
          </Reveal>
          <Reveal delay={60}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {CERTS.map((c,i) => (
                <div key={i} className="bg-white border border-[rgba(0,102,204,0.1)] rounded-[13px] p-6"
                  style={{ boxShadow:'0 1px 3px rgba(4,13,30,0.04)' }}>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="#059669" strokeWidth="2">
                        <polyline points="2 6.5 5 9.5 11 3.5"/>
                      </svg>
                    </div>
                    <h4 className="text-[14.5px] font-bold text-[#0A1628] font-mono">{c.name}</h4>
                  </div>
                  <p className="text-[13px] text-[#2C4160] leading-[1.6]">{c.scope}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaBanner
        label="Work With Us"
        title={<>Start a Qualification<br />or Technical Discussion</>}
        subtitle="Our team responds to all technical and commercial inquiries within one business day."
        p1="Contact Us"      h1="/contact"
        p2="Browse Products" h2="/products"
      />
    </>
  )
}
