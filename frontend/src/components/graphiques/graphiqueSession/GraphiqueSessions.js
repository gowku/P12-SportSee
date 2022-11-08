import { PureComponent } from "react";
import { ResponsiveContainer, LineChart, XAxis, YAxis, Tooltip, Line } from "recharts";

function GraphiqueSessions({ sessions }) {
  //   console.log(sessions);

  return (
    <ResponsiveContainer width="100%" height={170}>
      <LineChart data={sessions}>
        <XAxis dataKey="day" axisLine={false} tickLine={false} tick={<CustomizedAxisTick />} interval={"preserveStartEnd"} />
        <YAxis hide dataKey="dureeSession" />
        <Tooltip content={<CustomizedTooltip />} />
        <Line dataKey="dureeSession" legendType="none" type="natural" stroke="#FFFFFF" strokeWidth="1.5" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default GraphiqueSessions;

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text className="xAxis-text" x={0} y={25} dx={10} textAnchor="end" fill="#FFFFFF">
          {payload.value}
        </text>
      </g>
    );
  }
}

function CustomizedTooltip({ active, payload, label }) {
  if (active) {
    console.log(payload[0].payload);
    return <div className="tooltip_session">{payload[0].payload.dureeSession} min</div>;
  }
  return null;
}
