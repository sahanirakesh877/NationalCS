import React, { useEffect } from "react";
import HomeCarousel from "../Components/HomeCarousel";
import About from "./About";
import Service from "./Service";
import Doctor from "./Doctor";
import Appointment from "./Appointment";
import Emergency from "../Components/Emergency";
import Testimonial from "../Components/Testimonial";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Helmet titleTemplate="NationalColorectalCenter" />
      <HomeCarousel />
      <About />
      <Service />
      <Emergency />
      <Doctor />
      <Appointment />
      <Testimonial />
    </>
  );
};

export default Home;
