# Integrating Lazorkit in Next.js

## Client-Only Requirement

Lazorkit relies on browser APIs such as:
- WebAuthn
- navigator.credentials
- window.crypto

This means all Lazorkit logic must run in client components.

## Common Pitfalls

- Importing SDK entrypoints on the server
- Importing monorepo packages outside the app root
- Expecting simple wallet helper functions

## Correct Mental Model

Lazorkit is an orchestration SDK.
Developers should think in terms of flows, not one-off calls.
