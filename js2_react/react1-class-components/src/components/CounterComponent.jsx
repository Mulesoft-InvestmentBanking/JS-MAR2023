import React, { Component } from 'react'

export class CounterComponent extends Component {
  render() {
    const alertWednesday = ()=>{
        alert("It's Wednesday, my dude")
    }

    return (
      <fieldset>
        <legend> CounterComponent.jsx</legend>
        <button onClick={()=>alert("Hi")}>Alert me! </button>
        <button onClick={alertWednesday}> Alert Wednesday</button>

      </fieldset>
    )
  }
}

export default CounterComponent