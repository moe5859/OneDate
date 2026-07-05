# Chapter 4 --- System Architecture

## 4.1 Purpose

This chapter defines the technical architecture of OneDate. The goal is
to provide a scalable, maintainable and production-ready foundation that
supports mobile, web and future platform expansion.

------------------------------------------------------------------------

# 4.2 Architectural Principles

The architecture shall follow these principles:

-   Clean Architecture
-   Feature-Based Organization
-   SOLID Principles
-   DRY (Don't Repeat Yourself)
-   Separation of Concerns
-   Dependency Inversion
-   API-first Design
-   Reusable UI Components
-   Type Safety
-   Testability
-   Scalability

The application must be designed to evolve without requiring major
rewrites.

------------------------------------------------------------------------

# 4.3 Technology Stack

## Frontend

-   React Native (Expo)
-   React Native Web
-   TypeScript
-   Expo Router
-   NativeWind
-   React Query (TanStack Query)
-   Zustand
-   React Hook Form
-   Zod
-   React Native Reanimated
-   React Native Maps

## Backend

-   Supabase
-   PostgreSQL
-   Authentication
-   Storage
-   Row Level Security (RLS)
-   Edge Functions

## External Services

-   OpenAI
-   Google Maps
-   Google Places
-   Weather API
-   Event API
-   Spotify API

------------------------------------------------------------------------

# 4.4 Monorepo Structure

``` text
onedate/
├── apps/
│   ├── mobile/
│   └── web/
├── packages/
│   ├── ui/
│   ├── api/
│   ├── config/
│   ├── types/
│   ├── utils/
│   └── assets/
├── docs/
├── supabase/
├── scripts/
└── package.json
```

A shared codebase should power both the mobile and web applications.

------------------------------------------------------------------------

# 4.5 Feature-Based Structure

Each feature owns its UI, hooks, services, types and tests.

Example:

``` text
features/
└── planner/
    ├── components/
    ├── hooks/
    ├── services/
    ├── api/
    ├── types/
    ├── validation/
    ├── screens/
    ├── tests/
    └── index.ts
```

Core features:

-   Authentication
-   Planner
-   Chemistry
-   Memory Book
-   Community
-   Profile
-   Notifications
-   Settings

------------------------------------------------------------------------

# 4.6 Layered Architecture

``` text
Presentation
        │
Business Logic
        │
Application Services
        │
Repositories
        │
External APIs / Database
```

Responsibilities:

Presentation: - UI - Navigation - Forms

Business: - Validation - Rules - AI orchestration

Repositories: - Database - APIs - Storage

Infrastructure: - Supabase - OpenAI - Google - Spotify

------------------------------------------------------------------------

# 4.7 State Management

## Global State (Zustand)

-   Authentication
-   Theme
-   Current User
-   Couple Session
-   Active Date Plan
-   Settings

## Server State (React Query)

-   Restaurants
-   Events
-   Weather
-   AI Plans
-   Community Feed
-   Memories

------------------------------------------------------------------------

# 4.8 Navigation

Expo Router

Main routes:

``` text
(auth)
(home)
(planner)
(discover)
(memory)
(community)
(profile)
(settings)
```

------------------------------------------------------------------------

# 4.9 AI Architecture

The AI layer should not call OpenAI directly from UI components.

Flow:

``` text
UI
↓
Planner Service
↓
AI Service
↓
Prompt Builder
↓
OpenAI
↓
Parser
↓
Timeline Model
↓
UI
```

Prompt templates must be reusable and versioned.

------------------------------------------------------------------------

# 4.10 API Layer

Every external service shall be wrapped.

Example:

``` text
GooglePlacesService
WeatherService
SpotifyService
OpenAIService
EventsService
SupabaseService
```

UI components must never call third-party APIs directly.

------------------------------------------------------------------------

# 4.11 Error Handling

Errors must be categorized.

-   Validation
-   Network
-   Authentication
-   API
-   Database
-   Unknown

Every error should provide:

-   User-friendly message
-   Technical log
-   Recovery action

------------------------------------------------------------------------

# 4.12 Caching Strategy

React Query should cache:

-   Restaurant searches
-   Weather
-   Events
-   AI responses (short-lived)

Use optimistic updates where appropriate.

------------------------------------------------------------------------

# 4.13 Security

Requirements:

-   HTTPS only
-   Environment variables for secrets
-   JWT authentication
-   Supabase RLS
-   Input validation with Zod
-   API rate limiting
-   Secure local storage for tokens
-   No API keys in client code

------------------------------------------------------------------------

# 4.14 Logging & Monitoring

Implement:

-   Crash reporting
-   API request logging
-   Performance metrics
-   AI request metrics

Production logging must never expose sensitive user data.

------------------------------------------------------------------------

# 4.15 Testing Strategy

Unit Tests

-   Utilities
-   Services
-   Business Logic

Integration Tests

-   API
-   Database

E2E Tests

-   Authentication
-   Planner Flow
-   Chemistry Mode
-   Memory Book

------------------------------------------------------------------------

# 4.16 CI/CD

Recommended:

-   GitHub
-   GitHub Actions

Pipelines:

-   Lint
-   Type Check
-   Tests
-   Build
-   Deploy Preview
-   Production Release

------------------------------------------------------------------------

# 4.17 Environment Configuration

Create:

-   .env.example
-   .env.development
-   .env.production

No secrets may be committed.

------------------------------------------------------------------------

# 4.18 Scalability

The architecture must support:

-   Millions of users
-   Horizontal backend scaling
-   Additional AI providers
-   Additional languages
-   Premium subscriptions
-   Future desktop application
-   Future smartwatch companion

------------------------------------------------------------------------

# 4.19 Definition of Done

Architecture is complete when:

-   All layers are separated.
-   Shared packages are reusable.
-   Features are isolated.
-   Documentation is updated.
-   New features can be added without modifying existing architecture.
