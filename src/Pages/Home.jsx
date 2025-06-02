import React from 'react'
import { HomeCarousel } from '../components/HomeCarousel'
import { HomeDecor } from '../components/HomeDecor'
import { HomeSuccessfulWedding } from '../components/HomeSuccessfulWedding'
import { HomeAbout } from '../components/HomeAbout'
import { VenuePartners } from '../components/VenuePartners'
import { HomeReactSlickSlider } from '../components/HomeReactSlickSlider'
import { OurService } from '../components/OurService'
import { HomeMessageForm } from '../components/HomeMessageForm'

export const Home = () => {
  return (
    <div>
      <HomeAbout/>
      {/* <HomeReactSlickSlider/> */}
      <OurService/>
       <VenuePartners/>
      {/* <HomeCarousel/>
      <HomeDecor/>
      <HomeSuccessfulWedding/> */}
      <HomeMessageForm/>
    </div>
  )
}
