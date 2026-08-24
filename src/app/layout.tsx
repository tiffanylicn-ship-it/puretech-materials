import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://puretechmaterials.com"),
  title: {
    default: "PURETECHMATERIALS | High Purity Chemical Materials Manufacturer",
    template: "%s | PURETECHMATERIALS",
  },
  description:
    "PURETECHMATERIALS supplies high purity solvents, electronic materials, pharmaceutical solvents and customized chemical solutions for global industries.",
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
  ],
  openGraph: {
    type: "website",
    title: "PURETECHMATERIALS | High Purity Chemical Materials Manufacturer",
    description:
      "High purity solvents, electronic materials, pharmaceutical solvents and customized chemical solutions for global industries.",
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
      <body>
        <Navbar />
        <main className="pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
