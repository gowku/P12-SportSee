import PropTypes from "prop-types";
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts";

function GraphiquePerformance({ performance }) {
  //   console.log(performance);
  return (
    <ResponsiveContainer>
      <RadarChart outerRadius={75} data={performance}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis dataKey="kind" tickLine={false} stroke={"#ffffff"} />
        {/* <PolarRadiusAxis tickCount="6" x1="129" y1="140" x2="219" y2="140" /> */}
        <Radar dataKey="value" legendType="none" fill="rgba(255, 1, 1, 0.7)" />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default GraphiquePerformance;

{
  /* <PolarGrid radialLines={false} /> */
}

GraphiquePerformance.propTypes = {
  performance: PropTypes.arrayOf(
    PropTypes.exact({
      value: PropTypes.number,
      kind: PropTypes.string,
    })
  ),
};
