import React from 'react'
import Navbar from '../../components/layout/Navbar'
import Egusi from "../../assets/egusi2.jpeg"
import MenuSection from "./components/MenuSection";
import MenuImg from "../../assets/menuimg.jpg"
import MenuSidebar from './components/menuSidebar';
import Footer from '../../components/layout/Footer';
import Image2 from '../../assets/afangsoup.jpeg'
import Image3 from '../../assets/amalaEwedu.jpeg'
import Image4 from '../../assets/okrosoup.jpeg'
import Image5 from '../../assets/jollof-rice.jpg'
import Image6 from '../../assets/friedRice.jpeg'
import Image7 from '../../assets/riceStew2.jpeg'
import Image8 from '../../assets/chickenChps.jpeg'
import Image9 from '../../assets/doughnut.jpeg'
import Image10 from '../../assets/sharwarma.jpeg'
import Image11 from '../../assets/cake.jpeg'
import DrinksSection from './components/DrinksSection';
import { MenuData } from './MenuData';






const Menu = () => {

    return (
        <div className='bg-[#fffcfa] overflow-hidden'>
            <Navbar />
            <div className="mt-32">

                <div className="w-full my-4 h-40 bg-center bg-no-repeat bg-cover rounded-lg" style={{
                    backgroundImage: `url(${MenuImg})`
                }}>
                    <div className="w-full h-full bg-black/60 text-center flex items-center justify-center text-white text-5xl font-bold">
                        Our Menu
                    </div>
                </div>
            </div>

            {/* FIRST THREE SECTIONS WITH SIDEBAR */}
            <section className="px-6 lg:px-12 mt-10">
                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">

                    {/* Sidebar */}
                    <MenuSidebar />

                    {/* Food Sections */}
                    <div className="space-y-16">

                        <MenuSection
                            title="Soups & Stews"
                            showMore
                            items={MenuData.soup}
                        />

                        <hr className="border-gray-300" />

                        <MenuSection
                            title="Rice"
                            showMore
                            items={MenuData.rice}
                        />

                        <hr className="border-gray-300" />

                        <MenuSection
                            title="Snacks & Pastries"
                            showMore
                            items={MenuData.snacks}
                        />
                    </div>
                </div>
            </section>


            <DrinksSection
                title="Drinks"
                items={MenuData.drinks}
            />
            <Footer />
        </div >
    )
}

export default Menu