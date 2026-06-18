import type { Metadata } from 'next'
import Link from 'next/link'
import { Container, Eyebrow, SectionTitle, CtaBanner } from '@/components/ui/index'
import { Reveal } from '@/components/ui/Reveal'
import { solutions } from '@/lib/seo-content'

export const metadata: Metadata = {
  title: 'Application Solutions | IPA Wafer Cleaning, PGMEA EUV Litho, NMP Battery | PureTech',
  description: 'Process-specific chemical guides: IPA for wafer cleaning, PGMEA for EUV lithography, NMP for battery electrode slurry. Grade selection, specs, FAQs.',
}

export default function SolutionsPage() {
  return (
    <>
      <section className="relative py-20 overflow-hidden" style={{background:'linear-gradient(135deg,#020C1B 0%,#040D1E 60%,#071629 100%)'}}>
        <div className="grid-bg grid-mask absolute inset-0 pointer-events-none"/>
        <div className="glow bg-[#0055CC]/18 w-[500px] h-[320px]" style={{top:0,left:'45%',transform:'translateX(-50%)'}}/>
        <Container className="relative z-10">
          <Eyebrow light>Application Solutions</Eyebrow>
          <h1 className="font-serif text-[clamp(28px,4vw,50px)] text-white leading-[1.1] mb-4 tracking-[-0.5px]">Process-Specific Chemical Guides</h1>
          <p className="text-[16px] leading-[1.72] max-w-[540px]" style={{color:'rgba(255,255,255,0.58)'}}>
            Deep-dive application guides matching the right chemical grade to your specific process — with specification tables, grade selection logic, and FAQs.
          </p>
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map((sol,i)=>(
              <Reveal key={sol.slug} delay={i*60}>
                <Link href={`/solutions/${sol.slug}`}
                  className="group flex flex-col bg-white border border-[rgba(0,102,204,0.1)] rounded-[16px] p-6 no-underline h-full hover:shadow-[0_8px_28px_rgba(0,102,204,0.12)] hover:-translate-y-1 transition-all duration-250"
                  style={{boxShadow:'0 1px 4px rgba(4,13,30,0.05)'}}>
                  <div className="mb-4">
                    <span className="text-[10.5px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full bg-[#E8F2FF] text-[#0044BB]">{sol.chemical}</span>
                  </div>
                  <h2 className="text-[16px] font-semibold text-[#0A1628] leading-snug mb-3 group-hover:text-[#0055CC] transition-colors">{sol.title}</h2>
                  <p className="text-[13px] text-[#3A5570] leading-[1.62] flex-1">{sol.intro.slice(0,120)}…</p>
                  <div className="mt-4 pt-4 space-y-1.5" style={{borderTop:'1px solid rgba(0,102,204,0.07)'}}>
                    {sol.specs.slice(0,3).map(s=>(
                      <div key={s.param} className="flex justify-between text-[11.5px]">
                        <span className="text-[#8BA8C0]">{s.param}</span>
                        <span className="font-mono font-semibold text-[#0A1628]">{s.requirement.split('/')[0].trim()}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-[12.5px] font-semibold text-[#0066CC]">
                    Full Grade Guide <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2.5l3.5 3.5L6 9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CtaBanner label="Application Support" title={<>Need Help Selecting<br />the Right Grade?</>}
        subtitle="Our FAE team reviews your process specification and recommends the correct grade with supporting data."
        p1="Contact FAE Team" h1="/contact" p2="Browse Products" h2="/products"/>
    </>
  )
}
