import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';
import ProductAccordion from './ProductAccordion';
import StarRating from '../../../components/layout/StarRating';
import { useCart } from '../../../store/useCart';
import { formatItemName, getStepDetails } from '@/lib/utils';

const ProductHeader = ({ product, item }) => {
  const { addItem, getItemQuantity } = useCart();

  const data = product || item;
  const { step, isLitreItem } = getStepDetails(data);

  // Cleanup name to remove bracketed liter info
  const cleanName = formatItemName(data?.name);

  const [localQuantity, setLocalQuantity] = useState(isLitreItem ? step : 1);

  if (!data) {
    console.error('ProductHeader: No product/item prop provided');
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p className="text-gray-500">Product not found</p>
      </div>
    );
  }

  if (!data._id && !data.id) {
    console.error('ProductHeader: Product missing id', data);
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p className="text-gray-500">Invalid product data</p>
      </div>
    );
  }

  const id = data._id || data.id;
  const cartQuantity = getItemQuantity ? getItemQuantity(id) : 0;

  const handleAddToCart = async () => {
    // Convert liters back to units for the backend if needed
    const finalQty = isLitreItem ? Math.floor(localQuantity / step) : localQuantity;
    await addItem(id, finalQty);
    setLocalQuantity(isLitreItem ? step : 1);
  };

  return (
    <section className="flex flex-col md:grid md:grid-cols-2 gap-10 mt-28 md:mt-32 max-w-7xl mx-auto px-4 pb-10">
      <div className="w-full md:w-[80%] mx-auto bg-white flex items-center justify-center py-8 md:py-16 rounded-xl shadow-sm md:shadow-none border md:border-none border-gray-100">
        <img
          src={data.image}
          alt={data.name}
          className="w-full max-w-[300px] md:max-w-none rounded-xl object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="w-full space-y-5">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight text-center md:text-left">
          {cleanName}
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-4">
          <p className="text-2xl font-bold">£{data.price.toLocaleString()}</p>
          <div className="text-sm text-gray-500 flex gap-1 items-center">
            <StarRating rating={5} size="md" />
            <span className="text-lg font-medium">(95 Reviews)</span>
          </div>
        </div>

        {cartQuantity > 0 && (
          <div className="mb-3 p-3 bg-green-50 rounded-lg text-center md:text-left">
            <p className="text-sm text-green-700 font-medium">
              {cartQuantity} item{cartQuantity > 1 ? 's' : ''} in cart
            </p>
          </div>
        )}

        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setLocalQuantity(Math.max(step, localQuantity - step))}
              className="w-10 h-10 border-orange-500 text-orange-500"
            >
              <Minus className="w-4 h-4" />
            </Button>
            <div className="px-3 h-10 border-2 border-orange-500 text-orange-500 rounded flex items-center justify-center font-bold whitespace-nowrap">
              {localQuantity}{isLitreItem ? 'L' : ''}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                if (isLitreItem && localQuantity >= 12) return;
                setLocalQuantity(localQuantity + step);
              }}
              className="w-10 h-10 border-orange-500 text-orange-500"
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>

          <Button
            onClick={handleAddToCart}
            className="flex-1 bg-orange-600 hover:bg-orange-500 text-white h-12 rounded-lg text-lg font-semibold"
          >
            Add to Cart
          </Button>

          <CartButton item={data} />
        </div>

        <ProductAccordion product={data} />
      </div>
    </section>
  );
};

export default ProductHeader;
