import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import { SiteLayout } from "@/components/site/SiteLayout";
import { BRAND } from "@/data/siteData";

import type { Route } from "./+types/root";

import "./global.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1D355E" />
        <link rel="icon" type="image/png" href="/images/logo.png" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function HydrateFallback() {
  return <div className="min-h-screen bg-white" />;
}

export default function Root() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : `Error ${error.status}`;
    details =
      error.status === 404
        ? "The requested vessel or page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <SiteLayout title={`${message} | ${BRAND.name}`}>
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-20 text-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-[#858585]">
          {isRouteErrorResponse(error) ? "Routing Error" : "System Error"}
        </span>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          {message}
        </h1>
        <p className="mt-4 max-w-md text-lg text-dark">{details}</p>
        {stack && (
          <pre className="mt-6 max-h-48 max-w-2xl overflow-x-auto rounded bg-gray-100 p-4 text-left text-xs text-red-600">
            <code>{stack}</code>
          </pre>
        )}
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
