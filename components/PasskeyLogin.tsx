"use client";

import { useState } from "react";

export default function PasskeyLogin() {
  const [message, setMessage] = useState<string | null>(null);

  const createWallet = async () => {
    setMessage(
      "Lazorkit passkey wallets are created via adapter + portal layers. See README for full integration steps."
    );
  };

  return (
    <div style={{ padding: 16 }}>
      <button onClick={createWallet}>
        Create Wallet with Passkey
      </button>

      {message && <p>{message}</p>}
    </div>
  );
}
