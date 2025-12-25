"use client";

import React from "react";
import { motion } from "framer-motion";

export const Sparkles = ({ className = "" }) => {
  return (
    <motion.div
      className={`pointer-events-none absolute inset-0 ${className}`}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {[...Array(15)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white/70 dark:bg-white/80"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: Math.random() * 300 - 150,
            y: Math.random() * 150 - 75,
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            repeatDelay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
};
