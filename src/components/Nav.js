import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Nav = () => {
  return (
    <nav>
      <ul className="nav-link">
        <li>
          <Link to="/identify-triangle">
            <button className="nav-link__button bg-color-first-button">
              Identify Triangle
            </button>
            <br />
          </Link>
          <Link to="/triangle-quiz">
            <button className="nav-link__button bg-color-second-button">
              Triangle Quiz
            </button>
            <br />
          </Link>
          <Link to="/find-hypotenuse">
            <button className="nav-link__button bg-color-third-button">
              {/* "#EA580C" */}
              Find Hypotenuse
            </button>
            <br />
          </Link>
          <Link to="/calculate-area">
            <button className="nav-link__button bg-color-fourth-button">
              Calculate Area Δ
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
