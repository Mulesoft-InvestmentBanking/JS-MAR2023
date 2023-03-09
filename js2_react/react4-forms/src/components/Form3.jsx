import React, { useState } from 'react'
import FormDisplay from './FormDisplay'
// for all input, state variables
const Form3 = () => {
    const [username, setUsername] = useState("")
    const [age, setAge] = useState(10)
    const [password, setPassword] = useState("")

    const [isSubmitted, setIsSubmitted] = useState(false)

    // error messages
    const [usernameError, setUsernameError] = useState(true)
    const [ageError, setAgeError] = useState(true)
    const [passwordError, setPasswordError] = useState(true)


    const handleSubmit = (e) =>{
        e.preventDefault()
        // send the completed form into backend using API
        if(usernameError || ageError || passwordError){ // invalid form
            alert("invalid form")
        }else{ // valid form
            setIsSubmitted(true)
            const newUser = {username, age, password }
            console.log(newUser)
        }
    }

    const handleSubmittedMessage = () =>{
        if(isSubmitted){
            return "Thank you for submitting the form"
        }else{
            return "Please fill in the form" 
        }
    }

    const handleUsername = (e) =>{
        setUsername(e.target.value)
        if(e.target.value.length < 3){
            setUsernameError("username must be at least 3 characters")
        }else{
            setUsernameError("")
        }
    }

    const handleAge = (e)=>{
        setAge(e.target.value)
        if(e.target.value < 18){
            setAgeError("Age must be at least 18")
        }else{
            setAgeError("")
        }
    }

    const handlePassword = (e) =>{
        setPassword(e.target.value)
        if(e.target.value.length < 8){
            setPasswordError("Password must be at least 8 characters")
        }else{
            setPasswordError("")
        }
    }

    return (
        <fieldset>
            <legend> Form3.jsx</legend>
            <h1>{handleSubmittedMessage()}</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label> Username: </label>
                    <input type="text" onChange={handleUsername}
                        name="username" value={username} />
                    <p style={{color: "red"}}> {usernameError} </p>
                </div>
                <div>
                    <label> Age: </label>
                    <input type="number" onChange={handleAge}
                        name="age" value={age} />
                    <p style={{color: "red"}}> {ageError} </p>
                </div>
                <div>
                    <label> Password: </label>
                    <input type="password" onChange={handlePassword}
                        name="password" value={password} />
                    <p style={{color: "red"}}> {passwordError} </p>
                </div>
                <button type="submit" disabled={usernameError || ageError || passwordError}> Submit</button>
            </form>
            <FormDisplay username={username} age={age} password={password}/>
        </fieldset>
    )
}

export default Form3