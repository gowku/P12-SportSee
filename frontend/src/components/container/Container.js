import React from "react";
import Left from "../left/Left";
import Right from "../right/Right";

function Container({ keyData, activity, sessions, performance, score }) {
  return (
    <div className="container">
      <Left activity={activity} sessions={sessions} performance={performance} score={score} />
      <Right keyData={keyData} />
    </div>
  );
}

export default Container;
