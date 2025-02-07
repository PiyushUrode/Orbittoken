import { HashLink as Link } from 'react-router-hash-link';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo/logo1.png";
// import Popup from './Popupbuydog';

const Navbar = () => {
  const navigate = useNavigate();
  // const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);

  // Toggle popup visibility
  // const togglePopup = () => {
  //   setIsPopupOpen(!isPopupOpen);
  // };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const closeMenu = () => {
    setIsNavVisible(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <nav className={`w-full    font-gilroy overflow-x-hidden z-0    top-0 border-b border-none dark:border-gray-600 `}>
      <div className="relative max-w-full flex flex-wrap items-center justify-between mx-auto p-4 px-4 md:p-4 md:px-8">
        {/* Logo */}
        <Link smooth to="/" onClick={closeMenu}>
     
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              loading="lazy"
              src={logo}
              className="w-[7rem]  sm:w-[9rem] h-auto"
              alt="LastStakeToken"
            />
          </div>
        </Link>

        {/* Right Section */}
        <div className="flex md:order-2 sm:gap-5 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {/* <div className="flex gap-3 sm:gap-1 hidden sm:block items-center  ">
            <a
              target="blank"
              href="https://cubipay-token.gitbook.io/cubipay-token"
              rel="noopener noreferrer"
              className="rbtn h-fit rounded-full  "
            >
              <span className=" font-bold font-serif rounded-full px-1 py-1 sm:py-3 sm:px-3 sm:text-sm text-white  rounded-xl bg-custom-gradient ">
              <a href="https://cubipay-token.gitbook.io/cubipay-token" >  White Paper   </a>
              </span>
            </a>
          </div> */}


{/* <div className="flex gap-3 sm:gap-1 items-center hidden md:block">
          <a
              target="blank"
              href="/"
              rel="noopener noreferrer"
              className="rbtn h-fit rounded-full  "
            >
              <span className=" font-Titillium_Web font-bold   px-2 py-2 sm:py-3 sm:px-3 sm:text-sm text-white  rounded-xl bg-button-custom-gradient ">
              <a href="/" >  White Paper   </a>
              </span>
            </a>
          </div> */}

          <div className="flex gap-3 sm:gap-1   items-center ">
          <Link smooth to="/presale" onClick={closeMenu}>
           
                        <div className="flex sm:flex-row rounded-xl flex-col gap-5 md:gap-10 justify-center md:justify-start">
                  <button

                    className="relative sm:px-20 rounded-lg  sm:py-5  px-12 py-1 font-gilroy font-bold shadow-md  shadow-[#ffffff8e] rounded-md  text-white    h-9 sm:h-full"
                    onClick={() => navigate("/presale")}  >
                    <span className="absolute inset-0 p-px flex items-center rounded-lg  justify-center rounded-md">
                    <span className=" font-bold shadow-md rounded-lg shadow-[#ffffff8e] px-2 py-2 sm:py-2 sm:px-8 sm:text-sm text-white bg-button-custom-gradient w-full h-9 sm:h-full text-sm  
  hover:animate-popup hover:shadow-sm hover:shadow-[#ffffff] hover:focus:ring hover:focus:ring-offset-2 focus:ring-[#ffffff8e] rounded-md ">
  BUY NOW
</span>

                    </span>
                  </button>


                </div>
            </Link>
          </div>



          <button
            onClick={toggleNav}
            type="button"
            className="inline-flex items-center p-1 w-9 h-9  justify-center text-sm text-red-100 bg-gray-900 border border-[#00C6FF] rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-yellow-400 hover:bg-gray-900"
            aria-controls="navbar-sticky1"
            aria-expanded={isNavVisible}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-4 h-5"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Navbar Items */}
        <div
          id="navbar-sticky1"
          className={`items-center justify-center  w-[99%] md:flex md:w-fit md:order-1 ${isNavVisible ? 'block' : 'hidden'}`}
        >
          <ul className="navcar flex flex-col p-4 md:py-1.5 mt-4 font-medium border border-[#00C6FF] md:rounded-[50px] rounded-lg md:space-x-[3vmax] md:flex-row md:mt-0 md:border-0 text-white font-semibold   tablet:bg-gray-900">
            <li className="md:border-none border-b-[2px] border-[#6D4CFF]">
            <Link smooth to="/#home" onClick={closeMenu}>
                <div className="font-normal block py-2 px-3 text-white  font-semibold   hover:bg-gray-700 md:hover:bg-transparent md:p-0  hover:border-b-2 hover:border-[#6D4CFF] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-300 
  font-outfit">
                  Home
                </div>
              </Link>
            </li>
            <li className="md:border-none border-b-[2px] border-[#6D4CFF]">
            <Link smooth to="/#about" onClick={closeMenu}>
                <div className="font-normal block py-2 px-3 text-white font-semibold  hover:bg-gray-700 md:hover:bg-transparent md:p-0  hover:border-b-2 hover:border-[#6D4CFF] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-300 
 font-outfit">
                  About
                </div>
              </Link>
            </li>

            <li className="md:border-none border-b-[2px] border-[#6D4CFF]">
            <Link smooth to="/#usecase" onClick={closeMenu}>
                <div className="font-normal block py-2 px-3  text-white font-semibold  hover:bg-gray-700 md:hover:bg-transparent md:p-0  hover:border-b-2 hover:border-[#6D4CFF] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-300 
 font-outfit">
                  UseCase
                </div>
              </Link>
            </li>




            <li className="md:border-none border-b-[2px] border-[#6D4CFF] ">
            <Link smooth to="/#token" onClick={closeMenu}>
              <div
                // onClick={togglePopup}
                className="font-normal block py-2 px-3 text-white font-semibold  hover:bg-gray-700 md:hover:bg-transparent md:p-0  hover:border-b-2 hover:border-[#6D4CFF] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-300 
 font-outfit cursor-pointer"
              >
                Tokenomics
              </div>
              </Link>
            </li>

            <li className="md:border-none border-b-[2px] border-[#6D4CFF]">
            <Link smooth to="/#roadmap" onClick={closeMenu}>
                <div className="font-normal block py-2 px-3 text-white font-semibold  hover:bg-gray-700 md:hover:bg-transparent md:p-0  hover:border-b-2 hover:border-[#6D4CFF] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-300 
 font-outfit">
                  Roadmap
                </div>
              </Link>
            </li>


            <li className="md:border-none  md:hidden border-b-[2px] border-[#6D4CFF]">
              <a   target="blank"
              href="https://orbits-token.gitbook.io/orbits-token/"
              rel="noopener noreferrer"
            onClick={closeMenu}>
                <div className="font-normal block py-2 px-3 text-white font-semibold  hover:bg-gray-700 md:hover:bg-transparent md:p-0  hover:border-b-2 hover:border-[#6D4CFF] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-300 
 font-outfit">
                  Whitepaper
                </div>
              </a>
            </li>




            



          </ul>
        </div>
      </div>

      {/* Popup */}
      {/* {isPopupOpen && <Popup onClose={togglePopup} />} */}
    </nav>
  );
};

export default Navbar;
