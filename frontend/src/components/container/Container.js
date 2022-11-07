import React from "react";
import Left from "../left/Left";
import Right from "../right/Right";

function Container({ keyData }) {
  return (
    <div className="container">
      <Left />
      <Right keyData={keyData} />
    </div>
  );
}

export default Container;
