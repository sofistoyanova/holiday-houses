import React from 'react'
import MainFilter from '../components/top/MainFilter.js'
import HeroImage from '../components/top/HeroImage.js'
import Footer from '../components/Footer.js'

const ContactUs = (props) => {

  return (
    <div>
        <HeroImage></HeroImage>
        <div className="hero-image-pos-rel"></div>
        <MainFilter></MainFilter>
        <div className=" p-3 d-flex align-items-center flex-column">
					<h3>We are here to help you!</h3>
          <p>Please don't hesitate to contact us by any time</p>
          <a href="mailto:HolidayHouses@support.com">HolidayHouses@support.com</a>
				</div>
        <Footer></Footer>

    </div>
  )
}

export default ContactUs