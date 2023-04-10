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
                  src="https://cdn.mos.cms.futurecdn.net/6SpXVCxqULhAhfTTsLA69U.jpg"
                  alt="..."
                />
              </Link>
              <Link>
                <img
                  className="cursor-pointer w-full"
                  src="https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/nova-10-pro/imgs/img1/huawei-nova-10-pro-1.png"
                  alt="..."
                />
              </Link>
              <Link>
                <img
                  className="cursor-pointer w-full"
                  src="https://i.ytimg.com/vi/paAnTxzFubA/maxresdefault.jpg"
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
                  src="https://www.techadvisor.com/wp-content/uploads/2022/06/best_huawei_phone_2020_hero.jpg?quality=50&strip=all"
                  alt="..."
                />
              </Link>
              <Link>
                <img
                  className="cursor-pointer w-full"
                  src="https://techcentral.co.za/wp-content/uploads/2021/09/huawei-p30-pro-2156-1120-3.jpg"
                  alt="..."
                />
              </Link>
              <Link>
                <img
                  className="cursor-pointer w-full"
                  src="https://www.huaweicentral.com/wp-content/uploads/2022/09/huawei-mate-50-pro-img1.jpg"
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
                  src="https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/visions/s/img/pc/huawei-vision-s-kv.png"
                  alt="..."
                />
              </Link>
              <Link>
                <img
                  className="cursor-pointer w-full"
                  src="https://i.blogs.es/be0181/huawei-vision-v55i-5/450_1000.jpg"
                  alt="..."
                />
              </Link>

              <Link>
                <img
                  className="cursor-pointer w-full"
                  src="https://awsimages.detik.net.id/community/media/visual/2021/06/14/huawei-smart-screen-tv.jpeg?w=1200"
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
                  src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/08/huawei-mateview-proteccion-ocular-cobertura-90-gama-colores-p3-resolucion-full-hd-2791885.jpg?tf=3840x"
                  alt="..."
                />
              </Link>
              <Link>
                <img
                  className="cursor-pointer w-full"
                  src="https://www.yugatech.com/wp-content/uploads/2021/07/huawei-mateview-gt-review_5.jpg"
                  alt="..."
                />
              </Link>
              <Link>
                <img
                  className="cursor-pointer w-full"
                  src="https://mybroadband.co.za/news/wp-content/uploads/2021/11/Huawei-MateView-Soundbar.png"
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
