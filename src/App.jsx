import React from 'react'
import './App.css'
import {Routes,Route} from "react-router-dom" 
import About from './Pages/About';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Header from './Components/Header';
import TopBar from './Components/TopBar';
import Doctor from './Pages/Doctor';
import ServiceDetail from './Pages/ServiceDetail';



const App = () => {
  return (
    <>
    <TopBar/>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/service/:id' element={<ServiceDetail/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/doctors' element={<Doctor/>}/>
    </Routes>
    </>
  )
}

export default App
