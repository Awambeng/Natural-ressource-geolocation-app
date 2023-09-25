import React, { Component } from 'react'
import './logout.css'

export default class Logout extends Component {
    constructor(props) {
        super(props)
        localStorage.removeItem("user")
    }
  render() {
    return (
      <div className="log-out">
        <h1>You have been logged-out</h1>
        <a href="/sign-in">Login again</a>
      </div>
    )
  }
}