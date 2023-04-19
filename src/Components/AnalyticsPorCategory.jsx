import { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import axios from "axios";
import { Bar, Doughnut } from "react-chartjs-2";

const AnalyticsPorCategory = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/product/getAnalyticsByCategory")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const soldData = {
    labels: ["Laptop", "Tablet", "Celulares", "Television"],
    datasets: [
      {
        data: data.map((item) => item[Object.keys(item)[0]].sold),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#008000"],
      },
    ],
  };

  const clickedData = {
    labels: ["Laptop", "Tablet", "Celulares", "Television"],
    datasets: [
      {
        data: data.map((item) => item[Object.keys(item)[0]].clicked),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#008000"],
      },
    ],
  };

  const options = {
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
    <div className="w-4/12 mx-auto p-5">
      <div className="max-w-300">
        <h2 className="text-xl font-bold mb-2">Ventas por categoría</h2>
        <Doughnut data={soldData} options={options} />
      </div>
      <div className="max-w-500">
        <h2 className="text-xl font-bold mb-2">Clicks por categoría</h2>
        <Doughnut data={clickedData} options={options} />
      </div>
    </div>
  );
};

export default AnalyticsPorCategory;
