# ShipDecKK

Developed a responsive multi-page website for a maritime ship dealership selling yachts, cargo ships, and luxury liners. Built with **React 19**, **React Router**, **TypeScript**, and **Tailwind CSS v4**.

---

## Key Highlights

- **Multi-Page Architecture with Shared Layout:** Structured five core pages (Home, Gallery, Services, About Us, Subscription) with React Router’s file-based routing and a shared layout (`SiteLayout` featuring a sticky header, responsive navigation, and footer) reused across all of them.
- **Interactive Vessel Catalog:** Implemented an interactive catalog of vessels with real-time keyword search and category filtering (Luxury Yachts, Cargo Ships, Luxury Liners) powered by React state.
- **Adaptive Responsive Design:** Designed the responsive layout for mobile, tablet, and desktop screens using Tailwind CSS v4 breakpoints, complete with an accessible mobile hamburger menu and viewport-fitting sections.
- **Robust Error Boundaries & 404:** Integrated a dedicated catch-all 404 route (`/*`) and application-wide `ErrorBoundary` wrapped inside the branded layout.
- **Strict Type Safety:** Fully typed with TypeScript and integrated with React Router typegen.

---

## Tech Stack

- **Framework:** [React 19](https://react.dev/) + [React Router](https://reactrouter.com/) (file-based routing)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Tabler Icons React](https://tabler.io/icons)
- **Tooling & Bundler:** [Vite](https://vite.dev/)
- **Language:** TypeScript

---

## Page Routes

| Route           | Page              | Description                                                                |
| :-------------- | :---------------- | :------------------------------------------------------------------------- |
| `/`             | **Home**          | Hero section, featured collections, service highlights, and newsletter CTA |
| `/gallery`      | **Fleet Gallery** | Searchable and filterable vessel inventory with real-time state filtering  |
| `/service`      | **Services**      | Detailed service offerings and operational capabilities                    |
| `/about-us`     | **About Us**      | Company history, core values, and industry achievements                    |
| `/subscription` | **Subscription**  | Customer newsletter subscription and registration form                     |
| `/*`            | **404 Not Found** | Dedicated not-found catch-all route with return navigation                 |

---

## Directory Structure

```text
ShipDeckk/
├── app/
│   ├── components/site/      # Shared UI layout (SiteLayout, Card, NavyButton)
│   ├── data/                 # Single source of truth (brand, services, ships)
│   ├── routes/               # File-based application routes
│   │   ├── _index.tsx        # / (Home)
│   │   ├── $.tsx             # /* (404 Not Found catch-all)
│   │   ├── about-us.tsx      # /about-us
│   │   ├── gallery.tsx       # /gallery
│   │   ├── service.tsx       # /service
│   │   └── subscription.tsx  # /subscription
│   ├── entry.client.tsx      # Client-side hydration entry
│   ├── entry.server.tsx      # Server entry
│   ├── global.css            # Tailwind theme tokens & font imports
│   ├── root.tsx              # HTML document shell, meta tags & ErrorBoundary
│   └── routes.ts             # React Router flatRoutes config
├── public/
│   └── images/               # Organized static images (hero, gallery, etc.)
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Getting Started

### Prerequisites

- **Node.js:** `>= 22`
- **npm:** `>= 10`

### Installation

```bash
git clone https://github.com/bastianjsx/ShipDeckk.git
cd ShipDeckk
npm install
```

### Development

Start the local development server with Hot Module Replacement:

```bash
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

### Typecheck

Run React Router typegen and TypeScript compiler checks:

```bash
npm run typecheck
```
