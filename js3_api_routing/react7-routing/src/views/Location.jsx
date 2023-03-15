import React from 'react'
import { useParams } from 'react-router-dom'

const Location = () => {
    const {city} = useParams()

    return (
        <fieldset>
            <legend> Location Page</legend>
            <h1>Destination: {city}</h1>
        </fieldset>
    )
}

export default Location