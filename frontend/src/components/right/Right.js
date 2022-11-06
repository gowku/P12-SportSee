import React from "react";
import Calorie from "../calorie/Calorie";
import Proteine from "../proteine/Proteine";
import Glucide from "../glucide/Glucide";
import Lipide from "../lipide/Lipide";

function Right() {
  return (
    <div className="right">
      <Calorie />
      <Proteine />
      <Glucide />
      <Lipide />
    </div>
  );
}

export default Right;
