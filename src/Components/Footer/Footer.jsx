import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import Logo from '../../assets/fertivue logo-06 (4).png';

const Footer = () => {
  return (
    <footer>
      {/* First Section: Newsletter Subscription */}
      <div className="bg-gray-800 text-gray-300 py-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="md:flex justify-between items-center space-y-6 md:space-y-0">
            {/* Title and Description */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-white">
                Stay Updated with FERTIVUE
              </h3>
              <p className="text-[#9E9E9E] mt-2">
              Subscribe to our newsletter for the latest updates, insights, 
              and innovations in fertility care.
               Join a community dedicated to transforming IVF success.
              </p>
            </div>
            {/* Email Form */}
            <form className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="email"
                placeholder="Enter email"
                className="px-4 py-2 rounded-[12px] bg-gray-700 text-gray-300 
                border border-[#2B2B2B] focus:outline-none focus:ring-2 focus:ring-teal-500 w-full md:w-auto"
              />
              <button
                type="submit"
                className="bg-teal-500 text-white px-6 py-2 rounded-[12px] hover:bg-teal-600 transition w-full md:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Second Section: Footer Links */}
      <div className="bg-black text-gray-300 py-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Div: Logo and Description */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              <img src={Logo} alt="Fertivue Logo" className="w-60 h-20 mx-auto md:mx-0" />
            </h2>
            <p className="text-gray-400 mt-2 text-center md:text-left">
              Simplifying fertility care with innovation—FERTIVUE empowers
              clinics to make informed decisions at every step of the patient
              journey.
            </p>
          </div>

          {/* Second Div: Links */}
          <div className="flex flex-col md:flex-row justify-end items-center md:items-start space-y-8 md:space-y-0">
            {/* Useful Links */}
            <div className="text-center md:text-left">
              <h4 className="text-2xl font-semibold text-white">Useful Links</h4>
              <ul className="space-y-2 mt-3">
                <li>
                  <a href="#" className="hover:text-white">
                    Our Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            {/* <div className="text-center md:text-left">
              <h4 className="text-2xl font-semibold text-white">Social Links</h4>
              <ul className="space-y-2 mt-3">
                <li>
                  <a href="#" className="flex items-center justify-center md:justify-start hover:text-white">
                    <FaLinkedin className="mr-2 text-lg" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-center md:justify-start hover:text-white">
                    <FaFacebook className="mr-2 text-lg" /> Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-center md:justify-start hover:text-white">
                    <FaInstagram className="mr-2 text-lg" /> Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-center md:justify-start hover:text-white">
                    <FaYoutube className="mr-2 text-lg" /> YouTube
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-center md:justify-start hover:text-white">
                    <FaTwitter className="mr-2 text-lg" /> Twitter
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 border-t border-gray-700 pt-4 text-gray-400">
          © 2024 FertiVue. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
