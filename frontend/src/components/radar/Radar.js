import React from "react";
import GraphiquePerformance from "../graphiques/graphiquePerformance/GraphiquePerformance";

function Radar({ performance }) {
  return (
    <div className="radar">
      <div className="radar_container">
        <GraphiquePerformance performance={performance} />
      </div>
    </div>
  );
}

export default Radar;
