/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      { source: '/global-supply', destination: '/global-chemical-supply', permanent: true },
      { source: '/applications/laboratory-analysis', destination: '/applications/laboratory-testing', permanent: true },
      { source: '/applications/icp-ms-analysis', destination: '/applications/icp-ms', permanent: true },
    ]
  },
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/products/electronic-grade-ipa', destination: '/products/electronic-materials/electronic-grade-ipa' },
        { source: '/products/electronic-grade-ethanol', destination: '/products/electronic-materials/electronic-grade-ethanol' },
        { source: '/products/pgmea', destination: '/products/electronic-materials/pgmea' },
        { source: '/products/nmp-solvent', destination: '/products/electronic-materials/nmp' },
        { source: '/products/ipa-solvent', destination: '/products/high-purity-solvents/isopropanol' },
        { source: '/products/ethanol-solvent', destination: '/products/high-purity-solvents/ethanol' },
        { source: '/products/acetone', destination: '/products/high-purity-solvents/acetone' },
        { source: '/products/thf', destination: '/products/high-purity-solvents/thf' },
        { source: '/products/dmso', destination: '/products/high-purity-solvents/dmso' },
        { source: '/products/trace-grade-nitric-acid', destination: '/products/trace-analysis/nitric-acid' },
        { source: '/products/trace-grade-hydrochloric-acid', destination: '/products/trace-analysis/hydrochloric-acid' },
        { source: '/products/ultrapure-water', destination: '/products/trace-analysis/ultrapure-water' },
      ],
      afterFiles: [],
      fallback: [],
    }
  },
}
