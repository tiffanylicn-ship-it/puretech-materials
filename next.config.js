/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      { source: '/global-supply', destination: '/global-chemical-supply', permanent: true },
      { source: '/applications/laboratory-analysis', destination: '/applications/laboratory', permanent: true },
      { source: '/applications/icp-ms-analysis', destination: '/applications/icp-ms', permanent: true },
      { source: '/products/nmp-solvent', destination: '/products/nmp', permanent: true },
      { source: '/products/ipa-solvent', destination: '/products/high-purity-ipa', permanent: true },
      { source: '/products/ethanol-solvent', destination: '/products/high-purity-ethanol', permanent: true },
      { source: '/products/trace-grade-nitric-acid', destination: '/products/trace-nitric-acid', permanent: true },
      { source: '/products/trace-grade-hydrochloric-acid', destination: '/products/trace-hydrochloric-acid', permanent: true },
      { source: '/markets/united-kingdom', destination: '/markets/uk', permanent: true },
    ]
  },
}
