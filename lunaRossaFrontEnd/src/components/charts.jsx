import React, { useEffect, useState } from "react";
import { getAllRestaurantes } from "../data/getRestaurantes";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  CategoryScale,
  BarElement,
} from "chart.js";
import { Scatter, Line } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  CategoryScale,
  BarElement
);
export const ScatterChart = () => {
  const [restaurantes, setRestaurantes] = useState([]);
  const [chart, setChart] = useState([]);

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  useEffect(() => {
    getAllRestaurantes().then((data) => setRestaurantes(data));
  }, []);

  useEffect(() => {
    const data = {
      datasets: [
        {
          label: "Por puntuación",
          data: restaurantes.map((r) => {
            return {
              x: r.id,
              y: r.rate,
            };
          }),
          backgroundColor: "rgba(255, 99, 132, 1)",
        },
      ],
    };

    setChart(<Scatter options={options} data={data} />);
  }, [restaurantes]);

  return <div>{restaurantes.length != 0 && chart}</div>;
};

export const LineChart = () => {
  const [restaurantes, setRestaurantes] = useState([]);
  const [chart, setChart] = useState([]);

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Chart.js Bar Chart"
      },
    },
  };

  useEffect(() => {
    getAllRestaurantes().then((data) => setRestaurantes(data));
  }, []);

  useEffect(() => {
    const labels = restaurantes.map(r => r.id) 
    const data = {

      datasets: [
        {
          label: "Reseñas",
          data: restaurantes.map((r) => r.resenas),
          backgroundColor: "rgba(255, 99, 132, 1)",
        },
      ],
      labels
    };
    setChart(<Line options={options} data={data} />);
  }, [restaurantes]);

  return <div>{restaurantes.length != 0 && chart}</div>;
};

export const RestaurantesTotales = () => {
  const [restaurantes, setRestaurantes] = useState([]);
  const [total, setTotal] = useState(0)
  useEffect(() => {
    getAllRestaurantes().then((data) => setRestaurantes(data));
  }, [total]);
  useEffect(() => {
    setTotal(restaurantes.length)
  }, [restaurantes])
  return (
    total
  )
}