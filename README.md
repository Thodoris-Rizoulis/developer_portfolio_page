# Developer Portfolio (Next.js + Sanity)

Production-style personal portfolio built with Next.js App Router and Sanity CMS, with animated section-based UX, horizontal card/slider sections, and typed API-backed data fetching.

## What This Project Is

This repository contains a single-page portfolio experience composed of sections:

- Hero
- About
- Experience
- Skills
- Projects
- Contact

All content is sourced from Sanity documents through internal Next.js API routes. The frontend renders server-side content and enriches interactions with Framer Motion and client-side components.

## Tech Stack

- Framework: Next.js 15 (App Router), React 19, TypeScript
- Styling: Tailwind CSS v4 + tailwind-scrollbar
- CMS: Sanity Studio v3 + next-sanity
- Animation/UI: framer-motion, react-simple-typewriter, react-social-icons, heroicons
- Forms: react-hook-form (contact form uses `mailto:` handoff)

## Architecture Deep Dive

### 1) High-level Flow

1. `app/page.tsx` is an async Server Component.
2. It calls utility fetchers in `utils/*`.
3. Those fetchers call internal API routes under `app/api/*` using `NEXT_PUBLIC_BASE_URL`.
4. API route handlers execute GROQ queries via Sanity client.
5. JSON payloads are returned to the page.
6. Section components receive typed props and render the UI.

### 2) Rendering Model

- Root page (`app/page.tsx`) runs on the server and fetches all section data before render.
- Most section components are Client Components (`"use client"`) for animation and interaction.
- Result: SSR data + rich client-side motion.

### 3) Data Model and Types

Sanity document types:

- `pageInfo`
- `experience`
- `project`
- `skill`
- `social`

Type definitions are centralized in `typings.d.ts` and reused across utilities, routes, and components.

### 4) API Layer

Internal API endpoints:

- `GET /api/getPageInfo`
- `GET /api/getExperience`
- `GET /api/getProjects`
- `GET /api/getSkills`
- `GET /api/getSocials`

These route handlers query Sanity with GROQ and return normalized JSON payloads.

### 5) Sanity Integration

There are two Sanity client entry points currently:

- `sanity.ts` exports `sanityClient` + image `urlFor`
- `sanity/lib/client.ts` exports `client` (used by `sanity/lib/live.ts`)

Studio is mounted at:

- `/studio` via `app/studio/[[...tool]]/page.tsx`

## Project Structure

```text
app/
	page.tsx                  # Main portfolio page composition
	layout.tsx                # Global HTML shell + metadata
	globals.css               # Tailwind + component utility classes
	api/
		getPageInfo/route.ts
		getExperience/route.ts
		getProjects/route.ts
		getSkills/route.ts
		getSocials/route.ts
	studio/[[...tool]]/page.tsx  # Embedded Sanity Studio route

components/
	Header.tsx
	Hero.tsx
	About.tsx
	WorkExperience.tsx
	ExperienceCard.tsx
	Skills.tsx
	Skill.tsx
	Projects.tsx
	Contact.tsx

utils/
	fetchPageInfo.ts
	fetchExperiences.ts
	fetchProjects.ts
	fetchSkills.ts
	fetchSocials copy.ts

sanity/
	env.ts
	structure.ts
	lib/
		client.ts
		image.ts
		live.ts
	schemaTypes/
		pageInfo.ts
		experience.ts
		project.ts
		skill.ts
		social.ts
```

## Local Setup

### Prerequisites

- Node.js 20+
- npm 10+
- A Sanity project (project ID + dataset)

### Install

```bash
npm install
```

### Environment Variables

Create `.env.local` in the project root:

```bash
# App runtime
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-07-02
```

### Run Development

```bash
npm run dev
```

Open `http://localhost:3000`.

### Open Sanity Studio

Open `http://localhost:3000/studio`.

## Scripts

- `npm run dev` - Start dev server (Turbopack)
- `npm run build` - Production build
- `npm run start` - Start production server
- `npm run lint` - Run Next.js lint rules

## Content Operations

### Add/Update Portfolio Content

1. Open Studio at `/studio`.
2. Edit documents in `PageInfo`, `Experience`, `Project`, `Skill`, `Social`.
3. Save/publish.
4. Refresh the site to observe updates.

### Image Handling

- Images are stored in Sanity assets.
- Frontend image URLs are generated through `urlFor(...)`.
- Next.js image domain allowlist includes `cdn.sanity.io` in `next.config.ts`.

## Current Gaps and Technical Debt

During deep dive review, these are the highest-value cleanup items:

1. Rename `utils/fetchSocials copy.ts` to `utils/fetchSocials.ts` and update imports.
2. Fix type declarations in `typings.d.ts` (`date` should be `string` or `Date` depending on strategy).
3. Remove unused imports in API route handlers (`NextApiRequest`, `NextApiResponse`).
4. Consolidate Sanity client usage (`sanity.ts` vs `sanity/lib/client.ts`) to one source of truth.
5. Resolve UI class typos affecting layout consistency (`p44`, `md-px-10`, `texl-lg`, `speace-y-10`, etc.).
6. Decide whether `sanity/lib/live.ts` is part of roadmap; remove or wire it properly.
7. Ensure generated `dist/` artifacts are not committed unless intentional.

## Recommended Next Improvements

1. Add fetch error handling and fallback UI states per section.
2. Add schema-level validation for required content fields.
3. Add integration tests for API routes and basic render tests for page sections.
4. Introduce caching/revalidation policy (`revalidate`, tags, or Sanity live updates).
5. Add a strict CI check pipeline: typecheck, lint, build.

## Deployment Notes

- Deployable to Vercel out of the box.
- Configure all required env vars in deployment settings.
- Confirm Sanity dataset visibility and token strategy if moving to private datasets.

---

If you want, the next step can be a focused refactor pass that removes the current technical debt list in one clean PR-sized change set.
