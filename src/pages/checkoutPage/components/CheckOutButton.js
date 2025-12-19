import React from 'react';

const PayButton = ({ handleSubmit, isProcessing }) => {
  return (
    <Button
      onClick={handleSubmit}
      disabled={isProcessing}
      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg font-medium"
    >
      {isProcessing ? 'Processing...' : 'Pay Now'}
    </Button>
  );
};

export default PayButton;
