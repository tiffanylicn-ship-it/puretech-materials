import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container, CtaBanner, Eyebrow } from '@/components/ui/index'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Custom Chemical Supply, Packaging & Private Label',
  description: 'Discuss custom specifications, private-label supply, packaging, bulk programmes and distributor support with PureTech Materials.',
}

const services: { title: string; text: string; href?: string }[] = [
  { title: 'Chemical OEM', text: 'Product, specification, test methods, packaging, label and qualification organised as one contract-manufacturing programme.', href: '/custom-solutions/chemical-oem' },
  { title: 'Bulk supply', text: 'Drum, IBC and project-specific supply routes reviewed against consumption, site handling, logistics and continuity needs.', href: '/custom-solutions/bulk-supply' },
  { title: 'Private label', text: 'Qualified products supplied with agreed artwork, product naming and market-specific document requirements.' },
  { title: 'Custom packaging', text: 'Bottle, can, drum, IBC or bulk formats reviewed against product compatibility, volume and transport needs.' },
  { title: 'Custom specification', text: 'A controlled specification developed from the use case, critical attributes, methods and practical manufacturing route.' },
  { title: 'Contract supply', text: 'Planned production and delivery programmes for repeat demand under agreed commercial and quality terms.' },
  { title: 'Distributor programmes', text: 'Portfolio, packaging, documentation and territory discussions for specialist chemical distribution partners.' },
  { title: 'Consolidated supply', text: 'Multiple products coordinated into a practical order and export-document package where regulations allow.' },
]

const workflow = [
  ['01', 'Define', 'Application, current specification, destination, pack and annual demand.'],
  ['02', 'Review', 'Technical feasibility, document requirements, regulatory scope and commercial fit.'],
  ['03', 'Sample', 'Agree the sample or pilot format and the data needed for evaluation.'],
  ['04', 'Qualify', 'Compare performance and documents against the customer approval plan.'],
  ['05', 'Supply', 'Set routine pack, forecast, release documents, logistics and change terms.'],
]

export default function CustomSolutionsPage() {
  return (
    <>
      <section className="relative min-h-[540px] overflow-hidden bg-[#061d2b] text-white">
        <Image src="/images/puretech/hero.jpg" alt="Chemical production and flexible container formats" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061d2b] via-[#061d2b]/90 to-[#061d2b]/15" />
        <Container className="relative z-10 flex min-h-[540px] items-center py-20">
          <div className="max-w-[700px]">
            <Eyebrow light>Custom solutions</Eyebrow>
            <h1 className="mt-5 font-serif text-[clamp(34px,4.5vw,56px)] leading-[1.08] tracking-[-0.7px]">When the catalogue is only the starting point</h1>
            <p className="mt-6 max-w-[650px] text-[16px] leading-[1.75] text-white/68">Private label, custom packaging, controlled specifications and long-term supply programmes for manufacturers and specialist distributors.</p>
            <Link href="/contact" className="mt-9 inline-flex bg-white px-6 py-3.5 text-[13px] font-semibold text-[#08283b] no-underline hover:bg-[#DDEDE4]">Start a custom supply discussion</Link>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal>
            <Eyebrow>Scope</Eyebrow>
            <h2 className="mt-3 font-serif text-[31px] text-[#0A1628]">Eight ways a supply programme can be adapted</h2>
            <p className="mt-4 max-w-[760px] text-[14px] leading-[1.7] text-[#475467]">Not every product is suitable for every option. Feasibility depends on chemistry, grade, order volume, packaging compatibility, destination and regulatory requirements.</p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-px bg-[#DCE3EC] md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 45}>
                {service.href ? (
                  <Link href={service.href} className="group block h-full bg-white p-7 text-[#0A1628] no-underline hover:bg-[#F7FBF9]">
                    <span className="font-mono text-[12px] text-[#2F8C67]">0{index + 1}</span>
                    <h3 className="mt-6 text-[15px] font-semibold group-hover:text-[#12657B]">{service.title}</h3>
                    <p className="mt-3 text-[13px] leading-[1.65] text-[#475467]">{service.text}</p>
                    <span className="mt-5 block text-[12px] font-semibold text-[#12657B]">Explore service →</span>
                  </Link>
                ) : (
                  <article className="h-full bg-white p-7">
                    <span className="font-mono text-[12px] text-[#2F8C67]">0{index + 1}</span>
                    <h3 className="mt-6 text-[15px] font-semibold text-[#0A1628]">{service.title}</h3>
                    <p className="mt-3 text-[13px] leading-[1.65] text-[#475467]">{service.text}</p>
                  </article>
                )}
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#F1F5F3] py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_410px]">
            <div>
              <Reveal>
                <Eyebrow>Working route</Eyebrow>
                <h2 className="mt-3 font-serif text-[31px] text-[#0A1628]">From initial brief to routine supply</h2>
              </Reveal>
              <div className="mt-9 border-t border-[#CCD9DD]">
                {workflow.map(([no, title, text], index) => (
                  <Reveal key={no} delay={index * 45}>
                    <div className="grid grid-cols-[40px_110px_1fr] gap-4 border-b border-[#CCD9DD] py-5">
                      <span className="font-mono text-[11px] font-semibold text-[#2F8C67]">{no}</span>
                      <h3 className="text-[13.5px] font-semibold text-[#0A1628]">{title}</h3>
                      <p className="text-[13px] leading-[1.6] text-[#475467]">{text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal delay={90}>
              <aside className="border-t-4 border-[#12657B] bg-white p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#12657B]">A useful first brief</p>
                <h2 className="mt-3 font-serif text-[24px] text-[#0A1628]">Send enough context to avoid a generic quotation</h2>
                <ul className="mt-6 space-y-3">
                  {['Product or chemical family', 'Intended application and destination market', 'Current or target specification', 'Required documents and declarations', 'Pack format and label language', 'Sample quantity, annual demand and timing'].map((item) => (
                    <li key={item} className="flex gap-3 text-[13px] leading-[1.55] text-[#475467]"><span className="text-[#2F8C67]">—</span>{item}</li>
                  ))}
                </ul>
              </aside>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-[#07182D] py-16 text-white">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/45">For distribution partners</p>
              <h2 className="mt-3 font-serif text-[30px]">Build a focused portfolio, not a long product list</h2>
              <p className="mt-4 max-w-[760px] text-[14px] leading-[1.7] text-white/60">We can organise product families around target markets, documentation needs, pack sizes and realistic supply volumes for Europe and North America.</p>
            </div>
            <Link href="/contact" className="border border-white/25 px-6 py-3.5 text-[13px] font-semibold text-white no-underline hover:bg-white/10">Discuss partnership</Link>
          </div>
        </Container>
      </section>

      <CtaBanner label="Custom supply" title={<>Have a product brief<br />or distributor requirement?</>} subtitle="Send the specification, application, market, pack and demand profile so we can review feasibility." p1="Submit Your Brief" h1="/contact" p2="Browse Products" h2="/products" />
    </>
  )
}
