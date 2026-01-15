import React from 'react';
import { MdOutlineMail } from 'react-icons/md';
import { LuInstagram } from 'react-icons/lu';
import { FaWhatsapp } from 'react-icons/fa';
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import MasterCard from '../../assets/mastercard-transparent.png';
import Visa from '../../assets/visaimg-transparent.png';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
// import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <section className="bg-[#ff6e00] mt-80 ">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <div className="flex items-center justify-center flex-col py-10">
        <p className="text-center text-white font-poppins text-base md:text-lg leading-relaxed mb-6 max-w-xl">
  Hungry yet? <br />
  Explore our menu and taste the freshness of home – delivered to your door.
</p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
  <Link
    to="/menu"
    className="bg-white text-[#ff6e00] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
  >
    View Menu
  </Link>

  <Link
    to="/catering-quote"
    className="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-[#ff6e00] transition"
  >
    Request Catering
  </Link>
</div>

        <hr className="w-full border-white/40 mb-6" />
          <ul className="flex flex-wrap justify-center items-center gap-6 lg:gap-10 text-white text-base lg:text-lg font-medium">
            {/* Menu Accordion */}
            <li>
              <Accordion
                type="single"
                collapsible
                className="w-20"
                defaultValue="item-1"
              >
                <AccordionItem value="item-1" className="border-none">
                  <div className="w-20 flex text-center">
                    <AccordionTrigger className="text-white hover:text-[#343333] font-medium px-4 py-2 border-none shadow-none hover-no-underline focus:ring-0 focus:outline-none data-[state=open]:text-white">
                      <Link to="/" className="text-base lg:text-lg">
                        Menu
                      </Link>
                    </AccordionTrigger>
                  </div>
                </AccordionItem>
              </Accordion>
            </li>

            {/* Other links */}
            <li>
              <Link
                to="/catering-quote"
                className="hover:text-gray-200 transition-colors"
              >
                Event Catering
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-gray-200 transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="hover:text-gray-200 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Contact info */}
          <div className="flex flex-col lg:flex-row text-center justify-center items-center leading-relaxed my-4 tracking-wider text-white text-base lg:text-lg font-medium gap-2 lg:gap-0">
            <span className="flex items-center gap-2">
              <HiOutlineDevicePhoneMobile />
              +447387044524
            </span>
            <span className="hidden lg:block mx-1">|</span>
            <span className="flex items-center gap-2">
              <MdOutlineMail />
              info@susanflavouredkitchen.uk
            </span>
          </div>

          {/* Payment & Social */}
          <div className="flex items-center gap-3 mt-4 lg:mt-0">
            <img src={MasterCard} alt="MasterCard" className="w-10" />
            <img src={Visa} alt="Visa" className="w-10" />
            <LuInstagram className="text-xl text-white" />
          </div>
        </div>

        <p className="text-white text-sm lg:text-lg font-medium text-center pb-6 lg:pb-0">
          © 2025 Susanflavouredkitchen. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
