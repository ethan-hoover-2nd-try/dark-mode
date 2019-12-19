import React from "react";
import moment from "moment";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const Chart = ({ sparklineData }) => {
  const formattedData = sparklineData
    .map((price, idx) => {
      if (idx % 6 === 0) {
        const timeToSubtract = 168 - idx;
        const date = moment()
          .subtract(timeToSubtract, "hours")
          .format("ddd h:mma");
        return { value: price, date };
      } else if (idx === sparklineData.length - 1) {
        const date = moment().format("ddd h:mma");
        return { value: price, date };
      }
      return null;
    })
    .filter(data => data);

  return (
    <LineChart width={1600} height={500} data={formattedData}>
      <Line type="monotone" dataKey="value" stroke="#3495eb" />
      <CartesianGrid stroke="#ccc" strokeDasharray="10 10" />
      <XAxis dataKey="date" interval={5} />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};

export default Chart;