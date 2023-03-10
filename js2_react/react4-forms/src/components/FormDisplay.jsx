import React from 'react'

const FormDisplay = (props) => {
    return (
        <fieldset>
            <legend> FormDisplay.jsx</legend>
            <h2> Username: {props.username}</h2>
            <h2> age: {props.age} </h2>
            <h2> Password: {props.password}</h2>
            <h2> Confirm: {props.confirm}</h2>
        </fieldset>
    )
}

export default FormDisplay