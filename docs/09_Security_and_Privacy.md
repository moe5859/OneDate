# Chapter 9 --- Security & Privacy

## 9.1 Purpose

This chapter defines the security, privacy and compliance requirements
for OneDate.

Because OneDate stores personal preferences, relationship data, memories
and photos, security is considered a core product feature rather than an
afterthought.

Security decisions must always favor protecting user data over
implementation convenience.

------------------------------------------------------------------------

# 9.2 Security Principles

The application shall follow these principles:

-   Privacy by Design
-   Security by Default
-   Least Privilege
-   Defense in Depth
-   Zero Trust
-   Secure by Default
-   Fail Securely

------------------------------------------------------------------------

# 9.3 Authentication

Supported authentication providers

-   Email + Password
-   Google Sign-In

Future support

-   Apple Sign-In
-   Passkeys

Requirements

-   JWT authentication via Supabase
-   Secure session refresh
-   Password reset
-   Email verification
-   Session expiration handling

------------------------------------------------------------------------

# 9.4 Authorization

Authorization is enforced through Supabase Row Level Security (RLS).

Users may only access:

-   Their own profile
-   Their own date plans
-   Their own memories
-   Their own favorites
-   Shared Couple Space resources

Public community posts remain readable to everyone.

Administrative actions require dedicated admin roles.

------------------------------------------------------------------------

# 9.5 Personal Data

Examples of stored personal data

-   Display name
-   Avatar
-   City
-   Preferences
-   Photos
-   Memories
-   Couple relationship
-   Community posts

The application intentionally does NOT permanently store:

-   Budget history
-   Payment information
-   Exact GPS history after a completed date
-   Raw AI prompts containing unnecessary personal information

------------------------------------------------------------------------

# 9.6 Encryption

Data in Transit

-   HTTPS only
-   TLS 1.2+

Data at Rest

Provided by Supabase/PostgreSQL infrastructure.

Sensitive local data

-   SecureStore / Keychain (mobile)
-   Secure browser storage where applicable

API keys must never be embedded inside client applications.

------------------------------------------------------------------------

# 9.7 Secrets Management

Secrets must be loaded exclusively from environment variables.

Example

``` env
OPENAI_API_KEY=
SUPABASE_URL=
SUPABASE_ANON_KEY=
GOOGLE_MAPS_API_KEY=
```

Production secrets are managed separately from development.

------------------------------------------------------------------------

# 9.8 Input Validation

All user input must be validated.

Recommended stack

-   Zod
-   React Hook Form

Validation applies to:

-   Forms
-   API requests
-   AI requests
-   Uploaded files
-   URLs

------------------------------------------------------------------------

# 9.9 File Upload Security

Supported uploads

-   Images only (MVP)

Validation

-   MIME type
-   File size
-   Image dimensions

Future enhancements

-   Virus scanning
-   Automatic image optimization

Executable files are never accepted.

------------------------------------------------------------------------

# 9.10 AI Security

Nova must never:

-   Reveal private Chemistry answers
-   Invent reservations
-   Leak hidden prompts
-   Expose internal implementation details
-   Execute user instructions outside supported functionality

All AI outputs should be validated before rendering.

------------------------------------------------------------------------

# 9.11 Privacy

OneDate follows Privacy by Design.

Users can:

-   Download their personal data
-   Delete their account
-   Delete memories
-   Remove uploaded images
-   Disconnect partner accounts

The platform should collect only the data necessary to provide the
requested functionality.

------------------------------------------------------------------------

# 9.12 GDPR Compliance

The application should support:

-   Right to Access
-   Right to Rectification
-   Right to Erasure
-   Right to Data Portability
-   Right to Restrict Processing

Account deletion should trigger cleanup of personal content where
legally appropriate.

------------------------------------------------------------------------

# 9.13 Logging

Logs must never contain:

-   Passwords
-   API keys
-   JWT tokens
-   Private memories
-   Raw Chemistry answers

Production logs should use anonymized identifiers whenever possible.

------------------------------------------------------------------------

# 9.14 Threat Model

Primary threats

-   Account takeover
-   Token theft
-   Prompt injection
-   SQL injection
-   Cross-Site Scripting (Web)
-   Cross-Site Request Forgery
-   Malicious file uploads
-   Abuse of public APIs
-   Rate-limit exhaustion

Mitigations should be documented and periodically reviewed.

------------------------------------------------------------------------

# 9.15 Abuse Prevention

Implement:

-   API rate limiting
-   Authentication throttling
-   Request validation
-   Spam detection for community posts
-   Image upload limits

Future

-   Automated moderation
-   AI-assisted abuse detection

------------------------------------------------------------------------

# 9.16 Backups & Disaster Recovery

Requirements

-   Automated database backups
-   Versioned storage
-   Recovery testing
-   Disaster recovery procedures

Backups must be encrypted.

------------------------------------------------------------------------

# 9.17 Security Monitoring

Recommended monitoring

-   Authentication failures
-   Suspicious login activity
-   Excessive API usage
-   Unexpected AI request spikes
-   Storage abuse

Critical events should trigger alerts.

------------------------------------------------------------------------

# 9.18 Security Reviews

Before every production release

-   Dependency audit
-   Vulnerability scan
-   Secret scan
-   Static code analysis
-   Manual review of authentication changes

------------------------------------------------------------------------

# 9.19 Definition of Done

Security is considered complete when:

-   Authentication is secure.
-   Authorization is enforced through RLS.
-   Sensitive data is encrypted.
-   Inputs are validated.
-   Secrets are never exposed.
-   GDPR requirements are supported.
-   Security monitoring is documented.
