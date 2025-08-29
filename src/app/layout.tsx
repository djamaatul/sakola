import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sakola",
  description: "School landing page builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistMono.variable} antialiased text-[var(--foreground)] bg-[var(--background)]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableColorScheme={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
