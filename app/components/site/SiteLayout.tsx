import {
  IconMail,
  IconMapPin,
  IconMenu2,
  IconPhone,
  IconX,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";

import { BRAND, NAV_LINKS, SERVICES } from "@/data/siteData";

const LOGO = "/images/logo.png";

export function Card({
  children,
  className = "",
  maxWidth = true,
}: {
  children: React.ReactNode;
  className?: string;
  maxWidth?: boolean;
}) {
  return (
    <div
      className={`rounded-[20px] bg-white shadow-card ${maxWidth ? "mx-auto w-full max-w-89.5" : "w-full"} ${className}`}
    >
      {children}
    </div>
  );
}

export function SiteLayout({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="h-2.5 bg-primary sm:h-7.5" />
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="mx-auto flex min-h-16 max-w-360 items-center justify-between px-4 py-2 sm:min-h-17.5 sm:px-6 lg:px-23.75">
          <Link to="/" className="flex items-center">
            <img
              src={LOGO}
              alt={BRAND.name}
              className="h-10 w-auto sm:h-12 md:h-15.25"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  `p-2 text-base lg:text-lg ${isActive ? "font-bold text-primary" : "font-medium text-[#858585] hover:text-primary"}`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="flex items-center justify-center rounded-lg p-2 text-primary hover:bg-cream focus:outline-none focus:ring-2 focus:ring-primary md:hidden"
          >
            {mobileMenuOpen ? <IconX size={26} /> : <IconMenu2 size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <nav className="border-t border-gray-100 bg-white px-4 py-3 shadow-lg md:hidden">
            <div className="flex flex-col space-y-1">
              {NAV_LINKS.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end={n.to === "/"}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                      isActive
                        ? "bg-primary font-bold text-white"
                        : "text-[#555] hover:bg-cream hover:text-primary"
                    }`
                  }
                >
                  {n.label}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </header>

      {title && (
        <div className="bg-primary px-4 py-3.5 text-center text-2xl font-bold text-cream sm:py-4.5 sm:text-3xl md:text-[40px]">
          {title}
        </div>
      )}
      <main>{children}</main>
      <footer className="bg-primary text-[#D5D5D5]">
        <div className="mx-auto grid max-w-360 gap-8 px-6 py-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:px-23.75">
          <div>
            <div className="font-['Suez_One'] text-2xl text-cream">
              {BRAND.name}
            </div>
            <p className="mt-2 max-w-88.25 text-sm leading-relaxed">
              {BRAND.tagline}
            </p>
          </div>
          <div>
            <h4 className="mb-2 text-lg font-bold text-cream">Explore</h4>
            <ul className="space-y-1 text-sm">
              {NAV_LINKS.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-white">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-2 text-lg font-bold text-cream">Service</h4>
            <ul className="space-y-1 text-sm">
              {SERVICES.map((s) => (
                <li key={s.name}>
                  <Link to="/service" className="hover:text-white">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-2 text-lg font-bold text-cream">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <IconMapPin size={16} className="mt-1 shrink-0" />
                {BRAND.address}
              </li>
              <li className="flex items-center gap-2">
                <IconPhone size={16} className="shrink-0" />
                {BRAND.phone}
              </li>
              <li className="flex items-center gap-2">
                <IconMail size={16} className="shrink-0" />
                {BRAND.email}
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function NavyButton({
  children,
  to,
  className = "",
  light = false,
}: {
  children: React.ReactNode;
  to: string;
  className?: string;
  light?: boolean;
}) {
  return (
    <Link
      to={to}
      className={`inline-flex h-12 items-center justify-center rounded-[7px] px-6 text-base font-semibold whitespace-nowrap transition hover:opacity-90 sm:h-13.25 sm:px-8 sm:text-lg ${light ? "bg-white text-primary" : "bg-primary text-white"} ${className}`}
    >
      {children}
    </Link>
  );
}
