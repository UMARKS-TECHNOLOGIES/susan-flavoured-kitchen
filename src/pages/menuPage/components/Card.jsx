import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import api from '@/lib/api';
import { API } from '@/lib/endpoints';

const Card = ({ product, item }) => {
  const data = product || item;

  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);

  const addToCart = async () => {
    if (loading || added) return;

    try {
      setLoading(true);

      const res = await api.post(`${API.CART}/add-to-cart`, {
        productId: data.id,
        quantity: 1,
      });

      if (res.status !== 200) {
        console.log('Res:', res.data.message);
        setAdded(false);
        reportError(res.data.message);
        return;
      }

      setAdded(true);
      setTimeout(() => {
        setAdded(false);
      }, 2000);
    } catch (err) {
      console.error('Add to cart failed', err);
      reportError(err.message || 'Add to cart failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-2 md:p-4 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center justify-center">
        <Link to={`/product/${data.id}`}>
          <img
            src={data.image}
            alt={data.name}
            className="w-24 h-24 md:w-40 md:h-40 object-cover rounded-full mb-2 md:mb-3"
          />
        </Link>
      </div>

      <h2 className="font-bold text-sm md:text-2xl">{data.name}</h2>
      <p className="text-gray-600 text-xs md:text-xl font-medium mb-1 md:mb-2 line-clamp-2">
        {data.description}
      </p>

      <div className="flex justify-between items-center gap-1 md:gap-2">
        <p className="font-bold text-xs md:text-lg text-gray-900">
          £{data.price.toFixed(2)}
        </p>

        <Button
          onClick={addToCart}
          disabled={loading}
          size="sm"
          className={`py-1 px-1.5 md:px-3 text-[10px] md:text-sm rounded-md
            ${
              added
                ? 'bg-green-600 hover:bg-green-600'
                : 'bg-orange-600 hover:bg-orange-700'
            }`}
        >
          {loading ? 'Adding...' : added ? 'Added ✓' : 'Add to Cart'}
        </Button>
      </div>
    </div>
  );
};

export default Card;
