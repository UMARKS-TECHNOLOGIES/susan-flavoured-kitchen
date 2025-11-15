import React from 'react'
import { Star } from 'lucide-react';


const StarRating = ({ rating, size = 'md' }) => {
    const sizeClasses = {
            sm: 'w-3 h-3',
            md: 'w-4 h-4',
            lg: 'w-5 h-5'
        }

    return (
        <div className="flex gap-0.5 text-lg ">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    className={`${sizeClasses[size]} ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'
                        }`}
                />
            ))}
        </div>
    )
}

export default StarRating