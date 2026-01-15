import React from "react";
import Abt3 from "../../../assets/chefstory1.jpeg";

const Commitment = () => {
  return (
    <section className="mx-auto w-[90%] md:w-[85%] mt-10 md:mt-15 flex flex-col md:flex-row gap-[10%] items-stretch">
      
      {/* Mobile title */}
      <h2 className="text-2xl font-bold pb-4 font-poppins text-center w-full md:hidden">
        Our Commitment
      </h2>

      {/* Image */}
      <div className="w-full md:w-[50%] mb-6 md:mb-0">
        <img
          src={Abt3}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Text */}
      <div className="w-full md:w-[50%] flex flex-col justify-center">
        
        {/* Desktop title */}
        <h2 className="text-2xl font-bold pb-8 font-poppins hidden md:block">
          Our Commitment
        </h2>

        <p className="font-poppins text-base md:text-xl leading-relaxed text-justify md:text-left">
          Susan Flavoured Kitchen is dedicated to providing high-quality, luxury
          catering services using the finest ingredients, prepared in a clean
          and professional environment. We strive to make every event we cater
          memorable, every meal delicious, and every client experience
          exceptional.
        </p>

        {/* Services */}
        <h3 className="mt-10 mb-4 text-xl md:text-2xl font-bold font-poppins">
          Our Services
        </h3>

        <ul className="list-disc pl-6 space-y-3 font-poppins text-base md:text-lg leading-relaxed">
          <li>Event catering for weddings, parties, corporate functions, birthdays, and private gatherings (indoor & outdoor).</li>
          <li>African/Nigerian cuisine and international dishes.</li>
          <li>Meal prep, deliveries, and pickups across the East Midlands and surrounding areas.</li>
          <li>Onsite cooking for fresher, hotter, flavour-rich event meals.</li>
          <li>Pastries and desserts for all occasions.</li>
          <li>Signature non-alcoholic flavoured drinks and teas (sweet and fruity Zobo).</li>
          <li>Customised menus tailored to your taste and event needs.</li>
        </ul>

        {/* Why Choose Us */}
        <h3 className="mt-12 mb-4 text-xl md:text-2xl font-bold font-poppins">
          Why Choose Us
        </h3>

        <ul className="list-disc pl-6 space-y-3 font-poppins text-base md:text-lg leading-relaxed">
          <li>Fresh, healthy, and delicious meals.</li>
          <li>5-star hygiene rating.</li>
          <li>Exceptional professionalism and timely service.</li>
          <li>Wide range of African and continental cuisine.</li>
          <li>Flexible delivery and catering options.</li>
          <li>A passionate team committed to excellence.</li>
        </ul>

        {/* Closing */}
        <p className="mt-8 font-poppins text-base md:text-lg leading-relaxed">
          <span className="font-bold">Let’s make your next meal or event flavourful.</span>
          <br /><br />
          We look forward to serving you! Whether you’re hosting a grand celebration
          or simply need a tasty, convenient meal, Susan Flavoured Kitchen is here
          to bring flavour, quality, and joy to your table.
        </p>

        <p className="mt-8 font-poppins text-base md:text-lg leading-relaxed">
          <span className="font-bold">For bookings.</span>
          <br /><br />
          please contact us—we are excited to work with you!
        </p>

      </div>
    </section>
  );
};

export default Commitment;
