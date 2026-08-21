'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'

type DocumentRecord = {
  title: string
  scope: string
  category: string
  grade: string
  type: string
  description: string
}

const documents: DocumentRecord[] = [
  { title: 'Electronic Materials Product Specification', scope: 'Electronic solvents and process chemicals', category: 'Electronic Materials', grade: 'Electronic Grade', type: 'Specification', description: 'Current product- and grade-specific acceptance limits and referenced methods.' },
  { title: 'High-Purity Solvents Product Specification', scope: 'Alcohols, ketones, esters, ethers and other solvents', category: 'High-Purity Solvents', grade: 'Multiple Grades', type: 'Specification', description: 'Controlled specifications selected by product, application and agreed grade.' },
  { title: 'Electronic Materials Technical Data Sheet', scope: 'Product identity, typical properties, application and pack overview', category: 'Electronic Materials', grade: 'Multiple Grades', type: 'TDS', description: 'A product information sheet; confirm that the revision matches the material under review.' },
  { title: 'Safety Data Sheet', scope: 'Product-, market- and language-specific hazard communication', category: 'All Products', grade: 'All Grades', type: 'SDS', description: 'Request the current SDS for the exact product, concentration and destination.' },
  { title: 'Electronic Materials CoA Example', scope: 'Illustrative lot-release format for qualification review', category: 'Electronic Materials', grade: 'Electronic Grade', type: 'CoA Example', description: 'A sample format for aligning reported fields before the first supply lot.' },
  { title: 'High-Purity Solvents CoA Example', scope: 'Illustrative lot-release format for solvent grades', category: 'High-Purity Solvents', grade: 'Multiple Grades', type: 'CoA Example', description: 'Use during qualification to agree result fields, units and conformance statements.' },
  { title: 'Trace Analysis Technical Data Sheet', scope: 'High-purity acids, reagents and water product routes', category: 'Trace Analysis', grade: 'Trace Analysis Grade', type: 'TDS', description: 'Product and method context for contamination-sensitive analytical work.' },
  { title: 'Supplier Qualification Pack', scope: 'Company, manufacturing, quality and change-review information', category: 'Company', grade: 'Not Applicable', type: 'Qualification Pack', description: 'A controlled response assembled around the customer questionnaire and product scope.' },
  { title: 'PURETECHMATERIALS Company Profile', scope: 'Company positioning, portfolio and contact route', category: 'Company', grade: 'Not Applicable', type: 'Company Document', description: 'Current introduction for procurement, distributor and project teams.' },
  { title: 'Manufacturing Overview', scope: 'Purification, filtration, filling and packaging route', category: 'Company', grade: 'Not Applicable', type: 'Company Document', description: 'An engineering overview; product-specific capability remains subject to technical review.' },
  { title: 'Quality & Documentation Overview', scope: 'Specification, testing, release, traceability and document control', category: 'Company', grade: 'Not Applicable', type: 'Company Document', description: 'A qualification-level introduction to the quality and document approach.' },
  { title: 'Product Portfolio', scope: 'Electronic materials, solvents, pharmaceutical and trace-analysis routes', category: 'All Products', grade: 'Multiple Grades', type: 'Portfolio', description: 'Current portfolio overview with products and grades confirmed during enquiry.' },
]

const filters = {
  category: ['All', ...Array.from(new Set(documents.map((item) => item.category)))],
  grade: ['All', ...Array.from(new Set(documents.map((item) => item.grade)))],
  type: ['All', ...Array.from(new Set(documents.map((item) => item.type)))],
}

export function DownloadsClient() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [grade, setGrade] = useState('All')
  const [type, setType] = useState('All')

  const results = useMemo(() => {
    const term = query.trim().toLowerCase()
    return documents.filter((item) => {
      const matchesTerm = !term || [item.title, item.scope, item.description, item.category, item.grade, item.type].join(' ').toLowerCase().includes(term)
      return matchesTerm && (category === 'All' || item.category === category) && (grade === 'All' || item.grade === grade) && (type === 'All' || item.type === type)
    })
  }, [category, grade, query, type])

  const clearFilters = () => { setQuery(''); setCategory('All'); setGrade('All'); setType('All') }

  return (
    <>
      <div className="border border-[#DCE3EC] bg-white p-5 md:p-6">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.3fr_repeat(3,0.75fr)]">
          <label className="block"><span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.12em] text-[#667085]">Search documents</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Product, document or application" className="h-12 w-full border border-[#CBD5E1] px-4 text-[13px] text-[#0A1628] outline-none placeholder:text-[#98A2B3] focus:border-[#12657B]" /></label>
          <Filter label="Product category" value={category} items={filters.category} onChange={setCategory} />
          <Filter label="Grade" value={grade} items={filters.grade} onChange={setGrade} />
          <Filter label="Document type" value={type} items={filters.type} onChange={setType} />
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[#EAECF0] pt-4"><p className="text-[12px] text-[#667085]"><strong className="text-[#0A1628]">{results.length}</strong> matching document routes</p><button type="button" onClick={clearFilters} className="border-0 bg-transparent text-[12px] font-semibold text-[#12657B] hover:underline">Clear filters</button></div>
      </div>

      {results.length > 0 ? <div className="mt-7 overflow-hidden border border-[#DCE3EC] bg-white">{results.map((document, index) => <article key={`${document.title}-${document.scope}`} className="grid grid-cols-1 gap-5 border-b border-[#EAECF0] p-6 last:border-b-0 lg:grid-cols-[54px_1.1fr_1fr_170px] lg:items-center"><span className="font-mono text-[11px] font-semibold text-[#2F8C67]">{String(index + 1).padStart(2, '0')}</span><div><div className="flex flex-wrap gap-2"><span className="bg-[#EAF4F0] px-2 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.08em] text-[#267456]">{document.type}</span><span className="bg-[#EEF3F7] px-2 py-1 font-mono text-[9px] text-[#536B7B]">{document.grade}</span></div><h3 className="mt-3 text-[14.5px] font-semibold text-[#0A1628]">{document.title}</h3><p className="mt-1 text-[11px] text-[#667085]">{document.scope}</p></div><p className="text-[12.8px] leading-[1.68] text-[#475467]">{document.description}</p><Link href={`/contact?subject=${encodeURIComponent(`Document request: ${document.title}`)}`} className="border border-[#12657B] px-4 py-3 text-center text-[11.5px] font-semibold text-[#12657B] no-underline hover:bg-[#F1F8F5]">Request current file →</Link></article>)}</div> : <div className="mt-7 border border-[#DCE3EC] bg-white px-6 py-14 text-center"><h3 className="font-serif text-[25px] text-[#0A1628]">No matching document route</h3><p className="mx-auto mt-3 max-w-[600px] text-[13px] leading-[1.7] text-[#667085]">Clear the filters or ask us for a product-specific file. Some documents are prepared only after the product, grade and market are confirmed.</p><Link href="/contact" className="mt-6 inline-flex bg-[#12657B] px-5 py-3 text-[12.5px] font-semibold text-white no-underline">Ask the document team</Link></div>}
    </>
  )
}

function Filter({ label, value, items, onChange }: { label: string; value: string; items: string[]; onChange: (value: string) => void }) {
  return <label className="block"><span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.12em] text-[#667085]">{label}</span><select value={value} onChange={(event) => onChange(event.target.value)} className="h-12 w-full border border-[#CBD5E1] bg-white px-3 text-[12px] text-[#0A1628] outline-none focus:border-[#12657B]">{items.map((item) => <option key={item}>{item}</option>)}</select></label>
}
