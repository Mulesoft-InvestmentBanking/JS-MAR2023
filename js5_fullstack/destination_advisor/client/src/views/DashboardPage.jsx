import React, { useEffect, useState } from 'react'
import axios from "axios"

// test api : 
// obtain info from backend when the component is mounted (axios, useEffect, useState)

const DashboardPage = () => {
    // dashboard : destList to store array of destinations
    const [destinationList, setDestinationList] = useState([])

    useEffect(()=>{ // when the component is mounted
        axios.get("http://localhost:8000/api/destinations")
            .then(response=>{
                console.log(response.data)
                setDestinationList(response.data)
            })
            .catch(err=>console.log(err))
    },[])
// Norway (summer) - 8/10
    return (
        <div>
            <h1> Dashboard Page</h1>
            <ol>
                {
                    destinationList.map((eachDest, idx)=>(
                        <li key={idx}> 
                            {eachDest.location} ({eachDest.season}) - {eachDest.rating}/10
                        </li>
                    ))
                }
            </ol>
        </div>
    )
}

export default DashboardPage