import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container, Eyebrow } from '@/components/ui/index'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Global Chemical Supplier | Bulk Solvent Supply & Export Solutions',
  description: 'PURETECHMATERIALS provides reliable global chemical supply solutions including specialty solvents, high-purity materials, bulk packaging and export services.',
  keywords: ['global chemical supplier', 'bulk chemical supplier', 'chemical export supplier', 'specialty chemical supplier', 'solvent supplier'],
  alternates: { canonical: 'https://puretechmaterials.com/global-chemical-supply' },
  openGraph: {
    title: 'Global Chemical Supply Partner | PURETECHMATERIALS',
    description: 'Planned production, flexible packaging, export documentation and international chemical supply support.',
    type: 'website',
    url: 'https://puretechmaterials.com/global-chemical-supply',
  },
}

const supplyCapabilities = [
  ['01', 'Stable production planning', 'Manufacturing campaigns, release timing and forecast assumptions organised for repeat supply programmes.'],
  ['02', 'Flexible packaging', 'Laboratory packs, production containers, drums and IBC routes reviewed by product and destination.'],
  ['03', 'Quality documentation', 'Specification, CoA, SDS and traceability requirements defined for the supplied product and market.'],
  ['04', 'Export coordination', 'Packaging, dangerous-goods route, shipping documents and delivery responsibilities reviewed before dispatch.'],
]

const productionFlow = [
  ['01', 'Raw materials', 'Input approval, incoming checks, source planning and readiness for the required campaign.'],
  ['02', 'Purification', 'Product-specific separation or treatment route aligned with the target impurity profile.'],
  ['03', 'Testing', 'Sampling and release testing against the applicable controlled specification.'],
  ['04', 'Filling', 'Container, closure, fill and label matched to the qualified product route.'],
  ['05', 'Storage', 'Finished-lot identification, pack protection and release status controlled before shipment.'],
  ['06', 'Export', 'Shipment documents, transport preparation and delivery plan confirmed for the destination.'],
]

const packagingRoutes = [
  {
    no: '01',
    title: 'Laboratory packaging',
    description: 'Smaller packs for qualification, analytical use and specialist distribution, selected around compatibility and opening pattern.',
    formats: ['500 mL', '1 L', '2.5 L', '5 L'],
    note: 'Availability varies by chemical and grade.',
  },
  {
    no: '02',
    title: 'Industrial drums',
    description: 'Repeat-production formats planned around consumption, safe handling, closure, pallet configuration and transport needs.',
    formats: ['20 L', '25 L', '200 L'],
    note: 'Container material and fill size require product review.',
  },
  {
    no: '03',
    title: 'Bulk IBC supply',
    description: 'Larger-volume supply route for suitable products, grades, annual demand, site connections and destination markets.',
    formats: ['IBC project review', 'Planned deliveries', 'Connection requirements'],
    note: 'Not offered as a universal format for every chemistry.',
  },
]

const logisticsReview = [
  ['Product classification', 'Chemical identity, concentration, dangerous-goods status and transport requirements.'],
  ['Export presentation', 'Container, closure, label, pallet and outer packaging appropriate to the route.'],
  ['Shipping documents', 'Commercial, packing, safety, origin and transport documents required for the shipment.'],
  ['Receiving plan', 'Importer responsibilities, delivery terms, site restrictions and receiving contacts agreed in advance.'],
]

const regions = [
  ['Europe', 'Support route for distributors and industrial customers, with destination-specific label, importer, transport and documentation review.'],
  ['North America', 'Supply planning around market documents, pack presentation, delivery terms and customer receiving requirements.'],
  ['Asia-Pacific', 'Regional shipment, documentation, distributor and site-handling requirements aligned before launch.'],
  ['Middle East', 'Destination documents, pack protection, climate exposure and delivery route considered for the project.'],
]

const documents = [
  ['Certificate of Analysis', 'Lot-specific results or conformance information in the agreed release format.'],
  ['Safety Data Sheet', 'Current hazard, handling, storage, transport and regulatory information for the relevant product and market.'],
  ['Technical Data Sheet', 'Product identity, typical properties, application context and available pack information.'],
  ['Packing List', 'Shipment-level pack, quantity, weight and identification details.'],
  ['Certificate of Origin', 'Provided where applicable to the product, shipment route and commercial arrangement.'],
  ['Regulatory support', 'Product- and market-specific declarations reviewed against the requested destination and use.'],
]

const partnershipValues = [
  ['Reliable supply', 'Forecast, production planning, release timing and packaging availability reviewed before demand becomes urgent.'],
  ['Technical support', 'Product, specification, pack and application questions connected to the same supply discussion.'],
  ['Continuous improvement', 'Recurring issues, changes, demand patterns and qualification needs reviewed across the life of the programme.'],
]

export default function GlobalChemicalSupplyPage() {
  return (
    <>
      <section className="relative min-h-[650px] overflow-hidden bg-[#061d2b] text-white">
        <Image src="/images/puretech/hero.jpg" alt="Chemical manufacturing, warehouse and export packaging prepared for international supply" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061d2b] via-[#061d2b]/92 to-[#061d2b]/28" />
        <Container className="relative z-10 flex min-h-[650px] items-center py-20">
          <div className="max-w-[760px]">
            <Eyebrow light>Global supply & export</Eyebrow>
            <h1 className="mt-5 font-serif text-[clamp(42px,5.4vw,68px)] leading-[1.01] tracking-[-0.95px]">Global Chemical<br />Supply Partner</h1>
            <p className="mt-7 max-w-[670px] text-[16px] leading-[1.78] text-white/72">Stable manufacturing planning and flexible supply solutions for international customers, from qualification packs to repeat production programmes.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className="bg-white px-6 py-3.5 text-[13px] font-semibold text-[#08283b] no-underline hover:bg-[#DDEDE4]">Request supply information</Link>
              <Link href="/contact" className="border border-white/25 px-6 py-3.5 text-[13px] font-semibold text-white no-underline hover:bg-white/10">Request company profile</Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal>
            <Eyebrow>Global supply capability</Eyebrow>
            <div className="mt-3 grid grid-cols-1 gap-6 lg:grid-cols-[400px_1fr] lg:items-end">
              <h2 className="font-serif text-[33px] leading-tight text-[#0A1628]">Four parts of a supportable international programme</h2>
              <p className="max-w-[760px] text-[14px] leading-[1.78] text-[#475467]">Supply confidence comes from a connected operating plan. Product availability, packaging, documents and shipment requirements should be resolved before routine orders begin.</p>
            </div>
          </Reveal>
          <div className="mt-11 grid grid-cols-1 border-l border-t border-[#DCE3EC] md:grid-cols-2 lg:grid-cols-4">
            {supplyCapabilities.map(([no, title, detail], index) => (
              <Reveal key={title} delay={index * 55}>
                <article className="h-full border-b border-r border-[#DCE3EC] bg-white p-7">
                  <span className="font-mono text-[11px] font-semibold text-[#2F8C67]">{no}</span>
                  <h3 className="mt-8 text-[15px] font-semibold text-[#0A1628]">{title}</h3>
                  <p className="mt-3 text-[13px] leading-[1.7] text-[#475467]">{detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[#E4E7EC] bg-[#F7F9FC] py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <Reveal>
              <div>
                <Eyebrow>Production capacity</Eyebrow>
                <h2 className="mt-3 font-serif text-[34px] leading-tight text-[#0A1628]">Capacity is the ability to supply consistently—not a headline tonnage</h2>
                <p className="mt-5 max-w-[720px] text-[14px] leading-[1.78] text-[#475467]">A dependable programme connects raw-material readiness, purification, release testing, filling, storage and export timing. The exact route and feasible volume are confirmed for the requested product and forecast.</p>
                <div className="mt-9 border-t border-[#DCE3EC]">
                  {productionFlow.map(([no, title, detail]) => (
                    <div key={title} className="grid grid-cols-[38px_110px_1fr] gap-4 border-b border-[#DCE3EC] py-4"><span className="font-mono text-[10.5px] font-semibold text-[#2F8C67]">{no}</span><h3 className="text-[13px] font-semibold text-[#0A1628]">{title}</h3><p className="text-[12.5px] leading-[1.65] text-[#475467]">{detail}</p></div>
                  ))}
                </div>
                <Link href="/manufacturing" className="mt-8 inline-flex bg-[#12657B] px-5 py-3 text-[12.5px] font-semibold text-white no-underline hover:bg-[#2F8C67]">Explore manufacturing route →</Link>
              </div>
            </Reveal>
            <div className="relative min-h-[560px] overflow-hidden">
              <Image src="/images/puretech/manufacturing.jpg" alt="Chemical purification, production control and filling environment" fill sizes="(max-width:1024px) 100vw, 45vw" className="object-cover" />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal>
            <Eyebrow>Export packaging solutions</Eyebrow>
            <div className="mt-3 grid grid-cols-1 gap-6 lg:grid-cols-[400px_1fr] lg:items-end">
              <h2 className="font-serif text-[33px] leading-tight text-[#0A1628]">Packaging for laboratories, production sites and planned bulk supply</h2>
              <p className="max-w-[760px] text-[14px] leading-[1.78] text-[#475467]">The production pack is part of qualification. Container material, closure, fill, label, pallet and shipping route need product-level confirmation.</p>
            </div>
          </Reveal>
          <div className="mt-11 grid grid-cols-1 gap-px bg-[#DCE3EC] lg:grid-cols-3">
            {packagingRoutes.map((pack, index) => (
              <Reveal key={pack.title} delay={index * 55}>
                <article className="flex h-full flex-col bg-white p-7">
                  <span className="font-mono text-[11px] font-semibold text-[#2F8C67]">{pack.no}</span>
                  <h3 className="mt-8 font-serif text-[24px] text-[#0A1628]">{pack.title}</h3>
                  <p className="mt-4 text-[13px] leading-[1.72] text-[#475467]">{pack.description}</p>
                  <div className="mt-7 flex flex-wrap gap-2">{pack.formats.map((format) => <span key={format} className="border border-[#C8D7DE] bg-[#F7F9FC] px-3 py-1.5 font-mono text-[10.5px] font-semibold text-[#12657B]">{format}</span>)}</div>
                  <p className="mt-7 border-t border-[#EAECF0] pt-4 text-[11px] leading-[1.6] text-[#667085]">{pack.note}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/custom-solutions/bulk-supply" className="bg-[#12657B] px-5 py-3 text-[12.5px] font-semibold text-white no-underline hover:bg-[#2F8C67]">Review bulk supply planning</Link>
            <Link href="/custom-solutions" className="border border-[#12657B] px-5 py-3 text-[12.5px] font-semibold text-[#12657B] no-underline hover:bg-[#F1F8F5]">Explore custom packaging</Link>
          </div>
        </Container>
      </section>

      <section className="bg-[#07182D] py-20 text-white">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative min-h-[520px] overflow-hidden">
              <Image src="/images/puretech/high-purity-solvents.jpg" alt="Export-ready chemical storage, packaging and international logistics preparation" fill sizes="(max-width:1024px) 100vw, 48vw" className="object-cover" />
            </div>
            <Reveal>
              <div>
                <Eyebrow light>International logistics</Eyebrow>
                <h2 className="mt-3 font-serif text-[34px] leading-tight">Reliable delivery across global markets begins with route planning</h2>
                <p className="mt-5 text-[14px] leading-[1.78] text-white/60">International chemical delivery is a chain of product classification, compatible packaging, documents, carrier capability and customer receiving requirements. We review that chain before confirming a shipping programme.</p>
                <div className="mt-8 grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2">
                  {logisticsReview.map(([title, detail]) => (
                    <article key={title} className="bg-[#07182D] p-5"><h3 className="text-[13.5px] font-semibold text-white">{title}</h3><p className="mt-2 text-[12px] leading-[1.65] text-white/52">{detail}</p></article>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal>
            <Eyebrow>Regional market support</Eyebrow>
            <div className="mt-3 grid grid-cols-1 gap-6 lg:grid-cols-[390px_1fr] lg:items-end">
              <h2 className="font-serif text-[33px] leading-tight text-[#0A1628]">One export programme does not fit every destination</h2>
              <p className="max-w-[760px] text-[14px] leading-[1.78] text-[#475467]">Regional cards describe the questions we can review with customers and distributors. They do not imply a warehouse, registration, importer or established customer base in every listed market.</p>
            </div>
          </Reveal>
          <div className="mt-11 grid grid-cols-1 gap-px bg-[#DCE3EC] md:grid-cols-2 lg:grid-cols-4">
            {regions.map(([region, detail], index) => (
              <Reveal key={region} delay={index * 50}>
                <article className="h-full bg-[#F7F9FC] p-7"><span className="font-mono text-[11px] font-semibold text-[#2F8C67]">0{index + 1}</span><h3 className="mt-8 font-serif text-[23px] text-[#0A1628]">{region}</h3><p className="mt-3 text-[12.8px] leading-[1.72] text-[#475467]">{detail}</p></article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[#E4E7EC] bg-[#F1F5F3] py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <Reveal>
              <div>
                <Eyebrow>Documentation & compliance</Eyebrow>
                <h2 className="mt-3 font-serif text-[34px] leading-tight text-[#0A1628]">Build the export document pack around the shipment</h2>
                <p className="mt-5 max-w-[710px] text-[14px] leading-[1.78] text-[#475467]">Manufacturing quality records and export documents answer different questions. The final package depends on the product, grade, destination, importer and agreed delivery responsibilities.</p>
                <div className="mt-8 grid grid-cols-1 gap-px bg-[#CBD8D5] sm:grid-cols-2">
                  {documents.map(([title, detail]) => (
                    <article key={title} className="bg-white p-5"><h3 className="text-[13.5px] font-semibold text-[#0A1628]">{title}</h3><p className="mt-2 text-[12px] leading-[1.65] text-[#475467]">{detail}</p></article>
                  ))}
                </div>
                <Link href="/downloads" className="mt-8 inline-flex border border-[#12657B] px-5 py-3 text-[12.5px] font-semibold text-[#12657B] no-underline hover:bg-white">Open document centre →</Link>
              </div>
            </Reveal>
            <div className="relative min-h-[540px] overflow-hidden">
              <Image src="/images/puretech/quality-control.jpg" alt="Chemical export documentation, quality records and analytical laboratory review" fill sizes="(max-width:1024px) 100vw, 45vw" className="object-cover" />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[350px_1fr]">
            <Reveal>
              <div>
                <Eyebrow>Long-term partnership</Eyebrow>
                <h2 className="mt-3 font-serif text-[33px] leading-tight text-[#0A1628]">Build the programme before the next urgent order</h2>
                <p className="mt-5 text-[14px] leading-[1.78] text-[#475467]">Long-term supply becomes more reliable when both sides can see the forecast, constraints, qualification status and change expectations.</p>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 gap-px bg-[#DCE3EC] md:grid-cols-3">
              {partnershipValues.map(([title, detail], index) => (
                <Reveal key={title} delay={index * 55}>
                  <article className="h-full bg-white p-7"><span className="font-mono text-[11px] font-semibold text-[#2F8C67]">0{index + 1}</span><h3 className="mt-8 text-[15px] font-semibold text-[#0A1628]">{title}</h3><p className="mt-3 text-[13px] leading-[1.72] text-[#475467]">{detail}</p></article>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#2F8C67] py-20 text-white">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-[900px] text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/65">Contact supply team</p>
              <h2 className="mt-4 font-serif text-[clamp(32px,4.5vw,49px)] leading-[1.08]">Looking for a reliable chemical supply partner?</h2>
              <p className="mx-auto mt-6 max-w-[720px] text-[15px] leading-[1.75] text-white/75">Contact PURETECHMATERIALS to discuss your products, specification, packaging, annual forecast, destination and long-term supply requirements.</p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Link href="/contact" className="bg-white px-6 py-3.5 text-[13px] font-semibold text-[#1E654A] no-underline hover:bg-[#F1F5F3]">Request supply consultation</Link>
                <Link href="/contact" className="border border-white/35 px-6 py-3.5 text-[13px] font-semibold text-white no-underline hover:bg-white/10">Request product portfolio</Link>
                <Link href="/contact" className="border border-white/35 px-6 py-3.5 text-[13px] font-semibold text-white no-underline hover:bg-white/10">Contact sales team</Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
