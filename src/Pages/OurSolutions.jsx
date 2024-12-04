import React, { useState } from "react";
import { motion } from "framer-motion";

import icons1 from "../assets/Our Solutions/Streamlined Registration.png";
import icons2 from "../assets/Our Solutions/Comprehensive Billing Management.png";
import icons3 from "../assets/Our Solutions/Real-Time Inventory Tracking.png";
import icons5 from "../assets/Our Solutions/Specialized Lab Modules.png";
import icons6 from "../assets/Our Solutions/Customizable Insights & Reporting.png";

import FAQ from "../assets/main/Frame 9 (5).png";

const OurSolutions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const solutions = [
    {
      icon: icons1,
      title: "Streamlined Registration",
      description:
        "Effortlessly onboard patients with a user-friendly registration system that captures detailed demographic, insurance, and stakeholder information for couples, donors, surrogates, and sponsors.",
    },
    {
      icon: icons2,
      title: "Comprehensive Billing Management",
      description:
        "Simplify billing processes with tools designed for accurate, transparent, and efficient financial management.",
    },
    {
      icon: icons3,
      title: "Real-Time Inventory Tracking",
      description:
        "Track and manage inventory in real time to ensure seamless operations and reduce resource wastage.",
    },
    {
      icon: icons1,
      title: "Holistic Patient Care Tools",
      description:
        "Enable clinics to provide personalized and comprehensive care with tools tailored for patient well-being.",
    },
    {
      icon: icons5,
      title: "Specialized Lab Modules",
      description:
        "Streamline laboratory workflows with advanced modules designed for IVF and fertility care.",
    },
    {
      icon: icons6,
      title: "Customizable Insights & Reporting",
      description:
        "Generate detailed reports and gain insights to optimize operations and improve patient outcomes.",
    },
  ];

  const toggleCard = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 text-center">
        <header className="mb-12">
          <div className="flex justify-center items-center">
            <img src={FAQ} alt="FAQ" className="w-19 h-20" />
          </div>
          <h2 className="mt-8 text-3xl font-bold text-gray-800">
            Solutions That Empower Clinics
          </h2>
          <p className="mt-4 text-[#9E9E9E] text-sm md:text-base max-w-2xl mx-auto">
            Streamline operations and enhance patient care with tools built for IVF success.
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-1 gap-y-6 "
        style={{ paddingLeft: '10%',paddingRight: '10%' }}>
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className={`relative bg-white w-full h-72 rounded-lg shadow-md cursor-pointer overflow-hidden mx-auto max-w-sm ${
                activeIndex === index ? "ring-2 ring-teal-500" : ""
              }`}
              whileHover="hover"
              initial="rest"
              animate={activeIndex === index ? "hover" : "rest"}
              onClick={() => toggleCard(index)}>
              <motion.div className="absolute inset-0 flex flex-col justify-center items-center p-6"
                variants={{
                  rest: { y: 0, opacity: 1 },
                  hover: { y: -20, opacity: 0 },
                }}>
                <div className="text-teal-500 mb-4">
                  <img src={solution.icon} alt={solution.title} className="w-16 h-16" />
                </div>
                <h4 className="text-lg font-semibold text-[#232323] text-center">
                  {solution.title}
                </h4>
              </motion.div>
              <motion.div className="absolute inset-0 flex flex-col justify-center items-center
               bg-white p-6 text-center opacity-0"
                variants={{
                  rest: { opacity: 0, y: 20 },
                  hover: { opacity: 1, y: 0 },
                }}>
                <div className="text-teal-500 mb-2">
                  <img src={solution.icon} alt={solution.title} className="w-16 h-16" />
                </div>
                <h4 className="text-lg font-semibold text-[#0A9C93]">
                  {solution.title}
                </h4>
                <p className="text-[#9E9E9E] text-sm mt-2">{solution.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSolutions;
