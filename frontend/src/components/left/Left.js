import React from "react";
import Activite from "../activite/Activite";
import Objectif from "../objectif/Objectif";

function Left() {
  return (
    <div className="left">
      <Activite />
      <Objectif />
    </div>
  );
}

export default Left;
