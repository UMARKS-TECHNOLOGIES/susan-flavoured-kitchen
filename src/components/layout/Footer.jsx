import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { LuInstagram } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import MasterCard from "../../assets/mastercard-transparent.webp";
import Visa from "../../assets/visaimg-transparent.webp";
import { NavLink } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Footer = () => {
  return (
    <section className="bg-[#ff6e00] mt-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <div className="flex items-center justify-center flex-col py-10">
          <ul className="flex flex-wrap justify-center items-center gap-6 lg:gap-10 text-white text-base lg:text-lg font-medium">
            <li>
              <Accordion
                type="single"
                collapsible
                className="w-20"
                defaultValue="item-1"
              >
                <AccordionItem value="item-1" className="border-none">
                  <div className="w-20 flex text-center">
                    <AccordionTrigger className="text-white hover:text-[#343333] font-medium px-4 py-2 border-non shadow-none hover-no-underline focus:ring-0 focus:outline-none data-[state=open]:text-white">
                      <NavLink to="/" className="text-base lg:text-lg">
                        Menu
                      </NavLink>
                    </AccordionTrigger>
                  </div>
                </AccordionItem>
              </Accordion>
            </li>
            <li>Event Catering</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>

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
          <div className="flex items-center gap-3 mt-4 lg:mt-0">
            <img src={MasterCard} alt="" className="w-10" />
            <img src={Visa} alt="" className="w-10" />
            <LuInstagram className="text-xl text-white " />
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
