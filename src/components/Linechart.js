import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";

const Pdata = [
  {
    name: "react",
    std: "9",
    fees: "2",
  },
  {
    name: "react native",
    std: "4",
    fees: "8",
  },
  {
    name: "java",
    std: "11",
    fees: "7",
  },
  {
    name: "php",
    std: "7",
    fees: "12",
  },
];

const Linechart = () => {
  return (
    <div>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          data={Pdata}
          width={400}
          height={400}
          margin={{ top: 100, right: 80, left: 40, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            interval={"preserveStartEnd"}
            tickFormatter={(value) => value + " coding"}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="std"
            stroke="red"
            activeDot={{ r: 7 }}
          />
          <Line
            type="monotone"
            dataKey="fees"
            stroke="green"
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
export default Linechart;
