import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import Chart from "chart.js/auto";

import axios from "axios";
import { Bar, Doughnut } from "react-chartjs-2";
const ProductsSoldPerDay = (props) => {
  const [getProductsSoldPerDay, setGetProductsSoldPerDay] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [totalQuantity, setTotalQuantity] = useState(0);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    setGetProductsSoldPerDay(null);
    setTotalQuantity(0);
  };
  console.log(startDate);

  const handleEndDateChange = (date) => {
    setEndDate(date);
    setGetProductsSoldPerDay(null);
    setTotalQuantity(0);
  };

  useEffect(() => {
    if (startDate && endDate) {
      const analytics = async (startDate, endDate) => {
        const res = await axios.get(
          `/product/getProductsSoldPerDay?startDate=${startDate.toLocaleDateString()}&endDate=${endDate.toLocaleDateString()}`
        );
        setGetProductsSoldPerDay(res.data);

        // Calculate total quantity
        let total = 0;
        res.data.forEach((item) => {
          total += item.quantity;
        });
        setTotalQuantity(total);
      };
      analytics(startDate, endDate);
    }
  }, [startDate, endDate]);

  const data = {
    labels: getProductsSoldPerDay?.map((item) => item?.name),
    datasets: [
      {
        label: "Cantidad Comprada",
        data: getProductsSoldPerDay?.map((item) => item?.quantity),

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
    plugins: {
      title: {
        display: true,
        text: `Productos vendidos desde ${startDate?.toLocaleDateString()} hasta ${endDate?.toLocaleDateString()}`,
        font: {
          size: 28,
        },
        padding: {
          top: 20,
          bottom: 20,
        },
      },
    },
  };
  return (
    <div className=" w-11/12 m-auto p-5">
      <div className="flex justify-center mb-4">
        <label htmlFor="startDate" className="mr-4">
          Start Date:
        </label>
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          dateFormat="yyyy-MM-dd"
        />
      </div>
      <div className="flex justify-center">
        <label htmlFor="endDate" className="mr-4">
          End Date:
        </label>
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          dateFormat="yyyy-MM-dd"
        />
      </div>
      <Bar data={data} options={options} />
      <p>Total quantity: {totalQuantity}</p>
    </div>
  );
};

export default ProductsSoldPerDay;
