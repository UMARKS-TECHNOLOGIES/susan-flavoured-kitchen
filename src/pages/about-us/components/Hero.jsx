import React from "react";
import Event1 from "@/assets/abouthero.webp";

const Hero = () => {
  return (
    <section className="h-[250px] md:h-[450px] w-full px-4 pt-4 pb-2 mt-20 md:p-0 md:mt-0 relative">
      <div className="w-full h-full relative rounded-[10px] md:rounded-b-[10px] md:rounded-t-none overflow-hidden">
        <img src={Event1} className="w-full h-full object-cover" alt="" />
        <div className="bg-black/50 w-full h-full absolute top-0 left-0"></div>

        <div className="absolute left-0 w-full px-4 md:px-0 md:pl-[150px] md:w-[80%] top-1/2 -translate-y-1/2 md:top-[180px] md:translate-y-0 z-10 text-center md:text-left">
          <h1 className="text-2xl md:text-5xl leading-tight text-white font-bold pb-2 md:pb-3">
            Good food, delicious in everyway...
          </h1>
          <p className="hidden md:block text-white w-full md:w-[70%] text-sm md:text-lg mx-auto md:mx-0">
            Discover the taste of premium, freshly cooked meals made with passion, quality, and the finest ingredients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
