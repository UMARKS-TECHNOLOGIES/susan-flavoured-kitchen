import React from "react";
import Event1 from "@/assets/Event1.jpg";
import { Link } from "react-router-dom";
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

      <div className="absolute pl-[150px] w-[80%] top-[150px] z-3">
        <h1 className="text-5xl leading-[1.2] pb-3 text-white font-bold">
          Catering for Every Event — Fresh, Hygienic, and Delicious
        </h1>
        <p className="text-white w-[70%] text-lg">
          From intimate gatherings to large celebrations, we prepare authentic
          Nigerian dishes that bring people together — cooked fresh, beautifully
          packaged, and handled with strict hygiene standards.
        </p>

        <div className="flex justify-between w-[45%] mt-10">
          <Link to={'/catering-quote'} className="bg-[#FF6E00] px-3 border rounded rounded-tr-none rounded-bl-none text-white font-bold py-2">
            Request Cathering Quote
          </Link>
          <Link className="text-[#FF6E00] font-bold boder-[#FF6E00] border border-[#FF6E00] rounded rounded-tr-none rounded-br-none px-3 py-2">
            View Menu
          </Link>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Hero;
