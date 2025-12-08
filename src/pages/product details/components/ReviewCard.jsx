import React from "react";
import StarRating from "../../../components/layout/StarRating";

const ReviewCard = ({ review }) => {
  return (
    <div className="border-b pb-5">
      <h2 className=" text-lg">
        <StarRating rating={5} size="md" />
      </h2>

      <p className="mt-2 text-gray-700 text-base md:text-lg font-medium">
        {review.text}
      </p>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-2 gap-1 sm:gap-0">
        <p className="text-gray-400 text-xs md:text-sm font-bold">
          {review.name} | {review.date}
        </p>
        <p className="text-green-600 text-xs md:text-sm font-bold">
          ✓ Verified Purchase
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
