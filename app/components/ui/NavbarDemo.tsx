"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingCart, User, Phone, Truck, Sun, Moon } from "lucide-react";

export default function NavbarDemo() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems] = useState(3);
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme") as "light" | "dark";
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (storedTheme) {
      setTheme(storedTheme);
    } else if (systemPrefersDark) {
      setTheme("dark");
    }
    
    // Apply theme to document
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Don't render theme toggle until mounted (client-side)
  const ThemeToggleButton = () => {
    if (!mounted) {
      return (
        <div className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
      );
    }

    return (
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 
        transition-colors flex items-center justify-center"
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        {theme === "dark" ? (
          <Sun className="w-5 h-5 text-yellow-400" />
        ) : (
          <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        )}
      </button>
    );
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-sm">
          <div className="flex items-center gap-2 mb-2 sm:mb-0">
            <Truck className="w-4 h-4" />
            <span>Free delivery on orders above ₹500</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>1800-123-4567</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-green-500 
                flex items-center justify-center">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 
                  bg-clip-text text-transparent">
                    MillStore
                  </span>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Since 2010</div>
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 
              dark:hover:text-blue-400 font-medium transition-colors px-3 py-2">
                Home
              </Link>
              <Link href="/products" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 
              dark:hover:text-blue-400 font-medium transition-colors px-3 py-2">
                Products
              </Link>
              <Link href="/subscription" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 
              dark:hover:text-blue-400 font-medium transition-colors px-3 py-2">
                Subscription
              </Link>
              <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 
              dark:hover:text-blue-400 font-medium transition-colors px-3 py-2">
                About
              </Link>
              
              {/* Theme Toggle Button */}
              <ThemeToggleButton />
              
              {/* Cart */}
              <button className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 
              transition-colors">
                <ShoppingCart className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                {cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs 
                  rounded-full flex items-center justify-center font-bold">
                    {cartItems}
                  </span>
                )}
              </button>
              
              {/* User */}
              <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 
              transition-colors">
                <User className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
              
              {/* Order Button */}
              <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white 
              px-6 py-2.5 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all 
              ml-2">
                Order Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-3">
              {/* Theme Toggle for Mobile */}
              <ThemeToggleButton />
              
              {/* Cart for Mobile */}
              <button className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 
              transition-colors">
                <ShoppingCart className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                {cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs 
                  rounded-full flex items-center justify-center font-bold">
                    {cartItems}
                  </span>
                )}
              </button>
              
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isMenuOpen ? (
                  <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="px-4 py-3 space-y-1">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-lg text-gray-700 dark:text-gray-300 
              hover:bg-gray-100 dark:hover:bg-gray-800 font-medium">
                Home
              </Link>
              <Link href="/products" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-lg text-gray-700 dark:text-gray-300 
              hover:bg-gray-100 dark:hover:bg-gray-800 font-medium">
                Products
              </Link>
              <Link href="/subscription" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-lg text-gray-700 dark:text-gray-300 
              hover:bg-gray-100 dark:hover:bg-gray-800 font-medium">
                Subscription
              </Link>
              <Link href="/about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-lg text-gray-700 dark:text-gray-300 
              hover:bg-gray-100 dark:hover:bg-gray-800 font-medium">
                About
              </Link>
              
              {/* Theme Toggle in Mobile Menu */}
              <div className="px-3 py-3 flex items-center justify-between border-t border-gray-200 dark:border-gray-800">
                <span className="text-gray-700 dark:text-gray-300 font-medium">Theme</span>
                <ThemeToggleButton />
              </div>
              
              <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                <button className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white 
                px-6 py-3 rounded-xl mb-3 font-medium">
                  Order Now
                </button>
                <div className="flex justify-center gap-4">
                  <button className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <User className="w-5 h-5" />
                    Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}