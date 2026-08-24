export interface CaseStudy {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  region: string
  sector: string
  headline: string
  summary: string
  challenge: string
  approach: string[]
  parameters: { label: string; detail: string }[]
  outcome: string
  products: { label: string; href: string }[]
  image: string
  keywords: string[]
}

export const caseStudyDisclaimer = 'Representative composite qualification scenario. It illustrates a common technical and procurement workflow and is not a claim about a named customer, site or commercial result.'

export const caseStudies: CaseStudy[] = [
  {
    slug: 'electronic-grade-ipa-wafer-cleaning-europe',
    title: 'Electronic-Grade IPA Qualification for European Wafer Cleaning',
    metaTitle: 'Electronic-Grade IPA Qualification Case | European Wafer Cleaning',
    metaDescription: 'Representative European wafer-cleaning case showing how electronic-grade IPA is compared through metals, water, residue, particles, packaging and process trials.',
    region: 'Europe', sector: 'Semiconductor manufacturing',
    headline: 'Qualifying an IPA second source without treating purity as a single number',
    summary: 'A European semiconductor team needs a second-source route for isopropyl alcohol used after an established wet-clean step. Procurement wants continuity; process engineering wants no uncontrolled change.',
    challenge: 'The incumbent description uses a grade label, but the working process is sensitive to several different risks: moisture, trace metals, particles, non-volatile residue and contamination introduced during filling or dispensing.',
    approach: ['Translate the cleaning step into critical material attributes and an agreed analytical comparison.', 'Review a representative CoA, controlled specification, element panel, particle method and pack construction.', 'Run the candidate lot through the existing dispense and clean sequence without silently changing process conditions.', 'Record incoming checks, wafer observations and approval responsibilities before routine orders.'],
    parameters: [{ label: 'Water', detail: 'Reviewed against drying behaviour and the site’s qualified incoming method.' }, { label: 'Trace metals', detail: 'Element-by-element data and reporting limits are compared with the process risk assessment.' }, { label: 'Particles and residue', detail: 'Supplier controls and the site trial are considered together.' }, { label: 'Packaging', detail: 'Container, closure, fill route and point-of-use transfer materials remain in scope.' }],
    outcome: 'The sourcing decision is built on linked supplier evidence and local process verification. Approval is specific to the grade, production route and package evaluated.',
    products: [{ label: 'Electronic Grade Isopropyl Alcohol', href: '/products/electronic-grade-ipa' }, { label: 'Electronic Materials', href: '/products/electronic-materials' }],
    image: '/images/puretech/electronic-grade-ipa-hero-v2.png',
    keywords: ['electronic grade IPA supplier Europe', 'semiconductor IPA qualification', 'wafer cleaning solvent supplier', 'ultra pure isopropyl alcohol Europe'],
  },
  {
    slug: 'pgmea-lithography-second-source-usa',
    title: 'PGMEA Second-Source Review for a US Lithography Process',
    metaTitle: 'PGMEA Supplier Qualification Case | US Lithography Process',
    metaDescription: 'Representative US PGMEA second-source case covering organic impurities, water, residue, packaging compatibility, coating trials and change-control evidence.',
    region: 'United States', sector: 'Electronic materials',
    headline: 'Connecting a PGMEA specification with the coating result that matters',
    summary: 'A North American materials team is screening propylene glycol methyl ether acetate for a resist-related coating process and needs a defensible route from supplier sample to routine production pack.',
    challenge: 'A headline assay does not explain whether water, organic by-products, acidity, residue or the container route could shift coating quality. A data sheet alone cannot demonstrate process fit.',
    approach: ['Map known process sensitivities to a focused impurity and physical-property review.', 'Compare the proposed specification and representative lots with the current material using the same methods where practical.', 'Include container, closure and dispensing-contact materials in the qualification protocol.', 'Evaluate coating, bake and inspection observations under controlled conditions before release.'],
    parameters: [{ label: 'Organic profile', detail: 'Main component and process-relevant trace organics are compared chromatographically.' }, { label: 'Water and acidity', detail: 'Reviewed for formulation stability and process compatibility.' }, { label: 'Non-volatile residue', detail: 'Considered with surface and defect observations.' }, { label: 'Change control', detail: 'Method, raw-material and pack changes require a defined communication route.' }],
    outcome: 'The approved baseline states exactly which material, specification, pack and trial evidence were assessed, making later change review more useful.',
    products: [{ label: 'Electronic Grade PGMEA', href: '/products/electronic-grade-pgmea' }, { label: 'Photoresist Solvents', href: '/applications/semiconductor' }],
    image: '/images/puretech/electronic-materials.jpg',
    keywords: ['PGMEA supplier USA', 'electronic grade PGMEA North America', 'photoresist solvent supplier', 'PGMEA lithography qualification'],
  },
  {
    slug: 'pharmaceutical-ethanol-supplier-qualification-germany',
    title: 'Pharmaceutical Ethanol Supplier Qualification in Germany',
    metaTitle: 'Pharmaceutical Ethanol Qualification Case | Germany & EU',
    metaDescription: 'Representative German pharmaceutical ethanol qualification workflow covering compendial fit, impurity profile, ICH Q3C context, traceability and change control.',
    region: 'Germany', sector: 'Pharmaceutical manufacturing',
    headline: 'Building a pharmaceutical solvent file that quality and procurement can both use',
    summary: 'A German pharmaceutical manufacturer is reviewing ethanol for an established upstream process. The sourcing team needs continuity while quality needs a clear material, document and change-control baseline.',
    challenge: 'Compendial naming alone does not settle grade suitability, denaturant status, organic impurities, water, origin route, market documents or the customer’s finished-product residual-solvent assessment.',
    approach: ['Define the exact process role and confirm whether a compendial or customer specification governs.', 'Review identity, assay, water, organic impurities, traceability and representative lot documents.', 'Place supplier information into the customer’s ICH Q3C and material-risk framework without treating it as a finished-product conclusion.', 'Agree change-notification, deviation and document-revision expectations before approval.'],
    parameters: [{ label: 'Identity and assay', detail: 'Method and applicable compendial or customer requirements are recorded.' }, { label: 'Organic impurities', detail: 'Specified and unspecified peaks are reviewed in process context.' }, { label: 'Water', detail: 'Connected to reaction, formulation or drying sensitivity.' }, { label: 'Traceability', detail: 'Production, release, pack and lot records support the approved supply route.' }],
    outcome: 'The qualification file separates supplier evidence from the manufacturer’s own product and process risk decisions, reducing ambiguous approvals.',
    products: [{ label: 'Pharmaceutical Solvents', href: '/products/pharmaceutical-solvents' }, { label: 'Quality Documentation', href: '/quality/documentation' }],
    image: '/images/puretech/pharma-gmp.jpg',
    keywords: ['pharmaceutical ethanol supplier Germany', 'pharma solvent supplier Europe', 'ICH Q3C solvent qualification', 'GMP solvent documentation'],
  },
  {
    slug: 'icp-ms-nitric-acid-blank-control',
    title: 'ICP-MS Nitric Acid Qualification for Lower Method Blanks',
    metaTitle: 'ICP-MS Nitric Acid Blank-Control Case | Trace Analysis Reagent',
    metaDescription: 'Representative ICP-MS nitric acid qualification case showing element-panel review, method blanks, container control and lot-to-lot laboratory verification.',
    region: 'Europe & North America', sector: 'Trace-element analysis',
    headline: 'Investigating the whole reagent route when an ICP-MS blank moves',
    summary: 'An environmental and materials laboratory sees inconsistent blanks near its working reporting range and needs to determine whether acid, container, water or preparation practice contributes.',
    challenge: 'A general “ultra-pure” claim does not identify the target-element background, reporting limits, container contribution or what happens when the reagent passes through the laboratory’s real digestion and dilution sequence.',
    approach: ['Define the method, analyte panel, working concentration and blank acceptance logic.', 'Review supplier element-by-element data and concentration/assay information for candidate lots.', 'Prepare blanks with the same acid, water, vessels, cleaning and handling used for samples.', 'Trend local blanks across lots; treat supplier results as supporting evidence rather than a substitute for method control.'],
    parameters: [{ label: 'Element panel', detail: 'Matches the laboratory’s analytes and known interference risks.' }, { label: 'Reporting limits', detail: 'Interpreted with the dilution and concentration used in the method.' }, { label: 'Container blank', detail: 'Bottle, closure, storage and sampling remain part of the investigation.' }, { label: 'Lot trend', detail: 'Routine acceptance comes from laboratory data linked to supplier lots.' }],
    outcome: 'The laboratory gains a repeatable incoming-control approach and can distinguish bulk reagent data from the total method blank observed at the instrument.',
    products: [{ label: 'Trace Analysis Chemicals', href: '/products/trace-analysis' }, { label: 'Laboratory Testing', href: '/applications/laboratory' }],
    image: '/images/puretech/trace-analysis.jpg',
    keywords: ['ICP-MS nitric acid supplier', 'ultra pure nitric acid blank control', 'trace metal acid Europe', 'ICP-MS reagent North America'],
  },
  {
    slug: 'bulk-acetone-drum-to-ibc-north-america',
    title: 'Bulk Acetone: Drum-to-IBC Transition in North America',
    metaTitle: 'Bulk Acetone Drum-to-IBC Qualification | North America',
    metaDescription: 'Representative North American bulk acetone case covering container compatibility, transfer design, receiving controls, dangerous-goods planning and lot documentation.',
    region: 'North America', sector: 'Industrial manufacturing',
    headline: 'Treating a larger package as a process change, not only a purchasing change',
    summary: 'A manufacturing site wants to reduce drum handling by moving a qualified acetone grade to an IBC route while preserving product quality at the point of use.',
    challenge: 'A package change introduces new contact materials, headspace, closure, transfer, storage, sampling and receiving conditions. The bulk liquid specification alone cannot cover those risks.',
    approach: ['Document existing consumption, storage, receiving and dispense conditions.', 'Review IBC construction, seals, compatibility, fill route and dangerous-goods responsibilities.', 'Define sampling and incoming checks that represent the delivered package.', 'Run a controlled site trial and confirm that the point-of-use material remains within the approved baseline.'],
    parameters: [{ label: 'Pack compatibility', detail: 'Container and wetted transfer materials are reviewed for the selected solvent.' }, { label: 'Identity and assay', detail: 'Incoming confirmation remains linked to the qualified grade.' }, { label: 'Water and residue', detail: 'Checked where storage and transfer could influence process performance.' }, { label: 'Logistics evidence', detail: 'Labels, shipping information, lot documents and receiving responsibilities align.' }],
    outcome: 'The package transition proceeds only after technical, EHS, quality and operations responsibilities are explicit and the site trial is accepted.',
    products: [{ label: 'High-Purity Acetone', href: '/products/acetone' }, { label: 'Bulk Chemical Supply', href: '/oem/bulk-supply' }],
    image: '/images/puretech/high-purity-solvents.jpg',
    keywords: ['bulk acetone supplier USA', 'acetone IBC North America', 'high purity acetone bulk supply', 'solvent packaging qualification'],
  },
  {
    slug: 'private-label-solvent-portfolio-europe',
    title: 'Private-Label High-Purity Solvent Portfolio for Europe',
    metaTitle: 'Private-Label Chemical Programme Case | European Solvents',
    metaDescription: 'Representative European private-label solvent programme covering portfolio scope, specifications, REACH and CLP roles, SDS, artwork, packaging and batch traceability.',
    region: 'Europe', sector: 'Chemical distribution',
    headline: 'Turning a private-label request into a controlled European product programme',
    summary: 'A specialist distributor wants a focused high-purity solvent range for European industrial and laboratory customers under its own commercial identity.',
    challenge: 'Private label changes more than artwork. Product identity, specification ownership, importer roles, REACH context, CLP label content, SDS languages, packaging, traceability and change approval must stay aligned.',
    approach: ['Select a demand-led portfolio and define the customer segment for each grade.', 'Create a responsibility matrix for regulatory, label, SDS, artwork, release and complaint handling.', 'Approve specifications, document templates, packs and label content product by product.', 'Complete pilot orders and traceability checks before expanding the range or territory.'],
    parameters: [{ label: 'Portfolio fit', detail: 'Each product has a clear market, application and controlled grade definition.' }, { label: 'Regulatory roles', detail: 'Manufacturer, importer and distributor responsibilities are made explicit.' }, { label: 'Artwork control', detail: 'Approved label, pack and document versions share a change route.' }, { label: 'Batch traceability', detail: 'Private-label identity remains linked to original production and release records.' }],
    outcome: 'The launch becomes a series of approved product files with clear ownership, rather than a broad catalogue that is difficult to maintain safely.',
    products: [{ label: 'OEM & Private Label Solutions', href: '/oem-custom-chemical-solutions' }, { label: 'European Market Support', href: '/markets/europe' }],
    image: '/images/puretech/manufacturing.jpg',
    keywords: ['private label chemical manufacturer Europe', 'OEM solvent supplier EU', 'REACH CLP private label chemicals', 'European chemical distributor programme'],
  },
]

export function findCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug)
}
