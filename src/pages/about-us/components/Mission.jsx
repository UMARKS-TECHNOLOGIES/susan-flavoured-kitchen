import React from "react";
import Abt3 from "@/assets/Abt3.svg";
const Mission = () => {
  return (
    <section className="w-[90%] md:w-[85%] mt-10 flex flex-col md:flex-row mx-auto gap-[5%] md:gap-0">
      <h2 className="text-2xl font-bold pb-4 font-poppins text-center w-full md:hidden order-1">
        Our Mission
      </h2>

      <div className="w-full md:w-[40%] mb-4 md:mb-0 flex justify-center md:justify-start order-2 md:order-1">
        <img
          src={Abt3}
          className="object-contain h-[300px] md:h-[340px]"
          alt=""
        />
      </div>

      <div className="w-full md:w-[60%] flex flex-col align-center justify-center order-3 md:order-2">
        <h2 className="text-3xl font-bold pb-8 font-poppins text-left hidden md:block">
          Our Mission
        </h2>
        <p className="font-poppins text-base md:text-xl text-justify md:text-left leading-relaxed">
          To provide customers with delicious, freshly cooked, premium, and
          healthy meals—both African and continental—while promoting a “healthy
          and happy home.” We aim to make every event and dining experience
          special, memorable and worth every penny.
        </p>
      </div>
    </section>
  );
};

export default Mission;
