import React from 'react'
import { Button } from "@/components/ui/button";
import Image8 from '../../../assets/chickenChps.jpeg'


const items = [
    {
        name: "Zobo Drink",
        price: "£1.80",
        img: Image8,
        desc: "Hibiscus drink infused with ginger and pineapple.",
    },
    {
        name: "Moi-moi",
        price: "£1.80",
        img: Image8,
        desc: "Silky-smooth Moi Moi made from beans.",
    },
    {
        name: "Zobo Drink",
        price: "£1.80",
        img: Image8,
        desc: "Hibiscus drink infused with ginger and pineapple.",
    },
];


const GoesWellWith = () => {
  return (
      <section className="space-y-5 max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#000040]">Goes Well With:</h2>

          <div className="flex overflow-x-auto gap-5 pb-3">
              {items.map((item, idx) => (
                  <div
                      key={idx}
                      className=" bg-white rounded-lg shadow-sm border border-gray-200 p-4 space-y-3"
                  >
                    <div className="flex items-center justify-center">
                      <img src={item.img} className="w-40 h-40 object-cover bg-center rounded-full" />
                    </div>

                      <h3 className="font-bold text-2xl">{item.name}</h3>
                      <p className="text-xl text-gray-600 font-medium mb-4">{item.desc}</p>

                      <div className="flex justify-between items-center">
                          <span className="font-bold text-lg text-gray-900 mb-3">{item.price}</span>
                          <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                              Add to Cart
                          </Button>
                      </div>
                  </div>
              ))}
          </div>
      </section>
  )
}

export default GoesWellWith