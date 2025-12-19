import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";

const DeliveryDetails = ({ formData, setFormData }) => {
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  return (
    <Card>
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold">Delivery Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium text-gray-700">
            Name
          </Label>
          <Input
            id="name"
            placeholder="Enter Your Full Name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="h-12 bg-white rounded-lg"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone Number
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="Enter Your Number"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="h-12 bg-white rounded-lg"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="h-12 bg-white rounded-lg"
          />
        </div>
        <div className="space-y-2">
          <Label
            htmlFor="address"
            className="text-sm font-medium text-gray-700"
          >
            Delivery Address
          </Label>
          <Input
            id="address"
            placeholder="Enter Address"
            value={formData.address}
            onChange={(e) => handleChange("address", e.target.value)}
            className="h-12 bg-white rounded-lg"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="city" className="text-sm font-medium text-gray-700">
            City
          </Label>
          <Input
            id="city"
            placeholder="City"
            value={formData.city}
            onChange={(e) => handleChange("city", e.target.value)}
            className="h-12 bg-white rounded-lg"
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="postcode"
            className="text-sm font-medium text-gray-700"
          >
            Post code
          </Label>
          <Input
            id="postcode"
            placeholder="Enter Post code"
            value={formData.postcode}
            onChange={(e) => handleChange("postcode", e.target.value)}
            className="h-12 bg-white rounded-lg"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default DeliveryDetails;
