import React from 'react'
import { Button } from '../../components/ui/button';
import OrderItem from './components/OrderItem';
import { CheckCircle2 } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Image5 from '../../assets/jollof-rice.webp'
import Image10 from '../../assets/sharwarma.webp'
import { Separator } from '../../components/ui/separator';

const OrderConfirmation = () => {
    // Sample order data - Replace with actual data from your order/payment response
    const orderData = {
        orderId: '268457',
        orderDate: '5 November 2025',
        deliveryFee: 3.00,
        subtotal: 18.20,
        total: 21.20,
        items: [
            {
                id: 1,
                name: 'Smoky Jollof Rice & Grilled Chicken',
                quantity: 2,
                totalPrice: 17.00,
                image: Image5
            },
            {
                id: 2,
                name: 'Puff-Puff',
                quantity: 1,
                totalPrice: 1.20,
                image: Image10
            }
        ]
    };

    const paymentData = {
        cardLast4: '6248',
        transactionId: '88VK43',
        processedDate: '5 Nov 2025, 5:42 PM',
        status: 'Successful'
    };

    const deliveryData = {
        address: '12 Kingsway Street, London SW1A 1AA',
        deliveryType: 'Doorstep Delivery',
        estimatedTime: '45 - 60 mins'
    };

    const handleTrackOrder = () => {
        console.log('Navigate to orders page');
        // Add navigation logic: window.location.href = '/orders';
    };

    const handleContinueShopping = () => {
        console.log('Navigate to menu');
        // Add navigation logic: window.location.href = '/menu';
    };
    return (
        <div className="min-h-screen bg-[#fff9f4] pt-8">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 my-20">
                {/* Success Header */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold mb-4">Order Confirmed!</h1>
                    <p className="text-gray-700 text-lg font-medium leading-relaxed">
                        Thank you, Jane! Your freshly cooked Jollof Rice & Grilled Chicken is being prepared. <br />
                        We'll notify you once it's on the way — everything is sealed and handled hygienically.
                    </p>
                </div>

                {/* Your Order Section */}
                <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
                    <div className="flex justify-between items-start mb-6">
                        {/* Left Column - Order Details */}
                        <div className="space-y-2">
                            <h2 className="text-xl font-bold mb-4">Your Order</h2>

                            <div className="space-y-1 ">
                                <div>
                                    <span className="font-semibold text-lg">Order ID: </span>
                                    <span className='font-medium text-gray-500'>#{orderData.orderId}</span>
                                </div>
                                <div>
                                    <span className="font-semibold text-lg">Order Date: </span>
                                    <span className='font-medium text-gray-500'>{orderData.orderDate}</span>
                                </div>
                                <div>
                                    <span className="font-semibold text-lg">Delivery Fee: </span>
                                    <span className='font-medium text-gray-500'>£{orderData.deliveryFee.toFixed(2)}</span>
                                </div>
                                <div className="pt-2">
                                    <span className="font-bold">Total: </span>
                                    <span className="font-bold text-gray-500">£{orderData.total.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Items Ordered */}
                        <div className="w-1/2">
                            <h3 className="font-semibold text-sm mb-3">Items Ordered:</h3>
                            <div>
                                {orderData.items.map((item) => (
                                    <OrderItem key={item.id} item={item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment Section */}
                <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
                    <h2 className="text-xl font-bold mb-4">Payment</h2>
                    <Separator />
                    <div className="space-y-3 pt-4">
                        <div className="flex items-center gap-2 text-lg font-semibold">
                            <span>Visa •••• {paymentData.cardLast4}</span>
                            <span className="text-gray-400">|</span>
                            <span>TXN-{paymentData.transactionId}</span>
                            <span className="text-gray-400">|</span>
                            <div className="flex items-center gap-1 text-green-600 font-medium">
                                <CheckCircle2 className="w-4 h-4" />
                                <span>{paymentData.status}</span>
                            </div>
                        </div>

                        <p className="text-sm font-semibold text-gray-600">
                            Processed on {paymentData.processedDate}
                        </p>

                        <div className="flex items-center gap-3 font-semibold text-sm pt-2">
                            <span>Subtotal: £{orderData.subtotal.toFixed(2)}</span>
                            <span className="text-gray-400">|</span>
                            <span>Delivery: £{orderData.deliveryFee.toFixed(2)}</span>
                            <span className="text-gray-400">|</span>
                            <span className="font-bold">Total: £{orderData.total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                {/* Delivery Details Section */}
                <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
                    <h2 className="text-xl font-bold mb-4">Delivery Details</h2>

                    <div className="space-y-2 text-lg">
                        <div>
                            <span className="font-semibold">Delivery Address: </span>
                            <span>{deliveryData.address}</span>
                        </div>
                        <div>
                            <span className="font-semibold">Delivery Type: </span>
                            <span>{deliveryData.deliveryType}</span>
                        </div>
                        <div>
                            <span className="font-semibold">Estimated Time: </span>
                            <span>{deliveryData.estimatedTime}</span>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center gap-4">
                    <Button
                        onClick={handleTrackOrder}
                        variant="outline"
                        className="border-orange-500 text-orange-500 hover:bg-orange-50 px-6"
                    >
                        Track Order
                    </Button>
                    <Button
                        onClick={handleContinueShopping}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6"
                    >
                        Continue Shopping
                    </Button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default OrderConfirmation