import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Container, Eyebrow } from '@/components/ui/index'
import { caseStudies, caseStudyDisclaimer, findCaseStudy } from '@/lib/case-studies'

export function generateStaticParams() { return caseStudies.map((study) => ({ slug: study.slug })) }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const study = findCaseStudy(slug)
  if (!study) return { title: 'Case Study Not Found' }
  const url = `https://puretechmaterials.com/case-studies/${study.slug}`
  return { title: study.metaTitle, description: study.metaDescription, keywords: study.keywords, alternates: { canonical: url }, openGraph: { title: study.metaTitle, description: study.metaDescription, url, type: 'article', images: [{ url: study.image, alt: study.title }] }, twitter: { card: 'summary_large_image', title: study.metaTitle, description: study.metaDescription, images: [study.image] } }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = findCaseStudy(slug)
  if (!study) notFound()
  const subject = encodeURIComponent(`Application review: ${study.title}`)
  return <>
    <div className="border-b border-[#DCE3EC] bg-[#F7F9FC] py-3"><Container><nav className="flex gap-2 text-[12px] text-[#667085]"><Link href="/case-studies" className="no-underline hover:text-[#12657B]">Application cases</Link><span>›</span><span>{study.title}</span></nav></Container></div>
    <section className="bg-[#07182D] text-white"><Container><div className="grid min-h-[610px] grid-cols-1 lg:grid-cols-[0.92fr_1.08fr]"><div className="flex flex-col justify-center py-16 pr-0 lg:pr-12"><Eyebrow light>{study.region} · {study.sector}</Eyebrow><h1 className="mt-5 font-serif text-[clamp(38px,4.8vw,57px)] leading-[1.05]">{study.headline}</h1><p className="mt-6 text-[15px] leading-[1.78] text-white/68">{study.summary}</p><Link href={`/contact?subject=${subject}`} className="mt-8 w-fit bg-white px-6 py-3.5 text-[13px] font-semibold text-[#102A43] no-underline">Discuss a similar project</Link></div><div className="relative min-h-[420px]"><Image src={study.image} alt={`${study.title} application qualification environment`} fill priority sizes="(max-width:1024px) 100vw, 55vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-[#07182D] via-transparent to-transparent" /></div></div></Container></section>
    <section className="py-20"><Container><div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.75fr_1.25fr]"><div><Eyebrow>Qualification challenge</Eyebrow><h2 className="mt-3 font-serif text-[32px] text-[#102A43]">The decision behind the product request</h2><p className="mt-5 text-[14px] leading-[1.8] text-[#475467]">{study.challenge}</p><p className="mt-7 border-l-2 border-[#2F6B55] pl-4 text-[11.8px] leading-[1.65] text-[#667085]">{caseStudyDisclaimer}</p></div><div className="border border-[#DCE3EC] bg-[#F7F9FC] p-8"><p className="font-mono text-[10px] uppercase tracking-[0.08em] text-[#2F6B55]">Qualification approach</p><ol className="mt-7 space-y-6">{study.approach.map((step, index) => <li key={step} className="grid grid-cols-[34px_1fr] gap-3"><span className="font-mono text-[11px] font-semibold text-[#2F6B55]">0{index + 1}</span><span className="text-[13px] leading-[1.72] text-[#475467]">{step}</span></li>)}</ol></div></div></Container></section>
    <section className="border-y border-[#E4E7EC] bg-[#F7F9FC] py-20"><Container><Eyebrow>Performance and evidence</Eyebrow><h2 className="mt-3 font-serif text-[32px] text-[#102A43]">Parameters reviewed in process context</h2><div className="mt-9 grid grid-cols-1 gap-px bg-[#DCE3EC] md:grid-cols-2">{study.parameters.map(({ label, detail }) => <article key={label} className="bg-white p-6"><h3 className="text-[14px] font-semibold text-[#102A43]">{label}</h3><p className="mt-3 text-[12.5px] leading-[1.7] text-[#475467]">{detail}</p></article>)}</div></Container></section>
    <section className="py-20"><Container><div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.8fr]"><div><Eyebrow>Qualification outcome</Eyebrow><h2 className="mt-3 font-serif text-[32px] text-[#102A43]">A controlled baseline for the next supply decision</h2><p className="mt-5 max-w-[760px] text-[14px] leading-[1.8] text-[#475467]">{study.outcome}</p></div><div className="border-t-4 border-[#2F6B55] bg-[#EFF7F3] p-7"><h3 className="text-[13px] font-semibold text-[#102A43]">Related products and capabilities</h3><div className="mt-5 divide-y divide-[#C7D9D1]">{study.products.map((product) => <Link key={product.href} href={product.href} className="flex justify-between py-4 text-[12.5px] font-semibold text-[#12657B] no-underline">{product.label}<span>→</span></Link>)}</div></div></div></Container></section>
    <section className="bg-[#1F5A45] py-20 text-center text-white"><Container><Eyebrow light>Technical discussion</Eyebrow><h2 className="mt-3 font-serif text-[38px]">Bring us the process, not only the product name</h2><Link href={`/contact?subject=${subject}`} className="mt-8 inline-flex bg-white px-6 py-3.5 text-[13px] font-semibold text-[#173F31] no-underline">Request application review</Link></Container></section>
  </>
}
