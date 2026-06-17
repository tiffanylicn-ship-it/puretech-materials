import type { Metadata } from 'next'
import Link from 'next/link'
import { Container, Eyebrow, SectionTitle, SectionSub, CtaBanner } from '@/components/ui/index'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title:'Applications — Semiconductor, Battery, Display & Pharma Lab',
  description:'PureTech electronic chemicals serve Logic, Memory, Advanced Packaging, EV Battery, Display, Compound Semiconductor, and HPLC lab markets.',
}

const MARKETS = [
  {
    id:'logic', num:'01',
    title:'Logic & High-Performance Computing',
    sub:'FinFET / GAA / EUV · <3nm Nodes',
    tags:['FinFET','GAA','EUV','<3nm','Sub-5nm'],
    desc:'Sub-3nm logic and gate-all-around (GAA) devices require total metal contamination below 0.1 ppb per element. Our SEMI G5 IPA, ethanol, acetone, and PGMEA are EUV-compatible and validated for post-FEOL etch rinse, BEOL copper barrier rinse, Marangoni drying, photomask cleaning, and FOUP maintenance.',
    chems:['EIPA G5','Ethanol G4','Acetone G4','PGMEA G4','n-Heptane G4'],
    links:[{l:'IPA G5',h:'/product/eipa'},{l:'Ethanol',h:'/product/ethanol'},{l:'PGMEA',h:'/product/pgmea'},{l:'Acetone',h:'/product/acetone'}],
  },
  {
    id:'memory', num:'02',
    title:'DRAM & 3D NAND Flash Memory',
    sub:'High-Volume · IBC / Bulk Supply',
    tags:['DRAM','3D NAND','High Volume','Bulk IBC'],
    desc:'Memory fabs consume IPA and cleaning solvents in high volumes across dozens of wet cleaning steps per wafer pass. PureTech delivers lot-to-lot consistency with CoA on every shipment. IPA and acetone support multi-step CMP post-clean and final rinse sequences in DRAM capacitor and 3D NAND channel hole fabrication.',
    chems:['EIPA G4/G5','Acetone G3','Ethanol G3','NMP G3'],
    links:[{l:'IPA',h:'/product/eipa'},{l:'Acetone',h:'/product/acetone'},{l:'NMP',h:'/product/nmp'}],
  },
  {
    id:'packaging', num:'03',
    title:'Advanced & Heterogeneous Packaging',
    sub:'FOWLP / HBM / 2.5D / 3D-IC / CoW',
    tags:['FOWLP','HBM','2.5D','3D-IC','CoW/WoW'],
    desc:'Fan-out wafer-level packaging, chip-on-wafer, 2.5D interposer, and 3D-IC stacking require precision solvent cleaning. PGMEA and PGME support RDL patterning lithography; NMP dissolves thick polyimide precursors for HDI substrates; IPA provides contamination-free substrate cleaning at every stage.',
    chems:['PGMEA G4','PGME G4','NMP G4','EIPA G4','Acetone G3'],
    links:[{l:'PGMEA',h:'/product/pgmea'},{l:'PGME',h:'/product/pgme'},{l:'NMP',h:'/product/nmp'}],
  },
  {
    id:'battery', num:'04',
    title:'EV Lithium-Ion Battery',
    sub:'NMC / LFP / NCA · Electrolyte & Electrode Slurry',
    tags:['Li-ion','NMC','LFP','Electrolyte','PVDF Slurry'],
    desc:'Electronic grade DMC is a critical co-solvent in LiPF₆-based electrolytes (EC/DMC/EMC system). G5 grade DMC with <0.1 ppb metals and ≤10 ppm water ensures minimal LiPF₆ hydrolysis and optimal ionic conductivity. NMP dissolves PVDF binder for NMC and LFP cathode slurry coating in EV gigafactory production lines.',
    chems:['DMC G4/G5','NMP G4','Ethanol G3','DMSO G3'],
    links:[{l:'DMC',h:'/product/dmc'},{l:'NMP',h:'/product/nmp'},{l:'Ethanol',h:'/product/ethanol'}],
  },
  {
    id:'display', num:'05',
    title:'Display & OLED',
    sub:'TFT-LCD / AMOLED / MicroLED / Flexible',
    tags:['TFT-LCD','AMOLED','MicroLED','Flexible Display'],
    desc:'PGMEA and PGME are the primary solvents for positive photoresist in TFT-LCD array patterning. DMSO and NMP serve as organic light-emitting layer coating solvents in OLED inkjet printing. IPA provides final substrate cleaning. Electronic grade purity ensures zero residue contamination of pixel electrodes.',
    chems:['PGMEA G3','PGME G3','NMP G3','DMSO G3','EIPA G3'],
    links:[{l:'PGMEA',h:'/product/pgmea'},{l:'DMSO',h:'/product/dmso'},{l:'NMP',h:'/product/nmp'}],
  },
  {
    id:'compound', num:'06',
    title:'Compound Semiconductor & Photonics',
    sub:'GaN / SiC / InP / GaAs / Si Photonics / VCSEL',
    tags:['GaN','SiC','InP','GaAs','Si Photonics','VCSEL'],
    desc:'GaN power devices, SiC MOSFETs, InP HEMTs, and GaAs solar cells require halide-free IPA with <1 ppb Cl⁻ and F⁻ to prevent surface pitting and ohmic contact degradation. n-Heptane G4 is used for GaN-on-SiC MOCVD reactor cleaning; ethanol for LED and VCSEL device cleaning.',
    chems:['EIPA G4','Ethanol G3','n-Heptane G4','Acetone G3'],
    links:[{l:'IPA',h:'/product/eipa'},{l:'n-Heptane',h:'/product/n-heptane'},{l:'Ethanol',h:'/product/ethanol'}],
  },
  {
    id:'pharma', num:'07',
    title:'HPLC / Pharmaceutical & Bioanalytical',
    sub:'Drug Analysis / QC / LC-MS / Bioanalytical',
    tags:['HPLC','LC-MS','Pharma QC','Bioanalytical'],
    desc:'LC-MS grade acetonitrile is the gold standard reverse-phase mobile phase for pharmaceutical API analysis. HPLC-gradient methanol and ethanol meet strict UV absorbance requirements. Anhydrous THF and DCM support Grignard reactions, GPC polymer analysis, and Fmoc/Boc peptide synthesis. n-Hexane for food fat extraction per ISO 6492.',
    chems:['Acetonitrile LC-MS','Methanol HPLC-G','THF HPLC','DCM Pharma','n-Hexane HPLC'],
    links:[{l:'Acetonitrile',h:'/product/acetonitrile'},{l:'Methanol',h:'/product/methanol'},{l:'THF',h:'/product/thf'}],
  },
]

const PROCESS_MAP = [
  { step:'RCA SC-1 (APM)',     chem:'IPA rinse after APM',    role:'Organic & particle removal',      prod:'EIPA G4/G5' },
  { step:'RCA SC-2 (HPM)',     chem:'IPA rinse after HPM',    role:'Metal ion removal rinse',          prod:'EIPA G4/G5' },
  { step:'Piranha (SPM)',      chem:'Acetone rinse assist',   role:'Photoresist & organic strip',      prod:'Acetone G4' },
  { step:'Resist EBR Coat',   chem:'PGME / PGMEA',           role:'Edge bead removal & EBR coat',     prod:'PGME G4/G5' },
  { step:'ArF/EUV Litho',     chem:'PGMEA primary solvent',  role:'Photoresist formulation',          prod:'PGMEA G4/G5' },
  { step:'NTD Development',    chem:'Butyl acetate solvent',  role:'Negative-tone develop (EUV)',      prod:'BuOAc G4' },
  { step:'Thick PR Strip',    chem:'NMP / Acetone',          role:'Post-etch resist removal',         prod:'NMP G4' },
  { step:'PI/BCB Coating',    chem:'NMP solvent',            role:'Polyimide precursor coating',      prod:'NMP G4/G5' },
  { step:'CMP Post-Clean',    chem:'IPA SRD',                role:'Brush-scrub spin-rinse-dry',       prod:'EIPA G4/G5' },
  { step:'Marangoni Dry',     chem:'IPA G5 vapor',           role:'Stiction-free final dry',          prod:'EIPA G5' },
  { step:'Li-Battery Slurry', chem:'NMP',                    role:'PVDF binder dissolution',          prod:'NMP G4/G5' },
  { step:'Electrolyte Mix',   chem:'DMC co-solvent',         role:'LiPF₆ in EC/DMC/EMC',             prod:'DMC G4/G5' },
  { step:'HPLC Analysis',     chem:'MeCN / MeOH',            role:'Reverse-phase mobile phase',       prod:'ACN LC-MS' },
]

export default function ApplicationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden"
        style={{ background:'linear-gradient(135deg,#020C1B 0%,#040D1E 60%,#0A1F3A 100%)' }}>
        <div className="grid-bg grid-mask absolute inset-0 pointer-events-none" />
        <div className="glow bg-[#0055CC]/22 w-[550px] h-[380px]" style={{ top:'-60px',left:'50%',transform:'translateX(-50%)' }} />
        <Container className="relative z-10">
          <Eyebrow light>Applications</Eyebrow>
          <h1 className="font-serif text-[clamp(30px,4.5vw,52px)] text-white leading-[1.1] mb-4 tracking-[-0.5px]">
            Process Chemistry for<br /><span className="grad-text">7 Industry Segments</span>
          </h1>
          <p className="text-[16px] leading-[1.72] max-w-[520px]" style={{ color:'rgba(255,255,255,0.62)' }}>
            From sub-3nm logic wafer cleaning to EV battery electrolyte and HPLC pharmaceutical analysis — PureTech provides the right grade for every application.
          </p>
        </Container>
      </section>

      {/* Markets */}
      <section className="py-20">
        <Container>
          <Reveal className="mb-14">
            <Eyebrow>Market Applications</Eyebrow>
            <SectionTitle>Application by Industry Segment</SectionTitle>
            <SectionSub>Each market segment lists the key chemistry and links to full product specification sheets.</SectionSub>
          </Reveal>

          <div className="space-y-4">
            {MARKETS.map((m,i) => (
              <Reveal key={m.id} delay={i*40}>
                <div id={m.id} className="bg-white border border-[rgba(0,102,204,0.1)] rounded-[18px] p-7 md:p-9"
                  style={{ boxShadow:'0 1px 3px rgba(4,13,30,0.04)' }}>
                  <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 items-start">

                    {/* Number */}
                    <div className="flex-shrink-0">
                      <span className="font-mono text-[32px] font-bold" style={{ color:'rgba(0,102,204,0.18)' }}>{m.num}</span>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-[18px] font-semibold text-[#0A1628] mb-0.5">{m.title}</h3>
                      <p className="text-[12px] font-mono text-[#506880] mb-3">{m.sub}</p>
                      <p className="text-[13.5px] text-[#2C4160] leading-[1.68] mb-4 max-w-[640px]">{m.desc}</p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {m.tags.map(t=>(
                          <span key={t} className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#E8F2FF] text-[#0044BB]">{t}</span>
                        ))}
                      </div>
                      <div>
                        <p className="text-[10px] text-[#506880] uppercase tracking-[0.1em] font-semibold mb-2">Key Chemistry</p>
                        <div className="flex flex-wrap gap-1.5">
                          {m.chems.map(c=>(
                            <span key={c} className="text-[11px] font-mono px-2.5 py-1 rounded-[6px]"
                              style={{ background:'rgba(0,102,204,0.07)', color:'#0044BB', border:'1px solid rgba(0,102,204,0.15)' }}>
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Product links */}
                    <div className="flex flex-col gap-2 min-w-[130px]">
                      {m.links.map(l=>(
                        <Link key={l.h} href={l.h}
                          className="block px-4 py-2 text-[12.5px] font-semibold text-[#0066CC] no-underline rounded-[8px] text-center transition-all hover:bg-[#0066CC] hover:text-white"
                          style={{ border:'1px solid rgba(0,102,204,0.25)' }}>
                          {l.l} →
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Process mapping */}
      <section className="py-20 bg-[#F2F6FB]">
        <Container>
          <Reveal className="mb-10">
            <Eyebrow>Process Reference</Eyebrow>
            <SectionTitle>Chemical-to-Process Mapping</SectionTitle>
            <SectionSub>Which PureTech product to specify for each process step — from fab to battery factory.</SectionSub>
          </Reveal>
          <Reveal delay={60}>
            <div className="overflow-hidden rounded-[14px] border border-[rgba(0,102,204,0.1)]">
              <div className="overflow-x-auto">
                <table className="w-full stbl border-collapse">
                  <thead>
                    <tr>
                      <th style={{ minWidth:'160px' }}>Process Step</th>
                      <th style={{ minWidth:'140px' }}>Chemistry</th>
                      <th style={{ minWidth:'180px' }}>Role</th>
                      <th style={{ minWidth:'120px' }}>PureTech Product</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PROCESS_MAP.map((row,i) => (
                      <tr key={i}>
                        <td className="font-semibold text-[#0A1628]">{row.step}</td>
                        <td><span className="font-mono text-[12px] text-[#0044BB]">{row.chem}</span></td>
                        <td className="text-[#2C4160]">{row.role}</td>
                        <td><span className="font-mono text-[12px] font-bold text-[#0066CC]">{row.prod}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaBanner
        label="Application Support"
        title={<>Process-Specific<br />Technical Guidance</>}
        subtitle="Our FAE team provides compatibility data, qualification protocols, and on-site process engineering support."
        p1="Contact FAE Team"    h1="/contact"
        p2="View All Products"   h2="/products"
      />
    </>
  )
}
