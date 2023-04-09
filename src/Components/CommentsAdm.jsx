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
      const res = await axios.get("http://localhost:4000/comments/getComments");

      setComments(sortByReadStatus(res.data));
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
          <div className="w-10/12 h-[600px] flex items-start justify-center flex-wrap m-auto overflow-y-scroll bg-white border border-neutral-900 text-neutral-900">
            {comments && comments.length > 0 ? (
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
              <div className="w-full h-full flex justify-center items-center text-3xl font-thin">
                NO HAY COMENTARIOS PARA MOSTRAR
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
