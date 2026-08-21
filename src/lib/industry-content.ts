export interface IndustryPage {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  headline: string
  subline: string
  heroStat: string
  heroStatLabel: string
  intro: string
  editorNote: string
  commonEnquiries: string[]
  selectionQuestions: string[]
  challenges: { title: string; desc: string }[]
  chemicals: { name: string; grade: string; use: string; href: string }[]
  processSteps: { step: string; chemical: string; grade: string; detail: string }[]
  faqs: { q: string; a: string }[]
  keywords: string[]
}

export const industries: IndustryPage[] = [
  {
    slug: 'semiconductor',
    title: 'Semiconductor & IC Fabrication',
    metaTitle: 'Semiconductor Wet Chemicals | Process-led Product Selection | PureTech',
    metaDescription:
      'Find wet-process solvents, acids, oxidants and developers by wafer-cleaning, lithography, resist-strip and CMP-related applications.',
    headline: 'Begin with the wet process, not a grade label',
    subline: 'Wafer clean · lithography · resist strip · CMP support',
    heroStat: 'Process first',
    heroStatLabel: 'Specification approach',
    intro:
      'Fab enquiries rarely begin with a catalogue number. They begin with a surface, a process step and an excursion the team does not want to repeat. This guide maps the usual chemical families to those conversations, then leaves the final limits where they belong: in the customer specification and qualification plan.',
    editorNote:
      'A higher grade is not automatically the better buying decision. The useful grade is the one that fits the contamination budget, distribution system, incoming-control capability and change-management plan.',
    commonEnquiries: ['Wafer clean & dry', 'Lithography solvents', 'Resist strip & rework'],
    selectionQuestions: [
      'Which exact process step and contact surface are in scope?',
      'Do you have an incumbent specification, approved vendor data or recent excursion report?',
      'Which metals, particles, anions, water or organic residues are critical?',
      'What container, connection, filtration and point-of-use controls are already qualified?',
    ],
    challenges: [
      {
        title: 'The specification has to match the step',
        desc: 'A solvent used for tool wipe-down is not selected in the same way as a chemical contacting a device surface. We separate the process route before comparing grades.',
      },
      {
        title: 'Packaging is part of chemical quality',
        desc: 'The container, closure, headspace, transfer line and point-of-use filter can change the risk profile. These details belong in the qualification discussion, not at the end of it.',
      },
      {
        title: 'Lot data needs context',
        desc: 'A list of low numbers is only useful when test methods, reporting limits and sampling practice are understood by both supplier and customer.',
      },
      {
        title: 'Change control matters after approval',
        desc: 'For long qualification cycles, buyers usually ask about manufacturing route, notification terms, traceability and continuity as closely as the initial sample result.',
      },
    ],
    chemicals: [
      { name: 'Electronic Grade IPA', grade: 'Electronic grades', use: 'Wafer rinse, post-CMP clean and drying studies', href: '/product/eipa' },
      { name: 'PGMEA', grade: 'Electronic grades', use: 'Resist formulation, coating and edge-bead removal', href: '/product/pgmea' },
      { name: 'PGME', grade: 'Electronic grades', use: 'Lithography solvent blends and equipment cleaning', href: '/product/pgme' },
      { name: 'Hydrogen Peroxide', grade: 'Process grades', use: 'Oxidising cleans and formulated wet-process chemistry', href: '/product/hydrogen-peroxide' },
      { name: 'Ammonium Hydroxide', grade: 'Process grades', use: 'Alkaline cleaning formulations and particle-removal studies', href: '/product/ammonium-hydroxide' },
      { name: 'Hydrochloric Acid', grade: 'Process grades', use: 'Acid cleaning formulations and ionic-contamination control', href: '/product/hydrochloric-acid' },
      { name: 'TMAH', grade: 'Developer grades', use: 'Positive photoresist development', href: '/product/tmah' },
      { name: 'NMP', grade: 'Electronic grades', use: 'Resist strip, rework and polyimide-related processes', href: '/product/nmp' },
    ],
    processSteps: [
      { step: 'Surface preparation', chemical: 'H₂O₂ / NH₄OH / HCl', grade: 'By internal spec', detail: 'Confirm the substrate, bath chemistry, temperature window and impurity limits before selecting individual components.' },
      { step: 'Resist coat & EBR', chemical: 'PGMEA / PGME', grade: 'Electronic', detail: 'Review resist compatibility, water, acidity, residue and evaporation behaviour as one qualification set.' },
      { step: 'Positive-resist develop', chemical: 'TMAH', grade: 'Developer', detail: 'Concentration control and process compatibility normally lead the discussion; the website grade is a starting point only.' },
      { step: 'Resist strip & rework', chemical: 'NMP / DMSO / Acetone', grade: 'Process-specific', detail: 'Film type, cure history, substrate compatibility and the downstream rinse decide the practical shortlist.' },
      { step: 'Post-process clean & dry', chemical: 'IPA / formulated cleans', grade: 'By contamination budget', detail: 'Align trace-metal, particle and residue targets with the actual contact step and on-site delivery system.' },
    ],
    faqs: [
      {
        q: 'Can you recommend a grade from the technology node alone?',
        a: 'Not responsibly. Node information is useful context, but the same fab can use different limits for tool cleaning, substrate contact, lithography and final rinse. We ask for the process step and current specification before recommending a starting grade.',
      },
      {
        q: 'How should SEMI grade terminology be used during qualification?',
        a: 'SEMI C1 provides a framework for liquid-chemical grades and suitable analytical procedures. The customer specification still governs acceptance. We therefore compare the requested limits, methods and reporting format rather than treating a grade name as the entire specification.',
      },
      {
        q: 'What should we send with an initial enquiry?',
        a: 'A redacted specification is ideal. If that is not available, send the process step, current material, critical impurity limits, pack format, sample volume, annual demand and target qualification date.',
      },
    ],
    keywords: ['semiconductor wet chemicals', 'wafer cleaning chemicals', 'lithography solvents', 'electronic grade solvent'],
  },
  {
    slug: 'ev-battery',
    title: 'EV Battery & Energy Storage',
    metaTitle: 'Battery Solvents for Slurry and Electrolyte Applications | PureTech',
    metaDescription:
      'Explore NMP for cathode slurry and carbonate solvents for electrolyte formulation, with application-led qualification and packaging guidance.',
    headline: 'Separate slurry chemistry from electrolyte chemistry',
    subline: 'Cathode slurry · electrolyte formulation · component cleaning',
    heroStat: 'Moisture aware',
    heroStatLabel: 'From sample to transfer',
    intro:
      '“Battery grade” is too broad to be a useful starting point. NMP used with a PVDF binder raises a different set of questions from DMC, EMC or DEC entering an electrolyte blend. We organise the portfolio around the unit operation, the customer’s incoming QC and the way the solvent is handled after opening.',
    editorNote:
      'The bottle is only one part of the moisture-control chain. Sampling, headspace, connection design, dry-room transfer and hold time should be reviewed alongside the product specification.',
    commonEnquiries: ['PVDF / NMP slurry', 'Electrolyte carbonates', 'Dry-room handling'],
    selectionQuestions: [
      'Is the solvent for binder dissolution, slurry adjustment, electrolyte blending or cleaning?',
      'Which cell chemistry and formulation are being qualified?',
      'How are water, acid, trace ions and organic impurities measured at incoming QC?',
      'What packaging, headspace and transfer arrangement will be used in production?',
    ],
    challenges: [
      {
        title: 'Moisture is a system issue',
        desc: 'A low release value can be lost through sampling or transfer. Qualification should cover the unopened pack, the connection step and the realistic in-use window.',
      },
      {
        title: 'Impurity priorities differ by formulation',
        desc: 'Teams often monitor different ionic, metallic and organic impurities. We prefer the customer target list to a generic statement about “ultra purity.”',
      },
      {
        title: 'Slurry behaviour is formulation-specific',
        desc: 'Binder grade, solids loading, mixing order and recovery strategy can all affect how NMP performs. A sample should be evaluated in the real formulation.',
      },
      {
        title: 'Scale-up changes the handling route',
        desc: 'Bottle trials do not reproduce drum or IBC transfer. Packaging and connection requirements should be defined before the production qualification lot.',
      },
    ],
    chemicals: [
      { name: 'NMP', grade: 'Battery / electronic grades', use: 'PVDF dissolution and cathode-slurry preparation', href: '/product/nmp' },
      { name: 'DMC', grade: 'Battery / electronic grades', use: 'Electrolyte co-solvent and formulation work', href: '/product/dmc' },
      { name: 'EMC', grade: 'Battery / electronic grades', use: 'Electrolyte co-solvent screening', href: '/product/emc' },
      { name: 'DEC', grade: 'Battery / electronic grades', use: 'Electrolyte formulation and development', href: '/product/dec' },
      { name: 'Ethanol', grade: 'Selected by use', use: 'Component and process cleaning studies', href: '/product/ethanol' },
    ],
    processSteps: [
      { step: 'Binder solution', chemical: 'NMP', grade: 'Battery / anhydrous direction', detail: 'Compare water, colour, residue and agreed trace impurities in the actual binder system.' },
      { step: 'Slurry preparation', chemical: 'NMP', grade: 'Customer specification', detail: 'Run sample and pilot lots with the real solids loading, mixing order and coating window.' },
      { step: 'Electrolyte formulation', chemical: 'DMC / EMC / DEC', grade: 'Electrolyte direction', detail: 'Screen solvent ratios and impurity limits against the cell maker’s formulation and analytical methods.' },
      { step: 'Production transfer', chemical: 'Selected solvent', grade: 'Qualified pack', detail: 'Confirm headspace, closure, connection, sampling and post-opening hold time at the intended scale.' },
    ],
    faqs: [
      {
        q: 'Can one “battery grade” cover both slurry and electrolyte use?',
        a: 'Usually not as a complete specification. The relevant impurity list, water target, packaging and handling route differ. We treat the use case as the first filter, then compare the controlled specification.',
      },
      {
        q: 'What information helps with an NMP sample request?',
        a: 'Binder type, target water limit, current solvent specification, sample size, intended recovery route and any colour or residue concerns help us choose a sensible starting option.',
      },
      {
        q: 'Do you recommend a carbonate blend?',
        a: 'We can discuss individual solvent options and supply formats, but the electrolyte formulation and cell validation remain with the customer. The most useful first step is a specification-to-specification review.',
      },
    ],
    keywords: ['battery grade NMP', 'electrolyte solvents', 'DMC EMC DEC', 'cathode slurry solvent'],
  },
  {
    slug: 'display-panel',
    title: 'Display & OLED Manufacturing',
    metaTitle: 'Display Process Chemicals for Coating, Develop and Clean | PureTech',
    metaDescription:
      'Find PGMEA, TMAH, NMP, DMSO and IPA by display-glass cleaning, resist coating, development and polyimide applications.',
    headline: 'Match the solvent to the film stack and coating window',
    subline: 'Substrate clean · coat & EBR · develop · polyimide process',
    heroStat: 'Large-area',
    heroStatLabel: 'Uniformity in focus',
    intro:
      'Display production combines large substrates with thin films that are sensitive to small changes in coating and cleaning behaviour. The practical conversation is therefore about the substrate, film stack, coat or develop method and existing defect pattern—not simply whether a solvent is described as display grade.',
    editorNote:
      'For coating work, a solvent can meet a chemical specification and still need formulation-level evaluation. Evaporation profile, wetting, filtration and the customer’s defect criteria belong in the trial plan.',
    commonEnquiries: ['Glass substrate clean', 'Resist coat & EBR', 'PI solvent selection'],
    selectionQuestions: [
      'Which substrate, panel generation and film stack are involved?',
      'Is the material used for cleaning, resist formulation, EBR, development or PI processing?',
      'Which coating defects or uniformity measures are part of acceptance?',
      'What filtration, packaging and dispense system will be used on the line?',
    ],
    challenges: [
      { title: 'Large-area coating exposes small variations', desc: 'Water, acidity, residue and evaporation behaviour can show up as film or edge effects. The shortlist should be tested in the actual coating window.' },
      { title: 'Cleaning depends on the surface', desc: 'Glass, patterned layers and equipment surfaces do not share one compatibility rule. Contact material and downstream steps need to be clear.' },
      { title: 'Developer concentration needs control', desc: 'For TMAH work, concentration and dispense consistency are discussed alongside impurity limits and container format.' },
      { title: 'Scale and filtration affect outcomes', desc: 'Lab coating and line-scale dispense can behave differently. Include filtration and delivery hardware in the production trial.' },
    ],
    chemicals: [
      { name: 'PGMEA', grade: 'Electronic grades', use: 'Resist formulation, coating and edge-bead removal', href: '/product/pgmea' },
      { name: 'TMAH', grade: 'Developer grades', use: 'Positive photoresist development', href: '/product/tmah' },
      { name: 'NMP', grade: 'Electronic grades', use: 'Polyimide-related processing and rework studies', href: '/product/nmp' },
      { name: 'DMSO', grade: 'Electronic grades', use: 'Formulation and cleaning studies where compatibility allows', href: '/product/dmso' },
      { name: 'Electronic Grade IPA', grade: 'Electronic grades', use: 'Substrate and component cleaning', href: '/product/eipa' },
    ],
    processSteps: [
      { step: 'Substrate clean', chemical: 'IPA / formulated clean', grade: 'By surface & residue limit', detail: 'Confirm the surface, contamination type, rinse sequence and drying method.' },
      { step: 'Resist coat & EBR', chemical: 'PGMEA / PGME', grade: 'Electronic', detail: 'Compare water, acidity, residue and evaporation behaviour in the real formulation.' },
      { step: 'Resist develop', chemical: 'TMAH', grade: 'Developer', detail: 'Align concentration, impurity limits and dispense requirements with the qualified process.' },
      { step: 'PI / organic-film work', chemical: 'NMP / DMSO', grade: 'Process-specific', detail: 'Check polymer compatibility, cure history, residue and downstream cleaning before scale-up.' },
    ],
    faqs: [
      { q: 'Which PGMEA grade should we start with for a display process?', a: 'Start with the current resist or coating specification and the defect criteria used on your line. Panel technology alone is not enough to define the grade. We can then compare available specifications and propose a sample route.' },
      { q: 'Can you support a solvent-blend discussion?', a: 'Yes, at the requirements stage. Please share the components, target composition, key impurity limits, packaging and whether the blend is for R&D, pilot or production use.' },
      { q: 'What makes a useful production trial?', a: 'Use the intended container and dispense route where possible, record incoming lot data, and compare film or cleaning performance against the current material under the same process window.' },
    ],
    keywords: ['display process chemicals', 'PGMEA display', 'TMAH developer', 'OLED solvent', 'polyimide solvent'],
  },
  {
    slug: 'pharmaceutical-lab',
    title: 'Pharmaceutical & Analytical Laboratory',
    metaTitle: 'HPLC and LC-MS Solvents Selected by Method | PureTech',
    metaDescription:
      'Find acetonitrile, methanol, THF, DCM and hexane for HPLC, LC-MS, extraction and pharmaceutical process applications.',
    headline: 'Choose the solvent around the method you run',
    subline: 'HPLC · LC-MS · sample preparation · process & extraction',
    heroStat: 'Method fit',
    heroStatLabel: 'Before the grade label',
    intro:
      'Analytical laboratories notice solvent quality in the baseline, background, pressure profile and reproducibility of a method. A useful product discussion starts with the detector and method conditions, then moves to UV absorbance, water, residue and lot documentation. “HPLC grade” on its own does not answer all of those questions.',
    editorNote:
      'ICH Q3C addresses residual solvents in pharmaceutical products. It is relevant to process-solvent risk assessment, but it does not by itself define whether a solvent is suitable for a particular chromatographic method.',
    commonEnquiries: ['Gradient HPLC', 'LC-MS background', 'Extraction & work-up'],
    selectionQuestions: [
      'Which instrument, detector and analytical method are in use?',
      'Is the run isocratic or gradient, and what wavelength or MS background is critical?',
      'Is the solvent for mobile phase, sample preparation, synthesis, extraction or cleaning?',
      'Which pharmacopoeial, quality or residual-solvent requirements apply to the workflow?',
    ],
    challenges: [
      { title: 'The method reveals the relevant impurity', desc: 'UV absorbance, MS background, water and non-volatile residue do not carry the same weight in every method. We ask which signal is causing concern.' },
      { title: 'Method transfer needs a baseline', desc: 'When moving from an incumbent solvent, compare system suitability and chromatographic behaviour under the same preparation and instrument conditions.' },
      { title: 'Process and analytical grades are different questions', desc: 'A solvent used in API synthesis or extraction is selected around process, residual-solvent and quality requirements—not solely around an HPLC label.' },
      { title: 'Documentation should match the quality system', desc: 'Buyers may need specifications, CoA format, traceability, change notification or declarations. Define the document set before approval.' },
    ],
    chemicals: [
      { name: 'Acetonitrile', grade: 'HPLC / gradient / LC-MS', use: 'Reversed-phase mobile phase and sample preparation', href: '/product/acetonitrile' },
      { name: 'Methanol', grade: 'HPLC / gradient / LC-MS', use: 'Mobile phase, extraction and dissolution workflows', href: '/product/methanol' },
      { name: 'Tetrahydrofuran', grade: 'HPLC / anhydrous', use: 'Specialised chromatography and synthesis work', href: '/product/thf' },
      { name: 'Dichloromethane', grade: 'Pharma / HPLC prep', use: 'Extraction, synthesis and sample preparation', href: '/product/dcm' },
      { name: 'n-Hexane', grade: 'HPLC / pharma', use: 'Normal-phase work and extraction', href: '/product/n-hexane' },
    ],
    processSteps: [
      { step: 'Define the use', chemical: 'Mobile phase or process solvent', grade: 'Use-specific', detail: 'Separate chromatographic, sample-preparation and manufacturing requirements before comparing products.' },
      { step: 'Set method priorities', chemical: 'ACN / Methanol / THF', grade: 'HPLC / LC-MS direction', detail: 'Document wavelength, gradient, background, water and residue concerns from the actual method.' },
      { step: 'Compare with the incumbent', chemical: 'Selected candidate', grade: 'Qualification sample', detail: 'Run system suitability, blanks and representative samples under controlled, like-for-like conditions.' },
      { step: 'Close the document review', chemical: 'Qualified product', grade: 'Controlled specification', detail: 'Agree the specification, CoA fields, change notification and supply format before routine purchase.' },
    ],
    faqs: [
      { q: 'What is the practical difference between HPLC and LC-MS solvent selection?', a: 'HPLC-UV work usually focuses strongly on absorbance and gradient baseline, while LC-MS also makes background ions and adduct-forming impurities visible. The exact method and instrument sensitivity should decide which data to compare.' },
      { q: 'Does ICH Q3C define HPLC-grade solvents?', a: 'No. ICH Q3C is a guideline for residual solvents in pharmaceutical products. It is relevant when a solvent is used in manufacturing, but chromatographic suitability is established through the solvent specification and method performance.' },
      { q: 'How should we qualify a replacement mobile-phase solvent?', a: 'Use your current solvent as the baseline, keep preparation and instrument settings controlled, and compare blanks, system suitability, retention, peak shape, baseline and representative samples across more than one lot where appropriate.' },
    ],
    keywords: ['HPLC solvent', 'LC-MS solvent', 'pharmaceutical process solvent', 'acetonitrile', 'methanol'],
  },
]
