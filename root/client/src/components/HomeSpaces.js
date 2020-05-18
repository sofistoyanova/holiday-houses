import React from 'react'


const HomeSpaces = (props) => {
let spaces = [
  { id:1 , title:"Villas", image:"https://billeder.apollorejser.dk/villas-alondras-suites-1567252261-174037-WideInspirationalPhoto.jpg" },
  { id:2 , title:"Apartments", image:"https://cityapartment.dk/wp-content/uploads/2020/05/stue-952x658.jpg" },
  { id:3 , title:"Hotels", image:"https://r-cf.bstatic.com/images/hotel/max1024x768/189/189427780.jpg" }
]
const listSpaces = spaces.map((space) =>
    <div className="col-sm-6 col-md-4 space-wrapper mb-3">
		<img className="space-img" src={space.image} alt="space "></img>
		<div className="d-flex justify-content-between space-bottom">
			<h5 className="d-flex align-self-center m-2 white" >{space.title}</h5>
			<button className="white m-2 p-1" >{space.title}</button>
		</div>
    </div>
);
  return (
		<section>
			<h3>Find spaces that suit your style</h3>
			<div className="">
				<div className="row">
					{listSpaces}
				</div>
			</div>
		</section>
  )
}

export default HomeSpaces