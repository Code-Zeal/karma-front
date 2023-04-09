import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";

export default function CommentDetails() {
  const [userData, setUserData] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const resUser = await axios.get(`/user/getUser?id=${id}`);
      setUserData(resUser.data);
    }
    fetchData();
  }, [id]);

  return (
    <div>
      <NavBar></NavBar>

      <div className="w-1/2 h-[280px] mb-48 mt-10 flex flex-col items-start justify-start  flex-wrap mx-auto overflow-y-scroll bg-white border border-neutral-900 text-neutral-90">
        <div className="w-full flex justify-center">
          <a
            href="/admin/feedbacks"
            className=" bg-neutral-900 border border-neutral-900 text-white py-2 px-2 w-[220px] rounded-sm mr-4 cursor-pointer text-sm text-center mt-5"
          >
            Volver
          </a>
        </div>

        <h3 className="font-thin text-2xl">ID: {userData && userData.id}</h3>
        <h3 className="font-thin text-2xl">
          Nombre: {userData && `${userData.name} ${userData.lastName}`}
        </h3>
        <h3 className="font-thin text-2xl">
          Celular:{userData && userData.phoneNumber}
        </h3>
        <h3 className="font-thin text-2xl">
          Pais:{userData && userData.country}
        </h3>
        <h3 className="font-thin text-2xl">
          Ciudad: {userData && userData.city}
        </h3>
        <h3 className="font-thin text-2xl">
          Dirección: {userData && userData.address}
        </h3>
        <h3 className="font-thin text-2xl">
          Correo: {userData && userData.email}
        </h3>
      </div>

      <Footer></Footer>
    </div>
  );
}
