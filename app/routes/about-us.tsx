import { SiteLayout } from "@/components/site/SiteLayout";

const values = [
  [
    "Excellence",
    "We strive for excellence in every aspect of our business, from ship design to customer service.",
    "/images/values/excellence.jpg",
  ],
  [
    "Innovation",
    "We continuously innovate to provide cutting-edge maritime solutions that exceed expectations.",
    "/images/values/innovation.jpg",
  ],
  [
    "Integrity",
    "We conduct our business with the highest level of integrity and transparency.",
    "/images/values/integrity.jpg",
  ],
];
const awards = [
  [
    "Maritime Excellence Award",
    "Awarded by International Maritime Association",
    "2024",
  ],
  ["Innovation in Ship Design", "Awarded by Maritime Technology Forum", "2024"],
  ["Best Luxury Yacht Provider", "Awarded by Global Shipping Awards", "2022"],
  [
    "Customer Satisfaction Excellence",
    "Awarded by Consumer Choice Awards",
    "2023",
  ],
];

export function meta() {
  return [{ title: "About Us | ShipDecKK" }];
}

export default function About() {
  return (
    <SiteLayout title="About ShipDeckk">
      <section className="grid items-center gap-10 px-6 py-14 shadow-md lg:grid-cols-2 lg:px-23.75">
        <div className="space-y-5 text-lg">
          <h2 className="text-[35px] text-[#151414]">Our Story</h2>
          <p>
            Founded in 2020, ShipDecKK has quickly established itself as a
            leading ship dealership, specializing in high-end yachts, cargo
            ships, and luxury liners. Our journey began with a simple vision: to
            revolutionize the maritime industry by providing exceptional vessels
            and unparalleled customer service.
          </p>
          <p>
            What started as a small team of passionate maritime enthusiasts has
            grown into a global operation with offices in key locations around
            the world. Throughout our growth, we've maintained our commitment to
            excellence, using only the finest materials and working with expert
            craftsmen to ensure every vessel meets the highest standards.
          </p>
          <p>
            Today, ShipDecKK is recognized as a top choice in the maritime
            industry, known for our reliability, innovation, and customer
            satisfaction. We continue to push boundaries and set new standards
            in ship design and service.
          </p>
        </div>
        <img
          src="/images/about/story.jpg"
          alt="ShipDecKK Story"
          className="aspect-77/52 w-full rounded-[15px] object-cover"
        />
      </section>

      <section className="bg-primary px-6 py-12 lg:px-23.75">
        <h2 className="text-center text-3xl font-semibold text-white md:text-[40px]">
          Our Values and Mission
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {values.map(([t, d, id]) => (
            <div
              key={t}
              className="flex flex-col items-center rounded-[20px] bg-white px-3.5 pb-8 pt-8 text-center shadow-[0_6px_10px_rgba(0,0,0,0.1)]"
            >
              <img src={id} alt={t} className="h-37.5 w-37.5 object-contain" />
              <h3 className="mt-8 text-[30px] font-semibold text-[#151414]">
                {t}
              </h3>
              <p className="mt-5 text-lg">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-12 shadow-md lg:px-23.75">
        <h2 className="text-center text-3xl font-semibold md:text-[40px]">
          Our Achievement
        </h2>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {awards.map(([t, d, y]) => (
            <div
              key={t}
              className="flex items-center gap-6 rounded-[20px] bg-white p-6 shadow-[0_6px_10px_rgba(0,0,0,0.1)]"
            >
              <img
                src="/images/about/award.jpg"
                alt={t}
                className="h-12.5 w-12.5 shrink-0 rounded-full object-cover"
              />
              <div className="text-lg">
                <h3 className="text-[25px] font-semibold text-[#151414]">
                  {t}
                </h3>
                <p className="mt-1">{y}</p>
                <p className="mt-1">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
