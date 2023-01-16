import React from "react";

const Game = ({question, userAnswer}) => {
  return (
    <div className="game">
      <div className="level"></div>
      <h1 className="question">{ question.title }</h1>
      <ul>
        {
          question.variants.map((e, i) => (
            <li key={e} className="answer" onClick={() => userAnswer(i)}>
              <p>{e}</p>
            </li>
          ))
        }
        {/* <li className="answer">
          <p>Хуй Знает</p>
        </li> */}
      </ul>
    </div>
  )
}

export default Game;