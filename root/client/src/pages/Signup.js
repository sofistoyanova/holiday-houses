import React, { useState } from 'react'
// import {Link, useHistory, useLocation } from "react-router-dom"

const Signup = (props) => {


  return (
    <div>
      <h2>Signup route</h2>
      <form >
      <input type="text" name="username"  placeholder="username"  required />
      <input type="password" name="password" placeholder="password" required />
      <input type="submit" value="Signup"></input>
      </form>
      <br></br>
        {/* <Link to='/forgot-password'>Did you forgot you password?</Link><br></br>
        <Link to='/signup'>Sign up instead?</Link> */}
    </div>
  )
}

export default Signup;