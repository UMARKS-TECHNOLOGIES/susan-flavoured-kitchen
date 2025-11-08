import React from 'react'
import { Button } from '../../../components/ui/button';
import Soup from "../../../assets/image2.png";
import Drink from "../../../assets/image3.png";
import Rice from "../../../assets/image4.png";
import Events from "../../../assets/image7.jpg"
import Cakes from "../../../assets/image5.jpg"
import Pastries from "../../../assets/image6.png"


const Categories = () => {
  const categoryItems = [
    {
      id: 1,
      name: 'Soup & Stews',
      imageUrl: Soup,
    },
    {
      id: 2,
      name: 'Drinks',
      imageUrl: Drink,
    },
    {
      id: 3,
      name: 'Rice Dishes',
      imageUrl: Rice,
    },
    {
      id: 4,
      name: 'Event Catering',
      imageUrl: Events,
    },
    {
      id: 5,
      name: 'Cakes',
      imageUrl: Cakes,
    },
    {
      id: 4,
      name: 'Pastries',
      imageUrl: Pastries,
    },
  ];

  return (
    <section >
      <div className="max-w-5xl mx-auto">
        <h3 className='text-2xl font-medium'>Categories</h3>
        <div className="my-4 grid grid-cols-3 space-y-4">
          {categoryItems.map((items) => (
          <div key={items.id} className="relative w-80 h-80 items-center text-center flex justify-center bg-cover bg-no-repeat rounded-br-lg rounded-tl-lg" style={{
            backgroundImage: `url(${items.imageUrl})`,
          }}>
            <div className="bg-white/70 px-10 py-10 rounded-br-lg rounded-tl-lg">
              <h3 className='text-lg font-medium'>{items.name}</h3>
              <Button
                className="my-4 bg-orange-600 rounded-br-lg rounded-tl-lg cursor-pointer hover:bg-orange-500 text-white font-medium"
                size="lg"
              >
                View Menu
              </Button>
            </div>
          </div>
          ))

          }
        </div>
      </div>
    </section>

  )
}

export default Categories