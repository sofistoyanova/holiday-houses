import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from '../../pages/Login.js'
import Signup from '../../pages/Signup.js'
import Home from '../../pages/Home.js'
import SeeAll from '../../pages/SeeAll.js'

const Nav = () => {

  const [ userId, setUserId ] = useState("");

  return (
    <div className="Nav">
      <Router>
        <ul className="d-flex justify-content-end">
          <h5 className="m-2"><Link to='/'>Home</Link></h5>
          <br></br>
          <h5 className="m-2"><Link to='/seeAll'>See all</Link></h5>
          <br></br>
          <h5 className="m-2"> <Link to='/login'>Login</Link></h5>
          <br></br>
          <h5 className="m-2"><Link to='/signup'>Signup</Link></h5> 
          
         
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
            </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Nav;