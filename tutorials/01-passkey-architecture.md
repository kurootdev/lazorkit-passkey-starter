# Lazorkit Passkey Architecture

## Overview

Passkeys enable seedless onboarding by using WebAuthn instead of private keys.
In Lazorkit, passkey wallets are not created via a single helper function.

This is intentional.

## Why There Is No One-Liner API

Lazorkit orchestrates passkey wallets through multiple layers:

- Wallet adapters
- Portal / dialog flows
- Session storage
- Paymaster coordination

This allows:
- Secure WebAuthn handling
- Cross-device session recovery
- Gasless transactions

## Key Takeaway

Passkey creation is a **flow**, not a function.
Developers must initialize the adapter and portal layers to enable it.
