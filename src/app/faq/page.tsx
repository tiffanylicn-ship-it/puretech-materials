import type { Metadata } from 'next'
import Link from 'next/link'
import { Container, Eyebrow, SectionTitle, CtaBanner } from '@/components/ui/index'
import { Reveal } from '@/components/ui/Reveal'
import { faqItems } from '@/lib/seo-content'

export const metadata: Metadata = {
  title: 'FAQ — Electronic Grade Chemicals, SEMI C1, IPA, PGMEA, Battery Solvents | PureTech',
  description: 'Answers to frequently asked questions about electronic grade IPA, SEMI C1 grades, CoA requirements, battery grade DMC/NMP, HPLC solvents, supplier qualification, and packaging options.',
}

const CATEGORIES = Array.from(
  new Set(faqItems.map(f => f.category))
)
const CAT_ICONS: Record<string,string> = {
  'Grade & Specification':'📊','Quality & Documentation':'📋',
  'Process Applications':'⚗️','Battery Applications':'🔋',
  'Supply & Logistics':'🚚','Qualification':'✅',
}

export default function FaqPage() {
  const jsonLd = {
    '@context':'https://schema.org','@type':'FAQPage',
    mainEntity: faqItems.map(f=>({
      '@type':'Question', name:f.question,
      acceptedAnswer:{'@type':'Answer',text:f.answer}
    }))
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/>
      <section className="relative py-20 overflow-hidden"
        style={{background:'linear-gradient(135deg,#020C1B 0%,#040D1E 60%,#071629 100%)'}}>
        <div className="grid-bg grid-mask absolute inset-0 pointer-events-none"/>
        <div className="glow bg-[#0055CC]/18 w-[480px] h-[320px]" style={{top:0,left:'40%',transform:'translateX(-50%)'}}/>
        <Container className="relative z-10">
          <Eyebrow light>FAQ</Eyebrow>
          <h1 className="font-serif text-[clamp(28px,4vw,48px)] text-white leading-[1.12] mb-4 tracking-[-0.5px]">Frequently Asked Questions</h1>
          <p className="text-[16px] leading-[1.72] max-w-[520px]" style={{color:'rgba(255,255,255,0.58)'}}>
            Technical and commercial questions about electronic grade solvents, SEMI C1 specifications, battery chemicals, and HPLC reagents — answered by our process engineers.
          </p>
          <div className="flex flex-wrap gap-2 mt-7">
            {CATEGORIES.map(cat=>(
              <a key={cat} href={`#${cat.toLowerCase().replace(/[\s&]+/g,'-')}`}
                className="text-[12px] px-3 py-1.5 rounded-full no-underline font-medium transition-colors"
                style={{background:'rgba(255,255,255,0.08)',color:'rgba(255,255,255,0.65)',border:'1px solid rgba(255,255,255,0.12)'}}>
                {CAT_ICONS[cat]||'❓'} {cat}
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="max-w-[860px] mx-auto space-y-16">
            {CATEGORIES.map((cat,ci)=>{
              const items = faqItems.filter(f=>f.category===cat)
              const anchorId = cat.toLowerCase().replace(/[\s&]+/g,'-')
              return (
                <div key={cat} id={anchorId}>
                  <Reveal>
                    <div className="flex items-center gap-3 mb-7">
                      <span className="text-[22px]">{CAT_ICONS[cat]||'❓'}</span>
                      <h2 className="font-serif text-[24px] text-[#0A1628] tracking-[-0.3px]">{cat}</h2>
                    </div>
                  </Reveal>
                  <div className="space-y-4">
                    {items.map((faq,i)=>(
                      <Reveal key={faq.id} delay={i*45}>
                        <div className="bg-white border border-[rgba(0,102,204,0.1)] rounded-[14px] p-6 hover:border-[rgba(0,102,204,0.22)] transition-colors"
                          style={{boxShadow:'0 1px 3px rgba(4,13,30,0.04)'}}>
                          <div className="flex gap-3 items-start mb-3">
                            <span className="font-mono text-[11px] font-bold text-[#0066CC] bg-[#EEF4FF] px-2 py-0.5 rounded-[4px] flex-shrink-0 mt-0.5">Q</span>
                            <h3 className="text-[15px] font-semibold text-[#0A1628] leading-snug">{faq.question}</h3>
                          </div>
                          <div className="flex gap-3 items-start">
                            <span className="font-mono text-[11px] font-bold text-white bg-[#0066CC] px-2 py-0.5 rounded-[4px] flex-shrink-0 mt-0.5">A</span>
                            <p className="text-[13.5px] text-[#2C4160] leading-[1.72]">{faq.answer}</p>
                          </div>
                          <div className="flex flex-wrap gap-1.5 mt-4 pt-3.5" style={{borderTop:'1px solid rgba(0,102,204,0.07)'}}>
                            {faq.keywords.map(kw=>(
                              <span key={kw} className="text-[10.5px] px-2 py-0.5 rounded-[4px] bg-[#F2F6FB] text-[#506880]">{kw}</span>
                            ))}
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-[#F2F6FB]">
        <Container>
          <Reveal>
            <div className="max-w-[680px] mx-auto text-center">
              <h2 className="font-serif text-[26px] text-[#0A1628] mb-3">Still Have Questions?</h2>
              <p className="text-[15px] text-[#2C4160] mb-7 leading-[1.7]">
                Our technical team answers every inquiry within one business day — grade selection, CoA requests, qualification protocols, or custom purity requirements.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#0066CC] text-white px-7 py-3.5 rounded-[8px] text-[14px] font-semibold no-underline hover:bg-[#1A7FEE] transition-colors">
                  Ask Our Technical Team
                </Link>
                <Link href="/blog" className="inline-flex items-center gap-2 border border-[rgba(0,102,204,0.25)] text-[#0055CC] px-7 py-3.5 rounded-[8px] text-[14px] font-medium no-underline hover:bg-[#EEF6FF] transition-colors">
                  Read Technical Articles
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
