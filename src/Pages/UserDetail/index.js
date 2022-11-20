import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getUserDetail } from '../../API'
import Spinner from '../../Components/Spinner'
import DetailCard from './components/DetailCard'
import './index.css'

const UserDetail = () =>  {
  const [userDetail, setUserDetail] = useState(null)
  const [loading, setLoading] = useState(true)

  const { userId } = useParams()

  useEffect(() => {
    async function fetchData() {
      getUserDetail(userId)
        .then(result => { 
          setUserDetail(result.data)
          setLoading(false)
        })
        .catch( error => {
          setLoading(false)
          setUserDetail(null)
        })
    }
    fetchData()
  
  }, [])


  const renderUserDetail = () => {
    if(loading) {
      return (
        <div className='user-detail-wrapper'>
          <Spinner />
        </div>
      )
    }

    if(!loading && userDetail != null) {
      return (
        <div className='user-detail-wrapper'>
          <DetailCard {...userDetail}/>
        </div>
      )
    }
  }
  
  return (
    <React.Fragment>
      {renderUserDetail()}
    </React.Fragment>
  )
}

export default UserDetail