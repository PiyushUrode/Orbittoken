import React, { Suspense } from 'react';
import "../index.css"

// Lazily import components
const Hero = React.lazy(() => import("../Homepagesection/S1Hero.jsx"));
const About = React.lazy(() => import("../Homepagesection/S2About.jsx"));
const Usecase = React.lazy(() => import("../Homepagesection/S3Usecase.jsx"));
const Tokenomics = React.lazy(() => import("../Homepagesection/S4Tokenomics.jsx"));
const Roadmap = React.lazy(() => import("../Homepagesection/S5Roadmap.jsx"));
const ContractAddress = React.lazy(() => import("../Homepagesection/S7Contractaddress.jsx"));

const Homepage = () => {
  return (
    <Suspense fallback={<div id="load">
  <div>G</div>
  <div>N</div>
  <div>I</div>
  <div>D</div>
  <div>A</div>
  <div>O</div>
  <div>L</div>
</div>}>
      <Hero />
      <About />
      <Usecase />
      <Tokenomics />
      <Roadmap />
      <ContractAddress />
    </Suspense>
  );
};

export default Homepage;
