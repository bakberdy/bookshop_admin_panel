import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../css/SaleChart.css"; // CSS for styling

const data = [
  { name: "19.12.2024", sales: 10 },
  { name: "20.12.2024", sales: 20 },
  { name: "21.12.2024", sales: 30 },
  { name: "22.12.2024", sales: 5 },
  { name: "23.12.2024", sales: 17 },
];

const SaleChart = () => {
  return (
    <div className="chart-container">
      <h1 className="chart-title">Sale Graph</h1>
      <div className="chart-wrapper">
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#003F62" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SaleChart;