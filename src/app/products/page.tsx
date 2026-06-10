import type { Metadata } from 'next'
import { Suspense } from 'react'
import ProductsClient from './ProductsClient'

export const metadata: Metadata = {
  title:'Product Catalog — 23 Electronic & Analytical Grade Chemicals',
  description:'Browse all 23 products: Electronic grade IPA (G2–G5), PGMEA, PGME, acetone, ethanol, NMP, DMC, acetonitrile and more. SEMI C1 certified.',
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#040D1E]" />}>
      <ProductsClient />
    </Suspense>
  )
}
