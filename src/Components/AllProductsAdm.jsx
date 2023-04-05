import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";

const AllProductsAdm = forwardRef((props, ref) => {
  const [input, setInput] = useState("");
  useEffect(() => {}, []);

  const [visible, setVisible] = useState(false);
  const togglePopUp = () => {
    setVisible(!visible);
  };
  useImperativeHandle(ref, () => {
    return {
      togglePopUp,
    };
  });
  return (
    <>
      {visible ? (
        <div className="fixed z-10 inset-0 flex justify-center items-center bg-[#000000ab] ">
          <div className="w-7/12 bg-white h-1/2 rounded-lg flex flex-col items-center justify-evenly">
            <div className=" w-full flex justify-around">
              <input type="text" placeholder="buscar" />
              <button onClick={togglePopUp}>X</button>
            </div>
            <div className="w-full"> </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
});
export default AllProductsAdm;
