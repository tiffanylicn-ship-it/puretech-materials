import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CapabilityPage } from '@/components/capabilities/CapabilityPage'
import { capabilityPagesV3, findCapabilityPage } from '@/lib/capability-pages-v3'
type Params = Promise<{ slug: string }>
export function generateStaticParams() { return capabilityPagesV3.filter((page) => page.group === 'oem').map((page) => ({ slug: page.slug })) }
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> { const { slug } = await params; const page = findCapabilityPage('oem', slug); if (!page) return { title: 'OEM Page Not Found' }; const url = `https://puretechmaterials.com/oem/${slug}`; const image = `https://puretechmaterials.com${page.image}`; return { title: page.seoTitle, description: page.description, alternates: { canonical: url }, openGraph: { title: page.seoTitle, description: page.description, url, images: [image] }, twitter: { card: 'summary_large_image', title: page.seoTitle, description: page.description, images: [image] } } }
export default async function OemDetail({ params }: { params: Params }) { const { slug } = await params; const page = findCapabilityPage('oem', slug); if (!page) notFound(); return <CapabilityPage page={page} /> }
