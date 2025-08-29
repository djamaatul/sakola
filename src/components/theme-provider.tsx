"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  React.useEffect(() => {
    const theme = localStorage.getItem("theme");
    document.querySelector("html")?.classList.add(theme ?? "dark");
  }, []);
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
