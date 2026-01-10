import { useCart } from '@/store/useCart';

const itemControl = ({ item }) => {
  const { updateItem, removeItem, loading } = useCart();
  if (loading) return;

  const increase = () => {
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

      <span className="font-medium">{item?.quantity}</span>

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
