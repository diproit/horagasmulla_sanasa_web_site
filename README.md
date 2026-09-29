# Horagasmulla SANASA

Official website project for **Dodangoda Horagasmulla SANASA Society Ltd**, a cooperative bank located in Dodangoda, Sri Lanka.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Code Quality**: ESLint & Prettier
- **Rendering**: Fully static site generation (SSG)

## Folder Structure

```
├── app/                  # Next.js App Router (pages, layout, styles)
├── components/
│   ├── layout/          # Layout components (Header, Footer, Navigation)
│   ├── sections/        # Page section components
│   └── ui/              # Reusable UI components
├── content/             # Structured data, static content, and copy
├── lib/                 # Utility functions and shared helpers
├── public/
│   └── images/          # Static images and visual assets
├── .env.example         # Environment variables template
├── .env.local           # Local environment variables
└── next.config.ts       # Next.js configuration (static export)
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for static export (SSG)

```bash
npm run build
```

This exports fully static assets to the `out/` directory.

### 4. Code Quality Scripts

- `npm run lint`: Run ESLint checks
- `npm run format`: Format code using Prettier
