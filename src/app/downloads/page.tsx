import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container, CtaBanner, Eyebrow } from '@/components/ui/index'
import { DownloadsClient } from './DownloadsClient'

export const metadata: Metadata = {
  title: 'Chemical TDS, SDS, CoA & Specifications | Document Centre',
  description: 'Search current document routes for chemical specifications, TDS, SDS, CoA examples and supplier qualification information.',
  alternates: { canonical: 'https://puretechmaterials.com/downloads' },
}

export default function DownloadsPage() {
  return (
    <>
      <section className="relative min-h-[520px] overflow-hidden bg-[#061d2b] text-white">
        <Image src="/images/puretech/manufacturing.jpg" alt="Chemical manufacturing documents, specifications and packaging records" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061d2b] via-[#061d2b]/92 to-[#061d2b]/24" />
        <Container className="relative z-10 flex min-h-[520px] items-center py-20"><div className="max-w-[760px]"><Eyebrow light>Technical document centre</Eyebrow><h1 className="mt-5 font-serif text-[clamp(39px,5vw,60px)] leading-[1.03] tracking-[-0.8px]">Find the document route for the exact material</h1><p className="mt-7 max-w-[690px] text-[16px] leading-[1.78] text-white/72">Search specifications, TDS, SDS, CoA examples and company documents by category, grade and file type. Current controlled files remain request-based until the product and market are confirmed.</p><Link href="#document-finder" className="mt-9 inline-flex bg-white px-6 py-3.5 text-[13px] font-semibold text-[#08283b] no-underline hover:bg-[#DDEDE4]">Search document routes</Link></div></Container>
      </section>

      <section className="border-b border-[#D8E5DF] bg-[#EFF7F3] py-8"><Container><div className="grid grid-cols-1 gap-4 lg:grid-cols-[170px_1fr] lg:items-start"><p className="font-mono text-[10px] font-semibold uppercase tracking-[0.13em] text-[#267456]">Document control</p><p className="max-w-[920px] text-[13.5px] leading-[1.72] text-[#315848]">The catalogue below describes available document routes; it does not publish unverified or obsolete files. We will confirm the current revision, product, grade, language and destination before supplying a controlled document.</p></div></Container></section>

      <section id="document-finder" className="scroll-mt-24 bg-[#F7F9FC] py-20"><Container><div className="mb-10 grid grid-cols-1 gap-7 lg:grid-cols-[400px_1fr]"><div><Eyebrow>Search & filter</Eyebrow><h2 className="mt-3 font-serif text-[33px] leading-tight text-[#0A1628]">Technical files without the revision guesswork</h2></div><p className="max-w-[760px] text-[14px] leading-[1.78] text-[#475467]">Use the filters to identify the right document family. The request link carries the document name to the enquiry route; add product, grade, intended use and destination so the team can validate it.</p></div><DownloadsClient /></Container></section>

      <CtaBanner label="Document support" title={<>Cannot find the file<br />your review requires?</>} subtitle="Tell us the product, CAS, grade, destination, document type and target review date." p1="Request a Document" h1="/contact" p2="Compliance Guidance" h2="/compliance" />
    </>
  )
}
