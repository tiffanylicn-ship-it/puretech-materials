import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title:'Contact — Request Sample, RFQ & Technical Support',
  description:'Contact PureTech Materials for sample requests, technical inquiries, RFQ, and supply agreements. Response within one business day.',
}

export default function ContactPage() { return <ContactClient /> }
