import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import Popular from "./components/Popular";
const HomeEvent = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <HowItWorks />
      <Popular />
    </section>
  );
};

export default HomeEvent;
