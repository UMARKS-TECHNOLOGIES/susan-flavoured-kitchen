import { Button } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';

const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center py-24 ">
      <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>

      <p className="text-gray-500 mb-6">
        Looks like you haven’t added anything yet.
      </p>

      <Button className={'cursor-pointer'} onClick={() => navigate('/menu')}>
        Browse Menu
      </Button>
    </div>
  );
};
export default EmptyCart;
