import PropTypes from "prop-types";
import GraphiqueScore from "../graphiques/graphiqueScore/GraphiqueScore";

function Kpi({ score }) {
  // console.log(score);
  return (
    <>
      <div className="kpi">
        <p className="kpi_absolute">Score</p>
        <div className="pourcentage">
          {score !== undefined && <p>{score.value}%</p>}
          {/* <p>12%</p> */}
          <p>de votre</p>
          <p>objectif</p>
        </div>
        <GraphiqueScore score={score} />
      </div>
    </>
  );
}

export default Kpi;

Kpi.propTypes = {
  score: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.number,
  }),
};
