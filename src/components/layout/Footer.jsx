import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { LuInstagram } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import MasterCard from '../../assets/mastercard-transparent.png'
import Visa from '../../assets/visaimg-transparent.png'

const Footer = () => {
    return (
        <section className='bg-[#ff6e00]'>
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-center flex-col py-10">
                    <ul className="flex gap-10 text-white text-lg font-medium">
                        <li>Menu</li>
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