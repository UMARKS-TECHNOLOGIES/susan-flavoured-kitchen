import React from "react";
import Abt2 from "@/assets/chefstory1.jpeg";

const Story = () => {
  return (
    <section className="mx-auto w-[90%] md:w-[85%] mt-7 md:mt-15 flex flex-col gap-10">
      {/* Top Section: Photo and About Us Intro */}
      <div className="flex flex-col md:flex-row gap-[5%] items-stretch">
        <div className="w-full md:w-[45%]">
          <img
            src={Abt2}
            alt="Susan Flavoured Kitchen"
            className="w-full h-full min-h-[300px] object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="w-full md:w-[50%] flex flex-col">
          <h2 className="text-2xl md:text-3xl font-bold pb-4 md:pb-6 font-poppins text-center md:text-left">
            About Us
          </h2>
          <p className="font-poppins text-base md:text-xl text-justify md:text-left leading-relaxed">
            Welcome to Susan Flavoured Kitchen Limited, a fast-growing food and catering business based in Nottingham, United Kingdom. Founded in 2020 by Susan Chioma Nwobo, SFK was born from a lifelong passion for cooking and the joy of bringing people together through food. Susan’s culinary journey began more than 20 years ago when she catered her own birthday celebrations at ages 16 and 20. With every dish she prepared for family, friends, and community events, her love for cooking grew into a purposeful mission—and today, that mission is the heart of SFK.
          </p>
        </div>
      </div>

      {/* Bottom Section: Our Story Full Width */}
      <div className="w-full">
        <h2 className="text-2xl md:text-3xl font-bold pb-4 md:pb-6 font-poppins text-center md:text-left">
          Our Story
        </h2>
        <div className="font-poppins text-base md:text-xl text-justify md:text-left leading-relaxed space-y-4">
          <p>
            What started as a simple passion has evolved into a trusted food brand known for its freshness, flavour, creativity, and professionalism. At Susan Flavoured Kitchen, we bring the heart of home cooking to your table. Our passion for authentic flavors and fresh ingredients ensures every meal is a delightful experience. Whether you're craving a quick lunch or planning a special dinner, we are here to serve you with love and excellence. Join us on a culinary journey where tradition meets modern taste. We believe in creating memories through food, one dish at a time.
          </p>
          <p className="pt-2">
            No matter the service, our focus remains the same: <span className="text-orange-600 font-semibold">delicious, tasty hygienic, freshly cooked meals</span> made with love and the finest ingredients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Story;
