import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import HeroImage from '../components/top/HeroImage.js'
import Footer from '../components/Footer.js'

const Login = (props) => {
	const [errorMessage, setErrorMessage] = useState('')
	const [ email, setEmail ] = useState("")
	const [ password, setPassword ] = useState("")
	const history = useHistory()

	const login = async (e) => {
		e.preventDefault()
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
			history.push("/")
			})
		} else if( data.status ===  404){
			setErrorMessage('Wrong email and/or password')
		} else if( data.status === 400 ){
			setErrorMessage('Wrong email and/or password')
		}
		})
	}

	return (
	  	<div className="login-page">
			<HeroImage></HeroImage>
			<div className="form-container login-container">
			<h2>Login </h2>
			<p className={errorMessage != '' ? "errorMsg" : ''}>{errorMessage != '' ? errorMessage : ''}</p>
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
				value="login" />

			</form>
			<br></br>
				<div className="fixed-footer">
				</div>
			</div>
		</div>
  	)
}

export default Login