import PropTypes from "prop-types";
import Keydata from "../keydata/Keydata";

function Right({ keyData }) {
  return (
    <div className="right">
      <Keydata type={"calorie"} value={keyData?.calorie} />
      <Keydata type={"proteine"} value={keyData?.proteine} />
      <Keydata type={"glucide"} value={keyData?.glucide} />
      <Keydata type={"lipide"} value={keyData?.lipide} />
    </div>
  );
}

export default Right;
Right.propTypes = {
  keydata: PropTypes.exact({
    calorie: PropTypes.number,
    glucide: PropTypes.number,
    lipide: PropTypes.number,
    proteine: PropTypes.number,
  }),
};
