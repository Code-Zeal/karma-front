import axios from "axios";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
const CommentCard = (props, ref) => {
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
  const errorNotify = (msg) =>
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
  const markReaded = async (id) => {
    try {
      const res = await axios.put("/comments/changeCommentToRead", {
        commentId: id,
      });
      notify(
        "Comentario marcado como leído(es necesario recargar la pagina para ver los cambios)"
      );
    } catch (error) {}
  };
  // useImperativeHandle(ref, () => {
  //   return {};
  // });
  const date = new Date(props.date);
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Los meses en JavaScript comienzan desde 0, así que se suma 1
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  return (
    <div className="w-7/12 m-1 text-white border border-neutral-900 bg-neutral-800 py-2 px-4 rounded-sm flex items-center ">
      <ToastContainer
        icon={false}
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {props.read ? (
        <button className=" bg-neutral-900 border border-neutral-900 text-white py-2 px-2 w-[220px] rounded-sm mr-4 cursor-pointer text-sm text-center">
          Leído
        </button>
      ) : (
        <button
          onClick={() => markReaded(props.id)}
          className=" bg-white border border-neutral-900 text-neutral-900 py-2 px-2 w-[220px] rounded-sm mr-4 cursor-pointer text-sm text-center"
        >
          Marcar como leído
        </button>
      )}
      <div className="flex flex-col">
        <p className="w-[140px]">{`${day}/${month}/${year}-${hour}:${minute}`}</p>
        Comentario:
      </div>
      <textarea
        disabled
        readonly
        className="overflow-y-scroll overflow-x-hidden h-[60px] w-full flex items-start justify-start bg-white  border border-neutral-900 text-neutral-900 py-2 px-4 rounded-sm"
      >
        {props.comment}
      </textarea>
      <a
        className=" bg-white border border-neutral-900 text-neutral-900 py-2 px-2 w-[200px] rounded-sm ml-4 cursor-pointer text-sm text-center"
        href={`/admin/feedback/${props.userId}`}
      >
        Ver datos del usuario
      </a>
    </div>
  );
};
export default CommentCard;
