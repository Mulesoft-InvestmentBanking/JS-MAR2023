import React, { useEffect, useState } from 'react'
import axios from "axios"
import DashboardList from '../components/DashboardList'

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

    const removeFromList = (deleteId)=>{
        const filteredList = destinationList.filter((eachDest)=>eachDest._id !== deleteId)
        setDestinationList(filteredList)
    }

    return (
        <div>
            <h1> Dashboard Page</h1>
            <DashboardList destinationList={destinationList} onDelete={removeFromList}/>
        </div>
    )
}

export default DashboardPage