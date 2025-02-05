import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../index.css";
import "aos/dist/aos.css";
import Robot from "../assets/contact/contact2.png";

const MyForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
      <div className="flex flex-col sm:flex-row items-center">
        <label htmlFor="name" className="w-full sm:w-1/2 text-lg text-white mb-2 sm:mb-0">
          Your Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full sm:w-1/2 text-lg bg-black text-white opacity-90 border-b-2 border-gray-600 focus:outline-none"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center">
        <label htmlFor="email" className="w-full sm:w-1/2 text-lg text-white mb-2 sm:mb-0">
          Email Id:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full sm:w-1/2 text-lg bg-black text-white opacity-90 border-b-2 border-gray-600 focus:outline-none"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center">
        <label htmlFor="phoneno" className="w-full sm:w-1/2 text-lg text-white mb-2 sm:mb-0">
          Phone No:
        </label>
        <input
          type="text"
          id="phoneno"
          name="phoneno"
          value={formData.phoneno}
          onChange={handleChange}
          className="w-full sm:w-1/2 text-lg bg-black text-white opacity-90 border-b-2 border-gray-600 focus:outline-none"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center">
        <label htmlFor="message" className="w-full sm:w-1/2 text-lg text-white mb-2 sm:mb-0">
          Message:
        </label>
        <input
          type="text"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full sm:w-1/2 text-lg bg-black text-white opacity-90 border-b-2 border-gray-600 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="relative px-5 sm:px-28 py-5 text-white font-quantico rounded-full bg-custom-gradient animate-rotate-gradient border-2 border-transparent"
      >
        <span className="absolute inset-0 rounded-full bg-custom-gradient p-px flex items-center justify-center">
          <span className="absolute inset-0 bg-black rounded-full flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="css-i6dzq1"
            >
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
            <a className="text-white font-semibold">Submit</a>
          </span>
        </span>
      </button>
    </form>
  );
};

const Contact = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneno: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .send(
        "service_cn9u73o",
        "template_dcrke5v",
        {
          name: formData.name,
          email: formData.email,
          phoneno: formData.phoneno,
          message: formData.message,
        },
        "Lv8FhYMm3VGn-GTZu" 
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send email. Please try again later.");
        }
      );

    setFormData({
      name: "",
      email: "",
      phoneno: "",
      message: "",
    });
  };

  return (
    <div
      className="flex flex-col lg:flex-row bg-black  items-center justify-center "
      id="Contact"
      data-aos="fade-up"
    >
      <div className="lg:w-1/2 sm:p-8 flex justify-center items-center hidden lg:block">
        <img
          src={Robot}
          alt=""
          className="w-full lg:w-3/4 h-auto max-h-[75vh] object-contain"
        />
      </div>
      <div
        className="lg:w-1/2 p-8 flex flex-col items-center justify-center"
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            GET IN TOUCH
          </h1>
          <div className="w-1/2 h-1 bg-gradient-to-r from-gray-400 via-white to-gray-400 mx-auto my-4"></div>
          <p className="text-lg text-gray-300">
            Reach out to us for a free consultation and discover how LastStakeToken
             can drive innovation in your digital transactions.
          </p>
        </div>

        <div className="w-4/5 border border-gray-700 rounded-lg p-6">
          <MyForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
