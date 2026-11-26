import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import { Container, Eyebrow } from '@/components/ui/index'
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
    <>
      <section className="bg-[#102A43] py-14 text-white lg:py-20">
        <Container>
          <div className="grid min-h-[560px] grid-cols-1 overflow-hidden rounded-2xl bg-[#102A43] lg:grid-cols-[1fr_1.05fr] lg:items-stretch">
            <div className="flex flex-col justify-center px-1 py-10 lg:pr-14">
              <Eyebrow light>Products</Eyebrow>
              <h1 className="mt-5 max-w-[650px] font-serif text-[clamp(38px,5vw,64px)] leading-[1.04] tracking-[-0.8px]">High-Purity Chemical Materials for Advanced Industries</h1>
              <p className="mt-6 max-w-[610px] text-[16px] leading-[1.75] text-white/68">Advanced solvents and specialty chemicals for semiconductor, pharmaceutical, analytical and industrial applications.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#product-database" className="inline-flex h-12 items-center rounded-lg bg-[#1F6B55] px-6 text-[13px] font-semibold text-white no-underline hover:bg-[#2A8068]">Explore products</a>
                <Link href="/contact" className="inline-flex h-12 items-center rounded-lg border border-white/30 px-6 text-[13px] font-semibold text-white no-underline hover:bg-white/10">Request quote</Link>
              </div>
            </div>
            <div className="relative min-h-[360px] overflow-hidden rounded-2xl lg:min-h-[560px]">
              <Image src="/images/puretech/hero.jpg" alt="High-purity chemical production, filling and industrial packaging" fill priority sizes="(max-width:1024px) 100vw, 55vw" className="object-cover" />
            </div>
          </div>
        </Container>
      </section>

      <Suspense fallback={<div className="min-h-[480px] bg-white" />}>
        <ProductsClient />
      </Suspense>
    </>
  )
}
