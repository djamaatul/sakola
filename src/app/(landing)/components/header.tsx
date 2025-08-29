"use client";

import Button from "@/components/button";
import { LoginContext } from "@/components/login";
import ThemeSwitcher from "@/components/theme-switcher";
import Link from "next/link";
import { useContext } from "react";

export default function Header() {
  const ctx = useContext(LoginContext);

  return (
    <header className="sticky top-0 z-10 shadow-sm backdrop-blur-sm bg-background/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-semibold">SAKOLA</span>
          </Link>

          <nav className="hidden md:flex space-x-10">
            <Button.link href="/career">Career</Button.link>
            <Button.link href="/about">About</Button.link>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeSwitcher defaultTheme="dark" />
            <button onClick={() => ctx.show()}>Login</button>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
