import React, { Component } from 'react'
import './Login.css';

export default class Login extends Component {
  render() {
    return (
      <>
        <header>
          <h1>Pocket Portfolio Login page</h1>
        </header>
          <h3>Welcome back!</h3>
        <form className="login-form">
          <label>Username</label>
            <input type="text" name="username" id="username" />
          <div>
            <label>Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <button type="submit">Log in</button>
        </form>
      </>
    )
  }
}