"use client";

import { useState } from "react";
import DarkIcon from "../icons/Dark";
import LightIcon from "../icons/Light";
import Button from "./button";

export default function ThemeSwitcher({
  defaultTheme,
}: {
  defaultTheme: string;
  className?: string;
}) {
  const [theme, setTheme] = useState(defaultTheme);

  function handleTheme() {
    const next = theme === "dark" ? "light" : "dark";

    document.querySelector("html")?.classList.toggle("dark");

    setTheme(next);
    localStorage.setItem("theme", next);
  }
  return (
    <button
      className={"rounded-full w-10 h-10 px-2 bg-foreground/10"}
      onClick={() => handleTheme()}
    >
      {theme === "dark" ? <DarkIcon /> : <LightIcon />}
    </button>
  );
}
