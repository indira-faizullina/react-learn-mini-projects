import React from 'react'
import Skeleton from './Skeleton'
import User from './User'

export default function Users(props) {
  return (
    <>
      <div className="search">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input
          type="text"
          placeholder="Найти пользователя..."
          value={props.sirchUser}
          onChange={props.changeSirchUserHandler}
        />
      </div>
      {props.isLoading ? (
        <div className="skeleton-list">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className="users-list">
          {props.items
            .filter((user) => {
              const fullInfoForSirch = (
                user.first_name +
                user.last_name +
                user.email
              ).toLowerCase()
              return fullInfoForSirch.includes(props.sirchUser.toLowerCase())
            })
            .map((user) => (
              <User
                isInvited={props.invites.includes(user.id)}
                id={user.id}
                key={user.id}
                avatar={user.avatar}
                name={`${user.first_name} ${user.last_name}`}
                email={user.email}
                onClickInvite={props.onClickInvite}
              />
            ))}
        </ul>
      )}
      {props.invites.length > 0 && (
        <button className="send-invite-btn" onClick={props.onClickSendInvites}>
          Отправить приглашение
        </button>
      )}
    </>
  )
}
