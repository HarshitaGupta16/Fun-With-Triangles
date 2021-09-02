import React, { useState } from "react";
import "./CalculateArea.css";
import HeightBaseArea from "./HeightBaseArea";
import HeronsFormulaArea from "./HeronsFormulaArea";
import SidesAngleArea from "./SidesAngleArea";

const CalculateArea = () => {
  const [heightBaseArea, setHeightBaseArea] = useState(false);
  const [heronsFormulaArea, setHeronsFormulaArea] = useState(false);
  const [sidesWithAngleArea, setSidesWithAngleArea] = useState(false);

  return (
    <div>
      <h2>
        Choose the following option on basis of data you have for triangle
      </h2>
      <div className="main-form-radio-inputs">
        <div>
          <input
            type="radio"
            name="area"
            id="areaF1"
            onChange={() => {
              setHeightBaseArea(() => true);
              setHeronsFormulaArea(() => false);
              setSidesWithAngleArea(() => false);
            }}
          />
          <label>Calculate area of triangle with height and base length </label>
        </div>
        <div>
          <input
            type="radio"
            name="area"
            id="areaF2"
            onChange={(event) => {
              setHeightBaseArea(() => false);
              setHeronsFormulaArea(() => true);
              setSidesWithAngleArea(() => false);
            }}
          />
          <label>
            Calculate area using Heron's formula, giving sides as input
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="area"
            id="areaF3"
            onChange={(event) => {
              setHeightBaseArea(() => false);
              setHeronsFormulaArea(() => false);
              setSidesWithAngleArea(() => true);
            }}
          />
          <label>
            Calculate triangle's area with 2 sides and included angle
          </label>
        </div>
      </div>
      {heightBaseArea && <HeightBaseArea />}
      {heronsFormulaArea && <HeronsFormulaArea />}
      {sidesWithAngleArea && <SidesAngleArea />}
    </div>
  );
};

export default CalculateArea;
