import React, { useState } from 'react'
import { useCart } from '../../store/useCart';
import DeliveryDetails from './components/DeliveryDetails';
import PaymentMethod from './components/PaymentMethod';
import { Button } from '../../components/ui/button';
import OrderSummary from '../cartPage/components/OrderSummary';
import DeliveryMethod from './components/DeliveryMethod';
import Navbar from '../../components/layout/Navbar';
import { useNavigate } from 'react-router-dom';
import PaymentSuccessModal from './components/PaymentSuccessModal';
import PaymentFailedModal from './components/PaymentFailedModal';

const Checkout = () => {
    const {getSubtotal, clearCart} = useCart();
    const navigate = useNavigate();


    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        postcode: ''
    })
    const [selectedMethod, setSelectedMethod] = useState('express');
    const [selectedPayment, setSelectedPayment] = useState('card');
    const [cardDetails, setCardDetails] = useState({
        number: '',
        expiry: '',
        cvv: '',
        name: ''
    });

    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showFailedModal, setShowFailedModal] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    const subtotal = getSubtotal();
    const delivery = selectedMethod === 'express' ? 3.00 : selectedMethod === 'next-day' ? 5.00 : 0;
    const total = subtotal + delivery;

    const handleSubmit = async () => {
        // Validation
        if (!formData.name || !formData.phone || !formData.email || !formData.address) {
            alert('Please fill in all required fields');
            return;
        }

        if (selectedPayment === 'card') {
            if (!cardDetails.number || !cardDetails.expiry || !cardDetails.cvv || !cardDetails.name) {
                alert('Please complete card details');
                return;
            }
        }
        setIsProcessing(true);

        // Simulate payment processing
        try {
            // This is where you'd integrate with your payment API
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Simulate payment success/failure (70% success rate for demo)
            const paymentSuccessful = Math.random() > 0.3;

            if (paymentSuccessful) {
                // Payment successful
                console.log('Payment successful!', {
                    delivery: formData,
                    deliveryMethod: selectedMethod,
                    payment: selectedPayment,
                    total
                });

                clearCart();
                setShowSuccessModal(true);
            } else {
                // Payment failed
                setShowFailedModal(true);
            }
        } catch (error) {
            console.error('Payment error:', error);
            setShowFailedModal(true);
        } finally {
            setIsProcessing(false);
        }
    };

    const handleSuccessClose = () => {
        setShowSuccessModal(false);
        navigate('/'); // Redirect to home or orders page
    };

    const handleFailedClose = () => {
        setShowFailedModal(false);
    };

    const handleRetry = () => {
        setShowFailedModal(false);
        // User can try again with the same form data
    };

        // Process payment
        // console.log('Processing order...', {
        //     delivery: formData,
        //     deliveryMethod: selectedMethod,
        //     payment: selectedPayment,
        //     total
        // });

        // alert('Order placed successfully!');
        // clearCart();

        

  return (
      <div className="min-h-screen bg-gray-50 py-8">
        <Navbar />
          <div className="max-w-5xl mx-auto px-4">
              <h1 className="text-3xl font-bold mb-8">Checkout</h1>

              <div>
                  <div className="grid lg:grid-cols-3 gap-8">
                      {/* Left Column - Forms */}
                      <div className="lg:col-span-2 space-y-8">
                          <DeliveryDetails formData={formData} setFormData={setFormData} />
                          <DeliveryMethod
                              selectedMethod={selectedMethod}
                              setSelectedMethod={setSelectedMethod}
                          />
                          <PaymentMethod
                              selectedPayment={selectedPayment}
                              setSelectedPayment={setSelectedPayment}
                              cardDetails={cardDetails}
                              setCardDetails={setCardDetails}
                          />

                          {/* Pay Now Button */}
                          <Button
                              onClick={handleSubmit}
                              disabled={isProcessing}
                              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg font-medium"
                          >
                              {isProcessing ? 'Processing...' : 'Pay Now'}
                          </Button>

                          {/* Footer Links */}
                          <div className="flex flex-wrap gap-4 justify-center text-sm text-orange-500">
                              <a href="#" className="hover:underline">Terms & Conditions</a>
                              <a href="#" className="hover:underline">Privacy Policy</a>
                              <a href="#" className="hover:underline">Refund Policy</a>
                              <a href="#" className="hover:underline">Contact</a>
                              <a href="#" className="hover:underline">Cancellations</a>
                          </div>
                      </div>

                      {/* Right Column - Order Summary */}
                      <div className="lg:col-span-1">
                          <OrderSummary
                              subtotal={subtotal}
                              delivery={delivery}
                              total={total}
                              showCheckoutButton={false}
                          />
                      </div>
                  </div>
              </div>
          </div>
          {/* Payment Modals */}
          <PaymentSuccessModal
              isOpen={showSuccessModal}
              onClose={handleSuccessClose}
          />

          <PaymentFailedModal
              isOpen={showFailedModal}
              onClose={handleFailedClose}
              onRetry={handleRetry}
          />
      </div>
  )
}

export default Checkout