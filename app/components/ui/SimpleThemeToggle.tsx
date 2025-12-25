"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export default function SimpleThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-12 h-6 rounded-full bg-gray-300 dark:bg-gray-700"></div>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-12 h-6 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 
      dark:from-gray-700 dark:to-gray-800 p-1 transition-all focus:outline-none"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <motion.div
        layout
        className={`w-4 h-4 rounded-full bg-white shadow-lg flex items-center justify-center 
        ${theme === "dark" ? "translate-x-6" : "translate-x-0"}`}
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
      >
        {theme === "dark" ? (
          <span className="text-xs">🌙</span>
        ) : (
          <span className="text-xs">☀️</span>
        )}
      </motion.div>
    </button>
  );
}