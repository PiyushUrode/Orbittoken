import React, { useState } from "react";
import { Link } from "react-router-dom";
import Contact from "../MainComponent/Contact.jsx";
import "../index.css";
import logo from "../assets/logo/logo1.png";

import footericon2 from "../assets/Image/footericon2.png";

import footericon4 from "../assets/Image/footericon3.png";
import footericon5 from "../assets/Image/footericon4.png";
import footericon7 from "../assets/Image/footericon5.png";

import { IoIosArrowDropup } from "react-icons/io";

const Footer = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleContactPopup = () => {
    setIsContactOpen(!isContactOpen);
  };

  const scrollToTop = () => {
    const duration = 1000; // Duration in milliseconds (1 second)
    const start = window.scrollY; // Starting scroll position
    const startTime = performance.now(); // Time when the scroll starts

    // Perform the scroll gradually
    const animateScroll = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1); // Progress between 0 and 1

      // Scroll to the top with smooth easing
      window.scrollTo(0, start - start * progress);

      if (progress < 1) {
        requestAnimationFrame(animateScroll); // Keep animating until 100% progress
      }
    };

    requestAnimationFrame(animateScroll); // Start the smooth scroll animation
  };

  const currentYear = new Date().getFullYear();

  return (
    <>

      <footer className="bg-[#000000] z-10 rounded-t-3xl">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 z-10 gap-3 flex flex-col">
        <div className="flex flex-wrap justify-between items-center md:items-start w-full p-6  text-white z-10">
  {/* Left Section */}
  <div className="flex flex-col gap-6 md:gap-4 max-w-full  sm:max-w-[100%] pb-2 lg:max-w-[30%] text-center md:text-left tablet:text-center">
    <p>
      ORB is a secure, versatile cryptocurrency powering gaming, DeFi, e-commerce, and NFTs. 
      It seamlessly integrates into daily life, enabling rewards, payments, and digital innovation. 
      Join us to create a borderless, decentralized future driven by the community!
    </p>

    {/* Social Media Icons */}
    <div className="flex justify-center  tablet:justify-center md:justify-start space-x-3 md:space-x-6">
      <a href="/" target="_blank" rel="noopener noreferrer">
        <img src={footericon2} alt="Instagram" className="w-10 transition-transform hover:scale-110 duration-300" />
      </a>
      <a href="/" target="_blank" rel="noopener noreferrer">
        <img src={footericon7} alt="Telegram" className="w-10 transition-transform hover:scale-110 duration-300" />
      </a>
      <a href="mailto:support@or" target="_blank" rel="noopener noreferrer">
        <img src={footericon4} alt="Email" className="w-10 transition-transform hover:scale-110 duration-300" />
      </a>
      <a href="/" target="_blank" rel="noopener noreferrer">
        <img src={footericon5} alt="Twitter" className="w-10 transition-transform hover:scale-110 duration-300" />
      </a>
    </div>
  </div>

  {/* Links Section */}
  <div className="flex flex-wrap justify-center md:justify-end w-full md:w-auto gap-8 md:gap-8 lg:gap-12 xl:gap-16 pt-10 md:pt-0 mt-10 sm:mt-0">
    
    {/* Important Links */}
    <div className="flex flex-col items-center md:items-start">
      <h2 className="mb-4 font-semibold text-lg uppercase bg-button-custom-gradient bg-clip-text text-transparent">
        Important Links
      </h2>
      <ul className="text-gray-400 font-medium flex flex-col gap-3">
        <li className="text-center md:text-left"><a href="#about">About Us</a></li>
        <li className="text-center md:text-left"><a href="#usecase">Use Case</a></li>
        <li className="text-center md:text-left"><a href="#roadmap">Roadmap</a></li>
      </ul>
    </div>

    {/* About Us */}
    <div className="flex flex-col items-center md:items-start">
      <h2 className="mb-4 font-semibold text-lg uppercase bg-button-custom-gradient bg-clip-text text-transparent">
        About Us
      </h2>
      <ul className="text-gray-400 font-medium flex flex-col gap-3">
        <li className="text-center md:text-left"><a  href="https://orbits-token.gitbook.io/orbits-token/">White Paper</a></li>
        <li className="text-center md:text-left"><a href="#token">Tokenomics</a></li>
      </ul>
    </div>

    {/* Privacy Policy */}
    <div className="flex flex-col items-center md:items-start">
      <h2 className="mb-4 font-semibold text-lg uppercase bg-button-custom-gradient bg-clip-text text-transparent">
        Privacy Policy
      </h2>
      <ul className="text-gray-400 font-medium flex flex-col gap-3">
        <li className="text-center md:text-left"><a href="/">Privacy Policy</a></li>
        <li className="text-center md:text-left"><a href="#terms">Terms and Conditions</a></li>
      </ul>
    </div>

    {/* Logo Section */}
    <div className="flex flex-col items-center justify-center">
      <Link to="/" className="flex items-center">
        <img src={logo} className="h-14" alt="Orbit Token Logo" />
      </Link>
    </div>

  </div>
</div>

      


          <div className="flex flex-row items-center tablet:text-center justify-between">
            <span className="text-sm sm:text-center text-[#ffffff]">
              © {currentYear} OrbitToken(ORB). All Rights Reserved.
            </span>
            <button onClick={scrollToTop}>
              <IoIosArrowDropup className="w-10 h-10" />
            </button>
          </div>
        </div>



      </footer>



      {isContactOpen && (
        <div className="fixed w-full h-full overflow-x-hidden  inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center ">
          <div className=" p-4 relative rounded-lg sm:w-[99%] justify-center h-full flex flex-row  ">
            <Contact />
            <button
  onClick={toggleContactPopup}
  className="mt-4 h-10 px-4 py-2 absolute top-5 right-0 w-[10%] sm:w-[5%] bg-red-500 text-white rounded flex justify-center items-center"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>

          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
