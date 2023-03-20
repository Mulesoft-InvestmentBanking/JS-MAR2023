import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import CreateForm from '../components/CreateForm'

// form to track all the input (useState)
// after submit - post data to backend  (axios)
// after successful submit - useNavigate
const CreatePage = () => {
    

    return (
        <div>
            <h1>Create a destination</h1>
            <CreateForm />

        </div>
    )
}

export default CreatePage