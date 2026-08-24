import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Container, CtaBanner, Eyebrow } from '@/components/ui/index'
import { Reveal } from '@/components/ui/Reveal'

interface CustomSolutionPage {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  eyebrow: string
  headline: string
  intro: string
  image: string
  imageAlt: string
  suitedFor: { title: string; detail: string }[]
  decisions: { title: string; detail: string }[]
  firstBrief: string[]
}

const pages: CustomSolutionPage[] = [
  {
    slug: 'chemical-oem',
    title: 'Chemical OEM Manufacturing',
    metaTitle: 'Chemical OEM Manufacturer | Custom Chemical Solutions',
    metaDescription: 'Chemical OEM and contract supply programmes covering specification review, packaging, private label, qualification and repeat high-purity chemical supply.',
    eyebrow: 'Chemical OEM manufacturing',
    headline: 'A chemical OEM programme built around the product brief',
    intro: 'Good OEM work begins before the filling line. Chemistry, specification, test methods, pack, artwork, destination market and forecast all need to describe the same commercial product. We use the first review to expose gaps early, while they are still inexpensive to solve.',
    image: '/images/puretech/manufacturing.jpg',
    imageAlt: 'Chemical purification and filling environment for an OEM supply discussion',
    suitedFor: [
      { title: 'Portfolio extension', detail: 'A specialist brand or distributor adding a focused solvent or reagent family without building a new production route.' },
      { title: 'Qualified alternate supply', detail: 'Manufacturers evaluating a second source against an existing controlled specification and approval plan.' },
      { title: 'Market-specific presentation', detail: 'Products requiring agreed pack sizes, label language and document presentation for a defined destination.' },
    ],
    decisions: [
      { title: 'Product definition', detail: 'Chemical identity, intended use, grade, concentration and any existing reference material.' },
      { title: 'Controlled specification', detail: 'Critical limits, test methods, reporting format and which values govern release.' },
      { title: 'Packaging system', detail: 'Container, closure, fill volume, label, case configuration and compatibility review.' },
      { title: 'Quality agreement', detail: 'Lot traceability, CoA, retained records, deviation handling and change-notification expectations.' },
      { title: 'Qualification route', detail: 'Sample, pilot and production-lot sequence with clear acceptance responsibilities.' },
      { title: 'Supply plan', detail: 'Forecast, minimum campaign, lead time, destination, shipping constraints and contingency planning.' },
    ],
    firstBrief: ['Chemical name, concentration and intended application', 'Current or target specification with test methods', 'Required quality, regulatory and transport documents', 'Container, fill volume, closure and label language', 'Sample quantity, annual forecast and launch timing', 'Destination countries and responsible importer or distributor'],
  },
  {
    slug: 'bulk-supply',
    title: 'Bulk Chemical Supply',
    metaTitle: 'Bulk Chemical Supply | Drums, IBC & Planned Solvent Programmes',
    metaDescription: 'Bulk high-purity and specialty chemical supply in drums, IBCs or project-specific formats, with specification, logistics and delivery planning.',
    eyebrow: 'Bulk chemical supply',
    headline: 'Move from spot orders to a supply plan the site can run',
    intro: 'Bulk purchasing is not simply the bottle price multiplied by a larger number. Container compatibility, unloading, sampling, inventory, forecast accuracy and the consequences of a late lot become part of the product. We review those operating details before recommending a drum, IBC or other supply route.',
    image: '/images/puretech/high-purity-solvents.jpg',
    imageAlt: 'High-purity solvent production and storage environment for bulk supply planning',
    suitedFor: [
      { title: 'Growing production demand', detail: 'Teams moving from qualification bottles or small packs into repeat manufacturing consumption.' },
      { title: 'Multi-site programmes', detail: 'A shared product specification with site-specific delivery, storage and documentation requirements.' },
      { title: 'Long-term requirements', detail: 'Forecasted demand where campaign planning and packaging availability matter more than a one-off spot price.' },
    ],
    decisions: [
      { title: 'Consumption profile', detail: 'Annual volume, normal drawdown, peaks, safety stock and realistic forecast horizon.' },
      { title: 'Pack compatibility', detail: 'Chemical, grade, container material, closure, liner and expected time in pack.' },
      { title: 'Site handling', detail: 'Receiving limits, unloading, lifting, earthing, ventilation, connections and sampling procedure.' },
      { title: 'Release documents', detail: 'Controlled specification, CoA fields, test methods and any pre-shipment review.' },
      { title: 'Transport route', detail: 'Destination, dangerous-goods classification, carrier constraints and returnable-pack practicality.' },
      { title: 'Continuity plan', detail: 'Lead time, order cadence, raw-material exposure, packaging stock and agreed escalation points.' },
    ],
    firstBrief: ['Product, grade and current specification', 'Annual volume and monthly consumption pattern', 'Preferred drum, IBC or other pack format', 'Site receiving, transfer and sampling constraints', 'Destination and required delivery terms', 'Target start date, safety stock and qualification needs'],
  },
]

type RouteParams = Promise<{ slug: string }>

export function generateStaticParams() {
  return pages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: { params: RouteParams }): Promise<Metadata> {
  const { slug } = await params
  const page = pages.find((item) => item.slug === slug)
  if (!page) return { title: 'Custom Solution Not Found' }
  const url = `https://puretechmaterials.com/custom-solutions/${page.slug}`
  const image = `https://puretechmaterials.com${page.image}`
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: page.metaTitle, description: page.metaDescription, type: 'website', url, images: [{ url: image, alt: page.imageAlt }] },
    twitter: { card: 'summary_large_image', title: page.metaTitle, description: page.metaDescription, images: [image] },
  }
}

export default async function CustomSolutionDetailPage({ params }: { params: RouteParams }) {
  const { slug } = await params
  const page = pages.find((item) => item.slug === slug)
  if (!page) notFound()

  return (
    <>
      <div className="border-b border-[#DCE3EC] bg-[#F7F9FC] py-3">
        <Container>
          <nav className="flex flex-wrap items-center gap-2 text-[12px] text-[#667085]">
            <Link href="/custom-solutions" className="no-underline hover:text-[#12657B]">Custom Solutions</Link>
            <span>›</span>
            <span className="font-medium text-[#0A1628]">{page.title}</span>
          </nav>
        </Container>
      </div>

      <section className="relative min-h-[560px] overflow-hidden bg-[#061d2b] text-white">
        <Image src={page.image} alt={page.imageAlt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061d2b] via-[#061d2b]/92 to-[#061d2b]/22" />
        <Container className="relative z-10 flex min-h-[560px] items-center py-20">
          <div className="max-w-[740px]">
            <Eyebrow light>{page.eyebrow}</Eyebrow>
            <h1 className="mt-5 font-serif text-[clamp(35px,4.5vw,56px)] leading-[1.08] tracking-[-0.7px]">{page.headline}</h1>
            <p className="mt-6 max-w-[700px] text-[16px] leading-[1.78] text-white/70">{page.intro}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className="bg-white px-6 py-3.5 text-[13px] font-semibold text-[#08283b] no-underline hover:bg-[#DDEDE4]">Send a project brief</Link>
              <Link href="/manufacturing" className="border border-white/25 px-6 py-3.5 text-[13px] font-semibold text-white no-underline hover:bg-white/10">Review manufacturing approach</Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal>
            <Eyebrow>Where this model fits</Eyebrow>
            <h2 className="mt-3 font-serif text-[31px] text-[#0A1628]">A practical route for defined, repeat demand</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-px bg-[#DCE3EC] md:grid-cols-3">
            {page.suitedFor.map((item, index) => (
              <Reveal key={item.title} delay={index * 55}>
                <article className="h-full bg-white p-7">
                  <span className="font-mono text-[11px] font-semibold text-[#2F8C67]">0{index + 1}</span>
                  <h3 className="mt-6 text-[15px] font-semibold text-[#0A1628]">{item.title}</h3>
                  <p className="mt-3 text-[13px] leading-[1.7] text-[#475467]">{item.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#F1F5F3] py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[340px_1fr]">
            <Reveal>
              <div>
                <Eyebrow>Commercial engineering</Eyebrow>
                <h2 className="mt-3 font-serif text-[31px] leading-tight text-[#0A1628]">Six decisions that turn an enquiry into a supply programme</h2>
                <p className="mt-5 text-[13.5px] leading-[1.75] text-[#475467]">Not every product, grade or pack is available in every route. Feasibility is confirmed against the full brief before sampling or commercial commitment.</p>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 gap-px bg-[#CBD8D5] sm:grid-cols-2">
              {page.decisions.map((item, index) => (
                <Reveal key={item.title} delay={(index % 4) * 45}>
                  <article className="h-full bg-white p-6">
                    <h3 className="text-[14px] font-semibold text-[#0A1628]">{item.title}</h3>
                    <p className="mt-3 text-[12.8px] leading-[1.7] text-[#475467]">{item.detail}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_410px] lg:items-start">
            <Reveal>
              <div>
                <Eyebrow>How the review works</Eyebrow>
                <h2 className="mt-3 font-serif text-[31px] text-[#0A1628]">Define, assess, sample, qualify, supply</h2>
                <div className="mt-8 border-t border-[#DCE3EC]">
                  {[
                    ['01', 'Define the requirement', 'Agree the application, product, controlled specification, pack, destination and forecast.'],
                    ['02', 'Assess feasibility', 'Review manufacturing route, testing, documents, packaging, logistics and commercial fit.'],
                    ['03', 'Qualify deliberately', 'Use a sample or pilot lot that represents the intended product and handling route.'],
                    ['04', 'Set routine supply', 'Confirm release, ordering, delivery, records, change terms and escalation contacts.'],
                  ].map(([no, title, detail]) => (
                    <div key={no} className="grid grid-cols-[40px_150px_1fr] gap-4 border-b border-[#DCE3EC] py-5">
                      <span className="font-mono text-[11px] font-semibold text-[#2F8C67]">{no}</span>
                      <h3 className="text-[13.5px] font-semibold text-[#0A1628]">{title}</h3>
                      <p className="text-[13px] leading-[1.65] text-[#475467]">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <aside className="border-t-4 border-[#12657B] bg-[#F7F9FC] p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#12657B]">Your first brief</p>
                <h2 className="mt-3 font-serif text-[24px] text-[#0A1628]">Six details that prevent a generic quotation</h2>
                <ul className="mt-6 space-y-3">
                  {page.firstBrief.map((item) => <li key={item} className="flex gap-3 text-[13px] leading-[1.6] text-[#475467]"><span className="text-[#2F8C67]">—</span>{item}</li>)}
                </ul>
              </aside>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBanner label={page.title} title={<>Have a specification<br />and a realistic forecast?</>} subtitle="Send the product, application, specification, pack, destination and timing. We will return with the questions that matter." p1="Start the Project Review" h1="/contact" p2="View Custom Solutions" h2="/custom-solutions" />
    </>
  )
}
