import { Link } from "react-router";

import { SiteLayout } from "@/components/site/SiteLayout";
import { BRAND } from "@/data/siteData";

export function meta() {
  return [{ title: `404 - Page Not Found | ${BRAND.name}` }];
}

export default function NotFound() {
  return (
    <SiteLayout title="Page Not Found">
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-20 text-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-[#858585]">
          404 Error
        </span>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mt-4 max-w-md text-lg text-dark">
          The vessel or page you are navigating toward does not exist or has set
          sail to another harbor.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="rounded-[5px] bg-primary px-6 py-2.5 text-base font-semibold text-white transition hover:opacity-90"
          >
            Return to Home
          </Link>
          <Link
            to="/gallery"
            className="rounded-[5px] border border-primary px-6 py-2.5 text-base font-semibold text-primary transition hover:bg-cream"
          >
            Explore Fleet
          </Link>
        </div>
      </main>
    </SiteLayout>
  );
}
