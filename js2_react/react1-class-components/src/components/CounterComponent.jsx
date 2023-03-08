import React, { Component } from 'react'

export class CounterComponent extends Component {
    constructor(props){
        super(props)
        this.state ={
            count : 0,
            likes: 100
        }
    }

    render() {
        const alertWednesday = () => {
            alert("It's Wednesday, my dude")
        }

        const addCount = ()=>{
            this.setState({count: this.state.count +1 })
        }


        return (
            <fieldset>
                <legend> CounterComponent.jsx</legend>
                <button onClick={() => alert("Hi")}>Alert me! </button>
                <button onClick={alertWednesday}> Alert Wednesday</button>

                <h1> Count: {this.state.count}</h1>
                <button onClick={addCount}> add count</button>

                <h1> Likes: {this.state.likes}</h1>
                <button onClick={()=>this.setState({likes : this.state.likes +1})}> Add likes</button>
            </fieldset>
        )
    }
}

export default CounterComponent