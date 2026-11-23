import { Card, SiteLayout } from "@/components/site/SiteLayout";
import { BRAND } from "@/data/siteData";

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
] as const;

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
] as const;

export function meta() {
  return [{ title: `About Us | ${BRAND.name}` }];
}

export default function About() {
  return (
    <SiteLayout title={`About ${BRAND.name}`}>
      <section className="grid items-center gap-8 px-6 py-10 shadow-md sm:py-14 lg:grid-cols-2 lg:gap-10 lg:px-23.75">
        <div className="space-y-4 text-base sm:space-y-5 sm:text-lg">
          <h2 className="text-2xl font-bold text-dark sm:text-3xl md:text-[35px]">
            Our Story
          </h2>
          <p>
            Founded in 2020, {BRAND.name} has quickly established itself as a
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
            Today, {BRAND.name} is recognized as a top choice in the maritime
            industry, known for our reliability, innovation, and customer
            satisfaction. We continue to push boundaries and set new standards
            in ship design and service.
          </p>
        </div>
        <img
          src="/images/services/customization.jpg"
          alt={`${BRAND.name} Story`}
          className="aspect-77/52 w-full rounded-[15px] object-cover"
        />
      </section>

      <section className="bg-primary px-6 py-10 text-white sm:py-12 lg:px-23.75">
        <h2 className="text-center text-2xl font-semibold sm:text-3xl md:text-[40px]">
          Our Values and Mission
        </h2>
        <div className="mt-8 grid gap-6 sm:mt-12 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(([t, d, id]) => (
            <Card
              key={t}
              maxWidth={false}
              className="flex flex-col items-center px-4 pb-8 pt-8 text-center sm:px-6"
            >
              <img
                src={id}
                alt={t}
                className="h-28 w-28 object-contain sm:h-37.5 sm:w-37.5"
              />
              <h3 className="mt-6 text-2xl font-semibold text-dark sm:mt-8 sm:text-[30px]">
                {t}
              </h3>
              <p className="mt-4 text-base sm:mt-5 sm:text-lg">{d}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="px-6 py-10 shadow-md sm:py-12 lg:px-23.75">
        <h2 className="text-center text-2xl font-semibold sm:text-3xl md:text-[40px]">
          Our Achievements
        </h2>
        <div className="mt-8 grid gap-6 sm:mt-12 sm:gap-8 lg:grid-cols-2">
          {awards.map(([t, d, y]) => (
            <Card
              key={t}
              maxWidth={false}
              className="flex flex-col items-center gap-4 p-5 text-center sm:flex-row sm:items-start sm:gap-6 sm:p-6 sm:text-left"
            >
              <img
                src="/images/about/award.jpg"
                alt={t}
                className="h-12.5 w-12.5 shrink-0 rounded-full object-cover"
              />
              <div className="text-base sm:text-lg">
                <h3 className="text-xl font-semibold text-dark sm:text-[25px]">
                  {t}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary sm:text-base">
                  {y}
                </p>
                <p className="mt-1 text-sm text-[#555] sm:text-base">{d}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
