"use client";

export async function createPasskeyWallet() {
  const walletModule = await import(
    "./vendor/lazorkit/packages/ts-sdk/core/wallet/actions"
  );

  const { createWalletWithPasskey } = walletModule;

  return createWalletWithPasskey({
    network: "devnet",
  });
}
