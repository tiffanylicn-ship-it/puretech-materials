import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container, CtaBanner, Eyebrow } from '@/components/ui/index'
import { Reveal } from '@/components/ui/Reveal'
import { blogPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Chemical Knowledge & Technical Resources',
  description: 'Technical articles, application guides, product-selection knowledge and document support for high-purity chemical buyers and process teams.',
  alternates: { canonical: 'https://puretechmaterials.com/resources' },
}

const categories = [
  { no: '01', title: 'Technical Knowledge', description: 'Chemical fundamentals, purity grades, analytical methods and manufacturing concepts.', href: '/knowledge', image: '/images/puretech/quality-control.jpg' },
  { no: '02', title: 'Application Guides', description: 'How chemical requirements change across real industrial and analytical processes.', href: '/applications', image: '/images/puretech/applications.jpg' },
  { no: '03', title: 'Product Selection Guides', description: 'Choose a useful chemical grade, specification and pack without over-specifying.', href: '/guides', image: '/images/puretech/high-purity-solvents.jpg' },
  { no: '04', title: 'Regulatory & Compliance', description: 'REACH, GHS, SDS, CoA, traceability and export-document review.', href: '/compliance', image: '/images/puretech/pharma-gmp.jpg' },
  { no: '05', title: 'Downloads', description: 'Find the current TDS, SDS, specification, CoA example or company document route.', href: '/downloads', image: '/images/puretech/manufacturing.jpg' },
  { no: '06', title: 'FAQ', description: 'Straight answers to common product, quality, packaging and export questions.', href: '/faq', image: '/images/puretech/trace-analysis.jpg' },
]

const applicationGuides = [
  ['Semiconductor chemical solutions', 'Contamination control, cleaning, lithography and advanced-packaging product routes.', '/applications/semiconductor', '/images/puretech/electronic-materials.jpg'],
  ['Pharmaceutical manufacturing', 'Process-solvent selection around manufacturing role, quality documents and approved supply.', '/applications/pharmaceutical', '/images/puretech/pharma-gmp.jpg'],
  ['ICP-MS & trace analysis', 'Reagent selection around analytes, reporting limits, blank contribution and container practice.', '/applications/icp-ms', '/images/puretech/trace-analysis.jpg'],
]

const selectionGuides = [
  ['How to choose the right solvent grade', 'Industrial, high-purity, analytical and electronic grades compared by application need.', '/guides#solvent-grade-selection'],
  ['IPA buying guide for industrial customers', 'Purity, water, residue, packaging and supplier qualification questions.', '/guides#ipa-buying-guide'],
  ['Bulk chemical purchasing guide', 'Drums, IBCs, storage, receiving, documentation and delivery planning.', '/guides#bulk-purchasing-guide'],
]

export default function ResourcesPage() {
  const featuredArticles = blogPosts.slice(0, 4)

  return (
    <>
      <section className="relative min-h-[620px] overflow-hidden bg-[#061d2b] text-white">
        <Image src="/images/puretech/quality-control.jpg" alt="Chemical research laboratory, analytical instruments and technical document review" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061d2b] via-[#061d2b]/91 to-[#061d2b]/24" />
        <Container className="relative z-10 flex min-h-[620px] items-center py-20">
          <div className="max-w-[760px]">
            <Eyebrow light>Resources & knowledge centre</Eyebrow>
            <h1 className="mt-5 font-serif text-[clamp(40px,5.2vw,65px)] leading-[1.02] tracking-[-0.9px]">Chemical Knowledge<br />& Technical Resources</h1>
            <p className="mt-7 max-w-[690px] text-[16px] leading-[1.78] text-white/72">Technical insights, application guides and product knowledge to help purchasing and process teams select the right chemical solution.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="#knowledge-categories" className="bg-white px-6 py-3.5 text-[13px] font-semibold text-[#08283b] no-underline hover:bg-[#DDEDE4]">Explore knowledge</Link>
              <Link href="/downloads" className="border border-white/25 px-6 py-3.5 text-[13px] font-semibold text-white no-underline hover:bg-white/10">Find technical documents</Link>
            </div>
          </div>
        </Container>
      </section>

      <section id="knowledge-categories" className="scroll-mt-24 py-20">
        <Container>
          <Reveal>
            <Eyebrow>Explore by knowledge category</Eyebrow>
            <div className="mt-3 grid grid-cols-1 gap-6 lg:grid-cols-[400px_1fr] lg:items-end">
              <h2 className="font-serif text-[33px] leading-tight text-[#0A1628]">Find the information closest to the decision you are making</h2>
              <p className="max-w-[760px] text-[14px] leading-[1.78] text-[#475467]">Use the knowledge centre for technical context, the application pages for process discovery and the downloads centre for current product-specific documents.</p>
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <Reveal key={category.title} delay={(index % 4) * 45}>
                <Link href={category.href} className="group block h-full overflow-hidden border border-[#DCE3EC] bg-white text-[#0A1628] no-underline hover:border-[#9FB8C6]">
                  <div className="relative min-h-[230px]"><Image src={category.image} alt={`${category.title} resource environment`} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#061d2b]/55 to-transparent" /><span className="absolute bottom-4 left-4 border border-white/25 bg-[#061d2b]/65 px-2.5 py-1 font-mono text-[10px] font-semibold text-white/80">{category.no}</span></div>
                  <div className="p-6"><h3 className="text-[16px] font-semibold group-hover:text-[#12657B]">{category.title}</h3><p className="mt-3 text-[13px] leading-[1.68] text-[#475467]">{category.description}</p><span className="mt-6 block text-[12px] font-semibold text-[#12657B]">Explore category →</span></div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[#E4E7EC] bg-[#F7F9FC] py-20">
        <Container>
          <Reveal>
            <Eyebrow>Featured technical knowledge</Eyebrow>
            <div className="mt-3 flex flex-wrap items-end justify-between gap-5"><div><h2 className="font-serif text-[33px] text-[#0A1628]">Read the process before comparing the product</h2><p className="mt-4 max-w-[760px] text-[14px] leading-[1.75] text-[#475467]">Technical articles provide context for screening. Current controlled specifications and product documents still govern qualification.</p></div><Link href="/blog" className="text-[12.5px] font-semibold text-[#12657B] no-underline hover:underline">All technical articles →</Link></div>
          </Reveal>
          <div className="mt-11 grid grid-cols-1 gap-px bg-[#DCE3EC] md:grid-cols-2 lg:grid-cols-4">
            {featuredArticles.map((article, index) => (
              <Reveal key={article.slug} delay={index * 50}>
                <Link href={`/blog/${article.slug}`} className="group flex h-full min-h-[320px] flex-col bg-white p-6 text-[#0A1628] no-underline hover:bg-[#F2F8F5]">
                  <div className="flex items-center justify-between gap-3"><span className="font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-[#2F8C67]">{article.category}</span><span className="text-[10.5px] text-[#98A2B3]">{article.readTime} min</span></div>
                  <h3 className="mt-8 text-[15px] font-semibold leading-[1.45] group-hover:text-[#12657B]">{article.title}</h3>
                  <p className="mt-4 line-clamp-4 flex-1 text-[12.8px] leading-[1.7] text-[#475467]">{article.excerpt}</p>
                  <span className="mt-6 border-t border-[#EAECF0] pt-4 text-[12px] font-semibold text-[#12657B]">Read article →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal><Eyebrow>Application guides</Eyebrow><h2 className="mt-3 font-serif text-[33px] text-[#0A1628]">Move from industry question to a focused chemical shortlist</h2></Reveal>
          <div className="mt-11 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {applicationGuides.map(([title, detail, href, image], index) => (
              <Reveal key={title} delay={index * 55}>
                <Link href={href} className="group block h-full overflow-hidden border border-[#DCE3EC] bg-white text-[#0A1628] no-underline hover:border-[#9FB8C6]">
                  <div className="relative min-h-[260px]"><Image src={image} alt={`${title} application guide`} fill sizes="(max-width:1024px) 100vw, 33vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#061d2b]/60 to-transparent" /></div>
                  <div className="p-6"><span className="font-mono text-[11px] font-semibold text-[#2F8C67]">0{index + 1}</span><h3 className="mt-5 text-[16px] font-semibold group-hover:text-[#12657B]">{title}</h3><p className="mt-3 text-[13px] leading-[1.68] text-[#475467]">{detail}</p><span className="mt-6 block text-[12px] font-semibold text-[#12657B]">Open application guide →</span></div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#F1F5F3] py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[350px_1fr]">
            <Reveal><div><Eyebrow>Product selection guides</Eyebrow><h2 className="mt-3 font-serif text-[32px] leading-tight text-[#0A1628]">Procurement questions that deserve more than a product table</h2><p className="mt-5 text-[14px] leading-[1.75] text-[#475467]">These guides organise the technical, packaging and supplier-review questions before price comparisons begin.</p></div></Reveal>
            <div className="grid grid-cols-1 gap-px bg-[#CBD8D5] md:grid-cols-3">
              {selectionGuides.map(([title, detail, href], index) => (
                <Reveal key={title} delay={index * 55}>
                  <Link href={href} className="group flex h-full min-h-[280px] flex-col bg-white p-7 text-[#0A1628] no-underline hover:bg-[#F8FCFA]"><span className="font-mono text-[11px] font-semibold text-[#2F8C67]">0{index + 1}</span><h3 className="mt-8 text-[15px] font-semibold group-hover:text-[#12657B]">{title}</h3><p className="mt-3 flex-1 text-[13px] leading-[1.7] text-[#475467]">{detail}</p><span className="mt-6 text-[12px] font-semibold text-[#12657B]">Read guide →</span></Link>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#07182D] text-white">
        <Container>
          <div className="grid grid-cols-1 gap-9 py-16 lg:grid-cols-[1fr_auto] lg:items-center">
            <Reveal><div><Eyebrow light>Technical documents</Eyebrow><h2 className="mt-3 font-serif text-[31px]">Find the current file for the product, grade and market</h2><p className="mt-4 max-w-[760px] text-[14px] leading-[1.72] text-white/60">Search specifications, TDS, SDS, CoA examples and company documents. Files without a verified local master remain request-only.</p></div></Reveal>
            <div className="flex flex-wrap gap-3"><Link href="/downloads" className="bg-white px-6 py-3.5 text-[12.5px] font-semibold text-[#08283b] no-underline hover:bg-[#DDEDE4]">Open downloads centre</Link><Link href="/compliance" className="border border-white/20 px-6 py-3.5 text-[12.5px] font-semibold text-white no-underline hover:bg-white/10">Review compliance support</Link></div>
          </div>
        </Container>
      </section>

      <CtaBanner label="Technical support" title={<>Need knowledge,<br />documents or a product shortlist?</>} subtitle="Share the application, product, grade, destination and the decision your team needs to make." p1="Ask a Technical Question" h1="/contact" p2="Browse Products" h2="/products" />
    </>
  )
}
