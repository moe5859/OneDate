# Chapter 7 --- Design System

## 7.1 Purpose

This chapter defines the visual language of OneDate.

The design system ensures a consistent, scalable and premium user
experience across mobile and web platforms.

The product should feel timeless, elegant and emotionally engaging while
remaining highly usable.

------------------------------------------------------------------------

# 7.2 Design Principles

The UI should always be:

### Minimal

Avoid visual clutter.

### Elegant

Use whitespace generously.

### Emotional

Create excitement before the date and nostalgia afterwards.

### Consistent

Every component should behave predictably.

### Accessible

Design for everyone.

------------------------------------------------------------------------

# 7.3 Visual Inspiration

The visual language should combine elements from:

-   Apple Human Interface Guidelines
-   Airbnb
-   Spotify
-   Linear
-   Notion

Avoid Material Design as the primary inspiration.

------------------------------------------------------------------------

# 7.4 Color Palette

## Primary

Deep Charcoal

Used for headings and primary actions.

## Accent

Warm Coral

Used for important interactions.

## Secondary Accent

Soft Gold

Highlights achievements and premium experiences.

## Success

Emerald Green

## Warning

Amber

## Error

Soft Red

------------------------------------------------------------------------

## Neutral Colors

-   White
-   Off White
-   Light Gray
-   Medium Gray
-   Dark Gray
-   Black

Support both Light and Dark themes.

------------------------------------------------------------------------

# 7.5 Typography

Recommended Font

Inter

Fallback

System Font

Typography Scale

-   Display
-   H1
-   H2
-   H3
-   Title
-   Body Large
-   Body
-   Caption
-   Label

Maximum readability is preferred over decorative typography.

------------------------------------------------------------------------

# 7.6 Spacing System

Use an 8pt spacing grid.

Examples

-   4
-   8
-   16
-   24
-   32
-   40
-   48
-   64

Never use arbitrary spacing values.

------------------------------------------------------------------------

# 7.7 Border Radius

Small

8px

Medium

16px

Large

24px

Cards should use generous rounded corners.

------------------------------------------------------------------------

# 7.8 Shadows & Elevation

Use subtle shadows.

Avoid heavy drop shadows.

Prefer depth through spacing and layering.

------------------------------------------------------------------------

# 7.9 Icons

Recommended:

Lucide Icons

Icons should remain simple and consistent.

Avoid emoji as navigation icons.

------------------------------------------------------------------------

# 7.10 Component Library

Core Components

-   Primary Button
-   Secondary Button
-   Icon Button
-   Floating Action Button
-   Card
-   Glass Card
-   Timeline Card
-   Restaurant Card
-   Event Card
-   Activity Card
-   Profile Card
-   Input
-   Search Field
-   Select
-   Chip
-   Badge
-   Bottom Sheet
-   Modal
-   Snackbar
-   Avatar
-   Rating
-   Tabs
-   Segmented Control

All components must support Light and Dark themes.

------------------------------------------------------------------------

# 7.11 Timeline Components

The generated date timeline should become OneDate's signature UI
element.

Timeline items include:

-   Time
-   Activity
-   Duration
-   Travel Time
-   Notes
-   Weather
-   Estimated Cost

Timeline cards should be expandable.

------------------------------------------------------------------------

# 7.12 Maps

Maps should support:

-   Dark Mode
-   Light Mode
-   Custom markers
-   Interactive route
-   Activity highlights

------------------------------------------------------------------------

# 7.13 Animations

Use smooth animations.

Recommended:

-   Fade
-   Scale
-   Shared Element
-   Hero Animation
-   Bottom Sheet
-   Card Expansion
-   Pull to Refresh

Animation duration

200--350ms

Animations should never slow down the experience.

------------------------------------------------------------------------

# 7.14 Loading States

Every screen should include:

-   Skeleton Loading
-   Progressive Image Loading
-   Animated placeholders

Avoid blocking spinners whenever possible.

------------------------------------------------------------------------

# 7.15 Empty States

Instead of empty pages provide:

Illustration

Helpful explanation

Primary CTA

Example

"No memories yet."

↓

"Let's create your first unforgettable date."

↓

Plan Date Button

------------------------------------------------------------------------

# 7.16 Error States

Friendly language.

Always explain:

-   What happened.
-   What the user can do next.

------------------------------------------------------------------------

# 7.17 Accessibility

Requirements

-   WCAG AA contrast
-   Dynamic font sizes
-   Screen reader support
-   Keyboard navigation (web)
-   Focus indicators
-   Large touch targets (44x44 minimum)

------------------------------------------------------------------------

# 7.18 Responsive Design

Support

-   Phones
-   Tablets
-   Desktop Browsers

The web version should feel like a native desktop experience instead of
a stretched mobile app.

------------------------------------------------------------------------

# 7.19 Microinteractions

Examples

-   Heart animation when saving a date
-   Smooth card transitions
-   Confetti after completing a memorable date
-   Haptic feedback on supported devices
-   Animated progress indicators

Use microinteractions sparingly to reinforce delight.

------------------------------------------------------------------------

# 7.20 Branding

Logo style

Minimal

Recognizable

Modern

Rounded geometry

Possible symbol ideas

-   Heart + Map Pin
-   Spark + Route
-   Two connected paths
-   Compass + Heart

Tagline

"Create memories, not plans."

------------------------------------------------------------------------

# 7.21 Design Tokens

Centralize all tokens:

-   Colors
-   Typography
-   Radius
-   Shadows
-   Spacing
-   Animation durations
-   Z-index values

No hardcoded styling values should exist inside feature components.

------------------------------------------------------------------------

# 7.22 Definition of Done

The design system is complete when:

-   Every reusable component is documented.
-   Light and Dark mode are fully supported.
-   Responsive behavior is defined.
-   Accessibility requirements are met.
-   All design tokens are centralized.
-   The UI feels consistent across the entire application.
