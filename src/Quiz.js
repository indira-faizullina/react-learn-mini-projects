import './Quiz.scss'
import React, { useState } from 'react'

const questions = [
  {
    title: 'Самая большая по площади страна?',
    variants: ['Россия', 'Канада', 'Аргентина'],
    correct: 0,
  },
  {
    title: 'Самое большое озеро в мире?',
    variants: ['Онтарио', 'Каспийское море', 'Байкал'],
    correct: 1,
  },
  {
    title: 'Самый маленький материк?',
    variants: ['Евразия', 'Африка', 'Австралия'],
    correct: 2,
  },
]

function Result(props) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>{`Вы отгадали ${props.correctAnswer} ответа из ${questions.length}`}</h2>
      <button onClick={props.restartQuizHandler}>Попробовать снова</button>
    </div>
  )
}

function Game(props) {
  const progressBarWidth = `${Math.round(
    (props.step / questions.length) * 100
  )}%`

  return (
    <>
      <div className="progress">
        <div
          style={{ width: progressBarWidth }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{props.question.title}</h1>
      <ul>
        {props.question.variants.map((variant, index) => (
          <li key={index} onClick={props.selectVariantHandler} id={index}>
            {variant}
          </li>
        ))}
      </ul>
    </>
  )
}

export default function Quiz(props) {
  const [step, setStep] = useState(0)
  const currentQuestion = questions[step]
  const [correctAnswer, setCorrectAnswer] = useState(0)

  const selectVariantHandler = (event) => {
    if (currentQuestion.correct === Number(event.target.id)) {
      setCorrectAnswer((prevCorrectAnswer) => prevCorrectAnswer + 1)
    }
    setStep((prevStep) => prevStep + 1)
  }

  const restartQuizHandler = () => {
    setStep(0)
    setCorrectAnswer(0)
  }

  return (
    <div className="shadow-lg p-3 mb-5 bg-body rounded">
      <div className="Quiz">
        {step !== questions.length ? (
          <Game
            question={currentQuestion}
            selectVariantHandler={selectVariantHandler}
            step={step}
          />
        ) : (
          <Result
            restartQuizHandler={restartQuizHandler}
            correctAnswer={correctAnswer}
          />
        )}
      </div>
    </div>
  )
}
