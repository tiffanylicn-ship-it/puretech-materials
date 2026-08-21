export interface SolutionRoute {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  headline: string
  subline: string
  image: string
  overview: string
  applications: { title: string; detail: string }[]
  products: { id: string; label: string; use: string }[]
  reviewPoints: string[]
}

export const solutionRoutes: SolutionRoute[] = [
  {
    slug: 'semiconductor',
    title: 'Semiconductor & Electronics',
    metaTitle: 'High-Purity Chemicals for Semiconductor Manufacturing',
    metaDescription: 'Process-led selection of electronic solvents and wet chemicals for wafer cleaning, lithography, packaging and precision electronics.',
    headline: 'High-purity solvents for semiconductor processing',
    subline: 'Wafer clean · lithography · advanced packaging · precision electronics',
    image: '/images/puretech/electronic-materials.jpg',
    overview: 'Semiconductor enquiries should begin with the point of chemical contact and the contamination budget for that step. We connect the process conversation to a focused product set, then review the customer specification, analytical methods, packaging and point-of-use route.',
    applications: [
      { title: 'Wafer cleaning', detail: 'Rinse, post-process clean and drying discussions built around the actual surface and sequence.' },
      { title: 'Photoresist processing', detail: 'Solvent and developer selection around resist compatibility, water, acidity, residue and coating behaviour.' },
      { title: 'Advanced packaging', detail: 'Cleaning, coating and rework routes for substrates, redistribution layers and polymer processes.' },
      { title: 'Chemical dilution & delivery', detail: 'Review concentration, wetted materials, filtration, container and transfer controls together.' },
    ],
    products: [
      { id: 'eipa', label: 'Electronic Grade IPA', use: 'Cleaning, rinse and solvent-assisted drying studies' },
      { id: 'pgmea', label: 'PGMEA', use: 'Resist formulation, coating and edge-bead removal' },
      { id: 'pgme', label: 'PGME', use: 'Lithography blends and process cleaning' },
      { id: 'nmp', label: 'NMP', use: 'Resist strip, rework and polyimide processes' },
      { id: 'ethanol', label: 'Electronic Grade Ethanol', use: 'Precision cleaning and formulation work' },
    ],
    reviewPoints: ['Exact process step and contact surface', 'Current controlled specification or incumbent data', 'Critical metals, particles, water, anions and residue', 'Container, closure, filter and point-of-use connection'],
  },
  {
    slug: 'pharmaceutical',
    title: 'Pharmaceutical Manufacturing',
    metaTitle: 'Pharmaceutical Manufacturing Solvents & Supply',
    metaDescription: 'Solvent supply for pharmaceutical synthesis, work-up, extraction and controlled manufacturing, with documentation and traceability review.',
    headline: 'Process solvents for global pharmaceutical manufacturing',
    subline: 'Synthesis · work-up · extraction · controlled production',
    image: '/images/puretech/pharma-gmp.jpg',
    overview: 'A pharmaceutical solvent is selected around its manufacturing role, residual-solvent strategy, material specification and quality-system requirements. We keep process-solvent supply separate from the very different question of chromatographic mobile-phase performance.',
    applications: [
      { title: 'API processing', detail: 'Solvents for reaction, work-up and isolation reviewed against the process and residual-solvent controls.' },
      { title: 'Extraction', detail: 'Partitioning, recovery, residue and material compatibility considered at intended scale.' },
      { title: 'Cleaning processes', detail: 'Use, contact materials, drying and site safety controls defined before product selection.' },
      { title: 'Supply qualification', detail: 'Specification, traceability, CoA format, declarations and change terms organised for review.' },
    ],
    products: [
      { id: 'ethanol', label: 'Ethanol', use: 'Process, extraction and cleaning applications' },
      { id: 'ipa', label: 'Isopropyl Alcohol', use: 'Process cleaning and manufacturing use' },
      { id: 'acetone', label: 'Acetone', use: 'Work-up, cleaning and synthesis routes' },
      { id: 'methanol', label: 'Methanol', use: 'Synthesis, extraction and analytical workflows' },
      { id: 'ethyl-acetate', label: 'Ethyl Acetate', use: 'Extraction and process work-up' },
      { id: 'dmso', label: 'DMSO', use: 'Specialty formulation and synthesis work' },
    ],
    reviewPoints: ['Exact manufacturing use and contact stage', 'Residual-solvent and impurity requirements', 'Specification, CoA and traceability expectations', 'Pack, annual volume, market and change-notification terms'],
  },
  {
    slug: 'analytical-testing',
    title: 'Analytical Testing',
    metaTitle: 'High-Purity Chemicals for Analytical Laboratories',
    metaDescription: 'Solvents and reagents selected around HPLC, LC-MS, trace analysis, extraction and method-transfer requirements.',
    headline: 'High-purity chemicals for analytical laboratories',
    subline: 'HPLC · LC-MS · elemental analysis · sample preparation',
    image: '/images/puretech/quality-control.jpg',
    overview: 'Analytical suitability appears in the method: baseline, background, retention, pressure profile and reproducibility. The useful starting point is the instrument and detector, followed by the relevant solvent attributes and lot documentation.',
    applications: [
      { title: 'HPLC & UHPLC', detail: 'Mobile-phase selection around wavelength, gradient profile, water and non-volatile residue.' },
      { title: 'LC-MS', detail: 'Background ions, adduct-forming impurities and sample-preparation behaviour reviewed with the method.' },
      { title: 'Trace analysis', detail: 'Reagent blanks, elemental background, container and sample-preparation controls considered together.' },
      { title: 'Method transfer', detail: 'Candidate lots compared with the incumbent under controlled system-suitability conditions.' },
    ],
    products: [
      { id: 'acetonitrile', label: 'Acetonitrile', use: 'HPLC, UHPLC and LC-MS mobile phase' },
      { id: 'methanol', label: 'Methanol', use: 'Mobile phase, extraction and dissolution' },
      { id: 'thf', label: 'Tetrahydrofuran', use: 'Specialised chromatography and synthesis' },
      { id: 'nitric-acid', label: 'Nitric Acid', use: 'Trace-analysis sample preparation' },
      { id: 'hydrochloric-acid', label: 'Hydrochloric Acid', use: 'Acid preparation and analytical workflows' },
    ],
    reviewPoints: ['Instrument, detector and method', 'Isocratic or gradient conditions and wavelength', 'Required blank, background, water and residue performance', 'Current solvent baseline and document needs'],
  },
  {
    slug: 'industrial',
    title: 'Industrial Applications',
    metaTitle: 'High-Purity & Specialty Solvents for Industrial Applications',
    metaDescription: 'Specialty solvents for coatings, polymers, cleaning, extraction and chemical processing, selected around process and supply needs.',
    headline: 'Specialty solvents for controlled industrial processes',
    subline: 'Coatings · polymers · cleaning · extraction · chemical processing',
    image: '/images/puretech/high-purity-solvents.jpg',
    overview: 'Industrial buyers usually need a balance of technical fit, repeatability, safe handling and dependable supply. We narrow the portfolio around the role the solvent performs and the attributes that the process actually measures.',
    applications: [
      { title: 'Coatings', detail: 'Solvency, evaporation, water, colour and residue reviewed against the coating window.' },
      { title: 'Polymers', detail: 'Polymer compatibility, process temperature, recovery and downstream removal considered early.' },
      { title: 'Precision cleaning', detail: 'Contact material, contamination type, residue and drying behaviour define the shortlist.' },
      { title: 'Extraction & processing', detail: 'Selectivity, recovery, assay, water and bulk-handling needs assessed together.' },
    ],
    products: [
      { id: 'thf', label: 'Tetrahydrofuran', use: 'Polymer and specialty process applications' },
      { id: 'nmp', label: 'NMP', use: 'Coatings, polymers and formulated processes' },
      { id: 'ethyl-acetate', label: 'Ethyl Acetate', use: 'Coatings, extraction and process work-up' },
      { id: 'acetone', label: 'Acetone', use: 'Fast-evaporating cleaning and processing' },
      { id: 'ipa', label: 'Isopropyl Alcohol', use: 'Cleaning, formulation and production use' },
      { id: 'dmso', label: 'DMSO', use: 'Specialty formulation and reaction solvent' },
    ],
    reviewPoints: ['Function in the process and contact materials', 'Assay, water, colour, residue and evaporation needs', 'Recovery, emissions and site handling controls', 'Pack format, forecast, lead time and delivery pattern'],
  },
  {
    slug: 'custom-supply',
    title: 'Custom Chemical Supply',
    metaTitle: 'Custom Chemical Supply, Packaging & Private Label',
    metaDescription: 'Custom specifications, private label, flexible packaging, bulk supply and long-term chemical supply programmes.',
    headline: 'A custom chemical partner for long-term supply',
    subline: 'Private label · custom packaging · bulk supply · controlled specifications',
    image: '/images/puretech/hero.jpg',
    overview: 'Custom supply works when technical, regulatory, packaging and commercial requirements are defined together. We begin with a practical brief, assess feasibility and build a qualification route before routine supply terms are agreed.',
    applications: [
      { title: 'Private label', detail: 'Product, artwork, market, language and document scope reviewed as one programme.' },
      { title: 'Custom packaging', detail: 'Container, closure, fill volume and transport route checked for product compatibility.' },
      { title: 'Specification adjustment', detail: 'Critical limits and methods assessed against manufacturing and analytical feasibility.' },
      { title: 'Long-term supply', detail: 'Forecast, campaign planning, release data, logistics and change expectations agreed for repeat demand.' },
    ],
    products: [],
    reviewPoints: ['Chemical or existing product reference', 'Application, destination market and document list', 'Target specification and test methods', 'Pack, label, sample quantity, annual demand and timing'],
  },
]

export interface ProductCategoryPage {
  slug: string
  title: string
  metaTitle: string
  description: string
  headline: string
  image: string
  productIds: string[]
  groups: { title: string; items: string[] }[]
  selectionNotes: string[]
}

export const productCategoryPages: ProductCategoryPage[] = [
  {
    slug: 'electronic-materials',
    title: 'Electronic Materials',
    metaTitle: 'Electronic Materials & High-Purity Process Chemicals',
    description: 'Electronic solvents and process chemicals for cleaning, lithography, development and advanced manufacturing.',
    headline: 'Electronic materials selected around the process step',
    image: '/images/puretech/electronic-materials.jpg',
    productIds: ['eipa', 'ethanol', 'pgmea', 'pgme', 'nmp', 'dmc', 'tmah', 'hydrogen-peroxide'],
    groups: [
      { title: 'Cleaning & rinse', items: ['Electronic Grade IPA', 'Electronic Grade Ethanol', 'Hydrogen Peroxide'] },
      { title: 'Lithography', items: ['PGMEA', 'PGME', 'TMAH'] },
      { title: 'Specialty process', items: ['NMP', 'DMC'] },
    ],
    selectionNotes: ['Process step and contact surface', 'Critical contamination limits', 'Current specification and methods', 'Packaging and point-of-use route'],
  },
  {
    slug: 'high-purity-solvents',
    title: 'High-Purity Solvents',
    metaTitle: 'High-Purity & Specialty Solvents',
    description: 'Alcohols, ketones, esters, ethers, hydrocarbons and specialty solvents for controlled manufacturing.',
    headline: 'A solvent portfolio organised by chemistry and use',
    image: '/images/puretech/high-purity-solvents.jpg',
    productIds: ['ipa', 'ethanol', 'methanol', 'acetone', 'ethyl-acetate', 'n-propyl-acetate', 'butyl-acetate', 'thf', 'pgme', 'pgmea', 'toluene', 'n-hexane', 'n-heptane', 'dmso', 'dcm', 'nmp'],
    groups: [
      { title: 'Alcohols', items: ['IPA', 'Ethanol', 'Methanol'] },
      { title: 'Ketones & esters', items: ['Acetone', 'Ethyl Acetate', 'Propyl Acetate', 'Butyl Acetate'] },
      { title: 'Ethers & specialty', items: ['THF', 'PGME', 'PGMEA', 'DMSO', 'DCM', 'NMP'] },
      { title: 'Hydrocarbons', items: ['Toluene', 'n-Hexane', 'n-Heptane'] },
    ],
    selectionNotes: ['Role in the process', 'Solvency and evaporation needs', 'Water, residue, colour and impurity priorities', 'Pack, forecast and delivery pattern'],
  },
  {
    slug: 'pharmaceutical-solvents',
    title: 'Pharmaceutical Solvents',
    metaTitle: 'Pharmaceutical Manufacturing Solvents',
    description: 'Solvent routes for pharmaceutical synthesis, work-up, extraction, cleaning and controlled production.',
    headline: 'Process solvents for pharmaceutical manufacturing',
    image: '/images/puretech/pharma-gmp.jpg',
    productIds: ['ethanol', 'ipa', 'acetone', 'methanol', 'dmso', 'ethyl-acetate', 'dcm', 'thf', 'nmp'],
    groups: [
      { title: 'Alcohols & ketones', items: ['Ethanol', 'IPA', 'Methanol', 'Acetone'] },
      { title: 'Extraction & work-up', items: ['Ethyl Acetate', 'DCM', 'THF'] },
      { title: 'Specialty process', items: ['DMSO', 'NMP'] },
    ],
    selectionNotes: ['Manufacturing use', 'Residual-solvent strategy', 'Controlled specification and traceability', 'Market, documents, pack and change terms'],
  },
  {
    slug: 'trace-analysis',
    title: 'Trace Analysis Chemicals',
    metaTitle: 'Trace Analysis Acids, Solvents & Reagents',
    description: 'Acids, oxidants and solvents considered for elemental analysis and contamination-sensitive laboratory work.',
    headline: 'Reagents for contamination-sensitive analytical work',
    image: '/images/puretech/trace-analysis.jpg',
    productIds: ['nitric-acid', 'hydrochloric-acid', 'sulfuric-acid', 'hydrogen-peroxide', 'acetonitrile', 'methanol', 'eipa'],
    groups: [
      { title: 'Acids & oxidants', items: ['Nitric Acid', 'Hydrochloric Acid', 'Sulfuric Acid', 'Hydrogen Peroxide'] },
      { title: 'Analytical solvents', items: ['Acetonitrile', 'Methanol', 'Electronic Grade IPA'] },
    ],
    selectionNotes: ['Target analytes and method', 'Blank and reporting-limit requirements', 'Container and sample-preparation controls', 'Product-specific grade availability'],
  },
  {
    slug: 'specialty-chemicals',
    title: 'Specialty Chemicals',
    metaTitle: 'Specialty Chemicals for Advanced Manufacturing',
    description: 'Specialty solvents, developers and carbonate chemicals for electronics, battery, coatings and formulated processes.',
    headline: 'Specialty chemistry for formulation and process use',
    image: '/images/puretech/applications.jpg',
    productIds: ['pgmea', 'pgme', 'nmp', 'dmso', 'gbl', 'dmc', 'emc', 'dec', 'tmah'],
    groups: [
      { title: 'Coating & lithography', items: ['PGMEA', 'PGME', 'TMAH'] },
      { title: 'Polar aprotic solvents', items: ['NMP', 'DMSO', 'GBL'] },
      { title: 'Carbonates', items: ['DMC', 'EMC', 'DEC'] },
    ],
    selectionNotes: ['Formulation or process function', 'Compatibility and impurity priorities', 'Pilot-to-production transfer', 'Custom specification and supply volume'],
  },
]
