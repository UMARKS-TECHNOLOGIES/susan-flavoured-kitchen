import React from "react";
import Abt2 from "@/assets/chefstory1.jpeg";

const Story = () => {
  return (
    <section className="mx-auto w-[90%] md:w-[85%] mt-7 md:mt-15 flex flex-col md:flex-row gap-[10%] items-stretch">
      <h2 className="text-2xl font-bold pb-4 font-poppins text-center w-full md:hidden order-1">
        Our Story
      </h2>

      <div className="w-full md:w-[40%] order-2 md:order-2">
        <img
          src={Abt2}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="w-full md:w-[50%] order-3 md:order-1 flex flex-col">
        <h2 className="text-2xl font-bold pb-8 font-poppins text-left hidden md:block">
          Our Story
        </h2>

        <p className="font-poppins text-base md:text-xl text-justify md:text-left leading-relaxed flex-1">
          What started as a simple passion has evolved into a trusted food brand known for its freshness, flavour, creativity, and professionalism. At Susan Flavoured Kitchen, we bring the heart of home cooking to your table.
          Our passion for authentic flavours and fresh ingredients ensures every meal is a delightful experience.
          Whether you're craving a quick lunch or planning a special dinner, we are here to serve you with love and excellence. Join us on a culinary journey where tradition meets modern taste. We believe in creating memories through food, one dish at a time.
          <br />
          No matter the service, our focus remains the same:<br />
          delicious, tasty, hygienic, freshly cooked meals made with love and the finest ingredients.
        </p>
      </div>
    </section>
  );
};

export default Story;
