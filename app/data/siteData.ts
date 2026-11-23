export const BRAND = {
  name: "ShipDecKK",
  email: "info@shipdeckk.com",
  phone: "+65 6123 4567",
  address: "123 Harbor Drive, Marina Bay, Singapore 018956",
  tagline:
    "Your trusted partner in maritime excellence since 2020. Offering premium yachts, cargo ships, and luxury liners.",
} as const;

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/gallery", label: "Gallery" },
  { to: "/service", label: "Service" },
  { to: "/about-us", label: "About Us" },
  { to: "/subscription", label: "Subscribe" },
] as const;

export const CATEGORIES = [
  "All Categories",
  "Luxury Yachts",
  "Cargo Ships",
  "Luxury Liners",
] as const;

export type Category = (typeof CATEGORIES)[number];

export interface ServiceItem {
  name: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  image: string;
}

export const SERVICES: readonly ServiceItem[] = [
  {
    name: "Ship Sales",
    shortDesc:
      "Find your perfect vessel from our extensive collection of ships.",
    fullDesc:
      "Find your perfect vessel from our extensive collection of ships. Whether you seek refined elegance for private leisure or a solution for commercial shipping, ShipDecKK offers tailored solutions to suit every purpose. Each vessel in our fleet is carefully selected for its superior craftsmanship and cutting-edge design.",
    icon: "/images/features/sales.png",
    image: "/images/services/sales.jpg",
  },
  {
    name: "Maintenance",
    shortDesc: "Keep your vessel in optimal condition.",
    fullDesc:
      "Keep your vessel in optimal condition with ShipDecKK’s comprehensive maintenance and repair services, designed to ensure peak performance and long-term reliability.",
    icon: "/images/features/maintenance.png",
    image: "/images/services/maintenance.jpg",
  },
  {
    name: "Insurance",
    shortDesc:
      "Provide high value and comprehensive insurance at competitive rates.",
    fullDesc:
      "Dedicated to offering exceptional service and comprehensive policy options as a leading name in the maritime industry, ShipDecKK’s experienced agents work on our clients’ behalf to provide high-value, comprehensive boat insurance at competitive rates.",
    icon: "/images/features/insurance.png",
    image: "/images/services/insurance.jpg",
  },
  {
    name: "Ship Customization",
    shortDesc: "Work with expert designers to create your custom vessel.",
    fullDesc:
      "Work with ShipDecKK’s expert designers to create a vessel that perfectly matches your specific requirements, whether for leisure, commercial, or specialized use. ShipDecKK’s team collaborates closely with you throughout the design process, ensuring every detail reflects your vision, functionality needs, and aesthetic preferences.",
    icon: "",
    image: "/images/services/customization.jpg",
  },
  {
    name: "Emergency Assistance",
    shortDesc: "24/7 dedicated support and emergency response.",
    fullDesc:
      "ShipDecKK recognizes that dependable support is essential to our clients’ peace of mind. Therefore, ShipDecKK offers comprehensive 24/7 emergency assistance, ensuring immediate help is available whenever it is needed. ShipDecKK’s dedicated support team remains on standby at all times to address urgent technical issues or unforeseen circumstances.",
    icon: "",
    image: "/images/services/emergency.jpg",
  },
] as const;

export interface ShipItem {
  name: string;
  price: string;
  desc: string;
  category: "Luxury Yachts" | "Cargo Ships" | "Luxury Liners";
  image: string;
}

export const SHIPS: readonly ShipItem[] = [
  {
    name: "Azure Voyager",
    price: "$4,500,000",
    desc: "Luxury yacht with 5 cabins, swimming pool, and helipad.",
    category: "Luxury Yachts",
    image: "/images/gallery/azure-voyager.jpg",
  },
  {
    name: "Coastal Explorer",
    price: "$2,800,000",
    desc: "Mid-sized yacht perfect for coastal exploration with 3 cabins.",
    category: "Luxury Yachts",
    image: "/images/gallery/coastal-explorer.jpg",
  },
  {
    name: "Marina Bliss",
    price: "$6,200,000",
    desc: "High-end yacht with 6 cabins, jacuzzi, and entertainment system.",
    category: "Luxury Yachts",
    image: "/images/gallery/marina-bliss.jpg",
  },
  {
    name: "Global Freighter",
    price: "$8,500,000",
    desc: "Reliable cargo ship with 8,000 TEU capacity and fuel-efficient engines.",
    category: "Cargo Ships",
    image: "/images/gallery/global-freighter.jpg",
  },
  {
    name: "Oceanic Titan",
    price: "$12,000,000",
    desc: "Large cargo vessel with 15,000 TEU capacity and advanced navigation.",
    category: "Cargo Ships",
    image: "/images/gallery/oceanic-titan.jpg",
  },
  {
    name: "Pacific Hauler",
    price: "$15,000,000",
    desc: "Modern cargo vessel with 18,000 TEU capacity and eco-friendly.",
    category: "Cargo Ships",
    image: "/images/gallery/pacific-hauler.jpg",
  },
  {
    name: "Sapphire Princess",
    price: "$75,000,000",
    desc: "Luxury cruise liner with 1,200 passenger capacity.",
    category: "Luxury Liners",
    image: "/images/gallery/sapphire-princess.jpg",
  },
  {
    name: "Royal Odyssey",
    price: "$95,000,000",
    desc: "Premium cruise liner featuring 1,500 passenger capacity, luxury suites.",
    category: "Luxury Liners",
    image: "/images/gallery/royal-odyssey.jpg",
  },
  {
    name: "Celestial Voyager",
    price: "$85,000,000",
    desc: "Elegant cruise liner with 1,300 passenger capacity.",
    category: "Luxury Liners",
    image: "/images/gallery/celestial-voyager.jpg",
  },
] as const;

export const FEATURED_COLLECTIONS = [
  {
    name: "Luxury Yachts",
    image: "/images/gallery/azure-voyager.jpg",
  },
  {
    name: "Cargo Ships",
    image: "/images/gallery/global-freighter.jpg",
  },
  {
    name: "Luxury Liners",
    image: "/images/gallery/sapphire-princess.jpg",
  },
] as const;
