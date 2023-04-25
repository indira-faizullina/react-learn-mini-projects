import './Modal.css'
import React, { Fragment, useState } from 'react'

export default function Modal() {
  const [modalVisible, setModalVisible] = useState(false)

  const closeModalHandler = () => setModalVisible(false)
  const openModalHandler = () => setModalVisible(true)

  return (
    <Fragment>
      <button className="btn btn-primary m-3" onClick={openModalHandler}>
        Показать гифку
      </button>

      {modalVisible && (
        <div className="overlay">
          <div className="modal-window d-grid gap-2 col-6 mx-auto">
            <img src="https://media1.giphy.com/media/5xaOcLGvzHxDKjufnLW/giphy.gif" />
            <button className="btn btn-secondary" onClick={closeModalHandler}>
              Закрыть
            </button>
          </div>
        </div>
      )}
    </Fragment>
  )
}
