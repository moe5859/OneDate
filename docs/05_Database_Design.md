# Chapter 5 --- Database Design

## 5.1 Purpose

This chapter defines the relational database architecture for OneDate
using PostgreSQL on Supabase.

The schema is designed for scalability, security, maintainability and
future expansion.

------------------------------------------------------------------------

# 5.2 Design Principles

-   UUID primary keys
-   Soft deletes where appropriate
-   Audit fields on every table
-   Row Level Security enabled
-   Normalized data model
-   Timestamp with timezone
-   Future-proof relationships

Standard columns:

-   id (UUID)
-   created_at
-   updated_at
-   deleted_at (nullable)

------------------------------------------------------------------------

# 5.3 Entity Overview

Core entities:

-   users
-   user_profiles
-   partners
-   chemistry_sessions
-   chemistry_answers
-   date_plans
-   date_plan_items
-   memories
-   memory_photos
-   favorite_places
-   restaurants
-   activities
-   events
-   playlists
-   conversations
-   achievements
-   community_posts
-   community_media
-   notifications

------------------------------------------------------------------------

# 5.4 Entity Relationship (Conceptual)

``` text
Users
 │
 ├── User Profile
 ├── Date Plans
 │      ├── Timeline Items
 │      ├── Playlist
 │      ├── Restaurants
 │      └── Events
 │
 ├── Memories
 │      └── Photos
 │
 ├── Favorites
 │
 ├── Notifications
 │
 └── Community Posts
        └── Media
```

------------------------------------------------------------------------

# 5.5 Core Tables

## users

Managed by Supabase Auth.

Contains authentication only.

------------------------------------------------------------------------

## user_profiles

Stores public profile information.

Columns:

-   id (references auth.users)
-   display_name
-   avatar_url
-   city
-   country
-   birth_year
-   preferred_language
-   onboarding_completed

------------------------------------------------------------------------

## user_preferences

Stores reusable preferences.

Examples:

-   favorite cuisines
-   activity preferences
-   transport
-   alcohol preference
-   indoor/outdoor
-   dietary restrictions

Budget is intentionally NOT stored permanently.

------------------------------------------------------------------------

## partners

Represents linked couples.

Columns:

-   id
-   user_a_id
-   user_b_id
-   status
-   anniversary_date

One user may only have one active partner relationship.

------------------------------------------------------------------------

## chemistry_sessions

Stores Chemistry Mode sessions.

Columns:

-   invitation_code
-   created_by
-   partner_id
-   completed
-   ai_summary

------------------------------------------------------------------------

## chemistry_answers

Stores questionnaire answers.

Each answer belongs to:

-   session
-   user
-   question

Answers remain private until both participants finish.

------------------------------------------------------------------------

## date_plans

Represents one generated experience.

Columns:

-   title
-   city
-   weather
-   estimated_budget
-   ai_score
-   prompt_version
-   generated_by

------------------------------------------------------------------------

## date_plan_items

Timeline items.

Type examples:

-   Restaurant
-   Activity
-   Event
-   Walk
-   Viewpoint

Each item contains:

-   start_time
-   end_time
-   order_index
-   location
-   notes

------------------------------------------------------------------------

## memories

Represents completed dates.

Columns:

-   rating
-   notes
-   funniest_moment
-   favorite_activity
-   weather
-   playlist_url

------------------------------------------------------------------------

## memory_photos

Stores uploaded images.

Columns:

-   memory_id
-   storage_path
-   caption
-   order_index

Files stored in Supabase Storage.

------------------------------------------------------------------------

## favorite_places

Stores bookmarked locations.

Supports:

-   Restaurants
-   Activities
-   Events

------------------------------------------------------------------------

## community_posts

Shared date plans.

Contains:

-   title
-   description
-   city
-   visibility
-   likes_count
-   saves_count

------------------------------------------------------------------------

## community_media

Images attached to posts.

Stored in Supabase Storage.

------------------------------------------------------------------------

## notifications

Notification queue.

Examples:

-   Upcoming Date
-   Anniversary
-   Weather Alert
-   Alternative Suggestion

------------------------------------------------------------------------

# 5.6 Lookup Tables

Recommended lookup tables:

-   cuisines
-   activity_types
-   transportation_types
-   date_styles
-   conversation_categories
-   achievement_types

These reduce duplicated values.

------------------------------------------------------------------------

# 5.7 Relationships

One User

→ many Date Plans

One Date Plan

→ many Timeline Items

One Date Plan

→ one Playlist

One Memory

→ many Photos

One Couple

→ many Memories

One Community Post

→ many Media Files

------------------------------------------------------------------------

# 5.8 Storage Buckets

Supabase Storage

avatars/

memory-photos/

community/

temporary/

Generated AI assets should never be stored permanently unless accepted
by the user.

------------------------------------------------------------------------

# 5.9 Row Level Security

Policies:

Users can:

-   read their own profile
-   update their own profile
-   access their own memories
-   access shared couple memories
-   manage their own date plans

Community posts marked public are readable by everyone.

Private memories are never public.

------------------------------------------------------------------------

# 5.10 Indexing Strategy

Indexes recommended for:

-   user_id
-   city
-   created_at
-   partner_id
-   date_plan_id
-   memory_id
-   community_post_id

Use composite indexes for frequently queried combinations.

------------------------------------------------------------------------

# 5.11 Data Retention

Deleted content should be soft deleted where feasible.

Users may permanently remove:

-   memories
-   photos
-   community posts

Account deletion triggers GDPR-compliant cleanup.

------------------------------------------------------------------------

# 5.12 Migration Strategy

All schema changes must use version-controlled Supabase migrations.

Never edit production tables manually.

Each migration must be:

-   reversible where possible
-   documented
-   tested

------------------------------------------------------------------------

# 5.13 Future Expansion

Database prepared for:

-   Premium subscriptions
-   Reservations
-   AI analytics
-   Travel planning
-   Family mode
-   Shared calendars
-   Wearable integrations

------------------------------------------------------------------------

# 5.14 Definition of Done

Database design is complete when:

-   All entities are documented.
-   Relationships are defined.
-   RLS policies exist.
-   Storage strategy is defined.
-   Migration strategy is documented.
-   Schema supports future expansion without breaking changes.
