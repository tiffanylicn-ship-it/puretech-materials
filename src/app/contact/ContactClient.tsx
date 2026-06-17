'use client'
import { useState } from 'react'
import { Container, Eyebrow } from '@/components/ui/index'
import { Reveal } from '@/components/ui/Reveal'

const TYPES = [
  'Sample Request (Qualification Lot)',
  'Technical Specification / Compatibility',
  'RFQ / Volume Pricing',
  'Application Support (FAE)',
  'Supply Agreement / Long-term Contract',
  'SDS / Regulatory Documents',
  'Other',
]
const PRODS = [
  'Electronic Grade IPA (EIPA)','Electronic Grade Ethanol','PGMEA','PGME',
  'Acetone (Electronic Grade)','NMP','DMC (Dimethyl Carbonate)',
  'Acetonitrile','Methanol','n-Heptane','THF','DMSO','Other / Multiple Products',
]
const HOW = [
  { title:'Sample Request',   desc:'Qualification lot with full CoA, ICP-MS report, and LPC data for internal process evaluation.' },
  { title:'Technical Support',desc:'Specification questions, grade selection guidance, and compatibility data from our FAE team.' },
  { title:'RFQ & Pricing',    desc:'Volume-based pricing, packaging options, and long-term supply agreement discussions.' },
  { title:'Compliance Docs',  desc:'SDS, REACH declarations, CoA templates, and regulatory documentation for your QMS.' },
]
const CONTACTS = [
  { label:'Email', value:'info@puretechmaterials.com' },
  { label:'Phone', value:'+1 (650) 000-0000' },
  { label:'Hours', value:'Mon–Fri · 8:00 AM – 6:00 PM PST' },
]

const inp = 'w-full px-4 py-3 border border-[rgba(0,102,204,0.2)] rounded-[8px] text-[13.5px] font-[inherit] text-[#0A1628] bg-[#F2F6FB] outline-none transition-all duration-200 focus:border-[#0066CC] focus:shadow-[0_0_0_3px_rgba(0,102,204,0.1)] focus:bg-white placeholder:text-[#8BA8C0]'

export default function ContactClient() {
  const [form, setForm] = useState({
    fname:'',lname:'',email:'',company:'',title:'',type:'',product:'',application:'',message:''
  })
  const [done, setDone]       = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = () => {
    if (!form.fname || !form.email || !form.company) {
      setError('Please fill in First Name, Work Email, and Company.')
      return
    }
    setError('')
    setLoading(true)
    setTimeout(() => { setLoading(false); setDone(true) }, 900)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden"
        style={{ background:'linear-gradient(135deg,#020C1B 0%,#040D1E 60%,#071629 100%)' }}>
        <div className="wafer-bg absolute inset-0 opacity-22 pointer-events-none" />
        <div className="glow bg-[#0055CC]/18 w-[480px] h-[360px]" style={{ top:0,right:'20%' }} />
        <Container className="relative z-10">
          <Eyebrow light>Contact Us</Eyebrow>
          <h1 className="font-serif text-[clamp(28px,4vw,48px)] text-white leading-[1.12] mb-4 tracking-[-0.4px]">
            Talk to Our<br />Technical Team
          </h1>
          <p className="text-[15.5px] leading-[1.72] max-w-[460px]" style={{ color:'rgba(255,255,255,0.62)' }}>
            Whether initiating a qualification, sourcing for production, or needing application support — we respond within one business day.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-14 items-start">

            {/* Left info column */}
            <Reveal>
              <h3 className="text-[17px] font-semibold text-[#0A1628] mb-5">How Can We Help?</h3>
              <div className="space-y-3 mb-8">
                {HOW.map((item,i) => (
                  <div key={i} className="flex gap-3 items-start p-4 rounded-[11px] border border-[rgba(0,102,204,0.1)] bg-[#F2F6FB]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0066CC] flex-shrink-0 mt-1.5" />
                    <div>
                      <h4 className="text-[13px] font-semibold text-[#0A1628] mb-0.5">{item.title}</h4>
                      <p className="text-[12.5px] text-[#2C4160] leading-[1.55]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 mb-8">
                {CONTACTS.map((c,i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="w-px h-full bg-[rgba(0,102,204,0.15)] self-stretch mt-1" />
                    <div>
                      <p className="text-[10px] text-[#506880] uppercase tracking-[0.1em] font-semibold">{c.label}</p>
                      <p className="text-[13.5px] text-[#0A1628] font-medium">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-[13px]"
                style={{ background:'linear-gradient(135deg,#040D1E,#071429)', border:'1px solid rgba(0,102,204,0.22)' }}>
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#4BAAF5] mb-2">Response Commitment</p>
                <p className="text-[13px] leading-[1.65]" style={{ color:'rgba(255,255,255,0.62)' }}>
                  All inquiries answered within <strong style={{ color:'rgba(255,255,255,0.85)' }}>one business day</strong>. Sample requests processed in 3–5 business days depending on destination and product.
                </p>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={80}>
              <div className="bg-white border border-[rgba(0,102,204,0.12)] rounded-[20px] overflow-hidden"
                style={{ boxShadow:'0 4px 28px rgba(4,13,30,0.07)' }}>

                {/* Form header */}
                <div className="px-8 py-5 border-b border-[rgba(0,102,204,0.08)]"
                  style={{ background:'linear-gradient(135deg,#F2F6FB,#E8F0F8)' }}>
                  <h3 className="text-[17px] font-semibold text-[#0A1628]">Send an Inquiry</h3>
                  <p className="text-[12.5px] text-[#506880] mt-0.5">Fields marked * are required</p>
                </div>

                {done ? (
                  <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
                    <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4">
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.2">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <h3 className="text-[20px] font-semibold text-[#0A1628] mb-2">Inquiry Submitted</h3>
                    <p className="text-[14px] text-[#2C4160] max-w-[320px] leading-[1.65]">
                      A member of our technical or commercial team will respond within one business day.
                    </p>
                  </div>
                ) : (
                  <div className="px-8 py-7">
                    {/* Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-[12px] font-semibold text-[#0A1628] mb-1.5">First Name *</label>
                        <input name="fname" value={form.fname} onChange={onChange} placeholder="John" className={inp}/>
                      </div>
                      <div>
                        <label className="block text-[12px] font-semibold text-[#0A1628] mb-1.5">Last Name</label>
                        <input name="lname" value={form.lname} onChange={onChange} placeholder="Smith" className={inp}/>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-[12px] font-semibold text-[#0A1628] mb-1.5">Work Email *</label>
                      <input name="email" type="email" value={form.email} onChange={onChange} placeholder="j.smith@company.com" className={inp}/>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-[12px] font-semibold text-[#0A1628] mb-1.5">Company *</label>
                        <input name="company" value={form.company} onChange={onChange} placeholder="TSMC / Samsung / CATL…" className={inp}/>
                      </div>
                      <div>
                        <label className="block text-[12px] font-semibold text-[#0A1628] mb-1.5">Job Title</label>
                        <input name="title" value={form.title} onChange={onChange} placeholder="Process Engineer" className={inp}/>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-[12px] font-semibold text-[#0A1628] mb-1.5">Inquiry Type *</label>
                        <select name="type" value={form.type} onChange={onChange} className={inp}>
                          <option value="">Select type…</option>
                          {TYPES.map(t=><option key={t}>{t}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[12px] font-semibold text-[#0A1628] mb-1.5">Product of Interest</label>
                        <select name="product" value={form.product} onChange={onChange} className={inp}>
                          <option value="">Select product…</option>
                          {PRODS.map(p=><option key={p}>{p}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-[12px] font-semibold text-[#0A1628] mb-1.5">Application / Process Node</label>
                      <input name="application" value={form.application} onChange={onChange}
                        placeholder="e.g. G5 IPA for post-CMP SRD, PGMEA for ArF litho, DMC for Li-ion electrolyte…"
                        className={inp}/>
                    </div>

                    <div className="mb-5">
                      <label className="block text-[12px] font-semibold text-[#0A1628] mb-1.5">Message</label>
                      <textarea name="message" value={form.message} onChange={onChange} rows={5}
                        placeholder="Describe your requirement, process context, volume, or technical question in detail."
                        className={`${inp} resize-y min-h-[110px]`}/>
                    </div>

                    {error && (
                      <p className="text-[12.5px] text-red-600 mb-4 bg-red-50 border border-red-100 rounded-[8px] px-4 py-2.5">{error}</p>
                    )}

                    <button onClick={submit} disabled={loading}
                      className="w-full py-3.5 rounded-[9px] text-[14.5px] font-semibold border-none cursor-pointer transition-all duration-200 flex items-center justify-center gap-2 text-white"
                      style={{ background:loading?'#5599DD':'#0066CC' }}>
                      {loading ? (
                        <>
                          <svg className="animate-spin" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                            <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Inquiry
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <path d="M2.5 7.5h10M8 3l4.5 4.5L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                          </svg>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-[#8BA8C0] text-center mt-3">
                      We never share your information with third parties.
                    </p>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}
