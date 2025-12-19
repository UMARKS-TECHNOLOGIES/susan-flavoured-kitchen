import React, { useEffect, useState, useCallback } from 'react';
import { CartContext } from '../../store/CartContext';
import axios from 'axios';
import { useAuth } from '../../store/useAuth';

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  // Fetch cart from server
  const fetchCart = useCallback(async () => {
    if (!user) {
      setCartItems([]);
      return;
    }
    try {
      setLoading(true);
      const res = await axios.get('/api/cart', { withCredentials: true });
      setCartItems(res.data.items || []);
    } catch (err) {
      setCartItems([]);
      console.error('Failed to fetch cart:', err);
    } finally {
      setLoading(false);
    }
  }, [user]);

  // Fetch cart on login or refresh
  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  // Add item to cart
  const addToCart = async (product, quantity = 1) => {
    try {
      const res = await axios.post(
        '/api/cart/add',
        { product, quantity },
        { withCredentials: true }
      );
      setCartItems(res.data.items);
    } catch (err) {
      console.error('Failed to add cart item:', err);
    }
  };

  // Remove item from cart
  const removeFromCart = async productId => {
    try {
      const res = await axios.delete(`/api/cart/remove/${productId}`, {
        withCredentials: true,
      });
      setCartItems(res.data.items);
    } catch (err) {
      console.error('Failed to remove item:', err);
    }
  };

  // Update item quantity
  const updateQuantity = async (productId, quantity) => {
    try {
      if (quantity < 1) {
        return removeFromCart(productId);
      }
      const res = await axios.patch(
        '/api/cart/update',
        { productId, quantity },
        { withCredentials: true }
      );
      setCartItems(res.data.items);
    } catch (err) {
      console.error('Failed to update quantity:', err);
    }
  };

  // Clear cart
  const clearCart = async () => {
    try {
      const res = await axios.delete('/api/cart/clear', {
        withCredentials: true,
      });
      setCartItems(res.data.items || []);
    } catch (err) {
      console.error('Failed to clear cart:', err);
    }
  };

  // Utility functions
  const getTotalItems = () =>
    cartItems.reduce((t, item) => t + item.quantity, 0);
  const getSubtotal = () =>
    cartItems.reduce((t, item) => t + item.price * item.quantity, 0);
  const isInCart = id => cartItems.some(item => item.id === id);
  const getItemQuantity = id => {
    const item = cartItems.find(i => i.id === id);
    return item?.quantity || 0;
  };

  const value = {
    cartItems,
    loading,
    fetchCart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getSubtotal,
    isInCart,
    getItemQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
