'use client'

import Image from 'next/image'
import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Container, Eyebrow } from '@/components/ui/index'
import { Reveal } from '@/components/ui/Reveal'

const enquiryTypes = [
  'Product quotation',
  'Qualification sample',
  'Technical specification review',
  'SDS / TDS / CoA / declarations',
  'Custom packaging or private label',
  'Distributor or long-term supply programme',
  'Other technical enquiry',
]

const products = [
  'Electronic Grade IPA', 'Electronic Grade Ethanol', 'PGMEA', 'PGME', 'NMP',
  'DMC / EMC / DEC', 'Acetonitrile', 'Methanol', 'Acetone', 'Process acids / bases',
  'Multiple products', 'Other / not yet selected',
]

const inputClass = 'w-full border border-[#C8D5DD] bg-[#F7F9FA] px-4 py-3 text-[13px] text-[#0A1628] outline-none transition-colors placeholder:text-[#98A2B3] focus:border-[#12657B] focus:bg-white'

export default function ContactClient() {
  const [form, setForm] = useState({
    name: '', email: '', company: '', country: '', type: '', product: '', application: '',
    specification: '', packaging: '', volume: '', timing: '', message: '',
  })
  const [error, setError] = useState('')

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!form.name || !form.email || !form.company || !form.type) {
      setError('Please complete your name, work email, company and enquiry type.')
      return
    }
    setError('')
    const subject = `PURETECHMATERIALS enquiry — ${form.product || form.type}`
    const body = [
      `Name: ${form.name}`,
      `Work email: ${form.email}`,
      `Company: ${form.company}`,
      `Country / region: ${form.country}`,
      `Enquiry type: ${form.type}`,
      `Product: ${form.product}`,
      `Application / process: ${form.application}`,
      `Current or target specification: ${form.specification}`,
      `Packaging: ${form.packaging}`,
      `Estimated annual volume: ${form.volume}`,
      `Target timing: ${form.timing}`,
      '',
      form.message,
    ].join('\n')
    window.location.href = `mailto:info@puretechmaterials.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      <section className="relative min-h-[500px] overflow-hidden bg-[#061d2b] text-white">
        <Image src="/images/puretech/hero.jpg" alt="Technical chemical supply discussion" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061d2b] via-[#061d2b]/92 to-[#061d2b]/20" />
        <Container className="relative z-10 flex min-h-[500px] items-center py-20">
          <div className="max-w-[700px]">
            <Eyebrow light>Global chemical partnership</Eyebrow>
            <h1 className="mt-5 font-serif text-[clamp(34px,4.5vw,54px)] leading-[1.08] tracking-[-0.7px]">Bring us the process, specification and supply need</h1>
            <p className="mt-6 max-w-[660px] text-[16px] leading-[1.75] text-white/68">A useful enquiry tells us what the material must do, which limits matter, how it will be packed and when qualification needs to begin.</p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[340px_1fr]">
            <Reveal>
              <div className="lg:sticky lg:top-24">
                <Eyebrow>Before you send</Eyebrow>
                <h2 className="mt-3 font-serif text-[28px] leading-tight text-[#0A1628]">The details that make the first response useful</h2>
                <ul className="mt-7 space-y-4">
                  {[
                    'Product, chemical family or application',
                    'Current or target specification',
                    'Critical analytical or process limits',
                    'Required documents and destination market',
                    'Pack format, sample need and annual volume',
                    'Target qualification or delivery timing',
                  ].map((item) => <li key={item} className="flex gap-3 text-[13px] leading-[1.6] text-[#475467]"><span className="text-[#2F8C67]">—</span>{item}</li>)}
                </ul>
                <div className="mt-8 border-t border-[#DCE3EC] pt-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#667085]">Direct email</p>
                  <a href="mailto:info@puretechmaterials.com" className="mt-2 block text-[14px] font-semibold text-[#12657B]">info@puretechmaterials.com</a>
                  <p className="mt-3 text-[11.5px] leading-[1.6] text-[#667085]">The form opens an email draft in your mail application; it does not upload confidential files to this website.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={70}>
              <form onSubmit={submit} className="border border-[#DCE3EC] bg-white">
                <div className="border-b border-[#DCE3EC] bg-[#F1F5F3] px-7 py-5">
                  <h2 className="text-[18px] font-semibold text-[#0A1628]">Prepare an enquiry email</h2>
                  <p className="mt-1 text-[12px] text-[#667085]">Required fields are marked with *</p>
                </div>
                <div className="space-y-5 p-7">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field label="Name *"><input name="name" value={form.name} onChange={onChange} className={inputClass} autoComplete="name" /></Field>
                    <Field label="Work email *"><input name="email" type="email" value={form.email} onChange={onChange} className={inputClass} autoComplete="email" /></Field>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field label="Company *"><input name="company" value={form.company} onChange={onChange} className={inputClass} autoComplete="organization" /></Field>
                    <Field label="Country / region"><input name="country" value={form.country} onChange={onChange} className={inputClass} autoComplete="country-name" /></Field>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field label="Enquiry type *"><select name="type" value={form.type} onChange={onChange} className={inputClass}><option value="">Select…</option>{enquiryTypes.map((item) => <option key={item}>{item}</option>)}</select></Field>
                    <Field label="Product or family"><select name="product" value={form.product} onChange={onChange} className={inputClass}><option value="">Select…</option>{products.map((item) => <option key={item}>{item}</option>)}</select></Field>
                  </div>
                  <Field label="Application / process"><input name="application" value={form.application} onChange={onChange} placeholder="What will the material be used for?" className={inputClass} /></Field>
                  <Field label="Current or target specification"><textarea name="specification" value={form.specification} onChange={onChange} rows={3} placeholder="List critical parameters, methods or an incumbent grade." className={`${inputClass} resize-y`} /></Field>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <Field label="Packaging"><input name="packaging" value={form.packaging} onChange={onChange} placeholder="e.g. 20 L" className={inputClass} /></Field>
                    <Field label="Annual volume"><input name="volume" value={form.volume} onChange={onChange} placeholder="Estimate" className={inputClass} /></Field>
                    <Field label="Target timing"><input name="timing" value={form.timing} onChange={onChange} placeholder="Month / quarter" className={inputClass} /></Field>
                  </div>
                  <Field label="Additional context"><textarea name="message" value={form.message} onChange={onChange} rows={4} placeholder="Document checklist, sample quantity, qualification plan or commercial notes." className={`${inputClass} resize-y`} /></Field>
                  {error && <p className="border border-[#FDA29B] bg-[#FEF3F2] px-4 py-3 text-[12.5px] text-[#B42318]">{error}</p>}
                  <button type="submit" className="w-full bg-[#12657B] px-6 py-3.5 text-[14px] font-semibold text-white hover:bg-[#2F8C67]">Open email draft</button>
                  <p className="text-center text-[11px] leading-[1.55] text-[#667085]">Review the draft and add attachments in your email application before sending.</p>
                </div>
              </form>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block text-[12px] font-semibold text-[#0A1628]">{label}<span className="mt-1.5 block font-normal">{children}</span></label>
}
