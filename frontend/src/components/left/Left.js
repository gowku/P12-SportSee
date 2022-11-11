import PropTypes from "prop-types";
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

Left.propTypes = {
  activity: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number,
      kilogramme: PropTypes.number,
      calories: PropTypes.number,
    })
  ),
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
