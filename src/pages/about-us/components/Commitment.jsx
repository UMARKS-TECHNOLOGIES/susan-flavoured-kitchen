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
          <br className="hidden lg:block" />
          <br className="hidden lg:block" />
         <h2 className="text-3xl font-bold pb-5 font-poppins text-left hidden md:block">
         Our Services
        </h2>
        Over the years, Susan Flavoured Kitchen has expanded into a full-service catering company offering:
          <br className="hidden lg:block" />
          •	Event Catering for weddings, parties, corporate functions, birthdays, and private gatherings(Indoor and outdoor event catering)<br className="hidden lg:block" />
          •	African/Nigerian cuisine and international dishes<br className="hidden lg:block" />
          • Meal Prep & Deliveries and pickups across the East Midlands and surrounding areas<br className="hidden lg:block" />
	        •	Onsite Cooking for fresher, hotter, frozen and flavour-rich event meals<br className="hidden lg:block" />
	        •	Pastries & Desserts for all occasion<br className="hidden lg:block" />
        	• Signature non-alcoholic flavoured drinks/tea (sweet and fruity Zobo)<br className="hidden lg:block" />
          •	Customised Menus tailored to your taste and event needs
          <br className="hidden lg:block" />
         <br className="hidden lg:block" />
         Whatever your event or dining need, SFK is here to make it special, memorable, and worth every penny.
          <br className="hidden lg:block" />
         <br className="hidden lg:block" />
         <h2 className="text-3xl font-bold pb-5 font-poppins text-left hidden md:block">
        Why Choose Us?
        </h2>
	        •	Fresh, healthy, and delicious meals<br className="hidden lg:block" />
	        •	5-star hygiene rating<br className="hidden lg:block" />
	        •	Exceptional professionalism and timely <br className="hidden lg:block" />
	        •	Wide range of African and continental <br className="hidden lg:block" />
	        •	Flexible delivery and catering options<br className="hidden lg:block" />
	        •	A passionate team committed to excellence<br className="hidden lg:block" />
          Let’s Make Your Next Meal or Event Flavourful

          We look forward to serving you! Whether you’re hosting a grand celebration or simply need a tasty, convenient meal, Susan Flavoured Kitchen is here to bring flavour, quality, and joy to your table.
        </p>
      </div>
    </section>
  );
};

export default Commitment;
