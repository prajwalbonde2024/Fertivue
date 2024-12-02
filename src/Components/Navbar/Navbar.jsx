import React, { useState } from 'react';
import Logo from '../../assets/fertivue logo-06.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import Sidebar from './Sidebar';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);
  return (
    <>
      <nav className="bg-white shadow">
        <div className="container flex justify-between items-center p-6 sticky top-0 z-50">
          <div className="text-2xl flex items-center gap-2 font-bold">
            <img src={Logo} alt="Fertivue Logo" className="max-w-40" />
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
              <li>
                <a href="#hero"
                  className="inline-block text-[#232323] text-sm xl:text-base py-1 px-2 xl:px-3
                   hover:text-secondary transition-all duration-300 font-semibold">
                    Home
                </a>
              </li>
              <li>
                <a href="#our-solutions"
                  className="inline-block text-[#232323] text-sm xl:text-base py-1 px-2 xl:px-3
                   hover:text-secondary transition-all duration-300 font-semibold" >
                  Our Solutions
                </a>
              </li>
              <li>
                <a href="#why-choose-us"
                  className="inline-block text-[#232323] text-sm xl:text-base py-1 px-2 xl:px-3
                   hover:text-secondary transition-all duration-300 font-semibold" >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#testimonials"
                  className="inline-block text-[#232323] text-sm xl:text-base py-1 px-2 xl:px-3
                   hover:text-secondary transition-all duration-300 font-semibold">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faqs"
                  className="inline-block text-[#232323] text-sm xl:text-base py-1 px-2 xl:px-3
                   hover:text-secondary transition-all duration-300 font-semibold">
                  FAQ’s
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden lg:block space-x-8">
            <a href="#contact-us">
              <button className="text-[#0A9C93] bg-[#EFF6F6] font-semibold rounded-[12px] 
              border border-[#0A9C93] px-6 py-2">
                Contact Us
              </button>
            </a>
          </div>
          <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <GiHamburgerMenu className="text-3xl cursor-pointer" />
          </div>
        </div>
      </nav>
      <Sidebar isOpen={isOpen}  closeSidebar={closeSidebar} className="text-3xl cursor-pointer" />
    </>
  );
}

export default Navbar;
