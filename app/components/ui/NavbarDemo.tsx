// "use client";
// import {
//   Navbar,
//   NavBody,
//   NavItems,
//   MobileNav,
//   NavbarLogo,
//   NavbarButton,
//   MobileNavHeader,
//   MobileNavToggle,
//   MobileNavMenu,
// } from "@/app/components/ui/resizable-navbar";
// import { useState } from "react";

// export function NavbarDemo() {
//   const navItems = [
//     {
//       name: "Features",
//       link: "#features",
//     },
//     {
//       name: "Pricing",
//       link: "#pricing",
//     },
//     {
//       name: "Contact",
//       link: "#contact",
//     },
//   ];

//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <div className="relative w-full">
//       <Navbar>
//         {/* Desktop Navigation */}
//         <NavBody>
//           <NavbarLogo />
//           <NavItems items={navItems} />
//           <div className="flex items-center gap-4">
//             <NavbarButton variant="secondary">Login</NavbarButton>
//             <NavbarButton variant="primary">Book a call</NavbarButton>
//           </div>
//         </NavBody>

//         {/* Mobile Navigation */}
//         <MobileNav>
//           <MobileNavHeader>
//             <NavbarLogo />
//             <MobileNavToggle
//               isOpen={isMobileMenuOpen}
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             />
//           </MobileNavHeader>

//           <MobileNavMenu
//             isOpen={isMobileMenuOpen}
//             onClose={() => setIsMobileMenuOpen(false)}
//           >
//             {navItems.map((item, idx) => (
//               <a
//                 key={`mobile-link-${idx}`}
//                 href={item.link}
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="relative text-neutral-600 dark:text-neutral-300"
//               >
//                 <span className="block">{item.name}</span>
//               </a>
//             ))}
//             <div className="flex w-full flex-col gap-4">
//               <NavbarButton
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 variant="primary"
//                 className="w-full"
//               >
//                 Login
//               </NavbarButton>
//               <NavbarButton
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 variant="primary"
//                 className="w-full"
//               >
//                 Book a call
//               </NavbarButton>
//             </div>
//           </MobileNavMenu>
//         </MobileNav>
//       </Navbar>
//       {/* <DummyContent /> */}

//       {/* Navbar */}
//     </div>
//   );
// }

// const DummyContent = () => {
//   return (
//     <div className="container mx-auto p-8 pt-24">
//       <h1 className="mb-4 text-center text-3xl font-bold">
//         Check the navbar at the top of the container
//       </h1>
//       <p className="mb-10 text-center text-sm text-zinc-500">
//         For demo purpose we have kept the position as{" "}
//         <span className="font-medium">Sticky</span>. Keep in mind that this
//         component is <span className="font-medium">fixed</span> and will not
//         move when scrolling.
//       </p>
//       <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
//         {[
//           {
//             id: 1,
//             title: "The",
//             width: "md:col-span-1",
//             height: "h-60",
//             bg: "bg-neutral-100 dark:bg-neutral-800",
//           },
//           {
//             id: 2,
//             title: "First",
//             width: "md:col-span-2",
//             height: "h-60",
//             bg: "bg-neutral-100 dark:bg-neutral-800",
//           },
//           {
//             id: 3,
//             title: "Rule",
//             width: "md:col-span-1",
//             height: "h-60",
//             bg: "bg-neutral-100 dark:bg-neutral-800",
//           },
//           {
//             id: 4,
//             title: "Of",
//             width: "md:col-span-3",
//             height: "h-60",
//             bg: "bg-neutral-100 dark:bg-neutral-800",
//           },
//           {
//             id: 5,
//             title: "F",
//             width: "md:col-span-1",
//             height: "h-60",
//             bg: "bg-neutral-100 dark:bg-neutral-800",
//           },
//           {
//             id: 6,
//             title: "Club",
//             width: "md:col-span-2",
//             height: "h-60",
//             bg: "bg-neutral-100 dark:bg-neutral-800",
//           },
//           {
//             id: 7,
//             title: "Is",
//             width: "md:col-span-2",
//             height: "h-60",
//             bg: "bg-neutral-100 dark:bg-neutral-800",
//           },
//           {
//             id: 8,
//             title: "You",
//             width: "md:col-span-1",
//             height: "h-60",
//             bg: "bg-neutral-100 dark:bg-neutral-800",
//           },
//           {
//             id: 9,
//             title: "Do NOT TALK about",
//             width: "md:col-span-2",
//             height: "h-60",
//             bg: "bg-neutral-100 dark:bg-neutral-800",
//           },
//           {
//             id: 10,
//             title: "F Club",
//             width: "md:col-span-1",
//             height: "h-60",
//             bg: "bg-neutral-100 dark:bg-neutral-800",
//           },
//         ].map((box) => (
//           <div
//             key={box.id}
//             className={`${box.width} ${box.height} ${box.bg} flex items-center justify-center rounded-lg p-4 shadow-sm`}
//           >
//             <h2 className="text-xl font-medium">{box.title}</h2>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, User, Phone, Truck } from "lucide-react";

export default function NavbarDemo() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems] = useState(3);

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
          <div className="flex justify-between h-16">
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
                  <div className="text-xs text-gray-500">Since 2010</div>
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 
              dark:hover:text-blue-400 font-medium transition-colors">
                Home
              </Link>
              <Link href="/products" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 
              dark:hover:text-blue-400 font-medium transition-colors">
                Products
              </Link>
              <Link href="/subscription" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 
              dark:hover:text-blue-400 font-medium transition-colors">
                Subscription
              </Link>
              <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 
              dark:hover:text-blue-400 font-medium transition-colors">
                About
              </Link>
              
              {/* Cart */}
              <button className="relative p-2">
                <ShoppingCart className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                {cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs 
                  rounded-full flex items-center justify-center font-bold">
                    {cartItems}
                  </span>
                )}
              </button>
              
              {/* User */}
              <button className="p-2">
                <User className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
              
              {/* Order Button */}
              <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white 
              px-6 py-2.5 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all">
                Order Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <Link href="/" className="block px-3 py-3 rounded-lg text-gray-700 dark:text-gray-300 
              hover:bg-gray-100 dark:hover:bg-gray-800 font-medium">
                Home
              </Link>
              <Link href="/products" className="block px-3 py-3 rounded-lg text-gray-700 dark:text-gray-300 
              hover:bg-gray-100 dark:hover:bg-gray-800 font-medium">
                Products
              </Link>
              <Link href="/subscription" className="block px-3 py-3 rounded-lg text-gray-700 dark:text-gray-300 
              hover:bg-gray-100 dark:hover:bg-gray-800 font-medium">
                Subscription
              </Link>
              <Link href="/about" className="block px-3 py-3 rounded-lg text-gray-700 dark:text-gray-300 
              hover:bg-gray-100 dark:hover:bg-gray-800 font-medium">
                About
              </Link>
              
              <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                <button className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white 
                px-6 py-3 rounded-xl mb-3 font-medium">
                  Order Now
                </button>
                <div className="flex justify-center gap-4">
                  <button className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <ShoppingCart className="w-5 h-5" />
                    Cart ({cartItems})
                  </button>
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