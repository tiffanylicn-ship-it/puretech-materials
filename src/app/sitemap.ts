import type { MetadataRoute } from 'next'
import { applicationPages } from '@/lib/application-pages'
import { productCategoryPages, solutionRoutes } from '@/lib/architecture-content'
import { blogPosts } from '@/lib/blog'
import { capabilityPagesV3 } from '@/lib/capability-pages-v3'
import { caseStudies } from '@/lib/case-studies'
import { industries } from '@/lib/industry-content'
import { marketPages } from '@/lib/market-pages'
import { productPagesV3 } from '@/lib/product-pages-v3'

const baseUrl = 'https://puretechmaterials.com'
const lastModified = new Date('2026-08-24')

const primaryRoutes = [
  '/',
  '/products',
  '/applications',
  '/manufacturing',
  '/quality',
  '/oem-custom-chemical-solutions',
  '/markets',
  '/resources',
  '/contact',
  '/about',
  '/global-chemical-supply',
  '/knowledge',
  '/guides',
  '/compliance',
  '/downloads',
  '/faq',
  '/blog',
  '/case-studies',
  '/industries',
  '/solutions',
  '/custom-solutions',
]

function entry(pathname: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] = 'monthly'): MetadataRoute.Sitemap[number] {
  return { url: `${baseUrl}${pathname}`, lastModified, changeFrequency, priority }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries = [
    ...primaryRoutes.map((path, index) => entry(path, index === 0 ? 1 : 0.8, index === 0 ? 'weekly' : 'monthly')),
    ...productCategoryPages.map((page) => entry(`/products/${page.slug}`, 0.85, 'weekly')),
    ...productPagesV3.map((page) => entry(`/products/${page.slug}`, 0.8, 'monthly')),
    ...applicationPages.map((page) => entry(`/applications/${page.slug}`, 0.75, 'monthly')),
    ...capabilityPagesV3.map((page) => entry(`/${page.group}/${page.slug}`, 0.72, 'monthly')),
    ...marketPages.map((page) => entry(`/markets/${page.slug}`, 0.65, 'monthly')),
    ...industries.map((page) => entry(`/industries/${page.slug}`, 0.7, 'monthly')),
    ...solutionRoutes.map((page) => entry(`/solutions/${page.slug}`, 0.7, 'monthly')),
    ...['chemical-oem', 'bulk-supply'].map((slug) => entry(`/custom-solutions/${slug}`, 0.68, 'monthly')),
    ...blogPosts.map((post) => ({ ...entry(`/blog/${post.slug}`, 0.62, 'yearly'), lastModified: new Date(post.date) })),
    ...caseStudies.map((study) => entry(`/case-studies/${study.slug}`, 0.68, 'monthly')),
  ]

  return Array.from(new Map(entries.map((item) => [item.url, item])).values())
}
