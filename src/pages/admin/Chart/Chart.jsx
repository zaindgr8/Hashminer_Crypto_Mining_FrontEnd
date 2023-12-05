
import React from "react";
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis } from "recharts";

// import css file
import "./chart.scss";

/* The `data` array is used to store the data points for the chart. Each object in the array represents
a data point and has two properties: `name` and `total`. */
// Place your own data here
const data = [
  {
    name: "January",
    total: 700,
  },
  {
    name: "February",
    total: 1250,
  },
  {
    name: "March",
    total: 1410,
  },
  {
    name: "April",
    total: 1100,
  },
  {
    name: "May",
    total: 700,
  },
  {
    name: "June",
    total: 1000,
  },
  {
    name: "July",
    total: 1250,
  },
  {
    name: "August",
    total: 1050,
  },
  {
    name: "September",
    total: 800,
  },
  {
    name: "October",
    total: 960,
  },
  {
    name: "November",
    total: 1150,
  },
  {
    name: "December",
    total: 1250,
  },
];

function Chart({ height, title }) {
  return (
    <div className="chart_sec">
      <div>
        <div className="title">
          <p>{title} (Last 1 year)</p>
        </div>

        <div style={{ width: "100%", height: 300 }}>
          {/* <ResponsiveContainer> */}

          {/* </ResponsiveContainer> */}
        </div>
      </div>
    </div>
  );
}

export default Chart;
