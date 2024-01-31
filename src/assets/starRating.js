import React from "react";
import { FaStar, FaRegStar, FaStarHalf } from "react-icons/fa"; // Importing star icons

const StarRating = ({ rating }) => {
  const starsTotal = 5;

  // Calculate width of stars
  const starPercentage = (rating / starsTotal) * 100;

  // Round to nearest 10 for star width
  const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

  return (
    <div className="star-rating">
      <div className="stars-inner" style={{ width: starPercentageRounded }}>
        {[...Array(starsTotal)].map((_, index) => {
          const ratingValue = index + 1;
          return (
            <span key={index}>
              {ratingValue <= rating ? (
                <FaStar className="star" />
              ) : ratingValue - 0.5 === rating ? (
                <FaStarHalf className="star" />
              ) : (
                <FaRegStar className="star" />
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;
