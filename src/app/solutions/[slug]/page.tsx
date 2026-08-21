import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import { Container, CtaBanner, Eyebrow } from '@/components/ui/index'
import { Reveal } from '@/components/ui/Reveal'
import { solutionRoutes } from '@/lib/architecture-content'

const legacyRoutes: Record<string, string> = {
  'ipa-for-wafer-cleaning': '/solutions/semiconductor',
  'pgmea-for-euv-lithography': '/solutions/semiconductor',
  'nmp-for-battery-electrode': '/industries/ev-battery',
}

export function generateStaticParams() {
  return solutionRoutes.map((solution) => ({ slug: solution.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const solution = solutionRoutes.find((item) => item.slug === slug)
  if (!solution) return { title: 'Solution Not Found' }
  return { title: solution.metaTitle, description: solution.metaDescription, alternates: { canonical: `https://puretechmaterials.com/solutions/${solution.slug}` } }
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (legacyRoutes[slug]) redirect(legacyRoutes[slug])
  const solution = solutionRoutes.find((item) => item.slug === slug)
  if (!solution) notFound()

  return (
    <>
      <div className="border-b border-[#DCE3EC] bg-[#F7F9FC] py-3">
        <Container><nav className="flex flex-wrap items-center gap-2 text-[12px] text-[#667085]"><Link href="/solutions" className="no-underline hover:text-[#12657B]">Solutions</Link><span>›</span><span className="font-medium text-[#0A1628]">{solution.title}</span></nav></Container>
      </div>

      <section className="relative min-h-[560px] overflow-hidden bg-[#061d2b] text-white">
        <Image src={solution.image} alt={`${solution.title} production application`} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061d2b] via-[#061d2b]/91 to-[#061d2b]/18" />
        <Container className="relative z-10 flex min-h-[560px] items-center py-20">
          <div className="max-w-[760px]">
            <Eyebrow light>{solution.title}</Eyebrow>
            <h1 className="mt-5 font-serif text-[clamp(34px,4.5vw,55px)] leading-[1.08] tracking-[-0.7px]">{solution.headline}</h1>
            <p className="mt-6 max-w-[690px] text-[16px] leading-[1.75] text-white/68">{solution.overview}</p>
            <Link href="/contact" className="mt-9 inline-flex bg-white px-6 py-3.5 text-[13px] font-semibold text-[#08283b] no-underline hover:bg-[#DDEDE4]">Discuss this application</Link>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal><Eyebrow>Applications</Eyebrow><h2 className="mt-3 font-serif text-[31px] text-[#0A1628]">Where the conversation usually begins</h2></Reveal>
          <div className="mt-10 grid grid-cols-1 gap-px bg-[#DCE3EC] md:grid-cols-2 lg:grid-cols-4">
            {solution.applications.map((application, index) => (
              <Reveal key={application.title} delay={index * 55}>
                <article className="h-full bg-white p-7"><span className="font-mono text-[11px] text-[#2F8C67]">0{index + 1}</span><h3 className="mt-7 text-[15px] font-semibold text-[#0A1628]">{application.title}</h3><p className="mt-3 text-[13px] leading-[1.65] text-[#475467]">{application.detail}</p></article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {solution.products.length > 0 && (
        <section className="bg-[#F1F5F3] py-20">
          <Container>
            <Reveal><Eyebrow>Recommended products</Eyebrow><h2 className="mt-3 font-serif text-[31px] text-[#0A1628]">A focused starting shortlist</h2><p className="mt-4 max-w-[760px] text-[14px] leading-[1.7] text-[#475467]">These products are commonly reviewed for the applications above. Final suitability depends on the controlled specification and customer qualification.</p></Reveal>
            <div className="mt-10 overflow-hidden border border-[#D5E0E3] bg-white">
              {solution.products.map((product) => (
                <div key={product.id} className="grid grid-cols-1 gap-3 border-b border-[#E4E7EC] p-5 last:border-b-0 md:grid-cols-[1fr_2fr_140px] md:items-center">
                  <h3 className="text-[14px] font-semibold text-[#0A1628]">{product.label}</h3>
                  <p className="text-[13px] leading-[1.6] text-[#475467]">{product.use}</p>
                  <Link href={`/product/${product.id}`} className="text-[12px] font-semibold text-[#12657B] no-underline hover:underline">View product →</Link>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className={solution.products.length > 0 ? 'py-20' : 'bg-[#F1F5F3] py-20'}>
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_390px]">
            <div>
              <Reveal><Eyebrow>Technical review</Eyebrow><h2 className="mt-3 font-serif text-[31px] text-[#0A1628]">What we need before recommending a route</h2></Reveal>
              <div className="mt-9 border-t border-[#DCE3EC]">
                {solution.reviewPoints.map((point, index) => <div key={point} className="grid grid-cols-[40px_1fr] gap-4 border-b border-[#DCE3EC] py-4"><span className="font-mono text-[11px] text-[#2F8C67]">0{index + 1}</span><p className="text-[13px] text-[#344054]">{point}</p></div>)}
              </div>
            </div>
            <Reveal delay={80}>
              <aside className="border-t-4 border-[#12657B] bg-[#07182D] p-7 text-white">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8FC7FF]">Manufacturing route</p>
                <h2 className="mt-3 font-serif text-[24px]">Four stages buyers can review</h2>
                <ol className="mt-6 space-y-4">
                  {['Purification strategy', 'Filtration and transfer controls', 'Specification testing and release', 'Qualified filling and packaging route'].map((item, index) => <li key={item} className="flex gap-3 text-[13px] text-white/65"><span className="font-mono text-[#62BD88]">{index + 1}</span>{item}</li>)}
                </ol>
                <Link href="/manufacturing" className="mt-7 inline-flex text-[12px] font-semibold text-[#8FC7FF] no-underline hover:underline">Review manufacturing →</Link>
              </aside>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBanner label={`${solution.title} solution`} title={<>Bring us the requirement.<br />We will help frame the shortlist.</>} subtitle="Share the use, current product or specification, critical limits, documents, pack and timing." p1="Request Technical Review" h1="/contact" p2="Browse Products" h2="/products" />
    </>
  )
}
