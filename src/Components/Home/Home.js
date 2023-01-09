import React from 'react'
import Navigation from '../Header/Footer/Navigation'
import AboutUs from './AboutUs'
import AllCard from './AllCard'
import Home1 from './Home1'
import HomeSlider from './HomeSlider'

function Home() {
  return (
    <div className=''>
        <Navigation></Navigation>
        <br />
        {/* <Home1></Home1> */}
        {/* <HomeSlider></HomeSlider> */}
        <br />
        <br />
        <br />
        <AllCard></AllCard>
        <AboutUs></AboutUs>
      
    </div>
  )
}

export default Home
