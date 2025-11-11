import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { LuInstagram } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import MasterCard from '../../assets/mastercard-transparent.png'
import Visa from '../../assets/visaimg-transparent.png'
import { NavLink } from "react-router-dom";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";


const Footer = () => {
    return (
        <section className='bg-[#ff6e00]'>
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-center flex-col py-10">
                    <ul className="flex justify-center items-center gap-10 text-white text-lg font-medium">
                        <li>
                            <Accordion
                             type="single"
                             collapsible
                             className="w-20"
                             defaultValue="item-1"
                            >
                                <AccordionItem value="item-1" className='border-none'>
                                    <div className="w-20 flex text-center">
                                        <AccordionTrigger className='text-white hover:text-[#343333] font-medium px-4 py-2 border-non shadow-none hover-no-underline focus:ring-0 focus:outline-none data-[state=open]:text-white'>
                                        <NavLink to="/"className='text-lg'>Menu</NavLink>
                                    </AccordionTrigger>
                                    </div>
                                </AccordionItem>
                            </Accordion>
                        </li>
                        <li>Event Catering</li>
                        <li>About Us</li>
                        <li>Contact</li>
                    </ul>

                    <p className="flex text-center justify-center items-center leading-relaxed my-4 tracking-wider text-white text-lg font-medium">
                        <span><HiOutlineDevicePhoneMobile /></span>
                        07387044524 | <span className='mx-1'><MdOutlineMail /></span>
                        Susanflavouredkitchen@gmail.com
                    </p>
                    <p className="flex text-center">
                        <img src={MasterCard} alt="" className='w-10' />
                        <img src={Visa} alt="" className='w-10' />

                    </p>

                    <div className="flex gap-5 mt-5 text-center text-white text-lg justify-center items-center">
                        <LuInstagram />
                        <div className="text-center flex flex-col justify-center items-center">
                            <FaWhatsapp />
                            <p className="">WhatsApp</p>
                        </div>
                    </div>
                </div>
                <p className="text-white text-lg font-medium">
                    © 2025 Susanflavouredkitchen. All rights reserved.
                </p>
            </div>
        </section>
    )
}

export default Footer