# ShipDecKK 🚢

ShipDecKK is a high-performance maritime dealership web application specializing in the sale and servicing of luxury yachts, cargo vessels, and commercial liners. Built with **React 19**, **React Router**, and **Tailwind CSS v4**.

---

## Features

- **Fleet Showcase & Filtering:** Dynamic catalog supporting category filtering (Luxury Yachts, Cargo Ships, Luxury Liners) and live keyword search.
- **Responsive Full-Height Hero Banner:** Dynamic viewport-filling hero banner layout tailored for all display sizes without above-the-fold gaps.
- **Service & Company Profiles:** Dedicated showcases for ship sales, maintenance, insurance, custom design, and emergency assistance.
- **Newsletter Subscription:** Interactive subscription flow with form validation.
- **Clean Asset Architecture:** Structured static asset system with semantic naming conventions under `public/images/`.
- **Strict Typing:** Built with TypeScript with full React Router typegen integration.

---

## Tech Stack

## Features

- **Fleet Showcase & Filtering:** Dynamic catalog supporting category filtering (Luxury Yachts, Cargo Ships, Luxury Liners) and live keyword search.
- **Responsive Full-Height Hero Banner:** Dynamic viewport-filling hero banner layout tailored for all display sizes without above-the-fold gaps.
- **Service & Company Profiles:** Dedicated showcases for ship sales, maintenance, insurance, custom design, and emergency assistance.
- **Newsletter Subscription:** Interactive subscription flow with form validation.
- **Clean Asset Architecture:** Structured static asset system with semantic naming conventions under `public/images/`.
- **Strict Typing:** Built with TypeScript with full React Router typegen integration.

---

## Tech Stack

- **Framework:** [React 19](https://react.dev/) + [React Router](https://reactrouter.com/) (file-based routing)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Tabler Icons React](https://tabler.io/icons)
- **Tooling & Bundler:** [Vite](https://vite.dev/)
- **Language:** TypeScript

---

## Page Routes

| Route | Page | Description |
| :--- | :--- | :--- |
| `/` | **Home** | Hero section, featured collections, service highlights, and newsletter CTA |
| `/gallery` | **Fleet Gallery** | Searchable and filterable vessel inventory |
| `/service` | **Services** | Detailed service offerings and operational capabilities |
| `/about-us` | **About Us** | Company history, core values, and industry achievements |
| `/subscription` | **Subscribe** | Customer subscription and registration form |

---

## Directory Structure

```text
ShipDeckk/
├── app/
│   ├── components/site/      # Shared UI layout (SiteLayout, buttons)
│   ├── routes/               # File-based application routes
│   │   ├── _index.tsx        # / (Home)
│   │   ├── about-us.tsx      # /about-us
│   │   ├── gallery.tsx       # /gallery
│   │   ├── service.tsx       # /service
│   │   └── subscription.tsx  # /subscription
│   ├── entry.client.tsx      # Client-side hydration entry
│   ├── entry.server.tsx      # Server entry
│   ├── global.css            # Tailwind theme tokens & font imports
│   ├── root.tsx              # HTML document shell & meta tags
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
git clone <YOUR_REPO_URL>
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
