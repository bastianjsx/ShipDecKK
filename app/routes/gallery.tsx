import { IconChevronDown } from "@tabler/icons-react";
import { useState } from "react";

import { SiteLayout } from "@/components/site/SiteLayout";

const ships = [
  [
    "Azure Voyager",
    "$4,500,000",
    "Luxury yacht with 5 cabins, swimming pool, and helipad.",
    "Luxury Yacht",
    "/images/gallery/azure-voyager.jpg",
  ],
  [
    "Coastal Explorer",
    "$2,800,000",
    "Mid-sized yacht perfect for coastal exploration with 3 cabins.",
    "Luxury Yacht",
    "/images/gallery/coastal-explorer.jpg",
  ],
  [
    "Marina Bliss",
    "$6,200,000",
    "High-end yacht with 6 cabins, jacuzzi, and entertainment system.",
    "Luxury Yacht",
    "/images/gallery/marina-bliss.jpg",
  ],
  [
    "Global Freighter",
    "$8,500,000",
    "Reliable cargo ship with 8,000 TEU capacity and fuel-efficient engines.",
    "Cargo Ship",
    "/images/gallery/global-freighter.jpg",
  ],
  [
    "Oceanic Titan",
    "$12,000,000",
    "Large cargo vessel with 15,000 TEU capacity and advanced navigation.",
    "Cargo Ship",
    "/images/gallery/oceanic-titan.jpg",
  ],
  [
    "Pacific Hauler",
    "$15,000,000",
    "Modern cargo vessel with 18,000 TEU capacity and eco-friendly.",
    "Cargo Ship",
    "/images/gallery/pacific-hauler.jpg",
  ],
  [
    "Sapphire Princess",
    "$75,000,000",
    "Luxury cruise liner with 1,200 passenger capacity.",
    "Luxury Liners",
    "/images/gallery/sapphire-princess.jpg",
  ],
  [
    "Royal Odyssey",
    "$95,000,000",
    "Premium cruise liner featuring 1,500 passenger capacity, luxury suites.",
    "Luxury Liners",
    "/images/gallery/royal-odyssey.jpg",
  ],
  [
    "Celestial Voyager",
    "$85,000,000",
    "Elegant cruise liner with 1,300 passenger capacity.",
    "Luxury Liners",
    "/images/gallery/celestial-voyager.jpg",
  ],
];
const cats = ["All Categories", "Luxury Yacht", "Cargo Ship", "Luxury Liners"];

export function meta() {
  return [{ title: "Gallery | ShipDecKK" }];
}

export default function Gallery() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState(cats[0]);
  const query = q.trim().toLowerCase();
  const list = ships.filter(
    (s) =>
      (cat === cats[0] || s[3] === cat) &&
      (!query || s[0]!.toLowerCase().includes(query)),
  );
  return (
    <SiteLayout title="ShipDeckk Gallery">
      <div className="px-6 py-12 lg:px-23.75">
        <div className="grid gap-6 md:grid-cols-2">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search Ships..."
            className="h-10 w-full rounded-[7px] border border-[#B7B7B7] px-3.75 text-xl placeholder:text-[#999]"
          />
          <div className="relative">
            <select
              value={cat}
              onChange={(e) => setCat(e.target.value)}
              className="h-10 w-full appearance-none rounded-[7px] border border-[#B7B7B7] bg-white px-3.75 text-xl text-[#292929]"
            >
              {cats.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <IconChevronDown
              size={18}
              className="pointer-events-none absolute right-3 top-3"
            />
          </div>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {list.map(([name, price, desc, type, id]) => (
            <div
              key={name}
              className="relative mx-auto flex w-full max-w-89.5 flex-col rounded-[20px] bg-white pb-6 shadow-[0_6px_10px_rgba(0,0,0,0.1)]"
            >
              <img
                src={id}
                alt={name}
                className="h-60.5 w-full rounded-t-[20px] object-cover"
              />
              <span className="absolute right-3 top-4 rounded-[7px] bg-primary px-3 py-1 text-xs text-white">
                {type}
              </span>
              <div className="flex flex-1 flex-col px-4.25 pt-8 text-[#3E3E3E]">
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="mt-3 min-h-13.75 text-lg">{desc}</p>
                <p className="mt-6 text-xl font-extrabold">{price}</p>
                <button
                  type="button"
                  className="mt-4 h-13.25 w-full rounded-[7px] bg-primary text-xl text-white"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        {list.length === 0 && (
          <p className="mt-10 text-center text-lg text-[#858585]">
            No ships found.
          </p>
        )}
      </div>
    </SiteLayout>
  );
}
