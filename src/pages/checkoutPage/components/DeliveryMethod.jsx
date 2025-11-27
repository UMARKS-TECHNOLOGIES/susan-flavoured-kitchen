import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import {RadioGroup, RadioGroupItem} from '../../../components/ui/radio-group'
import { Label } from '../../../components/ui/label';
const DeliveryMethod = ({selectedMethod, setSelectedMethod}) => {
    const deliveryOptions = [
        {
            id: 'express',
            label: 'local Delivery',
            description: ' (London and nearby) – within hour',
            price: 3.00
        },
        {
            id: 'next-day',
            label: 'Nationwide (Next-Day Chilled)',
            description: '',
            price: 5.00
        },
        {
            id: 'bulk',
            label: 'Event / Bulk Order',
            description: '—by schedule',
            price: 0
        }
    ];
  return (
    <Card className='mt-6'>
        <CardHeader>
            <CardTitle className='text-2xl font-bold'>Delivery Method</CardTitle>
        </CardHeader>
        <CardContent>
            <RadioGroup value={selectedMethod} onValueChange={setSelectedMethod}>
                {deliveryOptions.map((option) => (
                    <div key={option.id} className="flex items-center space-x-3 mb-3 ">
                        <RadioGroupItem value={option.id} id={option.id}/>
                        <Label htmlFor={option.id} className="flex cursor-pointer">
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="font-medium text-lg">{option.label}</span>
                                    {option.description && (
                                        <span className="font-medium text-lg">{option.description}</span>
                                    )}
                                </div>
                                {option.price > 0 && (
                                    <span className="font-medium text-lg">— £{option.price.toFixed(2)}</span>
                                )}
                            </div>
                        </Label>
                    </div>
                ))}
            </RadioGroup>
        </CardContent>
    </Card>
  )
}

export default DeliveryMethod