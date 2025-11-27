import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Mission from "./components/Mission";
import Auth from "./components/Auth";
import Commitment from "./components/Commitment";
import Quality from "./components/Quality";
const AboutUs = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <Story />
      <Mission />
      <Auth />
      <Commitment />
      <Quality />
    </section>
  );
};

export default AboutUs;
