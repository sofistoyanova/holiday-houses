import React, { useState, useEffect } from 'react'
import MainFilter from '../components/top/MainFilter.js'
import HeroImage from '../components/top/HeroImage.js'
import HomeSpaces from '../components/HomeSpaces.js'
import { useStore } from 'react-context-hook'
import { useHistory } from 'react-router-dom'
import Footer from '../components/Footer.js'
import { Link } from "react-router-dom"

const MyBookings = (props) => {
    const userId = props.userId 
    const [bookings, setBookings] = useState([])
    const history = useHistory()


    useEffect(() => {
        if(!userId) {
            history.push("/login")
        }
        fetch(`http://localhost:9091/api/bookings/my-bookings?userId=${userId}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        }
        })
        .then(response => response.json())
        .then(data => {
            setBookings(data.message)
        })
    }, [])
    
    const listBookings = bookings.map((booking) => {
        let startDate = new Date(booking.start_date)
        startDate = startDate.toISOString().split('T')[0]

        let endDate = new Date(booking.end_date)
        endDate = endDate.toISOString().split('T')[0]

        const title = booking.title
        const imageName = booking.image_name

        return (
            <div className="specific-house">
            <div className="d-flex my-bookings">
                <img  className="single-house-image" src={require(`../uploads/${imageName}`)} ></img>
                <div className="w-100 position-relative p-4 ">
                    <div className="">
                        <div className="d-flex justify-content-between">
                            <h5 className="text-blue">{title}</h5>
					    </div>
                        <div className="d-flex justify-content-between">
                            <h5>Start date:</h5>
                            <h5 className="text-blue">{startDate}</h5>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h5 >End date:</h5>
                            <h5 className="text-blue">{endDate}</h5>
                        </div>
                    </div>
                </div>
            </div>
		</div>
        )
    })

  return (
    <div>
        <HeroImage></HeroImage>
        <div className="hero-image-pos-rel"></div>
        <MainFilter></MainFilter>
            {listBookings}
        <Footer></Footer>
    </div>
  )
}

export default MyBookings