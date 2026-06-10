import type { Metadata } from 'next'
import Link from 'next/link'
import { Container, Eyebrow, SectionTitle, SectionSub } from '@/components/ui/index'
import { Reveal } from '@/components/ui/Reveal'
import { blogPosts, categories } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Technical Blog — Semiconductor Chemicals & Process Chemistry',
  description: 'PureTech Materials technical blog: in-depth articles on electronic grade IPA, PGMEA photoresist solvents, NMP battery chemicals, SEMI C1 standards, Marangoni drying, and advanced packaging wet process chemistry.',
  keywords: ['semiconductor chemicals blog','electronic grade IPA guide','PGMEA lithography','NMP battery electrode','SEMI C1 standard','Marangoni drying','advanced packaging solvents'],
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' })
}

export default function BlogPage() {
  const featured = blogPosts[0]
  const rest     = blogPosts.slice(1)

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden"
        style={{ background:'linear-gradient(135deg,#020C1B 0%,#040D1E 60%,#071629 100%)' }}>
        <div className="grid-bg grid-mask absolute inset-0 pointer-events-none" />
        <div className="glow bg-[#0055CC]/20 w-[500px] h-[320px]" style={{ top:0, left:'40%', transform:'translateX(-50%)' }} />
        <Container className="relative z-10">
          <Eyebrow light>Technical Blog</Eyebrow>
          <h1 className="font-serif text-[clamp(30px,4vw,50px)] text-white leading-[1.12] mb-3 tracking-[-0.5px]">
            Process Chemistry &<br />Materials Science
          </h1>
          <p className="text-[16px] leading-[1.72] max-w-[540px]" style={{ color:'rgba(255,255,255,0.58)' }}>
            In-depth technical articles on electronic grade solvents, semiconductor wet process chemistry, battery materials, and HPLC analytical methods — written by process engineers for process engineers.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          {/* Featured post */}
          <Reveal className="mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0055CC] mb-5">Featured Article</p>
            <Link href={`/blog/${featured.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 bg-white border border-[rgba(0,102,204,0.12)] rounded-[20px] p-8 no-underline hover:shadow-[0_8px_32px_rgba(0,102,204,0.12)] transition-all duration-300"
              style={{ boxShadow:'0 1px 3px rgba(4,13,30,0.05)' }}>
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full bg-[#E8F2FF] text-[#0044BB]">
                    {featured.category}
                  </span>
                  <span className="text-[12px] text-[#8BA8C0]">{featured.readTime} min read</span>
                </div>
                <h2 className="font-serif text-[clamp(20px,2.5vw,28px)] text-[#0A1628] leading-[1.22] mb-3 group-hover:text-[#0055CC] transition-colors tracking-[-0.3px]">
                  {featured.title}
                </h2>
                <p className="text-[14.5px] text-[#2C4160] leading-[1.7] mb-5 line-clamp-3">{featured.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {featured.tags.slice(0,5).map(t => (
                    <span key={t} className="text-[11px] px-2 py-0.5 rounded-[4px] bg-[#F2F6FB] text-[#506880] border border-[rgba(0,102,204,0.1)]">{t}</span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[12.5px] text-[#8BA8C0]">{formatDate(featured.date)}</span>
                  <span className="text-[13px] font-semibold text-[#0066CC] flex items-center gap-1">
                    Read Article
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5h9M7 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
                  </span>
                </div>
              </div>
              {/* Featured visual */}
              <div className="rounded-[14px] flex flex-col justify-between p-7 min-h-[200px]"
                style={{ background:'linear-gradient(135deg,#040D1E,#0A1F3D)', border:'1px solid rgba(0,102,204,0.2)' }}>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.1em] mb-3" style={{ color:'rgba(0,194,255,0.6)' }}>Key Specification</p>
                  {[
                    { p:'Assay (GC)',    v:'≥99.9999%',    g:'G5' },
                    { p:'Water (KF)',    v:'≤5 ppm',       g:'G5' },
                    { p:'Total Metals', v:'<0.1 ppb ea.', g:'G5' },
                    { p:'Particles',    v:'≤5 ct/mL',     g:'G5' },
                  ].map((r,i) => (
                    <div key={i} className="flex justify-between items-center py-2"
                      style={{ borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
                      <span className="text-[11.5px]" style={{ color:'rgba(255,255,255,0.45)' }}>{r.p}</span>
                      <span className="text-[11.5px] font-mono font-semibold text-white">{r.v}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4" style={{ borderTop:'1px solid rgba(255,255,255,0.06)' }}>
                  <span className="text-[10px] font-mono" style={{ color:'rgba(0,194,255,0.5)' }}>SEMI C1 Tier D · ISO Class 3 Fill</span>
                </div>
              </div>
            </Link>
          </Reveal>

          {/* Category filter */}
          <Reveal className="mb-8">
            <div className="flex gap-2 flex-wrap">
              {['All Articles', ...categories].map(cat => (
                <span key={cat}
                  className="px-3.5 py-1.5 rounded-full text-[12.5px] font-medium cursor-default border"
                  style={{ background:'white', color:'#2C4160', borderColor:'rgba(0,102,204,0.18)' }}>
                  {cat}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Article grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 50}>
                <Link href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-white border border-[rgba(0,102,204,0.1)] rounded-[16px] p-6 no-underline h-full hover:shadow-[0_6px_24px_rgba(0,102,204,0.1)] transition-all duration-250"
                  style={{ boxShadow:'0 1px 3px rgba(4,13,30,0.04)' }}>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10.5px] font-semibold uppercase tracking-[0.1em] px-2 py-0.5 rounded-full bg-[#E8F2FF] text-[#0044BB]">
                      {post.category}
                    </span>
                    <span className="text-[11.5px] text-[#8BA8C0]">{post.readTime} min</span>
                  </div>

                  <h2 className="text-[15px] font-semibold text-[#0A1628] leading-[1.4] mb-3 group-hover:text-[#0055CC] transition-colors flex-1 line-clamp-3">
                    {post.title}
                  </h2>

                  <p className="text-[13px] text-[#3A5570] leading-[1.6] line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.slice(0,3).map(t => (
                      <span key={t} className="text-[10px] px-1.5 py-0.5 rounded-[3px] bg-[#F2F6FB] text-[#506880]">{t}</span>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 flex items-center justify-between"
                    style={{ borderTop:'1px solid rgba(0,102,204,0.07)' }}>
                    <span className="text-[12px] text-[#8BA8C0]">{formatDate(post.date)}</span>
                    <span className="text-[12px] font-semibold text-[#0066CC] flex items-center gap-1">
                      Read
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2.5l3.5 3.5L6 9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F2F6FB]">
        <Container>
          <Reveal>
            <div className="bg-[#040D1E] rounded-[20px] p-10 md:p-14 text-center"
              style={{ background:'linear-gradient(135deg,#030B18,#040D1E,#091830)' }}>
              <Eyebrow light>Technical Inquiries</Eyebrow>
              <h2 className="font-serif text-[clamp(24px,3vw,38px)] text-white mb-3 tracking-[-0.4px]">
                Need Process-Specific Guidance?
              </h2>
              <p className="text-[15.5px] max-w-[480px] mx-auto mb-8 leading-[1.7]"
                style={{ color:'rgba(255,255,255,0.58)' }}>
                Our field application engineers work with your process team to select the right grade, define qualification protocols, and provide analytical data packages.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 bg-[#0066CC] text-white px-7 py-3.5 rounded-[8px] text-[14px] font-semibold no-underline hover:bg-[#1A7FEE] transition-colors">
                  Contact Our FAE Team
                </Link>
                <Link href="/products"
                  className="inline-flex items-center gap-2 border border-white/25 text-white/85 px-7 py-3.5 rounded-[8px] text-[14px] font-medium no-underline hover:bg-white/10 hover:text-white transition-colors">
                  Browse Products
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
