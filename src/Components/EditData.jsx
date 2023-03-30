import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";

const NAME_REGEX = /^([a-zA-ZùÙüÜäàáëèéïìíöòóüùúÄÀÁËÈÉÏÌÍÖÒÓÜÚñÑ\s]+)$/;
const ADDRESS_REGEX = /([a-z ]{2,}\s{0,1})(\d{0,3})(\s{0,1}\S{2,})?/i;

const EditData = forwardRef((props, ref) => {
  const userRef = useRef();

  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);
  useEffect(() => {
    if (type === "name" || type === "lastName") {
      setValidName(NAME_REGEX.test(name));
    } else {
      setValidName(ADDRESS_REGEX.test(name));
    }
  }, [name]);
  const notify = () =>
    toast.success(`Información editada correctamente `, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const errorNotify = () =>
    toast.error(
      "Ha ocurrido un error al editar la información, verifica que el dato es correcto e intente de nuevo",
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }
    );
  const { user } = useAuth0();
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState("");
  const [countries, setCountries] = useState(null);
  const [countrySelected, setCountrySelected] = useState(null);
  const [myData, setMyData] = useState({
    id: "",
    name: "",
    lastName: "",
    city: "",
    country: "",
    phoneNumber: "",
    address: "",
  });

  useEffect(() => {
    const getCountries = async () => {
      const res = await axios.get(
        "https://countriesnow.space/api/v0.1/countries/"
      );
      setCountries(res.data.data);
    };
    getCountries();
  }, []);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `http://localhost:4000/user/getUser?id=${user?.sub}`
      );
      setMyData({
        ...myData,
        id: user?.sub,
        name: res.data.name,
        lastName: res.data.lastName,
        city: res.data.city,
        country: res.data.country,
        phoneNumber: res.data.phoneNumber,
        address: res.data.address,
        email: res.data.email,
        picture: res.data.picture,
        birthdate: res.data.birthdate,
      });
    };
    if (user?.sub) {
      getData();
    }
  }, [user?.sub, type]);

  useEffect(() => {
    if (visible !== false && type === "") {
      if (visible === "nombre") {
        setType("name");
      } else if (visible === "apellido") {
        setType("lastName");
      } else if (visible === "número de celular") {
        setType("tel");
      } else if (visible === "pais y ciudad") {
        setType("pais y ciudad");
      } else if (visible === "domicilio") {
        setType("address");
      }
    } else return;
  }, [visible, type]);

  useImperativeHandle(ref, () => {
    return {
      TogglePopUp,
      visible,
    };
  });
  const TogglePopUp = async (type) => {
    if (type === "edited") {
      await setVisible(false);
      await setType("");
      await setMyData("");
      props.create();
    } else {
      setName("");
      setVisible(type);
      setType("");
      setMyData("");
    }
  };
  const handleCountry = (event) => {
    setCountrySelected(event.target.value);
    setMyData({
      ...myData,
      country: event.target.value,
    });
  };
  const cities = countrySelected
    ? countries.find((country) => country.country === countrySelected).cities
    : [];
  const handlerChange = (event) => {
    if (typeof event === "string" || event === undefined) {
      setMyData({
        ...myData,
        phoneNumber: event,
      });
      return;
    } else {
      setName(event.target.value);
      setMyData({
        ...myData,
        [event.target.name]: event.target.value,
      });
      return;
    }
  };

  const handlerCreate = async () => {
    if (type === "name" || type === "lastName") {
      if (!NAME_REGEX.test(name)) {
        errorHandler();
      } else {
        try {
          await axios.put("http://localhost:4000/user/updateUser", myData);
          notify();
          TogglePopUp("edited");
        } catch (error) {
          errorHandler(error);
        }
      }
    } else if (type === "address") {
      if (!ADDRESS_REGEX.test(name)) {
        errorHandler();
      } else {
        try {
          await axios.put("http://localhost:4000/user/updateUser", myData);
          notify();
          TogglePopUp("edited");
        } catch (error) {
          errorHandler(error);
        }
      }
    } else {
      if (
        (myData.phoneNumber === props.phoneNumber ||
          myData.phoneNumber === "none" ||
          myData.phoneNumber === undefined) &&
        (myData.city === props.city ||
          myData.city === undefined ||
          myData.city === "none")
      ) {
        errorHandler();
      } else {
        try {
          await axios.put("http://localhost:4000/user/updateUser", myData);
          notify();
          TogglePopUp("edited");
        } catch (error) {
          errorHandler(error);
        }
      }
    }
  };
  const errorHandler = async () => {
    await TogglePopUp("edited");
    errorNotify();
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      {visible !== false ? (
        <section className=" fixed z-10 inset-0 flex justify-center items-center bg-[#000000ab] ">
          <div className="w-7/12 bg-white h-1/2 rounded-lg flex flex-col items-center justify-evenly">
            <h3 className="text-black text-xl mx-auto text-center">
              Si deseas cambiar tu {visible}, introduce el nuevo y presiona en
              "Guardar"
            </h3>
            <p
              id="uidnote"
              className={
                name && !validName
                  ? "instructions bg-black text-white px-2 py-1 text-xl rounded-lg"
                  : "hidden"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} className="text-lg" />
              Porfavor Ingrese un dato valido
            </p>
            {type && type === "tel" ? (
              <PhoneInput
                name="phoneNumber"
                onChange={handlerChange}
                className="w-1/2"
                placeholder="Ingresa tu numero de telefono"
              />
            ) : (
              <>
                {type && type === "pais y ciudad" ? (
                  <>
                    <select
                      className="w-1/2 border-black rounded-lg focus:border-black focus:border-2"
                      onChange={handleCountry}
                      name="country"
                      id=""
                    >
                      <option value="" selected disabled="true">
                        Pais
                      </option>
                      {countries.map((country) => {
                        return (
                          <option value={country.country}>
                            {country.country}
                          </option>
                        );
                      })}
                    </select>
                    <select
                      onChange={handlerChange}
                      className="w-1/2 border-black rounded-lg focus:border-black focus:border-2"
                      name="city"
                      disabled={countrySelected !== null ? false : true}
                    >
                      <option value="Ciudad" selected disabled="true">
                        Ciudad
                      </option>
                      {cities !== [] &&
                        cities.map((city) => {
                          return <option value={city}>{city}</option>;
                        })}
                    </select>
                  </>
                ) : (
                  <div className="flex w-full items-center justify-center ">
                    <input
                      name={type}
                      ref={userRef}
                      value={name}
                      required
                      aria-invalid={validName ? "false" : "true"}
                      aria-describedby="uidnote"
                      type="text"
                      onChange={handlerChange}
                      placeholder={`Ingresa tu nuevo ${visible}`}
                      className="w-1/2 border-black rounded-lg focus:border-black focus:border-2 mr-4"
                    />
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={
                        validName === true
                          ? "valid text-lg text-white bg-[#1bc61b] rounded-full p-2"
                          : "hidden"
                      }
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={
                        validName || !name
                          ? "hidden"
                          : "invalid text-xl text-white bg-[#ed0f0f] rounded-full p-2"
                      }
                    />
                  </div>
                )}
              </>
            )}
            <div className="flex justify-evenly w-full">
              <button
                onClick={handlerCreate}
                className="bg-teal-600 hover:bg-teal-800 text-white px-3 py-1 rounded-lg text-lg"
              >
                Guardar
              </button>
              <button
                onClick={() => TogglePopUp(false)}
                className="bg-red-600 hover:bg-red-800 text-white px-3 py-1 rounded-lg text-lg"
              >
                Cancelar
              </button>
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
});
export default EditData;
