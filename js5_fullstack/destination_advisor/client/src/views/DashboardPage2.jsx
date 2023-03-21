import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

// obtain info from backend when the component is mounted (axios, useEffect, useState)


const DashboardPage2 = () => {
    const [destinationList, setDestinationList] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/destinations`)
            .then(response=>{
                setDestinationList(response.data)
            })
            .catch(err=>console.log(err))
    }, [])

    const handleDelete =(deleteId)=>{
        axios.delete(`http://localhost:8000/api/destinations/${deleteId}`)
            .then(response=>{
                const filteredList = destinationList.filter((eachDest)=>eachDest._id !== deleteId)
                setDestinationList(filteredList)
            })
            .catch(err=>console.log(err))
    }


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th> Location</th>
                        <th> season </th>
                        <th> Rating</th>
                        <th> Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        destinationList.map((eachDest, idx)=>(
                            <tr key={idx}>
                                <td> {eachDest.location} </td>
                                <td> {eachDest.season} </td>
                                <td> {eachDest.rating} </td>
                                <td>
                                    <Link to={`/destinations/${eachDest._id}/edit`}>Edit</Link> |
                                    <button onClick={()=>handleDelete(eachDest._id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>

        </div>
    )
}

export default DashboardPage2