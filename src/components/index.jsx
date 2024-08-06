import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

// Generate an array of months
const generateMonths = () => {
  const months = [];
  for (let i = 0; i < 60; i++) {
    const date = new Date();
    date.setMonth(date.getMonth() - i);
    months.push(
      date.toLocaleString("default", { month: "short" }) +
        " " +
        date.getFullYear()
    );
  }
  return months.reverse();
};

const USDUZSMonthlyChart = () => {
  // Data for the chart
  const data = {
    labels: generateMonths(), // Generate month labels
    datasets: [
      {
        label: "USD/UZS",
        data: Array.from(
          { length: 60 },
          () => Math.random() * (12000 - 9000) + 9000
        ), // Example data
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(context.parsed.y);
            }
            return label;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Month",
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 12,
        },
      },
      y: {
        title: {
          display: true,
          text: "Rate (UZS per USD)",
        },
        ticks: {
          callback: function (value) {
            return new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(value);
          },
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default USDUZSMonthlyChart;
