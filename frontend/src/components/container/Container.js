import PropTypes from "prop-types";
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

Container.propTypes = {
  keydata: PropTypes.exact({
    calorie: PropTypes.number,
    glucide: PropTypes.number,
    lipide: PropTypes.number,
    proteine: PropTypes.number,
  }),
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
    PropTypes.shape({
      value: PropTypes.number,
      kind: PropTypes.string,
    })
  ),
  score: PropTypes.exact({
    name: PropTypes.string,
    value: PropTypes.number,
  }),
};
