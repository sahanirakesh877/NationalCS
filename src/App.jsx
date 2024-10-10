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
import PageNotFound from "./Pages/PageNotFound";
import CaseStudy from "./Pages/CaseStudy";
import Colorectal from "./Dropdown/Colorectal";
import Hepato from "./Dropdown/Hepato";
import Onclologist from "./Dropdown/Onclologist";
import Pediatric from "./Dropdown/Pediatric";
import Gastro from "./Dropdown/Gastro";
import Gastrointerologist from "./Dropdown/Gastrointerologist";
import CaseDetails from "./Pages/CaseDetails";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

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
            <Route path="/disease" element={<Service />} />
            <Route path="/disease/:id" element={<ServiceDetail />} />
            <Route path="/Contact" element={<Contact />} />

            <Route path="/appointment" element={<Appointment />} />
            <Route path="/service" element={<Case />} />
            <Route path="/service/:id" element={<CaseDetails/>} />
            <Route path="/caseStudy" element={<CaseStudy />} />
            <Route path="/doctors/:id" element={<DoctorDetails />} />
            <Route path="*" element={<PageNotFound />} />

            {/* doctors */}
            <Route path="/doctor" element={<Doctor />} />
            <Route path="/colorectal" element={<Colorectal />} />
            <Route
              path="/gastrointerologist"
              element={<Gastrointerologist />}
            />
            <Route path="/gastro" element={<Gastro />} />
            <Route path="/pediatric" element={<Pediatric />} />
            <Route path="/oncologist" element={<Onclologist />} />
            <Route path="/hepatobiliary" element={<Hepato />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
