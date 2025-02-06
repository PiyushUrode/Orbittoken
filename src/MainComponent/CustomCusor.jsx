import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX - 12, // Adjust for center alignment
        y: e.clientY - 12,
        duration: 0.2, // Smooth movement
        ease: "power2.out",
      });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const roadmapSection = document.getElementById("roadmap");

    if (roadmapSection) {
      roadmapSection.addEventListener("mousemove", handleMouseMove);
      roadmapSection.addEventListener("mouseenter", handleMouseEnter);
      roadmapSection.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (roadmapSection) {
        roadmapSection.removeEventListener("mousemove", handleMouseMove);
        roadmapSection.removeEventListener("mouseenter", handleMouseEnter);
        roadmapSection.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 w-16 h-16 z-30 shadow-custom-drop2 rounded-full pointer-events-none transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    />
  );
};

export default CustomCursor;

{/* <div
                      className="w-2 h-2 p-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 rounded-full shadow-custom-drop2 "
                      id="circle"
                    ></div> */}
