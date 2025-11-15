import React from 'react'
import { Button } from '../../../components/ui/button'

const OrderSummary = ({ subtotal, delivery, total }) => {
  return (
      <div className="bg-white border rounded-lg px-4 py-15">
          <h2 className="font-bold text-lg mb-4">Order Summary</h2>
            <hr className='bg-gray-300 border-2'/>
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

          <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium">
              Proceed To Checkout
          </Button>
      </div>
  )
}

export default OrderSummary