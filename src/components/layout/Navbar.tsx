"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogoMark, LogoText } from "@/components/ui/Logo";

type NavChild = { label: string; href: string } | { divider: true };
type NavItem = { label: string; href: string; children?: NavChild[] };

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Electronic Materials", href: "/products/electronic-materials" },
      { label: "High-Purity Solvents", href: "/products/high-purity-solvents" },
      { label: "Pharmaceutical Solvents", href: "/products/pharmaceutical-solvents" },
      { label: "Trace Analysis Chemicals", href: "/products/trace-analysis" },
      { label: "Custom Chemical Supply", href: "/products/custom-supply" },
      { divider: true },
      { label: "View All Products →", href: "/products" },
    ],
  },
  {
    label: "Applications",
    href: "/applications",
    children: [
      { label: "Semiconductor Manufacturing", href: "/applications/semiconductor" },
      { label: "Pharmaceutical Production", href: "/applications/pharmaceutical" },
      { label: "Electronics Manufacturing", href: "/applications/electronics" },
      { label: "Chemical Processing", href: "/applications/chemical-processing" },
      { label: "Laboratory Testing", href: "/applications/laboratory" },
      { label: "Industrial Cleaning", href: "/applications/industrial-cleaning" },
      { divider: true },
      { label: "View All Applications →", href: "/applications" },
    ],
  },
  {
    label: "Manufacturing",
    href: "/manufacturing",
    children: [
      { label: "Purification Technology", href: "/manufacturing/purification" },
      { label: "Production Facility", href: "/manufacturing/facility" },
      { label: "Packaging Capability", href: "/manufacturing/packaging" },
    ],
  },
  {
    label: "Quality",
    href: "/quality",
    children: [
      { label: "Testing Capability", href: "/quality/testing" },
      { label: "Quality Documentation", href: "/quality/documentation" },
      { label: "Compliance Support", href: "/quality/compliance" },
      { label: "Batch Traceability", href: "/quality/traceability" },
    ],
  },
  {
    label: "OEM Solutions",
    href: "/oem-custom-chemical-solutions",
    children: [
      { label: "Private Label Chemicals", href: "/oem/private-label" },
      { label: "Custom Packaging", href: "/oem/custom-packaging" },
      { label: "Bulk Supply", href: "/oem/bulk-supply" },
    ],
  },
  {
    label: "Markets",
    href: "/markets",
    children: [
      { label: "Europe", href: "/markets/europe" },
      { label: "North America", href: "/markets/north-america" },
      { label: "Japan & Korea", href: "/markets/japan-korea" },
      { label: "Southeast Asia", href: "/markets/southeast-asia" },
      { label: "Middle East", href: "/markets/middle-east" },
      { label: "Distributor Partnership", href: "/markets/distributor-partnership" },
      { divider: true },
      { label: "Global Supply Capability →", href: "/global-chemical-supply" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Knowledge Centre", href: "/resources" },
      { label: "Technical Knowledge", href: "/knowledge" },
      { label: "Application Guides", href: "/applications" },
      { label: "Product Selection Guides", href: "/guides" },
      { label: "Industry Insights & Articles", href: "/blog" },
      { label: "Application Cases", href: "/case-studies" },
      { label: "Regulatory & Compliance", href: "/compliance" },
      { label: "Downloads", href: "/downloads" },
      { label: "Frequently Asked Questions", href: "/faq" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    setMobileOpen(false);
    setExpanded(null);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/" || pathname === "/home"
      : pathname.startsWith(href);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-[1000] h-[72px] border-b border-white/10 bg-[#08283b] text-white shadow-[0_8px_30px_rgba(3,18,28,.16)]">
        <div className="mx-auto flex h-full max-w-site items-center justify-between px-6">
          <Link
            href="/"
            className="flex items-center gap-2.5 no-underline"
            aria-label="PURETECHMATERIALS home"
          >
            <LogoMark size={34} light />
            <LogoText light />
          </Link>

          <ul className="hidden list-none items-center gap-0 lg:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.href} className="nav-item relative">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 rounded-[7px] px-2 py-2.5 text-[11.5px] font-medium no-underline transition-colors ${isActive(item.href) ? "bg-white/10 text-white" : "text-white/75 hover:bg-white/5 hover:text-white"}`}
                >
                  {item.label}
                  {item.children && (
                    <span className="text-[10px] opacity-50">⌄</span>
                  )}
                </Link>
                {item.children && (
                  <div className="nav-dd">
                    {item.children.map((child, index) =>
                      "divider" in child ? (
                        <div key={index} className="nav-dd-divider" />
                      ) : (
                        <Link key={child.href} href={child.href}>
                          {child.label}
                        </Link>
                      ),
                    )}
                  </div>
                )}
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="ml-3 block bg-[#12657b] px-5 py-2.5 text-[13px] font-semibold text-white no-underline transition-colors hover:bg-[#2f8c67]"
              >
                Request Quote
              </Link>
            </li>
          </ul>

          <button
            type="button"
            className="flex size-11 items-center justify-center border border-white/15 bg-transparent text-xl text-white lg:hidden"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
          >
            {mobileOpen ? "×" : "☰"}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-x-0 bottom-0 top-[72px] z-[999] overflow-y-auto bg-[#061d2b] p-4 transition-transform lg:hidden ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {NAV_ITEMS.map((item) => (
          <div key={item.href} className="border-b border-white/10">
            <div className="flex items-center">
              <Link
                href={item.href}
                className="flex-1 px-3 py-4 text-[15px] font-medium text-white/85 no-underline"
              >
                {item.label}
              </Link>
              {item.children && (
                <button
                  type="button"
                  onClick={() =>
                    setExpanded(expanded === item.href ? null : item.href)
                  }
                  className="size-12 bg-transparent text-white/60"
                  aria-label={`Toggle ${item.label} links`}
                >
                  {expanded === item.href ? "−" : "+"}
                </button>
              )}
            </div>
            {item.children && expanded === item.href && (
              <div className="mb-3 bg-white/[.03] px-3 py-2">
                {item.children.map((child, index) =>
                  "divider" in child ? (
                    <div
                      key={index}
                      className="my-1 border-t border-white/10"
                    />
                  ) : (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block py-2.5 text-[13px] text-white/65 no-underline"
                    >
                      {child.label}
                    </Link>
                  ),
                )}
              </div>
            )}
          </div>
        ))}
        <Link
          href="/contact"
          className="mt-5 block bg-[#2f8c67] px-5 py-3.5 text-center text-sm font-semibold text-white no-underline"
        >
          Request Quote
        </Link>
      </div>
    </>
  );
}
