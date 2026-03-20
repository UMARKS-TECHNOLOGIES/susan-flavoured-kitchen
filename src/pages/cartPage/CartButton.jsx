import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/store/useCart';

const CartButton = ({ item }) => {
  const { addItem, loadingId } = useCart();

  // Extract liter amount from name (e.g., "Coke 2L" -> 2)
  const literMatch = item?.name?.match(/(\d+)L/i);
  let step = literMatch ? parseInt(literMatch[1]) : 1;
  if (step === 4) step = 2;
  const isLitreItem = !!literMatch;

  const [qty, setQty] = useState(isLitreItem ? step : 1);

  const isUpdating = loadingId === item._id;
  const isUnavailable = !item.available;

  const handleAdd = async () => {
    // If it's a liter item, we send the number of units (total liters / liter-per-unit)
    const finalQty = isLitreItem ? Math.floor(qty / step) : qty;
    await addItem(item._id, finalQty);
  };

  const increment = () => {
    setQty(prev => prev + step);
  };

  const decrement = () => {
    if (qty > step) {
      setQty(prev => prev - step);
    } else if (!isLitreItem && qty > 1) {
      setQty(prev => prev - 1);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {/* Add / Update Cart */}
      <Button
        onClick={handleAdd}
        disabled={isUnavailable || isUpdating}
        className="bg-orange-600 hover:bg-orange-500 text-white rounded-lg"
      >
        {isUpdating ? 'Adding...' : 'Add to Cart'}
      </Button>

      {/* Quantity Control */}
      {!isUnavailable && (
        <div className="flex items-center gap-2 mt-1">
          <Button
            size="sm"
            onClick={decrement}
            disabled={(isLitreItem ? qty <= step : qty <= 1) || isUpdating}
          >
            -
          </Button>
          <span className="px-2 font-medium">
            {qty}
            {isLitreItem ? 'L' : ''}
          </span>
          <Button size="sm" onClick={increment} disabled={isUpdating}>
            +
          </Button>
        </div>
      )}
    </div>
  );
};

export default CartButton;
