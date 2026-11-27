/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    agentUpgrade: 'security',
  },
  async redirects() {
    return [
      { source: '/home', destination: '/', permanent: true },
      { source: '/global-supply', destination: '/global-chemical-supply', permanent: true },
      { source: '/applications/laboratory-analysis', destination: '/applications/laboratory', permanent: true },
      { source: '/applications/icp-ms-analysis', destination: '/applications/icp-ms', permanent: true },
      { source: '/products/nmp-solvent', destination: '/products/nmp', permanent: true },
      { source: '/products/ipa-solvent', destination: '/products/high-purity-ipa', permanent: true },
      { source: '/products/ethanol-solvent', destination: '/products/high-purity-ethanol', permanent: true },
      { source: '/products/pharma-solvents', destination: '/products/pharmaceutical-solvents', permanent: true },
      { source: '/products/trace-grade-nitric-acid', destination: '/products/trace-nitric-acid', permanent: true },
      { source: '/products/trace-grade-hydrochloric-acid', destination: '/products/trace-hydrochloric-acid', permanent: true },
      { source: '/products/electronic-materials/electronic-grade-ethanol', destination: '/products/electronic-grade-ethanol', permanent: true },
      { source: '/products/electronic-materials/electronic-grade-ipa', destination: '/products/electronic-grade-ipa', permanent: true },
      { source: '/products/electronic-materials/nmp', destination: '/products/nmp', permanent: true },
      { source: '/products/electronic-materials/pgmea', destination: '/products/pgmea', permanent: true },
      { source: '/products/high-purity-solvents/acetone', destination: '/products/acetone', permanent: true },
      { source: '/products/high-purity-solvents/dmso', destination: '/products/high-purity-dmso', permanent: true },
      { source: '/products/high-purity-solvents/ethanol', destination: '/products/high-purity-ethanol', permanent: true },
      { source: '/products/high-purity-solvents/isopropanol', destination: '/products/high-purity-ipa', permanent: true },
      { source: '/products/high-purity-solvents/thf', destination: '/products/thf', permanent: true },
      { source: '/products/trace-analysis/hydrochloric-acid', destination: '/products/trace-hydrochloric-acid', permanent: true },
      { source: '/products/trace-analysis/nitric-acid', destination: '/products/trace-nitric-acid', permanent: true },
      { source: '/products/trace-analysis/ultrapure-water', destination: '/products/ultrapure-water', permanent: true },
      { source: '/markets/united-kingdom', destination: '/markets/uk', permanent: true },
    ]
  },
}
