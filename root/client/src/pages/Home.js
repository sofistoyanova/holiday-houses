import React from 'react'
import MainFilter from '../components/top/MainFilter.js'
import HeroImage from '../components/top/HeroImage.js'
import HomeSpaces from '../components/HomeSpaces.js'
import HomePerfectPlace from '../components/HomePerfectPlace.js'
import Experiences from '../components/Experiences.js'
import WhyUs from '../components/WhyUs.js'
import MiddleBanner from '../components/MiddleBanner.js'
import Footer from '../components/Footer.js'

const Home = (props) => {

  return (
    <div>
        <HeroImage></HeroImage>
        <div className="hero-image-pos-rel"></div>
        <MainFilter></MainFilter>
        <HomeSpaces></HomeSpaces>
        <HomePerfectPlace></HomePerfectPlace>
        <WhyUs></WhyUs>
        <MiddleBanner></MiddleBanner>
        <Experiences></Experiences>
        <Footer></Footer>

    </div>
  )
}

export default Home