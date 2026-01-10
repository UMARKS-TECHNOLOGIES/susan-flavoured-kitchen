import { useCart } from '@/store/useCart';
import CartItem from './CartItem';
import CartSkeleton from './CartSkeleton';
import EmptyCart from './EmptyCart';
import CartSummary from './CartSummary';

const CartPage = () => {
  const { cart, loading } = useCart();

  if (loading) {
    return <CartSkeleton />;
  }

  if (!loading && cart?.items.length === 0) {
    return <EmptyCart />;
  }

  const items = cart?.items;

  return (
    <section className="max-w-7xl mx-auto px-4 pt-24 pb-10">
      <h1 className="text-2xl font-semibold mb-6">
        Your Cart ({items.length})
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* LEFT */}
        <div className="w-full lg:flex-2 space-y-6">
          {items.map(item => (
            <CartItem key={item._id} item={item} />
          ))}
        </div>

        {/* RIGHT */}
        <div className="w-full lg:flex-1">
          <CartSummary subtotal={cart.subtotal} />
        </div>
      </div>
    </section>
  );
};

export default CartPage;
