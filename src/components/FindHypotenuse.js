import React, { useState } from "react";
import "./FindHypotenuse.css";
// blue pe yellow se formula
const FindHypotenuse = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [hypotenuse, setHypotenuse] = useState();
  const submitHandler = (event) => {
    event.preventDefault();
    event.target.scroll({ top: event.target.scrollHeight, behavior: "smooth" });
    setHypotenuse(() => {
      return Math.sqrt(a ** 2 + b ** 2);
    });
  };
  return (
    <div>
      <h3>
        Enter the value for <strong style={{ color: "#65A30D" }}>a</strong> and{" "}
        <strong style={{ color: "#65A30D" }}>b</strong> to know the hypotenuse
      </h3>
      <form className="form__find-hypotenuse" onSubmit={submitHandler}>
        <div className="triangle">
          <label className="label sideA" htmlFor="a">
            a
          </label>
          <label className="label sideB" htmlFor="b">
            b
          </label>
          <label className="label sideC">c</label>
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
        </div>
        <label
          className="label label__input-box"
          htmlFor="a"
          style={{ fontSize: "1.3rem" }}
        >
          a
        </label>
        <label className="label__equal-to" htmlFor="a">
          =
        </label>
        <input
          type="number"
          id="a"
          required
          onChange={(event) => {
            setA(event.target.value);
          }}
        />
        <label className="label label__input-box" htmlFor="b">
          b
        </label>
        <label className="label__equal-to" htmlFor="b">
          =
        </label>
        <input
          type="number"
          id="b"
          required
          onChange={(event) => {
            setB(event.target.value);
          }}
        />
        <button>
          <span>Calculate</span>
        </button>
        <h2 style={{ display: "inline" }}>
          Hypotenuse( √
          <h2 className="underroot-line">
            {" "}
            a <sup style={{ fontSize: "1rem" }}>2</sup> + b
            <sup style={{ fontSize: "1rem" }}>2</sup>{" "}
          </h2>
          ) will be calculated here:{" "}
        </h2>
        <output htmlFor="a b" className="output">
          c = {hypotenuse}
        </output>
      </form>
    </div>
  );
};

export default FindHypotenuse;
