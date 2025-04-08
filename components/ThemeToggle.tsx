"use client";

import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  let { resolvedTheme, setTheme } = useTheme();
  let otherTheme = resolvedTheme === "dark" ? "light" : "dark";
  let [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${otherTheme} theme` : "Toggle theme"}
      className="group rounded-full bg-white/90 px-3 py-2 ring-1 shadow-lg shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={() => setTheme(otherTheme)}
    >
      <Sun
        un-size="6"
        un-transition="~"
        un-dark="hidden"
        un-fill="tranparent group-hover:teal-1"
        stroke="teal-5 group-hover:teal-6"
      />
      <MoonStar
        un-light="hidden"
        un-dark="block"
        un-transition="~"
        un-fill="zinc-7"
        un-stroke="zinc-5 dark:group-hover:zinc-4"
        un-size="6"
      />
    </button>
  );
};
