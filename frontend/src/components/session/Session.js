import PropTypes from "prop-types";

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
Session.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      dureeSession: PropTypes.number,
    })
  ),
};
