import React from "react";
import { Pie, PieChart } from "recharts";
const Piechart = () => {
  const data01 = [
    {
      name: "Group A",
      value: 400,
      fill: "skyblue",
    },
    {
      name: "Group B",
      value: 300,
      fill: "black",
    },
    {
      name: "Group C",
      value: 300,
      fill: "yellow",
    },
    {
      name: "Group D",
      value: 200,
      fill: "blue",
    },
    {
      name: "Group E",
      value: 278,
      fill: "green",
    },
    {
      name: "Group F",
      value: 189,
      fill: "red",
    },
  ];

  return (
    <div>
      <PieChart width={730} height={250}>
        <Pie
          data={data01}
          dataKey="value"
          nameKey="name"
        //   cx="50%"
        //   cy="50%"
          innerRadius={40}
          outerRadius={80}
          //   fill="#8884d8"
          label
        />
      </PieChart>
    </div>
  );
};

export default Piechart;
