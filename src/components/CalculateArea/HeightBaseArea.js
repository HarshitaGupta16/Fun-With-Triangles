import React, { useState } from "react";

const HeightBaseArea = () => {
  const [areaF1, setAreaF1] = useState();
  let height = 0;
  let base = 0;
  const heightBaseAreaSbmtHandler = (event) => {
    event.preventDefault();
    event.target.scroll({ top: event.target.scrollHeight, behavior: "smooth" });
    setAreaF1((1 / 2) * base * height + " square units");
  };

  return (
    // <form onSubmit={heightBaseAreaSbmtHandler}>
    <form className="form-calculate-area" onSubmit={heightBaseAreaSbmtHandler}>
      <div className="triangle-height-base">
        <div className="line1"></div>
        <div className="line2"></div>
        <label className="label base">base</label>
        <div className="label line3"></div>
        <div className="line4"></div>
        <label className="label height">height</label>
        <div className="label box"></div>
      </div>

      <label>base= </label>
      <input
        type="number"
        onChange={(event) => {
          height = event.target.value;
        }}
      />
      <label>height=</label>
      <input
        type="number"
        onChange={(event) => {
          base = event.target.value;
        }}
      />
      <button type="submit">Calculate</button>
      <div className="formula">
        Area of Δ = 1/2 * base * perpendicular height{" "}
      </div>
      <div className="output" style={{ marginTop: "10%" }}>
        Area: {areaF1}{" "}
      </div>
      {/* </form> */}
    </form>
  );
};
export default HeightBaseArea;
