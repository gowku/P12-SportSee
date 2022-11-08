import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

function GraphiqueScore({ score }) {
  //   console.log(score);
  let scoreData = [];
  let graphValue;
  if (score !== undefined) {
    scoreData = [];
    scoreData.push(score);
    console.log(scoreData);
    graphValue = 3.6 * scoreData[0].value;
    console.log(graphValue);
  }

  return (
    <ResponsiveContainer width="100%" height={250}>
      <RadialBarChart innerRadius="100%" barSize={10} outerRadius="70%" data={scoreData} startAngle={180} endAngle={180 - graphValue}>
        <RadialBar minAngle={15} background clockWise={true} dataKey="value" style={{ fill: "#e60000" }} cornerRadius={10} />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}

export default GraphiqueScore;
