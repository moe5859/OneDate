# 11_Codex_Implementation_Guide

# OneDate --- Codex Implementation Guide

## Purpose

This document defines how AI coding assistants (Codex, ChatGPT, Claude,
etc.) must contribute to the OneDate codebase.

The objective is to keep the project production-ready, consistent and
scalable throughout development.

------------------------------------------------------------------------

# 1. General Rules

The AI MUST:

-   extend existing code instead of rewriting working features
-   follow Clean Architecture
-   use feature-based architecture
-   use TypeScript everywhere
-   avoid duplicated code
-   write reusable components
-   keep files small and focused
-   document important decisions
-   generate tests for business logic
-   never hardcode secrets
-   never break public APIs without documenting it

------------------------------------------------------------------------

# 2. Development Order

Always build features in this order.

## Phase 1

Foundation

-   Project setup
-   Navigation
-   Theme
-   Authentication
-   Supabase
-   Shared UI

Do not continue until everything compiles.

------------------------------------------------------------------------

## Phase 2

Planner Engine

-   AI Planner
-   Maps
-   Places
-   Weather
-   Events
-   Hidden Gems

------------------------------------------------------------------------

## Phase 3

Experience Layer

-   Chemistry Mode
-   Couple Space
-   Memory Book
-   Conversation Cards
-   Spotify
-   AI Recap

------------------------------------------------------------------------

## Phase 4

Community

-   Community Feed
-   Sharing
-   Discovery
-   Profiles

------------------------------------------------------------------------

## Phase 5

Production

-   Testing
-   Performance
-   Accessibility
-   Security
-   Analytics
-   Deployment

------------------------------------------------------------------------

# 3. Coding Standards

Use:

-   ESLint
-   Prettier
-   Husky
-   Conventional Commits

Naming:

Components: PascalCase

Hooks: useSomething

Services: SomethingService

Stores: useSomethingStore

Constants: UPPER_CASE

------------------------------------------------------------------------

# 4. Folder Rules

Every feature contains:

-   components/
-   hooks/
-   services/
-   api/
-   types/
-   validation/
-   tests/

No feature may directly depend on another feature's internal
implementation.

------------------------------------------------------------------------

# 5. UI Rules

Every new screen must support:

-   Light Mode
-   Dark Mode
-   Responsive Layout
-   Loading State
-   Empty State
-   Error State

Never use inline styles for reusable UI.

------------------------------------------------------------------------

# 6. AI Rules

Business logic first.

AI second.

Never ask the AI to solve deterministic problems.

Use AI only for:

-   Planning
-   Natural language
-   Summaries
-   Recommendations

------------------------------------------------------------------------

# 7. Git Workflow

Small commits.

One feature per branch.

Commit example:

feat(planner): add hidden gem recommendations

------------------------------------------------------------------------

# 8. Pull Request Checklist

Before merging:

-   Builds successfully
-   Lint passes
-   Tests pass
-   Types pass
-   Documentation updated
-   No TODOs without issue reference

------------------------------------------------------------------------

# 9. Performance Targets

Cold start: \<2.5 seconds

Planner generation: \<15 seconds

Screen transitions: \<250ms

Maintain 60 FPS animations where possible.

------------------------------------------------------------------------

# 10. Accessibility

Every feature must include:

-   Labels
-   Keyboard navigation (web)
-   Screen reader support
-   Minimum touch target 44x44

------------------------------------------------------------------------

# 11. Security Checklist

-   Secrets from env only
-   Validate every input
-   RLS respected
-   No sensitive logs
-   Sanitize AI inputs

------------------------------------------------------------------------

# 12. Testing Strategy

Required:

-   Unit tests for services
-   Integration tests for APIs
-   End-to-end tests for critical flows

Target coverage:

Business logic ≥ 80%.

------------------------------------------------------------------------

# 13. Documentation

Every feature must update:

-   README if setup changes
-   API docs if contracts change
-   Database docs if schema changes

------------------------------------------------------------------------

# 14. Definition of Success

Codex should always leave the repository in a better state than before.

Every generated feature must be:

-   production-ready
-   reusable
-   documented
-   typed
-   tested
-   scalable

Quality takes priority over implementation speed.
