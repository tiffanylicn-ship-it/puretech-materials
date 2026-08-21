import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Container, CtaBanner, Eyebrow, GradeChip } from '@/components/ui/index'
import { Reveal } from '@/components/ui/Reveal'
import { productCategoryPages } from '@/lib/architecture-content'
import { coreProductSeoPages, coreProductSeoPath, findCoreProductSeoPath } from '@/lib/core-seo-pages'
import { allProductsWithG1, type GradeKey } from '@/lib/products'
import { primaryApplication } from '@/lib/application-finder'

export function generateStaticParams() {
  return productCategoryPages.map((category) => ({ category: category.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category: slug } = await params
  const category = productCategoryPages.find((item) => item.slug === slug)
  if (!category) return { title: 'Product Category Not Found' }
  return {
    title: category.metaTitle,
    description: category.description,
    alternates: { canonical: `https://puretechmaterials.com/products/${category.slug}` },
  }
}

export default async function ProductCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params
  const category = productCategoryPages.find((item) => item.slug === slug)
  if (!category) notFound()
  const products = category.productIds
    .map((id) => allProductsWithG1.find((product) => product.id === id))
    .filter((product): product is (typeof allProductsWithG1)[number] => Boolean(product))
  const supplementaryPages = coreProductSeoPages.filter((page) => page.categorySlug === category.slug && !page.productId)

  return (
    <>
      <div className="border-b border-[#DCE3EC] bg-[#F7F9FC] py-3">
        <Container><nav className="flex flex-wrap items-center gap-2 text-[12px] text-[#667085]"><Link href="/products" className="no-underline hover:text-[#12657B]">Products</Link><span>›</span><span className="font-medium text-[#0A1628]">{category.title}</span></nav></Container>
      </div>

      <section className="relative min-h-[520px] overflow-hidden bg-[#061d2b] text-white">
        <Image src={category.image} alt={`${category.title} production and application environment`} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061d2b] via-[#061d2b]/91 to-[#061d2b]/18" />
        <Container className="relative z-10 flex min-h-[520px] items-center py-20">
          <div className="max-w-[720px]">
            <Eyebrow light>{category.title}</Eyebrow>
            <h1 className="mt-5 font-serif text-[clamp(34px,4.5vw,55px)] leading-[1.08] tracking-[-0.7px]">{category.headline}</h1>
            <p className="mt-6 max-w-[660px] text-[16px] leading-[1.75] text-white/68">{category.description}</p>
            <Link href="#products" className="mt-9 inline-flex bg-white px-6 py-3.5 text-[13px] font-semibold text-[#08283b] no-underline hover:bg-[#DDEDE4]">View category products</Link>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_390px]">
            <div>
              <Eyebrow>Category map</Eyebrow>
              <h2 className="mt-3 font-serif text-[30px] text-[#0A1628]">Find the relevant chemical family</h2>
              <div className="mt-8 grid grid-cols-1 gap-px bg-[#DCE3EC] sm:grid-cols-2">
                {category.groups.map((group) => (
                  <article key={group.title} className="bg-white p-6">
                    <h3 className="text-[14px] font-semibold text-[#0A1628]">{group.title}</h3>
                    <p className="mt-3 text-[12.5px] leading-[1.8] text-[#475467]">{group.items.join(' · ')}</p>
                  </article>
                ))}
              </div>
            </div>
            <aside className="border-t-4 border-[#12657B] bg-[#F1F5F3] p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#12657B]">Before selecting a grade</p>
              <ul className="mt-6 space-y-4">
                {category.selectionNotes.map((note, index) => <li key={note} className="flex gap-3 text-[13px] leading-[1.6] text-[#475467]"><span className="font-mono text-[11px] text-[#2F8C67]">0{index + 1}</span>{note}</li>)}
              </ul>
            </aside>
          </div>
        </Container>
      </section>

      <section id="products" className="scroll-mt-24 border-y border-[#E4E7EC] bg-[#F7F9FC] py-20">
        <Container>
          <Reveal><Eyebrow>Products</Eyebrow><h2 className="mt-3 font-serif text-[31px] text-[#0A1628]">Products in this category</h2><p className="mt-4 max-w-[760px] text-[14px] leading-[1.7] text-[#475467]">Use these pages for initial screening. Confirm the current specification, grade availability, documentation and pack before qualification.</p></Reveal>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => {
              const grades = product.grades.filter((grade) => grade.startsWith('G')).slice(0, 3)
              const displayed = grades.length > 0 ? grades : product.grades.slice(0, 2)
              return (
                <Reveal key={product.id} delay={(index % 6) * 40}>
                  <Link href={findCoreProductSeoPath(category.slug, product.id) ?? `/product/${product.id}`} className="group flex h-full flex-col border border-[#DCE3EC] bg-white p-5 text-[#0A1628] no-underline hover:border-[#9FB8C6]">
                    <div className="flex flex-wrap gap-1.5">{displayed.map((grade) => <GradeChip key={grade} g={grade as GradeKey} />)}</div>
                    <h3 className="mt-5 text-[15px] font-semibold leading-snug group-hover:text-[#12657B]">{product.nameEn}</h3>
                    <p className="mt-1 font-mono text-[11px] text-[#667085]">{product.formula} · CAS {product.cas}</p>
                    <div className="mt-5 flex-1 border-l-2 border-[#D5E4E9] pl-3"><p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#667085]">Often considered for</p><p className="mt-1 line-clamp-3 text-[12.5px] leading-[1.6] text-[#475467]">{primaryApplication(product).replace(/\s*[—–].*$/, '')}</p></div>
                    <span className="mt-5 border-t border-[#EAECF0] pt-3 text-[12px] font-semibold text-[#12657B]">View product →</span>
                  </Link>
                </Reveal>
              )
            })}
            {supplementaryPages.map((page, index) => (
              <Reveal key={page.slug} delay={((products.length + index) % 6) * 40}>
                <Link href={coreProductSeoPath(page)} className="group flex h-full flex-col border border-[#BFD4CD] bg-[#F7FBF9] p-5 text-[#0A1628] no-underline hover:border-[#70A590]">
                  <span className="w-fit border border-[#BFD4CD] px-2 py-1 font-mono text-[10px] font-semibold text-[#12657B]">Technical review</span>
                  <h3 className="mt-5 text-[15px] font-semibold leading-snug group-hover:text-[#12657B]">{page.productName}</h3>
                  <p className="mt-1 font-mono text-[11px] text-[#667085]">{page.formula} · CAS {page.cas}</p>
                  <div className="mt-5 flex-1 border-l-2 border-[#9DC4B6] pl-3"><p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#667085]">Portfolio note</p><p className="mt-1 line-clamp-3 text-[12.5px] leading-[1.6] text-[#475467]">Specifications and supply format are confirmed against the method before quotation.</p></div>
                  <span className="mt-5 border-t border-[#DCE8E3] pt-3 text-[12px] font-semibold text-[#12657B]">Review requirements →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div><Eyebrow>Need a broader search?</Eyebrow><h2 className="mt-3 font-serif text-[29px] text-[#0A1628]">Use the full database by application, grade, name or CAS</h2></div>
            <Link href="/products" className="bg-[#12657B] px-6 py-3.5 text-[13px] font-semibold text-white no-underline hover:bg-[#2F8C67]">Open product finder</Link>
          </div>
        </Container>
      </section>

      <CtaBanner label={`${category.title} enquiry`} title={<>Need a specification<br />or qualification sample?</>} subtitle="Share the application, critical limits, destination, pack, annual volume and timing." p1="Request Technical Review" h1="/contact" p2="View Solutions" h2="/solutions" />
    </>
  )
}
