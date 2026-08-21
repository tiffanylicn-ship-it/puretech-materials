import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container, CtaBanner, Eyebrow } from '@/components/ui/index'
import { Reveal } from '@/components/ui/Reveal'
import { applicationPages, applicationPath } from '@/lib/application-pages'

export const metadata: Metadata = {
  title: 'Chemical Solutions for Advanced Industries',
  description: 'High-purity solvents and specialty chemical materials for semiconductor, pharmaceutical, battery, analytical and industrial manufacturing applications.',
  alternates: { canonical: 'https://puretechmaterials.com/applications' },
}

export default function ApplicationsPage() {
  return (
    <>
      <section className="relative min-h-[650px] overflow-hidden bg-[#061d2b] text-white">
        <Image src="/images/puretech/applications.jpg" alt="Advanced manufacturing, analytical and high-purity chemical application environment" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061d2b] via-[#061d2b]/91 to-[#061d2b]/34" />
        <Container className="relative z-10 flex min-h-[650px] items-center py-20">
          <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-[1fr_360px] lg:items-end">
            <div className="max-w-[760px]">
              <Eyebrow light>Applications</Eyebrow>
              <h1 className="mt-5 font-serif text-[clamp(39px,5.3vw,67px)] leading-[1.02] tracking-[-0.9px]">Chemical Solutions<br />for Advanced Industries</h1>
              <p className="mt-7 max-w-[670px] text-[16px] leading-[1.78] text-white/72">High-purity solvents and specialty chemical materials supporting semiconductor, pharmaceutical, analytical and industrial manufacturing applications.</p>
              <Link href="#application-routes" className="mt-9 inline-flex bg-white px-6 py-3.5 text-[13px] font-semibold text-[#08283b] no-underline hover:bg-[#DDEDE4]">Explore application routes</Link>
            </div>
            <aside className="border border-white/12 bg-[#061d2b]/75 p-6 backdrop-blur-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#9ED8C2]">Find your route</p>
              <div className="mt-5 border-t border-white/10">
                {applicationPages.map((application, index) => (
                  <Link key={application.slug} href={applicationPath(application)} className="group flex items-center gap-3 border-b border-white/10 py-3 text-white/70 no-underline hover:text-white">
                    <span className="font-mono text-[10px] text-white/35">0{index + 1}</span>
                    <span className="text-[12.5px] font-medium">{application.navLabel}</span>
                    <span className="ml-auto text-[#8FC7FF] opacity-0 transition-opacity group-hover:opacity-100">→</span>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="border-b border-[#DCE3EC] bg-white py-8">
        <Container>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[250px_1fr] md:items-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-[#12657B]">Search by application</p>
            <div className="flex flex-wrap gap-2">
              {applicationPages.map((application) => (
                <Link key={application.slug} href={applicationPath(application)} className="border border-[#D5E0E3] bg-[#F7F9FC] px-3 py-2 text-[11.5px] font-medium text-[#344054] no-underline hover:border-[#7FA99A] hover:text-[#12657B]">{application.navLabel}</Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="application-routes" className="scroll-mt-24 py-20">
        <Container>
          <Reveal>
            <Eyebrow>Application routes</Eyebrow>
            <div className="mt-3 grid grid-cols-1 gap-5 lg:grid-cols-[420px_1fr] lg:items-end">
              <h2 className="font-serif text-[33px] leading-tight text-[#0A1628]">Begin with the process environment, then narrow the chemistry</h2>
              <p className="max-w-[740px] text-[14px] leading-[1.75] text-[#475467]">These pages are designed for buyers who know the job to be done but may not yet know the exact product or grade. Each route connects the application, qualification questions and a focused product shortlist.</p>
            </div>
          </Reveal>

          <div className="mt-14 space-y-12">
            {applicationPages.map((application, index) => (
              <Reveal key={application.slug} delay={(index % 4) * 45}>
                <article className="grid grid-cols-1 overflow-hidden border border-[#DCE3EC] bg-white lg:grid-cols-2">
                  <div className={`relative min-h-[360px] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <Image src={application.image} alt={application.imageAlt} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061d2b]/55 via-transparent to-transparent" />
                    <span className="absolute bottom-5 left-5 border border-white/25 bg-[#061d2b]/70 px-3 py-1.5 font-mono text-[10px] font-semibold text-white/80 backdrop-blur-sm">APPLICATION 0{index + 1}</span>
                  </div>
                  <div className={`flex flex-col p-7 lg:p-10 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-[#2F8C67]">{application.subline}</p>
                    <h2 className="mt-4 font-serif text-[29px] leading-tight text-[#0A1628]">{application.title}</h2>
                    <p className="mt-5 line-clamp-4 text-[13.5px] leading-[1.75] text-[#475467]">{application.overview}</p>

                    <div className="mt-7">
                      <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#667085]">Related products</p>
                      <div className="flex flex-wrap gap-2">
                        {application.products.slice(0, 5).map((product) => (
                          <Link key={product.name} href={product.href} className="border border-[#D5E0E3] bg-[#F7F9FC] px-3 py-1.5 text-[11px] font-medium text-[#12657B] no-underline hover:border-[#12657B]">{product.name}</Link>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 border-t border-[#EAECF0] pt-5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#667085]">Route</p>
                      <p className="mt-2 text-[12px] leading-[1.7] text-[#475467]">{application.process.map((step) => step.title).join('  →  ')}</p>
                    </div>

                    <Link href={applicationPath(application)} className="mt-8 inline-flex w-fit bg-[#12657B] px-5 py-3 text-[12.5px] font-semibold text-white no-underline hover:bg-[#2F8C67]">Explore {application.navLabel} →</Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#F1F5F3] py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_430px] lg:items-start">
            <Reveal>
              <div>
                <Eyebrow>How to use these pages</Eyebrow>
                <h2 className="mt-3 font-serif text-[31px] text-[#0A1628]">A better enquiry starts with the work, not the catalogue</h2>
                <p className="mt-5 max-w-[760px] text-[14px] leading-[1.78] text-[#475467]">Describe the process in plain language: the surface, formulation, instrument or manufacturing step; the current material; what goes wrong; and what your approval process needs to see. That is usually enough to replace a long product list with a useful first shortlist.</p>
                <div className="mt-9 grid grid-cols-1 gap-px bg-[#CBD8D5] sm:grid-cols-2">
                  {['Application and contact stage', 'Current product or specification', 'Critical impurity or performance limits', 'Pack, forecast and qualification timing'].map((item, index) => (
                    <div key={item} className="flex gap-4 bg-white p-5"><span className="font-mono text-[11px] font-semibold text-[#2F8C67]">0{index + 1}</span><p className="text-[13px] font-medium text-[#344054]">{item}</p></div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <aside className="border-t-4 border-[#12657B] bg-[#07182D] p-7 text-white">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8FC7FF]">Not sure which route fits?</p>
                <h2 className="mt-3 font-serif text-[25px]">Send the process note you already have</h2>
                <p className="mt-4 text-[13px] leading-[1.72] text-white/60">A redacted specification, method, flow description or current product name is often enough for an initial technical conversation.</p>
                <Link href="/contact" className="mt-7 inline-flex bg-[#2F8C67] px-5 py-3 text-[12.5px] font-semibold text-white no-underline hover:bg-[#267456]">Ask for application support</Link>
              </aside>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBanner label="Application support" title={<>Start with the process.<br />Then qualify the product.</>} subtitle="Share the use, current specification, critical limits, pack format and target qualification date." p1="Discuss an Application" h1="/contact" p2="Browse Products" h2="/products" />
    </>
  )
}
