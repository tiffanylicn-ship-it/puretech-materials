'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Container, Eyebrow, GradeChip } from '@/components/ui/index'
import { allProductsWithG1, type GradeKey, type Product } from '@/lib/products'
import { applicationRoutes, primaryApplication, productSearchText } from '@/lib/application-finder'

const portfolioCategories = [
  { key: 'all', label: 'All products' },
  { key: 'electronic', label: 'Electronic materials' },
  { key: 'high-purity', label: 'High-purity solvents' },
  { key: 'pharmaceutical', label: 'Pharmaceutical solvents' },
  { key: 'trace', label: 'Trace analysis' },
  { key: 'specialty', label: 'Specialty chemicals' },
]

const gradeFilters = [
  { key: 'all', label: 'All grades' },
  { key: 'electronic', label: 'Electronic G1–G5' },
  { key: 'hplc', label: 'HPLC / LC-MS' },
  { key: 'pharma', label: 'Pharma' },
  { key: 'reagent', label: 'AR / GR' },
  { key: 'industrial', label: 'Industrial' },
]

const packagingFilters = [
  { key: 'all', label: 'All formats' },
  { key: 'bottle', label: 'Bottle / qualification' },
  { key: 'small', label: '4–25 L' },
  { key: 'drum', label: 'Drum' },
  { key: 'ibc', label: 'IBC / bulk' },
]

const discoveryCards = [
  {
    title: 'Search by application',
    text: 'Begin with the environment where the chemical is used.',
    image: '/images/puretech/electronic-materials.jpg',
    options: [
      { label: 'Semiconductor', type: 'use', value: 'wafer-cleaning' },
      { label: 'Pharmaceutical', type: 'use', value: 'pharma-processing' },
      { label: 'Laboratory', type: 'use', value: 'chromatography' },
      { label: 'Industrial', type: 'use', value: 'precision-cleaning' },
    ],
  },
  {
    title: 'Search by product type',
    text: 'Move directly to a focused portfolio family.',
    image: '/images/puretech/high-purity-solvents.jpg',
    options: [
      { label: 'Electronic', type: 'category', value: 'electronic' },
      { label: 'Solvents', type: 'category', value: 'high-purity' },
      { label: 'Trace reagents', type: 'category', value: 'trace' },
      { label: 'Specialty', type: 'category', value: 'specialty' },
    ],
  },
  {
    title: 'Search by grade',
    text: 'Use grade as a screening tool, then confirm the specification.',
    image: '/images/puretech/quality-control.jpg',
    options: [
      { label: 'Electronic G1–G5', type: 'grade', value: 'electronic' },
      { label: 'HPLC / LC-MS', type: 'grade', value: 'hplc' },
      { label: 'Pharma', type: 'grade', value: 'pharma' },
      { label: 'Industrial', type: 'grade', value: 'industrial' },
    ],
  },
]

const categoryCards = [
  { title: 'Electronic Materials', description: 'High-purity solvents and process chemicals for semiconductor and advanced electronics.', products: 'Electronic IPA · Ethanol · PGMEA · NMP · DMC', image: '/images/puretech/electronic-materials.jpg', href: '/products/electronic-materials' },
  { title: 'High-Purity Solvents', description: 'Alcohols, ketones, esters, ethers and specialty solvents for controlled processes.', products: 'IPA · Methanol · Acetone · THF · DMSO', image: '/images/puretech/high-purity-solvents.jpg', href: '/products/high-purity-solvents' },
  { title: 'Pharmaceutical Solvents', description: 'Process solvents for synthesis, work-up, extraction and controlled manufacturing.', products: 'Ethanol · IPA · Acetone · Ethyl Acetate', image: '/images/puretech/pharma-gmp.jpg', href: '/products/pharmaceutical-solvents' },
  { title: 'Trace Analysis', description: 'Acids, oxidants and solvents for contamination-sensitive analytical workflows.', products: 'Nitric Acid · HCl · H₂O₂ · Acetonitrile', image: '/images/puretech/trace-analysis.jpg', href: '/products/trace-analysis' },
  { title: 'Specialty Chemicals', description: 'Lithography, polar aprotic and carbonate chemistry for advanced applications.', products: 'PGMEA · NMP · DMSO · DMC · EMC', image: '/images/puretech/applications.jpg', href: '/products/specialty-chemicals' },
]

const solutionCards = [
  { title: 'Semiconductor', text: 'Cleaning, lithography, packaging and contamination-controlled processing.', image: '/images/puretech/electronic-materials.jpg', href: '/solutions/semiconductor' },
  { title: 'Pharmaceutical', text: 'Process-solvent supply aligned with manufacturing use and quality review.', image: '/images/puretech/pharma-gmp.jpg', href: '/solutions/pharmaceutical' },
  { title: 'Industrial Manufacturing', text: 'Solvents for coatings, polymers, cleaning, extraction and processing.', image: '/images/puretech/manufacturing.jpg', href: '/solutions/industrial' },
  { title: 'Analytical Testing', text: 'Solvents and reagents selected around the instrument and method.', image: '/images/puretech/quality-control.jpg', href: '/solutions/analytical-testing' },
]

const featuredIds = ['eipa', 'pgmea', 'nmp', 'acetonitrile', 'dmc', 'hydrogen-peroxide']

function matchesCategory(product: Product, key: string) {
  if (key === 'all') return true
  if (key === 'electronic') return ['electronic', 'photoresist', 'base', 'peroxide', 'acid'].includes(product.category) && product.grades.some((grade) => grade.startsWith('G'))
  if (key === 'high-purity') return ['general', 'lab', 'electronic'].includes(product.category)
  if (key === 'pharmaceutical') return product.grades.includes('PHARMA')
  if (key === 'trace') return ['acid', 'peroxide'].includes(product.category) || ['acetonitrile', 'methanol', 'eipa'].includes(product.id)
  if (key === 'specialty') return ['photoresist', 'battery', 'base'].includes(product.category) || ['nmp', 'dmso', 'gbl'].includes(product.id)
  return product.category === key
}

function matchesGrade(product: Product, key: string) {
  if (key === 'all') return true
  if (key === 'electronic') return product.grades.some((grade) => grade.startsWith('G'))
  if (key === 'hplc') return product.grades.some((grade) => ['HPLC_PREP', 'HPLC_GRADIENT', 'HPLC', 'LC_MS'].includes(grade))
  if (key === 'pharma') return product.grades.includes('PHARMA')
  if (key === 'reagent') return product.grades.some((grade) => grade === 'AR' || grade === 'GR')
  if (key === 'industrial') return product.grades.includes('INDUSTRIAL')
  return product.grades.includes(key as GradeKey)
}

function matchesPackaging(product: Product, key: string) {
  if (key === 'all') return true
  const packs = product.packaging.join(' ').toLowerCase()
  if (key === 'bottle') return /500 ml|1 l|2\.5 l|4 l|bottle/.test(packs)
  if (key === 'small') return /4 l|5 l|18 l|20 l|25 l|carboy/.test(packs)
  if (key === 'drum') return /drum|180 l|200 l/.test(packs)
  if (key === 'ibc') return /ibc|1000 l|bulk|tanker|iso tank/.test(packs)
  return true
}

function ProductDatabaseCard({ product }: { product: Product }) {
  const grades = product.grades.filter((grade) => grade.startsWith('G')).slice(0, 3)
  const shownGrades = grades.length > 0 ? grades : product.grades.slice(0, 2)
  return (
    <Link href={`/product/${product.id}`} className="group flex h-full flex-col rounded-2xl border border-[#D8E0E5] bg-white p-5 text-[#1F2933] no-underline shadow-[0_2px_10px_rgba(16,42,67,0.04)] transition hover:border-[#9FB6AD] hover:shadow-[0_8px_24px_rgba(16,42,67,0.08)]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-wrap gap-1.5">{shownGrades.map((grade) => <GradeChip key={grade} g={grade as GradeKey} />)}</div>
        <span className="font-mono text-[10px] text-[#98A2B3]">{product.no.toString().padStart(2, '0')}</span>
      </div>
      <h3 className="mt-5 text-[15px] font-semibold leading-snug group-hover:text-[#1F6B55]">{product.nameEn}</h3>
      <p className="mt-1 font-mono text-[11px] text-[#667085]">CAS {product.cas} · {product.formula}</p>
      <div className="mt-5 flex-1 rounded-lg bg-[#F5F7F6] p-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#667085]">Application</p>
        <p className="mt-1 line-clamp-2 text-[12.5px] leading-[1.55] text-[#344054]">{primaryApplication(product).replace(/\s*[—–].*$/, '')}</p>
      </div>
      <div className="mt-4 flex items-end justify-between gap-4 border-t border-[#EAECF0] pt-3">
        <div><p className="text-[9.5px] font-semibold uppercase tracking-[0.08em] text-[#98A2B3]">Packaging</p><p className="mt-1 text-[11px] text-[#475467]">{product.packaging.slice(0, 2).join(' · ')}</p></div>
        <span className="shrink-0 text-[12px] font-semibold text-[#1F6B55]">View product →</span>
      </div>
    </Link>
  )
}

export default function ProductsClient() {
  const params = useSearchParams()
  const [category, setCategory] = useState('all')
  const [grade, setGrade] = useState('all')
  const [useCase, setUseCase] = useState('all')
  const [packaging, setPackaging] = useState('all')
  const [query, setQuery] = useState('')

  useEffect(() => {
    const requestedCategory = params.get('cat') ?? 'all'
    const mappedCategory = requestedCategory === 'general' ? 'high-purity'
      : requestedCategory === 'lab' ? 'high-purity'
        : ['acid', 'peroxide'].includes(requestedCategory) ? 'trace'
          : ['photoresist', 'battery', 'base'].includes(requestedCategory) ? 'specialty'
            : requestedCategory
    setCategory(mappedCategory)
    setUseCase(params.get('use') ?? 'all')
    setQuery(params.get('q') ?? '')
    setGrade('all')
    setPackaging('all')
  }, [params])

  const activeRoute = applicationRoutes.find((route) => route.id === useCase)
  const featured = featuredIds.map((id) => allProductsWithG1.find((product) => product.id === id)).filter((product): product is Product => Boolean(product))

  const filtered = useMemo(() => {
    let list = allProductsWithG1.filter((product) => matchesCategory(product, category) && matchesGrade(product, grade) && matchesPackaging(product, packaging))
    if (activeRoute) list = list.filter((product) => activeRoute.productIds.includes(product.id))
    if (query.trim()) {
      const terms = query.toLowerCase().trim().split(/\s+/)
      list = list.filter((product) => terms.every((term) => productSearchText(product).includes(term)))
    }
    return list
  }, [activeRoute, category, grade, packaging, query])

  const hasFilters = category !== 'all' || grade !== 'all' || useCase !== 'all' || packaging !== 'all' || query.trim().length > 0

  function resetFilters() {
    setCategory('all')
    setGrade('all')
    setUseCase('all')
    setPackaging('all')
    setQuery('')
  }

  function handleDiscovery(type: string, value: string) {
    if (type === 'use') setUseCase(value)
    if (type === 'category') setCategory(value)
    if (type === 'grade') setGrade(value)
    document.getElementById('product-database')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <section className="bg-[#102A43] py-14 text-white lg:py-20">
        <Container>
          <div className="grid min-h-[560px] grid-cols-1 overflow-hidden rounded-2xl bg-[#102A43] lg:grid-cols-[1fr_1.05fr] lg:items-stretch">
            <div className="flex flex-col justify-center px-1 py-10 lg:pr-14">
              <Eyebrow light>Products</Eyebrow>
              <h1 className="mt-5 max-w-[650px] font-serif text-[clamp(38px,5vw,64px)] leading-[1.04] tracking-[-0.8px]">High-Purity Chemical Materials for Advanced Industries</h1>
              <p className="mt-6 max-w-[610px] text-[16px] leading-[1.75] text-white/68">Advanced solvents and specialty chemicals for semiconductor, pharmaceutical, analytical and industrial applications.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#product-database" className="inline-flex h-12 items-center rounded-lg bg-[#1F6B55] px-6 text-[13px] font-semibold text-white no-underline hover:bg-[#2A8068]">Explore products</a>
                <Link href="/contact" className="inline-flex h-12 items-center rounded-lg border border-white/30 px-6 text-[13px] font-semibold text-white no-underline hover:bg-white/10">Request quote</Link>
              </div>
            </div>
            <div className="relative min-h-[360px] overflow-hidden rounded-2xl lg:min-h-[560px]">
              <Image src="/images/puretech/hero.jpg" alt="High-purity chemical production, filling and industrial packaging" fill priority sizes="(max-width:1024px) 100vw, 55vw" className="object-cover" />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="mx-auto max-w-[760px] text-center">
            <Eyebrow>Product discovery</Eyebrow>
            <h2 className="mt-3 font-serif text-[34px] text-[#102A43]">Find the right chemical solution</h2>
            <p className="mt-4 text-[14px] leading-[1.7] text-[#52606D]">Explore by industry application, chemical category or grade direction. Each choice takes you to the full database with the filter applied.</p>
          </div>
          <div className="mt-11 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {discoveryCards.map((card) => (
              <article key={card.title} className="overflow-hidden rounded-2xl border border-[#D8E0E5] bg-white shadow-[0_3px_16px_rgba(16,42,67,0.05)]">
                <div className="relative h-[150px]"><Image src={card.image} alt="" fill sizes="(max-width:1024px) 100vw, 33vw" className="object-cover" /></div>
                <div className="p-6">
                  <h3 className="text-[17px] font-semibold text-[#102A43]">{card.title}</h3>
                  <p className="mt-2 text-[12.5px] leading-[1.6] text-[#52606D]">{card.text}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {card.options.map((option) => (
                      <button key={option.label} type="button" onClick={() => handleDiscovery(option.type, option.value)} className="rounded-lg border border-[#C8D5D0] bg-[#F5F7F6] px-3 py-2 text-[11.5px] font-semibold text-[#1F6B55] hover:border-[#1F6B55] hover:bg-white">{option.label}</button>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#F5F7F6] py-20">
        <Container>
          <Eyebrow>Our product portfolio</Eyebrow>
          <h2 className="mt-3 font-serif text-[34px] text-[#102A43]">Five focused product categories</h2>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {categoryCards.map((card) => (
              <Link key={card.title} href={card.href} className="group flex min-h-[390px] flex-col overflow-hidden rounded-2xl border border-[#D8E0E5] bg-white text-[#1F2933] no-underline shadow-[0_2px_12px_rgba(16,42,67,0.04)] hover:border-[#9FB6AD]">
                <div className="relative h-[150px]"><Image src={card.image} alt={`${card.title} application`} fill sizes="(max-width:640px) 100vw, 20vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.025]" /></div>
                <div className="flex flex-1 flex-col p-5"><h3 className="text-[16px] font-semibold text-[#102A43]">{card.title}</h3><p className="mt-3 text-[12.5px] leading-[1.6] text-[#52606D]">{card.description}</p><p className="mt-4 flex-1 text-[11px] leading-[1.7] text-[#7B8794]">{card.products}</p><span className="mt-5 text-[12px] font-semibold text-[#1F6B55]">View products →</span></div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <Eyebrow>Solutions by industry</Eyebrow>
          <h2 className="mt-3 font-serif text-[34px] text-[#102A43]">Move from use case to product</h2>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {solutionCards.map((solution) => (
              <Link key={solution.title} href={solution.href} className="group grid min-h-[230px] overflow-hidden rounded-2xl border border-[#D8E0E5] bg-white text-[#1F2933] no-underline sm:grid-cols-[42%_1fr]">
                <div className="relative min-h-[210px]"><Image src={solution.image} alt={`${solution.title} solution`} fill sizes="(max-width:768px) 100vw, 25vw" className="object-cover" /></div>
                <div className="flex flex-col justify-center p-6"><h3 className="text-[18px] font-semibold text-[#102A43]">{solution.title}</h3><p className="mt-3 text-[13px] leading-[1.65] text-[#52606D]">{solution.text}</p><span className="mt-5 text-[12px] font-semibold text-[#1F6B55]">Explore solution →</span></div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#F5F7F6] py-20">
        <Container>
          <Eyebrow>Featured products</Eyebrow>
          <h2 className="mt-3 font-serif text-[34px] text-[#102A43]">Frequently reviewed products</h2>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((product) => <ProductDatabaseCard key={product.id} product={product} />)}
          </div>
        </Container>
      </section>

      <section id="product-database" className="scroll-mt-24 bg-white py-20">
        <Container>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-[1fr_420px] md:items-end">
            <div><Eyebrow>Product database</Eyebrow><h2 className="mt-3 font-serif text-[34px] text-[#102A43]">Explore all chemical products</h2><p className="mt-4 max-w-[720px] text-[13.5px] leading-[1.7] text-[#52606D]">Search names, CAS, formulas and applications, then narrow the list by portfolio, grade, use or packaging.</p></div>
            <label className="block"><span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.1em] text-[#667085]">Search the database</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Product, CAS, formula or application" className="h-12 w-full rounded-lg border border-[#C8D5DD] bg-[#F5F7F6] px-4 text-[13px] text-[#1F2933] outline-none focus:border-[#1F6B55] focus:bg-white" /></label>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]">
            <aside className="h-fit rounded-2xl border border-[#D8E0E5] bg-[#F5F7F6] p-5 lg:sticky lg:top-24">
              <FilterGroup title="Category" items={portfolioCategories} active={category} onSelect={setCategory} />
              <FilterGroup title="Grade" items={gradeFilters} active={grade} onSelect={setGrade} />
              <FilterGroup title="Application" items={[{ key: 'all', label: 'All applications' }, ...applicationRoutes.map((route) => ({ key: route.id, label: route.label }))]} active={useCase} onSelect={setUseCase} />
              <FilterGroup title="Packaging" items={packagingFilters} active={packaging} onSelect={setPackaging} />
              {hasFilters && <button type="button" onClick={resetFilters} className="mt-2 w-full rounded-lg border border-[#1F6B55] bg-white px-4 py-2.5 text-[12px] font-semibold text-[#1F6B55]">Clear all filters</button>}
            </aside>

            <div>
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3"><p className="text-[13px] text-[#52606D]"><strong className="font-semibold text-[#102A43]">{filtered.length}</strong> products found</p><Link href="/contact" className="text-[12px] font-semibold text-[#1F6B55] no-underline hover:underline">Send a specification for review →</Link></div>
              {filtered.length === 0 ? (
                <div className="rounded-2xl border border-[#D8E0E5] bg-[#F5F7F6] px-6 py-16 text-center"><h3 className="text-[16px] font-semibold text-[#102A43]">No exact match in this filter set</h3><p className="mx-auto mt-2 max-w-[520px] text-[13px] leading-[1.65] text-[#52606D]">Remove a filter or send the application and target specification for a technical review.</p><button type="button" onClick={resetFilters} className="mt-5 rounded-lg bg-[#1F6B55] px-5 py-3 text-[12px] font-semibold text-white">Reset filters</button></div>
              ) : (
                <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">{filtered.map((product) => <ProductDatabaseCard key={product.id} product={product} />)}</div>
              )}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#102A43] py-20 text-white">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div><Eyebrow light>Quality & documentation</Eyebrow><h2 className="mt-3 font-serif text-[34px]">Quality your team can review</h2><p className="mt-5 max-w-[580px] text-[14px] leading-[1.75] text-white/62">Request current product- and market-specific documents rather than relying on an undated generic download.</p><Link href="/quality" className="mt-7 inline-flex h-12 items-center rounded-lg bg-[#1F6B55] px-6 text-[13px] font-semibold text-white no-underline hover:bg-[#2A8068]">Review quality system</Link></div>
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2">
              {[
                ['COA documentation', 'Lot release format aligned with the controlled product specification.'],
                ['Batch traceability', 'Records connecting production, testing, packaging and shipment.'],
                ['Specification control', 'Defined parameters, methods, units and acceptance limits.'],
                ['Global compliance support', 'Product- and market-specific declarations where applicable.'],
              ].map(([title, text], index) => <article key={title} className="bg-[#102A43] p-6"><span className="font-mono text-[11px] text-[#62BD88]">0{index + 1}</span><h3 className="mt-6 text-[14px] font-semibold">{title}</h3><p className="mt-2 text-[12.5px] leading-[1.65] text-white/55">{text}</p></article>)}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#F5F7F6] py-20">
        <Container>
          <Eyebrow>Flexible packaging</Eyebrow>
          <h2 className="mt-3 font-serif text-[34px] text-[#102A43]">Packaging options from qualification to production</h2>
          <p className="mt-4 max-w-[760px] text-[13.5px] leading-[1.7] text-[#52606D]">Availability depends on product, grade, container compatibility, destination and order volume. Confirm the production pack during qualification.</p>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Qualification bottles', '/images/puretech/quality-control.jpg', 'Small-volume evaluation and laboratory use'],
              ['Small containers', '/images/puretech/high-purity-solvents.jpg', 'Typical 4–25 L supply discussions'],
              ['Drum supply', '/images/puretech/electronic-materials.jpg', 'Routine production volumes where available'],
              ['IBC & bulk programmes', '/images/puretech/hero.jpg', 'Planned high-volume supply routes'],
            ].map(([title, image, text]) => <article key={title} className="overflow-hidden rounded-2xl border border-[#D8E0E5] bg-white"><div className="relative h-[170px]"><Image src={image} alt="" fill sizes="(max-width:640px) 100vw, 25vw" className="object-cover" /></div><div className="p-5"><h3 className="text-[15px] font-semibold text-[#102A43]">{title}</h3><p className="mt-2 text-[12px] leading-[1.6] text-[#52606D]">{text}</p></div></article>)}
          </div>
        </Container>
      </section>

      <section className="bg-[#1F6B55] py-16 text-white">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div><p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/60">RFQ & technical support</p><h2 className="mt-3 font-serif text-[34px]">Need a reliable chemical supply partner?</h2><p className="mt-4 max-w-[760px] text-[14px] leading-[1.7] text-white/72">Contact PURETECHMATERIALS for high-purity chemicals, custom specifications, qualification samples and long-term supply.</p></div>
            <div className="flex flex-wrap gap-3"><Link href="/contact" className="inline-flex h-12 items-center rounded-lg bg-white px-6 text-[13px] font-semibold text-[#1F6B55] no-underline">Request quote</Link><Link href="/contact" className="inline-flex h-12 items-center rounded-lg border border-white/35 px-6 text-[13px] font-semibold text-white no-underline hover:bg-white/10">Contact technical team</Link></div>
          </div>
        </Container>
      </section>
    </>
  )
}

function FilterGroup({ title, items, active, onSelect }: { title: string; items: { key: string; label: string }[]; active: string; onSelect: (key: string) => void }) {
  return (
    <div className="mb-6 border-b border-[#D8E0E5] pb-5 last:border-b-0">
      <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.11em] text-[#667085]">{title}</p>
      <div className="space-y-1.5">
        {items.map((item) => (
          <button key={item.key} type="button" onClick={() => onSelect(item.key)} className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-[12px] transition ${active === item.key ? 'bg-white font-semibold text-[#1F6B55] shadow-[0_1px_4px_rgba(16,42,67,0.06)]' : 'text-[#475467] hover:bg-white/70'}`}>
            <span className={`size-3.5 rounded-[4px] border ${active === item.key ? 'border-[#1F6B55] bg-[#1F6B55]' : 'border-[#AAB7BF] bg-white'}`} />
            {item.label}
          </button>
        ))}
      </div>
    </div>
  )
}
