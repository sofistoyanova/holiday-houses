import React from 'react'
import MainFilter from '../components/top/MainFilter.js'
import HeroImage from '../components/top/HeroImage.js'
import Footer from '../components/Footer.js'


const Bookings = (props) => {
  let allHouses = [
    { id:1 , title:"Villa 1", image:"https://billeder.apollorejser.dk/villas-alondras-suites-1567252261-174037-WideInspirationalPhoto.jpg", price:"120", location: "Copenhagen", tags: ["Costal", "Costal", "Costal" ] },
    { id:2 , title:"Villa 2", image:"https://cityapartment.dk/wp-content/uploads/2020/05/stue-952x658.jpg", price:"220", location: "Copenhagen", tags: ["Costal", "Costal", "Costal" ] },
    { id:3 , title:"Villa 3", image:"https://r-cf.bstatic.com/images/hotel/max1024x768/189/189427780.jpg", price:"100", location: "Copenhagen", tags: ["Costal", "Costal", "Costal" ] }
  ]
//   const listTags = allHouses.map(tags => tags.map( tag =>
//   tag)
//   );

  const listHouses = allHouses.map((house) =>
      <div className="d-flex house-wrapper mb-3">
        <img className="house-img" src={house.image} alt="house "></img>
        <div className="house-details p-3">
          <div className="house-details-top d-flex justify-content-between ">
          	<h5 className="d-flex align-self-center text-blue" >{house.title}</h5>
          	<h5 className="d-flex align-self-center text-blue" >${house.price}/NIGHT</h5>
          </div>
          <p>{house.location}</p>
  			{/* <div>{listTags}</div> */}

          <button className="button blue p-1">See details</button>
        </div>
      </div>
  );

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

export default Bookings