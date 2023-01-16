import React from "react";

const Result = ({score}) => {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы набрали {score} из 3 вопрососв</h2>
      <button>Вернуться обратно</button>
    </div>
  )
}

export default Result;