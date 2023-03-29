import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useParams, useNavigate } from "react-router-dom"

// get id from params (useParams)
// get data from backend on load (useEffect, axios)

// form: input &  submit (input : state)
// post data to backend : axios
// redirect: useNavigate

const UpdatePage = () => {
    const {id} = useParams()

    const [title, setTitle]= useState("")
    const [company, setCompany] = useState("")
    const [salary, setSalary] = useState("")
    const [isRemote, setIsRemote] = useState(false)
    const [isApplied, setIsApplied] = useState(false)
 
    const navigate = useNavigate()

    const handleSubmit =(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/jobs/${id}`, {title, company, salary, isRemote, isApplied})
            .then(response=>{
                navigate(`/jobs/${id}`)
            })
            .catch(err=>console.log(err))
        
    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/jobs/${id}`)
            .then(response=>{
                const job = response.data
                setTitle(job.title)
                setCompany(job.company)
                setSalary(job.salary)
                setIsRemote(job.isRemote)
                setIsApplied(job.isApplied)
            })
            .catch(err=>console.log(err))
    },[id])

    const handleDelete=()=>{
        axios.delete(`http://localhost:8000/api/jobs/${id}`)
            .then(response=>navigate("/"))
            .catch(err=>console.log(err))
    }


    return (
<div>
            <form onSubmit={handleSubmit}>
            <div>
                <label> Title: </label>
                <input type="text" name="title" value={title} onChange={e=>setTitle(e.target.value)} className="form-control"/>
            </div>
            <div>
                <label> Company: </label>
                <input type="text" name="company" value={company} onChange={e=>setCompany(e.target.value)} className="form-control"/>
            </div>
            <div>
                <label> Salary: </label>
                <input type="number" name="salary" value={salary} onChange={e=>setSalary(e.target.value)} className="form-control"/>
            </div>
            <div>
                <input type="checkbox" name="isRemote" checked={isRemote} onChange={e=>setIsRemote(e.target.checked)} /> 
                <label> remote</label>
            </div>
            <div>
                <input type="checkbox" name="isApplied" checked={isApplied} onChange={e=>setIsApplied(e.target.checked)} /> 
                <label> Applied</label>
            </div>
            <button type="submit" className='btn btn-success'> Update job</button>
            <button type="button" className='btn btn-secondary' onClick={()=>navigate("/")}> Cancel</button>
            <button type="button" className='btn btn-danger' onClick={handleDelete}> Delete</button>
            </form>
        </div>
    )
}

export default UpdatePage