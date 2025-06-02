import { useState } from 'react'
import './App.css'
import './index.css' 
import { Home } from "./Pages/Home";
import {About } from './Pages/About';
import {Service} from "./Pages/Service";
import {Portfolio} from "./Pages/Portfolio";
import { Contact } from './Pages/Contact';
import {Gallery} from './Pages/Gallery'
import {Header} from "./components/Header"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footer } from './components/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navbar } from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        {/* <Header/> */}
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Service/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Gallery' element={<Gallery/>}/>
        <Route path='Portfolio' element={<Portfolio/>}/>
        <Route path='Contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
