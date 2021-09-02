import React, { useState } from "react";
import "./IdentifyTriangle.css";

let angle1 = 0;
let angle2 = 0;
let angle3 = 0;
const IdentifyTriangle = () => {
  const [result, setResult] = useState("");

  const submitHandler = (event) => {
    if (Number(angle1) + Number(angle2) + Number(angle3) === 180) {
      setResult("It is a triangle");
    } else {
      setResult("It is not a triangle");
    }
    event.preventDefault();
  };
  return (
    <div>
      <h2 style={{ fontFamily: "'Montserrat Alternates', sans-serif" }}>
        Enter the 3 angles to know if it is a valid triangle
      </h2>
      <form className="form-identify-triangle" onSubmit={submitHandler}>
        <label htmlFor="angle1">Enter the 3 angles</label>
        <div className="form-input">
          <input
            id="angle1"
            onChange={(event) => {
              angle1 = event.target.value;
            }}
            type="number"
          />
          <input
            onChange={(event) => {
              angle2 = event.target.value;
            }}
            type="number"
          />
          <input
            type="number"
            onChange={(event) => {
              angle3 = event.target.value;
            }}
          />
        </div>
        <button>Check</button>
        <div className="output">
          <strong>Output: </strong>
          {result}
        </div>
      </form>
    </div>
  );
};

export default IdentifyTriangle;
