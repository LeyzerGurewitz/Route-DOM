import React from 'react'
import { useParams } from 'react-router-dom'

const Users = () => {
  const {id} = useParams();
  return (
    <div>
        <h1>Users page</h1>
        <h3>{id}</h3>
    </div>
  )
}

export default Users