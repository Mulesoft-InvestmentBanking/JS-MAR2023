import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from "react-router-dom"
import DetailsDiv from '../components/DetailsDiv'

// 1. get id from params (useParams)
// 2. use id to get data from api when it is mounted (useEffect, useState, axios)


const DetailsPage = () => {
  const { id } = useParams()

  const [destination, setDestination] = useState()

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/destinations/${id}`)
      .then(response=>{
        setDestination(response.data)
      })
      .catch(err=>console.log(err))
  }, [id])

  return (
    <div>
      <h1> Destination Details</h1>
      { destination&&
        <DetailsDiv destination={destination} />
      }
    </div>
  )
}

export default DetailsPage