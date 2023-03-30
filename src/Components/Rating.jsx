import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

function Rating({ rating }) {
  const filledStars = Math.round(rating);
  const emptyStars = 5 - filledStars;

  const starIcons = [];

  for (let i = 0; i < filledStars; i++) {
    starIcons.push(
      <FontAwesomeIcon key={i} icon={solidStar} className="text-yellow-500" />
    );
  }

  for (let i = 0; i < emptyStars; i++) {
    starIcons.push(
      <FontAwesomeIcon
        key={i + filledStars}
        icon={regularStar}
        className="text-gray-400"
      />
    );
  }

  return <div>{starIcons}</div>;
}

export default Rating;
