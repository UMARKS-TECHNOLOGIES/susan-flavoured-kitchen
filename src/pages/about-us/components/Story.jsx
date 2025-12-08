import React from "react";
import Abt2 from "@/assets/chefstory1.jpeg";
const Story = () => {
  return (
    <section className="mx-auto w-[90%] md:w-[85%] gap-[10%] mt-10 md:mt-15 flex flex-col md:flex-row">
      <h2 className="text-2xl font-bold pb-4 font-poppins text-center w-full md:hidden order-1">
        Our Story
      </h2>

      <div className="w-full md:w-[40%] justify-end mb-4 md:mb-0 order-2 md:order-2">
        <img
          src={Abt2}
          alt=""
          className="w-full h-[300px] md:h-[350px] object-cover rounded-lg"
        />
      </div>

      <div className="w-full md:w-[50%] order-3 md:order-1">
        <h2 className="text-2xl font-bold pb-8 font-poppins text-left hidden md:block">
          Our Story
        </h2>
        <p className="font-poppins text-base md:text-xl text-justify md:text-left leading-relaxed">
          Susan Flavoured Kitchen Limited is a rapidly growing food and catering
          business based in Nottingham, United Kingdom. Founded in 2020, SFK was
          born out of a lifelong passion for cooking and a deep love for serving
          others. Our journey began over 20 years ago when Susan prepared her
          very first catering meals for her 16th and 20th birthday celebrations.
          Since then, her commitment to feeding family, friends, and the wider
          community has evolved into a thriving and reputable catering brand.
        </p>
      </div>
    </section>
  );
};

export default Story;
