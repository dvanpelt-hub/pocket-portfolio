import React, { Component } from 'react'

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <header>
        <h1>Pocket Portfolio Landing Page</h1>
        <button type="submit">Log in</button>
        <button type="submit">Sign up</button>
      </header>
      <section>
        <header>
          <h3>Your ROI in the palm of your hand</h3>
        </header>
        <p>[<em>placeholder for screenshot of ROI tracker. possibly a background image related to stocks.</em>]</p>
        <p>
          Pocket Portfolio provides an updated real-time ROI for your stock
          portfolio.
        </p>
      </section>
      <section>
        <header>
          <h3>View your holdings and relative ROI</h3>
        </header>
        <p>[<em>placeholder for screenshot of holdings</em>]</p>
        <p>Portfolio holdings, purchase price, current price, and ROI.</p>
      </section>
      <section>
        <header>
          <h3>Sign up to start keeping track!</h3>
        </header>
        <form className="signup-form">
          <div>
            <label>First name</label>
            <input
              placeholder="First Name"
              type="text"
              name="first-name"
              id="first-name"
            />
          </div>
          <div>
            <label>Last name</label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              placeholder="Last Name"
            />
          </div>
          <div>
            <label>Email</label>
            <input type="text" name="username" id="username" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </section>
      </div>
    )
  }
}
