import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import TopBar from "./Components/TopBar";
import Doctor from "./Pages/Doctor";
import ServiceDetail from "./Pages/ServiceDetail";
import Footer from "./Components/Footer";
import DoctorDetails from "./Pages/DoctorDetails";
import Appointment from "./Pages/Appointment";
import Case from "./Pages/Case";
import Loader from "./Components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);
useEffect(()=>{
  setTimeout(()=>{
    setLoading(false);
  },1000)
})

  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <TopBar />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/service/:id" element={<ServiceDetail />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/doctor" element={<Doctor />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/case" element={<Case />} />
            <Route path="/doctors/:id" element={<DoctorDetails />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
