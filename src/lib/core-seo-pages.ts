export interface BuyerNote {
  title: string
  detail: string
}

export interface CoreProductSeoPage {
  categorySlug: 'electronic-materials' | 'high-purity-solvents' | 'trace-analysis'
  categoryLabel: string
  slug: string
  seoSlug?: string
  productId?: string
  productName: string
  formula?: string
  cas?: string
  metaTitle: string
  metaDescription: string
  headline: string
  intro: string
  lead: string
  fitTitle: string
  fitSummary: string
  buyerNotes: BuyerNote[]
  selectionQuestions: string[]
}

export const coreProductSeoPages: CoreProductSeoPage[] = [
  {
    categorySlug: 'electronic-materials',
    categoryLabel: 'Electronic Materials',
    slug: 'electronic-grade-ipa',
    seoSlug: 'electronic-grade-ipa',
    productId: 'eipa',
    productName: 'Electronic Grade IPA',
    metaTitle: 'Electronic Grade IPA Supplier | High-Purity Isopropyl Alcohol',
    metaDescription: 'Electronic grade IPA for semiconductor wafer cleaning, precision surface cleaning and advanced packaging. Review grades, specifications, packs and sample options.',
    headline: 'Electronic Grade IPA for wafer cleaning and precision surfaces',
    intro: 'In a wafer-cleaning line, IPA often sits at the hand-off between the wet process and a dry surface. That makes the details around water, trace metals, particles, residue and the delivery path more important than a purity headline on its own.',
    lead: 'A practical place to begin is the exact rinse, drying or cleaning step—then compare the qualified limits and container route against the incumbent material.',
    fitTitle: 'Where electronic grade IPA earns its place',
    fitSummary: 'The same chemical can behave very differently across a wet bench, tool-maintenance routine and packaging line. These are the conversations we usually separate before recommending a grade.',
    buyerNotes: [
      { title: 'Wafer clean & dry', detail: 'Final rinse, spin-rinse-dry and Marangoni drying work where water, particles and surface residue need close review.' },
      { title: 'Tool & component cleaning', detail: 'Maintenance cleaning for compatible tool parts, carriers and precision components under a defined site procedure.' },
      { title: 'Advanced packaging', detail: 'Substrate and assembly cleaning where the process, exposed materials and downstream bonding step set the acceptance criteria.' },
    ],
    selectionQuestions: ['Which wafer, substrate or tool surface will the IPA contact?', 'Is the step a rinse, displacement dry, maintenance clean or formulation use?', 'Which metals, particles, water and residue limits are already qualified?', 'What container, filter and point-of-use connection will be used on site?'],
  },
  {
    categorySlug: 'electronic-materials',
    categoryLabel: 'Electronic Materials',
    slug: 'electronic-grade-ethanol',
    seoSlug: 'electronic-grade-ethanol',
    productId: 'ethanol',
    productName: 'Electronic Grade Ethanol',
    metaTitle: 'Electronic Grade Ethanol Supplier | High-Purity Semiconductor Ethanol',
    metaDescription: 'Electronic grade ethanol for semiconductor cleaning, electronics production and precision manufacturing. Compare grade, water, residue, documentation and packaging needs.',
    headline: 'Electronic Grade Ethanol for controlled cleaning and formulation',
    intro: 'Ethanol is familiar chemistry, but an electronics process rarely treats it as a commodity. Water, non-volatile residue, trace metals, organic impurities and denaturant status can all change whether a lot is suitable for a qualified cleaning or formulation route.',
    lead: 'Tell us whether the material is used neat, blended or dispensed through a tool; that one detail quickly narrows the relevant grade and pack discussion.',
    fitTitle: 'A versatile solvent with application-specific controls',
    fitSummary: 'Electronic ethanol enquiries tend to look similar at first. The useful distinctions appear once the contact surface, drying requirement and process delivery system are known.',
    buyerNotes: [
      { title: 'Precision cleaning', detail: 'Cleaning of compatible substrates, optics and electronic components where residue and drying behaviour are monitored.' },
      { title: 'Process formulation', detail: 'A solvent or carrier in controlled blends where water and minor organic impurities may influence the formulation window.' },
      { title: 'Production supply', detail: 'Pack, closure, sampling and transfer arrangements designed around the site rather than selected after qualification.' },
    ],
    selectionQuestions: ['What surface or formulation will the ethanol contact?', 'Is denatured or undenatured material required for the destination market?', 'Which water, residue, metals and organic-impurity limits are critical?', 'How will the solvent be sampled, transferred and stored at point of use?'],
  },
  {
    categorySlug: 'electronic-materials',
    categoryLabel: 'Electronic Materials',
    slug: 'pgmea',
    seoSlug: 'pgmea',
    productId: 'pgmea',
    productName: 'PGMEA',
    metaTitle: 'PGMEA Supplier | High-Purity Photoresist Solvent',
    metaDescription: 'High-purity PGMEA for photoresist formulation, semiconductor lithography, display coatings and edge-bead removal. Review specifications and supply formats.',
    headline: 'High-Purity PGMEA for photoresist and coating processes',
    intro: 'PGMEA is chosen for the way it dissolves, coats and leaves a film—not simply because it is high purity. Resist chemistry, evaporation profile, water, acidity, residue and trace contaminants need to be considered as one process window.',
    lead: 'For a useful sample comparison, share the resist or coating system, current solvent baseline and the defect or performance signal being watched.',
    fitTitle: 'Start with the coating behaviour you need to preserve',
    fitSummary: 'A grade that looks strong on a general assay can still miss the point in lithography. Qualification should follow the formulation and the actual coating step.',
    buyerNotes: [
      { title: 'Photoresist formulation', detail: 'Solvent screening around resist compatibility, dissolution, water and lot-to-lot formulation behaviour.' },
      { title: 'Lithography process', detail: 'Coating, edge-bead removal and related process work where residue and surface quality matter.' },
      { title: 'Display & specialty coatings', detail: 'Controlled solvent supply for compatible functional coatings, with pilot-to-production transfer planned early.' },
    ],
    selectionQuestions: ['Which resist, polymer or coating formulation is in use?', 'What evaporation, film-uniformity or edge-bead behaviour must be preserved?', 'Which water, acidity, residue and metals limits are already qualified?', 'What sample size and production pack will represent the intended process?'],
  },
  {
    categorySlug: 'electronic-materials',
    categoryLabel: 'Electronic Materials',
    slug: 'nmp',
    seoSlug: 'nmp-solvent',
    productId: 'nmp',
    productName: 'N-Methyl-2-pyrrolidone (NMP)',
    metaTitle: 'NMP Solvent Supplier | High-Purity N-Methyl-2-Pyrrolidone',
    metaDescription: 'High-purity NMP for semiconductor processing, battery electrode slurry and advanced materials. Review water, metals, residue, packaging and qualification supply.',
    headline: 'High-Purity NMP for electronics and advanced materials',
    intro: 'NMP can play very different roles in a resist-strip bath, a polyimide coating and a battery slurry. The right material is therefore defined by the process—water, colour, amine by-products, metals and handling conditions do not carry equal weight in every use.',
    lead: 'Separate the application first: stripping, coating, polymer dissolution or electrode slurry. That prevents a broad NMP enquiry from turning into an unfocused specification exercise.',
    fitTitle: 'One solvent, several very different qualification routes',
    fitSummary: 'NMP projects move faster when the end use is explicit and the sample pack reflects the intended production handling route.',
    buyerNotes: [
      { title: 'Semiconductor processing', detail: 'Resist-strip, rework and compatible cleaning processes where metals, residue and process performance are reviewed together.' },
      { title: 'Polyimide & advanced coating', detail: 'Polymer dissolution and coating routes where water, colour and consistency can affect the film process.' },
      { title: 'Battery electrode slurry', detail: 'PVDF-based cathode slurry work where moisture control, incoming testing and dry handling are central to qualification.' },
    ],
    selectionQuestions: ['Is the NMP used for stripping, coating, polymer dissolution or battery slurry?', 'Which water, metals, colour, amine and residue limits matter to the process?', 'Does the site require a specific sample, closure or dry-transfer arrangement?', 'What pilot volume, annual demand and change-control expectations apply?'],
  },
  {
    categorySlug: 'high-purity-solvents',
    categoryLabel: 'High-Purity Solvents',
    slug: 'isopropanol',
    seoSlug: 'ipa-solvent',
    productId: 'ipa',
    productName: 'Isopropyl Alcohol (IPA)',
    metaTitle: 'High-Purity IPA Supplier | Isopropyl Alcohol Manufacturer',
    metaDescription: 'High-purity isopropyl alcohol for controlled industrial cleaning, pharmaceutical manufacturing and process use. Compare grades, documents and supply formats.',
    headline: 'High-Purity IPA for manufacturing, cleaning and formulation',
    intro: 'Most IPA enquiries begin with concentration and pack size. The better conversations also cover what is being cleaned or made, how much residue the process tolerates, which document set is needed and whether the sample can be scaled into the production container.',
    lead: 'For general manufacturing use, a carefully matched grade is usually more useful than paying for controls the process never measures.',
    fitTitle: 'Choose IPA around the job, not the label',
    fitSummary: 'Industrial, analytical, pharmaceutical and medical uses can call for different controls even when the molecule and nominal assay look similar.',
    buyerNotes: [
      { title: 'Controlled cleaning', detail: 'Surface and equipment cleaning where contact materials, residue, drying and site procedures define suitability.' },
      { title: 'Process & formulation', detail: 'A solvent or blend component selected around assay, water, impurities and downstream removal.' },
      { title: 'Routine supply', detail: 'Qualification bottles through drums or IBC discussions, with documentation and delivery cadence agreed early.' },
    ],
    selectionQuestions: ['What is being cleaned, extracted, formulated or processed?', 'Which assay, water, acidity or residue limits are actually measured?', 'What regulatory or quality documents are required for the market?', 'Which production pack and delivery frequency should the sample represent?'],
  },
  {
    categorySlug: 'high-purity-solvents',
    categoryLabel: 'High-Purity Solvents',
    slug: 'ethanol',
    seoSlug: 'ethanol-solvent',
    productId: 'ethanol',
    productName: 'High-Purity Ethanol',
    metaTitle: 'High-Purity Ethanol Supplier | Process & Pharmaceutical Solvent',
    metaDescription: 'High-purity ethanol for pharmaceutical, laboratory and industrial processes. Discuss grade, denaturant status, water, impurities, documentation and packaging.',
    headline: 'High-Purity Ethanol for process, extraction and cleaning',
    intro: 'Ethanol is used across regulated and industrial sites, but the purchasing questions change with the application. Denaturant status, water, trace organic impurities, documentation and local market rules should be settled before price and pack are compared.',
    lead: 'The quickest route to a relevant option is to state the use, destination country and whether the process requires denatured or undenatured material.',
    fitTitle: 'A broad-use solvent that still needs a precise brief',
    fitSummary: 'Extraction, process cleaning, laboratory work and formulation each place a different emphasis on purity and documentation.',
    buyerNotes: [
      { title: 'Pharmaceutical process', detail: 'Synthesis, extraction or cleaning uses reviewed against the process role, residual-solvent strategy and quality documents.' },
      { title: 'Laboratory & technical use', detail: 'Method and detector requirements considered separately from routine process-solvent supply.' },
      { title: 'Industrial formulation', detail: 'Assay, water, denaturant and impurity profile matched to the formulation and destination market.' },
    ],
    selectionQuestions: ['What role does ethanol perform in the process?', 'Is denatured or undenatured ethanol required?', 'Which pharmacopeial, analytical or customer specification applies?', 'What destination, pack, annual volume and release documents are needed?'],
  },
  {
    categorySlug: 'high-purity-solvents',
    categoryLabel: 'High-Purity Solvents',
    slug: 'acetone',
    seoSlug: 'acetone',
    productId: 'acetone',
    productName: 'High-Purity Acetone',
    metaTitle: 'High-Purity Acetone Supplier | Process & Cleaning Solvent',
    metaDescription: 'High-purity acetone for controlled cleaning, synthesis, extraction and process work-up. Review water, residue, impurities, grade and packaging options.',
    headline: 'High-Purity Acetone for fast, clean process work',
    intro: 'Acetone is often selected because it dissolves quickly and leaves the process quickly. In practice, water, residue, trace impurities, contact-material compatibility and safe transfer determine whether it performs consistently at production scale.',
    lead: 'If fast evaporation is the reason acetone is on the shortlist, tell us what must remain on the surface—and what must not—after drying.',
    fitTitle: 'Fast evaporation makes the details visible',
    fitSummary: 'Acetone is useful across cleaning and work-up steps, but a surface process and a synthesis process should not inherit the same selection logic.',
    buyerNotes: [
      { title: 'Precision & process cleaning', detail: 'Removal of compatible organic residues where evaporation, surface finish and non-volatile residue are monitored.' },
      { title: 'Synthesis & work-up', detail: 'Reaction, precipitation or washing duties selected around water, assay and downstream removal.' },
      { title: 'Production handling', detail: 'Container, ventilation, transfer and consumption rate reviewed with the intended facility setup.' },
    ],
    selectionQuestions: ['Is acetone used for surface cleaning, synthesis, washing or extraction?', 'Which water, residue and organic-impurity limits are critical?', 'What contact materials and site handling controls apply?', 'Which pack size and consumption pattern fit routine production?'],
  },
  {
    categorySlug: 'high-purity-solvents',
    categoryLabel: 'High-Purity Solvents',
    slug: 'thf',
    seoSlug: 'thf',
    productId: 'thf',
    productName: 'Tetrahydrofuran (THF)',
    metaTitle: 'High-Purity THF Supplier | Tetrahydrofuran Solvent',
    metaDescription: 'High-purity tetrahydrofuran for polymer processing, chemical synthesis and analytical workflows. Review stabiliser, peroxide, water and pack requirements.',
    headline: 'High-Purity THF for polymers, synthesis and analytical work',
    intro: 'THF is valued for strong solvency and broad process utility, yet it deserves a more careful brief than many routine solvents. Stabiliser status, peroxide control, water, storage history and the analytical method all influence the grade decision.',
    lead: 'Always state whether stabilised or unstabilised THF is required and how quickly the opened container will be consumed.',
    fitTitle: 'Treat peroxide and stabiliser status as part of the specification',
    fitSummary: 'A THF grade cannot be chosen responsibly from assay alone. Storage, handling and the end use belong in the same review.',
    buyerNotes: [
      { title: 'Polymer processing', detail: 'Polymer dissolution, adhesive and material research routes where solvency and water control matter.' },
      { title: 'Chemical synthesis', detail: 'Reaction solvent use reviewed for water, stabiliser, peroxide and downstream purification needs.' },
      { title: 'Analytical methods', detail: 'Chromatography or sample-preparation work matched to detector, background and method requirements.' },
    ],
    selectionQuestions: ['Is stabilised or unstabilised THF required?', 'What peroxide, water and residue limits does the method or process use?', 'How will containers be stored, opened and consumed?', 'Which analytical documents, pack size and delivery cadence are required?'],
  },
  {
    categorySlug: 'high-purity-solvents',
    categoryLabel: 'High-Purity Solvents',
    slug: 'dmso',
    seoSlug: 'dmso',
    productId: 'dmso',
    productName: 'Dimethyl Sulfoxide (DMSO)',
    metaTitle: 'High-Purity DMSO Supplier | Dimethyl Sulfoxide',
    metaDescription: 'High-purity DMSO for pharmaceutical, chemical synthesis, formulation and advanced materials. Compare water, colour, impurities, documents and packs.',
    headline: 'High-Purity DMSO for formulation and synthesis',
    intro: 'DMSO is a powerful solvent with a habit of carrying small formulation differences into the finished process. Water, colour, sulphur-related impurities, peroxide and container handling should be reviewed against the application rather than treated as a generic premium checklist.',
    lead: 'Because DMSO is hygroscopic, the qualification plan should include how the container is opened, sampled and protected during use.',
    fitTitle: 'The handling route matters as much as the incoming result',
    fitSummary: 'Laboratory stocks, pharmaceutical processing and electronic formulations use DMSO differently. The pack and moisture-control plan should follow the end use.',
    buyerNotes: [
      { title: 'Pharmaceutical & life science', detail: 'Process or formulation use reviewed against the applicable material specification and quality-system requirements.' },
      { title: 'Chemical synthesis', detail: 'Reaction-solvent selection around water, impurities, work-up and the downstream purification route.' },
      { title: 'Advanced materials', detail: 'Coating and functional-material formulations where metals, colour and lot consistency may be important.' },
    ],
    selectionQuestions: ['What is the formulation, synthesis or process role?', 'Which water, colour, sulphur-impurity, peroxide or metals limits matter?', 'How will the container be sampled and protected from moisture?', 'What specification, documents, pack and annual volume are required?'],
  },
  {
    categorySlug: 'trace-analysis',
    categoryLabel: 'Trace Analysis',
    slug: 'nitric-acid',
    seoSlug: 'trace-grade-nitric-acid',
    productId: 'nitric-acid',
    productName: 'Trace Metal Grade Nitric Acid',
    metaTitle: 'Trace Metal Grade Nitric Acid Supplier | ICP-MS Acid',
    metaDescription: 'High-purity nitric acid for ICP-MS sample preparation, elemental analysis and contamination-sensitive processes. Confirm blank, analytes, concentration and packaging.',
    headline: 'Nitric Acid for trace-metal analysis and sample preparation',
    intro: 'For trace work, nitric acid is part of the analytical blank. A general purity claim is not enough: the target elements, reporting limits, digestion method, concentration, container and laboratory handling all affect whether the reagent is fit for the method.',
    lead: 'Send the analyte list and target reporting limits with the enquiry. That is more useful than asking for the “highest” grade without method context.',
    fitTitle: 'Build the reagent choice around the method blank',
    fitSummary: 'ICP-MS digestion and semiconductor wet processing may use the same acid name while demanding very different controls and qualification evidence.',
    buyerNotes: [
      { title: 'ICP-MS sample preparation', detail: 'Digestion and dilution work where elemental background is assessed against the method and reporting limit.' },
      { title: 'Elemental analysis', detail: 'Laboratory preparation requiring control of target metals, concentration and container-derived contamination.' },
      { title: 'Contamination-sensitive processing', detail: 'Wet-process use reviewed against the substrate, concentration, impurity profile and delivery system.' },
    ],
    selectionQuestions: ['Which elements and reporting limits are critical?', 'What digestion, dilution or wet-process method is being used?', 'Which acid concentration and blank performance are required?', 'What bottle material, pack size and lot documentation does the lab need?'],
  },
  {
    categorySlug: 'trace-analysis',
    categoryLabel: 'Trace Analysis',
    slug: 'hydrochloric-acid',
    seoSlug: 'trace-grade-hydrochloric-acid',
    productId: 'hydrochloric-acid',
    productName: 'High-Purity Hydrochloric Acid',
    metaTitle: 'High-Purity Hydrochloric Acid Supplier | Trace Analysis HCl',
    metaDescription: 'High-purity hydrochloric acid for trace analysis, sample preparation and contamination-sensitive wet processes. Review analytes, blank, concentration and packs.',
    headline: 'Hydrochloric Acid for trace analysis and controlled wet processes',
    intro: 'Hydrochloric acid is often used to stabilise analytes, prepare standards or support digestion chemistry. In trace analysis, the useful specification is the one built around the elements being measured, the concentration used and the blank contribution the method can tolerate.',
    lead: 'A short analyte list and the instrument method will usually tell us more than a broad request for ultrapure HCl.',
    fitTitle: 'Match the acid to the analytical chemistry',
    fitSummary: 'Sample preparation and electronic wet processing share contamination concerns, but their concentration, delivery and acceptance criteria may differ significantly.',
    buyerNotes: [
      { title: 'Trace analysis', detail: 'Standards, sample preparation and analyte stabilisation reviewed against target elements and method blanks.' },
      { title: 'Digestion chemistry', detail: 'Use alone or in defined acid mixtures, with concentration and impurity requirements confirmed for the method.' },
      { title: 'Electronic wet process', detail: 'Controlled cleaning or surface-treatment discussions covering impurities, container and point-of-use delivery.' },
    ],
    selectionQuestions: ['Which analytes and blank limits does the method use?', 'Is HCl used alone, for stabilisation or in an acid mixture?', 'What concentration and lot documentation are required?', 'Which container material, pack size and storage practice apply?'],
  },
  {
    categorySlug: 'trace-analysis',
    categoryLabel: 'Trace Analysis',
    slug: 'ultrapure-water',
    seoSlug: 'ultrapure-water',
    productName: 'Ultrapure Water',
    formula: 'H₂O',
    cas: '7732-18-5',
    metaTitle: 'Ultrapure Water Supplier | Trace Analysis & Process Water',
    metaDescription: 'Discuss ultrapure water for trace analysis, blank preparation and contamination-sensitive workflows. Specifications and pack formats are confirmed project by project.',
    headline: 'Ultrapure Water specified around the method and delivery route',
    intro: 'Water can be the largest component in an analytical blank or wet process, so “ultrapure” needs a definition. Ionic background, total organic carbon, particles, microbiological controls, container and time after opening should be agreed for the actual use.',
    lead: 'This product route is under technical portfolio review. We will not publish a generic numerical specification until the grade, test methods and supply format are confirmed.',
    fitTitle: 'Define ultrapure water by what the process measures',
    fitSummary: 'A laboratory rinse, an ICP-MS blank and a production wet process do not automatically need the same water specification or packaging route.',
    buyerNotes: [
      { title: 'Trace-analysis blanks', detail: 'Dilution, reagent preparation and blank work discussed against the method background and reporting limits.' },
      { title: 'Laboratory workflow', detail: 'Rinsing and sample preparation where container cleanliness, opening time and storage can influence results.' },
      { title: 'Process supply', detail: 'Packaged or project-based supply reviewed against volume, cleanliness, monitoring and point-of-use requirements.' },
    ],
    selectionQuestions: ['What instrument, method or process will use the water?', 'Which ionic, organic, particle or microbiological attributes are critical?', 'How long will an opened container remain in use?', 'What pack, annual volume, test methods and documents are required?'],
  },
]

export function coreProductSeoPath(page: CoreProductSeoPage) {
  return `/products/${page.seoSlug ?? page.slug}`
}

export function findCoreProductSeoPage(categorySlug: string, slug: string) {
  return coreProductSeoPages.find((page) => page.categorySlug === categorySlug && page.slug === slug)
}

export function findCoreProductSeoPath(categorySlug: string, productId: string) {
  const page = coreProductSeoPages.find((item) => item.categorySlug === categorySlug && item.productId === productId)
  return page ? coreProductSeoPath(page) : undefined
}
