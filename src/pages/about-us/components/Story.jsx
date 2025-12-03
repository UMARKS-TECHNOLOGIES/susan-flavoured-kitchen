import React from "react";
import Abt2 from "@/assets/chefstory1.jpeg";
const Story = () => {
  return (
    <section className="mx-auto w-[85%] 0 gap-[10%]  mt-15 flex">
      <div className="w-[50%]">
        <h2 className="text-2xl font-bold pb-8 font-poppins">Our Story</h2>
        <p className="font-poppins text-xl justify-center">
          Susan Flavoured Kitchen Limited is a rapidly growing food and catering
          business based in Nottingham, United Kingdom. Founded in 2020, SFK was
          born out of a lifelong passion for cooking and a deep love for serving
          others. Our journey began over 20 years ago when Susan prepared her
          very first catering meals for her 16th and 20th birthday celebrations.
          Since then, her commitment to feeding family, friends, and the wider
          community has evolved into a thriving and reputable catering brand.
        </p>
      </div>

      <div className="w-[40%] justify-end ">
        <img src={Abt2} alt="" className="w-full h-[350px]" />
      </div>
    </section>
  );
};

export default Story;
