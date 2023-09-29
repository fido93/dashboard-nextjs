"use client";

import { SessionProvider } from "next-auth/react";

export function ProviderSession({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
