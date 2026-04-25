<div align="center">

# Turkish American Pharmacists Association

[![Live Demo](https://img.shields.io/badge/Live_Demo-taeb.us-0F172A?style=for-the-badge&logo=cloudflare)](https://taeb.us)
[![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite_6-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg?style=for-the-badge)](https://www.gnu.org/licenses/gpl-3.0)

</div>

---

## 1. Project Abstract

This repository contains the official frontend architecture for the **Turkish American Pharmacists Association (TAEB)** web platform. Established in 2014, TAEB operates as a premier non-governmental organization serving as a strategic interface between the healthcare frameworks of the Republic of Turkey and the United States of America.

The platform is designed to consolidate the digital presence of the organization, providing an accessible, robust, and highly optimized portal for professional networking, internship application processing, transatlantic academic event coordination, and strategic healthcare project showcasing. This application meets rigorous digital standards to serve clinical pharmacists, corporate partners, and regulatory bodies internationally.

**Production Environment Endpoint:** [https://taeb.us](https://taeb.us)

---

## 2. System Architecture & Technology Stack

The application is engineered as a high-performance **Single Page Application (SPA)**. It prioritizes decoupled data layers, asynchronous component chunking, strict type safety, and maximum paint/render optimization metrics.

### Core Frameworks
- **Runtime Environment:** Node.js (v20+)
- **Frontend Library:** React 18
- **Language Compilation:** TypeScript (Configured with `strict: true` targeting ESNext execution standards).
- **Build & Bundling Engine:** Vite 6 (utilizing esbuild for rapid localized compilation and Rollup for aggressive production minification and tree-shaking).

### Styling Strategy
- **Framework:** Tailwind CSS v4
- **Design Metaphor:** Custom token-based architecture heavily inspired by Google's Material Design 3 (MD3) guidelines.
- **Variable Injection:** Extensive use of CSS Custom Properties mapped directly in `index.css` to enable dynamic semantic theming (`primary`, `tertiary`, `surface-container-lowest`).

### Localization Infrastructure
- **Module:** `react-i18next` combined with `i18next`.
- **Methodology:** The system manages language state dynamically, enabling immediate interface translation between English (`en`) and Turkish (`tr`). All hardcoded strings are abstracted out of React components and housed within modular schema-validated JSON files to decouple logic from content.

### Routing Mechanism
- **Implementation:** `react-router-dom` v7.
- **Performance Paradigm:** Routes are executed under a structural `Lazy Loading` mechanism. Abstracted pages (such as Internship, Projects, and About) are dynamically imported via React's `Suspense` boundary, preventing arbitrary payload inflation on the initial client load sequence.

---

## 3. Data Injection Paradigm

Rather than relying on globally mutating stores such as Redux or heavy Context Providers for static contextual information, the application utilizes a structured `Data Injection` strategy. 

Information regarding TAEB's structural components—such as Board of Directors profiles, strategic projects, international interns, and event chronologies—are stored within strictly typed TypeScript arrays mapped in the `src/data/` directory.

### Advantages of this Paradigm:
1. **Separation of Concerns:** Technical components (e.g., `MemberCard.tsx`) remain functionally pure and stateless. They receive props interface definitions entirely dictated by the central data layer.
2. **Simplified Maintenance:** Non-developer personnel or junior contributors can easily modify site content by targeting isolated data maps without risking the functional flow of React component logic.
3. **No Network Latency:** Static domain-specific data does not require asynchronous API resolutions for primary critical-render path fulfillment.

---

## 4. Directory Layout

A granular breakdown of the source repository architecture for developer onboarding processes.

```text
taeb/
├── public/                 # Static assets circumventing Vite bundler (manifests, favicons)
├── src/                    # Primary application source
│   ├── components/         # Pure, reusable, stateless UI components (Navbar, Footer, SEO)
│   ├── data/               # Static data structures (members.ts, events.ts, interns.ts)
│   ├── locales/            # JSON translation bundles mapped by locale code (en.json, tr.json)
│   ├── pages/              # Higher-order route components exported as default objects
│   ├── App.tsx             # Root router integration and hierarchy definitions
│   ├── index.css           # Tailwind injection and global CSS variable mapping
│   ├── i18n.ts             # i18next configuration runtime initialization
│   └── main.tsx            # DOM mounting integration and StrictMode wrapping
├── index.html              # HTML DOM entry-point wrapper
├── package.json            # Semantic versioning dependencies and automation scripts
├── tailwind.config.js      # Implicit overrides (forward-compatible architecture)
├── tsconfig.json           # Compiler directives for TypeScript processing
└── vite.config.ts          # Compilation directives specifically mapped for Cloudflare
```

---

## 5. Deployment & CI/CD Strategy

Deployment is entirely automated through an integration with **Cloudflare Pages**. 

The CI/CD pipeline observes the `main` branch configuration. Upon any pull-request merge or direct commit execution to `main`, Cloudflare agents spawn a build container executing the `npm run build` automated pipeline. Edge synchronization takes place within minutes, propagating the compressed static assets across Cloudflare's global edge network.

- **Vite Configuration:** Custom definitions via `@cloudflare/vite-plugin` handle optimal service worker generation and edge-functions mapping to guarantee seamless client routing regardless of hard refreshes natively processed by the Edge layer.

---

## 6. Coding Standards & Contribution Guidelines

Maintainers submitting pull requests must adhere to the following stringent standards:

1. **Type Safety Enforcement:** No implementation of implicit `any` definitions. All component properties must be defined by respective `interface` or `type` abstractions.
2. **Component Purity:** UI elements should avoid complex local state manipulation whenever externalized solutions exist. Components should aim exclusively to handle DOM abstraction logic.
3. **Responsive Mapping:** Mobile-first media queries must be observed via Tailwind's `md:`, `lg:` prefixes. Hardcoded non-percentage/rem dimensions should be avoided outside of explicit micro-components.
4. **Localization Enforcement:** No textual information may be mapped directly into HTML abstractions. All strings must be piped through the `t()` generic resolution methodology referencing localized key values.

---

## 7. Local Configuration

### Environment Prerequisites
- Platform: Windows (WSL2), macOS, or Linux.
- Target Node Version: `v20.0.0` (LTS) or greater.

### Installation Procedure

1. **Repository Cloning:**
   ```bash
   git clone https://github.com/bulutmuf/taeb.git
   cd taeb
   ```

2. **Dependency Resolution:**
   ```bash
   npm install
   ```

3. **Development Server Execution:**
   The process compiles the logic via `esbuild` and initializes a rapid HMR (Hot Module Replacement) instance.
   ```bash
   npm run dev
   ```
   The local client will stream to standard port configuration `http://localhost:5173`.

4. **Production Build Validation:**
   Before executing a primary push to the origin, locally validate the compilation steps.
   ```bash
   npm run build
   ```

---

## 8. License & Copyright

All materials, source code logic, operational paradigms, and brand markers within this repository are the property of the **Turkish American Pharmacists Association**. 

This project is licensed under the **GNU General Public License v3.0 (GPL-3.0)**. See the `LICENSE` file for more details. 
