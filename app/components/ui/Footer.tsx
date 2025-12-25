"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-white via-blue-50/30 to-white 
    dark:from-gray-950 dark:via-gray-900/30 dark:to-gray-950 border-t border-gray-200 dark:border-gray-800">
      
      {/* Top Gradient Accent */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-green-500 to-blue-500 opacity-20" />
      
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Top Section - Brand & Newsletter */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-12">
          
          {/* Left - Brand & Newsletter */}
          <div>
            {/* Brand Logo & Tagline */}
            <div className="mb-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-green-500 
                flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">M</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 
                  bg-clip-text text-transparent">MillStore</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Since 2010</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 max-w-xl text-lg leading-relaxed">
                Delivering farm-fresh, organic milk directly to your doorstep every morning. 
                Committed to purity, quality, and customer satisfaction.
              </p>
            </div>

            {/* Newsletter Subscription */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
                Stay Updated
              </h3>
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-5 py-3.5 rounded-xl border-2 border-gray-300 dark:border-gray-700 
                    bg-white dark:bg-gray-900 text-gray-900 dark:text-white 
                    placeholder-gray-500 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400
                    transition-colors"
                    required
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-green-600 
                    text-white font-semibold hover:shadow-xl hover:shadow-blue-500/20 
                    transition-all duration-300"
                  >
                    Subscribe
                  </motion.button>
                </div>
                {subscribed && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-600 font-medium flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Successfully subscribed! Check your email.
                  </motion.p>
                )}
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Get updates on new products, offers, and dairy tips.
                </p>
              </form>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
                Follow Us
              </h3>
              <div className="flex gap-4">
                {[
                  { platform: "Facebook", icon: "f", bg: "bg-blue-600" },
                  { platform: "Instagram", icon: "ig", bg: "bg-gradient-to-br from-purple-600 to-pink-600" },
                  { platform: "Twitter", icon: "tw", bg: "bg-sky-500" },
                  { platform: "YouTube", icon: "yt", bg: "bg-red-600" },
                  { platform: "LinkedIn", icon: "in", bg: "bg-blue-700" },
                ].map((social) => (
                  <motion.a
                    key={social.platform}
                    whileHover={{ y: -3 }}
                    href="#"
                    className={`w-12 h-12 rounded-xl ${social.bg} text-white flex items-center justify-center 
                    shadow-lg hover:shadow-xl transition-shadow`}
                    aria-label={`Follow on ${social.platform}`}
                  >
                    <span className="font-bold">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Products Column */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-5 uppercase tracking-wider">
                Products
              </h3>
              <ul className="space-y-3">
                {[
                  "Fresh Cow Milk",
                  "Organic Buffalo Milk", 
                  "Skimmed Milk",
                  "Toned Milk",
                  "Flavored Milk",
                  "Curd & Paneer"
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 
                    dark:hover:text-blue-400 transition-colors group flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-3 group-hover:bg-blue-500 
                      group-hover:scale-125 transition-transform" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-5 uppercase tracking-wider">
                Services
              </h3>
              <ul className="space-y-3">
                {[
                  "Daily Subscription",
                  "One-time Delivery",
                  "Corporate Orders",
                  "Bulk Orders",
                  "Schedule Delivery", 
                  "Gift Milk"
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 
                    dark:hover:text-blue-400 transition-colors group flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-3 group-hover:bg-blue-500 
                      group-hover:scale-125 transition-transform" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-5 uppercase tracking-wider">
                Company
              </h3>
              <ul className="space-y-3">
                {[
                  "About Us",
                  "Our Farms",
                  "Quality Process",
                  "Careers",
                  "Press & Media",
                  "Sustainability"
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 
                    dark:hover:text-blue-400 transition-colors group flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-3 group-hover:bg-blue-500 
                      group-hover:scale-125 transition-transform" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-5 uppercase tracking-wider">
                Support
              </h3>
              <ul className="space-y-3">
                {[
                  "Help Center",
                  "FAQs",
                  "Delivery Areas",
                  "Contact Us", 
                  "Complaints",
                  "Refund Policy"
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 
                    dark:hover:text-blue-400 transition-colors group flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-3 group-hover:bg-blue-500 
                      group-hover:scale-125 transition-transform" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Certifications & Trust Section */}
        <div className="py-10 border-y border-gray-200 dark:border-gray-800 mb-10">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-wider text-center">
            Certified & Trusted
          </h3>
          
          {/* Certifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
            {[
              { name: "FSSAI Certified", icon: "🥛" },
              { name: "ISO 22000:2018", icon: "🏆" },
              { name: "Organic India", icon: "🌿" },
              { name: "GMP Certified", icon: "✅" },
              { name: "HACCP", icon: "🔬" }
            ].map((cert) => (
              <motion.div
                key={cert.name}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center p-5 rounded-2xl bg-white dark:bg-gray-900 
                border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-shadow"
              >
                <span className="text-3xl mb-3">{cert.icon}</span>
                <span className="font-semibold text-gray-800 dark:text-gray-200 text-center">
                  {cert.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Payment Methods */}
          <div className="flex flex-col items-center">
            <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Secure Payment:
            </span>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "Visa", icon: "💳" },
                { name: "MasterCard", icon: "💳" },
                { name: "UPI", icon: "📱" },
                { name: "NetBanking", icon: "🏦" },
                { name: "Cash on Delivery", icon: "💰" }
              ].map((method) => (
                <div
                  key={method.name}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-gray-900 
                  border border-gray-200 dark:border-gray-800 shadow-sm"
                >
                  <span className="text-xl">{method.icon}</span>
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    {method.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="space-y-8">
          {/* Copyright & Links */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} MillStore Dairy. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 
              dark:hover:text-blue-400 font-medium transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 
              dark:hover:text-blue-400 font-medium transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 
              dark:hover:text-blue-400 font-medium transition-colors">
                Cookie Policy
              </Link>
              <div className="flex items-center gap-2 text-green-600 font-semibold">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Live Support 24/7
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-3 gap-6 text-center sm:text-left">
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">📞</span>
                </div>
                <span className="font-semibold text-gray-900 dark:text-white">1800-123-4567</span>
              </div>
              <span className="text-sm text-gray-500">Toll Free</span>
            </div>

            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400 font-bold">✉️</span>
                </div>
                <span className="font-semibold text-gray-900 dark:text-white">care@millstore.com</span>
              </div>
              <span className="text-sm text-gray-500">Email Support</span>
            </div>

            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">📍</span>
                </div>
                <span className="font-semibold text-gray-900 dark:text-white">Chittagong, Bangladesh</span>
              </div>
              <span className="text-sm text-gray-500">Head Office</span>
            </div>
          </div>

          {/* Mobile Apps */}
          <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col items-center">
              <span className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Download our app:
              </span>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="#"
                  className="flex items-center gap-3 px-6 py-3.5 bg-black text-white rounded-xl 
                  hover:shadow-xl transition-shadow"
                >
                  <span className="text-2xl"></span>
                  <div className="text-left">
                    <div className="text-xs opacity-80">Download on the</div>
                    <div className="font-bold">App Store</div>
                  </div>
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="#"
                  className="flex items-center gap-3 px-6 py-3.5 bg-black text-white rounded-xl 
                  hover:shadow-xl transition-shadow"
                >
                  <span className="text-2xl">▷</span>
                  <div className="text-left">
                    <div className="text-xs opacity-80">Get it on</div>
                    <div className="font-bold">Google Play</div>
                  </div>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 
        text-white shadow-2xl shadow-green-500/30 flex items-center justify-center z-50
        hover:shadow-green-500/40 transition-shadow"
        aria-label="Chat with Support"
      >
        <span className="text-2xl">💬</span>
      </motion.button>
    </footer>
  );
}