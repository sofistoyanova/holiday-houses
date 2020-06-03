import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

import MainFilter from '../components/top/MainFilter.js'
import HeroImage from '../components/top/HeroImage.js'
import Footer from '../components/Footer.js'


const Houses = (props) => {

  const [houses, setHouses] = useState([])
  useEffect(() => {
    fetch(`http://localhost:9091/api/houses/allhouses/`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => response.json())
      .then((data) => setHouses(data))
  }, [])
  const listHouses = houses.map((house) =>
      <div className="d-flex house-wrapper mb-3" key={house.id}>
        <img className="house-img" src={require(`../uploads/${house.image_name}`)} alt="house"></img>
        <div className="house-details p-3">
          <div className="house-details-top d-flex justify-content-between ">
          	<h4 className="d-flex align-self-center text-blue house-title" >{house.title}</h4>
          	<h4 className="d-flex align-self-center text-blue" >${house.price_per_night}/NIGHT</h4>
          </div>
          <p>{house.city}</p>
          <div className="d-flex ">
            <p className="house-tags p-2 mr-2">{house.pet_allowed === 1 ? "Pets allowed" : "No pets allowed" }</p>
          </div>
          <div className="d-flex faclities">
              <p className="m-2">{house.rooms} room(s)</p>
              <p className="m-2">{house.bathrooms} bathroom(s)</p>
              <p className="m-2">{house.beds} bed(s)</p>
          </div>
          
          <Link to={`house/${house.id}`} className="button blue p-2 pl-3 pr-3 see-details">See all details</Link>
          
        </div>
      </div>
  )

  return (
    <div>
        <HeroImage></HeroImage>
        <div className="hero-image-pos-rel"></div>
        <MainFilter></MainFilter>
        <div className="list-of-houses">
            {listHouses}
		    </div>

        <Footer></Footer>
    </div>
  )
}

export default Houses