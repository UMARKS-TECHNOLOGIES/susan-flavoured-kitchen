import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.jpeg'
import { MdOutlineSearch } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { GiShoppingCart } from "react-icons/gi";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    const navLinks = [
        {
            name: "Home",
            href: "#"
        },
        {
            name: "Menu",
            href: "#"
        },
        {
            name: "Event Catering",
            href: "#"
        },
        {
            name: "About Us",
            href: "#"
        },
        {
            name: "Contact",
            href: "#"
        },
    ];

    return (
        <nav className='bg-[#ffffff]'>
            <div className="max-w-7xl mx-auto py-4 flex justify-between items-center">
                <div className="">
                    <img src={Logo} alt="" className='w-15' />
                </div>
                <div className="">
                    {
                        navLinks.map((link) => {
                            return (
                                <NavLink
                                    key={link.name}
                                    to={link.href}
                                    className={(({ isActive }) => isActive ? 'text-orange-400 mx-4 font-medium' : "text-[#343333] hover:text-[#00004d] px-5 py-2 text-medium font-medium")}
                                >

                                    {link.name}
                                </NavLink>
                            )

                        })
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
                        <Link>
                            <GiShoppingCart className='text-2xl' />
                        </Link>
                        <span className='bg-orange-600 w-4 h-4 text-xs font-medium text-center absolute rounded-full top-3 left-3'>2</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar