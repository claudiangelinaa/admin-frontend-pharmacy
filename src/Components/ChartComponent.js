import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

export default function ChartComponent(props) {
  return (
    <div>
      <Line
        data={props.data}
        // options={{
        //   title: {
        //     display: this.props.displayTitle,
        //     text: "Largest Cities In " + this.props.location,
        //     fontSize: 25,
        //   },
        //   legend: {
        //     display: this.props.displayLegend,
        //     position: this.props.legendPosition,
        //   },
        // }}
      />
    </div>
  );
}
