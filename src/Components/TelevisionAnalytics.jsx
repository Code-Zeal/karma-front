import { useEffect, useState } from "react";
import Chart from "chart.js/auto";

import axios from "axios";
import { Bar, Doughnut } from "react-chartjs-2";

const TelevisionAnalytics = (props) => {
  const [getTelevisionAnalytics, setGetTelevisionAnalytics] = useState(null);

  useEffect(() => {
    const analytics = async () => {
      const res = await axios.get(
        `/product/getProductAnalyticsByCategory?category=Television`
      );
      setGetTelevisionAnalytics(res.data);
    };
    analytics();
  }, []);

  const data = {
    labels: getTelevisionAnalytics?.map((item) => item?.model),
    datasets: [
      {
        label: "Cantidad vendida por Categoria Television",
        data: getTelevisionAnalytics?.map((item) => item?.analytical?.sold),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const dataClic = {
    labels: getTelevisionAnalytics?.map((item) => item?.model),
    datasets: [
      {
        label:
          "Cantidad de veces que entran al Detalle de los productos  (Television)",
        data: getTelevisionAnalytics?.map((item) => item?.analytical?.clicked),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        stacked: true,
        ticks: {
          font: {
            size: 18,
          },
        },
        maxBarThickness: 100,
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true,
        ticks: {
          font: {
            size: 18,
          },
          beginAtZero: true,
        },
        grid: {
          drawBorder: false,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          padding: 20,
          font: {
            size: 23,
          },
        },
      },
    },
  };

  return (
    <div className=" w-11/12 m-auto p-5">
      <Bar data={data} options={options} />
      <Bar data={dataClic} options={options} />

      {/* <Doughnut data={data} options={options} /> */}
    </div>
  );
};

export default TelevisionAnalytics;
