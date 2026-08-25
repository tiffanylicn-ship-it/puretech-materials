// PureTech Materials — SEO Content Factory Data Library

export interface IndustryPage {
  slug:string; title:string; metaTitle:string; metaDescription:string
  headline:string; subline:string; heroStat:string; heroStatLabel:string
  intro:string; challenges:{title:string;desc:string}[]
  chemicals:{name:string;grade:string;use:string;href:string}[]
  processSteps:{step:string;chemical:string;grade:string;detail:string}[]
  faqs:{q:string;a:string}[]; relatedSolutions:string[]; keywords:string[]
}

export const industries: IndustryPage[] = [
  {
    slug:'semiconductor',
    title:'Semiconductor & IC Fabrication',
    metaTitle:'Semiconductor Wet Chemicals Supplier | Electronic Grade IPA, PGMEA, H₂O₂ | PureTech',
    metaDescription:'Complete wet chemical portfolio for semiconductor fabs: SEMI G2–G5 IPA, PGMEA, H₂O₂, NH₄OH, HCl, H₂SO₄. SEMI C1 certified. ISO Class 3 fill. Full CoA & ICP-MS per lot.',
    headline:'Wet Chemicals for Every Node',
    subline:'From 180nm mature node to sub-3nm EUV — complete SEMI C1 certified chemistry',
    heroStat:'<0.1 ppb', heroStatLabel:'Total metals G5 grade',
    intro:'Semiconductor device fabrication demands the highest purity wet chemicals at every process step. PureTech Materials supplies the complete range of SEMI C1 certified electronic grade solvents, process acids, oxidants, and bases for logic foundry, memory, OSAT, and compound semiconductor applications.',
    challenges:[
      {title:'Metal Contamination',desc:'Even sub-ppb metallic impurities at gate oxide interfaces cause threshold voltage shift and yield loss. G4/G5 grade with ICP-MS verification is mandatory for all front-end process steps.'},
      {title:'Particle Control',desc:'Post-CMP and post-etch rinse steps require particle counts below 10 ct/mL at ≥0.5 μm. In-line LPC certification during ISO Class 3 fill ensures contamination-free delivery.'},
      {title:'Supply Consistency',desc:'Lot-to-lot variation in trace metal levels causes process excursions. PureTech SPC-controlled manufacturing delivers ≤10% variation on all critical parameters.'},
      {title:'EUV Compatibility',desc:'EUV resist solvents require total metals below 0.1 ppb and acidity below 5 ppm to prevent scanner optic contamination. G5 PGMEA and G5 IPA are validated for EUV tool maintenance.'},
    ],
    chemicals:[
      {name:'Electronic Grade IPA',grade:'G1–G5',use:'Wafer rinse, CMP post-clean, Marangoni drying',href:'/product/eipa'},
      {name:'PGMEA',grade:'G1–G5',use:'ArF/EUV photoresist primary solvent, EBR',href:'/product/pgmea'},
      {name:'H₂O₂ 30%',grade:'G2–G5',use:'RCA SC-1/SC-2, piranha solution, CMP oxidizer',href:'/product/hydrogen-peroxide'},
      {name:'NH₄OH',grade:'G2–G5',use:'RCA SC-1 (APM), particle removal',href:'/product/ammonium-hydroxide'},
      {name:'HCl',grade:'G2–G5',use:'RCA SC-2 (HPM), metal ion removal',href:'/product/hydrochloric-acid'},
      {name:'H₂SO₄',grade:'G2–G5',use:'Piranha (SPM), photoresist strip',href:'/product/sulfuric-acid'},
      {name:'TMAH 2.38%',grade:'G2–G5',use:'Photoresist development',href:'/product/tmah'},
      {name:'NMP',grade:'G1–G5',use:'Thick resist strip, polyimide coating',href:'/product/nmp'},
    ],
    processSteps:[
      {step:'Piranha (SPM)',chemical:'H₂SO₄ + H₂O₂',grade:'G4',detail:'Hot sulfuric-peroxide mixture strips organic and photoresist residues before diffusion and post-implant.'},
      {step:'RCA SC-1 (APM)',chemical:'NH₄OH + H₂O₂ + H₂O',grade:'G4/G5',detail:'Ammonium-peroxide mixture removes particles and organic contamination. 1:1:5 ratio at 65–75°C.'},
      {step:'RCA SC-2 (HPM)',chemical:'HCl + H₂O₂ + H₂O',grade:'G4/G5',detail:'Hydrochloric-peroxide removes metal ion contamination. 1:1:6 ratio at 65–75°C.'},
      {step:'Litho EBR / Coat',chemical:'PGMEA / PGME',grade:'G4/G5',detail:'Edge bead removal and primary solvent for ArF immersion and EUV photoresist.'},
      {step:'Resist Strip',chemical:'NMP / Acetone',grade:'G4',detail:'Thick positive photoresist stripping. NMP G4 at 80°C for thick films.'},
      {step:'CMP Post-Clean',chemical:'IPA (SRD)',grade:'G4/G5',detail:'Brush scrub and spin-rinse-dry after Cu/W/SiO₂ CMP.'},
      {step:'Marangoni Dry',chemical:'IPA G5 Vapor',grade:'G5',detail:'Watermark-free final drying. Essential for sub-5nm and MEMS.'},
    ],
    faqs:[
      {q:'What SEMI grade IPA do I need for 7nm node CMP post-clean?',a:'G4 (≥99.999%) or G5 (≥99.9999%) IPA is required for 7nm and below. G4 provides total metals ≤0.5 ppb and particles ≤10 ct/mL. G5 is specified for Marangoni drying and EUV tool maintenance where metals must be below 0.1 ppb per element.'},
      {q:'What is the difference between SEMI C1 G4 and G5?',a:'G4 (SEMI C1 Tier C): assay ≥99.999%, metals ≤0.5 ppb, particles ≤10/mL, water ≤10 ppm. G5 (SEMI C1 Tier D, 6N): assay ≥99.9999%, metals <0.1 ppb, particles ≤5/mL, water ≤5 ppm. G5 is specified for sub-7nm nodes, EUV, and Marangoni drying.'},
      {q:'How do you verify metal content in electronic grade IPA?',a:'ICP-MS quantifies 28 individual elements per production lot including Na, K, Fe, Cu, Cr, Ni, Al, and Zn. Detection limits are below 0.01 ppb for critical elements. Every lot ships with a CoA containing actual measured ICP-MS data — not pass/fail statements.'},
      {q:'What packaging sizes are available for electronic grade IPA?',a:'PureTech supplies IPA in 4L, 18L, 200L drums, 1000L IBCs, and bulk tanker. N₂ blanket is maintained throughout transport for G4/G5 grades. Dedicated tanker with full N₂ blanketing available for fabs consuming >50 MT/month.'},
    ],
    relatedSolutions:['ipa-for-wafer-cleaning','pgmea-for-euv-lithography'],
    keywords:['semiconductor wet chemicals','electronic grade IPA semiconductor','SEMI C1 supplier','wafer cleaning chemicals','semiconductor chemical manufacturer China','buy SEMI G5 IPA','RCA cleaning chemicals','CMP post-clean IPA'],
  },
  {
    slug:'ev-battery',
    title:'EV Battery & Energy Storage',
    metaTitle:'Battery Grade DMC NMP EMC Supplier | EV Battery Chemicals | PureTech',
    metaDescription:'Electronic grade DMC, NMP, EMC for Li-ion EV battery electrolyte and electrode slurry. G4/G5 purity with <0.05 ppb Fe/Ni. Bulk IBC supply for gigafactory.',
    headline:'Complete EV Battery Chemical Supply',
    subline:'G4/G5 electrolyte solvents and electrode slurry chemicals for NMC, LFP, NCA cells',
    heroStat:'18% CAGR', heroStatLabel:'Battery chemical market growth',
    intro:'The global EV battery market demands ultra-pure process chemicals for electrolyte formulation and cathode/anode slurry preparation. PureTech supplies battery-grade DMC, EMC, DEC, NMP, and ethanol with the metal purity and moisture control required by premium cell manufacturers.',
    challenges:[
      {title:'Water Contamination',desc:'Even 20 ppm water in DMC causes LiPF₆ hydrolysis generating HF that attacks cathode surface and degrades SEI layer. G5 DMC (≤10 ppm H₂O) prevents this reaction.'},
      {title:'Metal Impurities',desc:'Fe and Ni above 0.1 ppb in electrolyte solvents catalyze electrolyte decomposition and deposit as metallic particles that trigger internal shorts.'},
      {title:'Chloride Control',desc:'Chloride ions (Cl⁻) from DMC synthesis react with LiPF₆ to accelerate decomposition and corrode stainless steel cell components. G5 DMC specifies Cl⁻ ≤50 ppb.'},
      {title:'NMP Purity',desc:'Metal contamination in NMP transfers to PVDF binder film and cathode active material, creating trap sites that reduce cycle life. G5 NMP (<0.05 ppb Fe/Ni) for NMC-811 premium cells.'},
    ],
    chemicals:[
      {name:'DMC (Dimethyl Carbonate)',grade:'G1–G5',use:'Li-ion electrolyte co-solvent (EC/DMC/EMC)',href:'/product/dmc'},
      {name:'EMC (Ethyl Methyl Carbonate)',grade:'G2–G5',use:'Low-temp electrolyte co-solvent',href:'/product/emc'},
      {name:'DEC (Diethyl Carbonate)',grade:'G1–G5',use:'High-temp stable electrolyte',href:'/product/dec'},
      {name:'NMP',grade:'G1–G5',use:'PVDF binder dissolution, cathode slurry',href:'/product/nmp'},
      {name:'Electronic Ethanol',grade:'G1–G5',use:'Cell exterior clean, electrode prep',href:'/product/ethanol'},
    ],
    processSteps:[
      {step:'PVDF Dissolution',chemical:'NMP G4/G5',grade:'G4/G5',detail:'Dissolve PVDF binder in anhydrous NMP at 60–80°C for 4–8 hours before cathode slurry preparation.'},
      {step:'Cathode Slurry Mix',chemical:'NMP G4',grade:'G4',detail:'NMC-811 or LFP active material + carbon black mixed into PVDF/NMP solution. Target viscosity 3,000–8,000 mPa·s.'},
      {step:'Electrolyte Mix',chemical:'DMC + EMC + EC',grade:'G4/G5',detail:'1.0 M LiPF₆ in EC/DMC/EMC (1:1:1 v/v). All solvents ≤10–20 ppm H₂O before LiPF₆ addition.'},
      {step:'Cell Assembly Clean',chemical:'IPA / Ethanol G3',grade:'G3',detail:'Cell housing and electrode tab cleaning before assembly in dry room (dew point ≤-40°C).'},
    ],
    faqs:[
      {q:'What DMC grade is required for NMC-811 EV battery electrolyte?',a:'NMC-811 premium cells require G4 DMC (≤20 ppm H₂O, ≤0.5 ppb total metals, ≤100 ppb Cl⁻) as minimum. For high-cycle-life cells (>1,000 full cycles), G5 grade (≤10 ppm H₂O, ≤50 ppb Cl⁻) is specified by leading cell manufacturers.'},
      {q:'Why is Fe and Ni control critical in battery chemicals?',a:'Fe contamination above 0.1 ppb causes metallic iron deposition on graphite anodes during charging, nucleating lithium dendrites over hundreds of cycles. G5 NMP and DMC with <0.05 ppb Fe/Ni is specified for long-cycle-life premium cells.'},
    ],
    relatedSolutions:['nmp-for-battery-electrode'],
    keywords:['battery grade DMC supplier','NMP for battery electrode','EV battery chemicals','Li-ion electrolyte solvent','PVDF binder NMP','DMC G4 G5 manufacturer'],
  },
  {
    slug:'display-panel',
    title:'Display & OLED Manufacturing',
    metaTitle:'Display Panel Chemicals | PGMEA TMAH NMP for TFT-LCD OLED | PureTech',
    metaDescription:'PGMEA, TMAH, NMP, and IPA for TFT-LCD array lithography, OLED organic layer, and display glass cleaning. G1–G5 grades available.',
    headline:'Chemistry for Every Display Technology',
    subline:'TFT-LCD · AMOLED · MicroLED · Flexible Display',
    heroStat:'Gen 10.5', heroStatLabel:'Substrate size supported',
    intro:'Display panel manufacturing requires precision photolithography solvents, developers, and organic coating chemicals at every array patterning and organic deposition step.',
    challenges:[
      {title:'Large-Area Uniformity',desc:'Gen 10.5 substrates require photoresist solvent with uniform evaporation profile. PGMEA with controlled acidity and water ensures uniform film.'},
      {title:'OLED Inkjet Printing',desc:'OLED organic layer inkjet printing requires ultra-pure DMSO and NMP as carrier solvents with zero metallic contamination.'},
    ],
    chemicals:[
      {name:'PGMEA',grade:'G1–G5',use:'TFT photoresist, OLED PDL coating',href:'/product/pgmea'},
      {name:'TMAH 2.38%',grade:'G2–G5',use:'Positive photoresist development',href:'/product/tmah'},
      {name:'NMP',grade:'G1–G5',use:'PI alignment layer, OLED inkjet',href:'/product/nmp'},
      {name:'DMSO',grade:'G2–G5',use:'OLED organic EL layer coating',href:'/product/dmso'},
      {name:'IPA',grade:'G1–G5',use:'Glass substrate cleaning, final rinse',href:'/product/eipa'},
    ],
    processSteps:[
      {step:'Glass Substrate Clean',chemical:'IPA G2/G3',grade:'G2/G3',detail:'Display glass substrate cleaning before thin-film deposition.'},
      {step:'Gate Metal Litho',chemical:'PGMEA G2/G3',grade:'G2/G3',detail:'I-line or G-line positive PR patterning of gate metal layer.'},
      {step:'PR Development',chemical:'TMAH 2.38% G2',grade:'G2',detail:'Positive photoresist development. Standard concentration for LCD array.'},
      {step:'PI Alignment Layer',chemical:'NMP G2/G3',grade:'G2/G3',detail:'Polyimide alignment layer coating for LCD. PI precursor in NMP, spin-coated, cured.'},
    ],
    faqs:[
      {q:'What PGMEA grade is needed for TFT-LCD array lithography?',a:'TFT-LCD typically uses G1 or G2 PGMEA (≥99.0–99.9% purity, metals ≤50–10 ppb). The I-line and G-line wavelengths are less sensitive to metal contamination than EUV. G3 PGMEA is recommended for AMOLED applications.'},
    ],
    relatedSolutions:[],
    keywords:['display panel chemicals','TFT-LCD chemicals','OLED chemicals supplier','PGMEA display grade','TMAH developer supplier'],
  },
  {
    slug:'pharmaceutical-lab',
    title:'Pharmaceutical & HPLC Laboratory',
    metaTitle:'HPLC LC-MS Grade Solvents | Acetonitrile Methanol DCM | PureTech',
    metaDescription:'HPLC-G, LC-MS grade acetonitrile, methanol, DCM, THF, n-hexane for pharmaceutical analysis. Low UV absorbance, controlled acrylonitrile, full lot CoA.',
    headline:'Analytical Grade Solvents for Pharma QC',
    subline:'LC-MS · HPLC · GC · Dissolution testing',
    heroStat:'ICH Q3C', heroStatLabel:'Residual solvent standard',
    intro:'Pharmaceutical analytical laboratories require the highest quality HPLC and LC-MS grade solvents for API characterization, impurity profiling, dissolution testing, and bioanalytical assays.',
    challenges:[
      {title:'UV Baseline Stability',desc:'Gradient HPLC methods are sensitive to UV-absorbing impurities. HPLC-G grade acetonitrile (UV 254nm ≤0.005 AU) prevents baseline drift.'},
      {title:'LC-MS Background',desc:'LC-MS/MS quantitation at pg/mL concentrations requires mobile phase with zero chemical background. LC-MS grade ACN (acrylonitrile ≤1 ppm) minimizes noise.'},
    ],
    chemicals:[
      {name:'Acetonitrile',grade:'HPLC-G / LC-MS',use:'RP-HPLC mobile phase, LC-MS/MS',href:'/product/acetonitrile'},
      {name:'Methanol',grade:'HPLC-G / LC-MS',use:'RP-HPLC mobile phase, dissolution',href:'/product/methanol'},
      {name:'DCM',grade:'Pharma / HPLC-P',use:'Peptide synthesis, extraction',href:'/product/dcm'},
      {name:'THF',grade:'HPLC / Anhydrous',use:'GPC/SEC, Grignard reactions',href:'/product/thf'},
      {name:'n-Hexane',grade:'HPLC / Pharma',use:'Fat extraction (ISO 6492), NP-HPLC',href:'/product/n-hexane'},
    ],
    processSteps:[
      {step:'RP-HPLC Mobile Phase',chemical:'Acetonitrile HPLC-G',grade:'HPLC-G',detail:'UV detection at 210–280nm. HPLC-G provides UV 210nm ≤0.10 AU for flat gradient baseline.'},
      {step:'LC-MS/MS Bioanalysis',chemical:'Acetonitrile LC-MS',grade:'LC-MS',detail:'Plasma protein precipitation and LC-MS/MS mobile phase. Acrylonitrile ≤1 ppm minimizes background.'},
      {step:'Peptide Synthesis',chemical:'DCM Pharma',grade:'Pharma',detail:'Fmoc/Boc solid-phase peptide synthesis. UV 254nm ≤0.01 AU.'},
    ],
    faqs:[
      {q:'What is the difference between HPLC grade and LC-MS grade acetonitrile?',a:'HPLC grade: UV 210nm ≤0.20 AU, water ≤50 ppm, acrylonitrile ≤5 ppm. Suitable for UV-based HPLC. LC-MS grade: UV 210nm ≤0.10 AU, water ≤30 ppm, acrylonitrile ≤1 ppm. Essential for mass spectrometry — lower impurity profile reduces chemical background noise in MRM channels.'},
    ],
    relatedSolutions:[],
    keywords:['HPLC grade acetonitrile supplier','LC-MS grade solvent','pharmaceutical grade solvents','analytical grade methanol','DCM pharmaceutical grade'],
  },
]

export interface SolutionPage {
  slug:string; title:string; metaTitle:string; metaDescription:string
  chemical:string; application:string; intro:string; whyMatters:string
  specs:{param:string;requirement:string;why:string}[]
  gradeGuide:{grade:string;spec:string;when:string}[]
  faqs:{q:string;a:string}[]
  relatedProducts:{name:string;href:string}[]
  keywords:string[]
}

export const solutions: SolutionPage[] = [
  {
    slug:'ipa-for-wafer-cleaning',
    title:'IPA for Semiconductor Wafer Cleaning',
    metaTitle:'IPA for Semiconductor Wafer Cleaning | SEMI G4 G5 IPA Spec | PureTech',
    metaDescription:'Electronic grade IPA (G1–G5) for semiconductor wafer cleaning: post-CMP, RCA final rinse, Marangoni drying. Grade selection guide for every node.',
    chemical:'Electronic Grade IPA', application:'Semiconductor Wafer Cleaning',
    intro:'Isopropyl alcohol is the highest-volume wet process solvent in semiconductor manufacturing, consumed at every node from 28nm to sub-3nm in wafer cleaning, CMP post-clean, and Marangoni drying sequences.',
    whyMatters:'IPA purity directly impacts yield. Even sub-ppb metallic contamination in rinse IPA deposits on gate oxide surfaces, causing threshold voltage shifts. Particle redeposition from low-LPC IPA creates killer defects at post-CMP and post-etch steps.',
    specs:[
      {param:'Assay (GC-FID)',requirement:'≥99.0% (G1) to ≥99.9999% (G5)',why:'Higher assay = lower organic impurity background in rinse'},
      {param:'Total Metals (ICP-MS)',requirement:'≤50 ppb (G1) to <0.1 ppb (G5)',why:'Metal ions deposit on gate oxide and cause Vt shift'},
      {param:'Particles ≥0.5 μm (LPC)',requirement:'≤500/mL (G1) to ≤5/mL (G5)',why:'Particles cause post-CMP yield excursions and etch defects'},
      {param:'Water (Karl Fischer)',requirement:'≤500 ppm (G1) to ≤5 ppm (G5)',why:'Excess water reduces Marangoni drying efficiency'},
      {param:'Acetone (GC)',requirement:'≤500 ppm (G1) to ≤1 ppm (G5)',why:'Acetone disrupts Marangoni surface tension gradient'},
    ],
    gradeGuide:[
      {grade:'G1',spec:'≥99.0%, metals ≤50 ppb',when:'PCB cleaning, display glass, LED component, solar pre-clean'},
      {grade:'G2',spec:'≥99.9%, metals ≤10 ppb',when:'Legacy 200mm fab, ≥250nm node, compound semi substrate'},
      {grade:'G3',spec:'≥99.99%, metals ≤2 ppb',when:'150–250nm node, GaN/SiC substrate clean'},
      {grade:'G4',spec:'≥99.999%, metals ≤0.5 ppb',when:'14–65nm node, CMP post-clean, general 300mm fab'},
      {grade:'G5',spec:'≥99.9999%, metals <0.1 ppb',when:'Sub-7nm, EUV, Marangoni drying, EUV tool maintenance'},
    ],
    faqs:[
      {q:'What IPA grade is required for sub-7nm CMP post-clean?',a:'G5 (SEMI C1 Tier D) is specified: ≥99.9999% purity, metals <0.1 ppb, particles ≤5 ct/mL at ≥0.5 μm, water ≤5 ppm. G4 is acceptable for 14–28nm applications.'},
      {q:'Why does Marangoni drying require G5 IPA specifically?',a:'Marangoni drying relies on surface tension difference between IPA (22 mN/m) and water (72 mN/m). G5 IPA requires: water ≤5 ppm (maintains surface tension gradient), acetone ≤1 ppm (prevents Marangoni flow instability), metals <0.1 ppb (prevents surface deposition). Lower grades cause watermarks and stiction.'},
      {q:'What packaging is available for electronic grade IPA?',a:'4L (qualification), 18L (R&D), 200L drum (production), 1000L IBC (high-volume), bulk tanker (gigafactory). All G4/G5 containers use N₂ blanket fill.'},
    ],
    relatedProducts:[
      {name:'Electronic Grade IPA (EIPA)',href:'/product/eipa'},
      {name:'Acetone G3/G4',href:'/product/acetone'},
      {name:'NH₄OH G4/G5',href:'/product/ammonium-hydroxide'},
    ],
    keywords:['IPA for wafer cleaning','semiconductor IPA specification','SEMI G5 IPA wafer','CMP post clean IPA','IPA Marangoni drying','buy IPA for semiconductor'],
  },
  {
    slug:'pgmea-for-euv-lithography',
    title:'PGMEA for EUV & ArF Immersion Lithography',
    metaTitle:'PGMEA for EUV ArF Lithography | Photoresist Solvent Spec | PureTech',
    metaDescription:'G4/G5 PGMEA for EUV CAR, ArF immersion photoresist, metal oxide resist, and edge bead removal. SEMI C12 certified.',
    chemical:'PGMEA', application:'EUV & ArF Immersion Lithography',
    intro:'PGMEA is the dominant primary solvent in all advanced photoresist formulations from KrF through EUV, maintained by its unique combination of polymer solvency, controlled evaporation, and TMAH developer compatibility.',
    whyMatters:'EUV resist solvents are in direct contact with scanner optics via outgassing. Any metallic impurity deposits on EUV reflective optics during exposure. Total metals below 0.1 ppb (G5) is mandatory for EUV resist formulation.',
    specs:[
      {param:'Assay (GC)',requirement:'≥99.0% (G1) to ≥99.999% (G5)',why:'Minimizes organic by-product background in resist film'},
      {param:'Total Metals (ICP-MS)',requirement:'≤50 ppb (G1) to <0.1 ppb (G5)',why:'EUV optic contamination risk from outgassed metal species'},
      {param:'Acetic Acid (GC)',requirement:'≤50 ppm (G1) to ≤5 ppm (G5)',why:'Acidity affects PAG stability in chemically amplified resists'},
      {param:'Water (KF)',requirement:'≤500 ppm (G1) to ≤10 ppm (G5)',why:'Excess water affects resist film thickness uniformity during spin'},
      {param:'Peroxide (Iodometric)',requirement:'≤5 ppm (G1) to ≤0.5 ppm (G5)',why:'Peroxides degrade polymer backbone and reduce resist shelf life'},
    ],
    gradeGuide:[
      {grade:'G1',spec:'≥99.0%, metals ≤50 ppb',when:'I-line (365nm), G-line (436nm), TFT-LCD, PCB dry film'},
      {grade:'G2/G3',spec:'≥99.9–99.99%, metals ≤10–2 ppb',when:'KrF 248nm, 90–180nm node, mature DRAM'},
      {grade:'G4',spec:'≥99.99%, metals ≤0.5 ppb',when:'ArF 193nm, ArF immersion (193i), 14–90nm'},
      {grade:'G5',spec:'≥99.999%, metals <0.1 ppb',when:'EUV 13.5nm, high-NA EUV, metal oxide resist (MOR)'},
    ],
    faqs:[
      {q:'Is PGMEA or PGME better as EBR solvent?',a:'Both are used for EBR, often as mixtures. PGME (BP 120°C) evaporates faster and is preferred for EBR where rapid solvent removal is needed. PGMEA (BP 146°C) is preferred as the primary resist solvent for uniform film formation. Many fabs use PGME/PGMEA (10–30% PGME) mixtures for EBR.'},
      {q:'What is SEMI C12?',a:'SEMI C12 applies specifically to photoresist process solvents including PGMEA, PGME, n-propyl acetate, and n-butyl acetate. Beyond C1 metal and particle limits, C12 adds: acidity as acetic acid, peroxide content, color (APHA), and photoresist compatibility testing. PureTech PGMEA G4/G5 is fully SEMI C12 certified.'},
    ],
    relatedProducts:[
      {name:'PGMEA G4/G5',href:'/product/pgmea'},
      {name:'PGME G4/G5',href:'/product/pgme'},
    ],
    keywords:['PGMEA for EUV lithography','PGMEA photoresist solvent','ArF immersion PGMEA','EUV resist solvent specification','PGMEA SEMI C12','buy PGMEA semiconductor'],
  },
  {
    slug:'nmp-for-battery-electrode',
    title:'NMP for Li-Battery Cathode Electrode Slurry',
    metaTitle:'NMP for Li-Battery Cathode Slurry | PVDF Binder | PureTech',
    metaDescription:'Battery grade NMP G4/G5 for NMC, LFP, NCA cathode slurry PVDF binder dissolution. Fe/Ni <0.05 ppb, water ≤20 ppm. Bulk IBC supply.',
    chemical:'NMP (N-Methyl-2-pyrrolidone)', application:'Li-Battery Cathode Electrode Slurry',
    intro:'NMP is the irreplaceable solvent for PVDF binder dissolution in lithium-ion battery cathode electrode manufacturing, enabled by its unique Hansen solubility parameters that match PVDF fluoropolymer.',
    whyMatters:'Metal contamination in NMP transfers directly to PVDF binder film and cathode active material. Iron particles nucleate lithium dendrites during cycling, causing capacity fade and internal short-circuit risk in EV cells.',
    specs:[
      {param:'Assay (GC)',requirement:'≥99.0% (G1) to ≥99.999% (G5)',why:'Ensures consistent PVDF dissolution and slurry rheology'},
      {param:'Water (Karl Fischer)',requirement:'≤1000 ppm (G1) to ≤20 ppm (G5)',why:'Excess water causes PVDF precipitation and coating defects'},
      {param:'Fe (ICP-MS)',requirement:'≤50 ppb (G1) to <0.05 ppb (G5)',why:'Fe deposits initiate lithium dendrite growth → internal short'},
      {param:'Ni (ICP-MS)',requirement:'≤50 ppb (G1) to <0.05 ppb (G5)',why:'Ni contamination in LFP cathode reduces cycle stability'},
      {param:'Color (APHA)',requirement:'≤20 Hazen (G1) to ≤5 Hazen (G5)',why:'Discoloration indicates oxidative degradation by-products'},
    ],
    gradeGuide:[
      {grade:'G1',spec:'≥99.0%, metals ≤100 ppb',when:'Standard ESS cells, R&D, non-critical anode binder'},
      {grade:'G2/G3',spec:'≥99.9–99.99%, metals ≤10–2 ppb',when:'Consumer Li-ion cells, e-bike, power tool batteries'},
      {grade:'G4',spec:'≥99.99%, Fe/Ni ≤0.2 ppb',when:'EV NMC/LFP standard grade, automotive cells'},
      {grade:'G5',spec:'≥99.999%, Fe/Ni <0.05 ppb',when:'NMC-811 premium cells, >1,000 cycle life requirement'},
    ],
    faqs:[
      {q:'Can I use G1 NMP for LFP cathode slurry?',a:'G1 NMP (metals ≤100 ppb) is acceptable for standard-grade LFP cells used in ESS and e-bike applications with cycle life requirements below 500 cycles. For automotive LFP cells requiring >2,000 cycles, G4 NMP (Fe ≤0.2 ppb) is recommended.'},
      {q:'What NMP concentration is used for PVDF dissolution?',a:'Typical PVDF concentration is 6–12% w/w in NMP, dissolved at 60–80°C for 4–8 hours with high-shear mixing. Target slurry viscosity 3,000–8,000 mPa·s for blade coating on aluminum current collector foil.'},
    ],
    relatedProducts:[
      {name:'NMP G4/G5',href:'/product/nmp'},
      {name:'DMC G4/G5',href:'/product/dmc'},
      {name:'EMC G4/G5',href:'/product/emc'},
    ],
    keywords:['NMP for battery electrode','NMP PVDF binder dissolution','NMP cathode slurry','battery grade NMP supplier','NMP Fe Ni specification'],
  },
]

export interface FaqItem {
  id:string; category:string; question:string; answer:string; keywords:string[]
}

export const faqItems: FaqItem[] = [
  {id:'what-is-electronic-grade-ipa',category:'Grade & Specification',question:'What is electronic grade IPA and how is it different from industrial IPA?',answer:'Electronic grade IPA is purified to SEMI C1 standard levels with total metallic impurities below 50 ppb (G1) to 0.1 ppb (G5), liquid particle counts below 500 ct/mL (G1) to 5 ct/mL (G5), and water content below 500 ppm (G1) to 5 ppm (G5). Industrial grade IPA contains metals at ppm levels with no particle specification — unsuitable for semiconductor device fabrication where sub-ppb metal contamination causes yield loss.',keywords:['electronic grade IPA','industrial IPA difference','SEMI C1 IPA']},
  {id:'semi-c1-tiers',category:'Grade & Specification',question:'What is the difference between SEMI C1 G1, G2, G3, G4, and G5?',answer:'SEMI C1 defines five electronic grade tiers: G1 (≥99.0%, metals ≤50 ppb) for PCB and display; G2 (≥99.9%, ≤10 ppb) for mature 180nm+ nodes; G3 (≥99.99%, ≤2 ppb) for 45–180nm; G4 (≥99.999%, ≤0.5 ppb) for 7–45nm; G5 (≥99.9999%, <0.1 ppb) for sub-7nm, EUV, and Marangoni drying. Each tier verified by ICP-MS (28 elements), in-line LPC, and Karl Fischer titration.',keywords:['SEMI C1 grades','G1 G2 G3 G4 G5','electronic grade tiers']},
  {id:'how-to-read-coa',category:'Quality & Documentation',question:'What must be on a Certificate of Analysis (CoA) for electronic grade chemicals?',answer:'A compliant CoA must include: lot number and date; claimed SEMI tier (G1–G5); GC assay (actual % not just pass/fail); individual ICP-MS data for all 28 elements with actual measured values in ppb; LPC particle count (actual count ± uncertainty); Karl Fischer water; instrument serial numbers and calibration dates; analyst signature and QA release. Pass/fail statements without actual data are insufficient for semiconductor QMS qualification.',keywords:['CoA electronic grade','certificate of analysis semiconductor','ICP-MS CoA']},
  {id:'ipa-marangoni',category:'Process Applications',question:'Why does Marangoni drying require G5 IPA specifically?',answer:'Marangoni drying uses the surface tension difference between IPA (22 mN/m) and water (72 mN/m) to sweep water off wafers without droplet evaporation. G5 IPA is required because: (1) water ≤5 ppm maintains maximum surface tension gradient; (2) acetone ≤1 ppm prevents Marangoni flow instability; (3) metals <0.1 ppb prevents surface metal deposition. Lower grades cause watermarks, stiction, and metal contamination.',keywords:['Marangoni drying IPA G5','watermark-free drying','G5 IPA Marangoni']},
  {id:'dmc-water',category:'Battery Applications',question:'Why is water content so critical in battery grade DMC?',answer:'LiPF₆ reacts with water to form HF: LiPF₆ + H₂O → LiF + POF₃ + 2HF. Even 20 ppm water in DMC generates enough HF to attack the NMC cathode surface, dissolve transition metals, degrade the SEI layer, and corrode aluminum current collectors. G4 DMC (≤20 ppm H₂O) is the minimum for EV applications; G5 (≤10 ppm) for premium cells. All DMC must be stored in dry rooms (dew point ≤-40°C) after opening.',keywords:['DMC water content battery','LiPF6 hydrolysis HF','battery electrolyte water']},
  {id:'packaging',category:'Supply & Logistics',question:'What packaging sizes and order quantities are available?',answer:'PureTech supplies: 1L/4L bottles (R&D qualification), 18–20L carboys (small fab/pilot), 200L drums (standard production), 1000L IBCs (high-volume), bulk tanker (gigafactory). G4/G5 grades use N₂ blanket fill. Minimum order: 200L for production grades; 1L for qualification. Blanket purchase agreements with weekly IBC delivery for fabs consuming >20 MT/month.',keywords:['electronic grade chemical packaging','IPA 200L drum','semiconductor chemical bulk supply']},
  {id:'qualification',category:'Qualification',question:'What is the typical qualification protocol for electronic grade chemicals?',answer:'Standard protocol: (1) CoA review — verify all parameters against fab spec; (2) Incoming QC — split-sample analysis of 3 lots; (3) Process qualification — 25 wafers through target process, measure particle count, metal contamination by TXRF/VPD-ICP-MS, film uniformity; (4) Statistical comparison — demonstrate equivalence to qualified incumbent; (5) Safety stock — 30-day minimum. Typical timeline: 6–16 weeks depending on process sensitivity.',keywords:['chemical qualification protocol','semiconductor chemical qualification','incoming QC semiconductor']},
  {id:'semi-c12',category:'Grade & Specification',question:'What additional requirements does SEMI C12 add for PGMEA?',answer:'SEMI C12 applies specifically to photoresist process solvents. Beyond C1 metal and particle limits, C12 adds: acidity as acetic acid (≤20 ppm G4); peroxide content as H₂O₂ (≤1 ppm G4); color (APHA ≤5 G4); specific impurities (residual PGME in PGMEA ≤50 ppm G4); and photoresist compatibility testing. PureTech PGMEA G4/G5 is fully SEMI C12 certified.',keywords:['SEMI C12 PGMEA','photoresist solvent SEMI standard','SEMI C12 requirements']},
]

export interface Resource {
  slug:string; title:string; type:'guide'|'spec-sheet'|'comparison'|'checklist'
  desc:string; topics:string[]; keywords:string[]
}

export const resources: Resource[] = [
  {slug:'electronic-grade-chemical-buyers-guide',title:"Electronic Grade Chemical Buyer's Guide",type:'guide',desc:'Complete guide to specifying, qualifying, and procuring electronic grade solvents for semiconductor fabs. Covers SEMI C1 tier selection, CoA requirements, supplier qualification protocol.',topics:['SEMI C1 grade selection','CoA requirements','supplier qualification','procurement checklist'],keywords:['electronic grade chemical buying guide','how to buy semiconductor chemicals','SEMI C1 procurement']},
  {slug:'ipa-grade-comparison-chart',title:'IPA Grade Comparison: G1 vs G2 vs G3 vs G4 vs G5',type:'comparison',desc:'Side-by-side specification comparison of all five electronic grade IPA tiers including purity, metals, particles, water, node compatibility, and typical applications.',topics:['G1 IPA specification','G2 IPA spec','G3 IPA spec','G4 IPA spec','G5 IPA specification'],keywords:['IPA grade comparison G1 G2 G3 G4 G5','electronic grade IPA specification table','SEMI C1 IPA tiers']},
  {slug:'battery-chemical-specification-guide',title:'Battery Chemical Specification Guide: DMC, NMP, EMC',type:'spec-sheet',desc:'Technical specification guide for battery-grade DMC, NMP, EMC, and DEC covering water content limits, metal impurity requirements, chloride control, and grade selection for NMC, LFP, NCA cells.',topics:['DMC specification','NMP battery grade','EMC electrolyte','battery chemical water content'],keywords:['battery chemical specification','DMC NMP specification guide','EV battery chemical spec']},
  {slug:'semiconductor-wet-process-checklist',title:'Semiconductor Wet Process Chemical Checklist',type:'checklist',desc:'Process-by-process checklist mapping the correct chemical grade to each wet process step: pre-clean, RCA, photolithography, etch, CMP post-clean, and Marangoni drying.',topics:['RCA cleaning chemicals','CMP post-clean IPA','photoresist solvent selection','Marangoni drying IPA'],keywords:['semiconductor wet process checklist','chemical selection guide fab','wafer cleaning chemical grade']},
]
