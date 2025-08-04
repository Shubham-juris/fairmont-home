import React from 'react'
import { Hero } from '../components/homecomponents/Home'
import { FeaturedHomes } from '../components/homecomponents/FeaturedHomes'
import { BuildProcess } from '../components/homecomponents/BuildProcess'
// import { Testimonials } from '../components/homecomponents/Testimonials'
import { FAQ } from '../components/homecomponents/FAQ'

const HomePage = () => {
  return (
    <>
      <Hero/>   
      <FeaturedHomes/>
      <BuildProcess/>
      {/* <Testimonials/> */}
      <FAQ/>
    </>
  )
}

export default HomePage
