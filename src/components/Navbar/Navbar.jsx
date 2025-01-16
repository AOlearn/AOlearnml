// import React, { useRef, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaAngleDown } from 'react-icons/fa';

// const Navbar = () => {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [isDropdownOpenMobile, setIsDropdownOpenMobile] = useState(false); // State for mobile dropdown
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for desktop dropdown
//     const timeoutRef = useRef(null);

//     const toggleMobileMenu = () => {
//         setIsMobileMenuOpen(!isMobileMenuOpen);
//         setIsDropdownOpenMobile(false); // Reset dropdown when mobile menu is closed
//     };

//     const toggleMobileDropdown = () => {
//         setIsDropdownOpenMobile(!isDropdownOpenMobile); // Mobile dropdown toggle
//     };

//     const handleMouseEnter = () => {
//         clearTimeout(timeoutRef.current);
//         setIsDropdownOpen(true);
//     };

//     const handleMouseLeave = () => {
//         timeoutRef.current = setTimeout(() => setIsDropdownOpen(false), 150);
//     };

//     return (
//         <>
//             {/* Navbar */}
//             <nav className="fixed top-0 w-full z-50 px-8 py-5 md:py-3 flex justify-between items-center backdrop-blur-lg bg-black/60">
//                 <div className="text-white text-2xl font-bold">
//                     <a href="/">TheCodingCo.</a>
//                 </div>

//                 {/* Desktop Menu */}
//                 <ul className="relative hidden lg:flex items-center md:gap-5 lg:gap-8 text-white font-semibold text-xs tracking-wide">
//                     <li
//                         onMouseEnter={handleMouseEnter}
//                         onMouseLeave={handleMouseLeave}
//                     >
//                         <span className="cursor-pointer hover:text-gray-400 transition-colors flex items-center">
//                             Features
//                             <span
//                                 className={`ml-1 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
//                             >
//                                 <FaAngleDown />
//                             </span>
//                         </span>

//                         {/* Dropdown for Desktop */}
//                         {isDropdownOpen && (
//                             <div className="absolute top-full w-[500px] bg-black border border-zinc-800 rounded-lg shadow-lg p-4 mt-2 z-50">
//                                 <div className="flex gap-6">
//                                     <div className="flex-1 bg-zinc-900 border border-zinc-800 p-4 rounded-lg">
//                                         <h4 className="text-white font-semibold text-base mb-3">For whom</h4>
//                                         <div className="flex flex-col gap-2 text-xs">
//                                             <a href='#' className="p-2 border border-blue-600 bg-blue-800 hover:bg-blue-900 transition duration-300 rounded-md">
//                                                 <span className="text-white">Designers</span>
//                                             </a>
//                                             <a href='#' className="p-2 border border-green-600 bg-green-800 hover:bg-green-900 transition duration-300 rounded-md">
//                                                 <span className="text-white">Developers</span>
//                                             </a>
//                                             <a href='#' className="p-2 border border-purple-600 bg-purple-800 hover:bg-purple-900 transition duration-300 rounded-md">
//                                                 <span className="text-white">StartUps</span>
//                                             </a>
//                                         </div>
//                                     </div>

//                                     <div className="flex-1 bg-zinc-900 border border-zinc-800 p-4 rounded-lg">
//                                         <div className="flex flex-col gap-4 font-light text-xs text-white">
//                                             <a href='#' className='hover:text-zinc-400 transition duration-300'>Scalability</a>
//                                             <a href='#' className='hover:text-zinc-400 transition duration-300'>Security</a>
//                                             <a href='#' className='hover:text-zinc-400 transition duration-300'>Support</a>
//                                             <a href='#' className='hover:text-zinc-400 transition duration-300'>Integrations</a>
//                                             <a href='#' className='hover:text-zinc-400 transition duration-300'>Analytics</a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                     </li>
//                     <li className="hover:text-gray-400 transition-colors">
//                         <a href="#pricing">Pricing</a>
//                     </li>
//                     <li className="hover:text-gray-400 transition-colors">
//                         <a href="#about">About</a>
//                     </li>
//                     <li className="hover:text-gray-400 transition-colors">
//                         <a href="#contact">Contact</a>
//                     </li>
//                 </ul>

//                 {/* Desktop Buttons */}
//                 <div className="hidden lg:flex items-center gap-4">
//                     <button className="text-white rounded-full font-semibold tracking-wide text-xs hover:text-gray-300 transition duration-300">
//                         LogIn
//                     </button>
//                     <button className="px-6 py-3 bg-white text-black rounded-full font-semibold tracking-wide text-xs hover:bg-gray-300 transition duration-300">
//                         SignUp
//                     </button>
//                 </div>

//                 {/* Mobile Menu (Hamburger icon) */}
//                 <div className="lg:hidden text-white">
//                     <button onClick={toggleMobileMenu} className="text-xl">
//                         {isMobileMenuOpen ? '✖' : '☰'}
//                     </button>
//                 </div>
//                 {/* Horizontal line below navbar */}
//                 <div className="fixed z-40 top-[70px] md:top-[65px] left-0 w-full">
//                     <div className="relative h-[0.3px] bg-zinc-300/50">
//                         <div className="absolute inset-y-0 left-0 w-1/2 h-full bg-gradient-to-r from-black"></div>
//                         <div className="absolute inset-y-0 right-0 w-1/2 h-full bg-gradient-to-l from-black"></div>
//                     </div>
//                 </div>
//             </nav>


//             {/* Mobile Menu */}
//             <AnimatePresence>
//                 {isMobileMenuOpen && (
//                     <motion.div
//                         className="fixed top-0 right-0 py-5 h-full w-full bg-black/50 backdrop-blur-xl z-40 flex flex-col justify-start items-center text-white text-lg overflow-y-auto no-scrollbar"
//                         initial={{ x: "100%" }}
//                         animate={{ x: 0 }}
//                         exit={{ x: "100%" }}
//                         transition={{ type: "tween", duration: 0.4 }}
//                     >
//                         <ul className="w-full flex flex-col items-center space-y-4 text-base pt-20">
//                             <motion.li
//                                 className="hover:text-zinc-400 cursor-pointer flex items-center"
//                                 onClick={toggleMobileDropdown}
//                             >
//                                 Features
//                                 <span
//                                     className={`ml-1 transition-transform duration-300 ${isDropdownOpenMobile ? 'rotate-180' : 'rotate-0'}`}
//                                 >
//                                     <FaAngleDown />
//                                 </span>
//                             </motion.li>

//                             {/* Dropdown items for Mobile */}
//                             <AnimatePresence>
//                                 {isDropdownOpenMobile && (
//                                     <motion.div
//                                         initial={{ opacity: 0, height: 0 }}
//                                         animate={{ opacity: 1, height: "auto" }}
//                                         exit={{ opacity: 0, height: 0 }}
//                                         className="w-full px-5"
//                                     >
//                                         <div className="flex flex-col gap-6 w-full">

//                                             {/* Same structure and background as desktop dropdown */}
//                                             <div className="bg-black border border-zinc-800 p-6 rounded-lg shadow-lg">
//                                                 <div className="bg-zinc-800 border border-zinc-800 p-4 rounded-lg">
//                                                     <h4 className="text-white font-semibold text-lg mb-3">For whom</h4>
//                                                     <div className="flex flex-col gap-3 text-xs">
//                                                         <a href='#' className="p-2 border border-blue-600 bg-blue-800 hover:bg-blue-900 transition duration-300 rounded-md">
//                                                             <span className="text-white">Designers</span>
//                                                         </a>
//                                                         <a href='#' className="p-2 border border-green-600 bg-green-800 hover:bg-green-900 transition duration-300 rounded-md">
//                                                             <span className="text-white">Developers</span>
//                                                         </a>
//                                                         <a href='#' className="p-2 border border-purple-600 bg-purple-800 hover:bg-purple-900 transition duration-300 rounded-md">
//                                                             <span className="text-white">StartUps</span>
//                                                         </a>
//                                                     </div>
//                                                 </div>

//                                                 <div className="bg-zinc-800 border border-zinc-800 p-4 mt-4 rounded-lg">
//                                                     <div className="flex flex-col items-center gap-4 font-light text-xs text-white">
//                                                         <a href='#' className='hover:text-zinc-400 transition duration-300'>Scalability</a>
//                                                         <a href='#' className='hover:text-zinc-400 transition duration-300'>Security</a>
//                                                         <a href='#' className='hover:text-zinc-400 transition duration-300'>Support</a>
//                                                         <a href='#' className='hover:text-zinc-400 transition duration-300'>Integrations</a>
//                                                         <a href='#' className='hover:text-zinc-400 transition duration-300'>Analytics</a>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </motion.div>
//                                 )}
//                             </AnimatePresence>

//                             <motion.li className="hover:text-zinc-400">
//                                 <a href="#pricing" onClick={toggleMobileMenu}>Pricing</a>
//                             </motion.li>
//                             <motion.li className="hover:text-zinc-400">
//                                 <a href="#about" onClick={toggleMobileMenu}>About</a>
//                             </motion.li>
//                             <motion.li className="hover:text-zinc-400">
//                                 <a href="#contact" onClick={toggleMobileMenu}>Contact</a>
//                             </motion.li>
//                         </ul>

//                         {/* Mobile Login and Signup Buttons */}
//                         <motion.div
//                             initial={{ opacity: 0, y: 10 }}
//                             animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut", delay: 0.4 } }}
//                             exit={{ opacity: 0, y: 10 }}
//                             className="flex flex-col items-center space-y-4 mt-6 w-full px-8"
//                         />
//                         <div className='w-full flex flex-col gap-4 px-8'>
//                             <button className="w-full py-3 text-white border border-white rounded-full font-semibold tracking-wide text-sm hover:bg-zinc-700 transition duration-300">
//                                 LogIn
//                             </button>
//                             <button className="w-full py-3 bg-white text-black rounded-full font-semibold tracking-wide text-sm hover:bg-zinc-700 transition duration-300">
//                                 SignUp
//                             </button>
//                         </div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </>
//     );
// };

// export default Navbar;

import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from './Vector.png'

const navItems = [
    { label: "Learn", href: "#" },
    { label: "Community", href: "#" },
    { label: "Ecosystem", href: "#" },
    { label: "API", href: "#" },
  ];

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-10 z-50 py-4 px-3 backdrop-blur-lg shimmer-border bg-zinc-800 border-white/30 w-max mx-auto rounded-full content-center">
      <div className="container px-4 mx-auto w-max relative lg:text-sm">
        <div className="flex justify-between gap-[50px] items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-[30px] w-full mr-2" src={logo} alt="Logo" />
            {/* <span className="text-xl tracking-tight text-white">AO | Learn</span> */}
          </div>
          <ul className="hidden lg:flex ml-14 text-white  space-x-12">
            {navItems.map((item, index) => (
              <li className="hover:text-orange-400" key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            {/* <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a> */}
            <a
              href="#"
              className="bg-black shimmer-border text-white hover:bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-full"
            >
              Connect Wallet
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed bg-white right-0 z-20 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
