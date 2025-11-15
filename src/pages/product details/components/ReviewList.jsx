import React from 'react'
import ReviewCard from './ReviewCard';
import StarRating from '../../../components/layout/StarRating';

const ReviewList = () => {
    const reviews = [
        {
            rating: 5,
            name: "Ada",
            date: "10th November 2025",
            text: "Perfect balance of spice and smokiness! So fresh and cleanly packaged.",
        },
        {
            rating: 5,
            name: "Ada",
            date: "10th November 2025",
            text: "Perfect balance of spice and smokiness! So fresh and cleanly packaged.",
        },
        {
            rating: 5,
            name: "Ada",
            date: "10th November 2025",
            text: "Perfect balance of spice and smokiness! So fresh and cleanly packaged.",
        },
    ];

    return (
        <section className="space-y-5">
            <hr className='border-gray-300' />
            <div className="">
                <div className="px-10">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold my-4 flex items-center gap-2">
                            5.0 <StarRating size='md' rating={5}/>
                        </h2>
                        <button className="text-orange-600 font-bold text-xl">See More →</button>
                    </div>
                    <p className="text-gray-500 text-xl font-medium">Based on 95 Reviews</p>
                </div>
                <hr className='border-gray-300 my-5' />

                <div className="space-y-5 px-10">
                    {reviews.map((r, i) => (
                        <ReviewCard key={i} review={r} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ReviewList