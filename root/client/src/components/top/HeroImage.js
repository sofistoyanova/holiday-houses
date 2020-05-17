import React, { Component } from 'react';
import hero from '../../images/hero-home.jpg'

 
export default class HeroImage extends Component {
  state = {
   
  }

  render() {

    return (
      <div className="hero-container">
		  <div className="hero-overlay"></div>
			<img className="hero-image" src={hero} alt="Hero photography"></img>
      </div>
     
    );
  }
}
