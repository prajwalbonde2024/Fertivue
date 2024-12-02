import React, { useState } from "react";
import { motion } from "framer-motion";
import mainpng from "../assets/main/Hero Image.png";

function Hero() {
  const [counttop, setCounttop] = useState(1);
  const [countbottom, setCountbottom] = useState(1);

  return (
    <section className="relative bg-gray py-12 md:py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:max-w-screen-lg xl:max-w-screen-xl">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-800 text-center">
          Revolutionize Your Fertility Clinic <br />
          with Cutting-Edge <span className="text-teal-500">EMR Technology</span>
        </h1>
        <p className="mt-6 text-[#9E9E9E] text-sm md:text-base lg:text-lg lg:max-w-4xl mx-auto text-center">
          Your trusted partner in revolutionizing fertility care. At FERTIVUE, we
          understand the unique challenges faced by fertility clinics, and we're
          here to simplify and enhance every aspect of your operations. Our
          state-of-the-art platform centralizes patient data, empowering your
          team to make informed decisions at every step of the patient journey.
        </p>
        <div className="mt-8 text-center" >
          <a href="#contact-us">
          <button  className="px-6 py-3 text-white bg-teal-500 rounded-md shadow hover:bg-teal-600 transition">
            Schedule a Demo Today
          </button>
          </a>
        </div>
      </div>
      <div className="mt-12 md:mt-20 flex flex-col items-center justify-center lg:max-w-screen-lg xl:max-w-screen-xl mx-auto gap-8 md:gap-16 bg-gray-100 rounded-[15px] p-6">
        <div className="relative w-full">
          <img
            src={mainpng}
            alt="Technology Showcase"
            className="rounded-lg shadow-lg w-full h-auto"
          />
          <div className="absolute top-[2%] right-[2%] bg-white px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 rounded-[12px] shadow-md text-center transition-all duration-300">
            <motion.p
              className="text-sm sm:text-base md:text-lg font-bold text-[#232323]"
              initial={{ count: 1 }}
              animate={{ count: 16 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              onUpdate={(latest) => setCounttop(Math.floor(latest.count))}
            >
              {counttop}+
            </motion.p>
            <p className="text-xs sm:text-sm md:text-base text-[#9E9E9E]">
              Years of Excellence
            </p>
          </div>
          <div className="absolute bottom-[2%] left-[2%] bg-white px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 rounded-[12px] shadow-md text-center transition-all duration-300">
            <motion.p
              className="text-sm sm:text-base md:text-lg font-bold text-[#232323]"
              initial={{ count: 1 }}
              animate={{ count: 150 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              onUpdate={(latest) => setCountbottom(Math.floor(latest.count))}
            >
              {countbottom}+
            </motion.p>
            <p className="text-xs sm:text-sm md:text-base text-[#9E9E9E]">
              Served Locations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
