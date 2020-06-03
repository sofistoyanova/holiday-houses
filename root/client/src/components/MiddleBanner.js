import React from 'react'
import hero from '../images/hero-home.jpg'
import {Link} from "react-router-dom"



const MiddleBanner = (props) => {

  return (
		<section className="section">
			<div className="middle-container ">
				<div className="hero-overlay"></div>
				<img className="middle-hero-image" src={hero} alt="Hero photography"></img>

				<div className="d-flex align-items-start flex-column middle-container-text p-5">
					<h3>Want to upload a house?</h3>
					<p>Click here to register and upload your holiday house</p>
					<Link  className="btn btn-primary" to='/login'>Login now</Link><br></br>
				</div>

				<div className="need-help-banner p-3 d-flex align-items-center flex-column">
					<h3>Have difficulties in finding the perfect house?</h3>
					<p>Contact us and we will happily help you. </p>
					<Link  className="btn btn-primary" to='/contactUs'>Contact us</Link><br></br>
				</div>
     		</div>
			 
		
			
		</section>
  )
}

export default MiddleBanner