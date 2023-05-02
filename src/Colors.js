import styles from './Colors.module.scss'
import React, { useState } from 'react'

export default function Colors() {
  const [colors, setColor] = useState(['rgb(13 100 200)'])

  const getRandomNumber = () => {
    const randomNumber = Math.round(Math.random() * 255)
    return randomNumber
  }

  const addRandomColor = () => {
    const newColor = `rgb(${getRandomNumber()} ${getRandomNumber()} ${getRandomNumber()})`
    setColor([...colors, newColor])
  }

  return (
    <div>
      <ul className={styles.ul}>
        {colors.map((color, index) => (
          <li key={index} className={styles.li} style={{ background: color }}>
            {color}
          </li>
        ))}
      </ul>
      <button className="btn btn-primary" onClick={addRandomColor}>
        Добавить новый цвет
      </button>
    </div>
  )
}
