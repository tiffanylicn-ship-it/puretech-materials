import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: { default:'PureTech Materials | Semiconductor Electronic Chemicals', template:'%s | PureTech Materials' },
  description:'World-class ultra-pure electronic chemicals for Fab, Foundry, OSAT, EV battery, and advanced packaging. SEMI C1 · ISO 9001. Electronic grade IPA, ethanol, PGMEA, acetone, NMP, DMC.',
  keywords:['electronic grade IPA','PGMEA','semiconductor wet chemicals','SEMI C1','ultra pure solvents','photoresist solvent','NMP','DMC battery grade','HPLC solvents'],
}

export default function RootLayout({ children }:{ children:React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-[68px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
