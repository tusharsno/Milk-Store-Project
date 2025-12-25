"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 sm:px-6 
    bg-gradient-to-b from-white via-gray-50/20 to-white 
    dark:from-gray-950 dark:via-gray-900/10 dark:to-gray-950 overflow-hidden">
      
      {/* Professional Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle gradient orbs */}
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-transparent 
        dark:from-blue-900/10 dark:to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-gradient-to-bl from-green-100/30 to-transparent 
        dark:from-green-900/10 dark:to-transparent rounded-full blur-3xl" />
        
        {/* Very subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.01]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(90deg, transparent 95%, rgba(59, 130, 246, 0.1) 100%),
                             linear-gradient(0deg, transparent 95%, rgba(59, 130, 246, 0.1) 100%)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        {/* Ultra-subtle floating droplets (optional, if you want minimal dairy theme) */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-white/20 to-blue-50/10 
            dark:from-white/5 dark:to-blue-900/5 backdrop-blur-sm"
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0.1, 0.15, 0.1],
              y: [0, -15, 0]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            style={{
              width: `${40 + i * 5}px`,
              height: `${40 + i * 5}px`,
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-6xl mx-auto text-center px-4"
      >
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-green-50 
          dark:from-blue-900/20 dark:to-green-900/20 border border-blue-100 dark:border-blue-800/50 mb-6"
        >
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-medium text-green-700 dark:text-green-400">
            Trusted by 10,000+ Families
          </span>
        </motion.div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block text-gray-900 dark:text-white">Experience Milk</span>
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="block bg-gradient-to-r from-blue-600 via-blue-500 to-green-600 
            bg-clip-text text-transparent mt-2"
          >
            Farm To Table in 24 Hours.
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Direct from our organic farms to your doorstep. Certified organic, 
          hormone-free, delivered daily before sunrise.
        </motion.p>

        {/* Feature Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto"
        >
          {[
            {
              value: "100%",
              label: "Pasteurized",
              icon: "✅",
              color: "from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20"
            },
            {
              value: "Guaranteed",
              label: "Preservative-Free",
              icon: "🌿",
              color: "from-green-100 to-green-50 dark:from-green-900/30 dark:to-green-800/20"
            },
            {
              value: "6-8 AM",
              label: "Morning Delivery",
              icon: "⏰",
              color: "from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-purple-800/20"
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className={`p-6 rounded-2xl bg-gradient-to-br ${feature.color} 
              border border-gray-200/50 dark:border-gray-800/50 backdrop-blur-sm`}
            >
              <div className="text-3xl mb-2">{feature.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {feature.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {feature.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 
            text-white font-semibold text-lg shadow-lg shadow-blue-500/25 hover:shadow-xl 
            hover:shadow-blue-500/30 transition-all overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Start Daily Delivery
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 
            group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-700 
            text-gray-700 dark:text-gray-300 font-semibold text-lg hover:bg-gray-50 
            dark:hover:bg-gray-900/50 transition-colors"
          >
            View Products
          </motion.button>
        </motion.div>

        {/* Milk Bottle Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 relative"
        >
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/80 
          dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 
          shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-10 h-14 relative">
                {/* Mini milk bottle icon */}
                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-white to-blue-100 
                dark:from-gray-800 dark:to-blue-900/30 rounded-full border-2 border-white/50 
                dark:border-gray-700/50">
                  <div className="absolute top-2 inset-x-2 h-6 bg-gradient-to-b from-blue-100/50 to-transparent 
                  dark:from-blue-800/30 dark:to-transparent rounded-t-full rounded-b-lg" />
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-2 
                bg-gradient-to-b from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 
                rounded-t-lg" />
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900 dark:text-white text-sm">ORGANIC</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Today's Fresh Batch</div>
              </div>
            </div>
            <div className="h-8 w-px bg-gray-200 dark:bg-gray-800" />
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Chilled at 4°C • Packed 3 hours ago
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600"
        >
          <span className="text-xs font-medium">Scroll to explore</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}