"use client";

import Navbar from "@/components/Navbar";
import { LocalizationProvider } from "@/lib/LocalizationContext";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <LocalizationProvider>
      <Navbar />
      {children}
    </LocalizationProvider>
  );
}