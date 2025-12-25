"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-[90vh] px-4 sm:px-6 lg:px-8 
    bg-gradient-to-br from-white via-gray-50 to-white 
    dark:from-gray-950 dark:via-gray-900/20 dark:to-gray-950 overflow-hidden">
      
      {/* Professional Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle gradient mesh */}
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50/30 to-transparent 
        dark:from-blue-900/10 dark:to-transparent" />
        
        {/* Very subtle texture */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.01]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.1) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-50 to-blue-50 
              dark:from-green-900/20 dark:to-blue-900/20 border border-green-100 dark:border-green-800/50 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-green-700 dark:text-green-400">
                Trusted by 10,000+ Families Since 2010
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-gray-900 dark:text-white">Farm Fresh Milk</span>
              <span className="block bg-gradient-to-r from-blue-600 to-green-600 
              bg-clip-text text-transparent mt-2">Delivered at Sunrise</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-xl">
              Experience the pure taste of organic milk delivered straight from our farms 
              to your doorstep every morning. Certified organic, hormone-free, and 
              preservative-free for your family's health.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { icon: "✅", text: "100% Pasteurized" },
                { icon: "🌿", text: "Preservative-Free" },
                { icon: "⏰", text: "6-8 AM Delivery" },
                { icon: "🏆", text: "FSSAI Certified" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-xl">{feature.icon}</span>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-green-600 
                text-white font-semibold shadow-lg hover:shadow-xl transition-all 
                flex items-center justify-center gap-2"
              >
                Start Your Subscription
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 rounded-xl border-2 border-gray-300 dark:border-gray-700 
                text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-50 
                dark:hover:bg-gray-900/50 transition-colors"
              >
                View Products
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Image - Professional Product Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main Product Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl 
            bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
              
              {/* Image Container with Glass Effect */}
              <div className="aspect-square relative">
                {/* You can replace this with your actual milk product image */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-green-100/20 
                dark:from-blue-900/10 dark:to-green-900/10" />
                
                {/* Milk Bottle Illustration */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="relative w-64 h-80">
                    {/* Milk Bottle */}
                    <div className="absolute inset-x-0 bottom-0 h-4/5 bg-gradient-to-b from-white to-blue-50 
                    dark:from-gray-800 dark:to-blue-900/20 rounded-2xl border-8 border-white/50 
                    dark:border-gray-800/50 shadow-2xl">
                      
                      {/* Liquid Fill */}
                      <div className="absolute top-6 inset-x-6 h-3/4 bg-gradient-to-b from-blue-100/40 to-blue-50/20 
                      dark:from-blue-500/20 dark:to-blue-900/10 rounded-t-2xl rounded-b-xl overflow-hidden">
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 4, repeat: Infinity }}
                          className="absolute inset-0 bg-gradient-to-b from-blue-200/30 to-blue-300/20 
                          dark:from-blue-400/20 dark:to-blue-600/10"
                        />
                      </div>
                      
                      {/* Product Label */}
                      <div className="absolute top-1/4 inset-x-10 h-1/5 bg-white/90 dark:bg-gray-900/90 
                      backdrop-blur-sm rounded-xl border border-white/50 dark:border-gray-700/50 
                      flex items-center justify-center">
                        <span className="font-bold text-blue-600 dark:text-blue-400 text-lg">ORGANIC</span>
                      </div>
                    </div>
                    
                    {/* Bottle Cap */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-6 
                    bg-gradient-to-b from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 
                    rounded-t-xl" />
                  </div>
                </div>
              </div>

              {/* Product Info Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
                <div className="text-white">
                  <div className="text-lg font-semibold mb-1">Today's Fresh Batch</div>
                  <div className="text-sm opacity-90">Chilled at 4°C • Packed 3 hours ago</div>
                </div>
              </div>
            </div>

            {/* Floating Info Cards */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-xl p-4 
              shadow-lg border border-gray-200 dark:border-gray-800"
            >
              <div className="text-center">
                <div className="text-xl font-bold text-green-600">6 AM</div>
                <div className="text-xs text-gray-500">Delivery Window</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-900 rounded-xl p-4 
              shadow-lg border border-gray-200 dark:border-gray-800"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-blue-400 
                flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Certified</div>
                  <div className="text-xs text-gray-500">Organic & Safe</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-xs font-medium">Scroll to explore</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7-7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}