import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container, CtaBanner, Eyebrow } from '@/components/ui/index'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Chemical Regulatory & Compliance Documentation Support',
  description: 'Product- and market-specific support for REACH, GHS, SDS, CoA traceability, batch documents and chemical export documentation.',
  alternates: { canonical: 'https://puretechmaterials.com/compliance' },
}

const topics = [
  ['REACH review', 'Confirm substance, role in the supply chain, tonnage context, intended use, destination and the current status relevant to the transaction. A supplier name alone does not establish coverage.'],
  ['GHS communication', 'Classification, label elements and SDS content depend on substance or mixture, concentration, jurisdiction and current rules. The destination version should be reviewed before shipment.'],
  ['Safety Data Sheet', 'The SDS supports hazard communication, handling, storage, transport and emergency planning. Ask for the current market and language version for the supplied product.'],
  ['CoA & traceability', 'A CoA should connect the supplied lot to the agreed specification and release format. The useful level of result detail is established during qualification.'],
  ['Batch documentation', 'Specification, manufacturing and testing records, label data, pack identification and shipment references form different parts of the traceability chain.'],
  ['Export requirements', 'Dangerous-goods classification, packaging approval, labels, transport papers, customs data and importer responsibilities must be checked for the actual product and route.'],
]

const reviewSteps = [
  ['01', 'Identify the exact product', 'Chemical name, CAS, concentration or formulation, grade and intended pack.'],
  ['02', 'Define the market route', 'Destination country, importer role, use, transport mode and requested language.'],
  ['03', 'List the required evidence', 'SDS, specification, CoA format, declarations, labels and shipment records.'],
  ['04', 'Confirm current status', 'Use dated, product-specific documents and record open questions before approval.'],
]

export default function CompliancePage() {
  return (
    <>
      <section className="relative min-h-[560px] overflow-hidden bg-[#061d2b] text-white">
        <Image src="/images/puretech/pharma-gmp.jpg" alt="Chemical compliance documentation and regulated manufacturing review" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061d2b] via-[#061d2b]/92 to-[#061d2b]/22" />
        <Container className="relative z-10 flex min-h-[560px] items-center py-20">
          <div className="max-w-[760px]"><Eyebrow light>Regulatory & compliance</Eyebrow><h1 className="mt-5 font-serif text-[clamp(39px,5vw,62px)] leading-[1.02] tracking-[-0.85px]">Documentation that follows the product and the market</h1><p className="mt-7 max-w-[700px] text-[16px] leading-[1.78] text-white/72">Regulatory status is product-, market-, role- and date-specific. We support document review around the actual supply route instead of relying on blanket compliance statements.</p><Link href="#compliance-topics" className="mt-9 inline-flex bg-white px-6 py-3.5 text-[13px] font-semibold text-[#08283b] no-underline hover:bg-[#DDEDE4]">Review documentation topics</Link></div>
        </Container>
      </section>

      <section className="border-b border-[#D8E5DF] bg-[#EFF7F3] py-8">
        <Container><div className="grid grid-cols-1 gap-4 lg:grid-cols-[170px_1fr] lg:items-start"><p className="font-mono text-[10px] font-semibold uppercase tracking-[0.13em] text-[#267456]">Scope note</p><p className="max-w-[920px] text-[13.5px] leading-[1.72] text-[#315848]">Information on this page is a qualification framework, not legal advice or a declaration that every product is registered or compliant in every country. Request the current product-specific status for the intended transaction.</p></div></Container>
      </section>

      <section id="compliance-topics" className="scroll-mt-24 py-20">
        <Container>
          <Reveal><Eyebrow>Documentation map</Eyebrow><div className="mt-3 grid grid-cols-1 gap-7 lg:grid-cols-[420px_1fr]"><h2 className="font-serif text-[34px] leading-tight text-[#0A1628]">Six reviews before a controlled shipment</h2><p className="max-w-[760px] text-[14px] leading-[1.78] text-[#475467]">Quality and compliance are related, but they answer different questions. Quality governs manufacture, testing and release; compliance connects the supplied material and documents to a market and transaction.</p></div></Reveal>
          <div className="mt-11 grid grid-cols-1 gap-px bg-[#DCE3EC] md:grid-cols-2 lg:grid-cols-3">{topics.map(([title, detail], index) => <Reveal key={title} delay={(index % 3) * 50}><article className="h-full bg-white p-7"><span className="font-mono text-[11px] font-semibold text-[#2F8C67]">0{index + 1}</span><h3 className="mt-8 text-[15px] font-semibold text-[#0A1628]">{title}</h3><p className="mt-4 text-[12.8px] leading-[1.74] text-[#475467]">{detail}</p></article></Reveal>)}</div>
        </Container>
      </section>

      <section className="border-y border-[#E4E7EC] bg-[#F7F9FC] py-20">
        <Container><div className="grid grid-cols-1 gap-12 lg:grid-cols-[350px_1fr]"><Reveal><div><Eyebrow>Document request brief</Eyebrow><h2 className="mt-3 font-serif text-[32px] leading-tight text-[#0A1628]">Give the document team a route they can verify</h2><p className="mt-5 text-[14px] leading-[1.75] text-[#475467]">A request for “all certificates” is difficult to answer accurately. Four details turn it into a controlled review.</p></div></Reveal><div className="border border-[#DCE3EC] bg-white">{reviewSteps.map(([no, title, detail], index) => <Reveal key={title} delay={index * 45}><article className="grid grid-cols-[42px_1fr] gap-4 border-b border-[#EAECF0] p-6 last:border-b-0 md:grid-cols-[60px_220px_1fr]"><span className="font-mono text-[11px] font-semibold text-[#2F8C67]">{no}</span><h3 className="text-[14px] font-semibold text-[#0A1628]">{title}</h3><p className="col-start-2 text-[12.8px] leading-[1.7] text-[#475467] md:col-start-auto">{detail}</p></article></Reveal>)}</div></div></Container>
      </section>

      <section className="bg-[#07182D] py-16 text-white"><Container><div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><div><Eyebrow light>Continue the review</Eyebrow><h2 className="mt-3 font-serif text-[31px]">Use the page that matches your next decision</h2><p className="mt-4 max-w-[760px] text-[14px] leading-[1.72] text-white/58">Review manufacturing release controls under Quality, request current files in Downloads, or plan destination documents with Global Supply.</p></div><div className="flex flex-wrap gap-3"><Link href="/quality" className="bg-white px-5 py-3 text-[12.5px] font-semibold text-[#08283b] no-underline">Quality system</Link><Link href="/downloads" className="border border-white/20 px-5 py-3 text-[12.5px] font-semibold text-white no-underline">Downloads</Link><Link href="/global-chemical-supply" className="border border-white/20 px-5 py-3 text-[12.5px] font-semibold text-white no-underline">Global supply</Link></div></div></Container></section>

      <CtaBanner label="Compliance support" title={<>Request the current<br />product document route</>} subtitle="Tell us the product, grade, pack, destination, use and the documents your quality team expects." p1="Request Documents" h1="/contact" p2="Open Downloads" h2="/downloads" />
    </>
  )
}
