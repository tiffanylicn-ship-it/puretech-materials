import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Container, Eyebrow } from '@/components/ui/index'
import { Reveal } from '@/components/ui/Reveal'
import { getPostBySlug, getRelatedPosts, blogPosts } from '@/lib/blog'

export function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return { title: 'Article Not Found' }
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: [...post.tags, ...post.seoKeywords].join(', '),
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.date,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
    alternates: {
      canonical: `https://puretechmaterials.com/blog/${post.slug}`,
    },
  }
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const related = getRelatedPosts(params.slug, 3)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    image: `https://puretechmaterials.com${post.image}`,
    author: { '@type': 'Organization', name: 'PureTech Materials' },
    publisher: {
      '@type': 'Organization',
      name: 'PureTech Materials',
      url: 'https://puretechmaterials.com',
      logo: { '@type': 'ImageObject', url: 'https://puretechmaterials.com/favicon.ico' },
    },
    keywords: [...post.tags, ...post.seoKeywords].join(', '),
    articleSection: post.category,
    url: `https://puretechmaterials.com/blog/${post.slug}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://puretechmaterials.com/blog/${post.slug}` },
  }

  return (
    <>
      {/* JSON-LD structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <div className="border-b border-[rgba(0,102,204,0.1)] py-3 bg-[#F2F6FB]">
        <Container>
          <nav className="flex items-center gap-2 text-[12px] flex-wrap" style={{ color: '#8BA8C0' }}>
            <Link href="/home" className="no-underline hover:text-[#0066CC] transition-colors" style={{ color: '#506880' }}>Home</Link>
            <span style={{ color: '#C5D8E8' }}>›</span>
            <Link href="/blog" className="no-underline hover:text-[#0066CC] transition-colors" style={{ color: '#506880' }}>Blog</Link>
            <span style={{ color: '#C5D8E8' }}>›</span>
            <span className="text-[#0A1628] font-medium">{post.title}</span>
          </nav>
        </Container>
      </div>

      {/* Hero */}
      <section className="relative py-16 overflow-hidden"
        style={{ background: 'linear-gradient(160deg,#020C1B 0%,#040D1E 55%,#0A1F3A 100%)' }}>
        <div className="wafer-bg absolute inset-0 opacity-25 pointer-events-none" />
        <div className="glow bg-[#0055CC]/18 w-[500px] h-[400px]" style={{ top: '-60px', right: 0 }} />
        <Container className="relative z-10 max-w-[900px]">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full"
              style={{ background: 'rgba(0,102,204,0.25)', color: '#4BAAF5', border: '1px solid rgba(0,102,204,0.3)' }}>
              {post.category}
            </span>
            <span className="text-[12px]" style={{ color: 'rgba(255,255,255,0.4)' }}>{post.readTime} min read</span>
            <span className="text-[12px]" style={{ color: 'rgba(255,255,255,0.4)' }}>·</span>
            <span className="text-[12px]" style={{ color: 'rgba(255,255,255,0.4)' }}>{formatDate(post.date)}</span>
          </div>
          <h1 className="font-serif text-[clamp(24px,3.2vw,40px)] text-white leading-[1.18] mb-5 tracking-[-0.4px]">
            {post.title}
          </h1>
          <p className="text-[15.5px] leading-[1.72] max-w-[700px]" style={{ color: 'rgba(255,255,255,0.62)' }}>
            {post.excerpt}
          </p>
          {/* Primary tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {post.tags.map(t => (
              <span key={t} className="text-[11px] px-2.5 py-1 rounded-full font-medium"
                style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.1)' }}>
                {t}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured image */}
      {post.image && (
        <section className="bg-[#F2F6FB] py-8">
          <Container className="max-w-[900px]">
            <div className="rounded-[16px] overflow-hidden border border-[rgba(0,102,204,0.12)]"
              style={{ boxShadow: '0 4px 24px rgba(4,13,30,0.08)' }}>
              <img
                src={post.image}
                alt={post.imageAlt}
                width={900}
                height={480}
                className="w-full h-auto block"
                loading="eager"
              />
            </div>
            <p className="text-[11.5px] mt-2.5 text-center" style={{ color: '#8BA8C0' }}>
              {post.imageAlt}
            </p>
          </Container>
        </section>
      )}

      {/* Article body */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-14 items-start max-w-[1100px]">

            {/* Content */}
            <article>
              <div className="prose-article" style={{ fontSize: '15.5px', lineHeight: '1.78', color: '#1E3448' }}
                dangerouslySetInnerHTML={{ __html: post.content }} />

              {/* Primary tag list */}
              <div className="mt-10 pt-8" style={{ borderTop: '1px solid rgba(0,102,204,0.1)' }}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8BA8C0] mb-3">Tags</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(t => (
                    <span key={t} className="text-[12px] px-3 py-1 rounded-full bg-[#EEF4FF] text-[#0044BB] border border-[rgba(0,102,204,0.18)]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* SEO Keywords section — helps Google index long-tail terms */}
              {post.seoKeywords && post.seoKeywords.length > 0 && (
                <div className="mt-8 p-6 rounded-[14px]"
                  style={{ background: '#F2F6FB', border: '1px solid rgba(0,102,204,0.1)' }}>
                  <p className="text-[12px] font-semibold text-[#506880] mb-3 uppercase tracking-[0.1em]">
                    Related Search Topics
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.seoKeywords.map(kw => (
                      <span key={kw}
                        className="text-[12px] px-2.5 py-1 rounded-[5px] text-[#2C4160]"
                        style={{ background: 'white', border: '1px solid rgba(0,102,204,0.12)' }}>
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Author */}
              <div className="mt-8 p-6 rounded-[14px] flex gap-4 items-start"
                style={{ background: '#F2F6FB', border: '1px solid rgba(0,102,204,0.1)' }}>
                <div className="w-10 h-10 rounded-full bg-[#0066CC] flex items-center justify-center flex-shrink-0 text-white font-bold text-[14px]">
                  PT
                </div>
                <div>
                  <p className="text-[13.5px] font-semibold text-[#0A1628]">PureTech Materials — Technical Team</p>
                  <p className="text-[13px] text-[#3A5570] mt-1 leading-[1.6]">
                    Written by process engineers with hands-on experience in semiconductor wet clean, lithography, advanced packaging, and battery manufacturing. PureTech provides SEMI C1 certified electronic grade chemicals for fabs, OSATs, and battery manufacturers worldwide.
                  </p>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-[calc(68px+24px)] flex flex-col gap-5">
              <div className="bg-white border border-[rgba(0,102,204,0.1)] rounded-[14px] p-5"
                style={{ boxShadow: '0 1px 3px rgba(4,13,30,0.04)' }}>
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#8BA8C0] mb-4">Related Products</p>
                <div className="flex flex-col gap-2">
                  {[
                    { label: 'Electronic Grade IPA G5', href: '/product/eipa' },
                    { label: 'PGMEA — G4/G5',          href: '/product/pgmea' },
                    { label: 'NMP — G4/G5',            href: '/product/nmp' },
                    { label: 'DMC — Battery Grade',    href: '/product/dmc' },
                    { label: 'Acetonitrile — LC-MS',   href: '/product/acetonitrile' },
                    { label: 'Acetone — G4/G5',        href: '/product/acetone' },
                    { label: 'H₂O₂ — Electronic G5',  href: '/product/hydrogen-peroxide' },
                    { label: 'NH₄OH — Electronic G5',  href: '/product/ammonium-hydroxide' },
                  ].map(({ label, href }) => (
                    <Link key={href} href={href}
                      className="text-[13px] text-[#2C4160] no-underline hover:text-[#0066CC] flex items-center gap-1.5 transition-colors py-1">
                      <span className="w-1 h-1 rounded-full bg-[#0066CC] flex-shrink-0" />
                      {label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="rounded-[14px] p-6 text-white"
                style={{ background: 'linear-gradient(135deg,#040D1E,#0A1F3D)', border: '1px solid rgba(0,102,204,0.22)' }}>
                <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#4BAAF5] mb-2">Request a Sample</p>
                <p className="text-[13px] leading-[1.65] mb-4" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  Qualification lot with full CoA, ICP-MS (28 elements), and LPC data. Response within 1 business day.
                </p>
                <Link href="/contact"
                  className="block py-2.5 text-center text-[13px] font-semibold rounded-[8px] no-underline bg-[#0066CC] text-white hover:bg-[#1A7FEE] transition-colors">
                  Contact FAE Team
                </Link>
              </div>

              {/* Certifications */}
              <div className="rounded-[14px] p-5 bg-[#F2F6FB] border border-[rgba(0,102,204,0.1)]">
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#8BA8C0] mb-3">Certifications</p>
                {['SEMI C1 Tier D (G5)', 'SEMI C12', 'ISO 9001:2015', 'ISO 14001:2015', 'REACH / RoHS'].map(c => (
                  <div key={c} className="flex items-center gap-2 py-1.5">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="#059669" strokeWidth="2">
                      <polyline points="2 6.5 5 9.5 11 3.5" />
                    </svg>
                    <span className="text-[12px] text-[#2C4160] font-mono">{c}</span>
                  </div>
                ))}
              </div>

              {/* Share / print hint */}
              <div className="rounded-[14px] p-5 bg-white border border-[rgba(0,102,204,0.1)]">
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#8BA8C0] mb-3">Share This Article</p>
                <div className="flex gap-2">
                  {['LinkedIn', 'Email', 'Print'].map(s => (
                    <span key={s} className="flex-1 py-2 text-center text-[11.5px] font-medium rounded-[7px] cursor-pointer transition-colors text-[#2C4160]"
                      style={{ border: '1px solid rgba(0,102,204,0.18)', background: '#F2F6FB' }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-16 bg-[#F2F6FB]">
          <Container>
            <h2 className="text-[20px] font-semibold text-[#0A1628] mb-7">Related Technical Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map((rp, i) => (
                <Reveal key={rp.slug} delay={i * 60}>
                  <Link href={`/blog/${rp.slug}`}
                    className="group flex flex-col bg-white border border-[rgba(0,102,204,0.1)] rounded-[14px] overflow-hidden no-underline h-full hover:shadow-[0_6px_20px_rgba(0,102,204,0.1)] transition-all duration-250">
                    {/* Mini image preview */}
                    {rp.image && (
                      <div className="h-[100px] overflow-hidden bg-[#040D1E]">
                        <img src={rp.image} alt={rp.imageAlt}
                          className="w-full h-full object-cover object-top opacity-85" />
                      </div>
                    )}
                    <div className="p-5 flex flex-col flex-1">
                      <span className="text-[10.5px] font-semibold uppercase tracking-[0.1em] px-2 py-0.5 rounded-full bg-[#E8F2FF] text-[#0044BB] self-start mb-3">
                        {rp.category}
                      </span>
                      <h3 className="text-[14px] font-semibold text-[#0A1628] leading-[1.42] mb-2 group-hover:text-[#0055CC] transition-colors line-clamp-3 flex-1">
                        {rp.title}
                      </h3>
                      <div className="mt-4 pt-3.5 flex items-center justify-between"
                        style={{ borderTop: '1px solid rgba(0,102,204,0.07)' }}>
                        <span className="text-[11.5px] text-[#8BA8C0]">{rp.readTime} min read</span>
                        <span className="text-[12px] font-semibold text-[#0066CC]">Read →</span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  )
}
