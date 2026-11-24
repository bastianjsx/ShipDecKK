# ShipDecKK

ShipDeck is a yacht business website that showcases luxury yachts for sale, provides marine-related services such as maintenance and insurance. Built with **React 19**, **React Router**, and **Tailwind CSS v4**.

[![Live Demo](https://img.shields.io/badge/Visit-Live_Demo-2EA44F?style=for-the-badge&logo=vercel&logoColor=white)](https://ship-deckk-bas.vercel.app/)

---

## Features

- **Yacht Showcase and Catalog** – Displaying yachts available for customers.
- **Marine Service Platform** – Presenting services such as ship sales, maintenance, and insurance.
- **Company Profile** – Introducing the business, its mission, values, and achievements.
- **Customer Subscription Portal** – collecting customer information through a subscription form.

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

---

## Links
- **UI/UX Design:** [View Figma Prototype](https://www.figma.com/proto/monGy3PZNE6ffoWSHzDYGK/ShipDecKK?node-id=0-1&t=mngRnY9V7czYZxzn-1)
