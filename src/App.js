import Result from './components/Result';
import Game from './components/Game';
import { useState } from 'react';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

console.log(questions)

function App() {

  const [step, setStep] = useState(0);
  const question = questions[step]
  const [score, setScore] = useState(0)

  function userAnswer(id) {

    if (id === question.correct) {
      setScore(score + 1)
    }

    setStep(step + 1)
  }

  return (
    <div className="App">
      {
        // <Game question={question} userAnswer={userAnswer}/>
        step !== questions.length ? <Game question={question} userAnswer={userAnswer}/> : <Result score={score}/>
      }
    </div>
  );
}

export default App;
