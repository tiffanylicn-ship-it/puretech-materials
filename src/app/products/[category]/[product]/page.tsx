import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ProductDetailContent } from '@/app/product/[id]/page'
import { Container, CtaBanner, Eyebrow } from '@/components/ui/index'
import { Reveal } from '@/components/ui/Reveal'
import {
  coreProductSeoPages,
  coreProductSeoPath,
  findCoreProductSeoPage,
  type CoreProductSeoPage,
} from '@/lib/core-seo-pages'
import { allProductsWithG1 } from '@/lib/products'

type RouteParams = Promise<{ category: string; product: string }>

export function generateStaticParams() {
  return coreProductSeoPages.map((page) => ({ category: page.categorySlug, product: page.slug }))
}

export async function generateMetadata({ params }: { params: RouteParams }): Promise<Metadata> {
  const { category, product } = await params
  const page = findCoreProductSeoPage(category, product)
  if (!page) return { title: 'Product Page Not Found' }
  const url = `https://puretechmaterials.com${coreProductSeoPath(page)}`
  const image = `https://puretechmaterials.com${page.categorySlug === 'trace-analysis' ? '/images/puretech/trace-analysis.jpg' : page.categorySlug === 'electronic-materials' ? '/images/puretech/electronic-materials.jpg' : '/images/puretech/high-purity-solvents.jpg'}`

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      type: 'website',
      url,
      images: [{ url: image, alt: `${page.productName} chemical material` }],
    },
    twitter: { card: 'summary_large_image', title: page.metaTitle, description: page.metaDescription, images: [image] },
  }
}

export default async function CoreProductPage({ params }: { params: RouteParams }) {
  const { category, product: slug } = await params
  const page = findCoreProductSeoPage(category, slug)
  if (!page) notFound()

  if (!page.productId) return <PortfolioReviewPage page={page} />

  const product = allProductsWithG1.find((item) => item.id === page.productId)
  if (!product) notFound()

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: page.productName,
    description: page.metaDescription,
    sku: product.id,
    brand: { '@type': 'Brand', name: 'PURETECHMATERIALS' },
    category: page.categoryLabel,
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'CAS number', value: product.cas },
      { '@type': 'PropertyValue', name: 'Molecular formula', value: product.formula },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />
      <ProductDetailContent
        product={product}
        editorial={{
          categoryLabel: page.categoryLabel,
          categoryHref: `/products/${page.categorySlug}`,
          headline: page.headline,
          intro: page.intro,
          lead: page.lead,
          fitTitle: page.fitTitle,
          fitSummary: page.fitSummary,
          buyerNotes: page.buyerNotes,
          selectionQuestions: page.selectionQuestions,
        }}
      />
    </>
  )
}

function PortfolioReviewPage({ page }: { page: CoreProductSeoPage }) {
  return (
    <>
      <div className="border-b border-[#DCE3EC] bg-[#F7F9FC] py-3">
        <Container>
          <nav className="flex flex-wrap items-center gap-2 text-[12px] text-[#667085]">
            <Link href="/products" className="no-underline hover:text-[#12657B]">Products</Link>
            <span>›</span>
            <Link href={`/products/${page.categorySlug}`} className="no-underline hover:text-[#12657B]">{page.categoryLabel}</Link>
            <span>›</span>
            <span className="font-medium text-[#0A1628]">{page.productName}</span>
          </nav>
        </Container>
      </div>

      <section className="relative overflow-hidden bg-[#061d2b] py-20 text-white">
        <div className="wafer-bg pointer-events-none absolute inset-0 opacity-20" />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_360px] lg:items-start">
            <div className="max-w-[760px]">
              <Eyebrow light>{page.categoryLabel}</Eyebrow>
              <h1 className="mt-5 font-serif text-[clamp(34px,4.5vw,54px)] leading-[1.08] tracking-[-0.6px]">{page.headline}</h1>
              <p className="mt-4 font-mono text-[13px] text-white/45">{page.formula} · CAS {page.cas}</p>
              <p className="mt-6 max-w-[700px] text-[15.5px] leading-[1.78] text-white/68">{page.intro}</p>
              <div className="mt-7 max-w-[680px] border-l-2 border-[#64C0A0] pl-4">
                <p className="text-[13.5px] leading-[1.65] text-white/78">{page.lead}</p>
              </div>
            </div>
            <aside className="border border-white/12 bg-white/[0.045] p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/40">Portfolio status</p>
              <p className="mt-3 text-[20px] font-semibold text-white">Technical review by enquiry</p>
              <dl className="mt-6 border-t border-white/10 text-[12px]">
                {[
                  ['Published specification', 'Not yet released'],
                  ['Grade selection', 'Application-led'],
                  ['Pack format', 'Confirm by project'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between gap-5 border-b border-white/10 py-3">
                    <dt className="text-white/40">{label}</dt>
                    <dd className="text-right text-white/80">{value}</dd>
                  </div>
                ))}
              </dl>
              <Link href="/contact" className="mt-6 block bg-[#2F8C67] px-5 py-3 text-center text-[13px] font-semibold text-white no-underline hover:bg-[#267456]">Discuss the requirement</Link>
            </aside>
          </div>
        </Container>
      </section>

      <section className="border-b border-[#E4E7EC] bg-[#F7F9FC] py-16">
        <Container>
          <Reveal>
            <Eyebrow>Application fit</Eyebrow>
            <h2 className="mt-3 font-serif text-[30px] text-[#0A1628]">{page.fitTitle}</h2>
            <p className="mt-4 max-w-[780px] text-[14px] leading-[1.75] text-[#475467]">{page.fitSummary}</p>
          </Reveal>
          <div className="mt-9 grid grid-cols-1 gap-px bg-[#D7DEE7] md:grid-cols-3">
            {page.buyerNotes.map((note, index) => (
              <Reveal key={note.title} delay={index * 55}>
                <article className="h-full bg-white p-6">
                  <span className="font-mono text-[11px] font-semibold text-[#2F8C67]">0{index + 1}</span>
                  <h3 className="mt-5 text-[14px] font-semibold text-[#0A1628]">{note.title}</h3>
                  <p className="mt-3 text-[12.8px] leading-[1.7] text-[#475467]">{note.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[360px_1fr]">
            <Reveal>
              <div>
                <Eyebrow>Before we quote</Eyebrow>
                <h2 className="mt-3 font-serif text-[29px] leading-tight text-[#0A1628]">Four answers needed before a specification is published</h2>
                <p className="mt-4 text-[13.5px] leading-[1.75] text-[#475467]">We have intentionally left out a generic data table. Publishing unsupported limits would make the page look complete while giving a technical buyer less reliable information.</p>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 border-l border-t border-[#DCE3EC] md:grid-cols-2">
              {page.selectionQuestions.map((question, index) => (
                <Reveal key={question} delay={index * 50}>
                  <div className="flex h-full gap-4 border-b border-r border-[#DCE3EC] p-5">
                    <span className="font-mono text-[11px] font-semibold text-[#2F8C67]">0{index + 1}</span>
                    <p className="text-[13px] leading-[1.65] text-[#344054]">{question}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner label="Technical portfolio review" title={<>Need ultrapure water<br />for a defined method?</>} subtitle="Send the application, critical limits, test methods, pack and expected volume. We will confirm feasibility before offering a specification." p1="Submit Technical Requirements" h1="/contact" p2="View Trace Analysis" h2="/products/trace-analysis" />
    </>
  )
}
