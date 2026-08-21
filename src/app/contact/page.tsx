import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title:'Global Chemical Partnership — RFQ & Technical Enquiry',
  description:'Prepare a detailed PureTech Materials enquiry for product quotation, qualification samples, technical documents, custom packaging or supply programmes.',
}

export default function ContactPage() { return <ContactClient /> }
