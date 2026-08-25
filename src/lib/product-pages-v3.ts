export type ProductV3Category = 'electronic' | 'solvents' | 'pharma' | 'trace' | 'custom'

export interface ProductPageV3 {
  id: string
  no: number
  slug: string
  name: string
  category: ProductV3Category
  categoryLabel: string
  categoryHref: string
  seoTitle: string
  metaDescription: string
  h1: string
  shortDescription: string
  applications: string[]
  industries: string[]
  grade: string
  packaging: string[]
  documents: string[]
  image: string
  keywords: string[]
  productId?: string
}

const categoryInfo: Record<ProductV3Category, { label: string; href: string; image: string; industries: string[]; grade: string }> = {
  electronic: { label: 'Electronic & Advanced Materials', href: '/products/electronic-materials', image: '/images/puretech/electronic-materials.jpg', industries: ['Semiconductor', 'Electronics', 'Advanced materials'], grade: 'Electronic and high-purity routes' },
  solvents: { label: 'High-Purity & Specialty Solvents', href: '/products/high-purity-solvents', image: '/images/puretech/high-purity-solvents.jpg', industries: ['Chemical processing', 'Industrial manufacturing', 'Research'], grade: 'Application-matched solvent grades' },
  pharma: { label: 'Pharmaceutical & GMP Solvents', href: '/products/pharmaceutical-solvents', image: '/images/puretech/pharma-gmp.jpg', industries: ['Pharmaceutical manufacturing', 'API production', 'Life science'], grade: 'Pharmaceutical supply review' },
  trace: { label: 'Trace Analysis Chemicals', href: '/products/trace-analysis', image: '/images/puretech/trace-analysis.jpg', industries: ['Elemental analysis', 'Environmental testing', 'Contamination-sensitive manufacturing'], grade: 'Trace-analysis and high-purity routes' },
  custom: { label: 'Industrial & Custom Supply', href: '/products/custom-supply', image: '/images/puretech/manufacturing.jpg', industries: ['Industrial manufacturing', 'Chemical distribution', 'OEM programmes'], grade: 'Project-specific supply route' },
}

function makeProduct(no: number, slug: string, name: string, category: ProductV3Category, productId: string | undefined, applications: string[], industries?: string[], seoTitle?: string): ProductPageV3 {
  const info = categoryInfo[category]
  const appText = applications.slice(0, 3).join(', ')
  return {
    id: `PTM-${String(no).padStart(3, '0')}`,
    no,
    slug,
    name,
    category,
    categoryLabel: info.label,
    categoryHref: info.href,
    seoTitle: seoTitle ?? `${name} Supplier | High-Purity Chemical Materials`,
    metaDescription: `Review ${name} for ${appText}. PURETECHMATERIALS supports product, grade, documentation, packaging and supply-route evaluation.`,
    h1: name,
    shortDescription: `${name} considered for ${appText}. Selection begins with the application, critical limits, destination, pack and qualification plan.`,
    applications,
    industries: industries ?? info.industries,
    grade: info.grade,
    packaging: ['Qualification pack', 'Production pack', 'Drum or IBC review'],
    documents: ['Current specification', 'Safety Data Sheet', 'CoA format', 'Technical Data Sheet'],
    image: info.image,
    keywords: [`${name.toLowerCase()} supplier`, ...applications.map((item) => `${name.toLowerCase()} ${item.toLowerCase()}`)],
    productId,
  }
}

export const productPagesV3: ProductPageV3[] = [
  makeProduct(1, 'electronic-grade-ipa', 'Electronic Grade IPA', 'electronic', 'eipa', ['semiconductor wafer cleaning', 'precision electronics cleaning', 'advanced packaging'], ['Semiconductor', 'Display', 'Electronics'], 'Electronic Grade IPA Supplier | High-Purity Isopropyl Alcohol'),
  makeProduct(2, 'electronic-grade-ethanol', 'Electronic Grade Ethanol', 'electronic', 'ethanol', ['semiconductor cleaning', 'electronics processing', 'precision manufacturing'], undefined, 'Electronic Grade Ethanol Supplier | Precision Cleaning Solvent'),
  makeProduct(3, 'pgmea', 'PGMEA', 'electronic', 'pgmea', ['photoresist formulation', 'semiconductor lithography', 'coating processes'], undefined, 'PGMEA Solvent Supplier | Semiconductor Applications'),
  makeProduct(4, 'pgme', 'PGME', 'electronic', 'pgme', ['photoresist solvent systems', 'electronic materials', 'coating formulation']),
  makeProduct(5, 'nmp', 'N-Methyl-2-pyrrolidone (NMP)', 'electronic', 'nmp', ['battery electrode slurry', 'electronics processing', 'polymer dissolution']),
  makeProduct(6, 'dimethyl-carbonate', 'Dimethyl Carbonate (DMC)', 'electronic', 'dmc', ['battery electrolyte development', 'advanced materials', 'chemical synthesis']),
  makeProduct(7, 'electronic-grade-acetone', 'Electronic Grade Acetone', 'electronic', 'acetone', ['precision cleaning', 'electronics processing', 'compatible surface preparation']),
  makeProduct(8, 'electronic-grade-methanol', 'Electronic Grade Methanol', 'electronic', 'methanol', ['electronics cleaning', 'photoresist solvent systems', 'precision processing']),
  makeProduct(9, 'electronic-grade-thf', 'Electronic Grade THF', 'electronic', 'thf', ['polymer processing', 'electronics formulations', 'specialty synthesis']),
  makeProduct(10, 'cyclohexanone', 'High-Purity Cyclohexanone', 'electronic', undefined, ['coating formulation', 'semiconductor materials', 'polymer processing']),
  makeProduct(11, 'high-purity-dmso', 'High-Purity DMSO', 'electronic', 'dmso', ['electronics formulations', 'pharmaceutical processing', 'chemical synthesis']),
  makeProduct(12, 'high-purity-ipa', 'High-Purity IPA', 'electronic', 'ipa', ['controlled cleaning', 'electronics manufacturing', 'industrial processing']),
  makeProduct(13, 'high-purity-ethanol', 'High-Purity Ethanol', 'electronic', 'ethanol', ['precision cleaning', 'process manufacturing', 'extraction']),
  makeProduct(14, 'high-purity-water', 'High-Purity Water', 'electronic', undefined, ['precision rinsing', 'analytical blanks', 'contamination-sensitive processes']),
  makeProduct(15, 'electronic-cleaning-solvent', 'Electronic Cleaning Solvent Blend', 'electronic', undefined, ['precision cleaning', 'flux and compatible residue removal', 'electronic component processing']),

  makeProduct(16, 'isopropanol', 'Isopropanol (IPA)', 'solvents', 'ipa', ['industrial cleaning', 'extraction', 'manufacturing processes']),
  makeProduct(17, 'ethanol', 'Ethanol', 'solvents', 'ethanol', ['pharmaceutical processing', 'laboratory use', 'industrial formulation']),
  makeProduct(18, 'methanol', 'Methanol', 'solvents', 'methanol', ['chemical synthesis', 'extraction', 'analytical workflows']),
  makeProduct(19, 'n-butanol', 'n-Butanol', 'solvents', undefined, ['coating formulation', 'chemical synthesis', 'industrial processing']),
  makeProduct(20, 'acetone', 'Acetone', 'solvents', 'acetone', ['compatible cleaning', 'extraction', 'process work-up']),
  makeProduct(21, 'methyl-ethyl-ketone', 'Methyl Ethyl Ketone (MEK)', 'solvents', undefined, ['coatings', 'adhesives', 'industrial cleaning']),
  makeProduct(22, 'specialty-cyclohexanone', 'Cyclohexanone', 'solvents', undefined, ['coatings', 'polymer processing', 'chemical synthesis']),
  makeProduct(23, 'ethyl-acetate', 'Ethyl Acetate', 'solvents', 'ethyl-acetate', ['pharmaceutical extraction', 'coatings', 'process work-up']),
  makeProduct(24, 'propyl-acetate', 'n-Propyl Acetate', 'solvents', 'n-propyl-acetate', ['coatings', 'printing inks', 'industrial formulation']),
  makeProduct(25, 'butyl-acetate', 'Butyl Acetate', 'solvents', 'butyl-acetate', ['coatings', 'adhesives', 'industrial formulation']),
  makeProduct(26, 'thf', 'Tetrahydrofuran (THF)', 'solvents', 'thf', ['polymer processing', 'chemical synthesis', 'analytical methods']),
  makeProduct(27, 'propylene-glycol-monomethyl-ether', 'Propylene Glycol Monomethyl Ether (PGME)', 'solvents', 'pgme', ['coating formulation', 'cleaning', 'electronic materials']),
  makeProduct(28, 'propylene-glycol-monomethyl-ether-acetate', 'Propylene Glycol Monomethyl Ether Acetate (PGMEA)', 'solvents', 'pgmea', ['coatings', 'photoresist formulation', 'industrial processing']),
  makeProduct(29, 'toluene', 'Toluene', 'solvents', 'toluene', ['chemical synthesis', 'coatings', 'industrial processing']),
  makeProduct(30, 'n-hexane', 'n-Hexane', 'solvents', 'n-hexane', ['extraction', 'chromatography', 'industrial processing']),
  makeProduct(31, 'n-heptane', 'n-Heptane', 'solvents', 'n-heptane', ['chromatography', 'process cleaning', 'chemical formulation']),
  makeProduct(32, 'cyclohexane', 'Cyclohexane', 'solvents', 'cyclohexane', ['chemical synthesis', 'extraction', 'industrial formulation']),
  makeProduct(33, 'petroleum-ether', 'Petroleum Ether', 'solvents', 'petroleum-ether', ['extraction', 'sample preparation', 'industrial cleaning']),
  makeProduct(34, 'dichloromethane', 'Dichloromethane (DCM)', 'solvents', 'dcm', ['extraction', 'process work-up', 'laboratory preparation']),
  makeProduct(35, 'chloroform', 'Chloroform', 'solvents', 'chloroform', ['extraction', 'chemical synthesis', 'laboratory processing']),
  makeProduct(36, 'diethanolamine', 'Diethanolamine', 'solvents', 'dea', ['formulation', 'gas treatment', 'chemical synthesis']),
  makeProduct(37, 'specialty-nmp', 'NMP Specialty Solvent', 'solvents', 'nmp', ['polymer dissolution', 'coatings', 'advanced materials']),
  makeProduct(38, 'dmso', 'Dimethyl Sulfoxide (DMSO)', 'solvents', 'dmso', ['pharmaceutical processing', 'chemical synthesis', 'advanced formulations']),
  makeProduct(39, 'ethylene-glycol-ether', 'Ethylene Glycol Ether', 'solvents', undefined, ['coatings', 'cleaning formulations', 'chemical processing']),
  makeProduct(40, 'custom-solvent-blends', 'Custom Solvent Blends', 'solvents', undefined, ['application-specific cleaning', 'coating formulation', 'process optimisation']),

  makeProduct(41, 'pharmaceutical-ethanol', 'Pharmaceutical Ethanol', 'pharma', 'ethanol', ['API production', 'extraction', 'formulation'], undefined, 'Pharmaceutical Ethanol Supplier | Process & Extraction Solvent'),
  makeProduct(42, 'pharmaceutical-ipa', 'Pharmaceutical IPA', 'pharma', 'ipa', ['process cleaning', 'API manufacturing', 'pharmaceutical production']),
  makeProduct(43, 'pharmaceutical-acetone', 'Pharmaceutical Acetone', 'pharma', 'acetone', ['process work-up', 'compatible cleaning', 'API manufacturing']),
  makeProduct(44, 'pharmaceutical-methanol', 'Pharmaceutical Methanol', 'pharma', 'methanol', ['API synthesis', 'extraction', 'process manufacturing']),
  makeProduct(45, 'pharmaceutical-dcm', 'Pharmaceutical DCM', 'pharma', 'dcm', ['extraction', 'process work-up', 'API manufacturing']),
  makeProduct(46, 'pharmaceutical-thf', 'Pharmaceutical THF', 'pharma', 'thf', ['chemical synthesis', 'polymer-related processing', 'API manufacturing']),
  makeProduct(47, 'pharmaceutical-ethyl-acetate', 'Pharmaceutical Ethyl Acetate', 'pharma', 'ethyl-acetate', ['extraction', 'crystallisation work-up', 'pharmaceutical processing']),
  makeProduct(48, 'gmp-solvent-solutions', 'GMP Solvent Solutions', 'pharma', undefined, ['regulated production', 'API manufacturing', 'documented supply programmes']),
  makeProduct(49, 'extraction-solvents', 'Extraction Solvents', 'pharma', undefined, ['pharmaceutical extraction', 'natural-product processing', 'process separation']),
  makeProduct(50, 'process-solvents', 'Pharmaceutical Process Solvents', 'pharma', undefined, ['synthesis', 'purification', 'process cleaning']),

  makeProduct(51, 'trace-nitric-acid', 'Trace Grade Nitric Acid', 'trace', 'nitric-acid', ['ICP-MS sample preparation', 'elemental analysis', 'digestion'], undefined, 'ICP-MS Grade Nitric Acid Supplier | Trace Analysis'),
  makeProduct(52, 'trace-hydrochloric-acid', 'Trace Grade Hydrochloric Acid', 'trace', 'hydrochloric-acid', ['ICP-MS preparation', 'analyte stabilisation', 'digestion chemistry']),
  makeProduct(53, 'trace-hydrofluoric-acid', 'Trace Grade Hydrofluoric Acid', 'trace', undefined, ['silicate digestion', 'trace analysis', 'contamination-sensitive processing']),
  makeProduct(54, 'trace-hydrogen-peroxide', 'Trace Grade Hydrogen Peroxide', 'trace', 'hydrogen-peroxide', ['oxidative sample preparation', 'trace analysis', 'contamination-sensitive cleaning']),
  makeProduct(55, 'ultrapure-water', 'Ultrapure Water', 'trace', undefined, ['analytical blanks', 'dilution', 'precision rinsing']),
  makeProduct(56, 'icp-ms-reagents', 'ICP-MS Reagents', 'trace', undefined, ['sample digestion', 'standard preparation', 'elemental analysis']),
  makeProduct(57, 'semiconductor-wet-chemicals', 'Semiconductor Wet Chemicals', 'trace', 'sulfuric-acid', ['wafer cleaning', 'surface treatment', 'electronic wet processing']),
  makeProduct(58, 'trace-acetonitrile', 'Trace Analysis Acetonitrile', 'trace', 'acetonitrile', ['instrumental analysis', 'sample preparation', 'trace organic workflows']),
  makeProduct(59, 'trace-methanol', 'Trace Analysis Methanol', 'trace', 'methanol', ['sample preparation', 'instrumental analysis', 'trace workflows']),
  makeProduct(60, 'trace-ipa', 'Trace Analysis IPA', 'trace', 'eipa', ['surface preparation', 'trace contamination studies', 'analytical workflows']),

  makeProduct(61, 'bulk-ipa', 'Bulk IPA Supply', 'custom', 'ipa', ['industrial cleaning', 'process manufacturing', 'high-volume consumption']),
  makeProduct(62, 'bulk-ethanol', 'Bulk Ethanol Supply', 'custom', 'ethanol', ['extraction', 'pharmaceutical processing', 'industrial formulation']),
  makeProduct(63, 'bulk-methanol', 'Bulk Methanol Supply', 'custom', 'methanol', ['chemical synthesis', 'industrial processing', 'routine manufacturing']),
  makeProduct(64, 'bulk-acetone', 'Bulk Acetone Supply', 'custom', 'acetone', ['industrial cleaning', 'process work-up', 'manufacturing']),
  makeProduct(65, 'bulk-solvent-supply', 'Bulk Solvent Supply', 'custom', undefined, ['drum and IBC programmes', 'high-volume manufacturing', 'planned replenishment']),
  makeProduct(66, 'ibc-chemical-supply', 'IBC Chemical Supply', 'custom', undefined, ['production-scale dispensing', 'industrial manufacturing', 'planned inventory']),
  makeProduct(67, 'drum-packaging', 'Drum Packaging Chemicals', 'custom', undefined, ['production supply', 'distributor programmes', 'export shipments']),
  makeProduct(68, 'private-label-chemicals', 'Private Label Chemicals', 'custom', undefined, ['distributor portfolios', 'customer-owned brands', 'market-specific programmes']),
  makeProduct(69, 'custom-specification', 'Custom Specification Chemicals', 'custom', undefined, ['customer-defined limits', 'application qualification', 'long-term supply']),
  makeProduct(70, 'long-term-supply', 'Long-Term Chemical Supply Program', 'custom', undefined, ['forecast-based supply', 'qualified manufacturing', 'continuity planning']),
]

export function findProductPageV3(slug: string) {
  return productPagesV3.find((product) => product.slug === slug)
}
