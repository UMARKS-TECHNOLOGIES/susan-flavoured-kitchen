import React from "react";
import { Link } from "react-router-dom";

const Amazing = () => {
  return (
    <section className="w-full mt-15 pb-15 h-[200px] ">
      <div className="w-[80%] mx-auto">
        <div className="mx-auto flex flex-col items-center">
          <h1 className="text-3xl font-bold ">
            Ready to Bring Amazing Food to Your Event?
          </h1>
          <p className="text-[18px] pt-2">
            Tell us what you’re planning — we’ll help you serve fresh,
            flavourful dishes your guests will love.
          </p>
        </div>

        <div className="w-[60%] mx-auto mt-15  ">
          <Link className="bg-[#FF6E00] mr-3 px-3 py-2 rounded rounded-tr-none rounded-bl-none text-white ">
            Request Catering quote Call Us
          </Link>

          <Link className="bg-transparent border border-[#FF6E00] ml-8 px-17 py-2 rounded rounded-tr-none rounded-bl-none font-bold text-[#FF6E00]">
            Call Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Amazing;
