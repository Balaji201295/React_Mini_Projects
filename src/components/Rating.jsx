import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
const Rating = ({ noOfStars }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  // onclick
  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };

  // mouse enter
  const handleMouseEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };

  // mouse hover
  const handleMouseLeave = () => {
    setHover(rating);
  };
  return (
    <section>
      <h1>Rating</h1>
      <div className="flex justify-center items-center">
        {[...Array(noOfStars)].map((_, index) => {
          const starIndex = (index += 1); // 1,2,3,4,5.....
          return (
            <FaStar
              key={starIndex}
              className={`${
                starIndex <= (hover || rating) ? "text-amber-500" : ""
              } cursor-pointer`}
              onClick={() => handleClick(starIndex)}
              onMouseMove={() => handleMouseEnter(starIndex)}
              onMouseLeave={handleMouseLeave}
              size={40}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Rating;
