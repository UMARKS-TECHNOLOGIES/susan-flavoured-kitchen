import React from "react";
import ReviewCard from "./ReviewCard";
import StarRating from "../../../components/layout/StarRating";

const ReviewList = () => {
  const reviews = [
    {
      id: 1,
      rating: 5,
      text: "Perfect balance of spice and smokiness! so fresh and cleanly packaged.",
      author: "Abbi",
      date: "14th November 2025",
      verified: true,
    },
    {
      id: 2,
      rating: 5,
      text: "Absolutely delicious! The flavors were incredible and delivery was fast.",
      author: "John",
      date: "12th November 2025",
      verified: true,
    },
    {
      id: 3,
      rating: 4,
      text: "Great food, generous portions. Will definitely order again!",
      author: "Sarah",
      date: "10th November 2025",
      verified: true,
    },
  ];

  return (
    <section className="space-y-5 max-w-7xl mx-auto">
      <hr className="border-gray-300" />
      <div className="">
        <div className="px-4 md:px-10">
          <div className="flex justify-between items-center">
            <h2 className="text-xl md:text-2xl font-bold my-4 flex items-center gap-2">
              5.0 <StarRating size="md" rating={5} />
            </h2>
            <button className="text-orange-600 font-bold text-base md:text-xl">
              See More →
            </button>
          </div>
          <p className="text-gray-500 text-base md:text-xl font-medium">
            Based on 95 Reviews
          </p>
        </div>
        <hr className="border-gray-300 my-5" />

        <div className="space-y-5 px-4 md:px-10">
          {reviews.map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewList;
