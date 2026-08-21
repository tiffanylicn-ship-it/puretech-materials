import type { Metadata } from 'next'
import { Suspense } from 'react'
import ProductsClient from './ProductsClient'

export const metadata: Metadata = {
  title:'Chemical Product Finder by Application | PureTech Materials',
  description:'Find solvents and process chemicals by wafer cleaning, lithography, battery, HPLC, LC-MS, pharmaceutical processing and precision-cleaning applications.',
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#040D1E]" />}>
      <ProductsClient />
    </Suspense>
  )
}
