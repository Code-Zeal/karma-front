import React from "react";

const LoadingCart = () => {
  return (
    <>
      <div className="fixed z-10 inset-0 flex justify-center items-center bg-[#000000ab] ">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 border-2 border-t-0 border-r-0 rounded-full animate-spin"></div>
        </div>
      </div>
    </>
  );
};
export default LoadingCart;
