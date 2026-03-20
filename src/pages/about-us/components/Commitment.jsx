import React from "react";
import Abt3 from "../../../assets/chefstory1.jpeg";

const Commitment = () => {
  return (
    <section className="mx-auto w-[90%] md:w-[85%] mt-16 flex flex-col gap-10">
      {/* Top Section: Photo and Our Commitment */}
      <div className="flex flex-col md:flex-row gap-[5%] items-stretch">
        <div className="w-full md:w-[45%]">
          <img
            src={Abt3}
            alt="Our Commitment"
            className="w-full h-full min-h-[300px] object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="w-full md:w-[50%] flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold pb-4 md:pb-6 font-poppins text-center md:text-left">
            Our Commitment
          </h2>
          <p className="font-poppins text-base md:text-xl leading-relaxed text-justify md:text-left">
            Susan Flavoured Kitchen is dedicated to providing high-quality, luxury catering services using the finest ingredients, prepared in a clean and professional environment. We strive to make every event we cater memorable, every meal delicious, and every client experience exceptional.
            <br /><br />
            Whatever your event or dining need, SFK is here to make it special, memorable, and worth every penny.
          </p>
        </div>
      </div>

      {/* Bottom Section: Services and Why Choose Us Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 border-t pt-10">
        <div>
          <h3 className="mb-6 text-2xl font-bold font-poppins text-orange-700">
            Our Services
          </h3>
          <div className="font-poppins text-base md:text-lg leading-relaxed">
            <p className="mb-4 text-gray-600">Over the years, SFK has expanded into a full-service catering company offering:</p>
            <ul className="space-y-3">
              <li className="flex gap-2"><span>•</span> <span>Event Catering for weddings, parties, corporate functions, and private gatherings (Indoor/Outdoor).</span></li>
              <li className="flex gap-2"><span>•</span> <span>Authentic African/Nigerian cuisine and international dishes.</span></li>
              <li className="flex gap-2"><span>•</span> <span>Meal Prep & Deliveries across the East Midlands and surrounding areas.</span></li>
              <li className="flex gap-2"><span>•</span> <span>Onsite Cooking for fresher, hotter, and flavour-rich event meals.</span></li>
              <li className="flex gap-2"><span>•</span> <span>Pastries & Desserts for all occasions.</span></li>
              <li className="flex gap-2"><span>•</span> <span>Signature non-alcoholic flavoured drinks (Sweet and fruity Zobo).</span></li>
              <li className="flex gap-2"><span>•</span> <span>Customised Menus tailored to your taste and event needs.</span></li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-2xl font-bold font-poppins text-orange-700">
            Why Choose Us?
          </h3>
          <ul className="space-y-4 font-poppins text-base md:text-lg leading-relaxed">
            <li className="flex gap-3 items-center p-3 bg-white rounded-lg shadow-sm border border-orange-50 underline-offset-4">
              <span className="text-orange-600 font-bold">✓</span>
              <span>Fresh, healthy, and delicious meals</span>
            </li>
            <li className="flex gap-3 items-center p-3 bg-white rounded-lg shadow-sm border border-orange-50">
              <span className="text-orange-600 font-bold">✓</span>
              <span>5-star hygiene rating</span>
            </li>
            <li className="flex gap-3 items-center p-3 bg-white rounded-lg shadow-sm border border-orange-50">
              <span className="text-orange-600 font-bold">✓</span>
              <span>Exceptional professionalism and timely service</span>
            </li>
            <li className="flex gap-3 items-center p-3 bg-white rounded-lg shadow-sm border border-orange-50">
              <span className="text-orange-600 font-bold">✓</span>
              <span>Wide range of African and continental options</span>
            </li>
            <li className="flex gap-3 items-center p-3 bg-white rounded-lg shadow-sm border border-orange-50">
              <span className="text-orange-600 font-bold">✓</span>
              <span>Flexible delivery and catering options</span>
            </li>
            <li className="flex gap-3 items-center p-3 bg-white rounded-lg shadow-sm border border-orange-50">
              <span className="text-orange-600 font-bold">✓</span>
              <span>A passionate team committed to excellence</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full text-center mt-10 p-10 bg-orange-600 rounded-3xl text-white">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Let’s Make Your Next Meal or Event Flavourful</h3>
        <p className="text-lg md:text-xl opacity-90">
          We look forward to serving you! Whether you’re hosting a grand celebration or simply need a tasty, convenient meal, Susan Flavoured Kitchen is here to bring flavour, quality, and joy to your table.
        </p>
      </div>
    </section>
  );
};

export default Commitment;
