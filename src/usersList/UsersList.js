import './UsersList.scss'
import Users from './Users'
import Success from './Success'
import React, { useState, useEffect } from 'react'

const USERS_URL = 'https://reqres.in/api/users'

function UsersList(props) {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [sirchUser, setSirchUser] = useState('')
  const [invites, setInvites] = useState([2])
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    fetch(USERS_URL)
      .then((response) => response.json())
      .then((obj) => setUsers(obj.data))
      .catch((error) => console.error(error))
      .finally(setIsLoading(false))
  }, [])

  const changeSirchUserHandler = (event) => setSirchUser(event.target.value)

  const onClickInviteHandler = (id) => {
    if (invites.includes(id)) {
      setInvites((prevInvites) =>
        prevInvites.filter((invitedIds) => invitedIds !== id)
      )
    } else setInvites((prevInvites) => [...prevInvites, id])
  }

  const onClickSendInvites = () => setSuccess(true)

  const onBackToList = () => setSuccess(false)

  return (
    <div className="UsersList">
      {success ? (
        <Success onBackToList={onBackToList} count={invites.length} />
      ) : (
        <Users
          items={users}
          isLoading={isLoading}
          sirchUser={sirchUser}
          changeSirchUserHandler={changeSirchUserHandler}
          onClickInvite={onClickInviteHandler}
          invites={invites}
          onClickSendInvites={onClickSendInvites}
        />
      )}
    </div>
  )
}

export default UsersList
