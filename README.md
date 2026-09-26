# Health Hub

A social recipe-discovery platform where home cooks and chefs share recipes, follow each
other, and cook along with built-in step timers and nutrition scoring.

Built as the final capstone project of the RevoU full-stack bootcamp. This repository
contains the **frontend**; it talks to a Flask REST API backend and uses Supabase Storage
for image hosting.

---

## Table of Contents

- [Highlights](#highlights)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Demo Account](#demo-account)
- [Environment Variables](#environment-variables)
- [Architecture](#architecture)
  - [The `/api` Proxy Pattern](#the-api-proxy-pattern-why-it-exists)
  - [Authentication Flow](#authentication-flow)
  - [Route Protection](#route-protection)
  - [Data Fetching](#data-fetching)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [Acknowledgements](#acknowledgements)

---

## Highlights

**Recipe discovery (`/feeds`)**

- Multi-select filtering by **category** and **cuisine origin**, fanned out in parallel and
  de-duplicated so a recipe matching two filters appears only once
- **Nutri-Score (A–E)** filtering with colour-coded badges
- Client-side title search, plus show-more/show-less pagination
- Dedicated sections for My Recipes, Followed Chefs, and Saved (liked) recipes

**Recipe detail (`/recipe-detail/[id]`)**

- Server-rendered per recipe with the `httpOnly` token attached; `notFound()` on failure
- **Interactive ingredient checklist** with a "clear all" reset
- **Built-in cooking timer** per instruction step — start/pause, `MM:SS` display, and
  drift-free countdown computed from a `Date.now()` delta rather than a decrementing counter
- Save/like, follow/unfollow the author, and full comment CRUD (post, inline edit, delete
  with confirmation) — all refetching after mutation
- "People also like" recommendations and a quick-view modal from any card

**People (`/users`)**

- Responsive avatar grid across All / Chefs / Following / Followers
- Detail modal with role, location, bio, and follow/follower/view stats
- Skeleton loaders, a proper empty state, and an error state with retry
- A `normalizeUsers()` adapter that tolerates **six different API response shapes**
  (`data`, `users`, `following`, `followers`, `results`, `items`, plus nested variants)
- Initials-fallback avatars when an image is missing or fails to load

**Profile (`/profile`, auth-protected)**

- Avatar upload, inline editing of name / phone / location / bio
- Six tabs: Profile, Saved Recipes, Create Recipe, Security, Notifications, Logout
- **5-step recipe-creation wizard** with a 20-field Zod schema covering nutrition facts

**Authentication**

- 3-step registration wizard (Account → Personal Info → Security) with per-step Zod
  validation and a `.refine()` cross-field password-match check
- Login with username-or-email, "remember me" session length, and logout

---

## Tech Stack

| Layer | Choice |
| --- | --- |
| Framework | [Next.js 14](https://nextjs.org/) — App Router, Server Components, Route Handlers, Edge Middleware |
| UI runtime | React 18 |
| Language | TypeScript 5 (`strict: true`) |
| Styling | Tailwind CSS 3 + `tailwindcss-animate` + custom keyframes/gradients |
| Components | [shadcn/ui](https://ui.shadcn.com/) on [Radix UI](https://www.radix-ui.com/), `lucide-react` icons |
| Forms | React Hook Form + [Zod](https://zod.dev/) via `@hookform/resolvers` |
| State | [Zustand](https://zustand-docs.pmnd.rs/) (persisted) + a custom `useFetch` hook |
| HTTP | [Axios](https://axios-http.com/) behind a Next.js catch-all proxy |
| Auth | JWT in `httpOnly` cookies, server actions, Edge Middleware |
| Media | [Supabase Storage](https://supabase.com/docs/storage) |
| Backend | External Flask REST API |
| Hosting | Vercel |

---

## Quick Start

**Requirements:** Node.js 18.17+ and a running instance of the backend API.

```bash
# 1. Install dependencies
npm install

# 2. Configure the environment
cp .env.example .env.local   # then edit the values

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

If `NEXT_PUBLIC_API_URL` is not set, the app falls back to `http://127.0.0.1:5000`
(see `src/utils/constant.ts`).

---

## Demo Account

Skip the registration flow and explore the app with the pre-seeded demo user:

| | |
| --- | --- |
| **Username** | `user_demo` |
| **Password** | `Healthub123!` |

The account comes with sample recipes, follows, and comments so the discovery, recipe
detail, and people features all have something to show.

> **Note:** the backend is hosted on Render's free tier, which spins down when idle. The
> first request after a period of inactivity can take **up to a minute** while it wakes
> up — subsequent requests are fast.

---

## Environment Variables

| Variable | Required | Used by | Description |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_API_URL` | yes | `src/utils/constant.ts` | Base URL of the Flask backend. Must be reachable from the Next.js server, since the `/api` proxy runs server-side. |

### A note on Supabase

Image upload currently reads a **project URL and `anon` key hardcoded** in
`src/supabase/supabase.js`. The `anon` key is designed to be public and is safe to ship to
the browser — but it is being committed to source control, which is untidy and easy to
rotate away from. Moving these into `NEXT_PUBLIC_SUPABASE_URL` /
`NEXT_PUBLIC_SUPABASE_ANON_KEY` is on the [roadmap](#roadmap).

A `REACT_APP_SUPABASE_JWT_SECRET` entry may be present in a local `.env`; it is **not read
anywhere** in the codebase, and the `REACT_APP_` prefix is a Create React App convention
that does not apply here. It can be deleted.

`.env`, `.env*.local`, and `.vercel` are all gitignored.

---

## Architecture

```
src/
├── app/                    # App Router — pages, layouts, route handlers
├── actions/                # "use server" server actions (auth only)
├── components/             # Shared components + shadcn/ui primitives
├── features/               # Feature-sliced modules (feeds, people, profile, …)
├── hooks/                  # useFetch + mutation/upload hooks
├── middleware.ts           # Edge route protection
├── store/                  # Zustand stores
├── supabase/               # Supabase Storage client
├── types/                  # Shared TypeScript types
└── utils/                  # Axios instance, constants, helpers
```

### The `/api` Proxy Pattern (why it exists)

The browser **never** talks to the backend directly. All client requests go to `/api/*`,
which is a catch-all Next.js Route Handler at `src/app/api/[...path]/route.ts`. It:

1. Reads the `access_token` cookie (unreadable by JavaScript)
2. Re-attaches it as an `Authorization: Bearer` header
3. Strips hop-by-hop headers (`host`, `content-length`, `connection`, `keep-alive`,
   `transfer-encoding` in; `content-encoding`, `content-length` out)
4. Streams the upstream body through, with `duplex: "half"` so request bodies pass intact
5. Returns a `502` with a JSON message if the backend is unreachable

The same handler is exported for all five verbs (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`).

The payoff: **the JWT is never present in browser JavaScript**, so it cannot be read by
injected script or exfiltrated via XSS. It is `httpOnly` at the source and only ever
crosses the network as a header the browser cannot inspect. It also means the backend URL
is never exposed to the client.

### Authentication Flow

`src/actions/auth.ts` holds three server actions:

- `login(formData, rememberMe)` — validates with Zod, `POST`s to `/users/login` with
  `cache: "no-store"`, then sets `access_token` and `refresh_token` cookies with
  `httpOnly`, `sameSite: "strict"`, `path: "/"`, and `secure` in production. `rememberMe`
  extends the access token to 30 days instead of 24 hours.
- `logout()` — deletes both cookies.
- `isAuthenticated()` — calls `GET /users/profile` with the bearer token.

That last one is deliberate: the token is signed with Flask's secret, which this app does
not have. The backend is therefore the only authority that can verify signature, expiry,
*and* revocation — so a `2xx` from an authenticated endpoint **is** the verification, and
no local signature check is faked.

### Route Protection

`src/middleware.ts` guards `/profile` and bounces authenticated users away from
`/login` and `/register`, preserving the intended destination via a `?next=` parameter.

Middleware base64url-decodes the JWT payload to read `exp` **without verifying the
signature** — the signature is never trusted locally, it is only used to decide where to
redirect for UX. Every actual authorization decision is made by the backend on each
proxied request. The matcher is scoped to `["/profile/:path*", "/login", "/register"]`, so
middleware does not run on every navigation.

### Data Fetching

There is no React Query. Server state is handled by one generic hook,
`src/hooks/useFetch.ts`:

```ts
const { data, error, isLoading, refetch } = useFetch<RecipeDetailType[]>(
  "/feeds/recipes/all",
  { enabled: true, emptyOnNotFound: false },
);
```

It returns `{ data, error, isLoading, refetch }` and handles the things that are easy to
get wrong by hand:

- a `cancelledRef` guard so a slow response can never `setState` after unmount
- `enabled` to skip fetching conditionally
- `emptyOnNotFound` to coerce a `404` into an empty collection
- race-condition protection when the endpoint changes mid-flight

Mutations follow the same shape in `useEditProfile`, `useEditSecurity`,
`useRecipeDelete`, `useUploadRecipe`, and `useUploadComponent`. All of them route through
the single Axios instance in `src/utils/api.ts`, which centralises the `baseURL`, timeout,
and `getApiErrorMessage()` extraction so error handling is consistent app-wide.

Client state that is genuinely local — open modals, filter selections, checked
ingredients, timer state — stays in `useState`. Zustand holds exactly one store
(`useAuthStore`, a persisted `isLoggedIn` boolean) because that is genuinely global.

---

## Project Structure

Routes:

| Route | Rendering | Description |
| --- | --- | --- |
| `/` | Static | Landing page — hero carousel, discover grid |
| `/feeds` | Client | Recipe discovery hub with 7 filter sections |
| `/recipe-detail/[id]` | **Dynamic (SSR)** | Full recipe view, real backend data |
| `/recipe-detail` | Static | Mock-data variant kept for reference |
| `/users` | Client | People discovery |
| `/login`, `/register` | Client | Auth |
| `/profile` | Client | User dashboard — **protected** |
| `/about-us` | Static | Team page |
| `/chef-profile`, `/forgot-password` | Static | Placeholders |

`src/features/` is feature-sliced (`feeds/`, `people/`, `recipe-detail/`,
`user-profile/`, `navbar/`, `landing-page/`, `footer/`, `chef-profile/`), which keeps
each area of the product self-contained.

> **Note:** `src/components-v1/` and `src/utils/ImageCropper*/` are archived
> pre-refactor code, largely commented out. They are not imported by the running app and
> are candidates for deletion. See the [roadmap](#roadmap).

---

## Design System

Built on shadcn/ui primitives (`src/components/ui/`) over Radix UI, with
`class-variance-authority` for variants and a `cn()` helper
(`tailwind-merge` + `clsx`) in `src/lib/utils.ts`.

`src/app/globals.css` adds the brand layer: gradient borders, animated
`floatRotate`/`rotateImage` keyframes, gradient text and background utilities, and a
Merriweather font-weight scale. The palette is a warm orange/cream scheme.

Accessibility is treated as part of the component, not an afterthought:

- `aria-label` on icon-only controls, `aria-pressed` on toggles
- `aria-live` / `role="status"` on loading regions
- Escape-key dismissal and focus-visible rings on modals
- `sr-only` text where context is visual-only
- Skeleton, empty, and error states with retry on every async surface

---

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint via `next lint` (`next/core-web-vitals`) |
| `npm run typecheck` | `tsc --noEmit` |

---

## Deployment

Deployed to **Vercel**.

1. Push the branch and import the repo at [vercel.com/new](https://vercel.com/new)
2. Add `NEXT_PUBLIC_API_URL` as an environment variable (Production and Preview)
3. Deploy — `next build` is detected automatically

If you fork this, remember the backend and the Supabase project are yours to provide.

---

## Roadmap

Known gaps, in rough priority order:

- [ ] **Automated tests** — no suite exists yet. Vitest + React Testing Library planned,
      starting with `useFetch`, `normalizeUsers()`, and the `nutriScore` helper
- [ ] **CI/CD** — GitHub Actions running `lint`, `typecheck`, `test`, and `build` on every PR
- [ ] **Delete archived code** — remove `src/components-v1/`, `ImageCropper*/`, and the
      commented-out `Attribute.tsx` / `chef-profile` page
- [ ] **Move Supabase keys to env vars** — remove the hardcoded credentials
- [ ] **Consolidate validation** — `zod` and `yup`/`formik` both appear in history; the
      live code is Zod-only
- [ ] **Replace the empty `useAuth.ts`** — dead file
- [ ] **Fix the broken profile link** — `UserDetailModal` points at `/profile-detail/[id]`,
      which is not a route
- [ ] **Real README diagrams** — replace the prose architecture notes with diagrams
- [ ] **Testing library setup** — `jsdom`, `msw` for API mocking, coverage reporting

---

## Acknowledgements

- [Next.js](https://nextjs.org/) and [Vercel](https://vercel.com/) for the framework and hosting
- [shadcn/ui](https://ui.shadcn.com/) and [Radix UI](https://www.radix-ui.com/) for the component primitives
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Supabase](https://supabase.com/) for object storage
- [RevoU](https://revou.co/) for the bootcamp brief and review
