import type { Metadata } from 'next'
import Link from 'next/link'
import { Container, Eyebrow, SectionTitle, SectionSub, CtaBanner } from '@/components/ui/index'
import { Reveal } from '@/components/ui/Reveal'
import { resources } from '@/lib/seo-content'

export const metadata: Metadata = {
  title: 'Technical Resources | Electronic Grade Chemical Guides & Spec Sheets | PureTech',
  description: 'Free technical resources: electronic grade chemical buyer guides, IPA grade comparison charts, battery chemical spec sheets, semiconductor wet process checklists.',
}

const TYPE_ICONS: Record<string,string> = {guide:'📖','spec-sheet':'📊',comparison:'⚖️',checklist:'✅'}
const TYPE_LABELS: Record<string,string> = {guide:'Buyer Guide','spec-sheet':'Spec Sheet',comparison:'Comparison',checklist:'Checklist'}

export default function ResourcesPage() {
  return (
    <>
      <section className="relative py-20 overflow-hidden" style={{background:'linear-gradient(135deg,#020C1B 0%,#040D1E 60%,#071629 100%)'}}>
        <div className="grid-bg grid-mask absolute inset-0 pointer-events-none"/>
        <div className="glow bg-[#0055CC]/18 w-[480px] h-[300px]" style={{top:0,left:'45%',transform:'translateX(-50%)'}}/>
        <Container className="relative z-10">
          <Eyebrow light>Technical Resources</Eyebrow>
          <h1 className="font-serif text-[clamp(28px,4vw,48px)] text-white leading-[1.1] mb-4 tracking-[-0.5px]">Free Technical Guides &<br />Specification References</h1>
          <p className="text-[16px] leading-[1.72] max-w-[520px]" style={{color:'rgba(255,255,255,0.58)'}}>
            Practical guides written by process engineers: grade selection, specification interpretation, qualification protocols, and procurement checklists.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <Reveal className="mb-10"><Eyebrow>Downloads & Guides</Eyebrow><SectionTitle>Technical Reference Library</SectionTitle></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {resources.map((res,i)=>(
              <Reveal key={res.slug} delay={i*60}>
                <div className="flex flex-col bg-white border border-[rgba(0,102,204,0.1)] rounded-[16px] p-6 h-full"
                  style={{boxShadow:'0 1px 4px rgba(4,13,30,0.05)'}}>
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-[28px]">{TYPE_ICONS[res.type]}</span>
                    <span className="text-[10.5px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full bg-[#E8F2FF] text-[#0044BB]">{TYPE_LABELS[res.type]}</span>
                  </div>
                  <h2 className="text-[16px] font-semibold text-[#0A1628] leading-snug mb-3">{res.title}</h2>
                  <p className="text-[13.5px] text-[#3A5570] leading-[1.65] flex-1 mb-4">{res.desc}</p>
                  <div className="mb-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#8BA8C0] mb-2">Topics Covered</p>
                    <div className="flex flex-wrap gap-1.5">
                      {res.topics.map(t=><span key={t} className="text-[11px] px-2 py-0.5 rounded-[4px] bg-[#F2F6FB] text-[#506880]">{t}</span>)}
                    </div>
                  </div>
                  <div className="flex gap-3 pt-4" style={{borderTop:'1px solid rgba(0,102,204,0.08)'}}>
                    <Link href="/contact" className="flex-1 py-2.5 text-center text-[13px] font-semibold rounded-[8px] no-underline bg-[#0066CC] text-white hover:bg-[#1A7FEE] transition-colors">Request PDF</Link>
                    <Link href="/blog" className="flex-1 py-2.5 text-center text-[13px] font-medium rounded-[8px] no-underline text-[#0055CC] hover:bg-[#EEF6FF] transition-colors"
                      style={{border:'1px solid rgba(0,102,204,0.22)'}}>Related Articles</Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-[#F2F6FB]">
        <Container>
          <Reveal className="mb-8"><Eyebrow>Technical Blog</Eyebrow><SectionTitle>In-Depth Technical Articles</SectionTitle></Reveal>
          <Reveal delay={60}>
            <div className="flex flex-wrap gap-3">
              {[
                {label:'Electronic Grade IPA G1–G5 Guide',href:'/blog/electronic-grade-ipa-semiconductor-wafer-cleaning'},
                {label:'PGMEA for EUV & ArF Lithography',href:'/blog/pgmea-photoresist-solvent-euv-arf-lithography'},
                {label:'NMP Battery Electrode Slurry',href:'/blog/nmp-battery-electrode-slurry-pvdf-binder'},
                {label:'DMC Li-ion Electrolyte',href:'/blog/dmc-lithium-battery-electrolyte-solvent'},
                {label:'SEMI C1 Standard Explained',href:'/blog/semi-c1-standard-electronic-chemicals-semiconductor'},
                {label:'Marangoni Drying IPA G5',href:'/blog/marangoni-drying-ipa-watermark-free-wafer'},
                {label:'HPLC Acetonitrile LC-MS',href:'/blog/hplc-grade-acetonitrile-pharmaceutical-lc-ms'},
                {label:'Advanced Packaging Solvents',href:'/blog/advanced-packaging-solvents-fowlp-hbm-2.5d'},
                {label:'GaN SiC InP Cleaning Guide',href:'/blog/compound-semiconductor-cleaning-gan-sic-gaas'},
                {label:'Acetone OSAT Backend Cleaning',href:'/blog/electronic-grade-acetone-osat-backend-cleaning'},
              ].map(a=>(
                <Link key={a.href} href={a.href} className="px-4 py-2.5 bg-white border border-[rgba(0,102,204,0.15)] rounded-[9px] text-[13px] font-medium text-[#0055CC] no-underline hover:bg-[#EEF6FF] transition-colors">
                  {a.label} →
                </Link>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaBanner label="Custom Technical Support" title={<>Need a Custom Specification<br />or Technical Document?</>}
        subtitle="Our team prepares application-specific spec sheets, qualification protocols, and CoA templates for your QMS."
        p1="Contact Technical Team" h1="/contact" p2="View FAQ" h2="/faq"/>
    </>
  )
}
