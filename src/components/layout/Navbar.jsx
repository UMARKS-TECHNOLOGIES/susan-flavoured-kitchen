import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.jpeg'
import { MdOutlineSearch } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { GiShoppingCart } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";



const Navbar = () => {
    const navLinks = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "Menu",
            dropdown: [
                { name: "Breakfast", path: "/menu" },
                { name: "Lunch", path: "/menu/lunch" },
                { name: "Dinner", path: "/menu/dinner" },
            ],
            href: "/menu"
        },
        {
            name: "Event Catering",
            href: "/events"
        },
        {
            name: "About Us",
            href: "/about"
        },
        {
            name: "Contact",
            href: "/contact"
        },
    ];

    return (
        <nav className='bg-[#ffffff] fixed top-0 left-0 w-full z-50 shadow-md'>
            <div className="max-w-7xl mx-auto py-4 flex justify-between items-center">
                <div className="">
                    <img src={Logo} alt="" className='w-15' />
                </div>
                <div className="flex items-center justify-center text-center">
                    {
                        navLinks.map((link) => link.dropdown ? (
                            <Accordion
                                key={link.name}
                                type="single"
                                collapsible
                                className="w-20"
                                defaultValue="item-1"
                            >
                                <AccordionItem value="item-1" className="border-none">
                                    <div className="w-20 ">
                                        {/* <NavLink to={link.href}> */}
                                            <AccordionTrigger className="text-[#343333] hover:text-orange-600 font-medium px-4 py-2 border-none shadow-none hover:no-underline focus:ring-0 focus:outline-none data-[state=open]:text-orange-600">{link.name}</AccordionTrigger>
                                            {link.dropdown.map((item) => (

                                                <AccordionContent
                                                    key={item.name}
                                                    asChild
                                                    className="hover:bg-orange-50 hover:text-orange-600 cursor-pointer"
                                                >
                                                    <NavLink to={item.path}>{item.name}</NavLink>
                                                </AccordionContent>
                                            ))}
                                        {/* </NavLink> */}
                                    </div>
                                </AccordionItem>
                            </Accordion>) : (
                            <NavLink
                                key={link.name}
                                to={link.href}
                                className={(({ isActive }) => isActive ? 'text-orange-400 mx-4 font-medium' : "text-[#343333] hover:text-[#00004d] px-5 py-2 text-medium font-medium")}
                            >

                                {link.name}
                            </NavLink>
                        )
                        )
                    }
                </div>

                <div className="flex items-center justify-center space-x-4 ">
                    <div className="">
                        <MdOutlineSearch className='text-2xl' />
                    </div>
                    <div className="">
                        <BsPerson className='text-2xl' />
                    </div>
                    <div className="relative">
                        <Link to={"/cart"}>
                            <GiShoppingCart className='text-2xl' />
                        </Link>
                        <span className='bg-orange-600 w-4 h-4 text-xs font-medium text-center absolute rounded-full top-3 left-3'>2</span>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar