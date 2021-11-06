import React from "react";
import "./Chart.css";

import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  Line,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

const Chart = ({ title, data, grid, dataKey }) => {
  return (
    <div className="chart-container">
      <h3 className="chart-title">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd"></XAxis>
          <Line type="monotone" dataKey="user" stroke="#5550bd"></Line>
          <Line type="monotone" dataKey="units" stroke="#8abd50"></Line>
          <Line type="monotone" dataKey="costs" stroke="#bd5050"></Line>
          <Tooltip />
          {grid && <CartesianGrid stroke="#eedddd" strokeDasharray="5 5" />}
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
