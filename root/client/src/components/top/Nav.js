import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Login from '../../pages/Login.js'
import Signup from '../../pages/Signup.js'
import Home from '../../pages/Home.js'
import HouseUpload from '../../pages/HouseUpload.js'
import BookHouse from '../../pages/BookHouse.js'
import SeeAll from '../../pages/SeeAll.js'
import SpecificHouse from '../../pages/SpecificHouse'
import MyBookings from '../../pages/MyBooking.js'
import ContactUs from '../../pages/ContactUs.js'

const Nav = () => {

  const [ userId, setUserId ] = useState("")

  return (
    <div className="Nav">
      <Router>
        <ul className="d-flex justify-content-end">
          <h5 className="m-2"><Link to='/'>Home</Link></h5>
          <br></br>
          <h5 className="m-2"><Link to='/seeAll'>See all</Link></h5>
          <br></br>
          <h5 className="m-2" style={{display: "none"}}><Link to='/house'>See all</Link></h5>
          <br></br>
          <h5 className="m-2"> <Link to='/login'>Login</Link></h5>
          <br></br>
          <h5 className="m-2"><Link to='/signup'>Signup</Link></h5>
          <br></br> 
          <h5 className="m-2"><Link to='/upload-house'>Upload house</Link></h5> 
          <br></br> 
          <h5 className="m-2"><Link to='/my-bookings'>My bookings</Link></h5> 
          <br></br> 
          <h5 className="m-2"><Link to='/contactUs'>Contact us</Link></h5> 
          <br></br> 
          
         
        </ul>
        <div>
            <Switch>
                <Route path="/login">
                  <Login setUserId={setUserId} />
                </Route>
                <Route path="/signup">
                  <Signup />
                </Route> 
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/seeAll">
                  <SeeAll />
                </Route>
                <Route exact path="/house/:id" component={SpecificHouse}>
                  {/* <SpecificHouse houseId={houseId}/> */}
                </Route>
                <Route exact path="/upload-house">
                  <HouseUpload userId={userId} />
                </Route>
                <Route exact path="/book-house">
                  <BookHouse userId={userId} />
                </Route>
                <Route exact path="/my-bookings">
                  <MyBookings userId={userId} />
                </Route>
                <Route exact path="/contactUs">
                  <ContactUs />
                </Route>
            </Switch>
        </div>
      </Router>
    </div>
  )
}

export default Nav