import { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import AllProductAnalytics from "./AllProductAnalytics";
import TabletAnalytics from "./TabletAnalytics";
import CellPhoneAnalytics from "./CellPhoneAnalytics";
import LaptopAnalytics from "./LaptopAnalytics";
import TelevisionAnalytics from "./TelevisionAnalytics";
import ProductsSoldPerDay from "./ProductsSoldPerDay";
import AnalyticsPorCategory from "./AnalyticsPorCategory";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import Footer from "./Footer";

const AdminStatistics = (props) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    <AllProductAnalytics />,
    <TabletAnalytics />,
    <CellPhoneAnalytics />,
    <LaptopAnalytics />,
    <TelevisionAnalytics />,
    <AnalyticsPorCategory />,
    <ProductsSoldPerDay />,
  ];
  return (
    <>
      <NavBar />
      <div className="w-full flex flex-row overflow-x-hidden relative">
        <SideBar />
        <div className="overflow-hidden">
          <div className="flex">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`${
                  index === slideIndex ? "inline-block" : "hidden"
                } w-screen`}
              >
                {slide}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={() =>
              setSlideIndex(
                slideIndex === 0 ? slides.length - 1 : slideIndex - 1
              )
            }
            className="bg-gray-200 py-2 px-4 rounded-full"
          >
            Anterior
          </button>
          <button
            onClick={() =>
              setSlideIndex(
                slideIndex === slides.length - 1 ? 0 : slideIndex + 1
              )
            }
            className="bg-gray-200 py-2 px-4 rounded-full"
          >
            Siguiente
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminStatistics;
