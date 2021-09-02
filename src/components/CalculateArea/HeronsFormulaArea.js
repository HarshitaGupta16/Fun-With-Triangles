import React, { useState } from "react";
import "./CalculateArea.css";

const HeronsFormulaArea = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [areaF2, setAreaF2] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    let s = (Number(a) + Number(b) + Number(c)) / 2;
    setAreaF2(() => {
      if (
        Number(a) > 0 &&
        Number(b) > 0 &&
        Number(c) > 0 &&
        Number(a) + Number(b) > Number(c) &&
        Number(b) + Number(c) > Number(a) &&
        Number(a) + Number(c) > Number(b)
      ) {
        let calculation =
          s * (s - Number(a)) * (s - Number(b)) * (s - Number(c));
        return Math.sqrt(calculation).toFixed(4) + " square units";
      } else {
        setAreaF2(() => 0);
      }
    });
    event.target.scroll({ top: event.target.scrollHeight, behavior: "smooth" });
  };
  return (
    <form className="form-calculate-area" onSubmit={submitHandler}>
      <div className="triangle-height-base">
        <label className="label herons-side-a">a</label>
        <label className="label herons-side-b">b</label>
        <label className="label herons-side-c">c</label>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="label line3"></div>
      </div>
      <label>a= </label>
      <input
        className="herons-input"
        type="number"
        onChange={(event) => {
          setA(() => event.target.value);
        }}
      />
      <label>b=</label>
      <input
        type="number"
        onChange={(event) => {
          setB(() => event.target.value);
        }}
      />
      <label>c=</label>
      <input
        type="number"
        onChange={(event) => {
          setC(() => event.target.value);
        }}
      />
      <button type="submit">Calculate</button>
      <div className="formula">
        Area of Δ = √<div className="top-line">s(s−a)(s−b)(s−c)</div>
      </div>
      {areaF2 === 0.0 ? (
        <div
          style={{
            color: "red",
            fontWeight: "bold",
            border: "2px solid var(--secondary-color)",
            display: "block",
            padding: "0.5rem",
            width: "30%",
            marginLeft: "33.5%",
            marginTop: "7%"
          }}
        >
          This is not a valid triangle
        </div>
      ) : (
        <div className="output" style={{ marginTop: "10%" }}>
          Area: {areaF2}{" "}
        </div>
      )}
    </form>
  );
};
export default HeronsFormulaArea;
