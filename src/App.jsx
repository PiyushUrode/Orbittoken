import React, { Suspense, lazy , useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Headroom from 'react-headroom';
import Navbar from "./MainComponent/Navbar";
import Footer from "./MainComponent/Footer";
import ScrollToTop from './MainComponent/ScrollToTop';
import Loader from './MainComponent/Loader';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import "./Style/locomotivescroll.css"
import Contact from './MainComponent/Contact';

const Homepage = lazy(() => import('./MainComponent/Homepage'));
const Presale = lazy(() => import('./MainComponent/Presale'));

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in', // Easing function
      once: true, // Run animation only once
    });
  }, []);
  return (
    <Router>
      <Headroom>
        <Navbar  />
      </Headroom>
      <ScrollToTop />
      <div className="content ">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/presale" element={<Presale />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
