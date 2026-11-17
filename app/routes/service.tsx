import { SiteLayout } from "@/components/site/SiteLayout";

const rows = [
  [
    "Ship Sales",
    "Find your perfect vessel from our extensive collection of ships. Whether you seek refined elegance for private leisure or solution for commercial shipping, ShipDecKK offers tailored solutions to suit every purpose. Each vessel in our fleet is carefully selected for its superior craftsmanship and cutting-edge design.",
    "/images/services/sales.jpg",
  ],
  [
    "Maintenance",
    "Keep your vessel in optimal condition with ShipDecKK comprehensive maintenance and repair services, designed to ensure peak performance and long-term reliability.",
    "/images/services/maintenance.jpg",
  ],
  [
    "Insurance",
    "Dedicated to offering exceptional service and unique policy option in the top choice of the maritime industry, ShipDecKK’s experienced agents will work on our client’s behalf to provide value and comprehensive boat insurance at a competitive rate.",
    "/images/services/insurance.jpg",
  ],
  [
    "Ship Customization",
    "Work with ShipDecKK’s expert designers to create a vessel that perfectly matches your specific requirements, whether for leisure, commercial, or specialized use. ShipDecKK’s team collaborates closely with you throughout the design process, ensuring every detail reflects your vision, functionality needs, and aesthetic preferences.",
    "/images/services/customization.jpg",
  ],
  [
    "Emergency Assistance",
    "ShipDecKK recognize that dependable support is essential to our clients’ peace of mind. Therefore ShipDecKK offer comprehensive 24/7 emergency assistance, ensuring immediate help is available whenever it is needed. ShipDeckK’s dedicated support team remains on standby at all times to address urgent technical issues or unforeseen circumstances.",
    "/images/services/emergency.jpg",
  ],
];
const bg = [
  "bg-white",
  "bg-primary text-white",
  "bg-[#F9F6EF]",
  "bg-primary text-white",
  "bg-[#F9F6EF]",
];

export function meta() {
  return [{ title: "Service | ShipDecKK" }];
}

export default function Service() {
  return (
    <SiteLayout title="ShipDeckk Service">
      {rows.map(([title, text, id], i) => (
        <section
          key={title}
          className={`${bg[i]} px-6 py-12 shadow-md lg:px-23.75`}
        >
          <div
            className={`mx-auto flex max-w-312.5 flex-col items-center gap-10 lg:flex-row lg:gap-19 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
          >
            <img
              src={id}
              alt={title}
              className="aspect-561/400 w-full max-w-140.25 object-cover shadow-[0_6px_10px_rgba(62,62,62,0.1)]"
            />
            <div className="max-w-153.25">
              <h2 className="text-3xl md:text-[40px]">{title}</h2>
              <p className="mt-8 text-lg">{text}</p>
            </div>
          </div>
        </section>
      ))}
    </SiteLayout>
  );
}
