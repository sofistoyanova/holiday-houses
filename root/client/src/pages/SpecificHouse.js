import React, { useEffect, useState } from 'react';
import MainFilter from '../components/top/MainFilter.js'
import HeroImage from '../components/top/HeroImage.js'
import Footer from '../components/Footer.js'


const SpecificHouse = (props) => {
  // const [title, setTitle] = useState('')
  // const [city, setCity] = useState('')
  // const [postalCode, setPostalCode] = useState('')
  // const [rooms, setRooms] = useState('')
  // const [bathrooms, setBathrooms] = useState('')
  // const [beds, setBed] = useState('')
  // const [description, setDescription] = useState('')
  // const [price_per_night, setPrice] = useState('')
  // const [pet_allowed, setPetAllowed] = useState('')
  // const houseId = (props.id)
  // useEffect(() => {
  //   fetch(`http://localhost:9091/api/houses/house/${houseId}`, {
  //     method: 'GET',
  //     credentials: 'include',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     }
  //   })
  //     .then((response) => response.json())
  //     .then((data) => 
  //         setTitle(title),
  //         setCity(city),
  //         setPostalCode(postalCode),
  //         setRooms(rooms),
  //         setBathrooms(bathrooms),
  //         setBed(beds),
  //         setDescription(description),
  //         setPrice(price_per_night),
  //         setPetAllowed(pet_allowed)
  //     )
  // }, [])

let house =  { id:1 , title:"Villa 1",city:"Copenhagen",postalCode:2300, rooms:3, bathrooms:2, beds:5,  description:"bla bla bla bla", price_per_night:130, pet_allowed:0,  image_name:"https://billeder.apollorejser.dk/villas-alondras-suites-1567252261-174037-WideInspirationalPhoto.jpg"}
  return (
    <div>
        <HeroImage></HeroImage>
        <div className="hero-image-pos-rel"></div>
        <MainFilter></MainFilter>
        <div className="specific-house">
          <div className="d-flex">
			  <img src={house.image_name}></img>
            <div className="d-flex justify-content-between">
				<div>
					<p>{house.title}</p>
					<p>{house.city} {house.postalCode}</p>
				</div>
  				<h5>${house.price_per_night} / NIGHT</h5>

            </div>
          </div>
            {house.city}
		    </div>

        <Footer></Footer>
    </div>
  )
}

export default SpecificHouse