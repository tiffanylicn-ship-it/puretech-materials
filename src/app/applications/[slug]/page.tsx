import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Container, CtaBanner, Eyebrow } from '@/components/ui/index'
import { Reveal } from '@/components/ui/Reveal'
import { applicationPages, applicationPath, findApplicationPage } from '@/lib/application-pages'

type RouteParams = Promise<{ slug: string }>

export function generateStaticParams() {
  return applicationPages.map((application) => ({ slug: application.slug }))
}

export async function generateMetadata({ params }: { params: RouteParams }): Promise<Metadata> {
  const { slug } = await params
  const application = findApplicationPage(slug)
  if (!application) return { title: 'Application Page Not Found' }

  return {
    title: application.metaTitle,
    description: application.metaDescription,
    keywords: application.keywords,
    alternates: { canonical: `https://puretechmaterials.com${applicationPath(application)}` },
    openGraph: {
      title: application.metaTitle,
      description: application.metaDescription,
      type: 'website',
      url: `https://puretechmaterials.com${applicationPath(application)}`,
    },
  }
}

export default async function ApplicationDetailPage({ params }: { params: RouteParams }) {
  const { slug } = await params
  const application = findApplicationPage(slug)
  if (!application) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: application.metaTitle,
    description: application.metaDescription,
    url: `https://puretechmaterials.com${applicationPath(application)}`,
    about: application.keywords,
    publisher: { '@type': 'Organization', name: 'PURETECHMATERIALS', url: 'https://puretechmaterials.com' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />

      <div className="border-b border-[#DCE3EC] bg-[#F7F9FC] py-3">
        <Container>
          <nav className="flex flex-wrap items-center gap-2 text-[12px] text-[#667085]">
            <Link href="/applications" className="no-underline hover:text-[#12657B]">Applications</Link>
            <span>›</span>
            <span className="font-medium text-[#0A1628]">{application.navLabel}</span>
          </nav>
        </Container>
      </div>

      <section className="relative min-h-[580px] overflow-hidden bg-[#061d2b] text-white">
        <Image src={application.image} alt={application.imageAlt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061d2b] via-[#061d2b]/92 to-[#061d2b]/20" />
        <Container className="relative z-10 flex min-h-[580px] items-center py-20">
          <div className="max-w-[780px]">
            <Eyebrow light>{application.title}</Eyebrow>
            <h1 className="mt-5 font-serif text-[clamp(35px,4.7vw,58px)] leading-[1.06] tracking-[-0.75px]">{application.headline}</h1>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.1em] text-[#9ED8C2]">{application.subline}</p>
            <p className="mt-7 max-w-[720px] text-[16px] leading-[1.78] text-white/70">{application.overview}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="#related-products" className="bg-white px-6 py-3.5 text-[13px] font-semibold text-[#08283b] no-underline hover:bg-[#DDEDE4]">View related products</Link>
              <Link href="/contact" className="border border-white/25 px-6 py-3.5 text-[13px] font-semibold text-white no-underline hover:bg-white/10">Discuss this application</Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal>
            <Eyebrow>Application scope</Eyebrow>
            <div className="mt-3 grid grid-cols-1 gap-5 lg:grid-cols-[380px_1fr] lg:items-end">
              <h2 className="font-serif text-[31px] leading-tight text-[#0A1628]">Where the chemical conversation usually begins</h2>
              <p className="max-w-[720px] text-[13.5px] leading-[1.75] text-[#475467]">These are discovery routes, not universal suitability claims. Final selection still depends on material compatibility, the controlled specification and customer qualification.</p>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-px bg-[#DCE3EC] md:grid-cols-2 lg:grid-cols-4">
            {application.applications.map((item, index) => (
              <Reveal key={item.title} delay={index * 50}>
                <article className="h-full bg-white p-7">
                  <span className="font-mono text-[11px] font-semibold text-[#2F8C67]">0{index + 1}</span>
                  <h3 className="mt-7 text-[15px] font-semibold text-[#0A1628]">{item.title}</h3>
                  <p className="mt-3 text-[13px] leading-[1.7] text-[#475467]">{item.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#F1F5F3] py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[360px_1fr]">
            <Reveal>
              <div>
                <Eyebrow>Before product selection</Eyebrow>
                <h2 className="mt-3 font-serif text-[31px] leading-tight text-[#0A1628]">Four details that make the shortlist useful</h2>
                <p className="mt-5 text-[13.5px] leading-[1.75] text-[#475467]">A product name opens the enquiry. Process context determines whether the first sample is relevant.</p>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 gap-px bg-[#CBD8D5] md:grid-cols-2">
              {application.reviewPoints.map((item, index) => (
                <Reveal key={item.title} delay={index * 50}>
                  <article className="h-full bg-white p-6">
                    <div className="flex items-start gap-4">
                      <span className="shrink-0 font-mono text-[11px] font-semibold text-[#2F8C67]">0{index + 1}</span>
                      <div><h3 className="text-[14px] font-semibold text-[#0A1628]">{item.title}</h3><p className="mt-2 text-[12.8px] leading-[1.7] text-[#475467]">{item.detail}</p></div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal>
            <Eyebrow>Application process</Eyebrow>
            <h2 className="mt-3 font-serif text-[31px] text-[#0A1628]">From use case to qualified supply</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 border-l border-t border-[#DCE3EC] lg:grid-cols-4">
            {application.process.map((step, index) => (
              <Reveal key={step.title} delay={index * 55}>
                <article className="relative h-full border-b border-r border-[#DCE3EC] bg-white p-6">
                  <span className="font-mono text-[11px] font-semibold text-[#12657B]">0{index + 1}</span>
                  <h3 className="mt-8 text-[14px] font-semibold text-[#0A1628]">{step.title}</h3>
                  <p className="mt-3 text-[12.8px] leading-[1.7] text-[#475467]">{step.detail}</p>
                  {index < application.process.length - 1 && <span className="absolute -right-2.5 top-7 z-10 hidden size-5 items-center justify-center border border-[#DCE3EC] bg-white text-[11px] text-[#2F8C67] lg:flex">→</span>}
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="related-products" className="scroll-mt-24 border-y border-[#E4E7EC] bg-[#F7F9FC] py-20">
        <Container>
          <Reveal>
            <Eyebrow>Related products</Eyebrow>
            <h2 className="mt-3 font-serif text-[31px] text-[#0A1628]">A focused starting shortlist</h2>
            <p className="mt-4 max-w-[780px] text-[14px] leading-[1.72] text-[#475467]">Use these routes for initial screening. Current specification, grade availability, documentation, packaging and destination should be confirmed before qualification.</p>
          </Reveal>
          <div className="mt-10 overflow-hidden border border-[#DCE3EC] bg-white">
            <div className="hidden grid-cols-[1.05fr_2fr_150px] gap-5 border-b border-[#DCE3EC] bg-[#EDF2F4] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#667085] md:grid">
              <span>Product or route</span><span>Application fit</span><span>Next step</span>
            </div>
            {application.products.map((product, index) => (
              <Reveal key={product.name} delay={(index % 5) * 40}>
                <div className="grid grid-cols-1 gap-3 border-b border-[#EAECF0] px-5 py-5 last:border-b-0 md:grid-cols-[1.05fr_2fr_150px] md:items-center md:gap-5">
                  <div>
                    <h3 className="text-[14px] font-semibold text-[#0A1628]">{product.name}</h3>
                    {product.note && <span className="mt-2 inline-flex border border-[#BFD4CD] bg-[#F1F8F5] px-2 py-1 font-mono text-[9.5px] font-semibold text-[#267456]">{product.note}</span>}
                  </div>
                  <p className="text-[13px] leading-[1.6] text-[#475467]">{product.use}</p>
                  <Link href={product.href} className="text-[12px] font-semibold text-[#12657B] no-underline hover:underline">{product.note ? 'Discuss requirement →' : 'View product →'}</Link>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#07182D] text-white">
        <Container>
          <div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-[1fr_390px] lg:items-center">
            <Reveal>
              <div>
                <Eyebrow light>Manufacturing & qualification</Eyebrow>
                <h2 className="mt-3 font-serif text-[31px]">The application should shape the supply route</h2>
                <p className="mt-5 max-w-[760px] text-[14px] leading-[1.75] text-white/62">{application.manufacturingNote}</p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <aside className="border border-white/12 bg-white/[0.045] p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8FC7FF]">Continue the review</p>
                <div className="mt-6 grid gap-2">
                  <Link href="/manufacturing" className="border border-white/15 px-5 py-3 text-[12.5px] font-semibold text-white no-underline hover:bg-white/10">Manufacturing approach →</Link>
                  <Link href="/quality" className="border border-white/15 px-5 py-3 text-[12.5px] font-semibold text-white no-underline hover:bg-white/10">Quality & documentation →</Link>
                  <Link href="/contact" className="bg-[#2F8C67] px-5 py-3 text-[12.5px] font-semibold text-white no-underline hover:bg-[#267456]">Request technical review →</Link>
                </div>
              </aside>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBanner label={`${application.navLabel} application`} title={<>Bring us the process.<br />We will help frame the shortlist.</>} subtitle="Share the use, current product or specification, critical limits, pack and qualification timing." p1="Discuss This Application" h1="/contact" p2="All Applications" h2="/applications" />
    </>
  )
}
