import PropTypes from "prop-types";
import GraphiquePerformance from "../graphiques/graphiquePerformance/GraphiquePerformance";

function Radar({ performance }) {
  return (
    <div className="radar">
      <div className="radar_container">
        <GraphiquePerformance performance={performance} />
      </div>
    </div>
  );
}

export default Radar;

Radar.propTypes = {
  performance: PropTypes.arrayOf(
    PropTypes.exact({
      value: PropTypes.number,
      kind: PropTypes.string,
    })
  ),
};
