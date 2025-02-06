import React, { useState, useEffect, memo } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import { ToastContainer, toast,Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import "../App.css"
const Presale = memo(function Presale() {
  const contractAddress = "TRKHaHDwUwzvZP75Y8tZs7ACtxcwkEFqjm";
  const [copyStatus, setCopyStatus] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(contractAddress)
      .then(() => {
        toast.success("Copied to Clipboard! ✅"); // Toast notification
        setCopyStatus("Copied to Clipboard!");
        setTimeout(() => setCopyStatus(""), 2000); // Clears the message after 2 seconds
      })
      .catch(() => {
        toast.error("Copy failed ❌"); // Error toast
        setCopyStatus("Copy failed");
      });
  };

  return (
    <>
<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Bounce}

/>

      <div className="flex flex-col text-center gap-5 align-middle items-center justify-center w-full px-5 py-10" id="contract">
        <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 bg-[#000000] py-1" id="usecase">
          <div className="w-full max-w-5xl">
            <h2 className="font-semibold bg-text-custom-gradient font-gilroy bg-clip-text text-transparent mt-4 text-2xl sm:text-3xl md:text-3xl lg:text-4xl">
              Contract Address
            </h2>
            <div className="flex justify-center mt-4">
              <p className="text-[#CECECE] text-lg md:text-xl leading-relaxed w-full md:max-w-[60%] max-w-full font-Titillium_Web">
                Access the official LST contract address for secure transactions and blockchain verification
              </p>
            </div>
          </div>
        </div>

        <div className="bg-text-custom-gradient w-full sm:w-[90%] md:w-[80%] lg:w-[60%] p-0.5 rounded-3xl">
          <div className="rounded-3xl bg-custom-gradient shadow-custom-drop">
            <div className="bg-black rounded-3xl p-5 flex flex-col gap-8 items-center justify-center">
              <p
                className="text-base sm:text-lg md:text-xl font-semibold w-full sm:w-[90%] md:w-[60%] break-words leading-tight border-2 p-3 rounded-2xl text-left"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {contractAddress}
              </p>

              <div className="flex flex-col md:flex-row gap-4 items-center justify-center w-full max-w-md mx-auto">
                <button
                  className="relative px-16 md:px-16 py-5 text-sm md:text-base text-white font-quantico bg-button-custom-gradient hover:text-[#ddd] border-2 border-transparent"
                  onClick={handleCopy} // ✅ Fixed function call
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <span className="absolute inset-0 bg-button-custom-gradient p-px flex items-center justify-center">
                    <span className="absolute inset-0 bg-black bg-button-custom-gradient text-white flex items-center justify-center">
                      Copy Address
                    </span>
                  </span>
                </button>
              </div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Presale;
