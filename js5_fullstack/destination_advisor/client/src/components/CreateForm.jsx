import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

// form to track all the input (useState)
// after submit - post data to backend  (axios)
// after successful submit - useNavigate
const CreateForm = (props) => {
    const [location, setLocation] = useState("")
    const [rating, setRating] = useState(8)
    const [imageUrl, setImageUrl] = useState("")
    const [season, setSeason] = useState("")

    const [errors, setErrors] = useState([])

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        // send info to backend
        const newDest = { location, rating, imageUrl, season }
        axios.post("http://localhost:8000/api/destinations", newDest)
            .then(response => {
                console.log("successful response")
                console.log(response.data)
                // if successful, redirect
                // navigate("/destinations")
                props.onCreate(response.data)
                
            })
            .catch(err => {
                const errorResponseData = err.response.data.errors
                const errMsgArr =[]

                for(const eachKey in errorResponseData){
                  errMsgArr.push(errorResponseData[eachKey].message)
                }
                setErrors(errMsgArr)
            })
    }

    return (
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
            {
                errors.map((eachErr, idx)=>(
                    <p style={{color: "red"}}> {eachErr}</p>
                ))
            }
        </form>
    )
}

export default CreateForm