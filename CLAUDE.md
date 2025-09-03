# Kinesiologue Frontend - Claude Code Configuration

## Project Overview
This is an Astro + React + TypeScript frontend project for Kinesiologue, a French kinesiology practice platform.

## Technology Stack
- **Framework**: Astro 5.13.5 with React 19.1.1
- **Styling**: Tailwind CSS v4.1.12 
- **Package Manager**: pnpm 10.15.0
- **Language**: TypeScript
- **UI Components**: Lucide React icons, class-variance-authority for component variants

## Development Commands
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build

## Code Standards
- Use kebab-case for component files (e.g., `appointment-card.tsx`, `patient-list.tsx`)
- Prefer React functional components with TypeScript interfaces
- Use `React.useEffect`, `React.useState` instead of direct imports
- Default language: French (for French market)
- Use semantic HTML elements in Astro components (`<article>`, `<section>`, `<main>`)
- Include comprehensive SEO meta tags
- Ensure accessibility with proper ARIA labels

## Project Structure
- `/src/components/` - Reusable React components
- `/src/components/ui/` - Base UI components
- `/src/pages/` - Astro pages and routes
- `/src/layouts/` - Astro layout components
- `/src/styles/` - Global styles
- `/src/types/` - TypeScript type definitions
- `/src/utils/` - Utility functions
- `/src/hooks/` - Custom React hooks

## Notes
- This is a French kinesiology practice platform
- Focus on healthcare/medical UX patterns
- Ensure mobile-first responsive design
- Consider accessibility for healthcare users