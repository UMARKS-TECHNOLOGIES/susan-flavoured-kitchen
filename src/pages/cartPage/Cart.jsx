import React, { useState } from 'react'
import PopularDishCard from './components/PopularDishCard';
import OrderSummary from './components/OrderSummary';
import CartItem from './components/CartItem';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Image5 from '../../assets/jollof-rice.jpg'
import Image10 from '../../assets/sharwarma.jpeg'
import { Button } from '../../components/ui/button';
import { Link } from 'react-router-dom';
import { useCart } from '../../store/useCart';




const Cart = () => {
    const { cartItems, updateQuantity, removeFromCart, getSubtotal } = useCart();

    const handleCheckout = () => {
        console.log('Proceeding to checkout...');
        // Add checkout logic here
    };

    const subtotal = getSubtotal();
    const delivery = cartItems.length > 0 ? 2.50 : 0;
    const total = subtotal + delivery;

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

    // const [cartItems, setCartItems] = useState([
    //     {
    //         id: 1,
    //         name: 'Smoky Jollof Rice & Grilled Chicken',
    //         description: 'Smoky Jollof with grilled chicken and plantain – fresh, flavourful, and hygienically made.',
    //         price: 8.50,
    //         quantity: 1,
    //         image: Image5
    //     }
    // ]);



    // const handleQuantityChange = (id, newQuantity) => {
    //     setCartItems(items =>
    //         items.map(item =>
    //             item.id === id ? { ...item, quantity: newQuantity } : item
    //         )
    //     );
    // };

    // const handleRemove = (id) => {
    //     setCartItems(items => items.filter(item => item.id !== id));
    // };

    // const handleAddToCart = (dish) => {
    //     const existingItem = cartItems.find(item => item.id === dish.id);
    //     if (existingItem) {
    //         handleQuantityChange(dish.id, existingItem.quantity + 1);
    //     } else {
    //         setCartItems([...cartItems, { ...dish, quantity: 1 }]);
    //     }
    // };




    return (
        <div className="min-h-screen bg-[#fffcfa] overflow-hidden">
            <Navbar />
            <div className="mt-28">
                <div className="max-w-5xl mx-auto p-4 sm:p-6">
                    <h1 className="text-2xl sm:text-3xl font-bold mb-6">Your Cart</h1>

                    <div className={`grid gap-6 ${cartItems.length > 0 ? 'lg:grid-cols-3' : ''}`} >
                        <div className={cartItems.length > 0 ? 'lg:col-span-2' : ''}>
                            <div className="bg-white rounded-lg shadow-md py-20 px-4 sm:px-6">
                                {cartItems.length > 0 ? (
                                    <div className="space-y-6">
                                        {cartItems.map(item => (
                                            <CartItem
                                                key={item.id}
                                                item={item}
                                                onQuantityChange={updateQuantity}
                                                onRemove={removeFromCart}
                                            />
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-16">
                                        <div className="flex justify-center mb-4">
                                            <svg
                                                className="w-24 h-24 text-orange-500"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                                />
                                            </svg>
                                        </div>
                                        <h2 className="text-xl font-semibold mb-2">Your cart is empty.</h2>
                                        <p className="text-gray-600 mb-6">
                                            Explore our menu and discover something delicious!
                                        </p>
                                        <Link to={'/menu'}>
                                            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6">
                                                Browse Menu
                                            </Button>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>

                        {cartItems.length > 0 && (
                            <div className="hidden lg:block">
                                <div className="sticky top-6">
                                    <OrderSummary
                                        subtotal={subtotal}
                                        delivery={delivery}
                                        total={total}
                                        onCheckout={handleCheckout}
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    {cartItems.length > 0 && (
                        <div className="lg:hidden mt-6">
                            <OrderSummary
                                subtotal={subtotal}
                                delivery={delivery}
                                total={total}
                                onCheckout={handleCheckout}
                            />
                        </div>
                    )}

                </div>

                {cartItems.length === 0 ? (
                    <div className="mt-12">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-xl sm:text-3xl font-bold">Start with Our Popular Choices</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 pt-10 mb-4 ">
                                {popularDishes.map(dish => (
                                    <PopularDishCard
                                        key={dish.id}
                                        dish={dish}
                                    />
                                ))}
                            </div>
                            <p className="text-center text-lg font-medium text-gray-500 my-6">
                                All meals are freshly cooked, safely packaged, and delivered across the UK.
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="mt-12">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-xl sm:text-2xl font-bold">Our Popular Dishes</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 pt-10 mb-4 ">
                                {popularDishes.map(dish => (
                                    <PopularDishCard
                                        key={dish.id}
                                        dish={dish}
                                    />
                                ))}
                            </div>

                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    )
}

export default Cart