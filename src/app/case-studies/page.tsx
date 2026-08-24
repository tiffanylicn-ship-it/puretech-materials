import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container, Eyebrow } from '@/components/ui/index'
import { Reveal } from '@/components/ui/Reveal'
import { caseStudies, caseStudyDisclaimer } from '@/lib/case-studies'

export const metadata: Metadata = {
  title: 'Chemical Product Application Cases | Europe & North America',
  description: 'Representative high-purity chemical qualification cases for semiconductor, pharmaceutical, analytical, industrial and private-label supply in Europe and North America.',
  keywords: ['high purity chemical application cases', 'chemical supplier qualification Europe', 'specialty chemical case studies USA', 'solvent qualification examples'],
  alternates: { canonical: 'https://puretechmaterials.com/case-studies' },
  openGraph: { title: 'High-Purity Chemical Application Cases', description: 'Practical qualification scenarios for European and North American chemical buyers.', url: 'https://puretechmaterials.com/case-studies', images: ['/images/puretech/applications.jpg'] },
}

export default function CaseStudiesPage() {
  return <>
    <section className="bg-[#07182D] py-24 text-white"><Container><Eyebrow light>Application cases</Eyebrow><h1 className="mt-5 max-w-[880px] font-serif text-[clamp(40px,5vw,62px)] leading-[1.04]">See how a chemical qualification decision is built</h1><p className="mt-6 max-w-[760px] text-[15.5px] leading-[1.78] text-white/68">Practical, application-led scenarios for European and North American technical, quality and procurement teams. Each case connects performance parameters, packaging and documents with the evidence a real process needs.</p></Container></section>
    <section className="py-20"><Container><Reveal><p className="max-w-[920px] border-l-2 border-[#2F6B55] pl-5 text-[12.5px] leading-[1.7] text-[#667085]">{caseStudyDisclaimer}</p></Reveal><div className="mt-11 grid grid-cols-1 gap-6 lg:grid-cols-2">{caseStudies.map((study, index) => <Reveal key={study.slug} delay={(index % 2) * 45}><Link href={`/case-studies/${study.slug}`} className="group grid h-full overflow-hidden border border-[#DCE3EC] bg-white text-[#102A43] no-underline sm:grid-cols-[0.82fr_1.18fr]"><div className="relative min-h-[260px]"><Image src={study.image} alt={`${study.title} representative technical environment`} fill sizes="(max-width:640px) 100vw, 28vw" className="object-cover" /></div><article className="flex flex-col p-7"><p className="font-mono text-[10px] uppercase tracking-[0.08em] text-[#2F6B55]">{study.region} · {study.sector}</p><h2 className="mt-4 font-serif text-[24px] leading-[1.2] group-hover:text-[#12657B]">{study.title}</h2><p className="mt-4 flex-1 text-[12.5px] leading-[1.7] text-[#475467]">{study.summary}</p><span className="mt-6 text-[12px] font-semibold text-[#12657B]">Read qualification case →</span></article></Link></Reveal>)}</div></Container></section>
    <section className="bg-[#1F5A45] py-20 text-white"><Container><div className="text-center"><Eyebrow light>Your application</Eyebrow><h2 className="mt-3 font-serif text-[38px]">Build a qualification route around your process</h2><p className="mx-auto mt-4 max-w-[680px] text-[14px] leading-[1.7] text-white/68">Share the product, use, critical parameters, destination, pack and target date.</p><Link href="/contact?subject=Application%20qualification%20review" className="mt-8 inline-flex bg-white px-6 py-3.5 text-[13px] font-semibold text-[#173F31] no-underline">Request technical review</Link></div></Container></section>
  </>
}
