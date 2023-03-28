import React from "react";

function Rating({ rating }) {
  const filledStars = Math.round(rating);
  const emptyStars = 5 - filledStars;

  const starIcons = [];

  for (let i = 0; i < filledStars; i++) {
    starIcons.push(<i key={i} className="fa fa-star"></i>);
  }

  for (let i = 0; i < emptyStars; i++) {
    starIcons.push(<i key={i + filledStars} className="fa fa-star-o"></i>);
  }

  return <div>{starIcons}</div>;
}

export default Rating;
