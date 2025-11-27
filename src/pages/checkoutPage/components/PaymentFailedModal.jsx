import React from 'react'
import { Button } from '../../../components/ui/button'
import {Dialog, DialogContent} from '../../../components/ui/dialog'
import { Frown, X } from 'lucide-react'

const PaymentFailedModal = ({ isOpen, onClose, onRetry }) => {
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
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                      <Frown className="w-10 h-10 text-red-500" />
                  </div>

                  <h2 className="text-2xl font-bold mb-2">Payment Failed</h2>

                  <p className="text-gray-600 mb-6">
                      Something went wrong while processing your payment. Please try again.
                  </p>

                  <Button
                      onClick={onRetry}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-8"
                  >
                      Try Again
                  </Button>
              </div>
          </DialogContent>
      </Dialog>
  )
}

export default PaymentFailedModal