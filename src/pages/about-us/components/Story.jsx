import React from "react";
import Abt2 from "@/assets/chefstory1.webp";
const Story = () => {
  return (
    <section className="mx-auto w-[90%] md:w-[85%] gap-[10%] mt-7 md:mt-15 flex flex-col md:flex-row">
      <h2 className="text-2xl font-bold pb-4 font-poppins text-center w-full md:hidden order-1">
        Our Story
      </h2>

      <div className="w-full md:w-[40%] justify-end mb-4 md:mb-0 order-2 md:order-2">
        <img
          src={Abt2}
          alt=""
          className="w-full h-[300px] md:h-[350px] object-cover rounded-lg"
        />
      </div>

      <div className="w-full md:w-[50%] order-3 md:order-1">
        <h2 className="text-2xl font-bold pb-8 font-poppins text-left hidden md:block">
      About Us
        </h2>
        <p className="font-poppins text-base md:text-xl text-justify md:text-left leading-relaxed">
          Welcome to Susan Flavoured Kitchen Limited, a fast-growing food and catering business based in Nottingham, United Kingdom. Founded in 2020 by Susan Chioma Nwobo, SFK was born from a lifelong passion for cooking and the joy of bringing people together through food.
          Susan’s culinary journey began more than 20 years ago when she catered her own birthday celebrations at ages 16 and 20. With every dish she prepared for family, friends, and community events, her love for cooking grew into a purposeful mission—and today, that mission is the heart of SFK.
        <br className="hidden lg:block" />
        <br className="hidden lg:block" />
         <h2 className="text-2xl font-bold pb-8 font-poppins text-left hidden md:block">
          Our Story
        </h2>
        What started as a simple passion has evolved into a trusted food brand known for its freshness, flavour, creativity, and professionalism. 
        At Susan Flavoured Kitchen, we bring the heart of home cooking to your table. Our passion for authentic flavors and fresh ingredients ensures every meal is a delightful experience. 
        Whether you're craving a quick lunch or planning a special dinner, we are here to serve you with love and excellence.
        Join us on a culinary journey where tradition meets modern taste. We believe in creating memories through food, one dish at a time.
        <br className="hidden lg:block" />
        <br className="hidden lg:block" />
        No matter the service, our focus remains the same: delicious, tasty hygienic, freshly cooked meals made with love and the finest ingredients.
        </p>
      </div>
    </section>
  );
};

export default Story;
