import React from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/layout/Footer";

const Footer2 = () => {
  return (
    <footer className="h-[80vh] bg-[#FF6E00] mt-15">
      <div className="px-15 py-14 ">
        <div>
          <h2 className="font-poppins text-3xl font-bold text-white">
            Hungry yet? <br /> Explore our menu and taste the freshness <br />{" "}
            of home — delivered to your door.
          </h2>
        </div>

        <div className="flex mx-auto w-[40%] mt-20  m-auto ">
          <div className="w-full flex items-center gap-4 justify-center">
            <Link className="bg-white  text-orange-400   hover:bg-transparent hover:text-white   font-bold  px-3 py-2 rounded rounded-tr-none rounded-bl-none cursor-pointer">
              View Menu
            </Link>

            <Link className="bg-transparent  text-white px-3 py-2 ml-3   hover:bg-transparent hover:text-white border rounded-tr-none rounded-bl-none rounded cursor-pointer">
              Request Cathering
            </Link>
          </div>
        </div>
      </div>

      <div className="border w-full"></div>

      <Footer />
    </footer>
  );
};

export default Footer2;
