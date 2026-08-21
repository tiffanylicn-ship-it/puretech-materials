import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container, Eyebrow } from '@/components/ui/index'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Chemical OEM Manufacturer | Custom Chemical Manufacturing Solutions',
  description: 'PURETECHMATERIALS provides custom chemical manufacturing, private-label packaging and bulk chemical supply solutions for global industrial and laboratory customers.',
  keywords: ['chemical OEM manufacturer', 'private label chemical supplier', 'custom chemical manufacturing', 'specialty chemical supplier', 'bulk solvent supplier'],
  alternates: { canonical: 'https://puretechmaterials.com/oem-custom-chemical-solutions' },
  openGraph: {
    title: 'Custom Chemical Manufacturing Solutions | PURETECHMATERIALS',
    description: 'Flexible production, custom specifications, private-label packaging and planned chemical supply programmes.',
    type: 'website',
    url: 'https://puretechmaterials.com/oem-custom-chemical-solutions',
  },
}

const reasons = [
  ['01', 'Engineering support', 'Technical review from purification route and specification priorities through packaging and scale transfer.'],
  ['02', 'Flexible production', 'Qualification packs, production containers and larger supply formats considered against chemistry, grade and demand.'],
  ['03', 'Quality documentation', 'Product-specific specification, CoA, SDS and traceability requirements organised before qualification closes.'],
  ['04', 'Global export support', 'Destination, dangerous-goods route, label language, documents and delivery responsibilities reviewed together.'],
]

const capabilities = [
  ['01', 'Specification development', ['Purity and concentration', 'Water-content priorities', 'Impurity profile', 'Packaging requirements']],
  ['02', 'Chemical production', ['Purification route', 'Distillation', 'Filtration and transfer', 'Blending where applicable']],
  ['03', 'Quality testing', ['Product-specific methods', 'Water analysis', 'Trace impurity review', 'Release documentation']],
  ['04', 'Packaging & delivery', ['Qualification bottles', 'Drums and IBC review', 'Custom label scope', 'Export preparation']],
]

const workflow = [
  ['01', 'Project discussion', 'Application, current material, destination, pack, forecast and commercial objective.'],
  ['02', 'Specification confirmation', 'Critical limits, methods, documents and responsibilities agreed for feasibility review.'],
  ['03', 'Sample evaluation', 'A representative sample or pilot route assessed against the customer approval plan.'],
  ['04', 'Production planning', 'Campaign, input, pack, release testing and timing organised for the qualified route.'],
  ['05', 'Quality release', 'Applicable results and documents reviewed against the agreed controlled specification.'],
  ['06', 'Shipment', 'Pack, labels, transport documents, delivery terms and receiving plan confirmed.'],
]

const packaging = [
  ['Laboratory packaging', 'Qualification and laboratory-use bottles discussed around chemical compatibility, opening pattern and document needs.', ['Qualification packs', 'Small-volume supply', 'Product-specific closures']],
  ['Industrial packaging', 'Production containers selected around consumption rate, site handling, transfer method and transport route.', ['5 L / 10 L review', '20 L containers', 'Drum programmes']],
  ['Bulk supply packaging', 'IBC or other larger formats assessed for suitable products, grades, annual volume and destination.', ['IBC project review', 'Planned deliveries', 'Site connection requirements']],
]

const industries = [
  { title: 'Electronics manufacturing', detail: 'Electronic solvents · high-purity materials', image: '/images/puretech/electronic-materials.jpg', href: '/applications/semiconductor' },
  { title: 'Pharmaceutical manufacturing', detail: 'Process solvents · controlled supply', image: '/images/puretech/pharma-gmp.jpg', href: '/applications/pharmaceutical' },
  { title: 'Research laboratories', detail: 'Analytical chemicals · specialty reagents', image: '/images/puretech/quality-control.jpg', href: '/applications/laboratory-testing' },
  { title: 'Industrial manufacturing', detail: 'Bulk solvents · customised supply', image: '/images/puretech/high-purity-solvents.jpg', href: '/applications/coatings' },
  { title: 'Chemical distributors', detail: 'Private label · regional portfolio supply', image: '/images/puretech/applications.jpg', href: '/applications/industrial-applications' },
]

const qualityItems = [
  ['Batch testing', 'Release scope aligned with the chemical, grade and controlled specification.'],
  ['CoA documentation', 'Lot-specific result or conformance format agreed for the programme.'],
  ['SDS support', 'Current safety information for the relevant product and destination market.'],
  ['Traceability', 'Production, testing, packaging and shipment records connected to the supplied lot.'],
  ['Export compliance review', 'Product and destination requirements checked before the shipping route is confirmed.'],
]

const regions = [
  ['Europe', 'Label language, documentation, importer responsibilities and transport route reviewed for the destination.'],
  ['North America', 'Pack, market documentation, delivery terms and site receiving requirements defined before launch.'],
  ['Asia', 'Regional presentation, shipment planning and distributor or customer responsibilities aligned.'],
  ['Middle East', 'Destination documentation, climate, pack protection and delivery route considered together.'],
]

export default function OemCustomChemicalSolutionsPage() {
  return (
    <>
      <section className="relative min-h-[650px] overflow-hidden bg-[#061d2b] text-white">
        <Image src="/images/puretech/manufacturing.jpg" alt="Specialty chemical manufacturing, filling and customised packaging environment" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061d2b] via-[#061d2b]/92 to-[#061d2b]/24" />
        <Container className="relative z-10 flex min-h-[650px] items-center py-20">
          <div className="max-w-[780px]">
            <Eyebrow light>OEM & custom chemical solutions</Eyebrow>
            <h1 className="mt-5 font-serif text-[clamp(40px,5.3vw,67px)] leading-[1.01] tracking-[-0.9px]">Custom Chemical<br />Manufacturing Solutions</h1>
            <p className="mt-7 max-w-[690px] text-[16px] leading-[1.78] text-white/72">Flexible production, customised specifications and reliable chemical supply programmes for global industrial and laboratory customers.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className="bg-white px-6 py-3.5 text-[13px] font-semibold text-[#08283b] no-underline hover:bg-[#DDEDE4]">Request OEM consultation</Link>
              <Link href="#oem-capabilities" className="border border-white/25 px-6 py-3.5 text-[13px] font-semibold text-white no-underline hover:bg-white/10">Explore capabilities</Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal>
            <Eyebrow>Why PURETECHMATERIALS</Eyebrow>
            <div className="mt-3 grid grid-cols-1 gap-6 lg:grid-cols-[410px_1fr] lg:items-end">
              <h2 className="font-serif text-[33px] leading-tight text-[#0A1628]">Outsourcing works when the technical and supply briefs agree</h2>
              <p className="max-w-[760px] text-[14px] leading-[1.78] text-[#475467]">A useful OEM partner should be able to discuss the manufacturing route, documents, packaging and long-term delivery pattern as one programme—not as separate sales options.</p>
            </div>
          </Reveal>
          <div className="mt-11 grid grid-cols-1 border-l border-t border-[#DCE3EC] md:grid-cols-2 lg:grid-cols-4">
            {reasons.map(([no, title, detail], index) => (
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

      <section id="oem-capabilities" className="scroll-mt-24 border-y border-[#E4E7EC] bg-[#F7F9FC] py-20">
        <Container>
          <Reveal>
            <Eyebrow>Customisation capabilities</Eyebrow>
            <h2 className="mt-3 font-serif text-[33px] text-[#0A1628]">Four connected parts of an OEM programme</h2>
            <p className="mt-4 max-w-[780px] text-[14px] leading-[1.75] text-[#475467]">Capabilities are confirmed product by product. The list below frames the feasibility review; it is not a blanket commitment for every chemistry, test method or pack.</p>
          </Reveal>
          <div className="mt-11 grid grid-cols-1 gap-px bg-[#DCE3EC] md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map(([no, title, items], index) => (
              <Reveal key={String(title)} delay={index * 55}>
                <article className="relative h-full bg-white p-7">
                  <span className="font-mono text-[12px] font-semibold text-[#12657B]">{String(no)}</span>
                  <h3 className="mt-8 text-[15px] font-semibold text-[#0A1628]">{String(title)}</h3>
                  <ul className="mt-5 space-y-3">
                    {(items as string[]).map((item) => <li key={item} className="flex gap-3 text-[12.5px] leading-[1.55] text-[#475467]"><span className="text-[#2F8C67]">—</span>{item}</li>)}
                  </ul>
                  {index < capabilities.length - 1 && <span className="absolute -right-2.5 top-7 z-10 hidden size-5 items-center justify-center border border-[#DCE3EC] bg-white text-[11px] text-[#2F8C67] lg:flex">→</span>}
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 bg-[#07182D] p-7 text-white lg:grid-cols-[1fr_360px] lg:items-center lg:p-10">
            <div><p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-[#8FC7FF]">Engineering review</p><h3 className="mt-3 font-serif text-[26px]">Start with the current specification and the reason it needs to change</h3><p className="mt-4 max-w-[760px] text-[13.5px] leading-[1.72] text-white/60">That reason may be process performance, supply continuity, packaging, market access or cost. Knowing it early keeps the development route focused.</p></div>
            <Link href="/custom-solutions/chemical-oem" className="border border-white/20 px-5 py-3.5 text-center text-[12.5px] font-semibold text-white no-underline hover:bg-white/10">Review the OEM project brief →</Link>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal>
            <Eyebrow>OEM workflow</Eyebrow>
            <div className="mt-3 grid grid-cols-1 gap-6 lg:grid-cols-[380px_1fr] lg:items-end">
              <h2 className="font-serif text-[33px] leading-tight text-[#0A1628]">A transparent route from discussion to shipment</h2>
              <p className="max-w-[760px] text-[14px] leading-[1.75] text-[#475467]">Commercial timing becomes meaningful only after technical scope, qualification responsibilities and the production pack are understood.</p>
            </div>
          </Reveal>
          <div className="mt-11 border-t border-[#DCE3EC] bg-[#F7F9FC]">
            {workflow.map(([no, title, detail], index) => (
              <Reveal key={title} delay={(index % 4) * 40}>
                <div className="grid grid-cols-[42px_1fr] gap-4 border-b border-[#DCE3EC] px-5 py-5 md:grid-cols-[42px_210px_1fr] md:items-center">
                  <span className="font-mono text-[11px] font-semibold text-[#2F8C67]">{no}</span>
                  <h3 className="text-[14px] font-semibold text-[#0A1628]">{title}</h3>
                  <p className="col-start-2 text-[13px] leading-[1.65] text-[#475467] md:col-start-3">{detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#F1F5F3] py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <Reveal>
              <div>
                <Eyebrow>Packaging solutions</Eyebrow>
                <h2 className="mt-3 font-serif text-[34px] leading-tight text-[#0A1628]">Build the production pack into the qualification plan</h2>
                <p className="mt-5 max-w-[700px] text-[14px] leading-[1.78] text-[#475467]">Changing container size can change opening frequency, transfer, sampling and contamination risk. The pack that supports routine production should be discussed before the sample is approved.</p>
                <div className="mt-9 grid grid-cols-1 gap-px bg-[#CBD8D5]">
                  {packaging.map(([title, detail, items]) => (
                    <article key={String(title)} className="bg-white p-6">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-[180px_1fr]">
                        <h3 className="text-[14px] font-semibold text-[#0A1628]">{String(title)}</h3>
                        <div><p className="text-[12.8px] leading-[1.68] text-[#475467]">{String(detail)}</p><p className="mt-3 font-mono text-[10.5px] text-[#12657B]">{(items as string[]).join(' · ')}</p></div>
                      </div>
                    </article>
                  ))}
                </div>
                <p className="mt-4 text-[11.5px] leading-[1.6] text-[#667085]">Pack availability depends on chemical, grade, minimum campaign, compatibility, destination and transport route.</p>
              </div>
            </Reveal>
            <div className="relative min-h-[520px] overflow-hidden">
              <Image src="/images/puretech/hero.jpg" alt="Chemical filling, laboratory packs, drums and larger supply containers" fill sizes="(max-width:1024px) 100vw, 46vw" className="object-cover" />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal>
            <Eyebrow>Industries served</Eyebrow>
            <h2 className="mt-3 font-serif text-[33px] text-[#0A1628]">Custom supply organised around the buyer’s operating environment</h2>
            <p className="mt-4 max-w-[780px] text-[14px] leading-[1.75] text-[#475467]">The same packaging or private-label request can mean different specifications, documents and delivery risks across these customer groups.</p>
          </Reveal>
          <div className="mt-11 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
            {industries.map((industry, index) => (
              <Reveal key={industry.title} delay={index * 45}>
                <Link href={industry.href} className="group block h-full overflow-hidden border border-[#DCE3EC] bg-white text-[#0A1628] no-underline hover:border-[#9FB8C6]">
                  <div className="relative min-h-[190px]"><Image src={industry.image} alt={`${industry.title} chemical supply application`} fill sizes="(max-width:768px) 100vw, 20vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#061d2b]/55 to-transparent" /></div>
                  <div className="p-5"><h3 className="text-[14px] font-semibold group-hover:text-[#12657B]">{industry.title}</h3><p className="mt-2 text-[11.5px] leading-[1.6] text-[#667085]">{industry.detail}</p><span className="mt-5 block text-[11.5px] font-semibold text-[#12657B]">Explore application →</span></div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#07182D] py-20 text-white">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
            <Reveal>
              <div>
                <Eyebrow light>Quality assurance</Eyebrow>
                <h2 className="mt-3 font-serif text-[34px] leading-tight">Quality-controlled manufacturing</h2>
                <p className="mt-5 max-w-[650px] text-[14px] leading-[1.78] text-white/60">An OEM programme needs a document and release framework that the customer can qualify. Exact methods, declarations and compliance scope remain product- and market-specific.</p>
                <div className="mt-8 border-t border-white/10">
                  {qualityItems.map(([title, detail]) => (
                    <div key={title} className="grid grid-cols-[20px_150px_1fr] gap-4 border-b border-white/10 py-4"><span className="text-[#62BD88]">✓</span><h3 className="text-[13px] font-semibold text-white">{title}</h3><p className="text-[12.5px] leading-[1.6] text-white/52">{detail}</p></div>
                  ))}
                </div>
                <Link href="/quality" className="mt-8 inline-flex border border-white/20 px-5 py-3 text-[12.5px] font-semibold text-white no-underline hover:bg-white/10">Review quality framework →</Link>
              </div>
            </Reveal>
            <div className="relative min-h-[520px] overflow-hidden">
              <Image src="/images/puretech/quality-control.jpg" alt="Chemical quality assurance laboratory, sample testing and documentation review" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[380px_1fr]">
            <Reveal>
              <div>
                <Eyebrow>Global supply capability</Eyebrow>
                <h2 className="mt-3 font-serif text-[33px] leading-tight text-[#0A1628]">Plan the destination before finalising the product presentation</h2>
                <p className="mt-5 text-[14px] leading-[1.78] text-[#475467]">A global programme is built from specific country, importer, transport and documentation requirements. Regional names below indicate routes for project review, not a claim of universal availability.</p>
                <div className="mt-8 flex flex-wrap gap-3"><Link href="/global-chemical-supply" className="inline-flex bg-[#12657B] px-5 py-3 text-[12.5px] font-semibold text-white no-underline hover:bg-[#2F8C67]">Explore global supply →</Link><Link href="/custom-solutions/bulk-supply" className="inline-flex border border-[#12657B] px-5 py-3 text-[12.5px] font-semibold text-[#12657B] no-underline hover:bg-[#F1F8F5]">Review bulk supply planning →</Link></div>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 gap-px bg-[#DCE3EC] md:grid-cols-2">
              {regions.map(([region, detail], index) => (
                <Reveal key={region} delay={index * 50}>
                  <article className="h-full bg-[#F7F9FC] p-7"><span className="font-mono text-[11px] font-semibold text-[#2F8C67]">0{index + 1}</span><h3 className="mt-7 font-serif text-[22px] text-[#0A1628]">{region}</h3><p className="mt-3 text-[12.8px] leading-[1.7] text-[#475467]">{detail}</p></article>
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
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/65">Request OEM consultation</p>
              <h2 className="mt-4 font-serif text-[clamp(32px,4.5vw,49px)] leading-[1.08]">Build your next chemical supply programme with us</h2>
              <p className="mx-auto mt-6 max-w-[720px] text-[15px] leading-[1.75] text-white/75">Contact our technical team to discuss custom chemical manufacturing, packaging, private-label and long-term supply requirements.</p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Link href="/contact" className="bg-white px-6 py-3.5 text-[13px] font-semibold text-[#1E654A] no-underline hover:bg-[#F1F5F3]">Request OEM consultation</Link>
                <Link href="/contact" className="border border-white/35 px-6 py-3.5 text-[13px] font-semibold text-white no-underline hover:bg-white/10">Request company profile</Link>
                <Link href="/contact" className="border border-white/35 px-6 py-3.5 text-[13px] font-semibold text-white no-underline hover:bg-white/10">Contact sales</Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
