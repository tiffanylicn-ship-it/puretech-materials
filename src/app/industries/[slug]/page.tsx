import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Container, Eyebrow, SectionTitle, SectionSub, CtaBanner } from '@/components/ui/index'
import { Reveal } from '@/components/ui/Reveal'
import { industries } from '@/lib/seo-content'

export function generateStaticParams() { return industries.map(i=>({slug:i.slug})) }

export async function generateMetadata({params}:{params:{slug:string}}):Promise<Metadata> {
  const ind = industries.find(i=>i.slug===params.slug)
  if(!ind) return {title:'Not Found'}
  return { title:ind.metaTitle, description:ind.metaDescription, keywords:ind.keywords.join(', '),
    alternates:{canonical:`https://puretechmaterials.com/industries/${ind.slug}`} }
}

export default function IndustryPage({params}:{params:{slug:string}}) {
  const ind = industries.find(i=>i.slug===params.slug)
  if(!ind) notFound()
  const jsonLd = { '@context':'https://schema.org','@type':'WebPage', name:ind.metaTitle,
    description:ind.metaDescription, url:`https://puretechmaterials.com/industries/${ind.slug}`,
    publisher:{'@type':'Organization',name:'PureTech Materials',url:'https://puretechmaterials.com'} }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/>
      <div className="border-b border-[rgba(0,102,204,0.1)] py-3 bg-[#F2F6FB]">
        <Container>
          <nav className="flex items-center gap-2 text-[12px]" style={{color:'#8BA8C0'}}>
            <Link href="/home" className="no-underline hover:text-[#0066CC]" style={{color:'#506880'}}>Home</Link>
            <span style={{color:'#C5D8E8'}}>›</span>
            <Link href="/industries" className="no-underline hover:text-[#0066CC]" style={{color:'#506880'}}>Industries</Link>
            <span style={{color:'#C5D8E8'}}>›</span>
            <span className="text-[#0A1628] font-medium">{ind.title}</span>
          </nav>
        </Container>
      </div>
      <section className="relative py-20 overflow-hidden" style={{background:'linear-gradient(135deg,#020C1B 0%,#040D1E 55%,#0A1F3A 100%)'}}>
        <div className="wafer-bg absolute inset-0 opacity-28 pointer-events-none"/>
        <div className="glow bg-[#0055CC]/20 w-[500px] h-[400px]" style={{top:'-60px',right:0}}/>
        <Container className="relative z-10">
          <Eyebrow light>{ind.title}</Eyebrow>
          <h1 className="font-serif text-[clamp(28px,4vw,50px)] text-white leading-[1.1] mb-4 tracking-[-0.5px]">{ind.headline}</h1>
          <p className="text-[16px] leading-[1.72] max-w-[540px] mb-8" style={{color:'rgba(255,255,255,0.62)'}}>{ind.intro}</p>
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-[12px]"
            style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)'}}>
            <div>
              <div className="font-mono text-[28px] font-bold text-[#4BAAF5] leading-none">{ind.heroStat}</div>
              <div className="text-[10px] mt-0.5 uppercase tracking-[0.1em]" style={{color:'rgba(255,255,255,0.38)'}}>{ind.heroStatLabel}</div>
            </div>
            <div className="w-px h-10 bg-white/10"/>
            <div className="text-[13px]" style={{color:'rgba(255,255,255,0.55)'}}>{ind.subline}</div>
          </div>
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <Reveal className="mb-12"><Eyebrow>Key Challenges</Eyebrow><SectionTitle>What Makes {ind.title} Chemistry Demanding</SectionTitle></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {ind.challenges.map((c,i)=>(
              <Reveal key={i} delay={i*60}>
                <div className="bg-white border border-[rgba(0,102,204,0.1)] rounded-[14px] p-6 h-full" style={{boxShadow:'0 1px 3px rgba(4,13,30,0.04)'}}>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-7 h-7 rounded-full bg-[#EEF4FF] flex items-center justify-center flex-shrink-0 font-mono text-[11px] font-bold text-[#0066CC]">{String(i+1).padStart(2,'0')}</div>
                    <h3 className="text-[15px] font-semibold text-[#0A1628]">{c.title}</h3>
                  </div>
                  <p className="text-[13.5px] text-[#2C4160] leading-[1.65]">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-20 bg-[#F2F6FB]">
        <Container>
          <Reveal className="mb-10"><Eyebrow>Product Portfolio</Eyebrow><SectionTitle>Chemicals for {ind.title}</SectionTitle></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ind.chemicals.map((c,i)=>(
              <Reveal key={i} delay={i*50}>
                <Link href={c.href} className="group flex flex-col bg-white border border-[rgba(0,102,204,0.1)] rounded-[13px] p-5 no-underline hover:shadow-[0_6px_20px_rgba(0,102,204,0.1)] hover:-translate-y-0.5 transition-all" style={{boxShadow:'0 1px 3px rgba(4,13,30,0.04)'}}>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-[14.5px] font-semibold text-[#0A1628] group-hover:text-[#0055CC] transition-colors">{c.name}</h3>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded-[4px] flex-shrink-0 ml-2" style={{background:'rgba(0,102,204,0.08)',color:'#0055CC',border:'1px solid rgba(0,102,204,0.18)'}}>{c.grade}</span>
                  </div>
                  <p className="text-[12.5px] text-[#3A5570] leading-[1.55] flex-1">{c.use}</p>
                  <div className="mt-4 flex items-center gap-1 text-[12px] font-semibold text-[#0066CC]" style={{borderTop:'1px solid rgba(0,102,204,0.07)',paddingTop:'12px'}}>
                    View Specification <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2.5l3.5 3.5L6 9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      {ind.processSteps.length>0&&(
        <section className="py-20" style={{background:'linear-gradient(180deg,#040D1E 0%,#071429 100%)'}}>
          <Container>
            <Reveal className="mb-12"><Eyebrow light>Process Mapping</Eyebrow><SectionTitle light>Step-by-Step Chemical Guide</SectionTitle></Reveal>
            <div className="space-y-3">
              {ind.processSteps.map((s,i)=>(
                <Reveal key={i} delay={i*45}>
                  <div className="grid grid-cols-1 md:grid-cols-[40px_200px_140px_1fr] gap-4 items-start p-5 rounded-[12px]"
                    style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.07)'}}>
                    <span className="font-mono text-[12px] font-bold" style={{color:'rgba(0,194,255,0.45)'}}>{String(i+1).padStart(2,'0')}</span>
                    <p className="text-[13.5px] font-semibold text-white">{s.step}</p>
                    <span className="font-mono text-[11px] px-2.5 py-1 rounded-[5px] self-start"
                      style={{background:'rgba(0,102,204,0.2)',color:'#4BAAF5',border:'1px solid rgba(0,102,204,0.3)'}}>{s.chemical}</span>
                    <p className="text-[13px] leading-[1.6]" style={{color:'rgba(255,255,255,0.52)'}}>{s.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}
      {ind.faqs.length>0&&(
        <section className="py-20">
          <Container>
            <Reveal className="mb-10"><Eyebrow>FAQ</Eyebrow><SectionTitle>Frequently Asked Questions</SectionTitle></Reveal>
            <div className="max-w-[800px] space-y-4">
              {ind.faqs.map((faq,i)=>(
                <Reveal key={i} delay={i*50}>
                  <div className="bg-white border border-[rgba(0,102,204,0.1)] rounded-[13px] p-6" style={{boxShadow:'0 1px 3px rgba(4,13,30,0.04)'}}>
                    <h3 className="text-[15px] font-semibold text-[#0A1628] mb-3 leading-snug">{faq.q}</h3>
                    <p className="text-[13.5px] text-[#2C4160] leading-[1.7]">{faq.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}
      <section className="py-10 bg-[#F2F6FB]">
        <Container>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8BA8C0] mb-3">Related Search Topics</p>
          <div className="flex flex-wrap gap-2">
            {ind.keywords.map(kw=>(
              <span key={kw} className="text-[12px] px-2.5 py-1 rounded-[5px] bg-white text-[#2C4160]" style={{border:'1px solid rgba(0,102,204,0.12)'}}>{kw}</span>
            ))}
          </div>
        </Container>
      </section>
      <CtaBanner label={`${ind.title} Supply`} title={<>Ready to Qualify for<br />{ind.title}?</>}
        subtitle="Request sample lots with full CoA, ICP-MS data, and process-specific FAE support."
        p1="Request Sample / RFQ" h1="/contact" p2="Browse All Products" h2="/products"/>
    </>
  )
}
