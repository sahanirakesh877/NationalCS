import React from "react";
import HomeCarousel from "../Components/HomeCarousel";
import About from "./About";
import Service from "./Service";
import Doctor from "./Doctor";
import Appointment from "./Appointment";
import Emergency from "../Components/Emergency";
import Testimonial from "../Components/Testimonial";

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <About />
      <Service />
      <Emergency />
      <Doctor />
      <Appointment />
      <Testimonial/>
    </>
  );
};

export default Home;
