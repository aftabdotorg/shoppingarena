import React from 'react'
import Ads from '../components/Ads'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
        <Ads/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default Home