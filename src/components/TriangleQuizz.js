import React, { useState } from "react";
import "./TriangleQuiz.css";
import QuestionBank from "../data/QuestionBank";

const TriangleQuiz = () => {
  const [userAnswers, setUserAnswers] = useState(QuestionBank);

  const changeHandler = (event) => {
    const data = event.target;
    return setUserAnswers(() => {
      console.log(userAnswers);
      return QuestionBank.map((quest) => {
        if (data.id === quest.answer) {
          return {
            ...quest,
            bgColor: "green"
          };
        } else {
          // return userAnswers.map((quest) => {
          return {
            ...quest,
            bgColor: "red"
          };
          // });
        }
      });
    });
    // console.log(userAnswers);
    // return [...userAnswers]
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>
        Answer these fun quiz questions to test your knowledge on triangles
      </h2>
      <form className="form-triangle-quiz" onSubmit={submitHandler}>
        {userAnswers.map((ques) => {
          let optionsOneQues = [];
          for (let j = 0; j < ques.options.length; j++) {
            optionsOneQues.push(ques.options[j]);
          }
          return (
            <div>
              <ul className="questions-list">
                <li style={{ backgroundColor: ques.bgColor }}>
                  <section>
                    {ques.question} <br />
                    {optionsOneQues.map((opt) => {
                      return (
                        <label className="options-display">
                          <input
                            required
                            type="radio"
                            name={ques.question}
                            id={opt}
                            onChange={changeHandler}
                          />
                          <label>{opt}</label>
                        </label>
                      );
                    })}
                  </section>
                </li>
              </ul>
            </div>
          );
        })}
        <button type="submit">Submit</button>
      </form>
      {/* <div>{optionsSelected}</div> */}
    </div>
  );
};

export default TriangleQuiz;
