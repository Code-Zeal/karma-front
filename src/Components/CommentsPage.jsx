import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";

import { postCommentsPage } from "../Redux/Actions";

function CommentsPage(props) {
  const { isAuthenticated } = useAuth0();

  const dispatch = useDispatch();
  const { user } = useAuth0();

  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    const dataCommentPage = {
      comment: comment,
      userId: user?.sub,
    };
    e.preventDefault();

    await dispatch(postCommentsPage(dataCommentPage));

    setComment("");

    props.onClose();
  };

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="relative bg-white p-8 rounded-md w-1/2 items-center justify-center flex flex-col">
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
        <h3 className="text-xl font-light mb-4  text-black w-full">
          ¡Hola! Nos encantaría saber tu opinión sobre tu experiencia de compra
          con nosotros. Si tienes un momento, por favor comparte tus comentarios
          y sugerencias en la sección de feedback a continuación. ¡Agradecemos
          tu tiempo y esperamos verte de nuevo pronto en Karma!
        </h3>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 w-full">
            <textarea
              className="block w-[400px] h-[150px] border border-neutral-900 text-neutral-900  p-2 rounded-md"
              value={comment}
              onChange={handleCommentChange}
            />
          </label>
          <button
            type="submit"
            className="m-2 bg-white border border-neutral-900 text-neutral-900 py-2 px-4 rounded-sm hover:bg-neutral-900 hover:text-white"
          >
            Agregar comentario
          </button>
        </form>
      </div>
    </div>
  );
}

export default CommentsPage;
