import { useCart } from '@/store/useCart';
import { getStepDetails } from '@/lib/utils';

const itemControl = ({ item }) => {
  const { updateItem, removeItem, loading } = useCart();
  const { step, isLitreItem } = getStepDetails(item);

  if (loading) return;

  const increase = () => {
    if (isLitreItem && item?.quantity >= 6) return; // Cap at 12L (6 units * 2L)
    updateItem(item?.productId, item?.quantity + 1);
  };

  const decrease = () => {
    if (item?.quantity === 1) {
      removeItem(item?.productId);
    } else {
      updateItem(item?.productId, item?.quantity - 1);
    }
  };

  return (
    <div className={` flex items-center gap-3 border rounded-lg px-3 py-1`}>
      <button
        className={`${loading ? 'cursor-not-allowed' : ' cursor-pointer'}`}
        onClick={decrease}
        disabled={loading}
      >
        −
      </button>

      <span className="font-medium whitespace-nowrap">
        {item?.quantity * step}
        {isLitreItem ? 'L' : ''}
      </span>

      <button
        className={`${loading ? 'cursor-not-allowed' : ' cursor-pointer'}`}
        onClick={increase}
        disabled={loading}
      >
        +
      </button>
    </div>
  );
};

export default itemControl;
