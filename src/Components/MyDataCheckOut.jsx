import React, { useEffect, useState } from "react";
import EditData from "./EditData";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import CreateData from "./CreateData";

export default function MyDataCheckOut(props) {
  const { user, isAuthenticated } = useAuth0();

  const [myData, setMyData] = useState("");
  const editRef = useRef();
  const createRef = useRef();
  const handlerPopUpEdit = (event) => {
    editRef.current.TogglePopUp(event.target.name);
  };
  const handlerPopUpCreate = (event) => {
    createRef.current.TogglePopUp(event.target.name);
  };
  const getData = async () => {
    const res = await axios.get(
      `http://localhost:4000/user/getUser?id=${user?.sub}`
    );
    setMyData(res.data);
  };
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `http://localhost:4000/user/getUser?id=${user?.sub}`
      );
      setMyData(res.data);
    };
    if (user?.sub) {
      getData();
    }
  }, [user?.sub]);
  return (
    <section className=" w-full">
      <EditData
        create={getData}
        city={myData.city}
        phoneNumber={myData.phoneNumber}
        ref={editRef}
      ></EditData>
      <CreateData
        city={myData.city}
        create={getData}
        phoneNumber={myData.phoneNumber}
        ref={createRef}
      ></CreateData>

      <div className="   w-1/2 m-auto  mb-5  bg-white border border-neutral-900 text-neutral-900 py-2 px-4 rounded-sm ">
        <div className="flex justify-between py-2 pr-8 pl-4  border-black border-b-[1px]">
          <div className="border-block flex flex-col">
            <label className="text-black font-bold">Nombre:</label>
            <h3>
              {myData && myData.name !== "none"
                ? myData.name
                : "Aun no tienes este dato"}
            </h3>
          </div>
          {myData && myData.name !== "none" ? (
            <button
              name="nombre"
              onClick={handlerPopUpEdit}
              className="m-2 bg-white border border-neutral-900 text-neutral-900 py-2 px-4 rounded-sm hover:bg-neutral-900 hover:text-white"
            >
              Editar
            </button>
          ) : (
            <button
              name="nombre"
              onClick={handlerPopUpCreate}
              className="m-2 bg-white border border-neutral-900 text-neutral-900 py-2 px-4 rounded-sm hover:bg-neutral-900 hover:text-white"
            >
              Agregar
            </button>
          )}
        </div>
        <div className="flex justify-between py-2 pr-8 pl-4 border-black border-b-[1px]">
          <div className="border-block flex flex-col">
            <label className="text-black font-bold">Apellido:</label>
            <h3>
              {myData && myData.lastName !== "none"
                ? myData.lastName
                : "Aun no tienes este dato"}
            </h3>
          </div>
          {myData && myData.lastName !== "none" ? (
            <button
              name="apellido"
              onClick={handlerPopUpEdit}
              className="m-2 bg-white border border-neutral-900 text-neutral-900 py-2 px-4 rounded-sm hover:bg-neutral-900 hover:text-white"
            >
              Editar
            </button>
          ) : (
            <button
              name="apellido"
              onClick={handlerPopUpCreate}
              className="m-2 bg-white border border-neutral-900 text-neutral-900 py-2 px-4 rounded-sm hover:bg-neutral-900 hover:text-white"
            >
              Agregar
            </button>
          )}
        </div>
        <div className="flex justify-between py-2 pr-8 pl-4 border-black border-b-[1px]">
          <div className="border-block flex flex-col">
            <label className="text-black font-bold">Número de celular:</label>
            <h3>
              {myData && myData.phoneNumber !== "none"
                ? myData.phoneNumber
                : "Aun no tienes este dato"}
            </h3>
          </div>
          {myData && myData.phoneNumber !== "none" ? (
            <button
              name="número de celular"
              onClick={handlerPopUpEdit}
              className="m-2 bg-white border border-neutral-900 text-neutral-900 py-2 px-4 rounded-sm hover:bg-neutral-900 hover:text-white"
            >
              Editar
            </button>
          ) : (
            <button
              name="número de celular"
              onClick={handlerPopUpCreate}
              className="m-2 bg-white border border-neutral-900 text-neutral-900 py-2 px-4 rounded-sm hover:bg-neutral-900 hover:text-white"
            >
              Agregar
            </button>
          )}
        </div>

        <div className="flex justify-between py-2 pr-8 pl-4 border-black border-b-[1px]">
          <div className="border-block flex flex-col ">
            <div className="flex flex-col mb-1">
              <label className="text-black font-bold">Pais:</label>
              <h3>
                {myData && myData.country !== "none"
                  ? myData.country
                  : "Aun no tienes este dato"}
              </h3>
            </div>
            <div className="flex flex-col   mt-1">
              <label className="text-black font-bold">Ciudad:</label>
              <h3>
                {myData && myData.city !== "none"
                  ? myData.city
                  : "Aun no tienes este dato"}
              </h3>
            </div>
          </div>
          <div className="w-[23%] 2xl:w-[21%] flex flex-col justify-center items-center">
            {myData && myData.city !== "none" ? (
              <button
                name="pais y ciudad"
                onClick={handlerPopUpEdit}
                className="m-2 bg-white border border-neutral-900 text-neutral-900 py-2 px-4 rounded-sm hover:bg-neutral-900 hover:text-white"
              >
                Editar
              </button>
            ) : (
              <button
                name="pais y ciudad"
                onClick={handlerPopUpCreate}
                className="m-2 bg-white border border-neutral-900 text-neutral-900 py-2 px-4 rounded-sm hover:bg-neutral-900 hover:text-white"
              >
                Agregar
              </button>
            )}
          </div>
        </div>

        <div className="flex justify-between py-2 pr-8 pl-4">
          <div className="border-block flex flex-col">
            <label className="text-black font-bold">Dirección:</label>
            <h3>
              {myData && myData.address !== "none"
                ? myData.address
                : "Aun no tienes este dato"}
            </h3>
          </div>
          {myData && myData.address !== "none" ? (
            <button
              name="domicilio"
              onClick={handlerPopUpEdit}
              className="m-2 bg-white border border-neutral-900 text-neutral-900 py-2 px-4 rounded-sm hover:bg-neutral-900 hover:text-white"
            >
              Editar
            </button>
          ) : (
            <button
              name="domicilio"
              onClick={handlerPopUpCreate}
              className="m-2 bg-white border border-neutral-900 text-neutral-900 py-2 px-4 rounded-sm hover:bg-neutral-900 hover:text-white"
            >
              Agregar
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
