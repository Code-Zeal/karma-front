import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { postCommentsAndRatings } from "../Redux/Actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Tooltip } from "flowbite-react";
import axios from "axios";
function CommentsAndRatings(props) {
  const notify = (msg) =>
    toast.success(msg, {
      icon: false,
      toastId: "success",
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const notifyError = (msg) =>
    toast.error(msg, {
      icon: false,
      toastId: "error",
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const { user } = useAuth0();

  const [rating, setRating] = useState(0);

  const {
    watch,
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [hover, setHover] = useState(0);
  const onSubmit = async (form) => {
    if (rating < 0 || rating > 5 || rating === null) {
      notifyError("completa todos los campos para poder enviar tu comentario");
    } else {
      const response = await axios.post(
        "/commentsRating/createCommentsRating",
        {
          comments: form.comment,
          rating: parseInt(rating),
          UserId: user?.sub,
          ProductId: props.productId,
        }
      );
      reset();
      setRating(0);
      notify("Comentario Agregado correctamente");
      props.onClose();
    }
  };
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="relative bg-white p-8 rounded-md w-1/2 h-1/2">
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
        <div className="w-full flex justify-center items-center">
          <h2 className="text-3xl font-thin mb-4  text-black">
            ¿Que te ha parecido el producto?
          </h2>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          // onSubmit={handleSubmit}
          className="flex items-center justify-center flex-col"
        >
          <label className="block mb-2">
            <span className="font-thin  text-black">Comentario:</span>
            <textarea
              {...register("comment", { required: true })}
              className={
                errors.comment
                  ? "flex mb-2 bg-white  p-5 items-center justify-start   border-red-600 border-3 text-neutral-900 py-1  px-2 rounded-sm mt-2 w-[500px] h-[100px] focus:border-red-600 focus:outline-none  "
                  : "flex mb-2 bg-white  p-4 items-center justify-start   border-neutral-900 border-2 text-neutral-900 py-1  px-2 rounded-sm mt-2 w-[500px] h-[100px]"
              }
            />
          </label>
          <label className="flex mb-2 bg-neutral-900  p-4 items-center justify-center   border-white border-2 text-white py-1  px-2 rounded-sm mt-2 w-[40%]">
            <span className="font-thin text-white mr-2 text-xl">
              Valoración:
            </span>
            {/* <input
              {...register("value")}
              className="block w-full border border-gray-400 p-2 rounded-md"
              type="number"
              min="0"
              max="5"
              value={rating}
              onChange={handleRatingChange}
            /> */}
            {/* { required: true, min: 1, max: 5 } */}
            <div className="star-rating">
              {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                  <button
                    type="button"
                    key={index}
                    className={
                      index <= (hover || rating)
                        ? "on text-yellow-200 text-2xl shadow-sm"
                        : "off text-white text-2xl shadow-sm"
                    }
                    onClick={() => setRating(index)}
                    onDoubleClick={() => {
                      setRating(0);
                      setHover(0);
                    }}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(rating)}
                  >
                    <span className="star">&#9733;</span>
                  </button>
                );
              })}
            </div>
          </label>
          <button
            className="flex mb-2 bg-white  p-4 items-center justify-center   border-neutral-900 border-2 text-neutral-900 py-1  px-2 rounded-sm mt-2 w-[40%]"
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
