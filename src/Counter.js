import React, { useState } from 'react'

export default function Counter() {
  const [counter, setCounter] = useState(0)

  const counterPlusHandler = () => setCounter((prevCounter) => prevCounter + 1)
  const counterMinusHandler = () => setCounter((prevCounter) => prevCounter - 1)

  return (
    <div className="shadow-lg p-3 mb-5 bg-body rounded">
      <h3>Счетчик:</h3>
      <h1>{counter}</h1>
      <button className="btn btn-danger me-2" onClick={counterMinusHandler}>
        Минус
      </button>
      <button className="btn btn-success" onClick={counterPlusHandler}>
        Плюс
      </button>
    </div>
  )
}
