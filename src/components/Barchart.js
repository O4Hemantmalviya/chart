import React from "react";
import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  Bar,
} from "recharts";

const data = [
  {
    name: "1",
    a: 4000,
    b: 3000,
  },
  {
    name: "2",
    a: 3000,
    b: 1398,
  },
  {
    name: "3",
    a: 2000,
    b: 9800,
  },
  {
    name: "4",
    a: 2780,
    b: 3908,
  },
  {
    name: "5",
    a: 1890,
    b: 4800,
  },
];

const Barchart = () => {
  return (
    <div>
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="a" fill="red" />
        <Bar dataKey="b" fill="blue" />
      </BarChart>
    </div>
  );
};
export default Barchart;
