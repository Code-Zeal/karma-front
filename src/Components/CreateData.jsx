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

const CreateData = forwardRef((props, ref) => {
  const notify = () =>
    toast.success(`Información agregada correctamente :)`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const errorNotify = () =>
    toast.error(
      "Ups,la información no se agregó correctamente, intente de nuevo",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }
    );
  const { user, isAuthenticated } = useAuth0();
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
    if (type === "created") {
      await setVisible(false);
      await setType("");
      await setMyData("");
      props.create();
    } else {
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
      setMyData({
        ...myData,
        [event.target.name]: event.target.value,
      });
      return;
    }
  };

  const handlerCreate = async () => {
    try {
      const res = await axios.put(
        "http://localhost:4000/user/updateUser",
        myData
      );
      notify();
      TogglePopUp("created");
    } catch (error) {
      errorHandler(error);
    }
  };
  const errorHandler = async (error) => {
    await TogglePopUp("created");
    console.log(error);
    errorNotify();
  };

  return (
    <>
      <ToastContainer />

      {visible !== false ? (
        <section className=" fixed z-10 inset-0 flex justify-center items-center bg-[#000000ab] ">
          <div className="w-7/12 bg-white h-1/2 rounded-lg flex flex-col items-center justify-evenly">
            <h3 className="text-black text-xl mx-auto text-center">
              Introduce tu {visible} y presiona en "Crear"
            </h3>
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
                  <input
                    name={type}
                    type="text"
                    onChange={handlerChange}
                    placeholder={`Ingresa tu ${visible}`}
                    className="w-1/2 border-black rounded-lg focus:border-black focus:border-2"
                  />
                )}
              </>
            )}
            <div className="flex justify-evenly w-full">
              <button
                onClick={handlerCreate}
                className="bg-teal-600 hover:bg-teal-800 text-white px-3 py-1 rounded-lg text-lg"
              >
                Agregar
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
export default CreateData;
