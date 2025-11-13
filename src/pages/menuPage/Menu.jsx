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





const Menu = () => {
    return (
        <div className='bg-[#fffcfa] pt-4 overflow-hidden'>
            <Navbar />
            <div className="w-full my-4 h-40 bg-center bg-no-repeat bg-cover rounded-lg" style={{
                backgroundImage: `url(${MenuImg})`
            }}>
                <div className="w-full h-full bg-black/60 text-center flex items-center justify-center text-white text-5xl font-bold">
                    Our Menu
                </div>
            </div>

            <section className=" min-h-screen py-10 px-6 lg:px-12">
                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8">

                    <MenuSidebar />
                    {/* Main Menu Content */}
                    <div className="space-y-12">
                        <MenuSection
                            title="Soups & Stews"
                            items={[
                                { name: "Egusi Soup & Pounded Yam", price: "₦2,500", image: `${Egusi}`, paragraph: "Rich melon soup simmered with assorted meat." },
                                { name: "Afang Soup", price: "₦2,800", image: `${Image2}`, paragraph: "Rich melon soup simmered with assorted meat." },
                                { name: "Amala & Ewedu", price: "₦3,000", image: `${Image3}`, paragraph: "Rich melon soup simmered with assorted meat." },
                                { name: "Okro Soup", price: "₦2,700", image: `${Image4}`, paragraph: "Rich melon soup simmered with assorted meat." },
                            ]}
                        />

                        <hr className="border-t border-gray-300 my-6" />

                        <MenuSection
                            title="Rice Dishes"
                            items={[
                                { name: "Jollof Rice & Grilled chicken", price: "₦2,000", image: `${Image5}`, paragraph: "Flaky pastry filled with seasoned minced meat." },
                                { name: "Fried Rice", price: "₦2,200", image: `${Image6}`, paragraph: "Flaky pastry filled with seasoned minced meat." },
                                { name: "Rice & stew", price: "₦2,400", image: `${Image7}`, paragraph: "Flaky pastry filled with seasoned minced meat." },
                                { name: "Ofada Rice", price: "₦2,600", image: `${Image6}`, paragraph: "Flaky pastry filled with seasoned minced meat." },
                            ]}
                        />

                        <hr className="border-t border-gray-300 my-6" />

                        <MenuSection
                            title="Snacks & Pastries"
                            items={[
                                { name: "Chicken and chips", price: "₦800", image: `${Image8}`, paragraph: "Flaky pastry filled with seasoned minced meat." },
                                {
                                    name: "doughnut", price: "₦600", image: `${Image9}`, paragraph: "Long-grain rice cooked in our signature smoky pepper base."
                                },
                                { name: "sharwarma", price: "₦500", image: `${Image10}`, paragraph: "Long-grain rice cooked in our signature smoky pepper base." },
                                { name: "cake", price: "₦1000", image: `${Image11}`, paragraph: "Long-grain rice cooked in our signature smoky pepper base." },
                            ]}

                        />
                    </div>
                </div>
            </section>
            <section className="py-10 px-6 lg:px-12">
                <hr className="border-t border-gray-300 my-6" />
                <div className="max-w-6xl mx-auto grid grid-cols-1 ">
                    <MenuSection
                        title="Drinks"
                        items={[
                            { name: "Chicken and chips", price: "₦800", image: `${Image8}`, paragraph: "Flaky pastry filled with seasoned minced meat." },
                            {
                                name: "doughnut", price: "₦600", image: `${Image9}`, paragraph: "Long-grain rice cooked in our signature smoky pepper base."
                            },
                            { name: "sharwarma", price: "₦500", image: `${Image10}`, paragraph: "Long-grain rice cooked in our signature smoky pepper base." },
                        ]}

                    />

                </div>

            </section>

            <Footer />
        </div>
    )
}

export default Menu