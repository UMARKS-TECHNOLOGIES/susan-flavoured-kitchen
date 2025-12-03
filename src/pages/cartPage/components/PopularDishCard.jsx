import React from 'react'
import { Button } from '../../../components/ui/button';
import { useCart } from '@/store/useCart';


const PopularDishCard = ({ dish }) => {
    const { addToCart, isInCart, getItemQuantity } = useCart();
    // Safety check
    if (!dish || !dish.id) {
        console.error('PopularDishCard: Invalid dish data', dish);
        return null;
    }

    const inCart = isInCart(dish.id);
    const quantity = getItemQuantity(dish.id);

    const handleAddToCart = () => {
        // Validate dish data before adding
        if (dish && dish.id && dish.name && typeof dish.price === 'number') {
            addToCart(dish);
        } else {
            console.error('Invalid dish data:', dish);
        }
    };
    return (
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-10 px-5">
            <div className=" flex items-center justify-center">
                <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-40 h-40 object-cover bg-center rounded-full mb-3"
                />
            </div>
            <h3 className="font-bold text-xl">{dish.name}</h3>
            <p className="text-lg text-gray-600 mb-3 line-clamp-2 leading-relaxed font-medium">
                {dish.description}
            </p>
            <div className="flex items-center justify-between">
                <span className="font-bold text-lg">£{dish.price.toFixed(2)}</span>
                <Button
                    size="lg"
                    onClick={handleAddToCart}
                    className="bg-orange-500 hover:bg-orange-600 text-white text-sm py-1 px-4 rounded-md "
                >
                    {inCart ? `Add More (${quantity})` : 'Add to Cart'}
                </Button>
            </div>
        </div>
    )
}

export default PopularDishCard