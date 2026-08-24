import Link from "next/link";
import { LogoMark, LogoText } from "@/components/ui/Logo";

const COLS = {
  Products: [
    { label: "Electronic Materials", href: "/products/electronic-materials" },
    { label: "High-Purity Solvents", href: "/products/high-purity-solvents" },
    { label: "Pharmaceutical Solvents", href: "/products/pharmaceutical-solvents" },
    { label: "Trace Analysis Chemicals", href: "/products/trace-analysis" },
    { label: "Custom Chemical Supply", href: "/products/custom-supply" },
    { label: "Full Product Finder", href: "/products" },
  ],
  Applications: [
    { label: "Semiconductor", href: "/applications/semiconductor" },
    { label: "Pharmaceutical Manufacturing", href: "/applications/pharmaceutical" },
    { label: "Electronics", href: "/applications/electronics" },
    { label: "Chemical Processing", href: "/applications/chemical-processing" },
    { label: "Laboratory", href: "/applications/laboratory" },
    { label: "Industrial Cleaning", href: "/applications/industrial-cleaning" },
    { label: "All Applications", href: "/applications" },
  ],
  Resources: [
    { label: "Knowledge Centre", href: "/resources" },
    { label: "Technical Knowledge", href: "/knowledge" },
    { label: "Application Guides", href: "/applications" },
    { label: "Product Selection Guides", href: "/guides" },
    { label: "Regulatory & Compliance", href: "/compliance" },
    { label: "Downloads", href: "/downloads" },
    { label: "Technical Articles", href: "/blog" },
    { label: "FAQ", href: "/faq" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Manufacturing", href: "/manufacturing" },
    { label: "Quality & Compliance", href: "/quality" },
    { label: "OEM Solutions", href: "/oem-custom-chemical-solutions" },
    { label: "Markets", href: "/markets" },
    { label: "Global Supply & Export", href: "/global-chemical-supply" },
    { label: "Contact Us", href: "/contact" },
    { label: "Request Sample", href: "/contact" },
  ],
};

const CERTS = ["COA", "SDS", "Specifications", "Traceability", "Regulatory Support"];

export function Footer() {
  return (
    <footer style={{ background: "#020C1B" }}>
      {/* Documentation strip */}
      <div
        className="py-7"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-site mx-auto px-6 flex flex-wrap items-center justify-between gap-5">
          <p
            className="text-[13px] leading-[1.6] max-w-[420px]"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            High-purity solvents, electronic materials, pharmaceutical chemicals
            and analytical reagents for demanding industrial applications.
          </p>
          <div className="flex flex-wrap gap-2">
            {CERTS.map((c) => (
              <span
                key={c}
                className="text-[10px] font-mono font-bold uppercase tracking-[0.08em] px-2.5 py-1 rounded-[4px]"
                style={{
                  background: "rgba(0,102,204,0.15)",
                  color: "#4BAAF5",
                  border: "1px solid rgba(0,102,204,0.22)",
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-site mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2.5 no-underline mb-4"
            >
              <LogoMark />
              <LogoText light />
            </Link>
            <p
              className="text-[13px] leading-[1.68] mb-5"
              style={{ color: "rgba(255,255,255,0.42)" }}
            >
              High-purity chemical materials for electronics, pharmaceutical
              manufacturing, trace analysis and advanced industrial production.
            </p>
            <div className="flex gap-2 flex-wrap">
              {["LinkedIn", "Email", "WeChat"].map((s) => (
                <span
                  key={s}
                  className="text-[11px] px-2.5 py-1.5 rounded-[6px] cursor-pointer"
                  style={{
                    color: "rgba(255,255,255,0.40)",
                    border: "1px solid rgba(255,255,255,0.10)",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {Object.entries(COLS).map(([section, links]) => (
            <div key={section}>
              <h5
                className="text-[10px] font-bold uppercase tracking-[0.14em] mb-4"
                style={{ color: "rgba(255,255,255,0.28)" }}
              >
                {section}
              </h5>
              <ul className="space-y-2.5 list-none">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-[13px] no-underline transition-colors duration-200 hover:text-white"
                      style={{ color: "rgba(255,255,255,0.52)" }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <p
            className="text-[12px]"
            style={{ color: "rgba(255,255,255,0.28)" }}
          >
            © {new Date().getFullYear()} PureTech Materials Inc. All rights
            reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Use", "Safety Data Sheets"].map(
              (t) => (
                <span
                  key={t}
                  className="text-[12px] cursor-pointer hover:text-white/55 transition-colors"
                  style={{ color: "rgba(255,255,255,0.28)" }}
                >
                  {t}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
