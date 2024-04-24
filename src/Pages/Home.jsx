import React from 'react'
import HomeCarousel from '../Components/HomeCarousel'
import About from './About'
import Service from './Service'
import Doctor from './Doctor'

const Home = () => {
  return (
    <>
      <HomeCarousel/>
      <About/>
      <Service/>

      <Doctor/>
    </>
  )
}

export default Home
