import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Container, CtaBanner, Eyebrow } from '@/components/ui/index'
import { Reveal } from '@/components/ui/Reveal'
import { industries } from '@/lib/industry-content'

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const industry = industries.find((item) => item.slug === slug)
  if (!industry) return { title: 'Not Found' }

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    keywords: industry.keywords.join(', '),
    alternates: { canonical: `https://puretechmaterials.com/industries/${industry.slug}` },
  }
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const industry = industries.find((item) => item.slug === slug)
  if (!industry) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: industry.metaTitle,
    description: industry.metaDescription,
    url: `https://puretechmaterials.com/industries/${industry.slug}`,
    publisher: {
      '@type': 'Organization',
      name: 'PureTech Materials',
      url: 'https://puretechmaterials.com',
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="border-b border-[#DCE3EC] bg-[#F7F9FC] py-3">
        <Container>
          <nav className="flex flex-wrap items-center gap-2 text-[12px] text-[#667085]">
            <Link href="/home" className="no-underline hover:text-[#0066CC]">Home</Link>
            <span className="text-[#B8C2CE]">›</span>
            <Link href="/industries" className="no-underline hover:text-[#0066CC]">Industries</Link>
            <span className="text-[#B8C2CE]">›</span>
            <span className="font-medium text-[#0A1628]">{industry.title}</span>
          </nav>
        </Container>
      </div>

      <section
        className="relative overflow-hidden py-20"
        style={{ background: 'linear-gradient(135deg,#020C1B 0%,#07182D 100%)' }}
      >
        <div className="wafer-bg pointer-events-none absolute inset-0 opacity-20" />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <Eyebrow light>{industry.title}</Eyebrow>
              <h1 className="mb-5 max-w-[760px] font-serif text-[clamp(32px,4.5vw,54px)] leading-[1.08] tracking-[-0.7px] text-white">
                {industry.headline}
              </h1>
              <p className="max-w-[720px] text-[15.5px] leading-[1.75] text-white/65">{industry.intro}</p>
            </div>
            <div className="border-l border-white/15 pl-6">
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8FC7FF]">{industry.heroStatLabel}</p>
              <p className="mb-4 font-serif text-[25px] text-white">{industry.heroStat}</p>
              <div className="flex flex-wrap gap-2">
                {industry.commonEnquiries.map((item) => (
                  <span key={item} className="border border-white/15 px-2.5 py-1 text-[10.5px] text-white/65">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_390px]">
            <div>
              <Reveal className="mb-8">
                <Eyebrow>Qualification reality</Eyebrow>
                <h2 className="font-serif text-[30px] tracking-[-0.3px] text-[#0A1628]">What usually needs a closer look</h2>
              </Reveal>
              <div className="grid grid-cols-1 border-l border-t border-[#DCE3EC] md:grid-cols-2">
                {industry.challenges.map((challenge, index) => (
                  <Reveal key={challenge.title} delay={index * 55}>
                    <div className="h-full border-b border-r border-[#DCE3EC] bg-white p-6">
                      <p className="mb-3 font-mono text-[11px] font-semibold text-[#0066CC]">0{index + 1}</p>
                      <h3 className="mb-2 text-[14px] font-semibold text-[#0A1628]">{challenge.title}</h3>
                      <p className="text-[13px] leading-[1.65] text-[#475467]">{challenge.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal delay={120}>
              <aside className="border-t-4 border-[#0066CC] bg-[#F1F6FB] p-7">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#0055CC]">Before we suggest a product</p>
                <h2 className="mb-5 font-serif text-[23px] leading-tight text-[#0A1628]">Four questions worth answering</h2>
                <ol className="space-y-4">
                  {industry.selectionQuestions.map((question, index) => (
                    <li key={question} className="flex gap-3 text-[13px] leading-[1.6] text-[#344054]">
                      <span className="mt-0.5 shrink-0 font-mono text-[11px] font-semibold text-[#0066CC]">{index + 1}</span>
                      {question}
                    </li>
                  ))}
                </ol>
                <p className="mt-7 border-t border-[#C9DCEB] pt-5 text-[12px] italic leading-[1.65] text-[#475467]">“{industry.editorNote}”</p>
              </aside>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-y border-[#E4E7EC] bg-[#F7F9FC] py-16">
        <Container>
          <Reveal className="mb-8">
            <Eyebrow>Product routes</Eyebrow>
            <h2 className="font-serif text-[30px] tracking-[-0.3px] text-[#0A1628]">A practical starting shortlist</h2>
            <p className="mt-3 max-w-[720px] text-[13.5px] leading-[1.7] text-[#475467]">
              Grade descriptions below indicate the direction of the conversation. The final controlled specification and customer qualification determine suitability.
            </p>
          </Reveal>

          <div className="overflow-hidden border border-[#DCE3EC] bg-white">
            <div className="hidden grid-cols-[1.1fr_1fr_2fr_120px] gap-5 border-b border-[#DCE3EC] bg-[#EEF3F8] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#667085] md:grid">
              <span>Product</span>
              <span>Grade direction</span>
              <span>Often considered for</span>
              <span>Next step</span>
            </div>
            {industry.chemicals.map((chemical, index) => (
              <Reveal key={chemical.name} delay={index * 40}>
                <div className="grid grid-cols-1 gap-3 border-b border-[#EAECF0] px-5 py-5 last:border-b-0 md:grid-cols-[1.1fr_1fr_2fr_120px] md:items-center md:gap-5">
                  <h3 className="text-[14px] font-semibold text-[#0A1628]">{chemical.name}</h3>
                  <span className="w-fit border border-[#B9D3EB] bg-[#EFF6FC] px-2 py-1 font-mono text-[10.5px] font-semibold text-[#0055CC]">{chemical.grade}</span>
                  <p className="text-[13px] leading-[1.55] text-[#475467]">{chemical.use}</p>
                  <Link href={chemical.href} className="text-[12px] font-semibold text-[#0066CC] no-underline hover:underline">View product →</Link>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <Reveal className="mb-9">
            <Eyebrow>Process map</Eyebrow>
            <h2 className="font-serif text-[30px] tracking-[-0.3px] text-[#0A1628]">From use case to qualification</h2>
          </Reveal>
          <div className="space-y-0 border-t border-[#DCE3EC]">
            {industry.processSteps.map((step, index) => (
              <Reveal key={step.step} delay={index * 45}>
                <div className="grid grid-cols-1 gap-3 border-b border-[#DCE3EC] py-5 md:grid-cols-[44px_1fr_1fr_2fr] md:items-start md:gap-5">
                  <span className="font-mono text-[11px] font-semibold text-[#98A2B3]">0{index + 1}</span>
                  <h3 className="text-[13.5px] font-semibold text-[#0A1628]">{step.step}</h3>
                  <div>
                    <p className="text-[13px] font-semibold text-[#0055CC]">{step.chemical}</p>
                    <p className="mt-1 font-mono text-[10.5px] text-[#667085]">{step.grade}</p>
                  </div>
                  <p className="text-[13px] leading-[1.65] text-[#475467]">{step.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#07182D] py-16">
        <Container>
          <Reveal className="mb-8">
            <Eyebrow light>During qualification</Eyebrow>
            <h2 className="font-serif text-[30px] tracking-[-0.3px] text-white">Questions we hear from technical buyers</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-px bg-white/10 lg:grid-cols-3">
            {industry.faqs.map((faq, index) => (
              <Reveal key={faq.q} delay={index * 60}>
                <div className="h-full bg-[#07182D] p-6">
                  <h3 className="mb-3 text-[14px] font-semibold leading-snug text-white">{faq.q}</h3>
                  <p className="text-[13px] leading-[1.7] text-white/55">{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        label={`${industry.title} application review`}
        title={<>Bring us the process.<br />We will help frame the shortlist.</>}
        subtitle="Share a redacted specification, current product, critical limits, pack format and qualification timeline."
        p1="Discuss This Application"
        h1="/contact"
        p2="Open Product Finder"
        h2="/products"
      />
    </>
  )
}
