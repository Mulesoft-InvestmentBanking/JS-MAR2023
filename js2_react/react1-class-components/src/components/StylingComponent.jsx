import React, { Component } from 'react'

// 1. direct import
import "../css/styles.css"

// 3. css modules
import styles from "./StylingComponent.module.css"


export class StylingComponent extends Component {
  render() {
    const inline1 ={
        backgroundColor : "rebeccapurple",
        color: "white"
    }

    const inline3 = {
        backgroundColor : this.props.inlineColor,
        color: "white"
    }


    return (
      <div>
        <h1> Styling demo</h1>
        <button className='btn btn-primary'> Testing bootstrap</button>
        <h1> 3 different ways to import css</h1>
        <p className='directImport'> 1. directImport</p>
        <p style={inline1}> 2.1 inline styles 1</p>
        <p style={{backgroundColor: "orange", color: "white"}}> 2.2 inline styles 2</p>
        <p style={inline3}> 2.3 inline styles 3</p>
        <p className={styles.cssmodule}> 3 css modules</p>


      </div>
    )
  }
}

export default StylingComponent