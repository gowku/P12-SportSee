import PropTypes from "prop-types";
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
Objectif.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      dureeSession: PropTypes.number,
    })
  ),
  performance: PropTypes.arrayOf(
    PropTypes.exact({
      value: PropTypes.number,
      kind: PropTypes.string,
    })
  ),
  score: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.number,
  }),
};
