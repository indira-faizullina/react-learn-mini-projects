import './Users.scss'
import React, { useState, useEffect } from 'react'

const USERS_URL = 'https://reqres.in/api/users'

export default function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {}, [])

  return (
    <div className="Users">
      <Users />
      {/* <Success /> */}
    </div>
  )
}
