import React, { useState } from "react";
import FAQ from "../assets/main/Frame 10.png";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is IVF software, and how can it help my clinic?",
      answer:
        "IVF software is a specialized platform designed to streamline the operations of fertility clinics. It helps with patient management, treatment tracking, appointment scheduling, billing, and compliance, improving efficiency and patient care.",
    },
    {
      question: "Can FERTIVUE be customized for my clinic's specific needs?",
      answer:
        "Yes, FERTIVUE can be tailored to meet the specific requirements of your clinic to ensure a seamless workflow.",
    },
    {
      question: "What kind of support does FERTIVUE offer?",
      answer:
        "FERTIVUE provides 24/7 support, including onboarding, training, and technical assistance.",
    },
    {
      question: "How secure is my data with FERTIVUE?",
      answer:
        "FERTIVUE prioritizes data security with industry-standard encryption and compliance with healthcare regulations.",
    },
    {
      question: "Can FERTIVUE integrate with other systems we use?",
      answer:
        "Yes, FERTIVUE supports integrations with various third-party systems for enhanced functionality.",
    },
    {
      question: "How do I get started with FERTIVUE?",
      answer:
        "To get started, contact our team for a personalized demo and onboarding process.",
    },
    {
      question: "What training is available for FERTIVUE users?",
      answer:
        "We offer comprehensive training sessions and resources to ensure your team can use FERTIVUE effectively.",
    },
    {
      question:
        "Is Fertivue accessible on multiple devices, and what are the required system specifications?",
      answer: (
        <>
          Yes, Fertivue is accessible from any device with an internet
          connection, providing flexibility across various platforms. As a
          web-based application, Fertivue requires the following setup:
          <ul className="list-disc list-inside mt-2">
            <li>
              <strong>Standalone clinic:</strong> A computer with a LAN
              connection.
            </li>
            <li>
              <strong>Multiple clinics:</strong> An active internet connection.
            </li>
          </ul>
          <p className="mt-2">
            Make sure your computer meets these minimum specifications:
          </p>
          <ul className="list-disc list-inside">
            <li><strong>Processor</strong>: 1.7 GHz</li>
            <li><strong>Screen Resolution</strong>: 1366x768</li>
            <li><strong>Monitor Size </strong>: 14 inches</li>
            <li><strong>RAM </strong>: 4 GB</li>
          </ul>
        </>
      ),
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-gray-50 p-6 md:p-10 lg:p-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="space-y-6">
          <img src={FAQ} alt="FAQ" className="w-19 h-10" />
          <h2 className="text-4xl font-bold text-gray-800">
            Your Questions, Answered
          </h2>
          <p className="text-[#9E9E9E]">
            Find answers to the most common questions about our software and
            solutions.
          </p>
          <p className="text-[#9E9E9E]">Still have questions?</p>
          <a href="#contact-us" className="mt-3">
            <button href="#contact-us" className="bg-teal-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-teal-600 transition">
              Contact Us
            </button>
          </a>
        </div>
        <div>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-lg mb-4 overflow-hidden"
            >
              <button
                className="w-full text-left p-4 flex justify-between items-center bg-gray-100 hover:bg-gray-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-gray-800">{faq.question}</span>
                <span
                  className={`transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-4 pb-4 text-[#9E9E9E]">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
