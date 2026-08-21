import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container, CtaBanner, Eyebrow } from '@/components/ui/index'
import { Reveal } from '@/components/ui/Reveal'
import { solutionRoutes } from '@/lib/architecture-content'

export const metadata: Metadata = {
  title: 'High-Purity Chemical Solutions by Application',
  description: 'Solution-first routes for semiconductor, pharmaceutical, analytical, industrial and custom chemical supply requirements.',
}

export default function SolutionsPage() {
  return (
    <>
      <section className="relative min-h-[540px] overflow-hidden bg-[#061d2b] text-white">
        <Image src="/images/puretech/hero.jpg" alt="High-purity chemical solutions and manufacturing" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061d2b] via-[#061d2b]/92 to-[#061d2b]/18" />
        <Container className="relative z-10 flex min-h-[540px] items-center py-20">
          <div className="max-w-[720px]">
            <Eyebrow light>Solutions</Eyebrow>
            <h1 className="mt-5 font-serif text-[clamp(34px,4.5vw,56px)] leading-[1.08] tracking-[-0.7px]">Start with the application. Build the product shortlist from there.</h1>
            <p className="mt-6 max-w-[660px] text-[16px] leading-[1.75] text-white/68">Five routes for customers who know the manufacturing or analytical problem they need to solve, even when they have not selected a chemical grade yet.</p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal>
            <Eyebrow>Solution routes</Eyebrow>
            <h2 className="mt-3 font-serif text-[31px] text-[#0A1628]">Choose the use closest to your project</h2>
          </Reveal>
          <div className="mt-11 grid grid-cols-1 gap-5 md:grid-cols-2">
            {solutionRoutes.map((solution, index) => (
              <Reveal key={solution.slug} delay={index * 55} className={index === solutionRoutes.length - 1 ? 'md:col-span-2' : ''}>
                <Link href={`/solutions/${solution.slug}`} className={`group grid h-full overflow-hidden border border-[#DCE3EC] bg-white text-[#0A1628] no-underline hover:border-[#9FB8C6] ${index === solutionRoutes.length - 1 ? 'md:grid-cols-[360px_1fr]' : ''}`}>
                  <div className={`relative ${index === solutionRoutes.length - 1 ? 'min-h-[250px]' : 'min-h-[260px]'}`}>
                    <Image src={solution.image} alt={`${solution.title} chemical application`} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
                  </div>
                  <div className="p-7">
                    <div className="flex items-start justify-between gap-4">
                      <span className="font-mono text-[11px] text-[#2F8C67]">0{index + 1}</span>
                      <span className="text-[12px] font-semibold text-[#12657B]">Open solution →</span>
                    </div>
                    <h2 className="mt-7 font-serif text-[25px]">{solution.title}</h2>
                    <p className="mt-2 text-[12px] font-medium text-[#667085]">{solution.subline}</p>
                    <p className="mt-4 line-clamp-3 text-[13px] leading-[1.7] text-[#475467]">{solution.overview}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#F1F5F3] py-16">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <Eyebrow>Know the chemical already?</Eyebrow>
              <h2 className="mt-3 font-serif text-[29px] text-[#0A1628]">Use the product database for names, grades and specifications</h2>
            </div>
            <Link href="/products" className="bg-[#12657B] px-6 py-3.5 text-[13px] font-semibold text-white no-underline hover:bg-[#2F8C67]">Open products</Link>
          </div>
        </Container>
      </section>

      <CtaBanner label="Technical discussion" title={<>No catalogue category<br />matches the project?</>} subtitle="Describe the process, current material, critical limits, documents, pack and qualification timing." p1="Discuss Your Requirement" h1="/contact" p2="View Manufacturing" h2="/manufacturing" />
    </>
  )
}
