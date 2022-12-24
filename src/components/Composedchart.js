import React from "react";
import {
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  Bar,
  Line,
  Area,
} from "recharts";
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 5400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

const Composedchart = () => {
  return (
    <div>
      <ComposedChart width={730} height={250} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="pv" barSize={20} fill="blue" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </ComposedChart>
    </div>
  );
};
export default Composedchart;
