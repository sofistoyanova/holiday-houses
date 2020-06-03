import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import HeroImage from '../components/top/HeroImage.js'
import Footer from '../components/Footer.js'

const Signup = (props) => {

  const [errorMessage, setErrorMessage] = useState('')
  const [ email, setEmail ]  = useState("")
  const [ password, setPassword] = useState("")
  const [ repeatPassword, setRepeatPassword ]= useState("")
  const [ first_name, setFirstName] = useState("")
  const [ last_name, setLastName] = useState("")
  const history = useHistory()

  const ignup = async (e) => {
    e.preventDefault()
    await fetch("http://localhost:9091/api/users/signup", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        repeatPassword,
        first_name,
        last_name
      }),
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(data => {
        if (data.status === 200) {
          history.push("/login")
        } else if ( data.status === 400 ) {
          setErrorMessage("User already exists")
        } else if ( data.status === 411 ) {
          setErrorMessage("Password not meeting requirements")
        }
        console.log(data)
    })
  }

  return (
    <div className="signup-page">
      <HeroImage></HeroImage>
      <div className="form-container signup-container">
        <h2>Signup</h2>
        <p className={errorMessage != '' ? "errorMsg" : ''}>{errorMessage != '' ? errorMessage : ''}</p>
        <form className="d-flex align-items-start flex-column">
            <input className="m-2 input" 
            type="text" 
            name="email" 
            placeholder="email" 
            value={email}
            onChange={e => setEmail(e.target.value)}
            required />

            <input className="m-2 input" 
            type="password" 
            name="password" 
            placeholder="password" 
            value={password}
            onChange={e => setPassword(e.target.value)}
            required />

            <input className="m-2 input" 
            type="password" 
            name="repeatPassword" 
            placeholder="Repeat password" 
            value={repeatPassword}
            onChange={e => setRepeatPassword(e.target.value)}
            required />

            <input className="m-2 input" 
            type="text" 
            name="firstName"  
            placeholder="First Name"  
            value={first_name}
            onChange={e => setFirstName(e.target.value)}
            required />

            <input className="m-2 input" 
            type="text" 
            name="lastName"  
            placeholder="Last Name"  
            value={last_name}
            onChange={e => setLastName(e.target.value)}
            required />

            <input
            type="submit" 
            className="m-2 input btn btn-info" 
            value="Signup"
            onClick={Signup}/>
        </form>
        <br></br>
          {/* <Link to='/forgot-password'>Did you forgot you password?</Link><br></br>
          <Link to='/signup'>Sign up instead?</Link> */}
          <div className="fixed-footer">
			</div>
      </div>
    </div>
  )
}

export default Signup