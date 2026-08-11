# CyberForge

A self-paced cybersecurity learning platform built with React, TypeScript, and Vite. CyberForge organizes courses, hands-on labs, certification roadmaps, and career tools into a single dashboard for learners working toward roles like SOC Analyst.

**Live demo:**  https://lively-jalebi-15c251.netlify.app/

## Features

- **Learning Paths** — beginner, intermediate, and advanced course tracks with structured modules, key takeaways, and practice exercises
- **Labs Library** — hands-on exercises with simulated terminal output (packet capture, log analysis, and more)
- **Certification Roadmap** — a guided path through industry certifications by skill tier
- **Career Toolkit** — resources for building a cybersecurity career (resume, portfolio, job search)
- **Community Resources** — curated links to platforms, forums, and further learning
- **Profile Dashboard** — track progress across courses and labs

## Tech Stack

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for build tooling
- [lucide-react](https://lucide.dev/) for icons

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/cyber-forge.git
cd cyber-forge
npm install
```

### Development

```bash
npm run dev
```

Opens the app locally with hot reload.

### Build

```bash
npm run build
```

Outputs a production build to `dist/`.

### Preview production build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/       # Page and UI components (Dashboard, LabsLibrary, CertRoadmap, etc.)
├── data/             # Course content by tier (beginner, intermediate, advanced)
├── data.ts           # Aggregated course, lab, cert, and milestone data
├── types.ts          # Shared TypeScript types
├── styles.css         # Global styles
└── index.tsx         # App entry point
```

## Deployment

This is a static site after build — deployable to any static host:

- **Netlify:** drag the `dist/` folder into [app.netlify.com/drop](https://app.netlify.com/drop)
- **Vercel:** import this repo at [vercel.com](https://vercel.com) — auto-detects Vite
- **GitHub Pages:** run `npm run build`, then publish `dist/` to a `gh-pages` branch

## License

MIT
