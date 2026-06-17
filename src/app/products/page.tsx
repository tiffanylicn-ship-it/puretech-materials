import type { Metadata } from 'next'
import { Suspense } from 'react'
import ProductsClient from './ProductsClient'

export const metadata: Metadata = {
  title:'Product Catalog — 42+ Electronic Grade Chemicals G1–G5 | PureTech',
  description:'Browse 42+ products across G1–G5 electronic grades: IPA, PGMEA, NMP, H₂O₂, NH₄OH, TMAH, HCl, H₂SO₄, DMC, acetonitrile and more. SEMI C1 certified. Full CoA per lot.',
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#040D1E]" />}>
      <ProductsClient />
    </Suspense>
  )
}
