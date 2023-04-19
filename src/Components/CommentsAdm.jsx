import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import CommentCard from "./CommentCard";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Footer from "./Footer";

import "react-toastify/dist/ReactToastify.css";

export default function CommentsAdm() {
  const [comments, setComments] = useState(null);
  const commentRef = useRef();
  const sortByReadStatus = (comments) => {
    const unreadComments = comments.filter((comment) => !comment.read);
    const readComments = comments.filter((comment) => comment.read);
    return [...unreadComments, ...readComments];
  };

  useEffect(() => {
    const getComments = async () => {
      const res = await axios.get("/comments/getComments");

      if (res.data === "Todavia no hay comentarios disponibles") {
        setComments(res.data);
      } else {
        setComments(sortByReadStatus(res.data));
      }
    };
    getComments();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="flex">
        <SideBar />
        <div className="container mx-auto mt-12">
          <div className="w-full flex items-center justify-center text-lg font-thin">
            BANDEJA DE COMENTARIOS
          </div>
          <hr />
          <div className="w-10/12 h-[600px] flex items-center justify-start flex-col mx-auto overflow-y-scroll bg-white border border-neutral-900 text-neutral-900">
            {comments &&
            comments !== "Todavia no hay comentarios disponibles" ? (
              comments.map((commentInfo) => {
                return (
                  <CommentCard
                    id={commentInfo.id}
                    comment={commentInfo.comment}
                    userId={commentInfo.UserId}
                    read={commentInfo.read}
                    date={commentInfo.date}
                    ref={commentRef}
                  ></CommentCard>
                );
              })
            ) : (
              <>
                {(comments &&
                  comments === "Todavia no hay comentarios disponibles") ||
                comments === null ? (
                  <div className="w-full h-full flex justify-center items-center text-3xl font-thin">
                    NO HAY COMENTARIOS PARA MOSTRAR
                  </div>
                ) : (
                  <div className="flex w-full h-[700px] items-center justify-center">
                    <div className="animate-spin">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100px"
                        height="100px"
                        viewBox="0 0 24 24"
                        fill="#000"
                      >
                        <path
                          d="M12 2.99988V5.99988M12 20.9999V17.9999M4.20577 16.4999L6.80385 14.9999M21 11.9999H18M16.5 19.7941L15 17.196M3 11.9999H6M7.5 4.20565L9 6.80373M7.5 19.7941L9 17.196M19.7942 16.4999L17.1962 14.9999M4.20577 7.49988L6.80385 8.99988"
                          stroke="#000000"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
