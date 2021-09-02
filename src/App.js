import "./styles.css";
import IdentifyTriangle from "./components/IdentifyTriangle";
import Nav from "./components/Nav";
import TriangleQuiz from "./components/TriangleQuiz";
import FindHypotenuse from "./components/FindHypotenuse";
import CalculateArea from "./components/CalculateArea/CalculateArea";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

var list = [
  ["fab fa-github", "https://github.com/HarshitaGupta16"],
  ["fab fa-twitter", "https://twitter.com/Harshita16Gupta"],
  ["fab fa-instagram", "https://www.instagram.com/__harshita__gupta__/"],
  ["fab fa-linkedin", "https://www.linkedin.com/in/harshita-gupta-549b12157/"],
  ["fas fa-briefcase", "https://harshitagupta.netlify.app"]
];

export default function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Home} />
        <Switch>
          <Route path="/" exact component={Nav} />
          <Route path="/identify-triangle" component={IdentifyTriangle}>
            {/* <button>Identify Triangle</button> */}
          </Route>
          <Route path="/triangle-quiz" component={TriangleQuiz} />
          <Route path="/find-hypotenuse" component={FindHypotenuse} />
          <Route path="/calculate-area" component={CalculateArea} />
        </Switch>
      </div>
      <footer>
        <div className="footer-header">You can connect me on:</div>
        <div className="button-block">
          {list.map((item) => {
            // console.log(item[1]);
            return (
              <div className="social">
                <a href={item[1]} target="_blank" rel="noreferrer">
                  <i className={item[0]}></i>
                </a>
              </div>
            );
          })}
        </div>
      </footer>
    </Router>
  );
}

const Home = () => {
  return (
    <div className="home">
      <h1 className="app-heading">Fun with Triangles</h1>
      <Link to="/">
        <button className="home-button">Home</button>
      </Link>
    </div>
  );
};
