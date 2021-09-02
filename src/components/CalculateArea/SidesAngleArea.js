import React, { useState } from "react";

const SidesAngleArea = () => {
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [angleA, setAngleA] = useState(0);
  const [areaF3, setAreaF3] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    setAreaF3(() => {
      // Math.sin takes radian so convert degree to radian
      let calculation =
        (1 / 2) * Number(b) * Number(c) * Math.sin(Number(angleA * 0.0174533));
      return calculation.toFixed(2) + " square units";
    });
    event.target.scroll({ top: event.target.scrollHeight, behavior: "smooth" });
  };
  return (
    <form className="form-calculate-area" onSubmit={submitHandler}>
      <div className="triangle-height-base">
        <label className="label angleA">A</label>
        <label className="label herons-side-b">b</label>
        <label className="label herons-side-c">c</label>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="label line3"></div>
      </div>
      <label>b= </label>
      <input
        className="herons-input"
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
      <label>∠A(deg)=</label>
      <input
        type="number"
        onChange={(event) => {
          setAngleA(() => event.target.value);
        }}
      />
      <button type="submit">Calculate</button>
      <div className="formula">Area (∆ABC) = 1/2 × bc × sin(A)</div>
      <div className="output" style={{ marginTop: "10%" }}>
        Area: {areaF3}{" "}
      </div>
    </form>
  );
};
export default SidesAngleArea;
