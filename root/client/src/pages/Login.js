import React from 'react'


const Login = (props) => {


  return (
    <div className="form-container">
      <h2>login </h2>
      <form className="d-flex align-items-start flex-column">
        <input className="m-2" type="text" name="email" placeholder="email" required />
        <input className="m-2" type="password" name="password" placeholder="password" required />
        <input className="m-2" type="submit" value="login"></input>
      </form>
      <br></br>
        {/* <Link to='/forgot-password'>Did you forgot you password?</Link><br></br>
        <Link to='/signup'>Sign up instead?</Link> */}
    </div>
  )
}

export default Login