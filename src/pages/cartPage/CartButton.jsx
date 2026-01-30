import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/store/useCart';
import { useAuth } from '@/store/useAuth';
import AuthPromptModal from '@/components/modals/AuthPromptModal';

const CartButton = ({ item }) => {
  const { addItem, loadingId } = useCart();
  const { user } = useAuth();
  const [qty, setQty] = useState(1);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const isUpdating = loadingId === item._id;
  const isUnavailable = !item.available;

  const handleAdd = async () => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }

    await addItem(item._id, qty);
  };

  const increment = () => {
    setQty(prev => prev + 1);
  };

  const decrement = () => {
    if (qty > 1) setQty(prev => prev - 1);
  };

  return (
    <>
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
              disabled={qty <= 1 || isUpdating}
            >
              -
            </Button>
            <span className="px-2">{qty}</span>
            <Button size="sm" onClick={increment} disabled={isUpdating}>
              +
            </Button>
          </div>
        )}
      </div>

      <AuthPromptModal
        open={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </>
  );
};

export default CartButton;
