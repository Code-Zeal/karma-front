import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";

import { postCommentsAndRatings } from "../Redux/Actions";

function CommentsAndRatings(props) {
  const dispatch = useDispatch();
  const { user } = useAuth0();

  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleSubmit = async (e) => {
    const dataCommentAndRating = {
      comments: comment,
      raiting: rating,
      user_id: user?.sub,
      product_id: props.productId,
    };
    e.preventDefault();

    await dispatch(postCommentsAndRatings(dataCommentAndRating));

    setProductId("");
    setComment("");
    setRating(0);
  };

  return (
    <div>
      <h2>Comentarios y Valoraciones</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Comentario:
          <textarea value={comment} onChange={handleCommentChange} />
        </label>
        <label>
          Valoración:
          <input
            type="number"
            min="0"
            max="5"
            value={rating}
            onChange={handleRatingChange}
          />
        </label>
        <button type="submit">Agregar comentario y valoración</button>
      </form>
    </div>
  );
}

export default CommentsAndRatings;
