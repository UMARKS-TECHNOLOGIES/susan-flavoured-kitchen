import React from 'react'
import { Button } from '../../../components/ui/button'
import { Link } from 'react-router-dom'

const OrderSummary = ({ subtotal, delivery, total, showCheckoutButton = true }) => {
    return (
        <div className="bg-white border rounded-lg px-4 py-15 sticky top-6">
            <h2 className="font-bold text-lg mb-4">Order Summary</h2>
            <hr className='bg-gray-300 border-2' />
            <div className="space-y-2 my-8 ">
                <div className="flex justify-between text-base">
                    <span className="text-gray-600 font-bold">Subtotal:</span>
                    <span className="font-bold">£{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base">
                    <span className="text-gray-600 font-bold">Delivery:</span>
                    <span className="font-bold">£{delivery.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base font-bold pt-2 border-t">
                    <span>Total:</span>
                    <span>£{total.toFixed(2)}</span>
                </div>
            </div>
            {showCheckoutButton && (
                <Link to={'/checkout'}>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium">
                        Proceed To Checkout
                    </Button>
                </Link>
            )}
        </div>
    )
}

export default OrderSummary