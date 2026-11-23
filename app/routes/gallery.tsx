import { IconChevronDown } from "@tabler/icons-react";
import { useState } from "react";

import { Card, SiteLayout } from "@/components/site/SiteLayout";
import { BRAND, CATEGORIES, type Category, SHIPS } from "@/data/siteData";

export function meta() {
  return [{ title: `Gallery | ${BRAND.name}` }];
}

export default function Gallery() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<Category>(CATEGORIES[0]);
  const query = q.trim().toLowerCase();

  const list = SHIPS.filter(
    (s) =>
      (cat === CATEGORIES[0] || s.category === cat) &&
      (!query || s.name.toLowerCase().includes(query)),
  );

  return (
    <SiteLayout title={`${BRAND.name} Gallery`}>
      <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-23.75">
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search Ships..."
            className="h-11 w-full rounded-[7px] border border-[#B7B7B7] px-3.75 text-base placeholder:text-[#999] sm:h-12 sm:text-lg md:text-xl"
          />
          <div className="relative">
            <select
              value={cat}
              onChange={(e) => setCat(e.target.value as Category)}
              className="h-11 w-full appearance-none rounded-[7px] border border-[#B7B7B7] bg-white px-3.75 text-base text-[#292929] sm:h-12 sm:text-lg md:text-xl"
            >
              {CATEGORIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <IconChevronDown
              size={18}
              className="pointer-events-none absolute right-3 top-3.5 sm:top-4"
            />
          </div>
        </div>
        <div className="mt-8 grid gap-6 sm:mt-12 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((ship) => (
            <Card
              key={ship.name}
              maxWidth={false}
              className="relative flex flex-col pb-6"
            >
              <img
                src={ship.image}
                alt={ship.name}
                className="h-52 w-full rounded-t-[20px] object-cover sm:h-60.5"
              />
              <span className="absolute right-3 top-4 rounded-[7px] bg-primary px-3 py-1 text-xs text-white">
                {ship.category}
              </span>
              <div className="flex flex-1 flex-col px-4.25 pt-6 sm:pt-8 text-[#3E3E3E]">
                <h3 className="text-lg font-semibold sm:text-xl">
                  {ship.name}
                </h3>
                <p className="mt-2 text-sm sm:mt-3 sm:min-h-13.75 sm:text-base md:text-lg">
                  {ship.desc}
                </p>
                <p className="mt-4 text-lg font-extrabold sm:mt-6 sm:text-xl">
                  {ship.price}
                </p>
                <button
                  type="button"
                  className="mt-4 h-11 w-full rounded-[7px] bg-primary text-lg font-semibold text-white transition hover:opacity-90 sm:h-13.25 sm:text-xl"
                >
                  View Details
                </button>
              </div>
            </Card>
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
