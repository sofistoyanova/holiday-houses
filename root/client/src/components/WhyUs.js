import React from 'react'


const WhyUs = (props) => {
let WhyUsReasons = [
  { id:1 , title:"Over 10000 properties", image:"https://image.flaticon.com/icons/png/512/15/15756.png" },
  { id:2 , title:"Quality checked", image:"https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/000/704/original/quality.png" },
  { id:3 , title:"Over 1 million customers", image:"https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/001/348/original/customers.png" },
  { id:4 , title:"98% would book with us again", image:"https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/001/457/original/calendar.png" },
  { id:5 , title:"Book with confidence", image:"https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/005/210/original/like.png" }
]
const listReasons = WhyUsReasons.map((WhyUsReason) =>
    <div className="why-card-wrapper d-flex flex-column justify-content-center">
		<img className="why-icon" src={WhyUsReason.image} alt="space "></img>
		<div className="">
			<h6 className="green-blue why-text" >{WhyUsReason.title}</h6>
		</div>
    </div>
)
  return (
		<section className="section">
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