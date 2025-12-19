import React from "react";
import { Button } from "../../../components/ui/button";
import { Link } from "react-router-dom";

const OrderSummary = ({
  subtotal,
  delivery,
  total,
  showCheckoutButton = true,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
      <div className="border-b border-gray-100 mb-4"></div>
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-base">
          <span className="text-gray-600 font-medium">Subtotal:</span>
          <span className="font-bold text-gray-900">
            £{subtotal.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between text-base">
          <span className="text-gray-600 font-medium">Delivery:</span>
          <span className="font-bold text-gray-900">
            £{delivery.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between text-lg font-bold pt-4 border-t border-gray-100 mt-4">
          <span className="text-gray-900">Total</span>
          <span className="text-gray-900">£{total.toFixed(2)}</span>
        </div>
      </div>
      {showCheckoutButton && (
        <Link to={"/checkout"}>
          <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-6 text-lg rounded-lg shadow-md transition-all">
            Proceed To Checkout
          </Button>
        </Link>
      )}
    </div>
  );
};

export default OrderSummary;
