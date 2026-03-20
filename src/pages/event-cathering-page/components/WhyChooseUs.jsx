import React from "react";
import Cap from "@/assets/Cap.svg";

const WhyChooseUs = () => {
  return (
    <section className="bg-[#FFF9F4] relative pb-10 lg:pb-15 w-full">
      <div className="w-[90%] mx-auto pt-6 lg:pt-10">
        <h2 className="text-3xl lg:text-4xl font-bold mb-3 md:mb-6">
          Why Choose Us
        </h2>
      </div>

      <div className="w-[90%] flex flex-col lg:flex-row gap-6 lg:gap-2 mx-auto">
        <div className="bg-white relative p-6 lg:p-10 flex flex-col justify-center h-auto min-h-[250px] lg:h-[350px] w-full lg:w-[33%] rounded shadow-sm lg:shadow-none">
          <h1 className="text-xl lg:text-2xl font-bold">
            Freshly Cooked Meals
          </h1>
          <p className="text-base lg:text-lg pt-3">
            Freshly cooked meals made with care just like home cooking using quality ingredients for rich, satisfying flavour.
          </p>
          <div className="w-[15%] lg:w-[10%] absolute bottom-4 lg:bottom-2 right-4 lg:right-6">
            <img src={Cap} alt="" />
          </div>
        </div>

        <div className="bg-white relative p-6 lg:p-10 flex flex-col justify-center h-auto min-h-[250px] lg:h-[350px] w-full lg:w-[33%] rounded shadow-sm lg:shadow-none">
          <h1 className="text-xl lg:text-2xl text-left font-bold">
            Strict Hygiene <br className="hidden lg:block" /> Standards
          </h1>
          <p className="text-base lg:text-lg pt-3">
            Fully 5-star hygiene rated by the UK Food Standards Agency
          </p>
          <div className="w-[15%] lg:w-[10%] absolute bottom-4 lg:bottom-2 right-4 lg:right-6">
            <img src={Cap} alt="" />
          </div>
        </div>

        <div className="bg-white relative p-6 lg:p-10 flex flex-col justify-center h-auto min-h-[250px] lg:h-[350px] w-full lg:w-[33%] rounded shadow-sm lg:shadow-none">
          <h1 className="text-xl lg:text-2xl text-left font-bold">
            Flexible Portions <br className="hidden lg:block" /> for Any Event
          </h1>
          <p className="text-base lg:text-lg pt-3">
            We offer full catering packages to match your needs.
          </p>
          <div className="w-[15%] lg:w-[10%] absolute bottom-4 lg:bottom-2 right-4 lg:right-6">
            <img src={Cap} alt="" />
          </div>
        </div>
      </div>

      <hr className="w-full absolute bottom-0 mx-auto mt-20" />
    </section>
  );
};

export default WhyChooseUs;
