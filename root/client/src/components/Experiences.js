import React from 'react'


const Experiences = () => {
let Experiences = [
  { id:1 , userName:"Eduard Adam", text:"The view is different from different angles of the building. more pictures can be seen on the Gallery page. " },
  { id:2 , userName:"Norberth Varga", text:"The view is different from different angles of the building. more pictures can be seen on the Gallery page. The view is different from different angles of the building. more pictures can be seen on the Gallery page. " },
  { id:3 , userName:"Larisa Ailisoaie", text:"The view is different from different angles of the building. more pictures can be seen on the Gallery page. " },
  { id:4 , userName:"Viziteu Geanina", text:"The view is different from different angles of the building. more pictures can be seen on the Gallery page. " }
]
const listExperiences = Experiences.map((Experience) =>
    <div className="experiences-wrapper d-flex flex-column justify-content-flex-start p-4">
		<h6 className="green-blue ">{Experience.userName}</h6>
		<p className="green-blue experience-text">{Experience.text}</p>
    </div>
);
  return (
		<section className="section experiences-container">
			<h3>Experiences from customers</h3>
				<div className="d-flex flex-wrap justify-content-between ">

						{listExperiences}
				</div>
		</section>
  )
}

export default Experiences