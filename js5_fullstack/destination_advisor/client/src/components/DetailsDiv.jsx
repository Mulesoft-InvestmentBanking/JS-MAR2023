import React from 'react'

const DetailsDiv = (props) => {
    const {destination} = props
    return (
        <div>
            <h1> {destination.location} ({destination.season})</h1>
            <h3> Rating : {destination.rating}</h3>
            <img src={destination.imageUrl} alt={destination.location} />
        </div>
    )
}

export default DetailsDiv