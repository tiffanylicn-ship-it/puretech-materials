import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container, CtaBanner, Eyebrow } from '@/components/ui/index'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Chemical Product Selection Guides | Solvent & Bulk Buying',
  description: 'Practical guides for choosing solvent grades, qualifying IPA and planning drums, IBCs and bulk chemical supply.',
  alternates: { canonical: 'https://puretechmaterials.com/guides' },
}

const grades = [
  ['Industrial grade', 'Routine manufacturing and cleaning where a fit-for-purpose assay, water limit and controlled impurity profile are more useful than an unnecessarily broad specification.', 'Process role · surface compatibility · residue · supply format'],
  ['High-purity grade', 'Processes that need tighter control of selected impurities, water or residue. “High purity” still needs product-specific limits and methods.', 'Critical impurities · method · reporting limit · lot consistency'],
  ['Analytical grade', 'Laboratory work selected around the actual technique, detector and blank—not simply the strongest grade name in a catalogue.', 'Method background · detector suitability · bottle practice'],
  ['Electronic grade', 'Contamination-sensitive electronics work where metals, particles, water, residue, container and delivery route can all influence yield.', 'Process node · contamination budget · particles · packaging'],
]

const ipaQuestions = [
  ['01', 'What does the IPA do?', 'Cleaning, drying, extraction, formulation and process use can place very different weight on the same specification line.'],
  ['02', 'Which results affect acceptance?', 'Identify the assay, water, acidity, non-volatile residue, selected organics, metals or particles your process actually monitors.'],
  ['03', 'How will the material reach the process?', 'Qualification should consider bottle, drum or IBC; closure and wetted materials; opening frequency; transfer and storage.'],
  ['04', 'What must the supplier provide?', 'Review the current specification, lot-specific CoA, SDS, change expectations, traceability and response route before approval.'],
]

const bulkSteps = [
  ['Forecast the real demand', 'Share monthly usage, seasonality, planned shutdowns, safety stock and the date by which production supply must be qualified.'],
  ['Choose the working pack', 'Compare drums and IBCs against consumption rate, site storage, dispensing equipment, waste, returnability and dangerous-goods rules.'],
  ['Check site handling', 'Confirm unloading, access, ventilation, bonding, compatible wetted materials and the procedure for partially used containers.'],
  ['Agree the document route', 'Set specification, CoA format, SDS market version, labels, shipment records and any customer declarations before the first production order.'],
  ['Plan continuity', 'Discuss order cadence, forecast windows, change communication and an escalation route rather than relying on emergency orders.'],
]

export default function GuidesPage() {
  return (
    <>
      <section className="relative min-h-[560px] overflow-hidden bg-[#061d2b] text-white">
        <Image src="/images/puretech/high-purity-solvents.jpg" alt="High-purity solvent containers and process equipment used during product selection" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061d2b] via-[#061d2b]/91 to-[#061d2b]/22" />
        <Container className="relative z-10 flex min-h-[560px] items-center py-20">
          <div className="max-w-[770px]">
            <Eyebrow light>Product selection guides</Eyebrow>
            <h1 className="mt-5 font-serif text-[clamp(39px,5vw,62px)] leading-[1.02] tracking-[-0.85px]">Choose the chemical around the work it must do</h1>
            <p className="mt-7 max-w-[690px] text-[16px] leading-[1.78] text-white/72">A useful buying brief connects application, measurable risk, grade, packaging, documents and routine supply. These guides help a technical and purchasing team prepare that brief together.</p>
            <Link href="#solvent-grade-selection" className="mt-9 inline-flex bg-white px-6 py-3.5 text-[13px] font-semibold text-[#08283b] no-underline hover:bg-[#DDEDE4]">Start with grade selection</Link>
          </div>
        </Container>
      </section>

      <section id="solvent-grade-selection" className="scroll-mt-24 py-20">
        <Container>
          <Reveal><Eyebrow>Guide 01 · solvent grades</Eyebrow><div className="mt-3 grid grid-cols-1 gap-7 lg:grid-cols-[410px_1fr]"><h2 className="font-serif text-[34px] leading-tight text-[#0A1628]">The right grade is the one your process can defend</h2><div><p className="text-[14px] leading-[1.78] text-[#475467]">Grade names organise a conversation; they are not universal specifications. Compare the actual limits, methods, packaging and documentation against the process risk.</p><p className="mt-3 text-[13px] leading-[1.72] text-[#667085]">Start with the failure mode: residue on a surface, water in a reaction, detector background, metal contamination or inconsistent formulation behaviour.</p></div></div></Reveal>
          <div className="mt-11 grid grid-cols-1 gap-px bg-[#DCE3EC] md:grid-cols-2 lg:grid-cols-4">
            {grades.map(([title, detail, checkpoints], index) => <Reveal key={title} delay={index * 50}><article className="flex h-full min-h-[330px] flex-col bg-white p-7"><span className="font-mono text-[11px] font-semibold text-[#2F8C67]">0{index + 1}</span><h3 className="mt-8 font-serif text-[23px] text-[#0A1628]">{title}</h3><p className="mt-4 flex-1 text-[12.8px] leading-[1.72] text-[#475467]">{detail}</p><p className="mt-6 border-t border-[#EAECF0] pt-4 font-mono text-[10px] leading-[1.6] text-[#667085]">{checkpoints}</p></article></Reveal>)}
          </div>
        </Container>
      </section>

      <section id="ipa-buying-guide" className="scroll-mt-24 border-y border-[#E4E7EC] bg-[#F7F9FC] py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[350px_1fr]">
            <Reveal><div><Eyebrow>Guide 02 · IPA</Eyebrow><h2 className="mt-3 font-serif text-[33px] leading-tight text-[#0A1628]">An IPA enquiry needs more than purity and price</h2><p className="mt-5 text-[14px] leading-[1.78] text-[#475467]">The same molecule serves semiconductor cleaning, routine production, pharmaceutical processing and laboratory work. A credible comparison starts by separating those uses.</p><div className="mt-7 flex flex-col gap-2"><Link href="/products/electronic-grade-ipa" className="text-[12.5px] font-semibold text-[#12657B] no-underline hover:underline">Electronic-grade IPA →</Link><Link href="/products/ipa-solvent" className="text-[12.5px] font-semibold text-[#12657B] no-underline hover:underline">High-purity IPA →</Link></div></div></Reveal>
            <div className="border border-[#DCE3EC] bg-white">
              {ipaQuestions.map(([no, title, detail], index) => <Reveal key={title} delay={index * 45}><article className="grid grid-cols-[42px_1fr] gap-4 border-b border-[#EAECF0] p-6 last:border-b-0 md:grid-cols-[60px_220px_1fr]"><span className="font-mono text-[11px] font-semibold text-[#2F8C67]">{no}</span><h3 className="text-[14px] font-semibold text-[#0A1628]">{title}</h3><p className="col-start-2 text-[12.8px] leading-[1.7] text-[#475467] md:col-start-auto">{detail}</p></article></Reveal>)}
            </div>
          </div>
        </Container>
      </section>

      <section id="bulk-purchasing-guide" className="scroll-mt-24 bg-[#07182D] py-20 text-white">
        <Container>
          <Reveal><Eyebrow light>Guide 03 · bulk purchasing</Eyebrow><div className="mt-3 grid grid-cols-1 gap-7 lg:grid-cols-[430px_1fr]"><h2 className="font-serif text-[34px] leading-tight">Move from a container request to a supply programme</h2><p className="max-w-[760px] text-[14px] leading-[1.78] text-white/60">A 200 L drum or an IBC is not only a larger pack. It changes storage, transfer, exposure, transport, replenishment and the way a site manages residual material.</p></div></Reveal>
          <div className="mt-11 grid grid-cols-1 border-l border-t border-white/10 md:grid-cols-2 lg:grid-cols-5">
            {bulkSteps.map(([title, detail], index) => <Reveal key={title} delay={index * 45}><article className="h-full border-b border-r border-white/10 p-6"><span className="font-mono text-[11px] text-[#69C69A]">0{index + 1}</span><h3 className="mt-7 text-[14px] font-semibold">{title}</h3><p className="mt-3 text-[12.6px] leading-[1.72] text-white/52">{detail}</p></article></Reveal>)}
          </div>
          <div className="mt-9 flex flex-wrap gap-3"><Link href="/custom-solutions/bulk-supply" className="bg-white px-5 py-3 text-[12.5px] font-semibold text-[#08283b] no-underline hover:bg-[#DDEDE4]">Explore bulk supply</Link><Link href="/global-chemical-supply" className="border border-white/20 px-5 py-3 text-[12.5px] font-semibold text-white no-underline hover:bg-white/10">Review export planning</Link></div>
        </Container>
      </section>

      <CtaBanner label="Selection support" title={<>Turn the application<br />into a useful buying brief</>} subtitle="Share the process, current specification, critical limits, pack, destination and annual demand." p1="Request Product Selection" h1="/contact" p2="Browse Products" h2="/products" />
    </>
  )
}
