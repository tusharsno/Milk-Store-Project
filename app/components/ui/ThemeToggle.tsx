"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
    );
  }

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  const getThemeIcon = () => {
    switch (theme) {
      case "dark":
        return <Moon className="w-4 h-4" />;
      case "light":
        return <Sun className="w-4 h-4" />;
      default:
        return <Monitor className="w-4 h-4" />;
    }
  };

  const getThemeLabel = () => {
    switch (theme) {
      case "dark":
        return "Dark";
      case "light":
        return "Light";
      default:
        return "System";
    }
  };

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleTheme}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 
        dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 
        transition-all duration-200 border border-gray-200 dark:border-gray-700"
        aria-label={`Toggle theme. Current: ${getThemeLabel()}`}
      >
        <div className="relative">
          {getThemeIcon()}
          <div className="absolute -top-1 -right-1">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          </div>
        </div>
        <span className="text-sm font-medium hidden sm:inline">
          {getThemeLabel()}
        </span>
      </motion.button>

      {/* Theme indicator dot */}
      <div className={`absolute -top-1 -right-1 w-2 h-2 rounded-full 
        ${theme === "dark" ? "bg-blue-500" : 
          theme === "light" ? "bg-yellow-500" : 
          "bg-green-500"} animate-pulse`} />
    </div>
  );
}