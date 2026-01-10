import { consumedCartContext } from '@/pages/cartPage/CartContext';

export const useCart = () => {
  const ctx = consumedCartContext();
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
};
