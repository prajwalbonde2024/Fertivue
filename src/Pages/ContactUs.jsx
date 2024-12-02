import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Oval } from "react-loader-spinner";
import Mail from "../assets/Contact us/Frame 1410118768.png";
import Phone from "../assets/Contact us/Frame 1410118769.png";
import Location from "../assets/Contact us/Frame 1410118770.png";
import FAQ from "../assets/main/Frame 9 (1).png";
import ContactBG from "../assets/Contact us/Conatct BG.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    clinicName: "",
    country: "",
    platform: "",
    massage: "",
    ipaddress: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { userName, email, massage } = formData;
    if (!userName || !email || !massage) {
      toast.error("Name, email, and message are required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Invalid email address");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5005/api/User", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send the message. Please try again.");
      }

      const result = await response.json();
      toast.success("Demo request sent successfully!");
      console.log("SUCCESS:", result);

      // Reset form
      setFormData({
        userName: "",
        email: "",
        clinicName: "",
        country: "",
        platform: "",
        massage: "",
        ipaddress: "",
      });
    } catch (err) {
      toast.error(err.message || "An error occurred while sending the message.");
      console.error("ERROR:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-10 px-6 md:px-12">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Oval height={60} width={60} color="white" ariaLabel="loading" />
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center items-center">
            <img src={FAQ} className="w-19 h-10" alt="FAQ" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
            Let’s Connect & Transform Care
          </h2>
          <p className="text-[#9E9E9E] mt-4">
            Reach out to discover how FERTIVUE can revolutionize your clinic's
            operations and patient outcomes.
          </p>
        </div>

        <div
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 p-4"
          style={{
            background: "linear-gradient(to bottom, #F0F6F6, #F9FBFB, #F0F6F6)",
            borderRadius: "15px",
          }}
        >
          <div
            className="bg-cover bg-center rounded-[15px] p-8 shadow-lg"
            style={{ backgroundImage: `url(${ContactBG})` }}
          >
            <h4 className="text-2xl font-semibold mb-4 text-white">
              Contact Information
            </h4>
            <p className="text-white/90 text-sm mb-6">
              We’re here to assist you. Reach out to us for any inquiries,
              support, or to learn more about how FERTIVUE can transform your
              clinic.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <img src={Mail} className="w-12 h-12" alt="Mail Icon" />
                <span className="ml-4 text-white">
                  info@fertivuesolutions.com
                </span>
              </li>
              <li className="flex items-center">
                <img src={Phone} className="w-12 h-12" alt="Phone Icon" />
                <span className="ml-4 text-white">(+91) 9579528443</span>
              </li>
              <li className="flex items-center">
                <img src={Location} className="w-12 h-12" alt="Location Icon" />
                <span className="ml-4 text-white">
                  123 Street, San Diego, CA, USA
                </span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#9E9E9E]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="userName"
                    placeholder="Enter name"
                    value={formData.userName}
                    onChange={handleChange}
                    className="mt-1 p-3 w-full border rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#9E9E9E]">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 p-3 w-full border rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#9E9E9E]">
                    Clinic Name
                  </label>
                  <input
                    type="text"
                    name="clinicName"
                    placeholder="Enter clinic name"
                    value={formData.clinicName}
                    onChange={handleChange}
                    className="mt-1 p-3 w-full border rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#9E9E9E]">
                    Country
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="mt-1 p-3 w-full border rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  >
                    <option>Select country</option>
                    <option>USA</option>
                    <option>India</option>
                    <option>UK</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-[#9E9E9E]">
                  How did you find us?
                </label>
                <select
                  name="platform"
                  value={formData.platform}
                  onChange={handleChange}
                  className="mt-1 p-3 w-full border rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                >
                  <option>Select platform</option>
                  <option>Google</option>
                  <option>Social Media</option>
                  <option>Referral</option>
                </select>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-[#9E9E9E]">
                  Message for us (In 300 words)
                </label>
                <textarea
                  name="massage"
                  rows="5"
                  placeholder="Type your message here..."
                  value={formData.massage}
                  onChange={handleChange}
                  className="mt-1 p-3 w-full border rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  required
                />
              </div>
              <div className="mt-6 flex items-center">
                <input
                  type="checkbox"
                  id="privacy-policy"
                  className="h-4 w-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
                  required
                />
                <label
                  htmlFor="privacy-policy"
                  className="ml-2 text-sm text-[#9E9E9E]"
                >
                  I agree to all your{" "}
                  <a href="#" className="text-teal-500 underline">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <div className="mt-6 flex justify-center">
                <button
                  type="submit"
                  className={`w-full bg-teal-500 text-white py-3 px-4 rounded-md hover:bg-teal-600 transition ${
                    loading ? "cursor-not-allowed opacity-70" : ""
                  }`}
                  disabled={loading}
                >
                  {loading ? (
                    <Oval height={20} width={20} color="white" />
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
