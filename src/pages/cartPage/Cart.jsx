import React, { useEffect, useState } from 'react';
import api from '../../lib/api';
import CartItem from './components/CartItem';
import { API } from '@/lib/endpoints';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCart = () => {
    api
      .get(`${API.CART}/get-cart`)
      .then(res => setCart(res.data.items || []))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const updateQuantity = async (productId, quantity) => {
    await api.patch(`${API.CART}/update`, { productId, quantity });
    fetchCart();
  };

  const removeFromCart = async productId => {
    await api.delete(`${API.CART}/remove/${productId}`);
    fetchCart();
  };

  if (loading) return <p className="py-20 text-center">Loading cart…</p>;

  return (
    <div>
      {cart.length === 0 ? (
        <p className="text-center py-20">Your cart is empty</p>
      ) : (
        cart.map(item => (
          <CartItem
            key={item.productId}
            item={item}
            onQuantityChange={updateQuantity}
            onRemove={removeFromCart}
          />
        ))
      )}
    </div>
  );
};

export default Cart;
