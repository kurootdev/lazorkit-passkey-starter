import { Lazorkit } from "lazor-kit";

/**
  * Lazorkit client initialized for solana Devnet
  * This handles passkey auth , smart wallets , and gasless transCTIONS
*/
  export const lazorkit = new Lazorkit({
network: "devnet",
});
