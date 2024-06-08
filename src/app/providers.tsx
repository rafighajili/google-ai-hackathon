"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <NextUIProvider>
        <>{children}</>
      </NextUIProvider>
    </ThemeProvider>
  );
}
