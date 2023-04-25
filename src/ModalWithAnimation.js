import './ModalWithAnimation.css'
import React, { useState } from 'react'

export default function ModalWithAnimation() {
  const [modalVisible, setModalVisible] = useState(false)

  const closeModalHandler = () => setModalVisible(false)
  const openModalHandler = () => setModalVisible(true)

  return (
    <div className="shadow-lg p-3 mb-5 bg-body rounded">
      <button className="btn btn-primary m-3" onClick={openModalHandler}>
        Показать гифку с анимацией
      </button>
      <div className={`overlay animated ${modalVisible ? 'show' : ''}`}>
        <div
          className={`modal-window d-grid gap-2 col-6 mx-auto ${
            modalVisible ? 'show' : ''
          }`}
        >
          <img src="https://64.media.tumblr.com/762e40897d93618393867de1fa19f162/tumblr_n1g3mwPVEP1qdezf9o1_500.gifv" />
          <button className="btn btn-secondary" onClick={closeModalHandler}>
            Закрыть
          </button>
        </div>
      </div>
    </div>
  )
}
