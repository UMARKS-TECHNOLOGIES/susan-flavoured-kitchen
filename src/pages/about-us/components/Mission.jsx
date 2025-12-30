import React from "react";
import Abt3 from "@/assets/Abt3.svg";
const Mission = () => {
  return (
    <section className="w-[90%] md:w-[85%] mt-10 flex flex-col md:flex-row mx-auto gap-[5%] md:gap-0">
      <h2 className="text-2xl font-bold pb-4 font-poppins text-center w-full md:hidden order-1">
        Our Mission
      </h2>

      <div className="w-full md:w-[40%] mb-4 md:mb-0 flex justify-center md:justify-start order-2 md:order-1">
        <img
          src={Abt3}
          className="object-contain h-[300px] md:h-[340px]"
          alt=""
        />
      </div>

      <div className="w-full md:w-[60%] flex flex-col align-center justify-center order-3 md:order-2">
        <h2 className="text-3xl font-bold pb-8 font-poppins text-left hidden md:block">
          Our Mission
        </h2>
        <p className="font-poppins text-base md:text-xl text-justify md:text-left leading-relaxed">
        Our mission is to serve delicious, premium-quality, freshly prepared meals that make homes happier and events unforgettable. Whether you’re ordering a simple lunch pack or booking us for your events, we aim to offer food that brings comfort, excitement, and satisfaction.
        <br className="hidden lg:block" />
<br className="hidden lg:block" />
<h2 className="text-3xl font-bold pb-5 font-poppins text-left hidden md:block">
          We Stand For
        </h2>
Quality & Freshness:<br className="hidden lg:block" />
We prepare every dish using carefully selected ingredients and cook in a clean, safe environment. As a 5-star hygiene rated business by the UK Food Standards Agency, we hold ourselves to the highest standards.
<br className="hidden lg:block" />
<br className="hidden lg:block" />
Customer Satisfaction:<br className="hidden lg:block" />
Your happiness is our priority. Our goal is to leave a “lasting smile of satisfaction” on the faces of our clients and their guests.
<br className="hidden lg:block" />
<br className="hidden lg:block" />
Cultural & International Flavours:<br className="hidden lg:block" />
From authentic African/Nigerian dishes to beautifully crafted continental meals, pastries, and desserts—we cater to a wide range of tastes and preferences.
<br className="hidden lg:block" />
<br className="hidden lg:block" />
Convenience & Flexibility:<br className="hidden lg:block" />
We offer deliveries and pickups, takeaway options, onsite cooking for events, and meal preps designed to fit your lifestyle.
<br className="hidden lg:block" />
<br className="hidden lg:block" />
Community & Connection:<br className="hidden lg:block" />
Food connects people, and we love being part of moments that bring families, friends, and communities together.
        </p>
      </div>
    </section>
  );
};

export default Mission;
