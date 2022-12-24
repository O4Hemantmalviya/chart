import React from "react";
import {
  Legend,
  ScatterChart,
  Tooltip,
  YAxis,
  XAxis,
  ZAxis,
  Scatter,
  CartesianGrid,
} from "recharts";

const Scatterchart = () => {
  const data01 = [
    {
      x: 100,
      y: 150,
      z: 200,
    },
    {
      x: 120,
      y: 200,
      z: 260,
    },
    {
      x: 150,
      y: 300,
      z: 400,
    },
    {
      x: 200,
      y: 350,
      z: 280,
    },
    {
      x: 250,
      y: 400,
      z: 500,
    },
    {
      x: 300,
      y: 450,
      z: 200,
    },
  ];

  return (
    <div>
      <ScatterChart
        width={730}
        height={250}
        margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" name="stature" unit="cm" />
        <YAxis dataKey="y" name="weight" unit="kg" />
        {/* <ZAxis dataKey="z" range={[64, 144]} name="score" unit="km" /> */}
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Legend />
        <Scatter name="A school" data={data01} fill="red" />
        {/* <Scatter name="B school" data={data02} fill="#82ca9d" /> */}
      </ScatterChart>
    </div>
  );
};
export default Scatterchart;
