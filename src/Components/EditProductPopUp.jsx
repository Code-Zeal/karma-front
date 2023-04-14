import axios from "axios";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditProductPopUp = forwardRef(({ data, getData }, ref) => {
  const [category, setCategory] = useState(null);
  const [newImagesArray, setNewImagesArray] = useState([]);
  const [productData, setProductData] = useState(null);

  console.log(productData);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState("");
  const [route, setRoute] = useState("");
  const togglePopUp = (type, route) => {
    if (type === undefined) {
      setNewImagesArray([]);
      setProductData(null);
      setCategory(null);
      reset();
      setVisible(!visible);
      setType(type);
      setRoute(route);
    } else {
      reset();
      setVisible(!visible);
      setType(type);
      setRoute(route);
      if (data && data.Laptop && category === null) {
        setCategory("Laptop");
        setProductData({
          id: data.id,
          model: data.model,
          brand: data.brand,
          description: data.description,
          price: data.price,
          images: data.images,
          ramMemory: data.Laptop[0].ramMemory,
          internalMemory: data.Laptop[0].internalMemory,
          processor: data.Laptop[0].processor,
          stock: data.stock,
        });
      } else if (data && data.Tablet && category === null) {
        setCategory("Tablet");
        setProductData({
          id: data.id,
          model: data.model,
          brand: data.brand,
          description: data.description,
          price: data.price,
          images: data.images,
          internalMemory: data.Tablet[0].internalMemory,
          mainCamera: data.Tablet[0].mainCamera,
          ramMemory: data.Tablet[0].ramMemory,
          screenSize: parseInt(data.Tablet[0].screenSize),
          colors: data.Tablet[0].colors,
          stock: data.stock,
        });
      } else if (data && data.Television && category === null) {
        setCategory("Television");
        setProductData({
          idProduct: data.id,
          model: data.model,
          brand: data.brand,
          description: data.description,
          price: data.price,
          images: data.images,
          typeResolution: data.Television[0].typeResolution,
          screenSize: data.Television[0].screenSize,
          systemOperating: data.Television[0].systemOperating,
          stock: data.stock,
        });
      } else if (data && data.CellPhone && category === null) {
        setCategory("CellPhone");
        setProductData({
          colors: data.CellPhone[0].colors,
          id: data.id,
          model: data.model,
          brand: data.brand,
          description: data.description,
          price: data.price,
          images: data.images,
          ramMemory: data.CellPhone[0].ramMemory,
          mainCamera: data.CellPhone[0].mainCamera,
          internalMemory: data.CellPhone[0].internalMemory,
          stock: data.stock,
        });
      }
    }
  };
  useImperativeHandle(ref, () => {
    return {
      togglePopUp,
    };
  });
  console.log(category);
  const onSubmit = async (form) => {
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
    if (category === "Laptop") {
      console.log("entré aca");
      if (type === "price" || type === "screenSize" || type === "stock") {
        let newData = {
          ...productData,
          [type]: parseInt(form[type]),
        };
        console.log(newData);
        const putData = async () => {
          try {
            const res = await axios.put("/laptop/updateLaptop", newData);
            notify(res.data);
            getData();
            togglePopUp();
          } catch (error) {
            errorNotify(error.response.data);

            togglePopUp();
          }
        };

        putData();
      } else if (type === "images") {
        const putData = async () => {
          try {
            const res = await axios.put("/laptop/updateLaptop", productData);
            notify(res.data);
            getData();
            togglePopUp();
          } catch (error) {
            errorNotify(error.response.data);
            togglePopUp();
          }
        };
        putData();
      } else {
        let newData = {
          ...productData,
          [type]: form[type],
        };
        const putData = async () => {
          try {
            const res = await axios.put("/laptop/updateLaptop", newData);
            notify(res.data);
            getData();
            togglePopUp();
          } catch (error) {
            errorNotify(error.response.data);

            togglePopUp();
          }
        };
        putData();
      }
    } else if (category === "Tablet") {
      if (type === "price" || type === "screenSize" || type === "stock") {
        let newData = {
          ...productData,
          [type]: parseInt(form[type]),
        };
        console.log(newData);
        const putData = async () => {
          try {
            const res = await axios.put("/tablet/updateTablet", newData);
            notify(res.data);
            getData();
            togglePopUp();
          } catch (error) {
            errorNotify(error.response.data.message);

            togglePopUp();
          }
        };
        putData();
      } else if (type === "images") {
        const putData = async () => {
          try {
            const res = await axios.put("/tablet/updateTablet", productData);
            notify(res.data);
            getData();
            togglePopUp();
          } catch (error) {
            errorNotify(error.response.data.message);
            togglePopUp();
          }
        };
        putData();
      } else if (type === "colors") {
        let newData = {
          ...productData,
          [type]: form[type].split(" "),
        };
        console.log(newData);
        const putData = async () => {
          try {
            const res = await axios.put("/tablet/updateTablet", newData);
            console.log(res.data);
            notify(res.data);
            getData();
            togglePopUp();
          } catch (error) {
            console.log(error);
            errorNotify(error.response.data.message);

            togglePopUp();
          }
        };
        putData();
      } else {
        let newData = {
          ...productData,
          [type]: form[type],
        };
        const putData = async () => {
          try {
            const res = await axios.put("/tablet/updateTablet", newData);
            notify(res.data);
            getData();
            togglePopUp();
          } catch (error) {
            console.log(error);
            errorNotify(error.response.data.message);

            togglePopUp();
          }
        };
        putData();
      }
    } else if (category === "Television") {
      if (type === "price" || type === "screenSize" || type === "stock") {
        console.log(1);
        let newData = {
          ...productData,
          [type]: parseInt(form[type]),
        };
        console.log(newData);
        const putData = async () => {
          try {
            const res = await axios.put("/tv/updateTelevision", newData);
            await notify(res.data.message);
            getData();
            togglePopUp();
          } catch (error) {
            errorNotify(error.response.data);
            togglePopUp();
          }
        };
        putData();
      } else if (type === "images") {
        const putData = async () => {
          try {
            const res = await axios.put("/tv/updateTelevision", productData);
            notify(res.data.message);
            getData();
            togglePopUp();
          } catch (error) {
            errorNotify(error.response.data);
            togglePopUp();
          }
        };
        putData();
      } else {
        let newData = {
          ...productData,
          [type]: form[type],
        };
        const putData = async () => {
          try {
            const res = await axios.put("/tv/updateTelevision", newData);

            notify(res.data.message);
            getData();
            togglePopUp();
          } catch (error) {
            errorNotify(error.response.data);
            togglePopUp();
          }
        };
        putData();
      }
    } else if (category === "CellPhone") {
      if (type === "price" || type === "screenSize" || type === "stock") {
        let newData = {
          ...productData,
          [type]: parseInt(form[type]),
        };
        console.log(newData);
        const putData = async () => {
          try {
            const res = await axios.put("/cellPhone/updateCellPhone", newData);
            console.log(res.data);
            notify(res.data);
            getData();
            togglePopUp();
          } catch (error) {
            console.log(error);
            errorNotify(error.response.data.message);

            togglePopUp();
          }
        };
        putData();
      } else if (type === "images") {
        const putData = async () => {
          try {
            const res = await axios.put(
              "/cellPhone/updateCellPhone",
              productData
            );
            notify(res.data);
            getData();
            togglePopUp();
          } catch (error) {
            errorNotify(error.response.data.message);
            togglePopUp();
          }
        };
        putData();
      } else if (type === "colors") {
        let newData = {
          ...productData,
          [type]: form[type].split(" "),
        };
        console.log(newData);
        const putData = async () => {
          try {
            const res = await axios.put("/cellPhone/updateCellPhone", newData);
            console.log(res.data);
            notify(res.data);
            getData();
            togglePopUp();
          } catch (error) {
            console.log(error);
            errorNotify(error.response.data.message);

            togglePopUp();
          }
        };
        putData();
      } else {
        let newData = {
          ...productData,
          [type]: form[type],
        };
        console.log(newData);
        const putData = async () => {
          try {
            const res = await axios.put("/cellPhone/updateCellPhone", newData);
            await notify(res.data);
            await getData();
            await togglePopUp();
          } catch (error) {
            errorNotify(error.response.data.message);

            togglePopUp();
          }
        };
        putData();
      }
    }
  };
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dx2me9gqm",
        uploadPreset: "hauiebsf",
      },
      function (error, result) {
        if (result.event === "success") {
          let newArray = productData.images;
          newArray.push(result.info.secure_url);
          setProductData({
            ...productData,
            images: newArray,
          });
        } else if (result.event === "close") {
          onSubmit({ images: "asd" });
        }
      }
    );
  }, [productData]);
  console.log(newImagesArray);

  return (
    <>
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
      {visible ? (
        <div className="fixed z-10 inset-0 flex justify-center items-center bg-[#000000ab] ">
          <div className="w-7/12 bg-white h-1/2 rounded-lg flex flex-col items-center justify-evenly">
            <div className="w-full flex items-end justify-end ">
              <button
                className="mr-10 bg-black text-white px-4 py-2 rounded-full text-lg"
                onClick={() => togglePopUp()}
              >
                X
              </button>
            </div>
            <div>
              {type === "images" ? (
                <button
                  className="bg-white text-black border border-neutral-900 font-normal px-3 py-1 rounded-sm text-lg mt-10"
                  onClick={() => widgetRef.current.open()}
                >
                  Subir Imagenes
                </button>
              ) : (
                <form
                  className="flex flex-col w-full"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <input
                    autoComplete="off"
                    placeholder={`Introduce el nuevo ${route}, y luego presiona editar`}
                    {...register(type, { required: true })}
                    className={
                      errors[type]
                        ? " w-[600px] border-l-[20px]  m-2 bg-white border  text-neutral-900 py-2 px-4 rounded-sm  placeholder:font-light border-red-600  focus:border-red-600"
                        : " w-[600px] border-l-[20px]  m-2 bg-white border  text-neutral-900 py-2 px-4 rounded-sm  placeholder:font-light border-blue-600  focus:border-blue-600"
                    }
                    type={
                      type === "price" || type === "screenSize"
                        ? "number"
                        : "text"
                    }
                  />
                  <button
                    className="bg-white text-black border border-neutral-900 font-normal px-3 py-1 rounded-sm text-lg mt-10"
                    type="submit"
                  >
                    Editar
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
});
export default EditProductPopUp;
