import React, { Component } from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

export class Container extends Component {
  render() {
    return (
      <fieldset>
        <legend> Container.jsx</legend>
        {/* <Header />
        <Main />
        <Footer /> */}

        {this.props.children}


      </fieldset>
    )
  }
}

export default Container