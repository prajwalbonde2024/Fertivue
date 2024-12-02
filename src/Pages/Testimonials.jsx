import React, { useState } from "react";
import Quote from "../assets/Group 61.png";
import FAQ from '../assets/main/Frame 9 (2).png';

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "An IVF clinician relies heavily on patient history, vitals, lab results, and diagnostics. All this data needs to be chronologically recorded and available for future reference. With FERTIVUE EMR, we've been able to achieve this seamlessly. The data flows effortlessly from the EMR module to the ART module, and day-wise cycle monitoring is possible all the way to the Cryo bank module. FERTIVUE has been an invaluable tool for managing the complete cycle. It truly caters to all my needs. A big thumbs up!",
      author: "Mr. Kireeti",
      hospital: "Hegde Hospital",
    },
    {
      quote:
        "FERTIVUE has significantly streamlined our workflows, especially in managing treatment cycles. The intuitive interface and robust features have allowed us to focus more on patient care and less on paperwork. I highly recommend FERTIVUE for any clinic looking to improve their operations.",
      author: "Dr. Anjali Sharma",
      hospital: "City Fertility Center",
    },
    {
      quote:
        "The integration of FERTIVUE into our clinic has been a game-changer. The comprehensive EMR and ART modules ensure that all patient data is organized and easily accessible, saving us valuable time. Our patients have noticed the difference in efficiency and care.",
      author: "Dr. Rajesh Khanna",
      hospital: "Global Fertility Clinic",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <div className="flex justify-center items-center">
          <img src={FAQ} className="w-19 h-10 " />
        </div>
        <h2 className="text-4xl font-bold text-[#232323] mt-4">
          Clinic Experiences That Inspire
        </h2>
        <p className="text-[#9E9E9E] mt-2">
          Real stories of transformation from clinics achieving success
          worldwide.
        </p>
        <div className="mt-10 flex flex-col items-center space-y-6">
          {/* Quote Icon */}
          <div className="w-12 h-12">
            <img src={Quote} alt="Quote" className="w-full h-full" />
          </div>
          <div className="flex items-center justify-center space-x-8">
            <button onClick={handlePrev} className="text-[#0A9C93] text-3xl">
              ←
            </button>
            <p className="text-[#232323] italic text-lg leading-relaxed max-w-3xl">
              {testimonials[currentIndex].quote}
            </p>
            <button onClick={handleNext}className="text-[#0A9C93] text-3xl">
              →
            </button>
          </div>
        </div>
        <p className="mt-16 text-[#232323] font-medium">
          {testimonials[currentIndex].author} <br />
          <span className="text-[#9E9E9E] text-sm">
            {testimonials[currentIndex].hospital}
          </span>
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
