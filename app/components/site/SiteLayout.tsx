import { IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";
import { Link, NavLink } from "react-router";

const LOGO = "/images/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/gallery", label: "Gallery" },
  { to: "/service", label: "Service" },
  { to: "/about-us", label: "About Us" },
  { to: "/subscription", label: "Subscribe" },
];

const serviceLinks = [
  "Ship Sales",
  "Maintenance",
  "Insurance",
  "Ship Customization",
  "Emergency Assistance",
];

export function SiteLayout({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="h-7.5 bg-primary" />
      <header className="bg-white shadow-sm">
        <div className="mx-auto flex min-h-17.5 max-w-360 flex-wrap items-center justify-between gap-2 px-6 py-2 lg:px-23.75">
          <Link to="/">
            <img src={LOGO} alt="ShipDecKK" className="h-15.25 w-auto" />
          </Link>
          <nav className="flex flex-wrap items-center gap-1">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  `p-2 text-lg ${isActive ? "font-bold text-primary" : "font-medium text-[#858585] hover:text-primary"}`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      {title && (
        <div className="bg-primary py-4.5 text-center text-3xl font-bold text-[#F9F6EF] md:text-[40px]">
          {title}
        </div>
      )}
      <main>{children}</main>
      <footer className="bg-primary text-[#D5D5D5]">
        <div className="mx-auto grid max-w-360 gap-8 px-6 py-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:px-23.75">
          <div>
            <div className="font-['Suez_One'] text-2xl text-[#F9F6EF]">
              ShipDecKK
            </div>
            <p className="mt-2 max-w-88.25 text-sm leading-relaxed">
              Your trusted partner in maritime excellence since 2020. Offering
              premium yachts, cargo ships, and luxury liners.
            </p>
          </div>
          <div>
            <h4 className="mb-2 text-lg font-bold text-[#F9F6EF]">Explore</h4>
            <ul className="space-y-1 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-white">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-2 text-lg font-bold text-[#F9F6EF]">Service</h4>
            <ul className="space-y-1 text-sm">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link to="/service" className="hover:text-white">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-2 text-lg font-bold text-[#F9F6EF]">
              Contact Us
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <IconMapPin size={16} className="mt-1 shrink-0" />
                123 Harbor Drive, Marina Bay, Singapore 018956
              </li>
              <li className="flex items-center gap-2">
                <IconPhone size={16} className="shrink-0" />
                +65 6123 4567
              </li>
              <li className="flex items-center gap-2">
                <IconMail size={16} className="shrink-0" />
                info@shipdeck.com
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
      className={`inline-flex h-13.25 items-center justify-center rounded-[7px] px-10 text-xl ${light ? "bg-white text-primary" : "bg-primary text-white"} ${className}`}
    >
      {children}
    </Link>
  );
}
