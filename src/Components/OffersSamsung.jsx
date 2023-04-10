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

const OffersSamsung = (props) => {
  return (
    <section className=" ">
      <div className="w-full h-min bg-white border-t-2 border-slate-800  flex justify-center items-center pt-4">
        <img
          className="h-[90px]"
          src="https://www.seekpng.com/png/full/2-21861_samsung-logo-samsung-logo-png-black.png"
          alt=""
        />
      </div>
      <Tabs.Group
        aria-label="Tabs with icons"
        style="underline"
        className="m-auto"
      >
        <Tabs.Item title="Promociones" icon={SparklesIcon}>
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel slideInterval={5000} className="w-1/2 m-auto">
              <Link>
                <img
                  className="cursor-pointer w-full"
                  src="https://technieuws.com/wp-content/uploads/2022/05/Samsung_GalaxyS22.jpg"
                  alt="..."
                />
              </Link>
              <Link>
                <img
                  className="cursor-pointer w-full"
                  src="https://www.techadvisor.com/wp-content/uploads/2022/06/best_samsung_galaxy_phone_2022_hero_mk1.jpg?quality=50&strip=all&w=1024"
                  alt="..."
                />
              </Link>
              <Link>
                <img
                  className="cursor-pointer w-full"
                  src="https://static.bhphotovideo.com/explora/sites/default/files/styles/960/public/ts-samsung-galaxy-unpacked-2020-s20_ultra-galaxy-z-flip-galaxy-buds.png?itok=HkBIzEmn"
                  alt="..."
                />
              </Link>
            </Carousel>
          </div>
        </Tabs.Item>
        <Tabs.Item active={true} title="Moviles" icon={DevicePhoneMobileIcon}>
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel slideInterval={5000} className="w-1/2 m-auto">
              <Link>
                <img
                  className="cursor-pointer w-full"
                  src="https://images.samsung.com/is/image/samsung/assets/latin/2302/home/HOME_DM3_KV_MX-KV_743X418_pc.jpg?$743_418_PNG$"
                  alt="..."
                />
              </Link>
              <Link>
                <img
                  className="cursor-pointer w-full"
                  src="https://images.samsung.com/is/image/samsung/assets/latin/2208/home/Home_Q4_KV_MX-KV_743X418_pc.jpg?$743_418_PNG$"
                  alt="..."
                />
              </Link>
              <Link>
                <img
                  className="cursor-pointer w-full"
                  src="https://images.samsung.com/is/image/samsung/assets/latin/2208/home/Home_B4_KV_MX-KV_743X418_pc.jpg?$743_418_PNG$"
                  alt="..."
                />
              </Link>
              <Link>
                <img
                  className="cursor-pointer w-full"
                  src="https://blog.phonehouse.es/wp-content/uploads/2022/03/galaxy-s22_banner_ar.jpg"
                  alt="..."
                />
              </Link>
            </Carousel>
          </div>
        </Tabs.Item>
        <Tabs.Item title="TV & AV" icon={TvIcon}>
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel slideInterval={5000} className="w-1/2 m-auto">
              <Link>
                <img
                  className="cursor-pointer w-full"
                  src="https://img.global.news.samsung.com/in/wp-content/uploads/2022/04/11630_Neo_Qled_Banner_3000x2000.jpg"
                  alt="..."
                />
              </Link>
              <Link>
                <img
                  className="cursor-pointer w-full"
                  src="https://www.theinsidersnet.com/site/public/images/pl_12/402/202102/112801_17022021_311_C21_Website_SG_TVs_13SKUs_USA_Banner.jpg"
                  alt="..."
                />
              </Link>
              <Link>
                <img
                  className="cursor-pointer w-full"
                  src="https://hamroprice.com/wp-content/uploads/2021/11/Samsung-TV-price-in-nepal-2021.jpg"
                  alt="..."
                />
              </Link>
              <Link>
                <img
                  className="cursor-pointer w-full"
                  src="https://cdn.mos.cms.futurecdn.net/8wZjwhEYQjYx6TraffNxpZ.jpg"
                  alt="..."
                />
              </Link>
            </Carousel>
          </div>
        </Tabs.Item>
        <Tabs.Item title="Monitores" icon={ComputerDesktopIcon}>
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel slideInterval={5000} className="w-1/2 m-auto">
              <Link>
                <img
                  className="cursor-pointer w-full"
                  src="https://imgur.com/4CYxlWx.jpg"
                  alt="..."
                />
              </Link>
              <Link>
                <img
                  className="cursor-pointer w-full"
                  src="https://www.theinsidersnet.com/site/public/images/pl_12/402/201811/083858_20112018_311_C18_Website_SG_Monitors_USA_Banner.jpg"
                  alt="..."
                />
              </Link>
              <Link>
                <img
                  className="cursor-pointer w-full"
                  src="https://s3b.cashify.in/gpro/uploads/2022/12/06122814/Best-Samsung-Monitors-You-Can-Buy-Today.jpg"
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
export default OffersSamsung;
