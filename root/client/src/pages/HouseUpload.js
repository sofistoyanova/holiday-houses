import React, { useState, useEffect } from 'react'
import MainFilter from '../components/top/MainFilter.js'
import HeroImage from '../components/top/HeroImage.js'
import HomeSpaces from '../components/HomeSpaces.js'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


const HouseUpload = (props) => {
    const history = useHistory()
    const userId = props.userId
    const [errorMessage, setErrorMessage] = useState('')
    const [title, setTitle] = useState()
    const [city, setCity] = useState()
    const [zip, setZip] = useState()
    const [type, setType] = useState('villa')
    const [description, setDescription] = useState()
    const [rooms, setRooms] = useState()
    const [beds, setBeds] = useState()
    const [bathrooms, setBathrooms] = useState()
    const [price, setPrice] = useState()
    const [petAllowed, setPetAllowed] = useState('yes')
    const [file, setFile] = useState()

    useEffect(() => {
        if(!userId) {
            history.push("/login")
        }
    })

    const sendHouseRequets = (formData) => {
        axios.post('http://localhost:9091/api/houses/registerhouse', formData)
            .then(res => {
                if(res.data.status == 200) {
                    setErrorMessage('House was uploaded')
                } else {
                    setErrorMessage(res.data.message)
                }
            })
            .catch(err => console.log('err',err))
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()

        if(!title || !rooms || !price || !city || !zip || !type || !description || !file || !beds || !bathrooms || !petAllowed) {
            setErrorMessage('Fullfill everything')
        } else {
            const formData = new FormData()
            formData.append("title", title)
            formData.append("city", city)
            formData.append("zip", zip)
            formData.append("type", type)
            formData.append("description", description)
            formData.append("beds", beds)
            formData.append("bathrooms", bathrooms)
            formData.append("petAllowed", petAllowed)
            formData.append("price", price)
            formData.append("file", file)
            formData.append("rooms", rooms)
            formData.append("userId", userId)

            sendHouseRequets(formData)
        }
        
    }
    return (
        <div>
            <HeroImage></HeroImage>
            <div className="hero-image-pos-rel"></div>
            <MainFilter></MainFilter>

            <div className="row uploadHouse_container">
                <div className="form_container col-sm-12 col-md-12 col-lg-12">
                    <form encType="multipart/form-data" id="uploadHouseForm" onSubmit={handleFormSubmit} className="d-flex align-items-start flex-column">
                        <h2>Upload house</h2>
                        <p className="errorMsg">{errorMessage != '' ? errorMessage : ''}</p>
                        <div className="inputContainer">
                            <label>Title</label>
                            <input onChange={event => {
                                        const { value } = event.target
                                        setTitle(value)
                                    }} 
                                    name="title" className="input"  type="text" placeholder="House Title"></input>
                        </div>
                        <div className="inputContainer">
                            <label>City</label>
                            <input onChange={event => {
                                        const { value } = event.target
                                        setCity(value)
                                    }} 
                                    name="city" className="input"  type="text" placeholder="City"></input>
                        </div>
                        <div className="inputContainer">
                            <label>ZIP</label>
                            <input onChange={event => {
                                        const { value } = event.target
                                        setZip(value)
                                    }} 
                                    name="zip" className="input"  type="text" placeholder="ZIP code"></input>
                        </div>
                        <div className="inputContainer">
                            <label>Type</label>
                            <select onChange={event => {
                                        const { value } = event.target
                                        setType(value)
                                    }} 
                                    name="type" className="input" >
                            <option value="villa">Villa</option>
                            <option value="aparment">Apartment</option>
                            <option value="hotel">Hotel</option>
                        </select>
                        </div>
                        <div className="inputContainer">
                            <label>Description</label>
                            <textarea onChange={event => {
                                        const { value } = event.target
                                        setDescription(value)
                                    }}
                                    name="description" placeholder="Describe your house"></textarea>
                        </div>
                        <div className="inputContainer">
                            <label>Image</label>
                            <input onChange={event => {
                                        const file = event.target.files[0]
                                        setFile(file)
                                    }} 
                                    name="file" accept=".jpg" type="file"></input>
                        </div>
                        <div className="inputContainer">
                            <label>Rooms</label>
                            <input onChange={event => {
                                        const { value } = event.target
                                        setRooms(value)
                                    }} 
                                    name="rooms" type="text"></input>
                        </div>
                        <div className="inputContainer">
                            <label>Beds</label>
                            <input onChange={event => {
                                        const { value } = event.target
                                        setBeds(value)
                                    }} 
                                    name="beds" type="text"></input>
                        </div>
                        <div className="inputContainer">
                            <label>Bathrooms</label>
                            <input onChange={event => {
                                        const { value } = event.target
                                        setBathrooms(value)
                                    }} 
                                    name="bathrooms" type="text"></input>
                        </div>
                        <div className="inputContainer">
                            <label>Price per night</label>
                            <input onChange={event => {
                                        const { value } = event.target
                                        setPrice(value)
                                    }} 
                                    name="price" type="text"></input>
                        </div>
                        <div className="inputContainer">
                            <label>Pet Allowed</label>
                            <select onChange={event => {
                                        const { value } = event.target
                                        setPetAllowed(value)
                                    }} 
                                    name="petAllowed">
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <input className="btn-info" type="submit" value="submit"></input>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default HouseUpload