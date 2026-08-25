import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container, CtaBanner, Eyebrow } from '@/components/ui/index'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Chemical Manufacturer | High-Purity Solvent Production',
  description: 'PURETECHMATERIALS manufactures high-purity solvents and specialty chemicals through controlled purification, quality testing, filling and reliable supply processes.',
  alternates: { canonical: 'https://puretechmaterials.com/manufacturing' },
  openGraph: {
    title: 'Engineering-Led Purification | PURETECHMATERIALS',
    description: 'From raw-material review to controlled filling: explore the manufacturing route behind high-purity chemical supply.',
    type: 'website',
    url: 'https://puretechmaterials.com/manufacturing',
    images: [{ url: 'https://puretechmaterials.com/images/puretech/manufacturing.jpg', alt: 'High-purity chemical purification and manufacturing' }],
  },
  twitter: { card: 'summary_large_image', title: 'Engineering-Led Purification | PURETECHMATERIALS', description: 'From raw-material review to controlled filling: explore the manufacturing route behind high-purity chemical supply.', images: ['https://puretechmaterials.com/images/puretech/manufacturing.jpg'] },
}

const capabilityLinks = [
  ['Purification Technology', '/manufacturing/purification'],
  ['Production Facility', '/manufacturing/facility'],
  ['Packaging & Filling', '/manufacturing/packaging'],
]

const philosophy = [
  ['01', 'Purification', 'Choose the separation and treatment route around the chemical, impurity profile and intended grade.'],
  ['02', 'Process control', 'Define contact materials, operating windows, transfer conditions and in-process checks for the route.'],
  ['03', 'Testing', 'Use product-relevant methods and reporting limits to evaluate the controlled specification.'],
  ['04', 'Final quality', 'Connect release results, packaging, traceability and shipment records to the supplied lot.'],
]

const purificationSteps = [
  ['01', 'Raw-material control', 'Approved inputs, incoming identity and quality checks, source traceability and campaign readiness.'],
  ['02', 'Pre-treatment', 'Product-specific removal or control of water, particles, reactive species and other known process risks.'],
  ['03', 'Precision distillation', 'Separation strategy reviewed around volatility, impurity behaviour, thermal limits and target quality.'],
  ['04', 'Filtration & transfer', 'Filtration, wetted materials, hold time and transfer path considered as part of contamination control.'],
  ['05', 'Quality testing', 'Representative sampling and testing against the current controlled product specification.'],
  ['06', 'Clean filling & release', 'Container, closure, filling route, label and release documents matched to the qualified supply format.'],
]

const distillationFactors = [
  ['Boiling-point relationship', 'Relative volatility and separation difficulty guide the process design and operating window.'],
  ['Impurity characteristics', 'Expected feed impurities, side components and degradation risks determine which controls matter.'],
  ['Material compatibility', 'Contact materials, seals, gaskets and transfer components are considered for the chemical and grade.'],
  ['Final application', 'A wafer-cleaning solvent, analytical solvent and process solvent may require different quality priorities.'],
]

const contaminationControls = [
  ['Particles', 'Where can particles enter, how are they monitored, and what filtration and filling route protects the lot?'],
  ['Trace metals', 'Which elements and reporting limits are critical for the product grade and customer process?'],
  ['Moisture', 'How are water-sensitive stages, sampling, headspace, storage and transfer conditions controlled?'],
  ['Organic residues', 'Which volatile and non-volatile impurities, by-products or residues are included in release review?'],
]

const testAreas = [
  ['Purity analysis', 'GC, HPLC or another product-specific method where applicable.'],
  ['Water content', 'Moisture testing such as Karl Fischer where relevant to the grade.'],
  ['Trace-metal analysis', 'Elemental methods and reporting limits selected for the product specification.'],
  ['Residue control', 'Non-volatile residue or other process-relevant cleanliness indicators.'],
  ['Optical performance', 'UV-visible characteristics where analytical or process use requires them.'],
  ['Particle testing', 'Particle measurement where it is part of the controlled product route.'],
]

const packRoutes = [
  ['Qualification bottles', 'Small packs for evaluation and document review before production scale-up.'],
  ['5 L / 10 L containers', 'Intermediate formats discussed where the product, grade and market support them.'],
  ['20 L containers', 'Production supply for suitable products, with container and closure confirmed during review.'],
  ['Drums', 'Larger repeat-use supply planned around compatibility, handling and transport requirements.'],
  ['IBC supply', 'Project-based route for suitable chemicals, grades, volumes and destination markets.'],
  ['Custom packaging', 'Container, fill, closure, label and export presentation assessed against a defined brief.'],
]

const supplyControls = [
  ['Export documentation', 'Product, safety, transport and commercial documents organised for the applicable destination and shipment.'],
  ['Batch traceability', 'Lot identity linked to relevant production, sampling, testing, packaging and release records.'],
  ['Secure packaging', 'Closure, label, pallet and transport preparation reviewed for the chemical and delivery route.'],
  ['Supply planning', 'Forecast, lead time, campaign timing, packaging availability and escalation points agreed for repeat demand.'],
]

export default function ManufacturingPage() {
  return (
    <>
      <section className="relative min-h-[650px] overflow-hidden bg-[#061d2b] text-white">
        <Image src="/images/puretech/manufacturing.jpg" alt="Specialty chemical purification and distillation equipment in an operating production environment" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061d2b] via-[#061d2b]/91 to-[#061d2b]/22" />
        <Container className="relative z-10 flex min-h-[650px] items-center py-20">
          <div className="max-w-[790px]">
            <Eyebrow light>Engineering-led chemical manufacturing</Eyebrow>
            <h1 className="mt-5 font-serif text-[clamp(39px,5.2vw,66px)] leading-[1.02] tracking-[-0.9px]">Engineering-Led Purification<br />for High-Purity Chemical Materials</h1>
            <p className="mt-7 max-w-[690px] text-[16px] leading-[1.78] text-white/72">From raw-material review to final filling, PURETECHMATERIALS builds consistent quality through controlled purification, testing, packaging and release processes.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="#purification-process" className="bg-white px-6 py-3.5 text-[13px] font-semibold text-[#08283b] no-underline hover:bg-[#DDEDE4]">Explore capability</Link>
              <Link href="/contact" className="border border-white/25 px-6 py-3.5 text-[13px] font-semibold text-white no-underline hover:bg-white/10">Request manufacturing information</Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-[#DCE3EC] bg-white py-7">
        <Container>
          <div className="grid grid-cols-1 gap-px bg-[#DCE3EC] md:grid-cols-3">
            {capabilityLinks.map(([label, href], index) => <Link key={href} href={href} className="group flex items-center justify-between bg-[#F7F9FC] px-5 py-4 text-[#102A43] no-underline hover:bg-[#EFF7F3]"><span><span className="mr-3 font-mono text-[10px] text-[#2F8C67]">0{index + 1}</span><span className="text-[13px] font-semibold">{label}</span></span><span className="text-[#2F8C67]">→</span></Link>)}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal>
            <Eyebrow>Manufacturing philosophy</Eyebrow>
            <div className="mt-3 grid grid-cols-1 gap-6 lg:grid-cols-[410px_1fr] lg:items-end">
              <h2 className="font-serif text-[33px] leading-tight text-[#0A1628]">From purity requirement to manufacturing solution</h2>
              <p className="max-w-[760px] text-[14px] leading-[1.78] text-[#475467]">Every chemical application has a different impurity challenge. We start with the intended use and controlled specification, then connect purification efficiency, impurity control, batch consistency and documentation in one product route.</p>
            </div>
          </Reveal>
          <div className="mt-11 grid grid-cols-1 border-l border-t border-[#DCE3EC] md:grid-cols-2 lg:grid-cols-4">
            {philosophy.map(([no, title, detail], index) => (
              <Reveal key={title} delay={index * 55}>
                <article className="relative h-full border-b border-r border-[#DCE3EC] bg-white p-7">
                  <span className="font-mono text-[11px] font-semibold text-[#2F8C67]">{no}</span>
                  <h3 className="mt-8 text-[15px] font-semibold text-[#0A1628]">{title}</h3>
                  <p className="mt-3 text-[13px] leading-[1.7] text-[#475467]">{detail}</p>
                  {index < philosophy.length - 1 && <span className="absolute -right-2.5 top-7 z-10 hidden size-5 items-center justify-center border border-[#DCE3EC] bg-white text-[11px] text-[#2F8C67] lg:flex">→</span>}
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="purification-process" className="scroll-mt-24 border-y border-[#E4E7EC] bg-[#F7F9FC] py-20">
        <Container>
          <Reveal>
            <Eyebrow>Advanced purification process</Eyebrow>
            <div className="mt-3 grid grid-cols-1 gap-6 lg:grid-cols-[390px_1fr] lg:items-end">
              <h2 className="font-serif text-[33px] leading-tight text-[#0A1628]">Six controlled stages from input to released lot</h2>
              <p className="max-w-[760px] text-[14px] leading-[1.78] text-[#475467]">The exact unit operations vary by chemical and grade. This framework shows the questions that connect incoming material, purification, contamination control, testing and the production pack.</p>
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-px bg-[#DCE3EC] md:grid-cols-2 lg:grid-cols-3">
            {purificationSteps.map(([no, title, detail], index) => (
              <Reveal key={title} delay={(index % 4) * 45}>
                <article className="group h-full bg-white p-7 transition-colors hover:bg-[#F8FCFA]">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-[12px] font-semibold text-[#12657B]">{no}</span>
                    <span className="h-px w-16 bg-[#BFD4CD]" />
                  </div>
                  <h3 className="mt-9 text-[15px] font-semibold text-[#0A1628]">{title}</h3>
                  <p className="mt-3 text-[13px] leading-[1.72] text-[#475467]">{detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
            <Reveal>
              <div>
                <Eyebrow>Distillation technology</Eyebrow>
                <h2 className="mt-3 font-serif text-[34px] leading-tight text-[#0A1628]">Precision distillation for high-purity requirements</h2>
                <p className="mt-5 max-w-[680px] text-[14px] leading-[1.78] text-[#475467]">Chemical purity depends on process design. The useful question is not whether distillation is used, but how the separation route is built around the feed, target impurity profile, material constraints and final application.</p>
                <div className="mt-8 border-t border-[#DCE3EC]">
                  {distillationFactors.map(([title, detail], index) => (
                    <div key={title} className="grid grid-cols-[36px_150px_1fr] gap-4 border-b border-[#DCE3EC] py-4">
                      <span className="font-mono text-[10.5px] font-semibold text-[#2F8C67]">0{index + 1}</span>
                      <h3 className="text-[13px] font-semibold text-[#0A1628]">{title}</h3>
                      <p className="text-[12.5px] leading-[1.65] text-[#475467]">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <div className="relative min-h-[500px] overflow-hidden">
              <Image src="/images/puretech/high-purity-solvents.jpg" alt="High-purity solvent distillation, processing and storage equipment" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#061d2b]/80 to-transparent p-7 pt-24 text-white">
                <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-[#9ED8C2]">Product-specific process design</p>
                <p className="mt-2 max-w-[520px] text-[12.5px] leading-[1.65] text-white/72">Operating conditions and equipment suitability must be confirmed for each chemical and controlled grade.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#07182D] py-20 text-white">
        <Container>
          <Reveal>
            <Eyebrow light>Contamination control</Eyebrow>
            <div className="mt-3 grid grid-cols-1 gap-6 lg:grid-cols-[420px_1fr] lg:items-end">
              <h2 className="font-serif text-[33px] leading-tight">Contamination control throughout manufacturing</h2>
              <p className="max-w-[760px] text-[14px] leading-[1.78] text-white/60">Contamination risk does not begin or end at the purification equipment. Sampling, transfer, hold time, filling and the production container belong in the same review.</p>
            </div>
          </Reveal>
          <div className="mt-11 grid grid-cols-1 gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {contaminationControls.map(([title, detail], index) => (
              <Reveal key={title} delay={index * 55}>
                <article className="h-full bg-[#07182D] p-7">
                  <span className="font-mono text-[11px] font-semibold text-[#62BD88]">0{index + 1}</span>
                  <h3 className="mt-8 text-[15px] font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-[13px] leading-[1.72] text-white/55">{detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative min-h-[500px] overflow-hidden">
              <Image src="/images/puretech/quality-control.jpg" alt="Quality-control laboratory for high-purity chemical release testing" fill sizes="(max-width:1024px) 100vw, 48vw" className="object-cover" />
            </div>
            <Reveal>
              <div>
                <Eyebrow>Quality-control laboratory</Eyebrow>
                <h2 className="mt-3 font-serif text-[34px] leading-tight text-[#0A1628]">Quality testing before shipment</h2>
                <p className="mt-5 text-[14px] leading-[1.78] text-[#475467]">Before shipment, a batch is assessed against the applicable controlled product specification and supported by the relevant release record. Test scope and methods vary by chemical, grade and customer agreement.</p>
                <div className="mt-8 grid grid-cols-1 gap-px bg-[#DCE3EC] sm:grid-cols-2">
                  {testAreas.map(([title, detail]) => (
                    <article key={title} className="bg-[#F7F9FC] p-5">
                      <h3 className="text-[13.5px] font-semibold text-[#0A1628]">{title}</h3>
                      <p className="mt-2 text-[12px] leading-[1.65] text-[#475467]">{detail}</p>
                    </article>
                  ))}
                </div>
                <Link href="/quality" className="mt-8 inline-flex bg-[#12657B] px-5 py-3 text-[12.5px] font-semibold text-white no-underline hover:bg-[#2F8C67]">Review quality & documentation →</Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-y border-[#E4E7EC] bg-[#F1F5F3] py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <Reveal>
              <div>
                <Eyebrow>Clean filling & packaging</Eyebrow>
                <h2 className="mt-3 font-serif text-[34px] leading-tight text-[#0A1628]">Controlled filling and export packaging</h2>
                <p className="mt-5 max-w-[700px] text-[14px] leading-[1.78] text-[#475467]">The container is part of the product route. Material compatibility, closure, fill volume, headspace, opening pattern, transport and point-of-use connection should be settled before qualification closes.</p>
                <div className="mt-9 grid grid-cols-1 gap-px bg-[#CBD8D5] sm:grid-cols-2">
                  {packRoutes.map(([title, detail]) => (
                    <article key={title} className="bg-white p-5">
                      <h3 className="text-[13.5px] font-semibold text-[#0A1628]">{title}</h3>
                      <p className="mt-2 text-[12px] leading-[1.65] text-[#475467]">{detail}</p>
                    </article>
                  ))}
                </div>
                <p className="mt-4 text-[11.5px] leading-[1.6] text-[#667085]">Formats shown are supply routes for discussion, not a statement of availability for every product, grade or destination.</p>
              </div>
            </Reveal>
            <div className="relative min-h-[520px] overflow-hidden">
              <Image src="/images/puretech/hero.jpg" alt="Chemical filling, packaged containers and export supply preparation" fill sizes="(max-width:1024px) 100vw, 48vw" className="object-cover" />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal>
            <Eyebrow>Warehouse & global supply</Eyebrow>
            <div className="mt-3 grid grid-cols-1 gap-6 lg:grid-cols-[420px_1fr] lg:items-end">
              <h2 className="font-serif text-[33px] leading-tight text-[#0A1628]">Reliable supply requires more than finished inventory</h2>
              <p className="max-w-[760px] text-[14px] leading-[1.78] text-[#475467]">A long-term programme connects production planning with packaging availability, release timing, documentation and the customer’s receiving constraints.</p>
            </div>
            <Link href="/global-chemical-supply" className="mt-7 inline-flex text-[12.5px] font-semibold text-[#12657B] no-underline hover:underline">Explore global supply & export →</Link>
          </Reveal>
          <div className="mt-11 grid grid-cols-1 border-l border-t border-[#DCE3EC] md:grid-cols-2 lg:grid-cols-4">
            {supplyControls.map(([title, detail], index) => (
              <Reveal key={title} delay={index * 50}>
                <article className="h-full border-b border-r border-[#DCE3EC] bg-white p-7">
                  <span className="font-mono text-[11px] font-semibold text-[#2F8C67]">0{index + 1}</span>
                  <h3 className="mt-8 text-[15px] font-semibold text-[#0A1628]">{title}</h3>
                  <p className="mt-3 text-[13px] leading-[1.7] text-[#475467]">{detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#F7F9FC] py-16">
        <Container>
          <Reveal>
            <Eyebrow>Connected supplier review</Eyebrow>
            <h2 className="mt-3 font-serif text-[30px] text-[#0A1628]">Manufacturing is one part of the qualification picture</h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-px bg-[#DCE3EC] md:grid-cols-2 lg:grid-cols-4">
            {[
              ['Products', 'Review grades, specifications and listed packaging.', '/products'],
              ['Applications', 'Connect the material to the process and qualification questions.', '/applications'],
              ['Quality', 'Review methods, documentation, traceability and change expectations.', '/quality'],
              ['OEM & custom supply', 'Define private-label, custom-pack or long-term programme requirements.', '/oem-custom-chemical-solutions'],
            ].map(([title, detail, href]) => (
              <Link key={title} href={href} className="group bg-white p-6 text-[#0A1628] no-underline hover:bg-[#F2F8F5]">
                <h3 className="text-[14px] font-semibold group-hover:text-[#12657B]">{title}</h3>
                <p className="mt-3 text-[12.5px] leading-[1.65] text-[#475467]">{detail}</p>
                <span className="mt-5 block text-[12px] font-semibold text-[#12657B]">Explore →</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner label="Manufacturing capability" title={<>Partner with a reliable<br />chemical manufacturer.</>} subtitle="Whether you require a standard product, controlled specification, custom pack or long-term supply programme, begin with the application and qualification brief." p1="Request Manufacturing Information" h1="/contact" p2="Contact Our Team" h2="/contact" />
    </>
  )
}
