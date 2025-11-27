import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card'
import { Label } from '../../../components/ui/label'
import { Input } from '../../../components/ui/input'

const DeliveryDetails = ({ formData, setFormData }) => {
    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Delivery Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pr-20">
                <div className="space-y-2">
                    <Label htmlFor="name" className="text-lg font-semibold">Name</Label>
                    <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className='py-5 text-xl font-semibold'
                    />
                </div>


                <div className="space-y-2">
                    <Label htmlFor="phone" className="text-lg font-semibold">Phone Number</Label>
                    <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your number"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className='py-5'
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email" className="text-lg font-semibold">Email Address</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className='py-5'
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="address" className="text-lg font-semibold">Delivery Address</Label>
                    <Input
                        id="address"
                        placeholder="Enter Address"
                        value={formData.address}
                        onChange={(e) => handleChange('address', e.target.value)}
                        className='py-5'
                    />
                </div>

                {/* <div className="grid grid-cols-2 gap-4"> */}
                <div className="space-y-2">
                    <Label htmlFor="city" className="text-lg font-semibold">City</Label>
                    <Input
                        id="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={(e) => handleChange('city', e.target.value)}
                        className='py-5'
                    />
                </div>

                {/* </div> */}
                <div className="space-y-2">
                    <Label htmlFor="postcode" className="text-lg font-semibold">Post code</Label>
                    <Input
                        id="postcode"
                        placeholder="Enter Post code"
                        value={formData.postcode}
                        onChange={(e) => handleChange('postcode', e.target.value)}
                        className='py-5'
                    />
                </div>
            </CardContent>
        </Card>
    )
}

export default DeliveryDetails