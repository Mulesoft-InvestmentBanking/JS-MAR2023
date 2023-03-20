import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

// form to track all the input (useState)
// after submit - post data to backend  (axios)
// after successful submit - useNavigate
const CreatePage = () => {
    const [location, setLocation] =useState("")
    const [rating, setRating] = useState(8)
    const [imageUrl, setImageUrl] = useState("")
    const [season, setSeason] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        // send info to backend
        const newDest = {location, rating, imageUrl, season}
        axios.post("http://localhost:8000/api/destinations", newDest)
            .then(response=>{
                console.log(response)
                // if successful, redirect
                navigate("/destinations")
            })
            .catch(err=>{
                console.log(err)
            })
    }

    return (
        <div>
            <h1>Create a destination</h1>
            <form onSubmit={handleSubmit}>
                <p>
                    <label> Location</label>
                    <input type="text" name="location" value={location} 
                        onChange={e=>setLocation(e.target.value)} />
                </p>
                <p>
                    <label> Rating</label>
                    <input type="text" name="rating" value={rating} 
                        onChange={e=>setRating(e.target.value)} />
                </p>
                <p>
                    <label> ImageUrl</label>
                    <input type="text" name="imageUrl" value={imageUrl} 
                        onChange={e=>setImageUrl(e.target.value)} />
                </p>
                <p>
                    <label> Season</label>
                    <select name="season" value={season} onChange={e=>setSeason(e.target.value)}>
                        <option hidden > Choose a season </option>
                        <option value="spring">Spring</option>
                        <option value="summer">Summer</option>
                        <option value="fall">Fall</option>
                        <option value="winter">Winter</option>
                    </select>
                </p>
                <button type="submit"> Add destination</button>
            </form>

        </div>
    )
}

export default CreatePage