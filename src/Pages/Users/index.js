import React, { useEffect, useState } from 'react'
import { getUsers } from '../../API'
import Spinner from '../../Components/Spinner'
import Card from './components/Card'
import './index.css'

const Users = () => {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchData() {
      getUsers()
        .then(result => { 
          setUsers(result.data)
          setLoading(false)
        })
        .catch( error => {
          setUsers([])
        })
    }
    fetchData()
  }, [])

  const renderUsers = () => {
    if(loading) {
      return (
        <div className='wrapper-spinner'>
          <Spinner />
        </div>
      )
    } else {
      return (
        <div className='wrapper'>
          {users.map(user => (  
            <Card name={user.name} userName={user.username} webSite={user.website} id={user.id} /> 
          ))}  
        </div>
      )
     
    }
  }

  return (
    <React.Fragment>
       {renderUsers()}
    </React.Fragment>
  )
}

export default Users