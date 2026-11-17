import { useState } from "react";

import { SiteLayout } from "@/components/site/SiteLayout";

const fields = [
  ["name", "Full Name", "Enter your full name", "text"],
  ["email", "Email Address", "Enter your email address", "email"],
  ["password", "Password", "Create a password", "password"],
  ["age", "Age", "Enter your age", "number"],
] as const;

export function meta() {
  return [{ title: "Subscription | ShipDecKK" }];
}

export default function Subscription() {
  const [done, setDone] = useState(false);
  return (
    <SiteLayout title="ShipDecKK Subscription">
      <div className="px-6 py-12">
        <p className="mx-auto max-w-204.5 text-center text-xl">
          Subscribe to our newsletter to receive the latest updates, exclusive
          promotions, and exciting news from ShipDecKK.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
          className="mx-auto mt-12 max-w-261 rounded-[10px] border-2 border-[#999] bg-white p-6 md:p-6.5"
        >
          <h2 className="text-[25px] font-semibold">Subscribe Now</h2>
          <p className="mt-1 text-lg text-primary">
            Fill out the form below to subscribe
          </p>
          <div className="mt-6 space-y-6">
            {fields.map(([name, label, ph, type]) => (
              <label
                key={name}
                className="block text-lg font-medium text-[#292929]"
              >
                {label}
                <input
                  required
                  id={name}
                  name={name}
                  type={type}
                  placeholder={ph}
                  className="mt-3 block h-10 w-full rounded-[7px] border border-[#999] px-3.75 text-lg font-normal placeholder:text-primary"
                />
              </label>
            ))}
          </div>
          <button
            type="submit"
            className="mt-10 h-13.25 w-full rounded-[7px] bg-primary text-xl text-white"
          >
            Subscribe Now
          </button>
          {done && (
            <p className="mt-4 text-center text-lg text-primary">
              Thanks for subscribing!
            </p>
          )}
        </form>
      </div>
    </SiteLayout>
  );
}
