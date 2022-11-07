import Keydata from "../keydata/Keydata";

function Right({ keyData }) {
  return (
    <div className="right">
      <Keydata calorie={keyData?.calorie} />
      <Keydata proteine={keyData?.proteine} />
      <Keydata glucide={keyData?.glucide} />
      <Keydata lipide={keyData?.lipide} />
    </div>
  );
}

export default Right;
