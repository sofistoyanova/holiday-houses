import React, { useState } from 'react'
// import {Link, useHistory, useLocation } from "react-router-dom"

const Signup = (props) => {


  return (
    <div className="form-container">
      <h2>Signup</h2>
      <form className="d-flex align-items-start flex-column">
          <input className="m-2" type="text" name="email" placeholder="email" required />
          <input className="m-2" type="password" name="password" placeholder="password" required />
          <input className="m-2" type="password" name="repeatPassword" placeholder="Repeat password" required />
          <input className="m-2" type="text" name="firstName"  placeholder="First Name"  required />
          <input className="m-2" type="text" name="lastName"  placeholder="Last Name"  required />
          <input className="m-2" type="submit" className="btn btn-info" value="Signup"></input>
      </form>
      <br></br>
        {/* <Link to='/forgot-password'>Did you forgot you password?</Link><br></br>
        <Link to='/signup'>Sign up instead?</Link> */}
    </div>
  )
}

export default Signup;