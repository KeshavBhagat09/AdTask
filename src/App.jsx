import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import VideoSection from "./Components/VideoSection";
import SocialIcons from "./Components/SocialIcons";
import BrandLogos from "./Components/BrandLogos";
import Features from "./Components/Features";
import Services from "./Components/Services";
import Testinomials from "./Components/Testinomials";
import ContactUs from "./Components/ContactUs";
import CallToAction from "./Components/CallToAction";

const App = () => {
  return (
    
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <VideoSection />
      <BrandLogos />
      <SocialIcons />
      <Features />
      <Services />
      <Testinomials />
      <ContactUs />
      <CallToAction />
    </div>
  );
};

export default App;
