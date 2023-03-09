import React, { useState } from 'react'
import FormDisplay from './FormDisplay'
// for all input, state variables
const Form1 = () => {
    const [username, setUsername] = useState("anonymous")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        // send the completed form into backend using API
        const newUser = {username, email, password }
        console.log(newUser)
    }

    return (
        <fieldset>
            <legend> Form1.jsx</legend>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Username: </label>
                    <input type="text" onChange={(e) => setUsername(e.target.value)}
                        name="username" value={username} />
                </div>
                <div>
                    <label> Email: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)}
                        name="email" value={email} />
                </div>
                <div>
                    <label> Password: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)}
                        name="password" value={password} />
                </div>
                <button type="submit"> Submit</button>
            </form>
            <FormDisplay username={username} email={email} password={password}/>
        </fieldset>
    )
}

export default Form1