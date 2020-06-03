import React, { useState, useEffect } from 'react'
import MainFilter from '../components/top/MainFilter.js'
import HeroImage from '../components/top/HeroImage.js'
import HomeSpaces from '../components/HomeSpaces.js'
import { useStore } from 'react-context-hook'
import { useHistory } from 'react-router-dom'

const BookHouse = (props) => {
    const [errorMessage, setErrorMessage] = useState('')
    const [houseId, setHouseId] = useStore('houseId')
    const userId = props.userId
    const history = useHistory()

    useEffect(() => {
        if(!userId) {
            history.push("/login")
        }
    })


    const sendBookingRequest = (formData) => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        }

        fetch(`http://localhost:9091/api/bookings/make-booking?houseId=${houseId}&renterId=${userId}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                if(data.status == 200) {
                    setErrorMessage(data.message)
                }else {
                    setErrorMessage(data.message)
                }
            } )
            .catch(err => {
                setErrorMessage('Database error')
            }) 
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const form = document.getElementById('bookingForm')
        const formData = Object.fromEntries(new FormData(form).entries())
        sendBookingRequest(formData)
    }

  return (
    <div>
        <HeroImage></HeroImage>
        <div className="hero-image-pos-rel"></div>
        <MainFilter></MainFilter>

        <div className="row uploadHouse_container">
            <div className="form_container col-sm-12 col-md-12 col-lg-6">
                <form id="bookingForm" onSubmit={handleFormSubmit} className="d-flex align-items-start flex-column">
                    <h2>Your details</h2>
                    <p className="errorMsg">{errorMessage != '' ? errorMessage : ''}</p>
                    <div className="inputContainer">
                        <label>How many adults?</label>
                        <input name="adults" required className="smallerInputs" type="text" placeholder="2 Adults"></input>
                    </div>
                    <div className="inputContainer">
                        <label>How many kids?</label> 
                        <input name="children" required className="smallerInputs" type="text" placeholder="0 Children"></input>
                    </div>
                    <div className="inputContainer">
                        <label>Start date</label>
                        <input name="startDate" required type="date"></input>
                    </div>
                    <div className="inputContainer">
                        <label>End date:</label>
                        <input name="endDate" required type="date"></input>
                    </div>
                    <input type="submit" className="btn-info"></input>
                </form>
            </div>
            <div className="image_container col-sm-12 col-md-12 col-lg-6">
                <h3>House name</h3>
                <h6>Location</h6>
                <img src="https://images.adsttc.com/media/images/5be9/fd5c/08a5/e5a5/8c00/008f/newsletter/CARLES_FAUS_ARQUITECTURA_-_CARMEN_HOUSE_(2).jpg?1542061390" />
                <p>from 1.02.2019 - 04.02.2019</p>
                <p>Total price</p>
            </div>
        </div>
        <button className="btn-info">continue</button>

    </div>
  )
}

export default BookHouse