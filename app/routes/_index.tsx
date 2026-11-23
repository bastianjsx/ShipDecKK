import { Card, NavyButton, SiteLayout } from "@/components/site/SiteLayout";
import { BRAND, FEATURED_COLLECTIONS, SERVICES } from "@/data/siteData";

export function meta() {
  return [{ title: `${BRAND.name} | Premium Ship Dealership` }];
}

export default function HomeRoute() {
  const featuredServices = SERVICES.slice(0, 3);

  return (
    <SiteLayout>
      <section className="relative flex min-h-[calc(100vh-74px)] items-center bg-primary sm:min-h-[calc(100vh-100px)]">
        <img
          src="/images/hero.png"
          alt={`${BRAND.name} Luxury Yacht`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative px-6 py-12 text-cream sm:py-16 lg:px-23.75">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-[40px]">
            Luxury Yacht
          </h1>
          <p className="mt-4 max-w-129.75 text-base sm:mt-6 sm:text-lg md:text-xl">
            Experience the pinnacle of maritime luxury with our exclusive
            collection of high-end yachts
          </p>
          <NavyButton to="/gallery" light className="mt-8 sm:mt-10">
            View Collection
          </NavyButton>
        </div>
      </section>

      <section className="flex min-h-[calc(100vh-74px)] flex-col justify-center px-6 py-12 shadow-md sm:min-h-[calc(100vh-100px)] sm:py-16 lg:px-23.75">
        <h2 className="text-center text-2xl font-semibold sm:text-3xl md:text-[40px]">
          Welcome to <span className="text-[#0646B4]">{BRAND.name}</span>
        </h2>
        <p className="mx-auto mt-4 max-w-4xl text-center text-base sm:mt-6 sm:text-lg md:text-xl">
          {BRAND.name} is a leading ship dealership, specializing in the sale of
          high-end yachts, cargo ships, and luxury liners. Since its founding in
          2020, the company has earned a strong reputation for delivering
          premium ships built with top-quality materials and expert
          craftsmanship.
        </p>
        <div className="mt-10 grid gap-6 sm:mt-14 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FEATURED_COLLECTIONS.map((c) => (
            <Card
              key={c.name}
              maxWidth={false}
              className="overflow-hidden pb-8"
            >
              <img
                src={c.image}
                alt={c.name}
                className="h-56 w-full rounded-t-[20px] object-cover sm:h-62.5"
              />
              <p className="mt-6 text-center text-lg text-[#3E3E3E] sm:text-xl">
                {c.name}
              </p>
              <div className="mt-6 px-4 text-center">
                <NavyButton
                  to="/gallery"
                  className="w-full sm:w-56 px-4 text-base whitespace-nowrap"
                >
                  View Collection
                </NavyButton>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="flex min-h-[calc(100vh-74px)] flex-col justify-center bg-primary px-6 py-12 sm:min-h-[calc(100vh-100px)] sm:py-16 lg:px-23.75">
        <h2 className="text-center text-2xl font-semibold text-white sm:text-3xl md:text-[40px]">
          {BRAND.name} Service
        </h2>
        <div className="mt-10 grid gap-6 sm:mt-12 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((s) => (
            <Card
              key={s.name}
              maxWidth={false}
              className="flex flex-col items-center px-6 pb-8 pt-7 text-center sm:px-7"
            >
              <img
                src={s.icon}
                alt={s.name}
                className="h-24 w-auto object-contain sm:h-31.25"
              />
              <h3 className="mt-6 text-2xl font-semibold text-dark sm:text-[30px]">
                {s.name}
              </h3>
              <p className="mt-4 min-h-11 text-base sm:text-lg">
                {s.shortDesc}
              </p>
              <NavyButton to="/service" className="mt-6 w-full px-0 sm:w-56">
                Learn More
              </NavyButton>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center sm:mt-12">
          <NavyButton to="/service" light className="w-full sm:w-89.5">
            View More Service
          </NavyButton>
        </div>
      </section>

      <section className="flex min-h-[calc(100vh-74px)] flex-col items-center justify-center gap-8 px-6 py-12 shadow-md sm:min-h-[calc(100vh-100px)] sm:py-16 lg:flex-row lg:justify-between lg:gap-10 lg:px-23.75">
        <div className="w-full max-w-159.25 text-center lg:text-left">
          <h2 className="text-3xl text-dark sm:text-4xl md:text-[50px] md:leading-tight">
            Subscribe to Our Newsletter
          </h2>
          <p className="mt-4 text-base sm:mt-6 sm:text-xl md:text-2xl">
            Don’t miss out! Subscribe now to get the latest updates, exclusive
            promotions, and exciting news
          </p>
          <div className="mt-6 sm:mt-8">
            <NavyButton to="/subscription" className="w-full sm:w-63.75 px-0">
              Subscribe Now
            </NavyButton>
          </div>
        </div>
        <img
          src="/images/gallery/coastal-explorer.jpg"
          alt={`Subscribe to ${BRAND.name} Newsletter`}
          className="w-full max-w-133.75 rounded-[15px] object-cover"
        />
      </section>
    </SiteLayout>
  );
}
