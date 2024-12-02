import React from "react";
import introimg from "../assets/Property 1=Variant2.png"
import FAQ from '../assets/main/Frame 9 (4).png';

const Introduction = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div>
        <img src={FAQ} className="w-19 h-10 " />
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4">
            Revolutionizing Fertility Care, Globally
          </h1>
          <p className="mt-4 text-[#9E9E9E] text-xl">
            At FERTIVUE, our mission is to revolutionize fertility care by
            providing a comprehensive, all-in-one solution tailored to the
            unique needs of fertility clinics. From patient registration to
            treatment cycle management, laboratory processes, and regulatory
            compliance. We aim to make the digitalization of medical
            documentation accessible to clinics of all sizes, empowering them to
            deliver exceptional care while streamlining their operations. Our
            vision is to be the trusted partner for clinics worldwide, enabling
            them to achieve the best outcomes for their patients.
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <h2 className="text-3xl font-bold text-teal-500">1.3M</h2>
              <p className="text-[#9E9E9E] text-sm">Patient Records</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-teal-500">4.96B</h2>
              <p className="text-[#9E9E9E] text-sm">Billing Per Year</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-teal-500">1.85B</h2>
              <p className="text-[#9E9E9E] text-sm">Inventory Per Year</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-teal-500">150</h2>
              <p className="text-[#9E9E9E] text-sm">Locations</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={introimg} 
            alt="FertiVue Logo"
            className="w-3/4 md:w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
