import React from "react";
import GraphiquePerformance from "../graphiques/graphiquePerformance/GraphiquePerformance";

function Radar({ performance }) {
  return (
    <div className="radar">
      <GraphiquePerformance performance={performance} />
    </div>
  );
}

export default Radar;
