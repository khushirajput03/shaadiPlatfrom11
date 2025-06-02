import React from 'react'
import { About1Part } from '../components/About1Part';
import { About2Part } from '../components/About2Part';
import { AboutCards } from '../components/AboutCards';
import { AboutFounder } from '../components/AboutFounder';
import { VenuePartners } from '../components/VenuePartners';
import { Why_Choose } from '../components/Why_Choose';

export const About = () => {
  return (
    <>
   <About1Part/>
   <About2Part/>
   <AboutCards/>
   <AboutFounder/>
   <VenuePartners/>
   <Why_Choose/>
   </>
  );
}
 
