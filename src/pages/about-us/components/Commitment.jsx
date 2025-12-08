import React from "react";
import Abt3 from "../../../assets/chefstory1.jpeg";

const Commitment = () => {
  return (
    <section className="mx-auto w-[90%] md:w-[85%] gap-[10%] mt-10 md:mt-15 flex flex-col md:flex-row">
      <h2 className="text-2xl font-bold pb-4 font-poppins text-center w-full md:hidden order-1">
        Our Commitment
      </h2>

      <div className="w-full md:w-[50%] justify-end object-contain mb-4 md:mb-0 order-2 md:order-2">
        <img
          src={Abt3}
          alt=""
          className="w-full h-[300px] md:h-[350px] object-cover rounded-lg"
        />
      </div>

      <div className="w-full md:w-[50%] flex flex-col justify-center order-3 md:order-1">
        <h2 className="text-2xl font-bold pb-8 font-poppins text-left hidden md:block">
          Our Commitment
        </h2>
        <p className="font-poppins text-base md:text-xl text-justify md:text-left leading-relaxed">
          Susan Flavoured Kitchen is dedicated to providing high-quality, luxury
          catering services using the finest ingredients, prepared in a clean
          and professional environment. We strive to make every event we cater
          memorable, every meal delicious, and every client experience
          exceptional.
        </p>
      </div>
    </section>
  );
};

export default Commitment;
