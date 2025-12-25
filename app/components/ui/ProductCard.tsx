// "use client";

// import Image from "next/image";

// interface ProductCardProps {
//   title: string;
//   price: string | number;
//   img: string;
// }

// export default function ProductCard({ title, price, img }: ProductCardProps) {
//   return (
//     <div className="bg-white dark:bg-neutral-900 shadow-md rounded-lg p-4 transition-transform hover:scale-105 hover:shadow-xl duration-300">
      
//       <div className="relative w-full h-48 rounded-md overflow-hidden">
//         <Image
//           src={img}
//           alt={title}
//           fill
//           className="object-cover"
//           priority
//         />
//       </div>

//       <h2 className="text-lg font-bold mt-4 text-neutral-900 dark:text-white">{title}</h2>
//       <p className="text-gray-600 dark:text-neutral-400 mt-1">{typeof price === 'number' ? `$${price}` : price}</p>

//       <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition-colors">
//         Buy Now
//       </button>
//     </div>
//   );
// }



"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface ProductCardProps {
  id: number;
  title: string;
  description?: string;
  price: string;
  originalPrice?: string;
  img: string;
  category?: "milk" | "dairy" | "flavored" | "organic";
  rating?: number;
  unit?: "L" | "ml" | "kg" | "pack";
  stock?: number;
  isOrganic?: boolean;
  isBestSeller?: boolean;
  discount?: number;
}

export default function ProductCard({
  title,
  description,
  price,
  originalPrice,
  img,
  category = "milk",
  rating = 4.5,
  unit = "L",
  stock = 50,
  isOrganic = false,
  isBestSeller = false,
  discount = 0,
}: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 2000);
  };

  const handleQuickView = () => {
    // Quick view modal logic here
    console.log("Quick view:", title);
  };

  const categoryColors = {
    milk: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    dairy: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
    flavored: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300",
    organic: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg 
      hover:shadow-2xl transition-all duration-300 border border-gray-200 
      dark:border-gray-800 overflow-hidden"
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {discount > 0 && (
          <div className="px-3 py-1 rounded-full bg-red-500 text-white text-xs font-bold shadow-lg">
            {discount}% OFF
          </div>
        )}
        
        {isOrganic && (
          <div className="px-3 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 
          text-white text-xs font-bold shadow-lg flex items-center gap-1">
            <span className="text-xs">🌿</span> ORGANIC
          </div>
        )}
        
        {isBestSeller && (
          <div className="px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-bold shadow-lg">
            🔥 BESTSELLER
          </div>
        )}
      </div>

      {/* Quick View Button */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
        onClick={handleQuickView}
        className="absolute top-3 right-3 z-10 p-2.5 rounded-full bg-white/90 dark:bg-gray-900/90 
        backdrop-blur-sm border border-gray-300 dark:border-gray-700 shadow-lg 
        hover:shadow-xl transition-shadow"
        aria-label="Quick view"
      >
        <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      </motion.button>

      {/* Product Image Container */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-50 to-gray-100 
      dark:from-gray-800 dark:to-gray-900">
        {/* Milk Bottle/Dairy Product Visual */}
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="relative w-32 h-40">
            {/* Milk Bottle */}
            <div className="absolute inset-x-0 bottom-0 h-4/5 bg-gradient-to-b from-white to-blue-50 
            dark:from-gray-800 dark:to-blue-900/20 rounded-2xl border-4 border-white/30 
            dark:border-gray-700/30 shadow-inner">
              
              {/* Liquid Level */}
              <div className="absolute top-4 inset-x-3 h-3/4 bg-gradient-to-b from-blue-100/40 to-blue-50/20 
              dark:from-blue-500/10 dark:to-blue-900/10 rounded-t-2xl rounded-b-xl overflow-hidden">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-b from-blue-200/30 to-blue-300/10 
                  dark:from-blue-400/20 dark:to-blue-600/10"
                />
              </div>
              
              {/* Product Label */}
              <div className="absolute top-1/4 inset-x-4 h-1/4 bg-white/80 dark:bg-gray-800/80 
              backdrop-blur-sm rounded-xl border border-white/50 dark:border-gray-700/50 
              flex items-center justify-center">
                <span className="font-bold text-blue-600 dark:text-blue-400 text-sm">{unit}</span>
              </div>
            </div>
            
            {/* Bottle Cap */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-4 
            bg-gradient-to-b from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 
            rounded-t-lg" />
          </div>
        </div>

        {/* Overlay Image */}
        <Image
          src={img}
          alt={title}
          width={400}
          height={224}
          className={`w-full h-full object-cover transition-transform duration-500 
          ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        {/* Category & Rating */}
        <div className="flex items-center justify-between mb-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[category]}`}>
            {category.toUpperCase()}
          </span>
          
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'}`}
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">({rating})</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-1">
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
            {description}
          </p>
        )}

        {/* Price & Stock */}
        <div className="mt-4 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {price}
              </span>
              
              {originalPrice && (
                <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                  {originalPrice}
                </span>
              )}
              
              <span className="text-sm text-gray-500 dark:text-gray-400">
                /{unit}
              </span>
            </div>
            
            {/* Stock Indicator */}
            <div className="mt-2">
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                <span>In Stock</span>
                <span>{stock} left</span>
              </div>
              <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full ${
                    stock > 30 ? 'bg-green-500' : 
                    stock > 10 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${Math.min(100, (stock / 50) * 100)}%` }}
                />
              </div>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-8 h-8 rounded-lg border border-gray-300 dark:border-gray-700 
              flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Decrease quantity"
            >
              <span className="text-gray-600 dark:text-gray-400">−</span>
            </button>
            
            <span className="w-8 text-center font-medium text-gray-900 dark:text-white">
              {quantity}
            </span>
            
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 rounded-lg border border-gray-300 dark:border-gray-700 
              flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Increase quantity"
            >
              <span className="text-gray-600 dark:text-gray-400">+</span>
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAddToCart}
            className={`relative py-3 px-4 rounded-xl font-medium text-sm transition-all ${
              isAddedToCart
                ? 'bg-green-500 text-white'
                : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg hover:shadow-blue-500/20'
            }`}
          >
            {isAddedToCart ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Added!
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add to Cart
              </span>
            )}
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="py-3 px-4 rounded-xl font-medium text-sm border-2 border-blue-600 
            text-blue-600 dark:text-blue-400 dark:border-blue-500 
            hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
          >
            <span className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Buy Now
            </span>
          </motion.button>
        </div>

        {/* Quick Info */}
        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 grid grid-cols-2 gap-2">
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Daily Delivery
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Delivery in 2hrs
          </div>
        </div>
      </div>
    </motion.div>
  );
}