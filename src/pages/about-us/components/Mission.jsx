import React from "react";
import Abt3 from "@/assets/Abt3.svg";

const Mission = () => {
  return (
    <section className="w-[90%] md:w-[85%] mt-10 flex flex-col md:flex-row mx-auto gap-[5%] md:gap-0">
      
      
<div className="w-full md:w-[40%] mb-8 md:mb-0 md:mr-12">
  <img
    src={Abt3}
    alt=""
    className="w-full h-full object-cover rounded-lg"
  />
</div>


      {/* Text content */}
      <div className="w-full md:w-[60%] flex flex-col justify-center">

        {/* Our Mission */}
        <h2 className="text-2xl md:text-3xl font-bold pb-4 md:pb-8 font-poppins text-center md:text-left">
          Our Mission
        </h2>

        <p className="font-poppins text-base md:text-xl leading-relaxed md:leading-loose text-justify md:text-left">
          Our mission is to serve delicious, premium-quality, freshly prepared meals
          that make homes happier and events unforgettable. Whether you're ordering
          a simple lunch pack or booking us for an event, we aim to offer food that
          brings comfort, excitement, and satisfaction.
        </p>

        {/* Spacer between sections */}
        <div className="mt-12 md:mt-16" />

        {/* We Stand For */}
        <h2 className="text-2xl md:text-3xl font-bold pb-6 font-poppins text-center md:text-left">
          We Stand For
        </h2>

        <p className="font-poppins text-base md:text-xl leading-relaxed md:leading-loose text-justify md:text-left space-y-6">
          <span className="block">
            <span className="font-bold">Quality & Freshness:</span><br />
            We prepare every dish using carefully selected ingredients and cook in
            a clean, safe environment. As a 5-star hygiene rated business by the UK
            Food Standards Agency, we hold ourselves to the highest standards.
          </span>

          <span className="block">
            <span className="font-bold">Customer Satisfaction:</span><br />
            Your happiness is our priority. Our goal is to leave a lasting smile of
            satisfaction on the faces of our clients and their guests.
          </span>

          <span className="block">
            <span className="font-bold">Culture & International Flavours:</span><br />
            From authentic African/Nigerian dishes to beautifully crafted continental
            meals, pastries, and desserts—we cater to a wide range of tastes.
          </span>

          <span className="block">
            <span className="font-bold">Convenience & Flexibility:</span><br />
            We offer deliveries and pickups, takeaway options, onsite cooking for
            events, and meal prep designed to fit your lifestyle.
          </span>

          <span className="block">
            <span className="font-bold">Community & Connection:</span><br />
            Food connects people, and we love being part of moments that bring
            families, friends, and communities together.
          </span>
        </p>

      </div>
    </section>
  );
};

export default Mission;
