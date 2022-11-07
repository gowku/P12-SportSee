import React from "react";
import Session from "../session/Session";
import Radar from "../radar/Radar";
import Kpi from "../kpi/Kpi";

function Objectif({ sessions, performance, score }) {
  return (
    <div className="objectif">
      <Session sessions={sessions} />
      <Radar performance={performance} />
      <Kpi score={score} />
    </div>
  );
}

export default Objectif;
