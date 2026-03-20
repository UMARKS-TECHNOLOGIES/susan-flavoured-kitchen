import React from "react";
import Abt3 from "@/assets/Abt3.svg";

const Mission = () => {
  return (
    <section className="w-[90%] md:w-[85%] mt-16 mx-auto flex flex-col gap-10">
      {/* Top Section: Photo and Our Mission */}
      <div className="flex flex-col md:flex-row gap-[5%] items-stretch">
        <div className="w-full md:w-[45%]">
          <img
            src={Abt3}
            alt="Our Mission"
            className="w-full h-full min-h-[300px] object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="w-full md:w-[50%] flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold pb-4 md:pb-6 font-poppins text-center md:text-left">
            Our Mission
          </h2>
          <p className="font-poppins text-base md:text-xl leading-relaxed text-justify md:text-left">
            Our mission is to serve delicious, premium-quality, freshly prepared meals that make homes happier and events unforgettable. Whether you’re ordering a simple lunch pack or booking us for your events, we aim to offer food that brings comfort, excitement, and satisfaction.
          </p>
        </div>
      </div>

      {/* Bottom Section: We Stand For Full Width */}
      <div className="w-full">
        <h2 className="text-2xl md:text-3xl font-bold pb-6 font-poppins text-center md:text-left border-t pt-10">
          We Stand For
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-orange-50 rounded-xl border border-orange-100 shadow-sm">
            <span className="font-bold text-xl block mb-2 text-orange-700">Quality & Freshness</span>
            <p className="text-base md:text-lg leading-relaxed">
              We prepare every dish using carefully selected ingredients and cook in a clean, safe environment. As a 5-star hygiene rated business by the UK Food Standards Agency, we hold ourselves to the highest standards.
            </p>
          </div>

          <div className="p-6 bg-orange-50 rounded-xl border border-orange-100 shadow-sm">
            <span className="font-bold text-xl block mb-2 text-orange-700">Customer Satisfaction</span>
            <p className="text-base md:text-lg leading-relaxed">
              Your happiness is our priority. Our goal is to leave a “lasting smile of satisfaction” on the faces of our clients and their guests.
            </p>
          </div>

          <div className="p-6 bg-orange-50 rounded-xl border border-orange-100 shadow-sm">
            <span className="font-bold text-xl block mb-2 text-orange-700">Cultural & International Flavours</span>
            <p className="text-base md:text-lg leading-relaxed">
              From authentic African/Nigerian dishes to beautifully crafted continental meals, pastries, and desserts—we cater to a wide range of tastes and preferences.
            </p>
          </div>

          <div className="p-6 bg-orange-50 rounded-xl border border-orange-100 shadow-sm">
            <span className="font-bold text-xl block mb-2 text-orange-700">Convenience & Flexibility</span>
            <p className="text-base md:text-lg leading-relaxed">
              We offer deliveries and pickups, takeaway options, onsite cooking for events, and meal preps designed to fit your lifestyle.
            </p>
          </div>

          <div className="p-6 bg-orange-50 rounded-xl border border-orange-100 shadow-sm">
            <span className="font-bold text-xl block mb-2 text-orange-700">Community & Connection</span>
            <p className="text-base md:text-lg leading-relaxed">
              Food connects people, and we love being part of moments that bring families, friends, and communities together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
