import type { Metadata } from 'next'
import Link from 'next/link'
import { Container, Eyebrow, SectionTitle, SectionSub, CtaBanner } from '@/components/ui/index'
import { Reveal } from '@/components/ui/Reveal'
import { industries } from '@/lib/seo-content'

export const metadata: Metadata = {
  title: 'Industries Served | Semiconductor, EV Battery, Display, Pharma | PureTech',
  description: 'PureTech supplies electronic grade chemicals for semiconductor fabs, EV battery gigafactories, display panel manufacturers, and pharmaceutical labs. SEMI C1 G1–G5.',
}

const ICONS: Record<string,string> = { semiconductor:'💾','ev-battery':'🔋','display-panel':'📺','pharmaceutical-lab':'🧪' }

export default function IndustriesPage() {
  return (
    <>
      <section className="relative py-20 overflow-hidden"
        style={{ background:'linear-gradient(135deg,#020C1B 0%,#040D1E 60%,#071629 100%)' }}>
        <div className="grid-bg grid-mask absolute inset-0 pointer-events-none"/>
        <div className="glow bg-[#0055CC]/20 w-[500px] h-[320px]" style={{ top:0,left:'40%',transform:'translateX(-50%)' }}/>
        <Container className="relative z-10">
          <Eyebrow light>Industries Served</Eyebrow>
          <h1 className="font-serif text-[clamp(30px,4.5vw,52px)] text-white leading-[1.1] mb-4 tracking-[-0.5px]">
            Precision Chemistry Across<br /><span className="grad-text">Every Advanced Industry</span>
          </h1>
          <p className="text-[16px] leading-[1.72] max-w-[540px]" style={{ color:'rgba(255,255,255,0.58)' }}>
            From sub-3nm logic foundry to EV gigafactory — PureTech supplies the right grade of electronic chemical for every industrial application.
          </p>
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((ind,i) => (
              <Reveal key={ind.slug} delay={i*70}>
                <Link href={`/industries/${ind.slug}`}
                  className="group flex flex-col bg-white border border-[rgba(0,102,204,0.1)] rounded-[20px] overflow-hidden no-underline hover:shadow-[0_8px_32px_rgba(0,102,204,0.12)] hover:-translate-y-1 transition-all duration-250"
                  style={{ boxShadow:'0 1px 4px rgba(4,13,30,0.05)' }}>
                  <div className="relative p-8 pb-6 overflow-hidden" style={{ background:'linear-gradient(135deg,#040D1E,#071429)' }}>
                    <div className="wafer-bg absolute inset-0 opacity-30 pointer-events-none"/>
                    <div className="relative z-10 flex items-start justify-between">
                      <div>
                        <div className="text-[32px] mb-3">{ICONS[ind.slug]||'⚗️'}</div>
                        <h2 className="font-serif text-[22px] text-white leading-tight mb-1">{ind.title}</h2>
                        <p className="text-[12px] font-mono" style={{ color:'rgba(0,194,255,0.55)' }}>{ind.subline}</p>
                      </div>
                      <div className="text-right flex-shrink-0 ml-4">
                        <div className="font-mono text-[26px] font-bold text-[#4BAAF5] leading-none">{ind.heroStat}</div>
                        <div className="text-[10px] mt-0.5 uppercase tracking-[0.08em]" style={{ color:'rgba(255,255,255,0.35)' }}>{ind.heroStatLabel}</div>
                      </div>
                    </div>
                    <div className="relative z-10 flex flex-wrap gap-1.5 mt-4">
                      {ind.chemicals.slice(0,4).map(c => (
                        <span key={c.name} className="font-mono text-[10px] px-2 py-0.5 rounded-[4px]"
                          style={{ background:'rgba(255,255,255,0.08)',color:'rgba(255,255,255,0.65)',border:'1px solid rgba(255,255,255,0.12)' }}>
                          {c.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-8 pt-6 flex flex-col flex-1">
                    <p className="text-[14px] text-[#2C4160] leading-[1.68] mb-5 flex-1">{ind.intro}</p>
                    <div className="space-y-2.5 mb-5">
                      {ind.challenges.slice(0,2).map(c => (
                        <div key={c.title} className="flex gap-2.5 items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#0066CC] flex-shrink-0 mt-1.5"/>
                          <p className="text-[13px] text-[#3A5570]"><strong className="text-[#0A1628]">{c.title}:</strong> {c.desc.slice(0,80)}…</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4" style={{ borderTop:'1px solid rgba(0,102,204,0.08)' }}>
                      <div className="flex flex-wrap gap-1">
                        {ind.keywords.slice(0,2).map(k => (
                          <span key={k} className="text-[10px] px-2 py-0.5 rounded-full bg-[#E8F2FF] text-[#0044BB]">{k}</span>
                        ))}
                      </div>
                      <span className="text-[13px] font-semibold text-[#0066CC] flex items-center gap-1">
                        Full Guide <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5h9M7 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CtaBanner label="Industry Support" title={<>Talk to an Application<br />Engineer</>}
        subtitle="Our FAE team has hands-on process experience across all industries we serve."
        p1="Contact FAE Team" h1="/contact" p2="Browse Products" h2="/products"/>
    </>
  )
}
