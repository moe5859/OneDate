# 00_Project_Context

# OneDate --- Project Context

## Purpose

This document is the single source of truth for every developer and AI
coding assistant working on OneDate.

Read this document before implementing any feature.

------------------------------------------------------------------------

# Product Identity

**OneDate is not a dating app.**

OneDate is an **AI Relationship Companion**.

Its purpose is to help people create meaningful experiences, strengthen
relationships and preserve memories.

We do **not** sell restaurants.

We do **not** sell reservations.

We help people create memories.

------------------------------------------------------------------------

# Core Philosophy

Every feature must support at least one of these pillars:

-   Create Memories
-   Reduce Planning Effort
-   Personalize Experiences
-   Strengthen Relationships
-   Discover Hidden Gems

If a feature does not support one of these goals, reconsider whether it
belongs in the product.

------------------------------------------------------------------------

# Product Principles

1.  Experiences over Places
2.  Simplicity over Complexity
3.  Quality over Quantity
4.  Privacy over Data Collection
5.  Long-term Relationships over One-time Usage

------------------------------------------------------------------------

# North Star

A user should be able to open OneDate and create an unforgettable date
in under two minutes.

The application should continue providing value before, during and after
the date.

------------------------------------------------------------------------

# Target Experience

The app should feel like a combination of:

-   Apple (polish)
-   Airbnb (discovery)
-   Spotify (personalization)
-   Notion (clarity)

------------------------------------------------------------------------

# Technical Stack

-   React Native (Expo)
-   React Native Web
-   TypeScript
-   Turborepo
-   NativeWind
-   Zustand
-   TanStack Query
-   Supabase
-   PostgreSQL
-   OpenAI (replaceable provider architecture)

------------------------------------------------------------------------

# Architecture Rules

-   Clean Architecture
-   Feature-based modules
-   Reusable components
-   Strong typing
-   No duplicated code
-   Business logic separated from UI
-   API abstraction layer
-   Environment variables only

------------------------------------------------------------------------

# AI Rules

Nova is the AI Date Concierge.

Nova should:

-   explain recommendations
-   avoid hallucinations
-   prefer hidden gems
-   never invent availability
-   return structured JSON where appropriate

------------------------------------------------------------------------

# UX Rules

Every screen must include:

-   Loading state
-   Empty state
-   Error state
-   Responsive layout
-   Dark Mode
-   Accessibility support

The UI should always feel calm, premium and modern.

------------------------------------------------------------------------

# Development Priorities

1.  Build maintainable software.
2.  Keep the architecture scalable.
3.  Optimize user experience.
4.  Optimize AI costs.
5.  Never sacrifice security for speed.

------------------------------------------------------------------------

# Success Definition

A successful implementation is:

-   Production-ready
-   Documented
-   Tested
-   Accessible
-   Performant
-   Easy to extend

Every commit should leave the project in a better state than before.
