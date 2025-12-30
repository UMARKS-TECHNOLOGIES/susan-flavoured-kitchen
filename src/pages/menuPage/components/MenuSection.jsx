import React from 'react';
import Card from './Card';

const MenuSection = ({ title, items = [], showMore }) => {
  // Safety check for items
  if (!items || items.length === 0) {
    return (
      <section className="w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-[#00004d]">{title}</h2>
        </div>
        <p className="text-center text-gray-500 py-8">No items available</p>
      </section>
    );
  }

  return (
    <section className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg md:text-3xl font-bold text-[#00004d]">
          {title}
        </h2>
        {showMore && (
          <button className="text-orange-600 font-bold text-sm md:text-xl hover:text-orange-700">
            See More &gt;
          </button>
        )}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 md:gap-6">
        {items.map(item => {
          // Safety check for each item
          if (!item || !item.id) {
            console.warn('MenuSection: Skipping invalid item', item);
            return null;
          }

          return <Card key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
};

export default MenuSection;
