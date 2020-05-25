import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import HeroImage from '../components/top/HeroImage.js'
import Footer from '../components/Footer.js'
const Login = (props) => {

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const history = useHistory();

  const login = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:9091/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password
      }),
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(data => {
      console.log(data)
      if ( data.status === 200 ) {
        data.json().then(json => {
          props.setUserId(json.id)
        }).then(() => {
          console.log('Successfully logged in!')
          // history.push("/") // To home 
        })
      } else if( data.status ===  404){
        console.log(data)
      } else {
        console.log(data)
      }
    })
  }

  return (
	  <div className="login-page">
		<HeroImage></HeroImage>
		<div className="form-container login-container">
		<h2>Login </h2>
		<form className="d-flex align-items-start flex-column">
			<input 
			className="m-2 input" 
			type="text" 
			name="email" 
			placeholder="email" 
			value={email}
			onChange={e => setEmail(e.target.value)}
			required />

			<input 
			className="m-2 input" 
			type="password" 
			name="password" 
			placeholder="password" 
			value={password}
			onChange={e => setPassword(e.target.value)}
			required />

			<input
			className="m-2 input btn btn-info" 
			type="button" 
			onClick={login}
			value="login"></input>

		</form>
		<br></br>
			{/* <Link to='/forgot-password'>Did you forgot you password?</Link><br></br>
			<Link to='/signup'>Sign up instead?</Link> */}
			<div className="fixed-footer">
				<Footer></Footer>
			</div>
		</div>
	</div>
  )
}

export default Login