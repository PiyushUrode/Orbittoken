import { useEffect, memo } from "react"; // Import memo
import about1 from "../assets/aboutimg/about1.png"; // Imported image
import about2 from "../assets/aboutimg/about2.png"; 
import "../index.css";
import AOS from "aos";
import "aos/dist/aos.css";

const S2About = memo(() => {
  useEffect(() => {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
      duration: 1000,
      easing: "ease-out-back",
      once: false,
    });

    // Preload the image dynamically
    const preloadImage = document.createElement('link');
    preloadImage.rel = 'preload';
    preloadImage.as = 'image';
    preloadImage.href = about1; // Image path from import
    preloadImage.imagesrcset = `${about1} 1x, ${about1} 2x`; // Optional: Add different resolutions
    document.head.appendChild(preloadImage);

    // Clean up when the component unmounts
    return () => {
      document.head.removeChild(preloadImage);
    };
  }, []);

  return (
    <div className="min-h-[90vh] pt-3 md:pt-0 bg-[#000000]">
      <div
        id="about"
        className="relative w-full h-full flex flex-col items-center px-3 md:px-10 py-10"
      >
        {/* Heading Section */}
        <div className="flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 bg-[#000000] py-10" id="about">
          <div className="w-full max-w-5xl">
          
            <h2 className="font-semibold bg-text-custom-gradient bg-clip-text text-transparent font-gilroy mt-4 text-2xl sm:text-3xl md:text-3xl lg:text-4xl">
             ABOUT ORBIT
            </h2>

          </div>
        </div>

        {/* Main Content Section */}
        <div id="abt4" className="w-full flex ">
          <div id="listing" className="relative  flex flex-col md:flex-row gap-10 md:gap-20 items-center">
            {/* Image Section */}
            <div
  // data-aos="fade-zoom-in"
  // data-aos-duration="1000"
  // data-aos-delay="300"
  id="filler-left"
  className="w-full md:w-[50%] relative flex justify-center md:justify-start"
>

<div className="relative flex flex-col items-center justify-center w-full h-fit xl:h-[60vh]">
  {/* Rotating Background Image */}
  <div className="absolute flex justify-center w-full max-w-[90vw] sm:max-w-[70vw]">
    <img
      loading="lazy"
      src={about2}
      alt="Rotating Background"
      className="w-full object-contain animate-[spin_3s_linear_infinite]"
    />
  </div>

  {/* Centered Foreground Image */}
  <img
    loading="lazy"
    src={about1}
    alt="Centered Image"
    className="relative w-[50vw] sm:w-[30vw] max-w-[300px] object-contain z-10"
  />
</div>

</div>


            {/* Text Content Section */}
            <div
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="1000"
              id="filler-right"
              className="w-full md:w-[50%] flex flex-col justify-center gap-10 text-center md:text-left"
            >
              <p
                data-aos="fade-left"
                data-aos-delay="1500"
                data-aos-duration="1000"
                className="text-xl px-2 sm:text-base md:text-xl text-[#CECECE] font-Titillium_Web leading-tight lg:w-[80%] mx-auto md:mx-0"
              >
Revolutionizing digital interactions with a versatile and secure cryptocurrency, ORB is your gateway to decentralized ecosystems, powering everything from gaming and DeFi to e-commerce and NFTs. With its cutting-edge technology and a focus on scalability, ORB aims to redefine how individuals and businesses engage with digital economies. Seamlessly integrate ORB into your everyday life—whether it's for gaming rewards, secure payments, or exploring the world of NFTs. Join us in creating a borderless, decentralized future where innovation and community thrive together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

S2About.displayName = "S2About";
export default S2About;
