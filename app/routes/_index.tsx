import { NavyButton, SiteLayout } from "@/components/site/SiteLayout";

const collections = [
  ["Luxury Yachts", "/images/gallery/azure-voyager.jpg"],
  ["Cargo Ships", "/images/gallery/global-freighter.jpg"],
  ["Luxury Liners", "/images/gallery/sapphire-princess.jpg"],
];
const services = [
  [
    "Ship Sales",
    "Find your perfect vessel from our extensive collection of ships.",
    "/images/features/sales.png",
  ],
  [
    "Maintenance",
    "Keep your vessel in optimal condition.",
    "/images/features/maintenance.png",
  ],
  [
    "Insurance",
    "Provide value and comprehensive insurance at a competitive rate.",
    "/images/features/insurance.png",
  ],
];

export function meta() {
  return [{ title: "ShipDecKK" }];
}

export default function HomeRoute() {
  return (
    <SiteLayout>
      <section className="relative flex min-h-[calc(100vh-107px)] items-center bg-primary">
        <img
          src="/images/hero.png"
          alt="ShipDecKK Luxury Yacht"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative px-6 py-16 text-[#F9F6EF] lg:px-23.75">
          <h1 className="text-[40px] font-bold">Luxury Yacht</h1>
          <p className="mt-6 max-w-129.75 text-xl">
            Experience the pinnacle of maritime luxury with our exclusive
            collection of high-end yachts
          </p>
          <NavyButton to="/gallery" light className="mt-10">
            View Collection
          </NavyButton>
        </div>
      </section>

      <section className="px-6 py-14 shadow-md lg:px-23.75">
        <h2 className="text-center text-3xl font-semibold md:text-[40px]">
          Welcome to <span className="text-[#0646B4]">ShipDeckk</span>
        </h2>
        <p className="mx-auto mt-6 max-w-4xl text-center text-xl">
          ShipDecKK is a leading ship dealership, specializing in the sale of
          high-end yachts, cargo ships, and luxury liners. Since its founding in
          2020, the company has earned a strong reputation for delivering
          premium ships built with top-quality materials and expert
          craftsmanship.
        </p>
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {collections.map(([name, id]) => (
            <div
              key={name}
              className="mx-auto w-full max-w-89.5 overflow-hidden rounded-[20px] bg-white pb-8 shadow-[0_6px_10px_rgba(0,0,0,0.1)]"
            >
              <img
                src={id}
                alt={name}
                className="h-62.5 w-full rounded-t-[20px] object-cover"
              />
              <p className="mt-6 text-center text-xl text-[#3E3E3E]">{name}</p>
              <div className="mt-6 text-center">
                <NavyButton to="/gallery" className="w-56 px-0">
                  View Collection
                </NavyButton>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary px-6 py-14 lg:px-23.75">
        <h2 className="text-center text-3xl font-semibold text-white md:text-[40px]">
          ShipDeckk Service
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map(([name, desc, id]) => (
            <div
              key={name}
              className="mx-auto flex w-full max-w-89.5 flex-col items-center rounded-[20px] bg-white px-7 pb-8 pt-7 text-center shadow-[0_6px_10px_rgba(0,0,0,0.1)]"
            >
              <img
                src={id}
                alt={name}
                className="h-31.25 w-auto object-contain"
              />
              <h3 className="mt-6 text-[30px] font-semibold text-[#151414]">
                {name}
              </h3>
              <p className="mt-4 min-h-11 text-lg">{desc}</p>
              <NavyButton to="/service" className="mt-6 w-56 px-0">
                Learn More
              </NavyButton>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <NavyButton to="/service" light className="w-89.5 max-w-full">
            View More Service
          </NavyButton>
        </div>
      </section>

      <section className="flex flex-col items-center gap-10 px-6 py-14 shadow-md lg:flex-row lg:justify-between lg:px-23.75">
        <div className="max-w-159.25">
          <h2 className="text-4xl text-[#151414] md:text-[50px] md:leading-tight">
            Subscribe to The News
          </h2>
          <p className="mt-6 text-2xl">
            Don’t miss out! Subscribe now to get the latest updates, exclusive
            promotions, and exciting news
          </p>
          <NavyButton to="/subscription" className="mt-8 w-63.75 px-0">
            Subscribe Now
          </NavyButton>
        </div>
        <img
          src="/images/about/story.jpg"
          alt="Subscribe to ShipDecKK News"
          className="w-full max-w-133.75 rounded-[15px] object-cover"
        />
      </section>
    </SiteLayout>
  );
}
