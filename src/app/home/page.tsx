import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const manufacturingSteps = [
  [
    "01",
    "Purification",
    "Multi-stage purification designed to remove trace organic and metallic impurities.",
  ],
  [
    "02",
    "Distillation",
    "Controlled distillation systems delivering consistent, reproducible solvent quality.",
  ],
  [
    "03",
    "Filtration",
    "Sub-micron particle control for electronic, analytical and pharmaceutical grades.",
  ],
  [
    "04",
    "Filling & Packaging",
    "Dedicated filling lines for bottles, cans, drums, IBCs and bulk deliveries.",
  ],
];

const productFamilies = [
  {
    no: "01",
    title: "Electronic & Advanced Materials",
    text: "Electronic grade solvents for semiconductor cleaning, coating and precision processes.",
    href: "/products?cat=electronic",
  },
  {
    no: "02",
    title: "High-Purity & Specialty Solvents",
    text: "Alcohols, ketones, esters, ethers and hydrocarbons in purified industrial grades.",
    href: "/products",
  },
  {
    no: "03",
    title: "Pharmaceutical & GMP",
    text: "Documented, batch-consistent solvents for API processing, formulation and production.",
    href: "/products?cat=lab",
  },
  {
    no: "04",
    title: "Trace Analysis & Ultra-Pure Reagents",
    text: "Trace-grade acids, solvents and reagents for ICP-MS and elemental analysis workflows.",
    href: "/products?cat=lab",
  },
];

const solventGroups = [
  ["Alcohols", "IPA · Ethanol · Methanol · n-Butanol"],
  ["Ketones", "Acetone · MEK · Cyclohexanone"],
  ["Esters", "Ethyl Acetate · n-Propyl Acetate · Butyl Acetate"],
  ["Ethers", "THF · PGME · PGMEA"],
  ["Hydrocarbons", "Toluene · n-Hexane · n-Heptane · Cyclohexane"],
  ["Specialty", "DMSO · DCM · Chloroform · NMP"],
];

const qualityItems = [
  ["COA", "Certificate of analysis released with every batch."],
  ["SDS", "Current safety data sheets for every product and region."],
  [
    "Batch Traceability",
    "Traceability from raw material through finished shipment.",
  ],
  ["Specifications", "Defined and published specifications for each grade."],
  [
    "Quality Control",
    "HPLC, GC, ICP-MS and Karl Fischer testing capabilities.",
  ],
  [
    "Regulatory Documentation",
    "Documentation support for regulated industries and markets.",
  ],
];

const applications = [
  "Semiconductor & Electronics",
  "Pharmaceutical Manufacturing",
  "Chemical Manufacturing",
  "Analytical Testing",
  "Food & Beverage",
  "Advanced Industrial Applications",
];

const customServices = [
  [
    "Private Label",
    "Your brand, artwork and regulatory text on qualified product lines.",
  ],
  [
    "Custom Packaging",
    "Bottles, cans, drums, IBCs and agreed custom fill volumes.",
  ],
  [
    "Custom Specifications",
    "Product grades aligned with analytical or process requirements.",
  ],
  [
    "Contract Manufacturing",
    "Dedicated production campaigns under an agreed specification.",
  ],
  [
    "Long-Term Supply",
    "Volume programs with planned deliveries and supply continuity.",
  ],
];

function SectionHeading({
  eyebrow,
  title,
  description,
  inverse = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  inverse?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p
        className={`font-mono text-[11px] uppercase tracking-[0.24em] ${inverse ? "text-white/55" : "text-[#12657b]"}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-[42px] ${inverse ? "text-white" : "text-[#08283b]"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed ${inverse ? "text-white/65" : "text-[#536b7b]"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function PrimaryLink({
  href,
  children,
  light = false,
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold no-underline transition-colors ${light ? "bg-white text-[#08283b] hover:bg-[#51a977] hover:text-white" : "bg-[#12657b] text-white hover:bg-[#2f8c67]"}`}
    >
      {children} <span aria-hidden="true">→</span>
    </Link>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[640px] overflow-hidden bg-[#061d2b] text-white">
        <Image
          src="/images/puretech/hero.jpg"
          alt="High-purity chemical manufacturing facility"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061d2b] via-[#061d2b]/90 to-[#061d2b]/15" />
        <div className="mx-auto flex min-h-[640px] max-w-site items-center px-6 py-24">
          <div className="max-w-[720px]">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/55">
              Manufacturer & Global Supplier
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight md:text-[58px]">
              High-Purity Chemical Materials for Advanced Industries
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              High-purity solvents, electronic materials, pharmaceutical
              chemicals and specialty solutions manufactured for demanding
              industrial and analytical applications.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <PrimaryLink href="/products" light>
                Explore Products
              </PrimaryLink>
              <Link
                href="/contact"
                className="inline-flex items-center border border-white/30 px-6 py-3.5 text-sm font-semibold text-white no-underline transition-colors hover:bg-white/10"
              >
                Request a Quote
              </Link>
            </div>
            <dl className="mt-14 grid max-w-xl grid-cols-3 gap-4 border-t border-white/15 pt-6">
              {[
                [`≥99.999%`, `Purity grades`],
                [`<1 ppb`, `Trace metals`],
                [`20–1000 L`, `Packaging range`],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="font-mono text-base text-white md:text-lg">
                    {value}
                  </dt>
                  <dd className="mt-1 text-[10px] uppercase tracking-wide text-white/45 md:text-xs">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section id="manufacturing" className="scroll-mt-24 bg-white py-24">
        <div className="mx-auto max-w-site px-6">
          <SectionHeading
            eyebrow="Manufacturing"
            title="Manufacturing Behind Every Product"
            description="From purification and distillation to final filling and packaging, our processes are designed around consistent product quality and dependable supply."
          />
          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <div className="relative min-h-[420px] overflow-hidden">
              <Image
                src="/images/puretech/manufacturing.jpg"
                alt="Stainless steel distillation and purification systems"
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="grid gap-px bg-[#dbe4e8] sm:grid-cols-2">
              {manufacturingSteps.map(([no, title, text]) => (
                <article key={title} className="bg-[#f4f7f6] p-7">
                  <p className="font-mono text-xs text-[#2f8c67]">{no}</p>
                  <h3 className="mt-8 text-lg font-semibold text-[#08283b]">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#536b7b]">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="scroll-mt-24 bg-[#f1f5f3] py-24">
        <div className="mx-auto max-w-site px-6">
          <SectionHeading
            eyebrow="Products"
            title="Our Chemical Materials Portfolio"
            description="Selected high-purity chemical products for advanced manufacturing, pharmaceutical production, trace analysis and industrial applications."
          />
          <div className="mt-14 grid gap-px bg-[#cfdbdf] md:grid-cols-2 lg:grid-cols-4">
            {productFamilies.map((item) => (
              <Link
                key={item.no}
                href={item.href}
                className="group flex min-h-[300px] flex-col bg-white p-8 text-[#08283b] no-underline transition-colors hover:bg-[#08283b] hover:text-white"
              >
                <span className="font-mono text-xs text-[#728997] group-hover:text-white/45">
                  {item.no}
                </span>
                <h3 className="mt-12 text-lg font-semibold leading-snug">
                  {item.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-[#536b7b] group-hover:text-white/65">
                  {item.text}
                </p>
                <span className="mt-8 text-xs font-semibold uppercase tracking-wider text-[#12657b] group-hover:text-[#62bd88]">
                  View range →
                </span>
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-px flex flex-col justify-between gap-4 bg-[#08283b] p-8 text-white no-underline sm:flex-row sm:items-center"
          >
            <span>
              <strong className="text-lg">Custom & Bulk Supply</strong>
              <span className="mt-1 block text-sm text-white/60">
                Private label, custom specifications, contract manufacturing and
                long-term supply agreements.
              </span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider">
              Discuss your requirement →
            </span>
          </Link>
        </div>
      </section>

      <section className="bg-[#08283b] py-24 text-white">
        <div className="mx-auto grid max-w-site items-center gap-14 px-6 lg:grid-cols-2">
          <div>
            <SectionHeading
              inverse
              eyebrow="Core Product Line"
              title="Electronic & Advanced Materials"
              description="High-purity chemical materials for electronics manufacturing, precision cleaning, coating and advanced industrial processes."
            />
            <ul className="mt-10 grid gap-px bg-white/10 sm:grid-cols-2">
              {[
                "Electronic Grade IPA",
                "Electronic Grade Ethanol",
                "PGME",
                "PGMEA",
                "NMP",
                "DMC",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 bg-[#08283b] px-5 py-4 text-sm text-white/85"
                >
                  <span className="text-[#62bd88]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <PrimaryLink href="/products?cat=electronic" light>
                View Electronic Materials
              </PrimaryLink>
            </div>
          </div>
          <div className="relative min-h-[460px] overflow-hidden">
            <Image
              src="/images/puretech/electronic-materials.jpg"
              alt="Electronic grade solvent packaging in a clean manufacturing environment"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-site px-6">
          <SectionHeading
            eyebrow="Product Line"
            title="High-Purity & Specialty Solvents"
            description="A broad range of purified solvents for pharmaceutical manufacturing, chemical processing, coatings, polymers, extraction and industrial applications."
          />
          <div className="mt-14 grid gap-14 lg:grid-cols-[1.15fr_1fr]">
            <div className="grid gap-px bg-[#d8e2e5] sm:grid-cols-2 lg:grid-cols-3">
              {solventGroups.map(([group, items]) => (
                <article key={group} className="bg-[#f4f7f6] p-6">
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#12657b]">
                    {group}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#253e4d]">
                    {items}
                  </p>
                </article>
              ))}
            </div>
            <div>
              <div className="relative min-h-[320px] overflow-hidden">
                <Image
                  src="/images/puretech/high-purity-solvents.jpg"
                  alt="Solvent purification and filling equipment"
                  fill
                  sizes="(max-width:1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {["1 L", "4 L", "20 L", "200 L", "1000 L IBC", "ISO Tank"].map(
                  (size) => (
                    <span
                      key={size}
                      className="border border-[#cad8dd] bg-white px-3 py-1.5 font-mono text-[11px] text-[#08283b]"
                    >
                      {size}
                    </span>
                  ),
                )}
              </div>
              <div className="mt-8">
                <PrimaryLink href="/products">Browse Solvents</PrimaryLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f1f5f3] py-24">
        <div className="mx-auto grid max-w-site items-center gap-14 px-6 lg:grid-cols-2">
          <div className="relative order-2 min-h-[460px] overflow-hidden lg:order-1">
            <Image
              src="/images/puretech/pharma-gmp.jpg"
              alt="Quality inspection in a pharmaceutical production environment"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Product Line"
              title="Pharmaceutical & GMP Solvents"
              description="Reliable solvent supply for pharmaceutical manufacturing, API processing, formulation and GMP-controlled production environments."
            />
            <div className="mt-9 flex flex-wrap gap-2">
              {[
                "Ethanol",
                "IPA",
                "Acetone",
                "Methanol",
                "DMSO",
                "DCM",
                "Ethyl Acetate",
              ].map((item) => (
                <span
                  key={item}
                  className="border border-[#cad8dd] bg-white px-3 py-1.5 font-mono text-[11px] text-[#08283b]"
                >
                  {item}
                </span>
              ))}
            </div>
            <ul className="mt-9 grid gap-3 sm:grid-cols-2">
              {[
                "Batch Consistency",
                "Documentation",
                "Traceability",
                "Flexible Packaging",
                "Bulk Supply",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-[#253e4d]"
                >
                  <span className="text-[#2f8c67]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <PrimaryLink href="/industries/pharmaceutical-lab">
                Explore Pharmaceutical Solutions
              </PrimaryLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#061d2b] py-24 text-white">
        <div className="mx-auto max-w-site px-6">
          <SectionHeading
            inverse
            eyebrow="Product Line"
            title="Trace Analysis & Ultra-Pure Reagents"
            description="High-purity reagents for elemental analysis, ICP-MS sample preparation and applications where trace contamination directly affects analytical performance."
          />
          <div className="mt-14 grid gap-12 lg:grid-cols-2">
            <div>
              <ul className="grid gap-px bg-white/10">
                {[
                  "Trace Grade Nitric Acid",
                  "Trace Grade Hydrochloric Acid",
                  "Trace Grade Hydrofluoric Acid",
                  "Hydrogen Peroxide",
                  "Ultra-Pure Water",
                  "Trace Analysis Acetonitrile",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center justify-between bg-[#061d2b] px-5 py-4 text-sm text-white/85"
                  >
                    <span>{item}</span>
                    <span className="font-mono text-[11px] text-[#62bd88]">
                      &lt;1 ppb
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-9">
                <PrimaryLink href="/resources" light>
                  Request Technical Documents
                </PrimaryLink>
              </div>
            </div>
            <div className="relative min-h-[440px] overflow-hidden">
              <Image
                src="/images/puretech/trace-analysis.jpg"
                alt="Trace analysis laboratory and ICP-MS sample preparation"
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="quality" className="scroll-mt-24 bg-white py-24">
        <div className="mx-auto max-w-site px-6">
          <div className="grid items-end gap-14 lg:grid-cols-[1fr_1.1fr]">
            <SectionHeading
              eyebrow="Quality & Compliance"
              title="Quality You Can Verify"
              description="Product quality is supported by controlled manufacturing processes, analytical testing, batch documentation and traceable product records."
            />
            <div className="relative min-h-[300px] overflow-hidden">
              <Image
                src="/images/puretech/quality-control.jpg"
                alt="Industrial quality control laboratory"
                fill
                sizes="(max-width:1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="mt-14 grid gap-px bg-[#d8e2e5] sm:grid-cols-2 lg:grid-cols-3">
            {qualityItems.map(([title, text]) => (
              <article key={title} className="bg-[#f4f7f6] p-7">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-[#08283b]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#536b7b]">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f1f5f3] py-24">
        <div className="mx-auto max-w-site px-6">
          <SectionHeading
            eyebrow="Applications"
            title="Applications Across Demanding Industries"
            description="Our chemical materials support industrial workflows from wafer processing and API production to analytical testing and food-safety control."
          />
          <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div className="grid gap-px bg-[#d8e2e5] sm:grid-cols-2">
              {applications.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-white px-6 py-6 text-sm font-medium text-[#08283b]"
                >
                  <span className="size-1.5 bg-[#2f8c67]" />
                  {item}
                </div>
              ))}
            </div>
            <div className="relative min-h-[320px] overflow-hidden">
              <Image
                src="/images/puretech/applications.jpg"
                alt="Industrial and analytical chemical applications"
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-24">
            <SectionHeading
              eyebrow="OEM & Custom"
              title="Custom & Bulk Supply"
              description="Beyond the catalog: private-label programs, custom specifications and long-term industrial supply."
            />
            <div className="mt-12 grid gap-px bg-[#d8e2e5] md:grid-cols-3 lg:grid-cols-5">
              {customServices.map(([title, text]) => (
                <article key={title} className="bg-white p-7">
                  <span className="font-mono text-xs text-[#2f8c67]">+</span>
                  <h3 className="mt-5 text-sm font-semibold text-[#08283b]">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#536b7b]">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#08283b] py-20 text-white">
        <div className="mx-auto grid max-w-site gap-10 px-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/50">
              Global Supply
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-[42px]">
              Supply Capability for Europe & North America
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/65">
              Consolidated shipments, export documentation and regional
              logistics support for industrial customers, distributors and OEM
              partners.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <PrimaryLink href="/contact" light>
              Request Quote or Sample
            </PrimaryLink>
            <Link
              href="/products"
              className="inline-flex items-center border border-white/25 px-6 py-3.5 text-sm font-semibold text-white no-underline hover:bg-white/10"
            >
              Browse Product Catalog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
