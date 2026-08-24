export interface ApplicationProduct {
  name: string
  href: string
  use: string
  note?: string
}

export interface ApplicationPage {
  slug: string
  navLabel: string
  title: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  headline: string
  subline: string
  overview: string
  image: string
  imageAlt: string
  applications: { title: string; detail: string }[]
  reviewPoints: { title: string; detail: string }[]
  process: { title: string; detail: string }[]
  products: ApplicationProduct[]
  manufacturingNote: string
}

export const applicationPages: ApplicationPage[] = [
  {
    slug: 'semiconductor',
    navLabel: 'Semiconductor & Electronics',
    title: 'Semiconductor & Electronics Manufacturing',
    metaTitle: 'Semiconductor Chemicals Supplier | High-Purity Solvents',
    metaDescription: 'High-purity solvents and specialty chemicals for semiconductor cleaning, lithography, advanced packaging and precision electronic manufacturing.',
    keywords: ['semiconductor chemicals supplier', 'electronic grade solvent supplier', 'wafer cleaning chemicals'],
    headline: 'Chemical solutions for semiconductor manufacturing',
    subline: 'Wafer cleaning · lithography · advanced packaging · precision electronics',
    overview: 'A semiconductor chemical is qualified at the point where it meets the wafer, tool or package—not in isolation. We begin with that contact step, then work backwards through contamination limits, analytical methods, packaging and delivery to build a shortlist worth testing.',
    image: '/images/puretech/electronic-materials.jpg',
    imageAlt: 'Semiconductor cleanroom and controlled high-purity chemical handling environment',
    applications: [
      { title: 'Wafer cleaning & drying', detail: 'Rinse, solvent-displacement and drying work where surface residue, particles and water are watched closely.' },
      { title: 'Lithography', detail: 'Resist formulation, coating and edge-bead removal reviewed around film behaviour rather than solvent assay alone.' },
      { title: 'Advanced packaging', detail: 'Substrate cleaning, polymer processing and rework for packaging flows with several exposed material systems.' },
      { title: 'Precision electronics', detail: 'Controlled cleaning for compatible components, optics and assemblies under a defined site process.' },
    ],
    reviewPoints: [
      { title: 'Process contact', detail: 'Which surface, tool part or formulation sees the chemical, and at what stage?' },
      { title: 'Contamination budget', detail: 'Which metals, particles, anions, water and residue limits are tied to yield or defects?' },
      { title: 'Qualified baseline', detail: 'What incumbent specification, method and process result should a candidate be compared with?' },
      { title: 'Delivery path', detail: 'How will the container, closure, filter and point-of-use connection protect the material?' },
    ],
    process: [
      { title: 'Define the contact step', detail: 'Document the wafer, substrate, formulation or tool-maintenance use.' },
      { title: 'Set the control profile', detail: 'Separate truly critical contamination limits from general catalogue attributes.' },
      { title: 'Qualify the product route', detail: 'Compare a representative lot, analytical data and production packaging with the baseline.' },
      { title: 'Plan routine supply', detail: 'Agree release documents, forecast, delivery cadence and change communication.' },
    ],
    products: [
      { name: 'Electronic Grade IPA', href: '/products/electronic-grade-ipa', use: 'Wafer cleaning, rinse and solvent-assisted drying studies.' },
      { name: 'Electronic Grade Ethanol', href: '/products/electronic-grade-ethanol', use: 'Precision cleaning and controlled formulation work.' },
      { name: 'PGMEA', href: '/products/pgmea', use: 'Photoresist formulation, coating and edge-bead removal.' },
      { name: 'PGME', href: '/products/pgme', use: 'Lithography blends, coating and compatible process cleaning.' },
      { name: 'NMP', href: '/products/nmp', use: 'Resist strip, polymer dissolution and advanced-material processing.' },
      { name: 'DMC', href: '/products/dimethyl-carbonate', use: 'Specialty formulation and advanced-material programmes.' },
    ],
    manufacturingNote: 'Electronic-material qualification should connect purification, filtration, test methods, filling and the point-of-use route. A grade label organises the discussion; the customer specification still governs approval.',
  },
  {
    slug: 'pharmaceutical',
    navLabel: 'Pharmaceutical Manufacturing',
    title: 'Pharmaceutical Manufacturing Solutions',
    metaTitle: 'Pharmaceutical Solvent Supplier | Manufacturing Solutions',
    metaDescription: 'Process solvents for pharmaceutical synthesis, extraction, purification, cleaning and formulation, with specification and documentation review.',
    keywords: ['pharmaceutical solvent supplier', 'GMP chemical supplier', 'API manufacturing solvents'],
    headline: 'Process solvents for pharmaceutical manufacturing',
    subline: 'Synthesis · extraction · purification · formulation · cleaning',
    overview: 'Pharmaceutical buyers rarely need “the purest solvent” in the abstract. They need a material that fits the manufacturing step, residual-solvent strategy, site quality system and approved supply chain. Those requirements should be discussed together before qualification begins.',
    image: '/images/puretech/pharma-gmp.jpg',
    imageAlt: 'Clean pharmaceutical production area with stainless steel manufacturing equipment',
    applications: [
      { title: 'API synthesis', detail: 'Reaction solvents reviewed around process role, impurity risk, removal and the controlled material specification.' },
      { title: 'Extraction & work-up', detail: 'Partitioning, washing and isolation steps considered with recovery, carryover and scale.' },
      { title: 'Formulation', detail: 'Solvent or carrier requirements aligned with product quality, regulatory scope and documented controls.' },
      { title: 'Process cleaning', detail: 'Contact materials, drying, residue and site procedures defined before selecting a supply grade.' },
    ],
    reviewPoints: [
      { title: 'Manufacturing role', detail: 'Where is the solvent introduced, and how is it removed or controlled downstream?' },
      { title: 'Specification basis', detail: 'Which pharmacopeial, customer or process-specific requirements govern incoming release?' },
      { title: 'Quality documents', detail: 'What CoA, traceability, declarations and change-notification terms are required?' },
      { title: 'Supply presentation', detail: 'Which pack, closure, label language and market route need qualification?' },
    ],
    process: [
      { title: 'Map the use', detail: 'Define synthesis, extraction, formulation or cleaning duty and contact stage.' },
      { title: 'Review quality requirements', detail: 'Align specification, methods, documents and change expectations.' },
      { title: 'Qualify a representative lot', detail: 'Use sample and production packaging that reflect the intended routine route.' },
      { title: 'Establish supply controls', detail: 'Agree forecast, release package, logistics and deviation contacts.' },
    ],
    products: [
      { name: 'Ethanol', href: '/products/high-purity-ethanol', use: 'Process, extraction, cleaning and formulation routes.' },
      { name: 'Isopropyl Alcohol', href: '/products/high-purity-ipa', use: 'Process cleaning and controlled manufacturing use.' },
      { name: 'Acetone', href: '/products/acetone', use: 'Work-up, washing and compatible process cleaning.' },
      { name: 'Methanol', href: '/products/methanol', use: 'Synthesis, extraction and laboratory workflows.' },
      { name: 'DMSO', href: '/products/dmso', use: 'Specialty formulation and synthesis work.' },
      { name: 'Ethyl Acetate', href: '/products/ethyl-acetate', use: 'Extraction and process work-up.' },
    ],
    manufacturingNote: 'We present this as a pharmaceutical supply route, not a blanket GMP claim. Facility, quality-system, regulatory and documentation requirements must be confirmed for the specific product and destination before approval.',
  },
  {
    slug: 'battery-materials',
    navLabel: 'Battery & Advanced Materials',
    title: 'Battery & Advanced Materials',
    metaTitle: 'Battery Material Solvents Supplier | Advanced Materials Chemicals',
    metaDescription: 'High-purity NMP, carbonate solvents and specialty chemicals for battery electrode, electrolyte and advanced-material manufacturing programmes.',
    keywords: ['battery material solvents supplier', 'advanced materials chemicals', 'NMP battery solvent supplier'],
    headline: 'Solvent supply for battery and advanced-material production',
    subline: 'Electrode slurry · electrolyte research · dry handling · production scale-up',
    overview: 'Battery solvent conversations split quickly into two routes: electrode-slurry processing and electrolyte chemistry. They share a concern for moisture and contamination, but the test plan, pack handling and production risks are not the same. We keep those routes separate from the first enquiry.',
    image: '/images/puretech/applications.jpg',
    imageAlt: 'Advanced material production and high-purity solvent handling environment',
    applications: [
      { title: 'Cathode slurry', detail: 'NMP supply for compatible PVDF-based electrode processing, reviewed around moisture and dry handling.' },
      { title: 'Electrolyte development', detail: 'Carbonate-solvent evaluation where water, trace ions and formulation control are central.' },
      { title: 'Advanced coatings', detail: 'Solvents for polymer, separator and functional-material coating research and production transfer.' },
      { title: 'Pilot-to-production scale-up', detail: 'Sample, pilot and production packs planned so handling changes do not undermine qualification.' },
    ],
    reviewPoints: [
      { title: 'Chemistry route', detail: 'Is the material for slurry preparation, electrolyte formulation, coating or synthesis?' },
      { title: 'Moisture budget', detail: 'What incoming water limit and dry-room handling procedure protect the process?' },
      { title: 'Impurity list', detail: 'Which trace ions, metals or organics are part of customer incoming control?' },
      { title: 'Scale transfer', detail: 'Will the sample, pilot and routine packs use comparable materials and transfer methods?' },
    ],
    process: [
      { title: 'Separate the chemistry', detail: 'Define slurry, electrolyte, coating or synthesis use before product selection.' },
      { title: 'Set moisture & impurity controls', detail: 'Build the incoming profile around the formulation and site method.' },
      { title: 'Test under real handling', detail: 'Evaluate a representative lot through the planned dry-transfer route.' },
      { title: 'Scale the supply programme', detail: 'Align pack, forecast, release testing and production timing.' },
    ],
    products: [
      { name: 'NMP', href: '/products/nmp', use: 'PVDF dissolution and compatible electrode-slurry processing.' },
      { name: 'Dimethyl Carbonate (DMC)', href: '/products/dimethyl-carbonate', use: 'Carbonate-solvent and advanced-material programmes.' },
      { name: 'Ethyl Methyl Carbonate (EMC)', href: '/product/emc', use: 'Electrolyte-solvent development and production discussions.' },
      { name: 'Diethyl Carbonate (DEC)', href: '/product/dec', use: 'Carbonate-solvent formulation and research routes.' },
      { name: 'Custom solvent specification', href: '/contact', use: 'Customer impurity profiles, dry packaging and project-specific qualification.', note: 'Project review' },
    ],
    manufacturingNote: 'Battery-material suitability depends on the customer chemistry and handling system. Published product data supports screening only; moisture, ion profile and pack performance should be confirmed through the customer qualification plan.',
  },
  {
    slug: 'laboratory-testing',
    navLabel: 'Laboratory & Analytical Testing',
    title: 'Laboratory & Analytical Testing',
    metaTitle: 'Laboratory Chemicals Supplier | Analytical Solvents',
    metaDescription: 'High-purity analytical solvents and specialty reagents selected around HPLC, GC, extraction, sample preparation and method-transfer requirements.',
    keywords: ['laboratory chemicals supplier', 'analytical solvents supplier', 'high purity laboratory solvents'],
    headline: 'Chemical selection that begins with the analytical method',
    subline: 'HPLC · GC · extraction · sample preparation · method transfer',
    overview: 'Analytical performance appears in the chromatogram, blank and system-suitability result. Detector, wavelength, gradient profile, background sensitivity and water tolerance are more useful starting points than a broad premium-grade label.',
    image: '/images/puretech/quality-control.jpg',
    imageAlt: 'Professional analytical laboratory with chromatography instrumentation and reagent handling',
    applications: [
      { title: 'HPLC & UHPLC', detail: 'Mobile-phase selection around wavelength, gradient behaviour, residue and water.' },
      { title: 'GC & sample preparation', detail: 'Extraction and dilution solvents reviewed for background, selectivity and evaporation.' },
      { title: 'Method transfer', detail: 'Candidate lots compared with the incumbent under controlled system-suitability conditions.' },
      { title: 'Research workflows', detail: 'Small-pack evaluation that keeps eventual scale, documentation and supply continuity in view.' },
    ],
    reviewPoints: [
      { title: 'Instrument & detector', detail: 'Which platform, detector, wavelength or MS polarity sets the background requirement?' },
      { title: 'Method conditions', detail: 'Is the method isocratic or gradient, and what solvent programme is used?' },
      { title: 'Critical signals', detail: 'Are UV baseline, ghost peaks, ion background, residue or water the observed risk?' },
      { title: 'Transfer plan', detail: 'How will the candidate be compared with the current lot or method baseline?' },
    ],
    process: [
      { title: 'Read the method', detail: 'Capture instrument, detector, solvent programme and sensitivity.' },
      { title: 'Choose relevant attributes', detail: 'Focus on the background, water, residue or impurity controls the method can see.' },
      { title: 'Run a controlled comparison', detail: 'Compare candidate and incumbent under the same system-suitability conditions.' },
      { title: 'Document routine use', detail: 'Agree pack, CoA format, lot review and method-change expectations.' },
    ],
    products: [
      { name: 'Acetonitrile', href: '/products/trace-acetonitrile', use: 'HPLC, UHPLC, LC-MS and sample-preparation workflows.' },
      { name: 'Methanol', href: '/products/methanol', use: 'Mobile phase, extraction and dissolution.' },
      { name: 'Tetrahydrofuran', href: '/products/thf', use: 'Specialised chromatography, polymer and synthesis methods.' },
      { name: 'n-Hexane', href: '/products/n-hexane', use: 'Normal-phase chromatography and extraction work.' },
      { name: 'Reference or method-specific requirements', href: '/contact', use: 'Discuss the method and required documentation before product selection.', note: 'Technical review' },
    ],
    manufacturingNote: 'An analytical grade should be qualified in the intended method. Website specifications provide a shortlist, while the controlled product specification and lot-specific documentation govern supply.',
  },
  {
    slug: 'icp-ms',
    navLabel: 'ICP-MS & Trace Analysis',
    title: 'ICP-MS & Trace Analysis',
    metaTitle: 'ICP-MS Grade Chemicals Supplier | Trace-Metal Reagents',
    metaDescription: 'High-purity acids, oxidants and water requirements for ICP-MS sample preparation, elemental analysis and contamination-sensitive laboratory workflows.',
    keywords: ['ICP-MS grade chemicals supplier', 'trace metal grade acid supplier', 'ultrapure reagents'],
    headline: 'Reagents selected around the analytical blank',
    subline: 'ICP-MS · elemental analysis · digestion · contamination control',
    overview: 'At trace levels, the reagent is part of the measurement. The useful discussion starts with the analyte list, reporting limit and preparation method, then covers concentration, container, sampling and the laboratory blank. “Ultrapure” without those details is not a complete specification.',
    image: '/images/puretech/trace-analysis.jpg',
    imageAlt: 'Trace analysis laboratory with high-purity reagents and analytical instrumentation',
    applications: [
      { title: 'ICP-MS digestion', detail: 'Acids reviewed against target elements, dilution scheme, blank contribution and reporting limits.' },
      { title: 'Elemental analysis', detail: 'Sample and standard preparation where reagent and container background must be controlled.' },
      { title: 'Ultra-trace workflows', detail: 'Reagent, labware, sampling and handling assessed as one contamination-control chain.' },
      { title: 'Electronic-material analysis', detail: 'Trace-reagent discussions aligned with the elements and methods used for incoming chemical control.' },
    ],
    reviewPoints: [
      { title: 'Target analytes', detail: 'Which elements or ions are measured, and at what reporting limits?' },
      { title: 'Preparation method', detail: 'What digestion, dilution, stabilisation or acid-mixture route is used?' },
      { title: 'Blank budget', detail: 'How much background can the method accept from reagent, bottle and handling?' },
      { title: 'Pack practice', detail: 'Which bottle material, opening frequency, storage and lot documentation are required?' },
    ],
    process: [
      { title: 'Start with the method', detail: 'Record analytes, reporting limits and preparation chemistry.' },
      { title: 'Allocate the blank budget', detail: 'Define acceptable contributions from reagent, container and handling.' },
      { title: 'Compare a candidate lot', detail: 'Evaluate blank and recovery using the laboratory method.' },
      { title: 'Control routine use', detail: 'Agree bottle size, opening practice, CoA and lot acceptance.' },
    ],
    products: [
      { name: 'Nitric Acid', href: '/products/trace-nitric-acid', use: 'ICP-MS digestion, dilution and elemental sample preparation.' },
      { name: 'Hydrochloric Acid', href: '/products/trace-hydrochloric-acid', use: 'Analyte stabilisation, standards and defined digestion chemistry.' },
      { name: 'Hydrogen Peroxide', href: '/products/trace-hydrogen-peroxide', use: 'Oxidising preparation and contamination-sensitive wet-process work.' },
      { name: 'Ultrapure Water', href: '/products/ultrapure-water', use: 'Blank, dilution and rinse requirements defined by the method.' },
      { name: 'Hydrofluoric Acid requirement', href: '/contact', use: 'Reviewed only against a defined method, facility capability and safety scope; no public product specification is listed.', note: 'Technical scope by review' },
    ],
    manufacturingNote: 'Trace-analysis pages deliberately avoid a generic “zero contamination” promise. Current controlled specifications, methods, reporting limits and lot documentation must be reviewed against the laboratory method.',
  },
  {
    slug: 'coatings',
    navLabel: 'Coatings & Chemical Processing',
    title: 'Coatings & Chemical Processing',
    metaTitle: 'Industrial Solvents Supplier | Coating Solvents',
    metaDescription: 'High-purity and specialty solvents for coatings, polymers, cleaning, extraction and controlled chemical processing applications.',
    keywords: ['industrial solvents supplier', 'coating solvents manufacturer', 'specialty process solvents'],
    headline: 'Solvent selection for coatings and chemical processing',
    subline: 'Coatings · polymers · cleaning · extraction · synthesis',
    overview: 'A useful coating solvent has to do two jobs: keep the formulation inside its process window and leave at the right moment. Solvency, evaporation, water, colour, residue and recovery therefore belong in the same commercial discussion as price and pack size.',
    image: '/images/puretech/high-purity-solvents.jpg',
    imageAlt: 'Industrial solvent production and chemical processing environment with storage equipment',
    applications: [
      { title: 'Coating formulation', detail: 'Solvency, evaporation and film behaviour considered with resin, additives and application conditions.' },
      { title: 'Polymer processing', detail: 'Compatibility, process temperature, water and downstream solvent removal reviewed early.' },
      { title: 'Precision cleaning', detail: 'Contamination type, contact material, residue and drying behaviour define the shortlist.' },
      { title: 'Extraction & synthesis', detail: 'Selectivity, assay, water, recovery and bulk handling considered as one process route.' },
    ],
    reviewPoints: [
      { title: 'Function in the formulation', detail: 'Is the solvent dissolving, diluting, carrying, cleaning or controlling evaporation?' },
      { title: 'Process window', detail: 'Which solvency, evaporation, water, colour and residue limits matter?' },
      { title: 'Site handling', detail: 'What recovery, emissions, compatibility and safety controls apply?' },
      { title: 'Supply pattern', detail: 'Which pack, monthly consumption, lead time and delivery cadence fit the line?' },
    ],
    process: [
      { title: 'Define the solvent job', detail: 'Connect the chemical to the formulation, cleaning or reaction function.' },
      { title: 'Set the working window', detail: 'Identify the properties that affect film, yield, recovery or residue.' },
      { title: 'Trial at representative scale', detail: 'Compare performance, handling and analytical data with the incumbent.' },
      { title: 'Plan production supply', detail: 'Confirm pack, forecast, transport, release and change communication.' },
    ],
    products: [
      { name: 'Acetone', href: '/products/acetone', use: 'Fast-evaporating cleaning, work-up and compatible processing.' },
      { name: 'Toluene', href: '/products/toluene', use: 'Coating, formulation and chemical-processing routes.' },
      { name: 'Ethyl Acetate', href: '/products/ethyl-acetate', use: 'Coatings, extraction and process work-up.' },
      { name: 'Butyl Acetate', href: '/products/butyl-acetate', use: 'Controlled-evaporation coating and formulation use.' },
      { name: 'Tetrahydrofuran', href: '/products/thf', use: 'Polymer, synthesis and specialty-process applications.' },
      { name: 'MEK requirement', href: '/contact', use: 'Application and specification reviewed before any supply route is proposed; no public product specification is listed.', note: 'Technical scope by review' },
    ],
    manufacturingNote: 'Industrial qualification should include the real formulation, contact materials and production pack. Availability and pack format vary by product, grade, region and transport route.',
  },
  {
    slug: 'industrial-applications',
    navLabel: 'Custom Industrial Applications',
    title: 'Custom Industrial Applications',
    metaTitle: 'Custom Chemical Supply Solutions | Industrial Applications',
    metaDescription: 'Custom chemical supply programmes covering bulk supply, packaging, private label, special specifications and long-term industrial requirements.',
    keywords: ['custom chemical supply', 'bulk chemical supplier', 'private label chemicals'],
    headline: 'Customized chemical supply solutions for defined industrial needs',
    subline: 'Bulk supply · custom packaging · private label · special specifications',
    overview: 'When an application does not fit a catalogue pack, the first task is not to promise a custom product. It is to determine whether the chemistry, specification, packaging, market and forecast make a supportable programme. A clear brief turns that review into a useful answer.',
    image: '/images/puretech/manufacturing.jpg',
    imageAlt: 'Chemical manufacturing and customised supply environment for industrial customers',
    applications: [
      { title: 'Bulk supply', detail: 'Drum, IBC and project-specific routes reviewed around consumption, site handling and logistics.' },
      { title: 'Custom packaging', detail: 'Container, closure, fill, label and transport format assessed for compatibility and market needs.' },
      { title: 'Private label', detail: 'Product, artwork, language, documentation and commercial responsibilities defined together.' },
      { title: 'Long-term supply', detail: 'Forecast, campaign planning, release, logistics and change expectations organised for repeat demand.' },
    ],
    reviewPoints: [
      { title: 'Product brief', detail: 'Which chemical, concentration, use and current reference define the requirement?' },
      { title: 'Technical scope', detail: 'Which critical limits, methods and documents must be part of release?' },
      { title: 'Market presentation', detail: 'What pack, label language, destination and regulatory scope apply?' },
      { title: 'Commercial fit', detail: 'What sample need, annual forecast, timing and partnership model are realistic?' },
    ],
    process: [
      { title: 'Define', detail: 'Application, product, specification, destination, pack and annual demand.' },
      { title: 'Review', detail: 'Technical feasibility, documentation, packaging, logistics and commercial fit.' },
      { title: 'Qualify', detail: 'Representative sample or pilot route with agreed acceptance responsibilities.' },
      { title: 'Supply', detail: 'Routine release, forecast, delivery, change terms and escalation contacts.' },
    ],
    products: [
      { name: 'Chemical OEM Manufacturing', href: '/custom-solutions/chemical-oem', use: 'Specification, packaging, label and qualification organised as one programme.' },
      { name: 'Bulk Chemical Supply', href: '/custom-solutions/bulk-supply', use: 'Planned drum, IBC and project-specific supply routes.' },
      { name: 'Custom Packaging', href: '/custom-solutions', use: 'Pack, closure, fill and market presentation review.' },
      { name: 'Private Label & Distributor Supply', href: '/oem-custom-chemical-solutions', use: 'Portfolio and market-specific supply discussions.' },
      { name: 'Special Specification Review', href: '/contact', use: 'Feasibility review against methods, manufacturing route and forecast.', note: 'Project review' },
    ],
    manufacturingNote: 'Custom supply is confirmed product by product. Not every chemistry, grade, pack or destination is feasible, and no programme should be inferred from a generic service description before technical and commercial review.',
  },
  {
    slug: 'electronics', navLabel: 'Electronics Manufacturing', title: 'Electronics Manufacturing', metaTitle: 'Electronics Manufacturing Solvents | Precision Cleaning Chemicals', metaDescription: 'High-purity cleaning and specialty solvent routes for electronic components, displays, optics and precision manufacturing.', keywords: ['electronics cleaning solvents', 'precision cleaning chemicals', 'electronic materials supplier'], headline: 'Chemical solutions for precision electronics manufacturing', subline: 'Component cleaning · displays · optics · assembly processes', overview: 'Electronics manufacturing brings many contact materials and cleanliness targets into one production line. Product selection begins with the substrate, residue, drying need and failure signal, then moves to purity, packaging and routine supply.', image: '/images/puretech/electronic-materials.jpg', imageAlt: 'Precision electronics manufacturing and controlled chemical handling',
    applications: [{ title: 'Component cleaning', detail: 'Remove compatible residues while protecting surfaces, coatings and assemblies.' }, { title: 'Display processing', detail: 'Solvent and wet-chemical discussions for compatible substrate and process steps.' }, { title: 'Optics & precision parts', detail: 'Cleaning routes reviewed around residue, drying and surface finish.' }, { title: 'Assembly support', detail: 'Controlled solvent selection for defined production and maintenance procedures.' }],
    reviewPoints: [{ title: 'Contact materials', detail: 'Which metals, polymers, coatings or optical surfaces see the chemical?' }, { title: 'Residue profile', detail: 'What contamination must be removed and what must remain untouched?' }, { title: 'Process result', detail: 'Which cleanliness, drying or defect signal defines acceptance?' }, { title: 'Supply presentation', detail: 'Which grade, pack, closure and release documents fit the line?' }],
    process: [{ title: 'Map the surface', detail: 'Document material, residue and process contact.' }, { title: 'Set the cleaning window', detail: 'Define compatibility, residue and drying priorities.' }, { title: 'Trial representative material', detail: 'Compare performance with the approved baseline.' }, { title: 'Control routine supply', detail: 'Align pack, documents, forecast and changes.' }],
    products: [{ name: 'Electronic Grade IPA', href: '/products/electronic-grade-ipa', use: 'Precision cleaning and compatible drying processes.' }, { name: 'Electronic Grade Ethanol', href: '/products/electronic-grade-ethanol', use: 'Controlled cleaning and precision processing.' }, { name: 'Electronic Grade Acetone', href: '/products/electronic-grade-acetone', use: 'Fast-evaporating compatible cleaning.' }, { name: 'Electronic Cleaning Solvent Blend', href: '/products/electronic-cleaning-solvent', use: 'Application-specific cleaning review.' }], manufacturingNote: 'Electronics suitability is established by the customer process and compatibility evaluation. Grade labels and application examples support discovery but do not replace qualification.',
  },
  {
    slug: 'chemical-processing', navLabel: 'Chemical Processing', title: 'Chemical Processing', metaTitle: 'Chemical Processing Solvents | Manufacturing Supply Solutions', metaDescription: 'Solvents and specialty chemicals for synthesis, extraction, separation, coating and industrial chemical processing.', keywords: ['chemical processing solvents', 'industrial chemical supplier', 'specialty solvent manufacturer'], headline: 'Chemical materials for controlled processing and scale-up', subline: 'Synthesis · extraction · separation · formulation · recovery', overview: 'At production scale, solvent behaviour, impurity profile, recovery, site handling and replenishment are connected. We structure product reviews around the process function and the transition from trial material to routine supply.', image: '/images/puretech/manufacturing.jpg', imageAlt: 'Industrial chemical processing and solvent manufacturing equipment',
    applications: [{ title: 'Chemical synthesis', detail: 'Reaction-solvent selection around water, impurities, temperature and removal.' }, { title: 'Extraction & separation', detail: 'Partitioning and work-up reviewed with recovery and scale.' }, { title: 'Coating & formulation', detail: 'Solvency and evaporation considered with resin and process conditions.' }, { title: 'Solvent recovery interface', detail: 'Incoming material and recovered-solvent strategy discussed within site controls.' }],
    reviewPoints: [{ title: 'Process function', detail: 'What does the chemical dissolve, carry, wash, extract or control?' }, { title: 'Critical attributes', detail: 'Which water, residue, organics or physical properties affect yield?' }, { title: 'Scale & handling', detail: 'How will the site store, transfer, recover or dispose of the material?' }, { title: 'Supply plan', detail: 'Which pack, monthly volume, forecast and release route apply?' }],
    process: [{ title: 'Define the duty', detail: 'Map chemistry, process step and constraints.' }, { title: 'Select attributes', detail: 'Focus specification on measurable process risks.' }, { title: 'Trial & scale', detail: 'Compare candidate through representative handling.' }, { title: 'Establish supply', detail: 'Agree pack, cadence, documents and change route.' }],
    products: [{ name: 'High-Purity IPA', href: '/products/high-purity-ipa', use: 'Cleaning and process manufacturing.' }, { name: 'Acetone', href: '/products/acetone', use: 'Compatible cleaning and process work-up.' }, { name: 'Ethyl Acetate', href: '/products/ethyl-acetate', use: 'Extraction, coating and separation.' }, { name: 'Custom Solvent Blends', href: '/products/custom-solvent-blends', use: 'Application-defined formulation review.' }], manufacturingNote: 'Industrial supply routes are confirmed around the exact chemistry, grade, site, transport and destination requirements.',
  },
  {
    slug: 'laboratory', navLabel: 'Laboratory Testing', title: 'Laboratory Testing', metaTitle: 'Laboratory Testing Chemicals | High-Purity Solvents & Reagents', metaDescription: 'High-purity solvents and trace-analysis reagents selected around laboratory methods, blanks, detector response and controlled documents.', keywords: ['laboratory chemicals supplier', 'high purity laboratory solvents', 'analytical reagents'], headline: 'Chemical selection that follows the laboratory method', subline: 'Chromatography · extraction · sample preparation · trace analysis', overview: 'Laboratory suitability is visible in the blank, baseline, recovery and system-suitability result. The method and reporting limit therefore lead the product and grade discussion.', image: '/images/puretech/quality-control.jpg', imageAlt: 'Analytical laboratory and controlled reagent handling',
    applications: [{ title: 'Chromatography', detail: 'Solvents reviewed around detector, wavelength, gradient and background.' }, { title: 'Sample preparation', detail: 'Extraction and dilution routes considered with recovery and blank.' }, { title: 'Elemental analysis', detail: 'Acids and water selected around analytes and reporting limits.' }, { title: 'Method transfer', detail: 'Candidate material compared with an incumbent under controlled conditions.' }],
    reviewPoints: [{ title: 'Method', detail: 'Which instrument, detector and preparation route are used?' }, { title: 'Sensitivity', detail: 'What background and reporting limits must be protected?' }, { title: 'Observed risk', detail: 'Are ghost peaks, residue, water or trace metals the concern?' }, { title: 'Routine use', detail: 'Which bottle, lot data and review cadence fit the lab?' }],
    process: [{ title: 'Read the method', detail: 'Capture instrument, preparation and sensitivity.' }, { title: 'Set attributes', detail: 'Choose the relevant background and impurity controls.' }, { title: 'Compare material', detail: 'Run the candidate against the baseline.' }, { title: 'Document acceptance', detail: 'Agree pack, CoA and lot review.' }],
    products: [{ name: 'Acetonitrile', href: '/products/trace-acetonitrile', use: 'Chromatography and sample preparation.' }, { name: 'Methanol', href: '/products/methanol', use: 'Mobile phase, extraction and dissolution.' }, { name: 'Trace Nitric Acid', href: '/products/trace-nitric-acid', use: 'ICP-MS digestion and elemental analysis.' }, { name: 'Ultrapure Water', href: '/products/ultrapure-water', use: 'Blank, dilution and rinse workflows.' }], manufacturingNote: 'The laboratory method and current controlled specification govern suitability; website content supports initial product screening only.',
  },
  {
    slug: 'industrial-cleaning', navLabel: 'Industrial Cleaning', title: 'Industrial Cleaning', metaTitle: 'Industrial Cleaning Solvents | Precision & Process Cleaning', metaDescription: 'Industrial cleaning solvent selection around residue, surface compatibility, drying, site handling and routine supply.', keywords: ['industrial cleaning solvents', 'precision cleaning chemical supplier', 'process cleaning solvent'], headline: 'Cleaning solvents selected around the surface and residue', subline: 'Degreasing · precision cleaning · equipment cleaning · surface preparation', overview: 'A cleaning solvent is useful when it removes the target contamination without damaging the surface or leaving an unacceptable result. The cleaning method, drying, ventilation and production pack belong in the same review.', image: '/images/puretech/high-purity-solvents.jpg', imageAlt: 'Industrial precision cleaning and solvent handling environment',
    applications: [{ title: 'Precision cleaning', detail: 'Surface compatibility, residue and drying define the qualification window.' }, { title: 'Equipment cleaning', detail: 'Cleaning duty reviewed with contact materials and site procedures.' }, { title: 'Surface preparation', detail: 'Removal of compatible soils before coating, bonding or assembly.' }, { title: 'Production maintenance', detail: 'Routine solvent use aligned with handling, consumption and replenishment.' }],
    reviewPoints: [{ title: 'Surface', detail: 'Which substrate, coating, seal or polymer sees the solvent?' }, { title: 'Contamination', detail: 'What soil must be removed and how is cleanliness measured?' }, { title: 'Drying & residue', detail: 'What evaporation rate and residual result are acceptable?' }, { title: 'Site use', detail: 'Which application method, pack and monthly consumption apply?' }],
    process: [{ title: 'Identify surface & soil', detail: 'Document materials and contamination.' }, { title: 'Screen compatibility', detail: 'Narrow chemistry and critical attributes.' }, { title: 'Trial the process', detail: 'Evaluate cleaning, drying and residue.' }, { title: 'Plan routine use', detail: 'Agree pack, storage and supply cadence.' }],
    products: [{ name: 'Isopropanol', href: '/products/isopropanol', use: 'Routine and controlled cleaning.' }, { name: 'Acetone', href: '/products/acetone', use: 'Fast-evaporating compatible cleaning.' }, { name: 'Electronic Grade IPA', href: '/products/electronic-grade-ipa', use: 'Contamination-sensitive cleaning routes.' }, { name: 'Electronic Cleaning Solvent Blend', href: '/products/electronic-cleaning-solvent', use: 'Application-specific formulation review.' }], manufacturingNote: 'Cleaning examples do not establish compatibility. Customers should qualify the product with their materials, procedure and acceptance criteria.',
  },
]

export function applicationPath(application: ApplicationPage) {
  return `/applications/${application.slug}`
}

export function findApplicationPage(slug: string) {
  return applicationPages.find((application) => application.slug === slug)
}
