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
    <section className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8 ">
      {/* LEFT: ITEMS */}
      <div className="lg:col-span-2 space-y-6">
        <h1 className="text-2xl font-semibold">Your Cart ({items?.length})</h1>

        {items.map(item => {
          return <CartItem key={item?._id} item={item} />;
        })}
      </div>

      {/* RIGHT: SUMMARY */}
      <CartSummary subtotal={cart?.subtotal} />
    </section>
  );
};

export default CartPage;
