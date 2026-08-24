import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Container, Eyebrow, GradeBadge, GradeChip } from '@/components/ui/index'
import { Reveal } from '@/components/ui/Reveal'
import { GradeCompareChart } from '@/components/ui/GradeChart'
import { coreProductSeoPages, coreProductSeoPath } from '@/lib/core-seo-pages'
import { productPagesV3 } from '@/lib/product-pages-v3'
import {
  ALL_CATEGORY_META,
  allProductsWithG1,
  type GradeKey,
  type Product,
} from '@/lib/products'
import {
  primaryApplication,
  productIntroduction,
  selectionNotes,
} from '@/lib/application-finder'

export function generateStaticParams() {
  return allProductsWithG1.map((product) => ({ id: product.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const product = allProductsWithG1.find((item) => item.id === id)
  if (!product) return { title: 'Product Not Found' }
  const v3Page = productPagesV3.find((page) => page.productId === product.id)
  const url = `https://puretechmaterials.com${v3Page ? `/products/${v3Page.slug}` : `/product/${product.id}`}`
  const visual = categoryVisuals[product.category] ?? categoryVisuals.general
  const image = `https://puretechmaterials.com${product.id === 'eipa' ? '/images/puretech/electronic-grade-ipa-hero-v2.png' : visual.hero}`
  const title = v3Page?.seoTitle ?? `${product.nameEn} | CAS ${product.cas} | PureTech Materials`
  const description = v3Page?.metaDescription ?? productIntroduction(product).slice(0, 155)

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, type: 'website', url, images: [{ url: image, alt: `${product.nameEn} high-purity chemical material` }] },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  }
}

export interface ProductDetailEditorial {
  categoryLabel: string
  categoryHref: string
  headline: string
  intro: string
  lead: string
  fitTitle: string
  fitSummary: string
  buyerNotes: { title: string; detail: string }[]
  selectionQuestions: string[]
}

const categoryVisuals: Record<string, { hero: string; application: string }> = {
  electronic: { hero: '/images/puretech/electronic-materials.jpg', application: '/images/puretech/applications.jpg' },
  photoresist: { hero: '/images/puretech/electronic-materials.jpg', application: '/images/puretech/applications.jpg' },
  battery: { hero: '/images/puretech/applications.jpg', application: '/images/puretech/manufacturing.jpg' },
  lab: { hero: '/images/puretech/quality-control.jpg', application: '/images/puretech/trace-analysis.jpg' },
  general: { hero: '/images/puretech/high-purity-solvents.jpg', application: '/images/puretech/manufacturing.jpg' },
  acid: { hero: '/images/puretech/trace-analysis.jpg', application: '/images/puretech/quality-control.jpg' },
  peroxide: { hero: '/images/puretech/trace-analysis.jpg', application: '/images/puretech/quality-control.jpg' },
  base: { hero: '/images/puretech/trace-analysis.jpg', application: '/images/puretech/electronic-materials.jpg' },
}

function productPath(productId: string) {
  const v3Page = productPagesV3.find((page) => page.productId === productId)
  if (v3Page) return `/products/${v3Page.slug}`
  const seoPage = coreProductSeoPages.find((page) => page.productId === productId)
  return seoPage ? coreProductSeoPath(seoPage) : `/product/${productId}`
}

function technicalReading(product: Product) {
  if (product.id === 'eipa') return [
    ['How IPA is used in semiconductor cleaning', '/blog/electronic-grade-ipa-semiconductor-wafer-cleaning'],
    ['Electronic grade IPA vs industrial IPA', '/guides#ipa-buying-guide'],
    ['Marangoni drying with IPA', '/blog/marangoni-drying-ipa-watermark-free-wafer'],
  ]
  if (product.id === 'pgmea' || product.id === 'pgmea-g1') return [
    ['PGMEA in photoresist and lithography', '/blog/pgmea-photoresist-solvent-euv-arf-lithography'],
    ['Semiconductor application guide', '/applications/semiconductor'],
    ['How to choose a solvent grade', '/guides#solvent-grade-selection'],
  ]
  if (product.id === 'nmp' || product.id === 'nmp-g1') return [
    ['NMP in battery electrode slurry', '/blog/nmp-battery-electrode-slurry-pvdf-binder'],
    ['Battery materials application guide', '/applications/battery-materials'],
    ['Bulk chemical purchasing guide', '/guides#bulk-purchasing-guide'],
  ]
  return [
    ['How to choose the right solvent grade', '/guides#solvent-grade-selection'],
    ['Application-led product selection', '/applications'],
    ['Specification and document review', '/compliance'],
  ]
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = allProductsWithG1.find((item) => item.id === id)
  if (!product) notFound()

  return <ProductDetailContent product={product} />
}

export function ProductDetailContent({ product, editorial }: { product: Product; editorial?: ProductDetailEditorial }) {

  const category = (ALL_CATEGORY_META as Record<string, { label: string; desc: string }>)[product.category] ?? {
    label: product.subcategory,
    desc: '',
  }
  const categoryLabel = editorial?.categoryLabel ?? category.label
  const categoryHref = editorial?.categoryHref ?? `/products?cat=${product.category}`
  const related = allProductsWithG1
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 4)
  const electronicGrades = product.grades.filter((grade) => grade.startsWith('G'))
  const nonElectronicGrades = product.grades.filter((grade) => !grade.startsWith('G'))
  const intro = editorial?.intro ?? productIntroduction(product)
  const questions = editorial?.selectionQuestions ?? selectionNotes(product)
  const leadUse = editorial?.lead ?? primaryApplication(product).replace(/\s*[—–].*$/, '')
  const visuals = categoryVisuals[product.category] ?? categoryVisuals.general
  const heroImage = product.id === 'eipa' ? '/images/puretech/electronic-grade-ipa-hero-v2.png' : visuals.hero
  const productName = product.nameEn.split('(')[0].trim()
  const reading = technicalReading(product)

  const applicationGroups = [
    { title: 'Semiconductor & electronics', items: product.semiApps, colour: '#0066CC' },
    { title: 'Battery & energy storage', items: product.batteryApps, colour: '#B54708' },
    { title: 'Laboratory & analytical', items: product.labApps, colour: '#6941C6' },
    { title: 'Industrial & other', items: product.industryApps, colour: '#047857' },
  ].filter((group) => group.items.length > 0)
  const packagingGroups = [
    { title: 'Qualification & laboratory packs', detail: 'For evaluation, method work and lower-volume routine use.', formats: product.packaging.filter((pack) => /mL|1 L|2\.5 L|4 L|5 L/i.test(pack)) },
    { title: 'Drums & production packs', detail: 'For regular production consumption and controlled dispensing.', formats: product.packaging.filter((pack) => /20 L|25 L|200 L/i.test(pack)) },
    { title: 'IBC & bulk routes', detail: 'For higher-volume programmes after site, grade and logistics review.', formats: product.packaging.filter((pack) => /IBC|Tanker|Bulk/i.test(pack)) },
  ]

  const hasG1 = product.specs.some((row) => row.g1)
  const hasG2 = product.specs.some((row) => row.g2)
  const hasG3 = product.specs.some((row) => row.g3)
  const hasG4 = product.specs.some((row) => row.g4)
  const hasG5 = product.specs.some((row) => row.g5)
  const hasPharma = product.specs.some((row) => row.pharma)
  const hasHplcPrep = product.specs.some((row) => row.hplcPrep)
  const hasHplcGradient = product.specs.some((row) => row.hplcGrad)
  const hasHplc = product.specs.some((row) => row.hplc)
  const hasLcms = product.specs.some((row) => row.lcms)
  const hasAnhydrous = product.specs.some((row) => row.anhy)
  const hasAr = product.specs.some((row) => row.ar)
  const hasGr = product.specs.some((row) => row.gr)

  return (
    <>
      <div className="border-b border-[#DCE3EC] bg-[#F7F9FC] py-3">
        <Container>
          <nav className="flex flex-wrap items-center gap-2 text-[12px] text-[#667085]">
            <Link href="/products" className="no-underline hover:text-[#0066CC]">Products</Link>
            <span className="text-[#B8C2CE]">›</span>
            <Link href={categoryHref} className="no-underline hover:text-[#0066CC]">{categoryLabel}</Link>
            <span className="text-[#B8C2CE]">›</span>
            <span className="font-medium text-[#0A1628]">{editorial?.headline ?? product.nameEn}</span>
          </nav>
        </Container>
      </div>

      <section className="overflow-hidden bg-[#07182D] text-white">
        <Container>
          <div className="grid min-h-[640px] grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-center py-16 pr-0 lg:pr-12">
              <div className="mb-5 flex flex-wrap items-center gap-2">
                {(electronicGrades.length > 0 ? electronicGrades : nonElectronicGrades).slice(0, 5).map((grade) => (
                  <GradeBadge key={grade} g={grade as GradeKey} />
                ))}
                <span className="border border-white/15 px-2 py-1 font-mono text-[10px] text-white/45">{categoryLabel}</span>
              </div>

              <h1 className="mb-2 font-serif text-[clamp(30px,4vw,50px)] leading-[1.1] tracking-[-0.5px] text-white">
                {editorial?.headline ?? product.nameEn}
              </h1>
              <p className="mb-6 font-mono text-[13px] text-white/45">{product.formula} · CAS {product.cas}</p>
              <p className="mb-7 max-w-[700px] text-[15.5px] leading-[1.75] text-white/65">{intro}</p>

              <div className="mb-8 max-w-[680px] border-l-2 border-[#4BAAF5] pl-4">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#8FC7FF]">A common starting point</p>
                <p className="text-[13.5px] leading-[1.6] text-white/75">{leadUse}</p>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-6">
                {[
                  { label: 'Molecular weight', value: `${product.mw} g/mol` },
                  { label: 'Boiling point', value: product.bp },
                  { label: 'Density', value: product.density },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="mb-1 text-[9.5px] font-semibold uppercase tracking-[0.1em] text-white/35">{item.label}</p>
                    <p className="font-mono text-[13px] font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-[11.5px] text-white/68">
                {['High-purity options', 'Batch documentation', 'Flexible packaging review'].map((item) => <span key={item} className="flex items-center gap-2"><span className="text-[#69C69A]">✓</span>{item}</span>)}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={`/contact?subject=${encodeURIComponent(`Quote request: ${productName}`)}`} className="bg-[#2563EB] px-6 py-3.5 text-[13px] font-semibold text-white no-underline hover:bg-[#1D4ED8]">Request quote</Link>
                <Link href={`/contact?subject=${encodeURIComponent(`Document request: ${productName} TDS`)}`} className="border border-white/25 px-6 py-3.5 text-[13px] font-semibold text-white no-underline hover:bg-white/10">Request TDS</Link>
              </div>
            </div>

            <div className="relative min-h-[420px] lg:min-h-[640px]">
              <Image src={heroImage} alt={`${productName} manufacturing, filling and industrial supply environment`} fill priority sizes="(max-width:1024px) 100vw, 55vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#07182D] via-transparent to-transparent lg:-left-px" />
              <div className="absolute bottom-6 left-6 right-6 border border-white/15 bg-[#07182D]/88 p-5 backdrop-blur-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/38">Product identity</p>
                <dl className="mt-3 grid grid-cols-2 gap-x-5 gap-y-3 text-[11.5px]"><div><dt className="text-white/38">CAS number</dt><dd className="mt-1 font-mono text-white/85">{product.cas}</dd></div><div><dt className="text-white/38">Formula</dt><dd className="mt-1 font-mono text-white/85">{product.formula}</dd></div><div><dt className="text-white/38">Boiling point</dt><dd className="mt-1 font-mono text-white/85">{product.bp}</dd></div><div><dt className="text-white/38">Density</dt><dd className="mt-1 font-mono text-white/85">{product.density}</dd></div></dl>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.88fr] lg:items-center">
            <Reveal><div><Eyebrow>Product overview</Eyebrow><h2 className="mt-3 font-serif text-[34px] leading-tight text-[#102A43]">A product route built around the application</h2><p className="mt-5 max-w-[700px] text-[14px] leading-[1.78] text-[#475467]">{productName} is considered for processes that need a consistent material, controlled critical impurities and a supply format that can move from qualification to routine use. The grade should be selected against the actual process—not a generic purity claim.</p><div className="mt-8 grid grid-cols-1 gap-px bg-[#DCE3EC] sm:grid-cols-3">{[['High-purity options', 'Compare listed grades and current product-specific limits.'], ['Controlled attributes', 'Focus testing on the impurities and performance risks that matter.'], ['Supply planning', 'Align sample, production pack, forecast and document route early.']].map(([title, detail], index) => <article key={title} className="bg-[#F7F9FC] p-5"><span className="font-mono text-[10px] font-semibold text-[#2F6B55]">0{index + 1}</span><h3 className="mt-5 text-[13px] font-semibold text-[#102A43]">{title}</h3><p className="mt-2 text-[11.8px] leading-[1.65] text-[#667085]">{detail}</p></article>)}</div></div></Reveal>
            <Reveal delay={70}><div className="relative min-h-[470px] overflow-hidden"><Image src="/images/puretech/manufacturing.jpg" alt={`Purification and controlled manufacturing route for ${productName}`} fill sizes="(max-width:1024px) 100vw, 45vw" className="object-cover" /></div></Reveal>
          </div>
        </Container>
      </section>

      {editorial && (
        <section className="border-b border-[#E4E7EC] bg-[#F7F9FC] py-14">
          <Container>
            <Reveal>
              <Eyebrow>Application fit</Eyebrow>
              <div className="mt-3 grid grid-cols-1 gap-6 lg:grid-cols-[360px_1fr] lg:items-end">
                <h2 className="font-serif text-[30px] leading-tight tracking-[-0.3px] text-[#0A1628]">{editorial.fitTitle}</h2>
                <p className="max-w-[720px] text-[13.5px] leading-[1.75] text-[#475467]">{editorial.fitSummary}</p>
              </div>
            </Reveal>
            <div className="mt-9 grid grid-cols-1 gap-px bg-[#D7DEE7] md:grid-cols-3">
              {editorial.buyerNotes.map((note, index) => (
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
      )}

      <section className="py-14">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[360px_1fr]">
            <Reveal>
              <div>
                <Eyebrow>Before you specify</Eyebrow>
                <h2 className="mb-4 font-serif text-[28px] leading-tight tracking-[-0.3px] text-[#0A1628]">A better enquiry starts with four answers</h2>
                <p className="text-[13.5px] leading-[1.7] text-[#475467]">
                  A higher grade is not automatically the better choice. The useful option fits the process, analytical method, packaging route and qualification plan without adding controls the application does not need.
                </p>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 border-l border-t border-[#DCE3EC] md:grid-cols-2">
              {questions.map((question, index) => (
                <Reveal key={question} delay={index * 55}>
                  <div className="flex h-full gap-4 border-b border-r border-[#DCE3EC] p-5">
                    <span className="shrink-0 font-mono text-[11px] font-semibold text-[#0066CC]">0{index + 1}</span>
                    <p className="text-[13px] leading-[1.6] text-[#344054]">{question}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {product.specs.length > 0 && (
        <section className="border-y border-[#E4E7EC] bg-[#F7F9FC] py-16">
          <Container>
            <Reveal className="mb-8">
              <Eyebrow>Specification data</Eyebrow>
              <h2 className="font-serif text-[29px] tracking-[-0.3px] text-[#0A1628]">Compare the listed grade columns</h2>
              <p className="mt-3 max-w-[760px] text-[13.5px] leading-[1.7] text-[#475467]">
                This table is an indicative product overview for initial screening. Confirm the current controlled specification, test methods, reporting limits and available lot documentation before qualification or purchase.
              </p>
            </Reveal>

            <Reveal delay={70}>
              <div className="overflow-hidden border border-[#DCE3EC] bg-white">
                <div className="overflow-x-auto">
                  <table className="stbl w-full border-collapse">
                    <thead>
                      <tr>
                        <th style={{ width: '26%', minWidth: '155px' }}>Parameter</th>
                        <th style={{ minWidth: '120px' }}>Test method</th>
                        <th style={{ minWidth: '65px' }}>Unit</th>
                        {hasG1 && <th><span style={{ color: '#6B8FBF' }}>G1</span></th>}
                        {hasG2 && <th><span style={{ color: '#93CAFD' }}>G2</span></th>}
                        {hasG3 && <th><span style={{ color: '#4BAAF5' }}>G3</span></th>}
                        {hasG4 && <th><span style={{ color: '#22D3FF' }}>G4</span></th>}
                        {hasG5 && <th><span style={{ color: '#00C2FF' }}>G5</span></th>}
                        {hasPharma && <th><span style={{ color: '#6EE7B7' }}>Pharma</span></th>}
                        {hasHplcPrep && <th><span style={{ color: '#C4B5FD' }}>HPLC prep</span></th>}
                        {hasHplcGradient && <th><span style={{ color: '#A78BFA' }}>HPLC gradient</span></th>}
                        {hasHplc && <th><span style={{ color: '#8B5CF6' }}>HPLC</span></th>}
                        {hasLcms && <th><span style={{ color: '#7C3AED' }}>LC-MS</span></th>}
                        {hasAnhydrous && <th><span style={{ color: '#93C5FD' }}>Anhydrous</span></th>}
                        {hasAr && <th><span style={{ color: '#7DD3FC' }}>AR</span></th>}
                        {hasGr && <th><span style={{ color: '#38BDF8' }}>GR</span></th>}
                      </tr>
                    </thead>
                    <tbody>
                      {product.specs.map((row) => (
                        <tr key={`${row.param}-${row.method}`}>
                          <td className="font-medium text-[#0A1628]">{row.param}</td>
                          <td><span className="border border-[#DCE3EC] bg-[#F7F9FC] px-1.5 py-0.5 font-mono text-[11px] text-[#344054]">{row.method}</span></td>
                          <td className="font-mono text-[11px] text-[#667085]">{row.unit}</td>
                          {hasG1 && <td className="font-mono text-[12px] text-[#475467]">{row.g1 || '—'}</td>}
                          {hasG2 && <td className="font-mono text-[12px] text-[#344054]">{row.g2 || '—'}</td>}
                          {hasG3 && <td className="font-mono text-[12px] text-[#344054]">{row.g3 || '—'}</td>}
                          {hasG4 && <td className="font-mono text-[12px] font-semibold text-[#0055CC]">{row.g4 || '—'}</td>}
                          {hasG5 && <td className="font-mono text-[12px] font-semibold text-[#0055CC]">{row.g5 || '—'}</td>}
                          {hasPharma && <td className="font-mono text-[12px] text-[#047857]">{row.pharma || '—'}</td>}
                          {hasHplcPrep && <td className="font-mono text-[12px] text-[#6941C6]">{row.hplcPrep || '—'}</td>}
                          {hasHplcGradient && <td className="font-mono text-[12px] text-[#6941C6]">{row.hplcGrad || '—'}</td>}
                          {hasHplc && <td className="font-mono text-[12px] text-[#5925DC]">{row.hplc || '—'}</td>}
                          {hasLcms && <td className="font-mono text-[12px] text-[#5925DC]">{row.lcms || '—'}</td>}
                          {hasAnhydrous && <td className="font-mono text-[12px] text-[#1D4ED8]">{row.anhy || '—'}</td>}
                          {hasAr && <td className="font-mono text-[12px] text-[#026AA2]">{row.ar || '—'}</td>}
                          {hasGr && <td className="font-mono text-[12px] text-[#026AA2]">{row.gr || '—'}</td>}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="mt-3 text-[11px] leading-[1.6] text-[#667085]">
                Website values do not replace a signed sales specification. The agreed specification and lot-specific Certificate of Analysis govern supplied material.
              </p>
            </Reveal>
          </Container>
        </section>
      )}

      {electronicGrades.length >= 2 && (
        <section className="py-14">
          <Container>
            <Reveal className="mb-8">
              <Eyebrow>Electronic grade context</Eyebrow>
              <h2 className="font-serif text-[27px] tracking-[-0.3px] text-[#0A1628]">Use the grade scale as a first comparison</h2>
              <p className="mt-3 max-w-[720px] text-[13.5px] leading-[1.7] text-[#475467]">
                SEMI C1 describes liquid-chemical grades and analytical procedures. A grade name helps organise a discussion; your process specification still decides which limits and methods are acceptable.
              </p>
            </Reveal>
            <Reveal delay={60}>
              <GradeCompareChart showG1={electronicGrades.includes('G1')} />
            </Reveal>
          </Container>
        </section>
      )}

      <section className="bg-[#F1F5F9] py-16">
        <Container>
          <div className="mb-10 grid grid-cols-1 gap-9 lg:grid-cols-[1fr_420px] lg:items-end">
            <Reveal><div><Eyebrow>Where this product is used</Eyebrow><h2 className="font-serif text-[30px] tracking-[-0.3px] text-[#0A1628]">Application routes for {productName}</h2><p className="mt-3 max-w-[720px] text-[13.5px] leading-[1.7] text-[#475467]">These examples help with discovery. They are not claims of universal suitability; material compatibility, process performance and the controlled specification still need review.</p></div></Reveal>
            <Reveal delay={50}><div className="relative min-h-[220px] overflow-hidden"><Image src={visuals.application} alt={`${productName} industrial and analytical application environment`} fill sizes="(max-width:1024px) 100vw, 420px" className="object-cover" /></div></Reveal>
          </div>

          <div className="grid grid-cols-1 border-l border-t border-[#D7DEE7] md:grid-cols-2">
            {applicationGroups.map((group, index) => (
              <Reveal key={group.title} delay={index * 65}>
                <div className="h-full border-b border-r border-[#D7DEE7] bg-white p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-[3px] w-8" style={{ background: group.colour }} />
                    <h3 className="text-[14px] font-semibold text-[#0A1628]">{group.title}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[13px] leading-[1.5] text-[#475467]">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0" style={{ background: group.colour }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#07182D] py-20 text-white">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
            <Reveal><div className="relative min-h-[500px] overflow-hidden"><Image src="/images/puretech/manufacturing.jpg" alt={`Purification, filtration, testing and clean filling for ${productName}`} fill sizes="(max-width:1024px) 100vw, 45vw" className="object-cover" /></div></Reveal>
            <Reveal delay={60}><div><Eyebrow light>Manufacturing advantage</Eyebrow><h2 className="mt-3 font-serif text-[34px]">A controlled route from purification to final filling</h2><p className="mt-5 max-w-[720px] text-[14px] leading-[1.78] text-white/60">The supply route for {productName} connects incoming-material review, product-specific treatment, controlled transfer, testing, filling and lot documentation. Exact equipment and controls depend on the qualified product and grade.</p><div className="mt-9 grid grid-cols-2 gap-px bg-white/10 lg:grid-cols-4">{[['Purification', 'Product-specific separation or treatment route.'], ['Filtration', 'Compatible filtration and controlled transfer.'], ['Testing', 'Release against the agreed specification.'], ['Clean filling', 'Pack, closure and lot identification review.']].map(([title, detail], index) => <article key={title} className="bg-[#07182D] p-5"><span className="font-mono text-[10px] text-[#69C69A]">0{index + 1}</span><h3 className="mt-6 text-[13px] font-semibold">{title}</h3><p className="mt-2 text-[11.5px] leading-[1.65] text-white/45">{detail}</p></article>)}</div><Link href="/manufacturing" className="mt-8 inline-flex border border-white/20 px-5 py-3 text-[12px] font-semibold text-white no-underline hover:bg-white/10">Explore manufacturing →</Link></div></Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-[#EFF7F3] py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.92fr] lg:items-center">
            <Reveal><div><Eyebrow>Quality assurance & documentation</Eyebrow><h2 className="mt-3 font-serif text-[34px] leading-tight text-[#102A43]">Evidence your quality team can review</h2><p className="mt-5 max-w-[720px] text-[14px] leading-[1.78] text-[#475467]">Documents are matched to the supplied product, grade, lot and destination. The links below request the current controlled version; they are not static files with uncertain revision status.</p><div className="mt-8 grid grid-cols-1 gap-px bg-[#C7D9D1] sm:grid-cols-2">{[['Certificate of Analysis', 'Lot-specific result or conformance format.'], ['Safety Data Sheet', 'Product- and market-specific hazard communication.'], ['Batch traceability', 'Connection between production, testing, pack and lot.'], ['Specification sheet', 'Agreed limits, units and referenced methods.']].map(([title, detail]) => <article key={title} className="bg-white p-5"><h3 className="text-[13px] font-semibold text-[#102A43]">{title}</h3><p className="mt-2 text-[11.8px] leading-[1.65] text-[#667085]">{detail}</p><Link href={`/contact?subject=${encodeURIComponent(`Document request: ${productName} ${title}`)}`} className="mt-4 inline-flex text-[11.5px] font-semibold text-[#2F6B55] no-underline hover:underline">Request current file →</Link></article>)}</div><div className="mt-7 flex flex-wrap gap-4"><Link href="/quality" className="text-[12px] font-semibold text-[#12657B] no-underline hover:underline">Quality approach →</Link><Link href="/downloads" className="text-[12px] font-semibold text-[#12657B] no-underline hover:underline">Document centre →</Link></div></div></Reveal>
            <Reveal delay={60}><div className="relative min-h-[520px] overflow-hidden"><Image src="/images/puretech/quality-control.jpg" alt={`Quality testing and controlled documentation for ${productName}`} fill sizes="(max-width:1024px) 100vw, 45vw" className="object-cover" /></div></Reveal>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal><Eyebrow>Packaging options</Eyebrow><div className="mt-3 grid grid-cols-1 gap-7 lg:grid-cols-[400px_1fr]"><h2 className="font-serif text-[33px] leading-tight text-[#102A43]">Choose the pack with the handling route in mind</h2><p className="max-w-[760px] text-[14px] leading-[1.78] text-[#475467]">Availability varies by grade and destination. Confirm container material, closure, headspace, connection, minimum order, dangerous-goods route and qualification-lot needs.</p></div></Reveal>
          <div className="mt-11 grid grid-cols-1 gap-px bg-[#DCE3EC] md:grid-cols-3">{packagingGroups.map((group, index) => <Reveal key={group.title} delay={index * 50}><article className="h-full bg-white p-7"><span className="font-mono text-[11px] font-semibold text-[#2F6B55]">0{index + 1}</span><h3 className="mt-8 text-[15px] font-semibold text-[#102A43]">{group.title}</h3><p className="mt-3 text-[12.5px] leading-[1.68] text-[#475467]">{group.detail}</p><div className="mt-6 flex flex-wrap gap-2">{(group.formats.length ? group.formats : ['Confirm by grade']).map((pack) => <span key={pack} className="border border-[#BDD4CA] bg-[#F1F8F5] px-3 py-2 font-mono text-[10.5px] font-semibold text-[#2F6B55]">{pack}</span>)}</div></article></Reveal>)}</div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="border-t border-[#E4E7EC] bg-[#F7F9FC] py-12">
          <Container>
            <div className="mb-5 flex items-end justify-between gap-4">
              <h2 className="text-[19px] font-semibold text-[#0A1628]">Related products in this family</h2>
              <Link href={`/products?cat=${product.category}`} className="text-[12px] font-semibold text-[#0066CC] no-underline hover:underline">View family →</Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((item) => (
                <Link key={item.id} href={productPath(item.id)} className="p-card border border-[#DCE3EC] bg-white p-5 no-underline">
                  <div className="mb-3 flex flex-wrap gap-1">
                    {(item.grades.some((grade) => grade.startsWith('G'))
                      ? item.grades.filter((grade) => grade.startsWith('G')).slice(0, 2)
                      : item.grades.slice(0, 1)
                    ).map((grade) => <GradeChip key={grade} g={grade as GradeKey} tiny />)}
                  </div>
                  <h3 className="mb-1 text-[13.5px] font-semibold leading-snug text-[#0A1628]">{item.nameEn}</h3>
                  <p className="font-mono text-[11px] text-[#667085]">{item.formula} · CAS {item.cas}</p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="py-20">
        <Container><Reveal><Eyebrow>Technical resources</Eyebrow><div className="mt-3 flex flex-wrap items-end justify-between gap-5"><div><h2 className="font-serif text-[31px] text-[#102A43]">Continue the technical review</h2><p className="mt-3 max-w-[720px] text-[13.5px] leading-[1.72] text-[#475467]">Use application notes for context, then confirm current product documents before qualification.</p></div><Link href="/resources" className="text-[12px] font-semibold text-[#12657B] no-underline hover:underline">Knowledge centre →</Link></div></Reveal><div className="mt-9 grid grid-cols-1 gap-px bg-[#DCE3EC] md:grid-cols-3">{reading.map(([title, href], index) => <Reveal key={title} delay={index * 50}><Link href={href} className="group flex min-h-[210px] flex-col bg-[#F7F9FC] p-6 text-[#102A43] no-underline hover:bg-[#07182D] hover:text-white"><span className="font-mono text-[10px] text-[#2F6B55] group-hover:text-[#8FC7FF]">0{index + 1}</span><h3 className="mt-8 flex-1 text-[14px] font-semibold leading-[1.55]">{title}</h3><span className="mt-5 text-[11.5px] font-semibold text-[#12657B] group-hover:text-[#8FC7FF]">Read resource →</span></Link></Reveal>)}</div></Container>
      </section>

      <section className="bg-[#1F5A45] py-24 text-white">
        <Container><div className="text-center"><Eyebrow light>Start a product review</Eyebrow><h2 className="mx-auto mt-3 max-w-[720px] font-serif text-[clamp(34px,4.5vw,52px)] leading-[1.08]">Need a reliable supply route for {productName}?</h2><p className="mx-auto mt-5 max-w-[620px] text-[15px] leading-[1.75] text-white/68">Send the application, current specification, critical limits, pack, destination and forecast so the response can be technically useful.</p><div className="mt-9 flex flex-wrap justify-center gap-3"><Link href={`/contact?subject=${encodeURIComponent(`Quote request: ${productName}`)}`} className="bg-white px-6 py-3.5 text-[13px] font-semibold text-[#173F31] no-underline">Request quote</Link><Link href={`/contact?subject=${encodeURIComponent(`Sample request: ${productName}`)}`} className="border border-white/25 px-6 py-3.5 text-[13px] font-semibold text-white no-underline hover:bg-white/10">Request sample</Link><Link href={`/contact?subject=${encodeURIComponent(`Technical question: ${productName}`)}`} className="border border-white/25 px-6 py-3.5 text-[13px] font-semibold text-white no-underline hover:bg-white/10">Contact technical team</Link></div></div></Container>
      </section>
    </>
  )
}
