# Mudit Paper Company — Agent Instructions

## Tech Stack

- Next.js 16, React 19, TypeScript
- CSS Modules (no Tailwind)
- No external UI libraries

## Folder Structure

- components/layout/ — Navbar, Footer
- components/home/ — home page sections
- components/product/ — product page components
- data/product.ts — all product data
- types/product.ts — TypeScript types
- lib/config.ts — BASE_URL, COMPANY constants

## Conventions

- Use @/ alias for all imports
- readonly on all props and data
- <Link> for internal, <a> for external
- All external <a> need rel="noopener noreferrer"
- No hardcoded company values — use COMPANY from @/lib/config
