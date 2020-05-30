import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import MainFilter from '../components/top/MainFilter.js'
import HeroImage from '../components/top/HeroImage.js'
import Footer from '../components/Footer.js'
import DatePicker from 'react-date-picker';



const SpecificHouse = (props) => {
  const houseId = props.match.params.id
  // const id = this.props.params.id
  const [title, setTitle] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [rooms, setRooms] = useState('')
  const [bathrooms, setBathrooms] = useState('')
  const [beds, setBed] = useState('')
  const [description, setDescription] = useState('')
  const [price_per_night, setPrice] = useState('')
  const [pet_allowed, setPetAllowed] = useState('')
  const [image_name, setImage] = useState('')
  useEffect(() => {
    fetch(`http://localhost:9091/api/houses/house/${houseId}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data => {
          setTitle(data.title)
          setCity(data.city)
          setPostalCode(data.postalCode)
          setRooms(data.rooms)
          setBathrooms(data.bathrooms)
          setBed(data.beds)
          setDescription(data.description)
          setPrice(data.price_per_night)
          setPetAllowed(data.pet_allowed)
          setImage(data.image_name)
	  })
  }, [])
return (
    <div>
        <HeroImage></HeroImage>
        <div className="hero-image-pos-rel"></div>
        <MainFilter></MainFilter>
        <div className="specific-house">
          <div className="d-flex">
			<img  className="single-house-image" src={image_name}></img>
			<div className="w-100 position-relative p-4 ">
				<div className="">
					<div className="d-flex justify-content-between">
						<h5 className="text-blue">{title}</h5>
						<h5 className="text-blue">${price_per_night} / NIGHT</h5>
					</div>
						<p>{city}, {postalCode}</p>
						<h5 className="text-blue">Facilities</h5>
						<div className="d-flex">
							<p className="house-tags p-2 mr-2">{rooms} room(s)</p>
							<p className="house-tags p-2 mr-2">{bathrooms} bathroom(s)</p>
							<p className="house-tags p-2 mr-2">{beds} bed(s)</p>
							<p className="house-tags p-2 mr-2">{pet_allowed === 1 ? "Pets allowed" : "No pets allowed" }</p>
						</div>
					</div>
          <div className="d-flex">
            <div className="m-2 search-input-wrapper">Arrive at:<DatePicker className="search-input" /></div>  
            <div className="search-input-wrapper days m-2">Days:<input className="search-input days"  type="number" min="1" max="100"  /></div>
				
					</div>
          <div><h5 className="text-blue">Total price:</h5></div>
          <Link to='/book-house' className="button blue p-2 pl-3 pr-3 see-details book-now">Book now</Link>
          </div>
					
			</div>
			<div className="house-description p-4">
				<h5>Description</h5>
				<p>{description} </p>
			</div>
           
		    </div>

        <Footer></Footer>
    </div>
  )
}

export default SpecificHouse