# OneDate

OneDate is an AI relationship companion focused on helping people create meaningful experiences and preserve memories.

## Phase 1 Scope

This repository currently implements the Phase 1 foundation described in `docs/11_Codex_Implementation_Guide.md`:

- Turborepo monorepo
- Expo mobile app
- React Native Web app
- Shared UI and theme packages
- Supabase integration scaffolding
- Authentication flow
- Navigation foundation

## Workspace

```text
apps/
  mobile/
  web/
packages/
  config/
  supabase/
  theme/
  types/
  ui/
  utils/
supabase/
  migrations/
docs/
```

## Scripts

- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run test`
- `npm run typecheck`

## Environment

This project uses Expo, not Next.js. That means:

- use `EXPO_PUBLIC_SUPABASE_URL`
- use `EXPO_PUBLIC_SUPABASE_ANON_KEY`
- do not add `@supabase/ssr`, `middleware.ts`, `page.tsx`, or `utils/supabase/server.ts`

Recommended setup:

- copy [apps/mobile/.env.example](/Users/mesutozdemir/Documents/Privat/Apps/OneDate/apps/mobile/.env.example) to `apps/mobile/.env`
- copy [apps/web/.env.example](/Users/mesutozdemir/Documents/Privat/Apps/OneDate/apps/web/.env.example) to `apps/web/.env`

The same values can also exist in the root `.env` during local development.

Required variables:

- `EXPO_PUBLIC_SUPABASE_URL`
- `EXPO_PUBLIC_SUPABASE_ANON_KEY`

## Notes

Phase 2 planner, maps, places, weather, and AI orchestration are intentionally not implemented yet.
