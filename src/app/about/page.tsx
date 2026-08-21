import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container, CtaBanner, Eyebrow } from '@/components/ui/index'

export const metadata: Metadata = {
  title: 'About PURETECHMATERIALS',
  description: 'PURETECHMATERIALS supplies high-purity solvents, electronic materials and specialty chemical solutions for advanced industries.',
}

const focus = [
  ['Application understanding', 'Begin with the manufacturing step, analytical method or formulation—not only the chemical name.'],
  ['Specification discipline', 'Compare the controlled limits, methods and reporting format needed by the customer.'],
  ['Manufacturing visibility', 'Make the production, testing, packaging and traceability route available for supplier review.'],
  ['Supply planning', 'Discuss sample, routine volume, pack format, destination and change expectations before approval.'],
]

export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-[520px] overflow-hidden bg-[#061d2b] text-white">
        <Image src="/images/puretech/hero.jpg" alt="High-purity chemical materials manufacturing" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061d2b] via-[#061d2b]/92 to-[#061d2b]/18" />
        <Container className="relative z-10 flex min-h-[520px] items-center py-20">
          <div className="max-w-[700px]">
            <Eyebrow light>PURETECHMATERIALS</Eyebrow>
            <h1 className="mt-5 font-serif text-[clamp(34px,4.5vw,55px)] leading-[1.08] tracking-[-0.7px]">High-purity chemical materials for advanced industries</h1>
            <p className="mt-6 max-w-[650px] text-[16px] leading-[1.75] text-white/68">Specialty solvents, electronic materials and custom supply solutions for customers who need product performance, documentation and supply reliability to work together.</p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[360px_1fr]">
            <div>
              <Eyebrow>Our position</Eyebrow>
              <h2 className="mt-3 font-serif text-[31px] leading-tight text-[#0A1628]">A technical supply partner, not simply a long catalogue</h2>
              <p className="mt-5 text-[14px] leading-[1.75] text-[#475467]">We organise the portfolio around the customer’s application, required quality evidence and realistic supply route. That approach is designed for manufacturers, laboratories and specialist distributors serving Europe and North America.</p>
            </div>
            <div className="grid grid-cols-1 gap-px bg-[#DCE3EC] sm:grid-cols-2">
              {focus.map(([title, text], index) => (
                <article key={title} className="bg-white p-7">
                  <span className="font-mono text-[11px] text-[#2F8C67]">0{index + 1}</span>
                  <h3 className="mt-7 text-[15px] font-semibold text-[#0A1628]">{title}</h3>
                  <p className="mt-3 text-[13px] leading-[1.65] text-[#475467]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#F1F5F3] py-16">
        <Container>
          <div className="grid grid-cols-1 gap-px bg-[#D5E0E3] md:grid-cols-3">
            {[
              ['Products', 'Find chemical materials by application, product family, grade, name or CAS.', '/products'],
              ['Manufacturing & quality', 'Review the production route, qualification questions and document framework.', '/manufacturing'],
              ['Custom supply', 'Discuss private label, packaging, specifications and long-term programmes.', '/oem-custom-chemical-solutions'],
            ].map(([title, text, href]) => (
              <Link key={title} href={href} className="group flex min-h-[230px] flex-col bg-white p-7 text-[#0A1628] no-underline hover:bg-[#07182D] hover:text-white">
                <h3 className="text-[16px] font-semibold">{title}</h3>
                <p className="mt-4 flex-1 text-[13px] leading-[1.65] text-[#475467] group-hover:text-white/60">{text}</p>
                <span className="mt-6 text-[12px] font-semibold text-[#12657B] group-hover:text-[#8FC7FF]">Explore →</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner label="Work with us" title={<>Start with a product,<br />application or supply brief.</>} subtitle="Tell us what the material must do and what your approval process needs to see." p1="Start a Discussion" h1="/contact" p2="Explore Applications" h2="/applications" />
    </>
  )
}
