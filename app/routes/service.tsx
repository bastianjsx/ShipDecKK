import { SiteLayout } from "@/components/site/SiteLayout";
import { BRAND, SERVICES } from "@/data/siteData";

const bg = [
  "bg-white",
  "bg-primary text-white",
  "bg-cream",
  "bg-primary text-white",
  "bg-cream",
];

export function meta() {
  return [{ title: `Service | ${BRAND.name}` }];
}

export default function Service() {
  return (
    <SiteLayout title={`${BRAND.name} Service`}>
      {SERVICES.map((s, i) => (
        <section
          key={s.name}
          className={`${bg[i] ?? "bg-white"} px-6 py-10 shadow-md sm:py-12 lg:px-23.75`}
        >
          <div
            className={`mx-auto flex max-w-312.5 flex-col items-center gap-6 sm:gap-10 lg:flex-row lg:gap-19 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
          >
            <img
              src={s.image}
              alt={s.name}
              className="aspect-561/400 w-full rounded-[15px] object-cover shadow-card lg:max-w-140.25"
            />
            <div className="w-full max-w-153.25 text-center lg:text-left">
              <h2 className="text-2xl font-bold sm:text-3xl md:text-[40px]">
                {s.name}
              </h2>
              <p className="mt-4 text-base leading-relaxed sm:mt-8 sm:text-lg">
                {s.fullDesc}
              </p>
            </div>
          </div>
        </section>
      ))}
    </SiteLayout>
  );
}
