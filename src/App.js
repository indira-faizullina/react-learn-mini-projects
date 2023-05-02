import './App.scss'
import React, { useState } from 'react'
import Counter from './Counter'
import Modal from './Modals/Modal'
import ModalWithAnimation from './Modals/ModalWithAnimation'
import Quiz from './Quiz'
import UsersList from './usersList/UsersList'
import Colors from './Colors'
import Photos from './Photo Collection/Photos'

export default function App() {
  const miniProjects = [
    {
      title: 'Счётчик',
      id: '1',
      component: <Counter />,
    },
    {
      title: 'Вызов модального окна',
      id: '2',
      component: (
        <div>
          <Modal />
          <ModalWithAnimation />
        </div>
      ),
    },
    {
      title: 'Квиз',
      id: '3',
      component: <Quiz />,
    },
    {
      title: 'Работа со списком пользователей',
      id: '4',
      component: <UsersList />,
    },
    {
      title: 'Цвета',
      id: '5',
      component: <Colors />,
    },
    {
      title: 'Фото-коллекции',
      id: '6',
      component: <Photos />,
    },
  ]

  const [projectNumber, setProjectNumber] = useState(0)

  const selectProjectHandler = (event) => {
    setProjectNumber(Number(event.target.id))
  }

  const selectedProject = miniProjects.filter(
    (project) => Number(project.id) === projectNumber
  )

  if (selectedProject.length === 0) {
    return (
      <div>
        <h1>Список моих мини-проектов для изучения React</h1>
        <ul>
          {miniProjects.map((project) => (
            <li
              key={project.id}
              id={project.id}
              className="userLi"
              onClick={selectProjectHandler}
            >
              {project.title}
            </li>
          ))}
        </ul>
      </div>
    )
  } else {
    return selectedProject.map((project) => project.component)
  }
}
