import React from "react";
import Navbar from "../../components/layout/Navbar";
import Egusi from "../../assets/egusi2.jpeg";
import MenuSection from "./components/MenuSection";
import MenuImg from "../../assets/menuimg.jpg";
import MenuSidebar from "./components/menuSidebar";
import Footer from "../../components/layout/Footer";
import Image2 from "../../assets/afangsoup.jpeg";
import Image3 from "../../assets/amalaEwedu.jpeg";
import Image4 from "../../assets/okrosoup.jpeg";
import Image5 from "../../assets/jollof-rice.jpg";
import Image6 from "../../assets/friedRice.jpeg";
import Image7 from "../../assets/riceStew2.jpeg";
import Image8 from "../../assets/chickenChps.jpeg";
import Image9 from "../../assets/doughnut.jpeg";
import Image10 from "../../assets/sharwarma.jpeg";
import Image11 from "../../assets/cake.jpeg";
import DrinksSection from "./components/DrinksSection";
import { MenuData } from "./MenuData";

const Menu = () => {
  return (
    <div className="bg-[#fffcfa] overflow-hidden">
      <Navbar />
      <div className="hidden lg:block mt-32">
        <div
          className="w-full my-4 h-40 bg-center bg-no-repeat bg-cover rounded-lg"
          style={{
            backgroundImage: `url(${MenuImg})`,
          }}
        >
          <div className="w-full h-full bg-black/60 text-center flex items-center justify-center text-white text-5xl font-bold">
            Our Menu
          </div>
        </div>
      </div>

      {/* MOBILE SEARCH AND FILTERS */}
      <div className="px-4 mt-24 mb-6 lg:hidden">
        {/* Search Bar */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Search Meals"
            className="w-2/3 md:flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button className="bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-700 whitespace-nowrap">
            Search
          </button>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap gap-4 pb-2">
          <label className="flex items-center gap-2 cursor-pointer has-[:checked]:text-orange-600">
            <input
              type="checkbox"
              className="w-5 h-5 accent-orange-600"
              defaultChecked
            />
            <span className="text-base font-medium text-gray-700">All</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer has-[:checked]:text-orange-600">
            <input type="checkbox" className="w-5 h-5 accent-orange-600" />
            <span className="text-base font-medium text-gray-700">
              Soups & Stews
            </span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer has-[:checked]:text-orange-600">
            <input type="checkbox" className="w-5 h-5 accent-orange-600" />
            <span className="text-base font-medium text-gray-700">Rice</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer has-[:checked]:text-orange-600">
            <input type="checkbox" className="w-5 h-5 accent-orange-600" />
            <span className="text-base font-medium text-gray-700">
              Breakfast
            </span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer has-[:checked]:text-orange-600">
            <input type="checkbox" className="w-5 h-5 accent-orange-600" />
            <span className="text-base font-medium text-gray-700">Drinks</span>
          </label>
        </div>
      </div>

      {/* FIRST THREE SECTIONS WITH SIDEBAR */}
      <section className="px-6 lg:px-12 mt-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">
          {/* Sidebar */}
          <MenuSidebar />

          {/* Food Sections */}
          <div className="space-y-8 lg:space-y-16">
            <MenuSection title="Soups & Stews" showMore items={MenuData.soup} />

            <hr className="border-gray-300" />

            <MenuSection title="Rice" showMore items={MenuData.rice} />

            <hr className="border-gray-300" />

            <MenuSection
              title="Snacks & Pastries"
              showMore
              items={MenuData.snacks}
            />
          </div>
        </div>
      </section>

      <DrinksSection title="Drinks" items={MenuData.drinks} />
      <div className="hidden lg:block">
        <Footer />
      </div>
    </div>
  );
};

export default Menu;
