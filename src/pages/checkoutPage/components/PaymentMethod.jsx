import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Label } from "../../../components/ui/label";
import { CreditCard } from "lucide-react";
import { Input } from "../../../components/ui/input";

const PaymentMethod = ({ cardDetails, setCardDetails }) => {
  const handleCardChange = (field, value) => {
    setCardDetails((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Card>
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold">Payment Method</CardTitle>
        <p className="text-sm text-gray-500 font-medium">
          Your payment is securely processed
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label
              htmlFor="cardNumber"
              className="text-sm font-medium text-gray-700"
            >
              Card Number
            </Label>
            <Input
              id="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={cardDetails.number}
              onChange={(e) => handleCardChange("number", e.target.value)}
              maxLength={19}
              className="h-12 bg-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label
                htmlFor="expiry"
                className="text-sm font-medium text-gray-700"
              >
                Expiry Date (MM/YY)
              </Label>
              <Input
                id="expiry"
                placeholder="MM/YY"
                value={cardDetails.expiry}
                onChange={(e) => handleCardChange("expiry", e.target.value)}
                maxLength={5}
                className="h-12 bg-white"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="cvv"
                className="text-sm font-medium text-gray-700"
              >
                CVV
              </Label>
              <div className="relative">
                <Input
                  id="cvv"
                  placeholder="123"
                  value={cardDetails.cvv}
                  onChange={(e) => handleCardChange("cvv", e.target.value)}
                  maxLength={3}
                  type="password"
                  className="h-12 bg-white pr-10"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="cardName"
              className="text-sm font-medium text-gray-700"
            >
              Name on Card
            </Label>
            <Input
              id="cardName"
              placeholder="John Doe"
              value={cardDetails.name}
              onChange={(e) => handleCardChange("name", e.target.value)}
              className="h-12 bg-white"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentMethod;
