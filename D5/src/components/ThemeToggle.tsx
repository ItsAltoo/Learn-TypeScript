"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() =>
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || "light"
      : "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed bottom-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 p-2 shadow-lg"
    >
      {theme === "dark" ? <Sun className="text-yellow-500" /> : <Moon className="text-gray-900" />}
    </button>
  );
}
