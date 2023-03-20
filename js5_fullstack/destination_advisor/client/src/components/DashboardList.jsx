import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, Navigate, useNavigate } from 'react-router-dom'

// test api : 
// obtain info from backend when the component is mounted (axios, useEffect, useState)

const DashboardList = (props) => {

    const {destinationList } = props

    const navigate= useNavigate()

    const handleDelete =(deleteId)=>{
        axios.delete(`http://localhost:8000/api/destinations/${deleteId}`)
            .then(response=>{
                props.onDelete(deleteId)
            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <ol>
                {
                    destinationList.map((eachDest, idx)=>(
                        <li key={idx}> 
                            <Link to={`/destinations/${eachDest._id}`}>{eachDest.location}  </Link>
                            ({eachDest.season}) - {eachDest.rating}/10 
                            <Link to={`/destinations/${eachDest._id}/edit`}>Edit</Link>
                            <button onClick={()=>handleDelete(eachDest._id)}> Delete</button>
                        </li>
                    ))
                }
            </ol>
        </div>
    )
}

export default DashboardList