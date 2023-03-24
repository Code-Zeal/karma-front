import React, { useEffect, useState } from "react";
import Logout from "./Logout";

export default function BottomNavigation() {
  const nameUrl = window.location.pathname;
  console.log(nameUrl);
  const [info, setInfo] = useState("");
  useEffect(() => {
    switch (nameUrl) {
      case "/profile/orders":
        setInfo("orders");
        break;
      case "/profile/data":
        setInfo("data");
        break;
      default: {
        return;
      }
    }
  }, [nameUrl]);
  return (
    <div class="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div class="grid h-full max-w-lg grid-cols-4 mx-auto items-center justify-center">
        <a href="/">
          <button
            type="button"
            class="inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600"
          >
            <svg
              class="w-7 h-7  text-gray-500 dark:text-gray-400
          group-hover:text-blue-600 dark:group-hover:text-blue-500 mb-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              width="800px"
              height="800px"
              viewBox="-4.5 0 32 32"
              version="1.1"
            >
              <title>home</title>
              <path d="M19.469 12.594l3.625 3.313c0.438 0.406 0.313 0.719-0.281 0.719h-2.719v8.656c0 0.594-0.5 1.125-1.094 1.125h-4.719v-6.063c0-0.594-0.531-1.125-1.125-1.125h-2.969c-0.594 0-1.125 0.531-1.125 1.125v6.063h-4.719c-0.594 0-1.125-0.531-1.125-1.125v-8.656h-2.688c-0.594 0-0.719-0.313-0.281-0.719l10.594-9.625c0.438-0.406 1.188-0.406 1.656 0l2.406 2.156v-1.719c0-0.594 0.531-1.125 1.125-1.125h2.344c0.594 0 1.094 0.531 1.094 1.125v5.875z" />
            </svg>
            <span class="text-sm text-black dark:text-gray-400 ">Home</span>
          </button>
        </a>
        <a
          href="/profile/orders"
          className={
            info === "orders"
              ? "bg-[#171717] hover:bg-[black]  rounded-lg p-1"
              : ""
          }
        >
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 border-r border-gray-200   group border-gray-600"
          >
            <svg
              class="w-5 h-5  text-gray-500 dark:text-gray-400
          group-hover:text-blue-600 dark:group-hover:text-blue-500 mb-1"
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
              width="30px"
              height="30px"
              viewBox="0 0 16 16"
              version="1.1"
            >
              <path
                fill={info !== "orders" ? "#000000" : "#FFFFFF"}
                d="M8 0l-8 2v10l8 4 8-4v-10l-8-2zM8 1l2.1 0.5-5.9 1.9-2.3-0.8 6.1-1.6zM8 14.9l-7-3.5v-8.1l3 1v3.4l1 0.3v-3.3l3 1v9.2zM8.5 4.8l-2.7-0.9 6.2-1.9 2.4 0.6-5.9 2.2z"
              />
            </svg>
            <span
              class={
                info !== "orders"
                  ? "text-sm text-black dark:text-gray-400  "
                  : "text-sm text-white dark:text-gray-400  group-hover:text-white"
              }
            >
              Mis Pedidos
            </span>
          </button>
        </a>

        <a
          href="/profile/data"
          className={
            info === "data"
              ? "bg-[#171717] hover:bg-[black]  rounded-lg p-1"
              : ""
          }
        >
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 border-r border-gray-200   group border-gray-600"
          >
            <svg
              class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
              height="800px"
              width="800px"
              version="1.1"
              id="_x32_"
              viewBox="0 0 512 512"
              space="preserve"
            >
              <g>
                <path
                  fill={info !== "data" ? "#000000" : "#FFFFFF"}
                  class="st0"
                  d="M493.118,60.602c-40.138,17.719-93.777,20.322-143.881-0.447C324.872,50.055,273.523,25.223,255.999,0   c-17.521,25.223-68.871,50.055-93.236,60.154C112.657,80.924,59.021,78.32,18.88,60.602c-7.203-3.182-15.096,2.08-15.096,9.955   C3.784,493.475,255.999,512,255.999,512s252.217-18.525,252.217-441.443C508.216,62.682,500.323,57.42,493.118,60.602z    M89.155,125.33c32.033,0,63.305-6.23,92.947-18.518c16.129-6.686,46.719-20.51,73.896-39.258   c27.178,18.748,57.77,32.572,73.898,39.258c29.647,12.289,60.918,18.52,92.949,18.518c11.256,0,22.45-0.801,33.428-2.367   C439.72,416.264,284.815,456.182,255.999,461.07c-28.814-4.889-183.72-44.807-200.273-338.108   C66.704,124.531,77.899,125.33,89.155,125.33z"
                />
                <path
                  fill={info !== "data" ? "#000000" : "#FFFFFF"}
                  class="st0"
                  d="M255.999,409.279c29.94-8.686,119.684-49.879,144.676-234.27c-30.955-2.328-61.182-9.543-90.117-21.539   c-12.354-5.121-32.789-14.211-54.559-26.502c-21.768,12.291-42.201,21.381-54.556,26.502   c-28.932,11.994-59.156,19.209-90.117,21.539C136.317,359.4,226.06,400.594,255.999,409.279z"
                />
              </g>
            </svg>
            <span
              class={
                info !== "data" ? "text-sm text-[black]" : "text-sm text-white"
              }
            >
              Mis Datos
            </span>
          </button>
        </a>
        <div class="inline-flex flex-col items-center justify-center px-4 text-[black] text-sm cursor-pointer">
          <svg
            class="w-6 h-6 mb-1 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="#000000"
          >
            <path
              fill="#000000"
              d="M22 6.62219V17.245C22 18.3579 21.2857 19.4708 20.1633 19.8754L15.0612 21.7977C14.7551 21.8988 14.449 22 14.0408 22C13.5306 22 12.9184 21.7977 12.4082 21.4942C12.2041 21.2918 11.898 21.0895 11.7959 20.8871H7.91837C6.38776 20.8871 5.06122 19.6731 5.06122 18.0544V17.0427C5.06122 16.638 5.36735 16.2333 5.87755 16.2333C6.38776 16.2333 6.69388 16.5368 6.69388 17.0427V18.0544C6.69388 18.7626 7.30612 19.2684 7.91837 19.2684H11.2857V4.69997H7.91837C7.20408 4.69997 6.69388 5.20582 6.69388 5.91401V6.9257C6.69388 7.33038 6.38776 7.73506 5.87755 7.73506C5.36735 7.73506 5.06122 7.33038 5.06122 6.9257V5.91401C5.06122 4.39646 6.28572 3.08125 7.91837 3.08125H11.7959C12 2.87891 12.2041 2.67657 12.4082 2.47423C13.2245 1.96838 14.1429 1.86721 15.0612 2.17072L20.1633 4.09295C21.1837 4.39646 22 5.50933 22 6.62219Z"
            />
            <path
              fill="#000000"
              d="M4.85714 14.8169C4.65306 14.8169 4.44898 14.7158 4.34694 14.6146L2.30612 12.5912C2.20408 12.49 2.20408 12.3889 2.10204 12.3889C2.10204 12.2877 2 12.1865 2 12.0854C2 11.9842 2 11.883 2.10204 11.7819C2.10204 11.6807 2.20408 11.5795 2.30612 11.5795L4.34694 9.55612C4.65306 9.25261 5.16327 9.25261 5.46939 9.55612C5.77551 9.85963 5.77551 10.3655 5.46939 10.669L4.7551 11.3772H8.93878C9.34694 11.3772 9.7551 11.6807 9.7551 12.1865C9.7551 12.6924 9.34694 12.7936 8.93878 12.7936H4.65306L5.36735 13.5017C5.67347 13.8052 5.67347 14.3111 5.36735 14.6146C5.26531 14.7158 5.06122 14.8169 4.85714 14.8169Z"
            />
          </svg>
          <Logout></Logout>
        </div>
      </div>
    </div>
  );
}
