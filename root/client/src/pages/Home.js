import React, { useState } from 'react'
import MainFilter from '../components/top/MainFilter.js'
import HeroImage from '../components/top/HeroImage.js'
import HomeSpaces from '../components/HomeSpaces.js'
import HomePerfectPlace from '../components/HomePerfectPlace.js'
import WhyUs from '../components/WhyUs.js'

// import {Link, useHistory, useLocation } from "react-router-dom"

const Home = (props) => {

  return (
    <div>
        <HeroImage></HeroImage>
        <MainFilter></MainFilter>
        <HomeSpaces></HomeSpaces>
        <HomePerfectPlace></HomePerfectPlace>
        <WhyUs></WhyUs>
		
      

    </div>
  )
}

export default Home