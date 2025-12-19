import React from 'react';

const CheckOutFooter = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center text-sm text-orange-500">
      <a href="#" className="hover:underline">
        Terms & Conditions
      </a>
      <a href="#" className="hover:underline">
        Privacy Policy
      </a>
      <a href="#" className="hover:underline">
        Refund Policy
      </a>
      <a href="#" className="hover:underline">
        Contact
      </a>
      <a href="#" className="hover:underline">
        Cancellations
      </a>
    </div>
  );
};

export default CheckOutFooter;
