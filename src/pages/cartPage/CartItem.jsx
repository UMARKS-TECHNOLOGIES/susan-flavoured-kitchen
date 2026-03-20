import { API } from '@/lib/endpoints';
import QuantityControl from './QuantityControl';
import { useCart } from '@/store/useCart';
import { formatItemName } from '@/lib/utils';

const CartItem = ({ item }) => {
  const { loading, removeItem } = useCart();
  if (loading)
    return (
      <div
        className={'animate-spin size-1 text-orange-700 p-2 transition-all'}
      ></div>
    );

  return (
    <div className="flex gap-4 bg-white p-4 rounded-xl shadow-sm">
      {/* IMAGE */}
      <div className="w-24 h-24 rounded-lg bg-gray-100 overflow-hidden">
        <img
          src={`${API.BASEURL}${item?.image}` || '/placeholder.png'}
          alt={item?.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* INFO */}
      <div className="flex-1 flex justify-between">
        <div>
          <h3 className="font-semibold">{formatItemName(item?.name)}</h3>
          <p className="text-sm text-gray-500">
            £{item?.unitPrice.toLocaleString()}
          </p>

          <button
            disabled={loading}
            onClick={() => removeItem(item?._id)}
            className={`${
              loading
                ? 'cursor-not-allowed'
                : 'text-sm  mt-2text-sm text-red-500 mt-2 cursor-pointer'
            }`}
          >
            Remove
          </button>
        </div>

        <QuantityControl item={item} />
      </div>
    </div>
  );
};

export default CartItem;
