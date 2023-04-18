import { useEffect, useState } from "react";
import Chart from "chart.js/auto";

import axios from "axios";
import { Bar } from "react-chartjs-2";

const AllProductAnalytics = (props) => {
  const [getAllProductAnalytics, setGetAllProductAnalytics] = useState(null);
  console.log(getAllProductAnalytics);

  useEffect(() => {
    const analytics = async () => {
      const res = await axios.get(`/product/getAllProductAnalytics`);
      setGetAllProductAnalytics(res.data);
    };
    analytics();
  }, []);
  //   Chart.register(Bar);

  const data = {
    labels: getAllProductAnalytics?.map((item) => item?.model),
    datasets: [
      {
        label: "Cantidad vendida por producto",
        fontSize: 40,

        data: getAllProductAnalytics?.map((item) => item?.analytical?.sold),
        fill: false,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
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
    </div>
  );
};

export default AllProductAnalytics;
