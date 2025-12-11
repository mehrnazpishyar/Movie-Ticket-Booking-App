import React from 'react'
import HeroSection from '../components/HeroSection'
import Featured from '../components/Featured';
import TrailerSection from '../components/TrailerSection';


const Homepage = () => {
  return (
    <div>
        <HeroSection/>
        <Featured/>
        <TrailerSection/>
    </div>
  )
}

export default Homepage;