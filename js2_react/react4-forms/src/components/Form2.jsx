import React, { useState } from 'react'
import FormDisplay from './FormDisplay'
// for all input, state variables
const Form2 = () => {
    const [username, setUsername] = useState("")
    const [age, setAge] = useState(10)
    const [password, setPassword] = useState("")

    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()
        // send the completed form into backend using API
        if(username.length < 3 || age < 18 || password.length < 8){ // invalid form
            alert("invalid form")
        }else{ // valid form
            setIsSubmitted(true)
            const newUser = {username, age, password }
            console.log(newUser)
        }
    }

    return (
        <fieldset>
            <legend> Form2.jsx</legend>
            {
                isSubmitted?
                <h1>Thank you for submitting the form</h1>:
                <h1>Please fill in the form</h1>
            }

            <form onSubmit={handleSubmit}>
                <div>
                    <label> Username: </label>
                    <input type="text" onChange={(e) => setUsername(e.target.value)}
                        name="username" value={username} />
                    { // username must be at least 3 characters
                        username.length < 3 &&
                        <p style={{color: "red"}}> username must be at least 3 characters </p>
                    }
                </div>
                <div>
                    <label> Age: </label>
                    <input type="number" onChange={(e) => setAge(e.target.value)}
                        name="age" value={age} />
                    {
                        age < 18 &&
                        <p style={{color: "red"}}> Age must be at least 18 </p>
                    }
                </div>
                <div>
                    <label> Password: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)}
                        name="password" value={password} />
                    { // username must be at least 3 characters
                        password.length < 8 &&
                        <p style={{color: "red"}}> Password must be at least 8 characters </p>
                    }
                </div>
                <button type="submit" disabled={username.length < 3 || age < 18 || password.length < 8}> Submit</button>
            </form>
            <FormDisplay username={username} age={age} password={password}/>
        </fieldset>
    )
}

export default Form2