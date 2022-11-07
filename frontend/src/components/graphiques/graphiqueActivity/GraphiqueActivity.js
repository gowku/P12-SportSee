import { PureComponent } from "react";
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";

function GraphiqueActivity({ activity }) {
  return (
    <ResponsiveContainer width="95%" height={250}>
      <BarChart data={activity} margin={{ top: 20, left: 10, right: -20, bottom: -5 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="day" tickLine={false} padding={{ left: -50, right: -50 }} />
        <YAxis
          yAxisId={1}
          tickLine={false}
          orientation="right"
          dataKey="kilogramme"
          domain={["dataMin - 5", "dataMax + 5"]}
          tickCount="3.5"
          axisLine={false}
        />
        <YAxis hide yAxisId={2} dataKey="calories" domain={[0, "dataMax + 100"]} />
        <Tooltip content={<CustomizedTooltip />} />
        <Legend />
        <Bar yAxisId={1} dataKey="kilogramme" fill="#282D30" legendType="none" barSize={7} radius={[5, 5, 0, 0]} />
        <Bar yAxisId={2} dataKey="calories" fill="#e60000" legendType="none" barSize={7} radius={[5, 5, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default GraphiqueActivity;

function CustomizedTooltip({ active, payload, label }) {
  if (active) {
    // console.log(payload[0].payload);
    return (
      <ul className="tooltip_activite">
        <li>{payload[0].payload.kilogramme}Kg </li>
        <li>{payload[0].payload.calories}Kcal </li>
      </ul>
    );
  }
  return null;
}

// class CustomizedAxisTick extends PureComponent {
//   render() {
//     const { x, y, stroke, payload } = this.props;

//     return (
//       <g transform={`translate(${x},${y})`}>
//         <text x={0} y={0} dy={16} textAnchor="end" fill="#666">
//           {payload.value}
//         </text>
//       </g>
//     );
//   }
// }
// tick={<CustomizedAxisTick />}
