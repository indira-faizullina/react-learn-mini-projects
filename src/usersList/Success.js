import React from 'react'

const Success = ({ count, onBackToList }) => {
  return (
    <div className="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button className="send-invite-btn" onClick={onBackToList}>
        Назад
      </button>
    </div>
  )
}

export default Success
