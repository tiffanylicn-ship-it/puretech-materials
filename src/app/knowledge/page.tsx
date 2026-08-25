import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container, CtaBanner, Eyebrow } from '@/components/ui/index'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Technical Chemical Knowledge | Purity, Solvents & Testing',
  description: 'Technical knowledge about chemical purity grades, solvent selection, storage, analytical testing and high-purity manufacturing.',
  alternates: { canonical: 'https://puretechmaterials.com/knowledge' },
}

const knowledgeAreas = [
  ['01', 'Chemical purity grades', 'Understand what a grade label does—and does not—tell you about assay, impurities, water, particles and documentation.'],
  ['02', 'Solvent selection', 'Connect solvency, evaporation, water, residue and application compatibility to the choice of product and grade.'],
  ['03', 'Storage & handling', 'Consider container, opening pattern, moisture exposure, transfer, shelf-life review and site safety together.'],
  ['04', 'Quality testing', 'Read methods, reporting limits, representative results and controlled specifications with the purchasing decision in mind.'],
  ['05', 'Manufacturing technology', 'Explore how raw materials, purification, filtration, testing, filling and release form one product route.'],
]

const topics = [
  {
    no: '01',
    title: 'What is electronic grade IPA?',
    keyword: 'Electronic grade IPA',
    detail: 'Semiconductor cleaning, trace metals, water content, particle control and the limits of a general grade name.',
    href: '/blog/electronic-grade-ipa-semiconductor-wafer-cleaning',
  },
  {
    no: '02',
    title: 'Electronic grade IPA vs industrial IPA',
    keyword: 'Electronic grade IPA vs industrial IPA',
    detail: 'Why contact surface, contamination budget, analytical methods, packaging and price should be compared together.',
    href: '/guides#ipa-buying-guide',
  },
  {
    no: '03',
    title: 'How to select high-purity solvents for manufacturing',
    keyword: 'High-purity solvent selection',
    detail: 'A process-led framework for separating important quality attributes from an unnecessarily broad specification.',
    href: '/guides#solvent-grade-selection',
  },
  {
    no: '04',
    title: 'Understanding PGMEA in semiconductor manufacturing',
    keyword: 'PGMEA supplier',
    detail: 'Photoresist formulation, coating, edge-bead removal and the purity attributes that affect process behaviour.',
    href: '/blog/pgmea-photoresist-solvent-euv-arf-lithography',
  },
  {
    no: '05',
    title: 'What is a trace-metal grade chemical?',
    keyword: 'Trace-metal grade chemicals',
    detail: 'Why target analytes, reporting limits, method blanks, concentration and container practice define suitability.',
    href: '/applications/icp-ms',
  },
]

const readingRoutes = [
  ['Electronic materials', 'IPA, PGMEA, NMP and contamination-sensitive manufacturing.', '/applications/semiconductor'],
  ['Solvent knowledge', 'Grade, water, residue, stabiliser, packaging and process selection.', '/guides'],
  ['Trace analysis', 'Acids, water, method blanks and ultra-trace contamination control.', '/applications/icp-ms'],
  ['Manufacturing & quality', 'Purification, testing, documents and product release routes.', '/manufacturing'],
]

export default function KnowledgePage() {
  return (
    <>
      <section className="relative min-h-[560px] overflow-hidden bg-[#061d2b] text-white">
        <Image src="/images/puretech/quality-control.jpg" alt="Analytical chemistry laboratory, instruments and technical data review" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061d2b] via-[#061d2b]/91 to-[#061d2b]/22" />
        <Container className="relative z-10 flex min-h-[560px] items-center py-20">
          <div className="max-w-[760px]">
            <Eyebrow light>Technical knowledge</Eyebrow>
            <h1 className="mt-5 font-serif text-[clamp(39px,5vw,62px)] leading-[1.02] tracking-[-0.85px]">Chemical knowledge for better specification decisions</h1>
            <p className="mt-7 max-w-[690px] text-[16px] leading-[1.78] text-white/72">Learn how purity grades, analytical methods, storage, manufacturing and packaging affect product selection—before those decisions become part of a qualification plan.</p>
            <Link href="#recommended-reading" className="mt-9 inline-flex bg-white px-6 py-3.5 text-[13px] font-semibold text-[#08283b] no-underline hover:bg-[#DDEDE4]">Explore technical topics</Link>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal><Eyebrow>Knowledge map</Eyebrow><h2 className="mt-3 font-serif text-[33px] text-[#0A1628]">Five subjects that shape chemical qualification</h2><p className="mt-4 max-w-[780px] text-[14px] leading-[1.75] text-[#475467]">The sections are organised around buyer and process-team decisions, not academic chemistry categories.</p></Reveal>
          <div className="mt-11 grid grid-cols-1 border-l border-t border-[#DCE3EC] md:grid-cols-2 lg:grid-cols-5">
            {knowledgeAreas.map(([no, title, detail], index) => (
              <Reveal key={title} delay={index * 50}>
                <article className="h-full border-b border-r border-[#DCE3EC] bg-white p-6"><span className="font-mono text-[11px] font-semibold text-[#2F8C67]">{no}</span><h3 className="mt-8 text-[14px] font-semibold text-[#0A1628]">{title}</h3><p className="mt-3 text-[12.7px] leading-[1.7] text-[#475467]">{detail}</p></article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="recommended-reading" className="scroll-mt-24 border-y border-[#E4E7EC] bg-[#F7F9FC] py-20">
        <Container>
          <Reveal><Eyebrow>Recommended reading</Eyebrow><div className="mt-3 flex flex-wrap items-end justify-between gap-5"><div><h2 className="font-serif text-[33px] text-[#0A1628]">Start with a question your team is already asking</h2><p className="mt-4 max-w-[780px] text-[14px] leading-[1.75] text-[#475467]">These articles and guides support initial screening. They do not replace current product specifications or customer qualification.</p></div><Link href="/blog" className="text-[12.5px] font-semibold text-[#12657B] no-underline hover:underline">All technical articles →</Link></div></Reveal>
          <div className="mt-11 overflow-hidden border border-[#DCE3EC] bg-white">
            {topics.map((topic, index) => (
              <Reveal key={topic.title} delay={(index % 4) * 40}>
                <Link href={topic.href} className="group grid grid-cols-1 gap-3 border-b border-[#EAECF0] p-6 text-[#0A1628] no-underline last:border-b-0 md:grid-cols-[50px_1.1fr_1.6fr_150px] md:items-center md:gap-5 hover:bg-[#F8FCFA]">
                  <span className="font-mono text-[11px] font-semibold text-[#2F8C67]">{topic.no}</span>
                  <div><h3 className="text-[14px] font-semibold group-hover:text-[#12657B]">{topic.title}</h3><p className="mt-1 font-mono text-[10px] text-[#98A2B3]">{topic.keyword}</p></div>
                  <p className="text-[12.8px] leading-[1.65] text-[#475467]">{topic.detail}</p>
                  <span className="text-[12px] font-semibold text-[#12657B]">Read topic →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal><Eyebrow>Continue by subject</Eyebrow><h2 className="mt-3 font-serif text-[32px] text-[#0A1628]">Follow a complete reading route</h2></Reveal>
          <div className="mt-10 grid grid-cols-1 gap-px bg-[#DCE3EC] md:grid-cols-2 lg:grid-cols-4">
            {readingRoutes.map(([title, detail, href], index) => (
              <Reveal key={title} delay={index * 50}>
                <Link href={href} className="group flex h-full min-h-[240px] flex-col bg-white p-6 text-[#0A1628] no-underline hover:bg-[#07182D] hover:text-white"><span className="font-mono text-[11px] text-[#2F8C67] group-hover:text-[#8FC7FF]">0{index + 1}</span><h3 className="mt-8 text-[15px] font-semibold">{title}</h3><p className="mt-3 flex-1 text-[12.8px] leading-[1.7] text-[#475467] group-hover:text-white/58">{detail}</p><span className="mt-6 text-[12px] font-semibold text-[#12657B] group-hover:text-[#8FC7FF]">Explore route →</span></Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner label="Technical knowledge" title={<>Need help applying<br />a technical article?</>} subtitle="Share the application, current specification and the decision your team needs to make." p1="Ask a Technical Question" h1="/contact" p2="Product Selection Guides" h2="/guides" />
    </>
  )
}
