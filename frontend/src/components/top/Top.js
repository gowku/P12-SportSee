import PropTypes from "prop-types";

function Top({ name }) {
  return (
    <div className="top">
      <p>
        Bonjour <span>{name}</span>
      </p>
      <p>Félicitation ! Vous avez explosé vos objectif hier 👏</p>
    </div>
  );
}

export default Top;

Top.propTypes = {
  name: PropTypes.string,
};
