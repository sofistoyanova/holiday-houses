import React from 'react'


const HomePerfectPlace = (props) => {
let perfectHomes = [
  { id:1 , title:"Family friendly", image:"https://billeder.apollorejser.dk/villas-alondras-suites-1567252261-174037-WideInspirationalPhoto.jpg" },
  { id:2 , title:"Facilities", image:"https://cityapartment.dk/wp-content/uploads/2020/05/stue-952x658.jpg" },
  { id:3 , title:"Facilities", image:"https://r-cf.bstatic.com/images/hotel/max1024x768/189/189427780.jpg" },
  { id:4 , title:"Most visited locations", image:"https://r-cf.bstatic.com/images/hotel/max1024x768/189/189427780.jpg" },
  { id:5 , title:"Pets friendly", image:"https://r-cf.bstatic.com/images/hotel/max1024x768/189/189427780.jpg" }
]
const listPerfectHomes = perfectHomes.map((perfectHome) =>
    <div className="col-sm-6 col-md-4 home-wrapper mb-4">
		<img className="space-img" src={perfectHome.image} alt="space "></img>
		<div className="d-flex justify-content-between space-bottom">
			<h5 className="d-flex align-self-center m-2 white" >{perfectHome.title}</h5>
		</div>
    </div>
);
  return (
		<section className="section">
			<h3>We make your life easy to find perfect place to stay</h3>
			<div className="">
				<div className="row">
					{listPerfectHomes}
				</div>
			</div>
		</section>
  )
}

export default HomePerfectPlace