"use client";

import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { motion } from "framer-motion";

export function Hero() {
  const words = [
    { text: "Fresh" },
    { text: "Organic" },
    { text: "Natural" },
    { text: "Daily" },
    { text: "Milk.", className: "text-blue-600 dark:text-blue-400" },
  ];

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-[90vh] px-6 text-center
      bg-gradient-to-b from-white to-blue-50
      dark:from-neutral-900 dark:to-neutral-950
      transition-colors duration-300 overflow-hidden"
    >
      {/* Background Accent Circles */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-20 left-10 w-80 h-80 rounded-full bg-blue-200 dark:bg-blue-900 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
        className="absolute -top-10 right-10 w-60 h-60 rounded-full bg-green-200 dark:bg-green-800 blur-2xl"
      />

      {/* Top Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base tracking-wide mb-1"
      >
        Pure • Clean • Delivered Fresh
      </motion.p>

      {/* Typewriter Title */}
      <TypewriterEffectSmooth words={words} className="text-3xl sm:text-5xl md:text-6xl font-bold mt-2" />

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-xl text-neutral-600 dark:text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed mt-3"
      >
        Trusted by families across the city. We bring farm-fresh,
        preservative-free milk directly to your doorstep every morning.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-col md:flex-row gap-4 mt-8"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-44 h-12 rounded-xl bg-blue-600 text-white font-medium text-sm sm:text-base
          hover:bg-blue-700 transition-all shadow-lg"
        >
          Order Now
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-44 h-12 rounded-xl bg-white text-black border border-black
          dark:bg-neutral-900 dark:text-white dark:border-neutral-600
          hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all shadow-md"
        >
          Explore Products
        </motion.button>
      </motion.div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-10 w-full flex justify-center pointer-events-none">
        <div className="w-32 h-1 bg-blue-500/20 rounded-full blur-sm" />
      </div>
    </section>
  );
}
