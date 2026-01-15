import React from "react";
import Event1 from "@/assets/Event1.jpeg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="h-[450px] relative">
      <div className="w-full absolute inset-0">
        <img
          src={Event1}
          className="h-full w-full object-cover rounded-b-[10px] relative z-1"
          alt=""
        />
        <div className="bg-black/50 w-full h-full absolute top-0 z-2 rounded-b-[10px]"></div>
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center px-6 z-3 text-center pt-20 lg:pt-32">
        <h1 className="text-3xl lg:text-5xl leading-tight lg:leading-[1.2] pb-3 text-white font-bold max-w-5xl mx-auto">
          Catering for Every Event — Fresh, Hygienic, and Delicious
        </h1>

        <div className="flex flex-row gap-3 lg:gap-8 justify-center w-full mt-6 lg:mt-10">
          <Link
            to={"/catering-quote"}
            className="bg-[#FF6E00] px-4 py-2 text-sm lg:text-base border border-[#FF6E00] rounded rounded-tr-none rounded-bl-none text-white font-bold hover:bg-orange-700 transition-colors"
          >
            Request Quote
          </Link>
          <Link className="text-[#FF6E00] font-bold border border-[#FF6E00] rounded rounded-tr-none rounded-br-none px-4 py-2 text-sm lg:text-base bg-transparent hover:bg-[#FF6E00] hover:text-white transition-colors">
            View Menu
          </Link>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Hero;
