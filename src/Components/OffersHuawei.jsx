// @flow
import React from "react";
import { Tabs, Carousel } from "flowbite-react";
import {
  SparklesIcon,
  DevicePhoneMobileIcon,
  TvIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const OffersHuawei = (props) => {
  return (
    <section className=" ">
      <div className="w-full h-min bg-white border-t-2 border-slate-800  flex justify-center items-center pt-4">
        <img
          className="h-[90px]"
          src="https://cdn.icon-icons.com/icons2/2699/PNG/512/huawei_logo_icon_170010.png"
          alt=""
        />
      </div>
      <Tabs.Group aria-label="Tabs with icons" style="underline">
        <Tabs.Item title="Promociones" icon={SparklesIcon}>
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel slideInterval={5000}>
              <Link>
                <img
                  className="cursor-pointer w-full"
                  src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                  alt="..."
                />
              </Link>
              <Link>
                <img
                  className="cursor-pointer w-full"
                  src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                  alt="..."
                />
              </Link>
              <Link>
                <img
                  className="cursor-pointer w-full"
                  src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                  alt="..."
                />
              </Link>
              <Link>
                <img
                  className="cursor-pointer w-full"
                  src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                  alt="..."
                />
              </Link>
              <Link>
                <img
                  className="cursor-pointer w-full"
                  src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                  alt="..."
                />
              </Link>
            </Carousel>
          </div>
        </Tabs.Item>
        <Tabs.Item active={true} title="Moviles" icon={DevicePhoneMobileIcon}>
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel slideInterval={5000}>
              <Link>
                <img
                  className="cursor-pointer w-full"
                  src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                  alt="..."
                />
              </Link>
              <Link>
                <img
                  className="cursor-pointer w-full"
                  src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                  alt="..."
                />
              </Link>
              <Link>
                <img
                  className="cursor-pointer w-full"
                  src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                  alt="..."
                />
              </Link>
              <Link>
                <img
                  className="cursor-pointer w-full"
                  src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                  alt="..."
                />
              </Link>
              <Link>
                <img
                  className="cursor-pointer w-full"
                  src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                  alt="..."
                />
              </Link>
            </Carousel>
          </div>
        </Tabs.Item>
        <Tabs.Item title="TV & AV" icon={TvIcon}>
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel slideInterval={5000}>
              <Link>
                <img
                  className="cursor-pointer w-full"
                  src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                  alt="..."
                />
              </Link>
              <Link>
                <img
                  className="cursor-pointer w-full"
                  src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                  alt="..."
                />
              </Link>
              <Link>
                <img
                  className="cursor-pointer w-full"
                  src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                  alt="..."
                />
              </Link>
              <Link>
                <img
                  className="cursor-pointer w-full"
                  src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                  alt="..."
                />
              </Link>
              <Link>
                <img
                  className="cursor-pointer w-full"
                  src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                  alt="..."
                />
              </Link>
            </Carousel>
          </div>
        </Tabs.Item>
        <Tabs.Item title="Monitores" icon={ComputerDesktopIcon}>
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel slideInterval={5000}>
              <Link>
                <img
                  className="cursor-pointer w-full"
                  src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                  alt="..."
                />
              </Link>
              <Link>
                <img
                  className="cursor-pointer w-full"
                  src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                  alt="..."
                />
              </Link>
              <Link>
                <img
                  className="cursor-pointer w-full"
                  src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                  alt="..."
                />
              </Link>
              <Link>
                <img
                  className="cursor-pointer w-full"
                  src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                  alt="..."
                />
              </Link>
              <Link>
                <img
                  className="cursor-pointer w-full"
                  src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                  alt="..."
                />
              </Link>
            </Carousel>
          </div>
        </Tabs.Item>
      </Tabs.Group>
    </section>
  );
};
export default OffersHuawei;
