import React from "react";
import Session from "../session/Session";
import Radar from "../radar/Radar";
import Kpi from "../kpi/Kpi";

function Objectif() {
  return (
    <div class="objectif">
      <Session />
      <Radar />
      <Kpi />
    </div>
  );
}

export default Objectif;
