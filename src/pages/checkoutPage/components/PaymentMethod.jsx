import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { RadioGroup } from '@radix-ui/react-radio-group';
import { RadioGroupItem } from '../../../components/ui/radio-group';
import { Label } from '../../../components/ui/label';
import { CreditCard, Smartphone, Building2, } from 'lucide-react';
import { Input } from '../../../components/ui/input';
import {Separator} from '../../../components/ui/separator'

const PaymentMethod = ({selectedPayment, setSelectedPayment, cardDetails,setCardDetails}) => {
    const handleCardChange = (field, value) => {
        setCardDetails(prev => ({...prev, [field]: value}));
    };

  return (
      <Card className="mt-6">
          <CardHeader>
              <CardTitle className="text-2xl font-bold">Payment Method</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pr-20">
              <RadioGroup value={selectedPayment} onValueChange={setSelectedPayment}>
                  <div className="flex items-center space-x-3">
                      <RadioGroupItem 
                      value="card" 
                      id="card" 
                      className="text-orange-600 border-orange-600 focus:ring-orange-600 data-[state=checked]:bg-orange-600 data-[state=checked]:border-orange-600"/>
                      <Label htmlFor="card" className="cursor-pointer flex items-center gap-2">
                          <CreditCard className="w-4 h-4" />
                          <span>Credit / Debit Card</span>
                          <div className="flex gap-1 ml-2">
                              <div className="w-8 h-5 bg-blue-600 rounded"></div>
                              <div className="w-8 h-5 bg-red-600 rounded"></div>
                              <div className="w-8 h-5 bg-orange-500 rounded"></div>
                          </div>
                      </Label>
                  </div>
              </RadioGroup>

              {selectedPayment === 'card' && (
                  <div className="mt-4 space-y-4 pl-7">
                      <div className="space-y-2">
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input
                              id="cardNumber"
                              placeholder="1234 5678 9012 3456"
                              value={cardDetails.number}
                              onChange={(e) => handleCardChange('number', e.target.value)}
                              maxLength={19}
                          />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                              <Label htmlFor="expiry">Expiry Date (MM/YY)</Label>
                              <Input
                                  id="expiry"
                                  placeholder="MM/YY"
                                  value={cardDetails.expiry}
                                  onChange={(e) => handleCardChange('expiry', e.target.value)}
                                  maxLength={5}
                              />
                          </div>

                          <div className="space-y-2">
                              <Label htmlFor="cvv">CVV</Label>
                              <Input
                                  id="cvv"
                                  placeholder="123"
                                  value={cardDetails.cvv}
                                  onChange={(e) => handleCardChange('cvv', e.target.value)}
                                  maxLength={3}
                                  type="password"
                              />
                          </div>
                      </div>

                      <div className="space-y-2">
                          <Label htmlFor="cardName">Name on Card</Label>
                          <Input
                              id="cardName"
                              placeholder="John Doe"
                              value={cardDetails.name}
                              onChange={(e) => handleCardChange('name', e.target.value)}
                          />
                      </div>
                  </div>
              )}

              <div className="flex items-start gap-2 text-sm text-gray-600 my-5 pl-7">
                  <input type="checkbox" id="saveCard" className="mt-1" />
                  <Label htmlFor="saveCard" className="cursor-pointer">
                          <div className="font-medium text-gray-900 flex items-center justify-center">Use shipping address as billing address</div>
                  </Label>
              </div>

              <Separator />

              {/* Alternative Payment Methods */}
              <div className="space-y-3 flex flex-col items-center justify-center">
                  <button className="w-80 flex items-center justify-center gap-2 p-3 border rounded-lg hover:bg-gray-50 outline-1 outline-orange-300">
                      <img src="/api/placeholder/24/24" alt="Google Pay" className="w-6 h-6" />
                      <span>Google Pay</span>
                  </button>
                    <Separator />
                  <button className="w-80 flex items-center justify-center gap-2 p-3 border rounded-lg hover:bg-gray-50 outline-1 outline-orange-300">
                      <img src="/api/placeholder/24/24" alt="Apple Pay" className="w-6 h-6" />
                      <span>Apple Pay</span>
                  </button>
              </div>
              <Separator />

              <div className="flex items-start gap-2 text-sm text-gray-600">
                  <input type="radio" id="saveCard" className="mt-1" />
                  <Label htmlFor="saveCard" className="cursor-pointer">
                      <div>
                          <div className="font-medium text-gray-900">Bank Transfer (GoCardless)</div>
                          <div className="text-xs">
                              Pay securely via bank transfer. Your form will verify your identity before completing payment
                          </div>
                          <button className="text-orange-500 text-xs mt-1 underline">
                              Continue to GoCardless
                          </button>
                      </div>
                  </Label>
              </div>
          </CardContent>
      </Card>
  )
}

export default PaymentMethod