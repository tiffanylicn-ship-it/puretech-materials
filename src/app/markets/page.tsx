import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container, CtaBanner, Eyebrow } from '@/components/ui/index'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Global Markets | High-Purity Chemical Supply',
  description: 'Regional chemical supply planning for Europe, North America and Asia Pacific, with product, documentation, packaging and partner support.',
  alternates: { canonical: 'https://puretechmaterials.com/markets' },
}

const regions = [
  ['Europe', 'Manufacturing, pharmaceutical, electronics and distributor projects with market-specific document review.', '/markets/europe', '/images/puretech/manufacturing.jpg'],
  ['North America', 'Advanced manufacturing, biotech, analytical and industrial projects with site-led qualification.', '/markets/north-america', '/images/puretech/applications.jpg'],
  ['Japan & Korea', 'Precision electronics and advanced-material programmes focused on specification and change control.', '/markets/japan-korea', '/images/puretech/electronic-materials.jpg'],
  ['Southeast Asia', 'Electronics, pharmaceutical, industrial and distribution projects with destination-led logistics review.', '/markets/southeast-asia', '/images/puretech/manufacturing.jpg'],
  ['Middle East', 'Industrial, pharmaceutical, analytical and distribution projects with destination-led packaging and document review.', '/markets/middle-east', '/images/puretech/manufacturing.jpg'],
]

const countries = [
  ['Germany', '/markets/germany'], ['France', '/markets/france'], ['Netherlands', '/markets/netherlands'], ['United Kingdom', '/markets/uk'], ['Italy', '/markets/italy'], ['Spain', '/markets/spain'], ['United States', '/markets/usa'], ['Canada', '/markets/canada'], ['Japan', '/markets/japan'], ['South Korea', '/markets/south-korea'],
]

export default function MarketsPage() {
  return <>
    <section className="relative min-h-[620px] overflow-hidden bg-[#07182D] text-white"><Image src="/images/puretech/manufacturing.jpg" alt="Global high-purity chemical manufacturing, packaging and supply planning" fill priority sizes="100vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-[#07182D] via-[#07182D]/91 to-[#07182D]/20" /><Container className="relative z-10 flex min-h-[620px] items-center py-20"><div className="max-w-[770px]"><Eyebrow light>Global markets</Eyebrow><h1 className="mt-5 font-serif text-[clamp(40px,5.2vw,65px)] leading-[1.02] tracking-[-0.9px]">Chemical supply built around the destination</h1><p className="mt-7 max-w-[700px] text-[16px] leading-[1.78] text-white/72">Regional product, documentation, packaging and logistics support for high-purity chemical projects—without assuming that one export programme fits every market.</p><Link href="#regions" className="mt-9 inline-flex bg-white px-6 py-3.5 text-[13px] font-semibold text-[#102A43] no-underline hover:bg-[#DDEDE4]">Choose a region</Link></div></Container></section>
    <section id="regions" className="scroll-mt-24 py-20"><Container><Reveal><Eyebrow>Explore by region</Eyebrow><div className="mt-3 grid grid-cols-1 gap-7 lg:grid-cols-[430px_1fr]"><h2 className="font-serif text-[34px] leading-tight text-[#102A43]">Local-market understanding without unsupported local claims</h2><p className="text-[14px] leading-[1.78] text-[#475467]">Each page explains the questions relevant to a region. Warehouse, registration, importer, local stock and customer status are confirmed only for a specific project.</p></div></Reveal><div className="mt-11 grid grid-cols-1 gap-5 md:grid-cols-2">{regions.map(([title, detail, href, image], index) => <Reveal key={title} delay={index * 45}><Link href={href} className="group grid min-h-[310px] grid-cols-1 overflow-hidden border border-[#DCE3EC] bg-white text-[#102A43] no-underline sm:grid-cols-[0.9fr_1.1fr]"><div className="relative min-h-[220px]"><Image src={image} alt={`${title} industrial market environment`} fill sizes="(max-width:768px) 100vw, 25vw" className="object-cover" /></div><div className="flex flex-col p-7"><span className="font-mono text-[10px] font-semibold text-[#2F6B55]">0{index + 1}</span><h3 className="mt-8 font-serif text-[25px] group-hover:text-[#12657B]">{title}</h3><p className="mt-3 flex-1 text-[12.8px] leading-[1.7] text-[#475467]">{detail}</p><span className="mt-5 text-[12px] font-semibold text-[#12657B]">Explore market →</span></div></Link></Reveal>)}</div></Container></section>
    <section className="border-y border-[#E4E7EC] bg-[#F7F9FC] py-20"><Container><Reveal><Eyebrow>Priority market pages</Eyebrow><h2 className="mt-3 font-serif text-[32px] text-[#102A43]">Review a country-specific purchasing context</h2></Reveal><div className="mt-10 grid grid-cols-2 gap-px bg-[#DCE3EC] md:grid-cols-3 lg:grid-cols-5">{countries.map(([name, href], index) => <Reveal key={name} delay={(index % 5) * 35}><Link href={href} className="group flex min-h-[150px] flex-col justify-between bg-white p-5 text-[#102A43] no-underline hover:bg-[#07182D] hover:text-white"><span className="font-mono text-[10px] text-[#2F6B55] group-hover:text-[#8FC7FF]">{String(index + 1).padStart(2, '0')}</span><span className="text-[13.5px] font-semibold">{name} →</span></Link></Reveal>)}</div><div className="mt-9 flex flex-wrap gap-3"><Link href="/markets/distributor-partnership" className="bg-[#1F5A45] px-5 py-3 text-[12.5px] font-semibold text-white no-underline">Distributor partnership</Link><Link href="/global-chemical-supply" className="border border-[#12657B] px-5 py-3 text-[12.5px] font-semibold text-[#12657B] no-underline">Global supply capability</Link></div></Container></section>
    <CtaBanner label="Market enquiry" title={<>Planning supply for<br />a specific destination?</>} subtitle="Share the product, grade, use, destination, pack, volume and importer context." p1="Request Market Review" h1="/contact" p2="Global Supply" h2="/global-chemical-supply" />
  </>
}
