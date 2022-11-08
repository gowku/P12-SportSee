import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts";

function GraphiquePerformance({ performance }) {
  console.log(performance);
  return (
    <ResponsiveContainer width="100%" height={280}>
      <RadarChart outerRadius={90} data={performance}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" tickLine={false} stroke={"#ffffff"} />
        <PolarRadiusAxis tickCount={6} />
        <Radar dataKey="value" legendType="none" fill="rgba(255, 1, 1, 0.7)" />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default GraphiquePerformance;
