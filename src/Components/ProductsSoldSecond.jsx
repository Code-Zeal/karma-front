import { useEffect, useState, useRef } from "react";
import Chart from "chart.js/auto";
import axios from "axios";
import { Bar } from "react-chartjs-2";

const ProductsSoldSecond = (props) => {
  const resetData = () => {
    setGetProductsSoldPerDayDetails(null);
    setTotalQuantity(0);
  };
  const chartContainer = useRef(null);

  const [getProductsSoldPerDayDetails, setGetProductsSoldPerDayDetails] =
    useState(null);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    resetData();
    if (props.startdate && props.enddate) {
      const analytics = async (startDate, endDate) => {
        const res = await axios.get(
          `product/getDetailsFromProductsSoldPerDay?startDate=${startDate
            .toISOString()
            .slice(0, 10)}&endDate=${endDate.toISOString().slice(0, 10)}`
        );
        setGetProductsSoldPerDayDetails(res.data);

        // Calculate total quantity
        let total = 0;
        res.data.forEach((item) => {
          total += item.quantity;
        });
        setTotalQuantity(total);
      };
      analytics(props.startdate, props.enddate);
    }
  }, [props.startdate, props.enddate]);

  useEffect(() => {
    if (getProductsSoldPerDayDetails) {
      const labels = [];
      const quantities = [];
      const dates = [];
      const buyers = [];
      getProductsSoldPerDayDetails.forEach((items) => {
        items.forEach((item) => {
          labels.push(item.name);
          quantities.push(item.quantity);
          dates.push(item.date);
          buyers.push(item.buyer);
        });
      });

      const data = {
        labels: labels,
        datasets: [
          {
            label: "Cantidad vendida",
            data: quantities,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderWidth: 1,
          },
        ],
      };

      const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
          },
          tooltip: {
            mode: "index",
            intersect: false,
            callbacks: {
              label: (context) => {
                const index = context.dataIndex;
                const date = new Date(dates[index]).toLocaleDateString();
                const buyer = buyers[index];
                return `${context.dataset.label}: ${context.formattedValue}\nFecha de compra: ${dates[index]}\nComprado por: ${buyer}`;
              },
            },
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Productos",
              font: {
                size: 16,
              },
            },
          },
          y: {
            title: {
              display: true,
              text: "Cantidad vendida",
              font: {
                size: 16,
              },
            },
            ticks: {
              beginAtZero: true,
            },
          },
        },
      };
      const canvas = chartContainer.current;

      const chart = new Chart(canvas, {
        type: "bar",
        data: data,
        options: options,
      });

      canvas.onclick = (event) => {
        const element = chart?.getElementAtEvent(event);
        if (element.length) {
          const index = element[0].index;
          const date = new Date(dates[index])?.toLocaleDateString();
          console.log(date);

          console.log(dates);
          console.log(index);

          const buyer = buyers[index];
          console.log(`Fecha de compraa: ${date}\nComprado por: ${buyer}`);
        }
      };
      return () => chart.destroy();
    }
  }, [getProductsSoldPerDayDetails]);

  return (
    <>
      <div className="w-full flex justify-center items-center text-xl ">
        <h1>Detalles De las Ventas por Fecha Selecionada</h1>
      </div>
      <div>
        <canvas
          ref={chartContainer}
          id="products-sold-chart"
          width="400"
          height="400"
        ></canvas>
      </div>
    </>
  );
};

export default ProductsSoldSecond;
