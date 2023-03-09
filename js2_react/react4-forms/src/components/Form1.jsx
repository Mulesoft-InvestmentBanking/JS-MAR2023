import React, { useState } from 'react'
import FormDisplay from './FormDisplay'
// for all input, state variables
const Form1 = () => {
    const [username, setUsername] = useState("anonymous")
    const [age, setAge] = useState(10)
    const [password, setPassword] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        // send the completed form into backend using API
        const newUser = {username, age, password }
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
                    <label> Age: </label>
                    <input type="number" onChange={(e) => setAge(e.target.value)}
                        name="age" value={age} />
                </div>
                <div>
                    <label> Password: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)}
                        name="password" value={password} />
                </div>
                <button type="submit"> Submit</button>
            </form>
            <FormDisplay username={username} age={age} password={password}/>
        </fieldset>
    )
}

export default Form1