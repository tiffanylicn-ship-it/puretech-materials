import type { Metadata } from 'next'
import Link from 'next/link'
import { Container, CtaBanner, Eyebrow } from '@/components/ui/index'
import { Reveal } from '@/components/ui/Reveal'
import { industries } from '@/lib/industry-content'

export const metadata: Metadata = {
  title: 'Industries & Application Guides | PureTech Materials',
  description:
    'Explore process-led chemical guides for semiconductor, battery, display and pharmaceutical applications, then narrow the relevant product family and grade.',
}

export default function IndustriesPage() {
  return (
    <>
      <section
        className="relative overflow-hidden py-20"
        style={{ background: 'linear-gradient(135deg,#020C1B 0%,#07182D 100%)' }}
      >
        <div className="grid-bg grid-mask pointer-events-none absolute inset-0" />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <Eyebrow light>Application guides</Eyebrow>
              <h1 className="mb-5 max-w-[760px] font-serif text-[clamp(32px,4.5vw,56px)] leading-[1.08] tracking-[-0.7px] text-white">
                Choose the process environment.<br />Then build the shortlist.
              </h1>
              <p className="max-w-[650px] text-[16px] leading-[1.75] text-white/65">
                Four practical guides for technical buyers, process teams and laboratories. Each one begins with the job being done, the questions worth asking and the chemicals commonly considered.
              </p>
            </div>
            <div className="border-l border-white/15 pl-6">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8FC7FF]">How to use these pages</p>
              <p className="text-[13px] leading-[1.7] text-white/55">
                Use the guide to frame an enquiry. Final product selection should follow your controlled specification, risk assessment and qualification plan.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="mb-9 grid grid-cols-1 gap-4 md:grid-cols-[1fr_450px] md:items-end">
            <div>
              <Eyebrow>Choose a process environment</Eyebrow>
              <h2 className="font-serif text-[30px] tracking-[-0.3px] text-[#0A1628]">Where will the chemical be used?</h2>
            </div>
            <p className="text-[13.5px] leading-[1.7] text-[#475467]">
              The same chemical name can lead to very different requirements. These pages separate the conversations before they turn into specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 border-l border-t border-[#DCE3EC] md:grid-cols-2">
            {industries.map((industry, index) => (
              <Reveal key={industry.slug} delay={index * 70}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group flex h-full flex-col border-b border-r border-[#DCE3EC] bg-white p-7 no-underline transition-colors hover:bg-[#F7F9FC] lg:p-9"
                >
                  <div className="mb-7 flex items-start justify-between gap-4">
                    <span className="font-mono text-[12px] font-semibold text-[#98A2B3]">0{index + 1}</span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#0066CC]">{industry.heroStat}</span>
                  </div>
                  <h2 className="mb-2 font-serif text-[25px] leading-tight text-[#0A1628] transition-colors group-hover:text-[#0055CC]">
                    {industry.title}
                  </h2>
                  <p className="mb-5 text-[12px] font-medium text-[#667085]">{industry.subline}</p>
                  <p className="mb-7 line-clamp-4 flex-1 text-[13.5px] leading-[1.7] text-[#475467]">{industry.intro}</p>

                  <div className="mb-6">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#667085]">Common starting points</p>
                    <div className="flex flex-wrap gap-2">
                      {industry.commonEnquiries.map((item) => (
                        <span key={item} className="border border-[#D0D5DD] bg-white px-2.5 py-1 text-[11px] text-[#344054]">{item}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-[#EAECF0] pt-4">
                    <span className="text-[11px] text-[#667085]">{industry.chemicals.length} product routes</span>
                    <span className="text-[13px] font-semibold text-[#0066CC]">Open process guide →</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        label="Application review"
        title={<>Have a specification,<br />process note or incumbent grade?</>}
        subtitle="Send us the context. We can help organise the shortlist and document questions before a sample is proposed."
        p1="Discuss Your Application"
        h1="/contact"
        p2="Use Product Finder"
        h2="/products"
      />
    </>
  )
}
