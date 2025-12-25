// "use client";

// import { motion } from "framer-motion";

// export default function Testimonials() {
//   const testimonials = [
//     {
//       name: "Priya Sharma",
//       role: "Working Mother",
//       content: "MillStore has changed our morning routine! Fresh milk delivered daily has made life so much easier.",
//       rating: 5,
//       image: "👩",
//     },
//     {
//       name: "Rajesh Patel",
//       role: "Restaurant Owner",
//       content: "The quality of their dairy products is exceptional. My customers love the fresh taste!",
//       rating: 5,
//       image: "👨‍🍳",
//     },
//     {
//       name: "Anjali Verma",
//       role: "Homemaker",
//       content: "Trustworthy service for 2 years now. Never missed a delivery, even during rains.",
//       rating: 5,
//       image: "👩‍🍳",
//     },
//   ];

//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white 
//     dark:from-gray-900 dark:to-gray-950">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
//           What Our Customers Say
//         </h2>
//         <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
//           Join thousands of happy families who trust us for their daily dairy needs
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={testimonial.name}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2 }}
//               viewport={{ once: true }}
//               className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 
//               dark:border-gray-800"
//             >
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-green-500 
//                 flex items-center justify-center text-2xl">
//                   {testimonial.image}
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
//                   <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
//                 </div>
//               </div>
              
//               <div className="flex mb-4">
//                 {[...Array(5)].map((_, i) => (
//                   <span key={i} className="text-yellow-500">★</span>
//                 ))}
//               </div>
              
//               <p className="text-gray-700 dark:text-gray-300">{testimonial.content}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Working Mother, Mumbai",
      content: "MillStore has completely transformed our morning routine! For the past 2 years, we've been getting fresh milk delivered daily at 6 AM. The quality is consistently excellent, and their customer service is outstanding. Never had a single complaint!",
      rating: 5,
      avatar: "👩‍💼",
      duration: "2+ years customer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      featured: true,
    },
    {
      id: 2,
      name: "Rajesh Patel",
      role: "Restaurant Owner, Pune",
      content: "As a restaurant owner, quality is everything. MillStore's dairy products have become an essential part of our kitchen. The freshness and purity are unmatched. My customers regularly compliment the taste of our milk-based dishes!",
      rating: 5,
      avatar: "👨‍🍳",
      duration: "1.5 years customer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      featured: false,
    },
    {
      id: 3,
      name: "Anjali Verma",
      role: "Homemaker, Delhi",
      content: "The reliability is what impresses me most. Rain or shine, our milk arrives on time. Their organic range has been a game-changer for my family's health. The paneer and curd are homemade fresh every day!",
      rating: 4.5,
      avatar: "👩‍🍳",
      duration: "3 years customer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      featured: true,
    },
    {
      id: 4,
      name: "Dr. Arjun Mehta",
      role: "Pediatrician, Bangalore",
      content: "I recommend MillStore to all my patients with young children. The purity and lack of preservatives make it ideal for growing kids. As a doctor, I appreciate their transparency about sourcing and processing.",
      rating: 5,
      avatar: "👨‍⚕️",
      duration: "1 year customer",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
      featured: false,
    },
    {
      id: 5,
      name: "Sunita Rao",
      role: "Yoga Instructor, Hyderabad",
      content: "Being health-conscious, I was particular about my milk source. MillStore's organic milk is exactly what I was looking for. The taste is natural and pure, unlike supermarket milk. Their subscription model is very convenient!",
      rating: 4.8,
      avatar: "🧘‍♀️",
      duration: "8 months customer",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
      featured: false,
    },
    {
      id: 6,
      name: "Vikram Singh",
      role: "IT Professional, Gurgaon",
      content: "With my hectic schedule, MillStore's app and timely delivery have been a lifesaver. The quality has never dropped, and their packaging is always perfect. The best part? I can pause delivery when I'm traveling!",
      rating: 4.7,
      avatar: "👨‍💻",
      duration: "1.2 years customer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      featured: false,
    },
  ];

  const featuredTestimonials = testimonials.filter(t => t.featured);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50/20 to-white 
    dark:from-gray-950 dark:via-gray-900/20 dark:to-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-green-50 
          dark:from-blue-900/20 dark:to-green-900/20 border border-blue-100 dark:border-blue-800/50 mb-4">
            <Quote className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-400">
              Customer Stories
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              10,000+ Families
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join thousands of happy families who have made MillStore their daily milk partner
          </p>
        </motion.div>

        {/* Featured Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl 
              blur opacity-20 group-hover:opacity-30 transition duration-300" />
              
              <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-2xl border 
              border-gray-200/50 dark:border-gray-800/50">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-100 dark:text-blue-900/30" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(testimonial.rating) 
                          ? "fill-yellow-400 text-yellow-400" 
                          : "text-gray-300 dark:text-gray-700"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {testimonial.rating}/5
                  </span>
                </div>
                
                {/* Content */}
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-green-500 
                  flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm text-gray-500">{testimonial.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* All Testimonials Carousel */}
        <div className="relative">
          <div className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 pb-4">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`min-w-[300px] sm:min-w-[350px] flex-shrink-0 snap-center ${
                  index === activeIndex ? "scale-100" : "scale-95"
                } transition-transform duration-300`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border 
                border-gray-200 dark:border-gray-800 h-full">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(testimonial.rating) 
                              ? "fill-yellow-400 text-yellow-400" 
                              : "text-gray-300 dark:text-gray-700"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {testimonial.rating}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-4">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-green-400 
                    flex items-center justify-center text-xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Scroll Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex 
                    ? "w-8 bg-gradient-to-r from-blue-500 to-green-500" 
                    : "bg-gray-300 dark:bg-gray-700"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 pt-16 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "10K+", label: "Happy Families", icon: "👨‍👩‍👧‍👦" },
              { value: "4.9★", label: "Average Rating", icon: "⭐" },
              { value: "99.7%", label: "On-time Delivery", icon: "🚚" },
              { value: "24/7", label: "Customer Support", icon: "📞" },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 
          rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Experience Freshness?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us for their daily dairy needs. 
              Start your journey to better health today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 
              text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                Start Your Subscription
              </button>
              <button className="px-8 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-700 
              text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-50 dark:hover:bg-gray-900">
                View All Reviews
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}