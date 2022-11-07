import React from "react";
import Activite from "../activite/Activite";
import Objectif from "../objectif/Objectif";

function Left({ activity, sessions, performance, score }) {
  return (
    <div className="left">
      <Activite activity={activity} />
      <Objectif sessions={sessions} performance={performance} score={score} />
    </div>
  );
}

export default Left;
