import React from 'react'
import StarRating from '../../../components/layout/StarRating'

const ReviewCard = ({ review}) => {
    return (
        <div className="border-b pb-5">
            <p className=" text-lg">
                <StarRating rating={5} size="md" />
            </p>

            <p className="mt-2 text-gray-700 text-lg font-medium">{review.text}</p>
            <div className="flex justify-between">
                <p className="mt-1 text-gray-400 text-sm font-bold">
                    {review.name} | {review.date}
                </p>
                <p className="text-green-600 text-sm font-bold mt-1">✓ Verified Purchase</p>
            </div>
        </div>
    )
}

export default ReviewCard