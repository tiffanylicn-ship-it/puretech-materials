import type { Metadata } from 'next'
import { Suspense } from 'react'
import ProductsClient from './ProductsClient'

export const metadata: Metadata = {
  title: 'High Purity Chemical Materials',
  description: 'Explore high purity solvents, electronic materials, pharmaceutical solvents, trace-analysis chemicals and custom supply programmes by application, grade and packaging.',
  alternates: { canonical: 'https://puretechmaterials.com/products' },
  openGraph: {
    title: 'High Purity Chemical Materials | PURETECHMATERIALS',
    description: 'Find chemical materials by application, grade, product family and packaging route.',
    url: 'https://puretechmaterials.com/products',
    images: [{ url: 'https://puretechmaterials.com/images/puretech/high-purity-solvents.jpg', alt: 'High-purity chemical materials and controlled packaging' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'High Purity Chemical Materials | PURETECHMATERIALS',
    description: 'Find chemical materials by application, grade, product family and packaging route.',
    images: ['https://puretechmaterials.com/images/puretech/high-purity-solvents.jpg'],
  },
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#040D1E]" />}>
      <ProductsClient />
    </Suspense>
  )
}
