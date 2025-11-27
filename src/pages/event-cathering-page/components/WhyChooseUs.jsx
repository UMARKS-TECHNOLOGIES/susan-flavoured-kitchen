import React from "react";
import Cap from "@/assets/Cap.svg";

const WhyChooseUs = () => {
  return (
    <section className="bg-[#FFF9F4] relative pb-15 w-full">
      <div className="w-[90%] mx-auto  pt-10">
        <h2 className="text-4xl font-bold mb-3">Why Choose Us</h2>
      </div>

      <div className="w-[90%] flex gap-2 mx-auto">
        <div className="bg-white relative p-10 flex flex-col justify-center h-[350px] w-[33%] rounded">
          <h1 className="text-2xl font-bold">Freshly Cooked Meals</h1>
          <p className="text-lg pt-3">
            Fully 5-star hygiene rated by the UK Food Standards Agency
          </p>
          <div className="w-[10%] absolute bottom-2 right-6">
            <img src={Cap} alt="" />
          </div>
        </div>

        <div className="bg-white relative p-10 flex flex-col justify-center h-[350px] w-[33%] rounded">
          <h1 className="text-2xl text-left font-bold">
            Strict Hygiene <br /> Standards
          </h1>
          <p className="text-lg pt-3">
            Fully 5-star hygiene rated by the UK Food Standards Agency
          </p>
          <div className="w-[10%] absolute bottom-2 right-6">
            <img src={Cap} alt="" />
          </div>
        </div>

        <div className="bg-white relative p-10 flex flex-col justify-center h-[350px] w-[33%] rounded">
          <h1 className="text-2xl text-left font-bold">
            Flexible Portions <br /> for Any Event
          </h1>
          <p className="text-lg pt-3">
            We offer full catering packages to match your needs.
          </p>
          <div className="w-[10%] absolute bottom-2 right-6">
            <img src={Cap} alt="" />
          </div>
        </div>
      </div>

      <hr className="w-full absolute bottom-0 mx-auto mt-20" />
    </section>
  );
};

export default WhyChooseUs;
