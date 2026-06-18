import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Container, Eyebrow, SectionTitle, SectionSub, CtaBanner } from '@/components/ui/index'
import { Reveal } from '@/components/ui/Reveal'
import { solutions } from '@/lib/seo-content'
import { GradeCompareChart } from '@/components/ui/GradeChart'

export function generateStaticParams() { return solutions.map(s=>({slug:s.slug})) }

export async function generateMetadata({params}:{params:{slug:string}}):Promise<Metadata> {
  const sol = solutions.find(s=>s.slug===params.slug)
  if(!sol) return {title:'Not Found'}
  return { title:sol.metaTitle, description:sol.metaDescription, keywords:sol.keywords.join(', '),
    alternates:{canonical:`https://puretechmaterials.com/solutions/${sol.slug}`} }
}

export default function SolutionDetailPage({params}:{params:{slug:string}}) {
  const sol = solutions.find(s=>s.slug===params.slug)
  if(!sol) notFound()
  const jsonLd = {
    '@context':'https://schema.org','@type':'TechArticle',
    headline:sol.title, description:sol.metaDescription,
    url:`https://puretechmaterials.com/solutions/${sol.slug}`,
    keywords:sol.keywords.join(', '),
    author:{'@type':'Organization',name:'PureTech Materials'},
    publisher:{'@type':'Organization',name:'PureTech Materials',url:'https://puretechmaterials.com'},
    mainEntity:{ '@type':'FAQPage',
      mainEntity:sol.faqs.map(f=>({'@type':'Question',name:f.q,acceptedAnswer:{'@type':'Answer',text:f.a}}))
    }
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/>
      <div className="border-b border-[rgba(0,102,204,0.1)] py-3 bg-[#F2F6FB]">
        <Container>
          <nav className="flex items-center gap-2 text-[12px] flex-wrap" style={{color:'#8BA8C0'}}>
            <Link href="/home" className="no-underline hover:text-[#0066CC]" style={{color:'#506880'}}>Home</Link>
            <span style={{color:'#C5D8E8'}}>›</span>
            <Link href="/solutions" className="no-underline hover:text-[#0066CC]" style={{color:'#506880'}}>Solutions</Link>
            <span style={{color:'#C5D8E8'}}>›</span>
            <span className="text-[#0A1628] font-medium">{sol.title}</span>
          </nav>
        </Container>
      </div>
      <section className="relative py-16 overflow-hidden" style={{background:'linear-gradient(160deg,#020C1B 0%,#040D1E 55%,#0A1F3A 100%)'}}>
        <div className="wafer-bg absolute inset-0 opacity-25 pointer-events-none"/>
        <div className="glow bg-[#0055CC]/18 w-[500px] h-[400px]" style={{top:'-60px',right:0}}/>
        <Container className="relative z-10">
          <div className="flex items-center gap-2.5 mb-5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full"
              style={{background:'rgba(0,102,204,0.25)',color:'#4BAAF5',border:'1px solid rgba(0,102,204,0.3)'}}>{sol.chemical}</span>
            <span className="text-[11px]" style={{color:'rgba(255,255,255,0.4)'}}>Application Guide</span>
          </div>
          <h1 className="font-serif text-[clamp(26px,3.5vw,44px)] text-white leading-[1.15] mb-4 tracking-[-0.4px] max-w-[700px]">{sol.title}</h1>
          <p className="text-[16px] leading-[1.72] max-w-[620px] mb-6" style={{color:'rgba(255,255,255,0.62)'}}>{sol.intro}</p>
          <div className="max-w-[620px] p-5 rounded-[12px]"
            style={{background:'rgba(255,200,0,0.07)',border:'1px solid rgba(255,200,0,0.2)'}}>
            <p className="text-[13px] leading-[1.65]" style={{color:'rgba(255,255,255,0.72)'}}>
              <span className="font-semibold text-[#FCD34D]">Why purity matters: </span>{sol.whyMatters}
            </p>
          </div>
        </Container>
      </section>

      {/* Spec requirements */}
      <section className="py-16">
        <Container>
          <Reveal className="mb-8">
            <Eyebrow>Specification Requirements</Eyebrow>
            <SectionTitle>Critical Parameters for {sol.application}</SectionTitle>
            <SectionSub>Each parameter directly impacts process outcome — understand why each limit exists.</SectionSub>
          </Reveal>
          <Reveal delay={60}>
            <div className="overflow-hidden rounded-[14px] border border-[rgba(0,102,204,0.12)]">
              <div className="overflow-x-auto">
                <table style={{width:'100%',borderCollapse:'collapse'}}>
                  <thead>
                    <tr style={{background:'#0A1628'}}>
                      <th style={{padding:'11px 16px',textAlign:'left',color:'rgba(255,255,255,0.65)',fontSize:10,fontWeight:600,textTransform:'uppercase',letterSpacing:'0.1em',minWidth:160}}>Parameter</th>
                      <th style={{padding:'11px 16px',textAlign:'left',color:'rgba(255,255,255,0.65)',fontSize:10,fontWeight:600,textTransform:'uppercase',letterSpacing:'0.1em',minWidth:200}}>Requirement</th>
                      <th style={{padding:'11px 16px',textAlign:'left',color:'rgba(255,255,255,0.65)',fontSize:10,fontWeight:600,textTransform:'uppercase',letterSpacing:'0.1em'}}>Why This Limit Exists</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sol.specs.map((s,i)=>(
                      <tr key={i} style={{borderBottom:i<sol.specs.length-1?'1px solid rgba(0,102,204,0.07)':'none',background:i%2===0?'white':'#FAFCFF'}}>
                        <td style={{padding:'11px 16px',fontSize:13,fontWeight:600,color:'#0A1628'}}>{s.param}</td>
                        <td style={{padding:'11px 16px',fontSize:13,fontFamily:'Space Mono,monospace',color:'#0055CC'}}>{s.requirement}</td>
                        <td style={{padding:'11px 16px',fontSize:13,color:'#2C4160',lineHeight:1.55}}>{s.why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Grade guide */}
      <section className="py-16 bg-[#F2F6FB]">
        <Container>
          <Reveal className="mb-8">
            <Eyebrow>Grade Selection</Eyebrow>
            <SectionTitle>Which Grade Do You Need?</SectionTitle>
            <SectionSub>Match your process node and contamination budget to the right grade — every grade available with full CoA.</SectionSub>
          </Reveal>
          <Reveal delay={50}>
            <div className="space-y-3 mb-10">
              {sol.gradeGuide.map((g,i)=>(
                <div key={i} className="flex items-start gap-5 p-5 bg-white border border-[rgba(0,102,204,0.1)] rounded-[12px]"
                  style={{boxShadow:'0 1px 3px rgba(4,13,30,0.04)'}}>
                  <div className="flex-shrink-0 w-14 text-center">
                    <span className="inline-flex items-center justify-center px-3 py-1.5 rounded-[6px] font-mono text-[13px] font-bold text-white"
                      style={{background:g.grade.includes('G5')?'#0099E8':g.grade.includes('G4')?'#0066CC':g.grade.includes('G3')?'#0050C8':g.grade.includes('G2')?'#003DA5':'#1E3A5F'}}>
                      {g.grade.split(' ')[0]}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-mono text-[12px] font-semibold text-[#0A1628] block mb-1">{g.spec}</span>
                    <p className="text-[13.5px] text-[#2C4160]">{g.when}</p>
                  </div>
                  <Link href="/contact" className="flex-shrink-0 text-[12px] font-semibold text-[#0066CC] no-underline hover:underline whitespace-nowrap">Request →</Link>
                </div>
              ))}
            </div>
            <GradeCompareChart showG1={true}/>
          </Reveal>
        </Container>
      </section>

      {/* FAQs */}
      {sol.faqs.length>0&&(
        <section className="py-16">
          <Container>
            <Reveal className="mb-8"><Eyebrow>Technical FAQ</Eyebrow><SectionTitle>Expert Answers</SectionTitle></Reveal>
            <div className="max-w-[800px] space-y-4">
              {sol.faqs.map((faq,i)=>(
                <Reveal key={i} delay={i*50}>
                  <div className="bg-white border border-[rgba(0,102,204,0.1)] rounded-[13px] p-6" style={{boxShadow:'0 1px 3px rgba(4,13,30,0.04)'}}>
                    <div className="flex gap-3 items-start mb-3">
                      <span className="font-mono text-[11px] font-bold text-[#0066CC] bg-[#EEF4FF] px-2 py-0.5 rounded flex-shrink-0 mt-0.5">Q</span>
                      <h3 className="text-[15px] font-semibold text-[#0A1628] leading-snug">{faq.q}</h3>
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="font-mono text-[11px] font-bold text-white bg-[#0066CC] px-2 py-0.5 rounded flex-shrink-0 mt-0.5">A</span>
                      <p className="text-[13.5px] text-[#2C4160] leading-[1.72]">{faq.a}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Related products */}
      <section className="py-14 bg-[#F2F6FB]">
        <Container>
          <h2 className="text-[19px] font-semibold text-[#0A1628] mb-5">Related Products</h2>
          <div className="flex flex-wrap gap-3">
            {sol.relatedProducts.map(p=>(
              <Link key={p.href} href={p.href}
                className="px-5 py-2.5 bg-white border border-[rgba(0,102,204,0.18)] rounded-[9px] text-[13.5px] font-semibold text-[#0066CC] no-underline hover:bg-[#EEF6FF] transition-all">
                {p.name} →
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* SEO keywords */}
      <section className="py-8 bg-[#F2F6FB]">
        <Container>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8BA8C0] mb-3">Related Search Topics</p>
          <div className="flex flex-wrap gap-2">
            {sol.keywords.map(kw=>(
              <span key={kw} className="text-[12px] px-2.5 py-1 rounded-[5px] bg-white text-[#2C4160]"
                style={{border:'1px solid rgba(0,102,204,0.12)'}}>{kw}</span>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner label="Get Started" title={<>Request a Sample for<br />{sol.application}</>}
        subtitle="Qualification lot with full CoA, ICP-MS data, and process-specific FAE support. Response within one business day."
        p1="Request Sample / RFQ" h1="/contact" p2="Full Product Catalog" h2="/products"/>
    </>
  )
}
