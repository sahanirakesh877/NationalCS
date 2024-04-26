import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoImg from "/nccnepal.png";

const Header = () => {
  const navigate=useNavigate()
  const appointment=()=>{
    navigate('/appointment')

  }

  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };
  return (
    <>
      <div className="">
        <nav className="navbar navbar-expand-lg  shadow">
          <div className="container ">
            <div className="d-flex items-center justify-content-center imglogo ">
              <img src={logoImg} alt="Logo" className=" " />
              <div className="d-flex items-center justify-content-center flex-column imglogo  ">
                <span className="  logotext">National Colorectal</span>
                <span className="logotext1">Center</span>
              </div>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              onClick={handleNavToggle}
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
             className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0  navlink">
                <li className="nav-item" onClick={closeNav}>
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item" onClick={closeNav}>
                  <Link className="nav-link" to="/service">
                    Service
                  </Link>
                </li>
                <li className="nav-item" onClick={closeNav}>
                  <Link className="nav-link" to="/doctor">
                   Doctor
                  </Link>
                </li>
                <li className="nav-item" onClick={closeNav}>
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item" onClick={closeNav}>
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
               
              </ul>
              <div className="ms-md-4">
              
                <button className="btn  rounded-pill" onClick={appointment}>
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
