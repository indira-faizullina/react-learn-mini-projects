import './App.scss'
import React, { useState } from 'react'
import Counter from './Counter'
import Modal from './Modal'
import ModalWithAnimation from './ModalWithAnimation'
import Quiz from './Quiz'
import UsersList from './usersList/UsersList'

export default function App() {
  const miniProjects = [
    {
      title: 'Счётчик',
      id: '1',
    },
    {
      title: 'Вызов модального окна',
      id: '2',
    },
    {
      title: 'Вызов модального окна с плавной анимацией',
      id: '3',
    },
    {
      title: 'Квиз',
      id: '4',
    },
    {
      title: 'Работа со списком пользователей',
      id: '5',
    },
  ]

  const [projectNumber, setProjectNumber] = useState(0)

  const selectProjectHandler = (event) => {
    setProjectNumber(Number(event.target.id))
  }

  switch (projectNumber) {
    case 1:
      return <Counter />
      break
    case 2:
      return <Modal />
      break
    case 3:
      return <ModalWithAnimation />
      break
    case 4:
      return <Quiz />
      break
    case 5:
      return <UsersList />
      break
    default:
      return (
        <div>
          <h1>Список моих мини-проектов для изучения React</h1>
          <ul>
            {miniProjects.map((project) => (
              <li
                key={project.id}
                id={project.id}
                onClick={selectProjectHandler}
              >
                {project.title}
              </li>
            ))}
          </ul>
        </div>
      )
  }
}
