import React from "react";
import Icon1 from '../assets/Icons Why Choose Us/like.png';
import Icon4 from '../assets/Icons Why Choose Us/3dcube.png';
import Icon3 from '../assets/Icons Why Choose Us/refresh-2.png';
import Icon5 from '../assets/Icons Why Choose Us/24-support.png';
import Icon6 from '../assets/Icons Why Choose Us/ranking.png';
import Icon2 from '../assets/Icons Why Choose Us/user-tick.png';
import FAQ from '../assets/main/Frame 9 (3).png';

const ChooseUs = () => {
  const features = [
    {
      icon: Icon1,
      title: "Experience You Can Trust",
      description:
        "Backed by 1.2M+ patient records and 16+ years of fertility expertise.",
    },
    {
      icon: Icon2,
      title: "Designed by Experts, For Experts",
      description:
        "Tailored by fertility specialists to meet the real-world needs of clinics.",
    },
    {
      icon: Icon3,
      title: "End-to-End Solution",
      description:
        "A comprehensive platform covering patient, lab, billing, and compliance management.",
    },
    {
      icon: Icon4,
      title: "Scalable & Flexible",
      description:
        "Customizable modules adapt to clinics of all sizes, ensuring future-ready operations.",
    },
    {
      icon: Icon5,
      title: "Unmatched Support",
      description:
        "24/7 assistance with updates, training, and expert guidance for seamless operations.",
    },
    {
      icon: Icon6,
      title: "Proven Results",
      description:
        "Boost efficiency, reduce errors, and improve outcomes with a trusted solution.",
    },
  ];

  return (
    <section className="bg-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-left">
         <img src={FAQ} className="w-19 h-10 " />
          <h2 className="text-3xl md:text-5xl font-bold text-[#232323] mt-4">
            Why Choose FERTIVUE?
          </h2>
          <p className="text-[#9E9E9E] mt-4">
            Real stories of transformation from clinics achieving success worldwide.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg flex items-start transition-all duration-300"
            >
              <div className="p-3 rounded-full bg-gray-100 transition duration-300 cursor-pointer">
                <img src={feature.icon} alt={feature.title} className="w-6 h-6" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-[#232323]">
                  {feature.title}
                </h4>
                <p className="text-[#9E9E9E] text-sm mt-2">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
