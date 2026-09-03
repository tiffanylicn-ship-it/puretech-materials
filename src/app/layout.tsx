import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const siteEntityJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://puretechmaterials.com/#organization',
      name: 'PURETECHMATERIALS',
      url: 'https://puretechmaterials.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://puretechmaterials.com/icon.png',
        width: 512,
        height: 512,
      },
      email: 'tiffanylicn@gmail.com',
      description: 'High-purity chemical materials, documented solvent supply and custom chemical programmes for advanced industrial applications.',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://puretechmaterials.com/#website',
      url: 'https://puretechmaterials.com',
      name: 'PURETECHMATERIALS',
      publisher: { '@id': 'https://puretechmaterials.com/#organization' },
      inLanguage: 'en',
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://puretechmaterials.com"),
  title: {
    default: "PURETECHMATERIALS | High Purity Chemical Materials Manufacturer",
    template: "%s | PURETECHMATERIALS",
  },
  description:
    "PURETECHMATERIALS supplies documented high-purity solvents, electronic materials, pharmaceutical solvents and custom chemical solutions for European and North American industries.",
  keywords: [
    "electronic grade IPA",
    "PGMEA",
    "semiconductor wet chemicals",
    "SEMI C1",
    "ultra pure solvents",
    "photoresist solvent",
    "NMP",
    "DMC battery grade",
    "HPLC solvents",
    "high purity chemical supplier Europe",
    "specialty chemical supplier USA",
    "REACH chemical supplier",
    "TSCA chemical import support",
    "pharmaceutical solvent supplier Europe",
    "bulk solvent supplier North America",
  ],
  openGraph: {
    type: "website",
    title: "PURETECHMATERIALS | High Purity Chemical Materials Manufacturer",
    description:
      "High-purity solvents, electronic materials, pharmaceutical solvents and custom chemical programmes for European, North American and global industries.",
    siteName: "PURETECHMATERIALS",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "PURETECHMATERIALS — High-Purity Chemical Materials for Advanced Industries",
      },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteEntityJsonLd).replace(/</g, '\\u003c') }} />
      </head>
      <body>
        <Navbar />
        <main className="pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
