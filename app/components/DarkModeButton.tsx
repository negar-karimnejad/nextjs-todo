"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
      className="z-20 bg-gray-600  dark:bg-emerald-600 dark:text-white hover:bg-gray-700 dark:hover:bg-emerald-400 transition-all duration-100 text-white px-2 py-2 text-2xl md:text-4xl rounded-full absolute top-8 left-8"
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeSwitcher;
