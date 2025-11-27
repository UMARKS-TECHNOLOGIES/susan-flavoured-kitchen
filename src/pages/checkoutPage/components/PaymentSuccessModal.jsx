import { SmilePlus, X } from 'lucide-react'
import React from 'react'
import { Button } from '../../../components/ui/button'
import { Dialog, DialogContent } from '../../../components/ui/dialog'

const PaymentSuccessModal = ({ isOpen, onClose }) => {
  return (
      <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent className="max-w-md">
              <button
                  onClick={onClose}
                  className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100"
              >
                  <X className="h-4 w-4" />
              </button>

              <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                      <SmilePlus className="w-10 h-10 text-orange-500" />
                  </div>

                  <h2 className="text-2xl font-bold mb-2">Payment Successful</h2>

                  <p className="text-gray-600 mb-6">
                      Your order has been received. We're preparing your meal now.
                  </p>

                  <Button
                      onClick={onClose}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-8"
                  >
                      View Order
                  </Button>
              </div>
          </DialogContent>
      </Dialog>
  )
}

export default PaymentSuccessModal