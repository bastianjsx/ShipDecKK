import { useState } from "react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { BRAND } from "@/data/siteData";

const fields = [
  ["name", "Full Name", "Enter your full name", "text"],
  ["email", "Email Address", "Enter your email address", "email"],
  ["password", "Password", "Create a password", "password"],
  ["age", "Age", "Enter your age", "number"],
] as const;

export function meta() {
  return [{ title: `Subscription | ${BRAND.name}` }];
}

export default function Subscription() {
  const [done, setDone] = useState(false);
  return (
    <SiteLayout title={`${BRAND.name} Subscription`}>
      <div className="px-4 py-8 sm:px-6 sm:py-12">
        <p className="mx-auto max-w-204.5 text-center text-base sm:text-lg md:text-xl">
          Subscribe to our newsletter to receive the latest updates, exclusive
          promotions, and exciting news from {BRAND.name}.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
          className="mx-auto mt-8 max-w-261 rounded-[10px] border-2 border-[#999] bg-white p-5 sm:mt-12 sm:p-6 md:p-8"
        >
          <h2 className="text-2xl font-semibold sm:text-[25px]">
            Subscribe Now
          </h2>
          <p className="mt-1 text-base text-primary sm:text-lg">
            Fill out the form below to subscribe
          </p>
          <div className="mt-6 space-y-5 sm:space-y-6">
            {fields.map(([name, label, ph, type]) => (
              <label
                key={name}
                className="block text-base font-medium text-[#292929] sm:text-lg"
              >
                {label}
                <input
                  required
                  id={name}
                  name={name}
                  type={type}
                  placeholder={ph}
                  className="mt-2 block h-11 w-full rounded-[7px] border border-[#999] px-3.75 text-base font-normal placeholder:text-primary sm:mt-3 sm:h-12 sm:text-lg"
                />
              </label>
            ))}
          </div>
          <button
            type="submit"
            className="mt-8 h-12 w-full rounded-[7px] bg-primary text-lg font-semibold text-white transition hover:opacity-90 sm:mt-10 sm:h-13.25 sm:text-xl"
          >
            Subscribe Now
          </button>
          {done && (
            <p className="mt-4 text-center text-base font-semibold text-primary sm:text-lg">
              Thanks for subscribing!
            </p>
          )}
        </form>
      </div>
    </SiteLayout>
  );
}
