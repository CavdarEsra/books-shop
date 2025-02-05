import React from 'react'
import Hero from '../components/Hero'
import NewArrivals from '../components/NewArrials'
import About from '../components/About'
import PopularBooks from '../components/PopularBooks'
import Features from '../components/Features'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Hero/>
      <NewArrivals/>
      <About/>
      <PopularBooks/>
      <Features/>
      <div className="max-padd-container bg-white">
        <Footer/>
      </div>
    </div>
  )
}

export default Home