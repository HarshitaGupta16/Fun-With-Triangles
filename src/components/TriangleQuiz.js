import React, { useState } from "react";
import "./TriangleQuiz.css";
import QuestionBank from "../data/QuestionBank";

const TriangleQuiz = () => {
  const [newQuestionBank, setNewQuestionBank] = useState(QuestionBank);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const changeHandler = (event) => {
    const data = event.target;
    setUserAnswers((userAnswers) => {
      if (data.id === QuestionBank[Number(data.name) - 1].answer) {
        userAnswers[Number(data.name) - 1] = true;
        console.log(typeof data.name);
      } else {
        userAnswers[Number(data.name) - 1] = false;
      }
      return [...userAnswers];
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    event.target.scroll({ top: event.target.scrollHeight, behavior: "smooth" });
    userAnswers.map((userAns) => {
      if (userAns === true) {
        return setScore((score) => score + 1);
      }
    });
    return setNewQuestionBank(() => {
      return userAnswers.map((ansFlag, index) => {
        if (ansFlag === true) {
          // setScore((score) => score + 1)
          console.log(score);
          return {
            ...QuestionBank[index],
            bgColor: "#A3E635"
          };
        } else {
          return {
            ...QuestionBank[index],
            bgColor: "#DC2626"
            // bgColor: "red"
          };
        }
      });
    });
  };

  const resetHandler = () => {
    setScore((score) => (score = 0));
    setNewQuestionBank((newQuestionBank) => {
      return newQuestionBank.map((ques) => {
        return {
          ...ques,
          bgColor: "aqua"
        };
      });
    });
  };

  return (
    <div>
      <h2>
        Answer the following questions to check your understanding about
        triangles
      </h2>
      <form
        className="form-triangle-quiz"
        onSubmit={submitHandler}
        style={{ fontSize: "1.1rem" }}
      >
        {/* {console.log(newQuestionBank)} */}
        {newQuestionBank.map((item) => {
          return (
            <div>
              <ul className="questions-list">
                <li
                  style={{
                    backgroundColor: item.bgColor
                  }}
                >
                  <section key={item.id} style={{ padding: "0.5rem" }}>
                    {item.question} <br />
                    <div style={{ marginBottom: "1rem" }}>
                      {item.options.map((opt) => {
                        return (
                          <label className="options-display">
                            <input
                              required
                              type="radio"
                              name={item.id}
                              id={opt}
                              onChange={changeHandler}
                            />
                            <label>{opt}</label>
                          </label>
                        );
                      })}
                    </div>
                  </section>
                </li>
              </ul>
            </div>
          );
        })}
        <button
          type="reset"
          onClick={resetHandler}
          style={{ marginLeft: "35%" }}
        >
          Reset
        </button>
        <button type="submit">Submit</button>
        <div className="score">Score: {score}</div>
      </form>
    </div>
  );
};

export default TriangleQuiz;
