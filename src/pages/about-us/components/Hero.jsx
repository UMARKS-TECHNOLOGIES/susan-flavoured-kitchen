import React from "react";
import Event1 from "@/assets/Abt1.jpg";
const Hero = () => {
  return (
    <section className="h-[550px] relative">
      <div className="w-full absolute">
        <img
          src={Event1}
          className="h-[550px] relative z-1 object-cover w-full rounded-b-[10px]"
          alt=""
        />
        <div className="bg-black/50 w-full h-[550px] absolute top-0 z-2 rounded-b-[50px]"></div>
      </div>

      <div className="absolute pl-[150px] w-[80%] top-[180px] z-3">
        <h1 className="text-5xl leading-[1.2] pb-3 text-white font-bold">
          Fresh. Hygienic. Unforgettable — Just Like Home.
        </h1>
        <p className="text-white w-[70%] text-lg">
          We’re passionate about serving freshly cooked Nigerian meals made with
          love, care, and uncompromising hygiene standards.
        </p>
      </div>
      <div></div>
    </section>
  );
};

export default Hero;
