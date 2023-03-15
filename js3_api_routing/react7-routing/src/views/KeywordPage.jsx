import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const KeywordPage = () => {
    const {whatever , color} = useParams()
    const navigate = useNavigate()

    const navigateToHome =()=>{
        navigate("/")
    }

    return (
        <fieldset>
            <legend> Keyword Page</legend>
            <h1 style={{color: color}}> Keyword(whatever) : {whatever} </h1>
            <button onClick={navigateToHome}> Back to home</button>
            <button onClick={()=>navigate(-1)}> Back</button>
        </fieldset>
    )
}

export default KeywordPage