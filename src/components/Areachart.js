import React from "react";
import {
  AreaChart,
  linearGradient,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: " A",
    uv: 4000,
    pv: 2400,
    amt: 4000,
  },
  {
    name: "B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: " C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: " D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
];

const Areachart = () => {
  return (
    <div>
      <AreaChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 50, right: 50, left: 50, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="4 4" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="red"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stroke="green"
          fillOpacity={0.5}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </div>
  );
};
export default Areachart;
