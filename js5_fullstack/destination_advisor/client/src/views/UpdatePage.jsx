import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"


// 1. get id from params (useParams)
// 2. use id to get data from api when it is mounted (useEffect, useState, axios)

// 3. form to track all the input (useState)
// 4. after submit - post data to backend  (axios)
// 5. after successful submit - useNavigate

const UpdatePage = () => {
  const { id } = useParams()

  const navigate = useNavigate()

  const [location, setLocation] = useState("")
  const [rating, setRating] = useState(8)
  const [imageUrl, setImageUrl] = useState("")
  const [season, setSeason] = useState("")

  useEffect(() => {
    axios.get(`http://localhost:8000/api/destinations/${id}`) // obtaining the pre-polulated data
      .then(response => {
        const dest = response.data
        setLocation(dest.location)
        setRating(dest.rating)
        setImageUrl(dest.imageUrl)
        setSeason(dest.season)
      })
      .catch(err => console.log(err))
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedDest = { location, rating, imageUrl, season }
    axios.put(`http://localhost:8000/api/destinations/${id}`, updatedDest) // send updated info to backend
      .then(response => {
        navigate(`/destinations/${id}`)
      })
      .catch(err => console.log(err))
  }

  const handleDelete = ()=>{
    // delete from database
    axios.delete(`http://localhost:8000/api/destinations/${id}`)
      .then(response=>{
        navigate("/destinations")
      })
      .catch(err=>console.log(err))
  }

  
  return (
    <div>
      <h1> Update a destination</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label> Location</label>
          <input type="text" name="location" value={location}
            onChange={e => setLocation(e.target.value)} />
        </p>
        <p>
          <label> Rating</label>
          <input type="text" name="rating" value={rating}
            onChange={e => setRating(e.target.value)} />
        </p>
        <p>
          <label> ImageUrl</label>
          <input type="text" name="imageUrl" value={imageUrl}
            onChange={e => setImageUrl(e.target.value)} />
        </p>
        <p>
          <label> Season</label>
          <select name="season" value={season} onChange={e => setSeason(e.target.value)}>
            <option hidden > Choose a season </option>
            <option value="spring">Spring</option>
            <option value="summer">Summer</option>
            <option value="fall">Fall</option>
            <option value="winter">Winter</option>
          </select>
        </p>
        <button type="submit"> Add destination</button>
      </form>
      <button type="button" onClick={()=>handleDelete()}> Delete</button>
    </div>
  )
}

export default UpdatePage