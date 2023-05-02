import './Modal.css'
import React, { useState } from 'react'

export default function Modal() {
  const [modalVisible, setModalVisible] = useState(false)

  const closeModalHandler = () => setModalVisible(false)
  const openModalHandler = () => setModalVisible(true)

  return (
    <div className="shadow-lg p-3 mb-5 bg-body rounded">
      <button className="btn btn-primary m-3" onClick={openModalHandler}>
        Показать гифку
      </button>

      {modalVisible && (
        <div className="overlay">
          <div className="modal-window d-grid gap-2 col-6 mx-auto">
            <img src="https://64.media.tumblr.com/cfdc4d5910f147647339f82c14ad6ab2/d809b7291ca1c8d6-f1/s400x600/7cdaa344572cb9e92551ae86166c9b4b6bd26a2e.gifv" />
            <button className="btn btn-secondary" onClick={closeModalHandler}>
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
