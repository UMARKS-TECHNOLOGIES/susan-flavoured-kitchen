import React from 'react'

const ReviewCard = ({ rating, text, author, date, verified }) => {
  return (
      <div className="border-b pb-4 mb-4 last:border-b-0">
          <StarRating rating={rating} size="sm" />
          <p className="text-sm text-gray-700 mt-2 mb-2">{text}</p>
          <div className="flex items-center justify-between text-xs text-gray-500">
              <span>{author} | {date}</span>
              {verified && <span className="text-green-600">✓ Verified Purchase</span>}
          </div>
      </div>
  )
}

export default ReviewCard