import React from 'react';

const StarDisplay = ({ rating = 0, maxStars = 5 }) => {
  return (
    <div className="star-display">
      {Array.from({ length: maxStars }, (_, index) => {
        const star = index + 1;
        return (
          <span
            key={star}
            className={`star ${star <= rating ? 'filled' : ''}`}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default StarDisplay;