import React from "react";
import GraphiqueSessions from "../graphiques/graphiqueSession/GraphiqueSessions";

function Session({ sessions }) {
  return (
    <div className="session">
      <p>Durée moyenne des sessions</p>
      <GraphiqueSessions sessions={sessions} />
    </div>
  );
}

export default Session;
