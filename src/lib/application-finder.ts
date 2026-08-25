import type { Product } from '@/lib/products'

export interface ApplicationRoute {
  id: string
  label: string
  area: string
  summary: string
  buyerCue: string
  keywords: string[]
  productIds: string[]
}

export const applicationRoutes: ApplicationRoute[] = [
  {
    id: 'wafer-cleaning',
    label: 'Wafer cleaning & drying',
    area: 'Semiconductor',
    summary: 'Rinse, post-CMP clean, surface preparation and solvent-assisted drying.',
    buyerCue: 'Start with the surface, process step and contamination budget.',
    keywords: ['wafer', 'rinse', 'cmp', 'cleaning', 'drying', 'marangoni', 'rca', 'srd'],
    productIds: ['eipa', 'hydrogen-peroxide', 'ammonium-hydroxide', 'hydrochloric-acid', 'acetone'],
  },
  {
    id: 'lithography',
    label: 'Lithography & EBR',
    area: 'Semiconductor / Display',
    summary: 'Resist formulation, coating, edge-bead removal and positive-resist development.',
    buyerCue: 'Tell us the resist system, coat method and current solvent specification.',
    keywords: ['lithography', 'photoresist', 'resist', 'ebr', 'coating', 'developer', 'arf', 'euv'],
    productIds: ['pgmea', 'pgme', 'n-propyl-acetate', 'butyl-acetate', 'tmah'],
  },
  {
    id: 'resist-removal',
    label: 'Resist removal & rework',
    area: 'Semiconductor / Display',
    summary: 'Solvents and process chemicals considered for strip, rework and equipment cleaning.',
    buyerCue: 'Film type, cure history, substrate and downstream rinse all matter.',
    keywords: ['strip', 'removal', 'rework', 'cleaner', 'polyimide', 'residue'],
    productIds: ['nmp', 'dmso', 'acetone', 'sulfuric-acid', 'hydrogen-peroxide'],
  },
  {
    id: 'display-coating',
    label: 'Display coating & develop',
    area: 'Display / OLED',
    summary: 'Solvent and developer routes for glass clean, resist coat, develop and polyimide work.',
    buyerCue: 'Begin with substrate size, film stack and coating window.',
    keywords: ['display', 'oled', 'tft', 'lcd', 'glass', 'polyimide', 'coating'],
    productIds: ['pgmea', 'tmah', 'nmp', 'dmso', 'eipa'],
  },
  {
    id: 'cathode-slurry',
    label: 'Cathode slurry preparation',
    area: 'Battery',
    summary: 'NMP options for PVDF dissolution, slurry preparation and production transfer.',
    buyerCue: 'Share binder grade, solids loading, water limit and recovery plan.',
    keywords: ['cathode', 'slurry', 'pvdf', 'binder', 'electrode', 'nmc', 'lfp'],
    productIds: ['nmp'],
  },
  {
    id: 'electrolyte',
    label: 'Electrolyte solvent screening',
    area: 'Battery',
    summary: 'Carbonate solvents for electrolyte formulation and qualification studies.',
    buyerCue: 'Moisture, acid, trace ions and packaging should be reviewed as one system.',
    keywords: ['electrolyte', 'carbonate', 'dmc', 'emc', 'dec', 'li-ion', 'battery'],
    productIds: ['dmc', 'emc', 'dec'],
  },
  {
    id: 'chromatography',
    label: 'HPLC, UHPLC & LC-MS',
    area: 'Analytical laboratory',
    summary: 'Mobile-phase and sample-preparation solvents selected around the actual method.',
    buyerCue: 'Detector, wavelength, gradient and background sensitivity come first.',
    keywords: ['hplc', 'uhplc', 'lc-ms', 'chromatography', 'mobile phase', 'gradient', 'uv'],
    productIds: ['acetonitrile', 'methanol', 'thf', 'n-hexane'],
  },
  {
    id: 'pharma-processing',
    label: 'Pharma process & extraction',
    area: 'Pharmaceutical',
    summary: 'Solvents for synthesis, work-up, extraction and method transfer discussions.',
    buyerCue: 'Use, residual-solvent control and documentation define the shortlist.',
    keywords: ['pharma', 'api', 'synthesis', 'extraction', 'work-up', 'residual solvent'],
    productIds: ['dcm', 'ethyl-acetate', 'ethanol', 'acetone', 'nmp', 'thf'],
  },
  {
    id: 'precision-cleaning',
    label: 'Precision component cleaning',
    area: 'Electronics / Medical',
    summary: 'Fast-evaporating solvents for components, optics and controlled cleaning processes.',
    buyerCue: 'Check material compatibility, residue, drying behaviour and site controls.',
    keywords: ['precision cleaning', 'component', 'optics', 'pcb', 'medical device', 'degreasing'],
    productIds: ['eipa', 'ipa', 'ethanol', 'acetone'],
  },
]

export function productSearchText(product: Product) {
  return [
    product.nameEn,
    product.cas,
    product.formula,
    product.subcategory,
    product.tagline,
    product.description,
    ...product.semiApps,
    ...product.batteryApps,
    ...product.labApps,
    ...product.industryApps,
    ...product.markets,
  ]
    .join(' ')
    .toLowerCase()
}

export function primaryApplication(product: Product) {
  return (
    product.semiApps[0] ??
    product.batteryApps[0] ??
    product.labApps[0] ??
    product.industryApps[0] ??
    product.subcategory
  )
}

export function productIntroduction(product: Product) {
  const use = primaryApplication(product).replace(/\s*[—–].*$/, '').replace(/\.$/, '')

  if (product.category === 'electronic') {
    return `${product.nameEn} is commonly discussed for ${use.toLowerCase()}. The grade conversation should begin with the process step, exposed surface and agreed limits for water, trace metals and particles—not with the highest purity label by default.`
  }
  if (product.category === 'photoresist') {
    return `${product.nameEn} is often shortlisted for ${use.toLowerCase()}. In coating and lithography work, purity is only part of the decision: evaporation behaviour, water, acidity, residue and compatibility with the resist system should be reviewed together.`
  }
  if (product.category === 'battery') {
    return `${product.nameEn} is considered for ${use.toLowerCase()}. Battery teams normally qualify the solvent against their own chemistry, moisture budget, incoming-control method and dry-handling route before moving from sample to production scale.`
  }
  if (product.category === 'lab') {
    return `${product.nameEn} is used in ${use.toLowerCase()} and related analytical workflows. The right grade depends on the method: detector, wavelength, gradient profile, background sensitivity and water tolerance are usually more useful starting points than a generic “premium” label.`
  }
  if (['acid', 'peroxide', 'base'].includes(product.category)) {
    return `${product.nameEn} is evaluated for ${use.toLowerCase()} and other controlled wet processes. Concentration, impurity profile, container compatibility and the delivery path to point of use should be agreed before qualification.`
  }
  return `${product.nameEn} is available for ${use.toLowerCase()} and adjacent production or laboratory uses. We recommend comparing the intended use, required documentation, residue or water limits, and packaging format before choosing a grade.`
}

export function selectionNotes(product: Product) {
  if (product.category === 'lab') {
    return [
      'Which instrument and detector will the solvent be used with?',
      'Is the method isocratic or gradient, and what wavelength or MS background is critical?',
      'Are you transferring an established method or developing a new one?',
      'Which lot documents and change-notification terms does your quality system require?',
    ]
  }
  if (product.category === 'battery') {
    return [
      'What cell chemistry, formulation step and moisture limit apply?',
      'Which trace ions or organic impurities are part of incoming QC?',
      'How will the material move from container to dry room or blending vessel?',
      'What sample, pilot and production volumes are planned?',
    ]
  }
  if (product.category === 'photoresist') {
    return [
      'Which resist, polymer or coating formulation is in use?',
      'What evaporation, film-uniformity or edge-bead behaviour needs to be preserved?',
      'Which water, acidity, peroxide and residue limits are already qualified?',
      'What container, filtration and point-of-use connection are required?',
    ]
  }
  if (['electronic', 'acid', 'peroxide', 'base'].includes(product.category)) {
    return [
      'Where in the process does the chemical contact the wafer, substrate or tool?',
      'Which metals, particles, anions, water or residue limits are truly critical?',
      'What is the current qualified specification or incumbent baseline?',
      'How will the product be sampled, connected, filtered and stored on site?',
    ]
  }
  return [
    'What is the exact use and contact material?',
    'Which assay, water, residue or impurity limits matter to the process?',
    'What documentation or regulatory statement is needed?',
    'Which pack size, annual volume and delivery pattern fit the site?',
  ]
}
