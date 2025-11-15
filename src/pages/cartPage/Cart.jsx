import React, { useState } from 'react'
import PopularDishCard from './components/PopularDishCard';
import OrderSummary from './components/OrderSummary';
import CartItem from './components/CartItem';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Image5 from '../../assets/jollof-rice.jpg'
import Image10 from '../../assets/sharwarma.jpeg'




const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Smoky Jollof Rice & Grilled Chicken',
            description: 'Smoky Jollof with grilled chicken and plantain – fresh, flavourful, and hygienically made.',
            price: 8.50,
            quantity: 1,
            image: Image5
        }
    ]);

    const popularDishes = [
        {
            id: 2,
            name: 'Egusi Soup & Pounded Yam',
            description: 'Rich bean dried soup simmered with assorted meat.',
            price: 10.00,
            image: Image10
        },
        {
            id: 3,
            name: 'Jollof Rice & Grilled Chicken',
            description: 'Long-grain rice cooked in our signature smoky pepper base.',
            price: 8.50,
            image: Image10
        },
        {
            id: 4,
            name: 'Meat Pie',
            description: 'Golden pastry filled with minced beef and vegetables.',
            price: 2.50,
            image: Image10
        }
    ];

    const handleQuantityChange = (id, newQuantity) => {
        setCartItems(items =>
            items.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const handleRemove = (id) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    const handleAddToCart = (dish) => {
        const existingItem = cartItems.find(item => item.id === dish.id);
        if (existingItem) {
            handleQuantityChange(dish.id, existingItem.quantity + 1);
        } else {
            setCartItems([...cartItems, { ...dish, quantity: 1 }]);
        }
    };

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const delivery = 2.50;
    const total = subtotal + delivery;

    return (
        <div className="min-h-screen bg-[#fffcfa] overflow-hidden">
            <Navbar />
            <div className="mt-28">
                <div className="max-w-5xl mx-auto p-4 sm:p-6">
                    <h1 className="text-2xl sm:text-3xl font-bold mb-6">Your Cart</h1>

                    <div className="grid lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-lg shadow-md py-20 px-4 sm:px-6">
                                {cartItems.length > 0 ? (
                                    <div className="space-y-6">
                                        {cartItems.map(item => (
                                            <CartItem
                                                key={item.id}
                                                item={item}
                                                onQuantityChange={handleQuantityChange}
                                                onRemove={handleRemove}
                                            />
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-12">
                                        <p className="text-gray-500">Your cart is empty</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="hidden lg:block">
                            <div className="sticky top-6">
                                <OrderSummary
                                    subtotal={subtotal}
                                    delivery={delivery}
                                    total={total}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="lg:hidden mt-6">
                        <OrderSummary
                            subtotal={subtotal}
                            delivery={delivery}
                            total={total}
                        />
                    </div>

                </div>
                <div className="mt-12">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-xl sm:text-2xl font-bold mb-6">Our Popular Dishes</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-10 mb-4 ">
                            {popularDishes.map(dish => (
                                <PopularDishCard
                                    key={dish.id}
                                    dish={dish}
                                    onAddToCart={handleAddToCart}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Cart