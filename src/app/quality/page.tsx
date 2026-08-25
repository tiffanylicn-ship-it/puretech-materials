import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container, CtaBanner, Eyebrow } from '@/components/ui/index'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Quality, Documentation & Compliance Support',
  description: 'PureTech quality approach for specifications, analytical methods, batch traceability, CoA, SDS, change control and market-specific compliance support.',
  alternates: { canonical: 'https://puretechmaterials.com/quality' },
  openGraph: { title: 'Quality, Documentation & Compliance Support | PURETECHMATERIALS', description: 'Review testing, documentation, compliance and traceability routes for high-purity chemical supply.', type: 'website', url: 'https://puretechmaterials.com/quality', images: [{ url: 'https://puretechmaterials.com/images/puretech/quality-control.jpg', alt: 'High-purity chemical quality testing and documentation' }] },
  twitter: { card: 'summary_large_image', title: 'Quality, Documentation & Compliance Support | PURETECHMATERIALS', description: 'Review testing, documentation, compliance and traceability routes for high-purity chemical supply.', images: ['https://puretechmaterials.com/images/puretech/quality-control.jpg'] },
}

const qualityRoutes = [
  ['Testing Capability', '/quality/testing'],
  ['Quality Documentation', '/quality/documentation'],
  ['Compliance Support', '/quality/compliance'],
  ['Batch Traceability', '/quality/traceability'],
]

const qualityPillars = [
  ['Controlled specification', 'Acceptance should be based on an agreed specification with defined parameters, methods, units and limits.'],
  ['Method fit', 'Reporting limits and analytical sensitivity must make sense for the grade and the customer’s critical attributes.'],
  ['Lot traceability', 'Production, sampling, testing, packaging and release records should connect to the supplied batch.'],
  ['Change management', 'Material changes need risk review and customer communication consistent with the supply agreement.'],
]

const documents = [
  ['Specification', 'The controlled limits and referenced test methods used for the supplied grade.'],
  ['Certificate of Analysis', 'Lot-specific results or conformance fields in the agreed release format.'],
  ['Safety Data Sheet', 'Hazard, handling, storage, transport and regulatory information for the relevant market.'],
  ['Technical Data Sheet', 'Product identity, typical properties, applications and available packaging information.'],
  ['Declarations', 'Product- and market-specific regulatory or composition statements where applicable.'],
  ['Change notification', 'The agreed route for communicating changes that may affect a qualified product.'],
]

const methods = ['GC / GC-MS', 'HPLC', 'ICP-MS', 'Ion chromatography', 'Karl Fischer', 'UV-visible', 'Particle counting', 'Gravimetric residue']

export default function QualityPage() {
  return (
    <>
      <section className="relative min-h-[540px] overflow-hidden bg-[#061d2b] text-white">
        <Image src="/images/puretech/quality-control.jpg" alt="Quality control laboratory for chemical analysis" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061d2b] via-[#061d2b]/88 to-[#061d2b]/20" />
        <Container className="relative z-10 flex min-h-[540px] items-center py-20">
          <div className="max-w-[680px]">
            <Eyebrow light>Quality & compliance</Eyebrow>
            <h1 className="mt-5 font-serif text-[clamp(34px,4.5vw,56px)] leading-[1.08] tracking-[-0.7px]">Quality should be reviewable, not simply claimed</h1>
            <p className="mt-6 max-w-[640px] text-[16px] leading-[1.75] text-white/68">Technical buyers need a specification they can compare, methods they can understand, lot records they can trace and documents their quality system can control.</p>
          </div>
        </Container>
      </section>

      <section className="border-b border-[#DCE3EC] bg-white py-7">
        <Container>
          <div className="grid grid-cols-1 gap-px bg-[#DCE3EC] sm:grid-cols-2 lg:grid-cols-4">
            {qualityRoutes.map(([label, href], index) => <Link key={href} href={href} className="group flex items-center justify-between bg-[#F7F9FC] px-5 py-4 text-[#102A43] no-underline hover:bg-[#EFF7F3]"><span><span className="mr-3 font-mono text-[10px] text-[#2F8C67]">0{index + 1}</span><span className="text-[12.5px] font-semibold">{label}</span></span><span className="text-[#2F8C67]">→</span></Link>)}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal>
            <Eyebrow>Quality system</Eyebrow>
            <h2 className="mt-3 font-serif text-[31px] text-[#0A1628]">Four principles behind a useful supplier review</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-px bg-[#DCE3EC] md:grid-cols-2 lg:grid-cols-4">
            {qualityPillars.map(([title, text], index) => (
              <Reveal key={title} delay={index * 55}>
                <article className="h-full bg-white p-7">
                  <span className="font-mono text-[11px] font-semibold text-[#2F8C67]">0{index + 1}</span>
                  <h3 className="mt-8 text-[15px] font-semibold text-[#0A1628]">{title}</h3>
                  <p className="mt-3 text-[13px] leading-[1.65] text-[#475467]">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#07182D] py-20 text-white">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr]">
            <Reveal>
              <Eyebrow light>Testing capability</Eyebrow>
              <h2 className="mt-3 font-serif text-[31px]">The method must be suitable for the decision</h2>
              <p className="mt-5 text-[14px] leading-[1.75] text-white/60">Product specifications may reference different analytical techniques depending on the chemical, grade and critical impurity. Method availability, scope and reporting limit should be confirmed during document review.</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {methods.map((method) => <span key={method} className="border border-white/15 px-3 py-2 font-mono text-[11px] text-white/70">{method}</span>)}
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="border-l-4 border-[#62BD88] bg-white/[0.05] p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8FC7FF]">A note on standards</p>
                <p className="mt-4 text-[14px] leading-[1.75] text-white/68">Standards and grade names help organise requirements. They do not replace the agreed sales specification, customer risk assessment or product qualification.</p>
                <p className="mt-4 text-[13px] leading-[1.7] text-white/50">Ask for the current product-specific status before using words such as certified, compliant or pharmaceutical grade in a controlled document.</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-[#F1F5F3] py-20">
        <Container>
          <Reveal>
            <Eyebrow>Documentation</Eyebrow>
            <h2 className="mt-3 font-serif text-[31px] text-[#0A1628]">Build the document pack before qualification closes</h2>
            <p className="mt-4 max-w-[760px] text-[14px] leading-[1.7] text-[#475467]">The exact package varies by product, grade, destination and customer quality system. Request current controlled versions rather than relying on an old website download.</p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 border-t border-l border-[#D5E0E3] md:grid-cols-2 lg:grid-cols-3">
            {documents.map(([title, text]) => (
              <article key={title} className="border-r border-b border-[#D5E0E3] bg-white p-6">
                <h3 className="text-[14px] font-semibold text-[#0A1628]">{title}</h3>
                <p className="mt-2 text-[12.5px] leading-[1.65] text-[#475467]">{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/resources" className="bg-[#12657B] px-6 py-3 text-[13px] font-semibold text-white no-underline hover:bg-[#2F8C67]">Open document centre</Link>
            <Link href="/contact" className="border border-[#12657B] px-6 py-3 text-[13px] font-semibold text-[#12657B] no-underline">Request a document pack</Link>
          </div>
        </Container>
      </section>

      <CtaBanner label="Quality review" title={<>Preparing a supplier<br />qualification package?</>} subtitle="Send the product, grade, destination market and document checklist required by your quality team." p1="Request Quality Documents" h1="/contact" p2="View Manufacturing" h2="/manufacturing" />
    </>
  )
}
