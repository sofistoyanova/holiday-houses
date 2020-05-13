import React, { } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './../pages/Login.js'
import Signup from './../pages/Signup.js'
import Home from './../pages/Home.js'

const Nav = () => {
  
  return (
    <div className="Nav">
      <Router>
        <ul>
          <Link to='/'>Home</Link>
          <br></br>
          <Link to='/login'>Login</Link>
          <br></br>
          <Link to='/signup'>Signup</Link>
         
        </ul>
        <div>
            <Switch>
                <Route path="/login">
                  <Login  />
                </Route>
                <Route path="/signup">
                  <Signup />
                </Route> 
                <Route exact path="/">
                  <Home />
                </Route>
            </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Nav;