// "use client";

// import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
// import { motion } from "framer-motion";

// export function Hero() {
//   const words = [
//     { text: "Fresh" },
//     { text: "Organic" },
//     { text: "Natural" },
//     { text: "Daily" },
//     { text: "Milk.", className: "text-blue-600 dark:text-blue-400" },
//   ];

//   return (
//     <section
//       className="relative flex flex-col items-center justify-center min-h-[90vh] px-6 text-center
//       bg-gradient-to-b from-white to-blue-50
//       dark:from-neutral-900 dark:to-neutral-950
//       transition-colors duration-300 overflow-hidden"
//     >
//       {/* Background Accent Circles */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.6 }}
//         animate={{ opacity: 0.15, scale: 1 }}
//         transition={{ duration: 1.5, ease: "easeOut" }}
//         className="absolute top-20 left-10 w-80 h-80 rounded-full bg-blue-200 dark:bg-blue-900 blur-3xl"
//       />
//       <motion.div
//         initial={{ opacity: 0, scale: 0.6 }}
//         animate={{ opacity: 0.1, scale: 1 }}
//         transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
//         className="absolute -top-10 right-10 w-60 h-60 rounded-full bg-green-200 dark:bg-green-800 blur-2xl"
//       />

//       {/* Top Tagline */}
//       <motion.p
//         initial={{ opacity: 0, y: 15 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base tracking-wide mb-1"
//       >
//         Pure • Clean • Delivered Fresh
//       </motion.p>

//       {/* Typewriter Title */}
//       <TypewriterEffectSmooth words={words} className="text-3xl sm:text-5xl md:text-6xl font-bold mt-2" />

//       {/* Subtitle */}
//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7, delay: 0.2 }}
//         className="max-w-xl text-neutral-600 dark:text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed mt-3"
//       >
//         Trusted by families across the city. We bring farm-fresh,
//         preservative-free milk directly to your doorstep every morning.
//       </motion.p>

//       {/* CTA Buttons */}
//       <motion.div
//         initial={{ opacity: 0, y: 25 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.3 }}
//         className="flex flex-col md:flex-row gap-4 mt-8"
//       >
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="w-44 h-12 rounded-xl bg-blue-600 text-white font-medium text-sm sm:text-base
//           hover:bg-blue-700 transition-all shadow-lg"
//         >
//           Order Now
//         </motion.button>

//         <motion.button
//           whileHover={{ scale: 1.03 }}
//           whileTap={{ scale: 0.97 }}
//           className="w-44 h-12 rounded-xl bg-white text-black border border-black
//           dark:bg-neutral-900 dark:text-white dark:border-neutral-600
//           hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all shadow-md"
//         >
//           Explore Products
//         </motion.button>
//       </motion.div>

//       {/* Bottom Decoration */}
//       <div className="absolute bottom-10 w-full flex justify-center pointer-events-none">
//         <div className="w-32 h-1 bg-blue-500/20 rounded-full blur-sm" />
//       </div>
//     </section>
//   );
// }


"use client";

import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "../ui/sparkles";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const words = [
    { text: "Farm", className: "text-green-600 dark:text-green-400" },
    { text: "To" },
    { text: "Table" },
    { text: "in" },
    { text: "24", className: "text-blue-600 dark:text-blue-400" },
    { text: "Hours." },
  ];

  const features = [
    { label: "Pasteurized", value: "100%" },
    { label: "Preservative-Free", value: "Guaranteed" },
    { label: "Morning Delivery", value: "6-8 AM" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8
      bg-gradient-to-b from-white via-blue-50/50 to-white
      dark:from-neutral-950 dark:via-neutral-900/50 dark:to-neutral-950
      overflow-hidden"
    >
      {/* PREMIUM BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] 
        bg-gradient-to-r from-blue-100/20 to-green-100/20 
        dark:from-blue-900/10 dark:to-green-900/10 rounded-full blur-3xl 
        animate-pulse-slow" />

        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16 rounded-full bg-gradient-to-br 
            from-blue-100/30 to-white/30 
            dark:from-blue-900/20 dark:to-neutral-800/20 
            backdrop-blur-sm border border-white/20"
            initial={{ y: 0, x: 0 }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
          />
        ))}
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
            bg-gradient-to-r from-green-50 to-blue-50 
            dark:from-green-900/20 dark:to-blue-900/20 
            border border-green-100 dark:border-green-800/50 mb-8">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-green-700 dark:text-green-400">
                Trusted by 10,000+ Families
              </span>
            </div>

            {/* HEADLINE */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
              <span className="block text-neutral-800 dark:text-white">
                Experience Milk
              </span>
              <span className="block">
                <TypewriterEffectSmooth
                  words={words}
                  className="text-4xl sm:text-5xl lg:text-6xl"
                />
              </span>
            </h1>

            {/* SUBTITLE */}
            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 
            mb-10 leading-relaxed max-w-xl">
              Direct from our organic farms to your doorstep.
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                {" "}
                Certified organic
              </span>
              ,
              <span className="font-semibold text-green-600 dark:text-green-400">
                {" "}
                hormone-free
              </span>
              , delivered daily before sunrise.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white/50 dark:bg-neutral-900/50 
                  backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-800/50"
                >
                  <div className="text-2xl font-bold text-neutral-900 dark:text-white">
                    {f.value}
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">
                    {f.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA BUTTON */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 rounded-xl 
                bg-gradient-to-r from-blue-600 to-blue-700 
                text-white font-semibold text-lg shadow-lg overflow-hidden"
              >
                <span className="relative z-10">Start Your Daily Delivery</span>
                <Sparkles className="absolute inset-0" />
              </motion.button>

              <button className="px-6 py-4 rounded-xl border-2 border-neutral-300 dark:border-neutral-700 
              hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 
              text-neutral-700 dark:text-neutral-300 font-medium">
                Our Process →
              </button>
            </div>
          </motion.div>

          {/* RIGHT VISUAL (SCROLL ANIMATION) */}
          <motion.div
            style={{ y, opacity }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* PRODUCT CARD */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl 
            border border-white/20 dark:border-neutral-800/50">

              <div className="aspect-square bg-gradient-to-br from-blue-50/50 to-green-50/50 
              dark:from-blue-900/20 dark:to-green-900/20 flex items-center justify-center p-12">
                <div className="relative w-64 h-80 mx-auto">
                  {/* Bottle */}
                  <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-b from-white to-blue-100 
                  dark:from-neutral-800 dark:to-blue-900/30 rounded-full border-8 
                  border-white/50 dark:border-neutral-800/50 shadow-2xl">
                    <div className="absolute top-4 inset-x-4 h-2/3 bg-gradient-to-b from-blue-100/50 
                    to-white/30 dark:from-blue-800/30 dark:to-neutral-800/30 rounded-t-full overflow-hidden">
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute inset-0 bg-gradient-to-b from-blue-400/30 to-blue-600/10"
                      />
                    </div>

                    {/* Label */}
                    <div className="absolute top-1/4 inset-x-8 h-1/4 bg-white/80 dark:bg-neutral-900/80 
                    backdrop-blur-sm rounded-xl border border-white/50 dark:border-neutral-700/50 
                    flex items-center justify-center">
                      <span className="font-bold text-blue-600 dark:text-blue-400 text-lg">
                        ORGANIC
                      </span>
                    </div>
                  </div>

                  {/* Cap */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-8 
                  bg-gradient-to-b from-neutral-300 to-neutral-400 
                  dark:from-neutral-600 dark:to-neutral-700 rounded-t-xl" />
                </div>
              </div>

              {/* Overlay Info */}
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t 
              from-black/80 via-black/40 to-transparent text-white">
                <div className="text-lg font-semibold">Today's Fresh Batch</div>
                <div className="text-sm opacity-90">Chilled at 4°C • Packed 3 hours ago</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
