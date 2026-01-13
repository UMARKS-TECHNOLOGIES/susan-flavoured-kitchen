import { createContext, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import * as cartAPI from './cart.api'; // your backend API wrapper

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);
  const [loadingId, setLoadingId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Load cart from backend
  const loadCart = async () => {
    setLoading(true);
    try {
      const res = await cartAPI.fetchCart();
      setCart(res.data.data);
    } catch (err) {
      toast.error('Failed to load cart');
    } finally {
      setLoading(false);
    }
  };

  // Add item to cart
  const addItem = async (itemId, qty) => {
    try {
      setLoadingId(itemId);
      const res = await cartAPI.addToCart(itemId, qty);
      setCart(res.data.data);
      await cartAPI.fetchCart();
      toast.success('Item added to cart');
    } catch (err) {
      toast.error(err.message || 'Failed to add item');
    } finally {
      setLoadingId(null);
    }
  };

  // Update quantity of an existing item
  const updateItem = async (itemId, qty) => {
    try {
      const quantity = Number.isFinite(qty) ? qty : 1;

      setLoadingId(itemId);
      const res = await cartAPI.updateQuantity(itemId, quantity);
      setCart(res.data.data);
      toast.success('Cart updated');
    } catch (err) {
      toast.error('Failed to update cart');
      await loadCart();
    } finally {
      setLoadingId(null);
    }
  };

  // Remove an item from cart
  const removeItem = async itemId => {
    try {
      setLoadingId(itemId);
      const res = await cartAPI.removeFromCart(itemId);
      setCart(res.data.data);
      toast.success('Item removed from cart');
    } catch (err) {
      toast.error('Failed to remove item');
      await loadCart();
    } finally {
      setLoadingId(null);
    }
  };

  const getSubtotal = () => cart?.subtotal;
  const CartItemTotal = () => cart?.items?.length;

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        CartItemTotal,
        getSubtotal,
        cart,
        loading,
        loadingId,
        addItem,
        updateItem,
        removeItem,
        refreshCart: loadCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const consumedCartContext = () => useContext(CartContext);
