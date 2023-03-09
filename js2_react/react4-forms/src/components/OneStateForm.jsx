import React, { useState } from 'react'
import FormDisplay from './FormDisplay'
// for all input, state variables
const OneStateForm = () => {
    const [formState, setFormState] = useState({
        username: "",
        age: 10,
        password: ""
    })

    const [formError, setFormError] = useState({
        username: true,
        age: true,
        password: true
    })

    const handleFormInput = (e) => {
        const keyToUpdate = e.target.name
        const valToUpdate = e.target.value
        // handle input
        setFormState({
            ...formState,
            [keyToUpdate]: valToUpdate
        })

        // handle errors
        const errors = { ...formError }
        // if (keyToUpdate === "username") {
        //     valToUpdate.length < 3 ?
        //         errors.username = "username must be at least 3 characters" :
        //         errors.username = ""
        // }

        // if (keyToUpdate === "age") {
        //     valToUpdate < 18 ?
        //         errors.age = "age must be at least 18" :
        //         errors.age = ""
        // }

        // if (keyToUpdate === "password") {
        //     valToUpdate.length < 8 ?
        //         errors.password = "password must be at least 8 characters" :
        //         errors.password = ""
        // }

        switch (keyToUpdate) {
            case 'username':
                valToUpdate.length < 3 ?
                    errors.username = "username must be at least 3 characters" :
                    errors.username = ""
                break;
            case 'age':
                valToUpdate < 18 ?
                    errors.age = "age must be at least 18" :
                    errors.age = ""
                break;
            case 'password':
                valToUpdate.length < 8 ?
                    errors.password = "password must be at least 8 characters" :
                    errors.password = ""
        }

        setFormError(errors)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        // send the completed form into backend using API
        const newUser = formState
        console.log(newUser)
    }

    return (
        <fieldset>
            <legend> OneStateForm.jsx</legend>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Username: </label>
                    <input type="text" onChange={handleFormInput}
                        name="username" value={formState.username} />
                    <p style={{ color: "red" }}> {formError.username} </p>
                </div>
                <div>
                    <label> Age: </label>
                    <input type="number" onChange={handleFormInput}
                        name="age" value={formState.age} />
                    <p style={{ color: "red" }}> {formError.age} </p>
                </div>
                <div>
                    <label> Password: </label>
                    <input type="password" onChange={handleFormInput}
                        name="password" value={formState.password} />
                    <p style={{ color: "red" }}> {formError.password} </p>
                </div>
                <button type="submit"> Submit</button>
            </form>
            <FormDisplay username={formState.username} age={formState.age} password={formState.password} />
        </fieldset>
    )
}

export default OneStateForm