import React from 'react'


const WhyUs = (props) => {
let WhyUsReasons = [
  { id:1 , title:"Over 10000 properties", image:"https://image.flaticon.com/icons/png/512/15/15756.png" },
  { id:2 , title:"Quality checked", image:"https://image.flaticon.com/icons/png/512/15/15756.png" },
  { id:3 , title:"Ober 1 million customers", image:"https://image.flaticon.com/icons/png/512/15/15756.png" },
  { id:4 , title:"Would bokk with us again", image:"https://image.flaticon.com/icons/png/512/15/15756.png" },
  { id:5 , title:"Book with confidence", image:"https://image.flaticon.com/icons/png/512/15/15756.png" }
]
const listReasons = WhyUsReasons.map((WhyUsReason) =>
    <div className="why-card-wrapper ">
		<img className="why-icon" src={WhyUsReason.image} alt="space "></img>
		<div className="">
			<h6 className="green-blue" >{WhyUsReason.title}</h6>
		</div>
    </div>
);
  return (
		<section>
			<h3>Why us?</h3>
			<div className="">
				<div className="d-flex flex-wrap justify-content-between ">
					{listReasons}
				</div>
			</div>
		</section>
  )
}

export default WhyUs