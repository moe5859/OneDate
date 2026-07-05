# Chapter 6 --- API Design

## 6.1 Purpose

This chapter defines the API architecture for OneDate. All third-party
integrations must be abstracted behind internal services to keep the
application modular, testable and provider-independent.

------------------------------------------------------------------------

# 6.2 API Principles

-   Never call third-party APIs directly from UI components.
-   All external providers are wrapped in service classes.
-   Strong typing for requests and responses.
-   Retry transient failures with exponential backoff.
-   Respect rate limits.
-   Cache responses whenever possible.
-   Secrets are loaded exclusively from environment variables.

------------------------------------------------------------------------

# 6.3 High-Level API Flow

``` text
UI
 ↓
Feature Service
 ↓
Application Service
 ↓
Repository
 ↓
External Provider
 ↓
Normalized Response
 ↓
UI
```

------------------------------------------------------------------------

# 6.4 External Providers

## OpenAI

Purpose: - Generate complete date plans - Chemistry analysis - AI
recap - Conversation starters - Date score explanations

Environment Variable

``` env
OPENAI_API_KEY=
```

------------------------------------------------------------------------

## Google Places API

Purpose

-   Restaurants
-   Cafés
-   Attractions
-   Ratings
-   Photos
-   Opening hours

``` env
GOOGLE_PLACES_API_KEY=
```

------------------------------------------------------------------------

## Google Maps API

Purpose

-   Geocoding
-   Navigation
-   Travel time
-   Route visualization

``` env
GOOGLE_MAPS_API_KEY=
```

------------------------------------------------------------------------

## Weather API

Purpose

-   Current weather
-   Forecast
-   Weather-aware planning

``` env
WEATHER_API_KEY=
```

------------------------------------------------------------------------

## Events API

Purpose

-   Concerts
-   Museums
-   Festivals
-   Escape Rooms
-   Local events

``` env
EVENT_API_KEY=
```

------------------------------------------------------------------------

## Spotify API

Purpose

-   Mood playlists
-   Music recommendations

``` env
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
```

------------------------------------------------------------------------

# 6.5 Internal Services

Recommended services:

-   AIService
-   PlannerService
-   ChemistryService
-   PlacesService
-   MapsService
-   WeatherService
-   EventsService
-   SpotifyService
-   CommunityService
-   MemoryService
-   NotificationService

Business logic belongs here---not in UI components.

------------------------------------------------------------------------

# 6.6 AI Orchestration

The planner pipeline:

``` text
Collect Inputs
        ↓
Validate
        ↓
Fetch Weather
        ↓
Fetch Restaurants
        ↓
Fetch Events
        ↓
Build Prompt
        ↓
OpenAI
        ↓
Validate Output
        ↓
Transform
        ↓
Return Timeline
```

Prompt templates should be versioned for future improvements.

------------------------------------------------------------------------

# 6.7 Request Models

Planner Request

Contains:

-   Location
-   Budget
-   Date Style
-   Cuisine
-   Preferences
-   Weather
-   Transport
-   Duration

Planner Response

Returns:

-   Timeline
-   Restaurants
-   Activities
-   Events
-   Playlist
-   Date Score
-   Alternatives
-   Budget Estimate

------------------------------------------------------------------------

# 6.8 Caching

Recommended TTL:

-   Weather: 30 minutes
-   Places: 6 hours
-   Events: 1 hour
-   Geocoding: 30 days
-   AI timeline: session cache only unless user saves it

------------------------------------------------------------------------

# 6.9 Rate Limiting

Protect all expensive providers.

Recommendations:

-   Debounce search input.
-   Batch requests when possible.
-   Cache repeated queries.
-   Queue AI requests if necessary.

------------------------------------------------------------------------

# 6.10 Error Handling

Every service should return normalized errors.

Categories:

-   ValidationError
-   NetworkError
-   AuthenticationError
-   RateLimitError
-   ProviderError
-   UnknownError

UI must display user-friendly messages.

------------------------------------------------------------------------

# 6.11 Security

-   Never expose secret keys.
-   Validate all inputs.
-   Sanitize AI prompts.
-   Protect against prompt injection where possible.
-   Enforce HTTPS.
-   Verify authenticated requests before accessing user data.

------------------------------------------------------------------------

# 6.12 Versioning

Internal APIs should support semantic versioning.

Example:

v1 Planner

v2 Planner

Breaking changes require a new version.

------------------------------------------------------------------------

# 6.13 Future AI Providers

The AI layer must allow replacing OpenAI without rewriting business
logic.

Target interface:

``` text
AIProvider
 ├── OpenAIProvider
 ├── ClaudeProvider
 ├── GeminiProvider
 └── LocalLLMProvider
```

------------------------------------------------------------------------

# 6.14 Example Environment

``` env
OPENAI_API_KEY=
SUPABASE_URL=
SUPABASE_ANON_KEY=
GOOGLE_MAPS_API_KEY=
GOOGLE_PLACES_API_KEY=
WEATHER_API_KEY=
EVENT_API_KEY=
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
```

------------------------------------------------------------------------

# 6.15 Definition of Done

API design is complete when:

-   Every provider is abstracted.
-   Requests and responses are typed.
-   Error handling is standardized.
-   Secrets are environment-based.
-   Caching and rate limiting are documented.
-   The AI layer supports future provider replacement.
