"use client";

import { ThemeProvider } from "next-themes";
import React, { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
