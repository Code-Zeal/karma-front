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
      rating: rating,
      user_id: user?.sub,
      product_id: props.productId,
    };
    e.preventDefault();

    await dispatch(postCommentsAndRatings(dataCommentAndRating));

    setComment("");
    setRating(0);

    props.onClose();
  };

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="relative bg-white p-8 rounded-md">
        <button
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-900"
          onClick={props.onClose}
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M15.707 4.293a1 1 0 00-1.414-1.414L10 8.586 5.707 4.293A1 1 0 004.293 5.707L8.586 10l-4.293 4.293a1 1 0 101.414 1.414L10 11.414l4.293 4.293a1 1 0 001.414-1.414L11.414 10l4.293-4.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <h2 className="text-2xl font-bold mb-4  text-black">
          Comentarios y Valoraciones
        </h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            <span className="font-bold  text-black">Comentario:</span>
            <textarea
              className="block w-full border border-gray-400 p-2 rounded-md"
              value={comment}
              onChange={handleCommentChange}
            />
          </label>
          <label className="block mb-2">
            <span className="font-bold text-black">Valoración:</span>
            <input
              className="block w-full border border-gray-400 p-2 rounded-md"
              type="number"
              min="0"
              max="5"
              value={rating}
              onChange={handleRatingChange}
            />
          </label>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            type="submit"
          >
            Agregar comentario y valoración
          </button>
        </form>
      </div>
    </div>
  );
}

export default CommentsAndRatings;
