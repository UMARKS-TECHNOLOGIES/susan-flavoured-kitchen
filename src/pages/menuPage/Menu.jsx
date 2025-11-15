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
              items={[
                  { name: "Egusi Soup", price: "₦2,500", image: `${Egusi}`, desc: "Rich melon seed soup simmered with assorted meat." },
                  { name: "Afang Soup", price: "₦2,800", image: `${Image2}`, desc: "Rich melon seed soup simmered with assorted meat." },
                  { name: "Banga Soup", price: "₦3,000", image: `${Image3}`, desc: "Rich melon seed soup simmered with assorted meat." },
                  { name: "Ogbono Soup", price: "₦2,700", image: `${Image4}`, desc: "Rich melon seed soup simmered with assorted meat." },
              ]}
            />

            <hr className="border-gray-300" />

            <MenuSection
              title="Rice"
              showMore
              items={[
                  { name: "Jollof Rice", price: "₦2,000", image: `${Image5}`, desc: "Rich melon seed soup simmered with assorted meat." },
                  { name: "Fried Rice", price: "₦2,200", image: `${Image6}`, desc: "Rich melon seed soup simmered with assorted meat." },
                  { name: "Coconut Rice", price: "₦2,400", image: `${Image7}`, desc: "Rich melon seed soup simmered with assorted meat." },
                  { name: "Ofada Rice", price: "₦2,600", image: `${Image8}`, desc: "Rich melon seed soup simmered with assorted meat." },
              ]}
            />

            <hr className="border-gray-300" />

            <MenuSection
              title="Snacks & Pastries"
              showMore
              items={[
                  { name: "Meat Pie", price: "₦800", image: `${Image9}`, desc: "Rich melon seed soup simmered with assorted meat." },
                  { name: "Puff Puff", price: "₦600", image: `${Image10}`, desc: "Rich melon seed soup simmered with assorted meat." },
                  { name: "Spring Roll", price: "₦700", image: `${Egusi}`, desc: "Rich melon seed soup simmered with assorted meat." },
                  { name: "Chin Chin", price: "₦500", image: `${Image11}`, desc: "Rich melon seed soup simmered with assorted meat." },
              ]}
            />
          </div>
        </div>
      </section>

    
      <DrinksSection
        title="Drinks"
        items={[
            { name: "Zobo Drink", price: "₦500", image: `${Egusi}`, desc: "Rich melon seed soup simmered with assorted meat."},
            { name: "Chapman", price: "₦1,000", image: `${Egusi}`, desc: "Rich melon seed soup simmered with assorted meat." },
            { name: "Coke", price: "₦400", image: `${Egusi}`, desc: "Rich melon seed soup simmered with assorted meat." },
        ]}
      />

            <Footer />
        </div >
    )
}

export default Menu