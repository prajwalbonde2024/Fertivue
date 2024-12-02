import React from 'react';
import { motion, AnimatePresence } from "framer-motion";


function Sidebar({ isOpen, closeSidebar }) {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <div className="absolute top-20 left-0 w-full h-screen z-20 lg:hidden">
          <div className="text-xl font-semibold  bg-[#0A9C93] text-gray-700 py-10 m-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-10 text-white">
              <li>
                <a href="#home" className="cursor-pointer" onClick={closeSidebar}>
                  Home
                </a>
              </li>
              <li>
                <a href="#our-solutions" className="cursor-pointer" onClick={closeSidebar}>
                  Our Solutions
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="cursor-pointer" onClick={closeSidebar}>
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="cursor-pointer" onClick={closeSidebar}>
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faqs" className="cursor-pointer" onClick={closeSidebar}>
                  FAQ’s
                </a>
              </li>
              <li>
                <a href="#contact-us" className="cursor-pointer" onClick={closeSidebar}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default Sidebar;
