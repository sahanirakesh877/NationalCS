import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoImg from "/nccnepal.png";

const Header = () => {
  const navigate = useNavigate();
  const appointment = () => {
    navigate("/appointment");
  };

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
          <div className="container-fluid ">
            <div className="d-flex items-center justify-content-center imglogo ">
              <a href="/"><img src={logoImg} alt="Logo" className=" " /></a>
              <div className="d-flex items-center justify-content-center flex-column imglogo  ">
             
                <a href="/"><span className="  logotext">National Colorectal Center</span></a>
                <span className="logotext1 font-monospace ">NCRC</span>
              
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


              
                <li className="nav-item dropdown ">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Find Doctors
                  </Link>
                  <ul className="dropdown-menu   border-0 " aria-labelledby="navbarDropdown ">
                    <li onClick={closeNav}>
                      <Link className="dropdown-item dropdowncolor " to="/doctor">
                        Colorectal Surgeon
                      </Link>
                    </li>
                    <li onClick={closeNav}>
                      <Link className="dropdown-item dropdowncolor" to="/doctor">
                       Gastrointerologist
                      </Link>
                    </li>
                    <li onClick={closeNav}>
                      <Link className="dropdown-item dropdowncolor" to="/doctor">
                       Gastro Surgeon
                      </Link>
                    </li>
                    <li onClick={closeNav}>
                      <Link className="dropdown-item dropdowncolor" to="/doctor">
                     Pediatric Surgeon
                      </Link>
                    </li>
                    <li onClick={closeNav}>
                      <Link className="dropdown-item dropdowncolor" to="/doctor">
                        Onchologist
                      </Link>
                    </li>
                    <li onClick={closeNav}>
                      <Link className="dropdown-item dropdowncolor" to="/doctor">
                       Hepatobiliary Surgeon
                      </Link>
                    </li>
                    {/* Add more dropdown items as needed */}
                  </ul>
                </li>



                

                <li className="nav-item dropdown ">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Colorectal Disease
                  </Link>
                  <ul className="dropdown-menu   border-0 " aria-labelledby="navbarDropdown ">
                    <li onClick={closeNav}>
                      <Link className="dropdown-item dropdowncolor " to="/service">
                       Piles/Hemorrhoids
                      </Link>
                    </li>
                    <li onClick={closeNav}>
                      <Link className="dropdown-item dropdowncolor" to="/service">
                      Fissure-in-Ano
                      </Link>
                    </li>
                    <li onClick={closeNav}>
                      <Link className="dropdown-item dropdowncolor" to="/service">
                      Fistula in ANO
                      </Link>
                    </li>
                    <li onClick={closeNav}>
                      <Link className="dropdown-item dropdowncolor" to="/service">
                   Rectal Prolapse
                      </Link>
                    </li>
                    <li onClick={closeNav}>
                      <Link className="dropdown-item dropdowncolor" to="/service">
                       Pilonidal Sinus
                      </Link>
                    </li>
                    <li onClick={closeNav}>
                      <Link className="dropdown-item dropdowncolor" to="/service">
                      Constipation
                      </Link>
                    </li>
                     <li onClick={closeNav}>
                      <Link className="dropdown-item dropdowncolor" to="/service">
                     Colon Cancer
                      </Link>
                    </li>
                      <li onClick={closeNav}>
                      <Link className="dropdown-item dropdowncolor" to="/service">
                   Rectal Cancer
                      </Link>
                    </li>
                      <li onClick={closeNav}>
                      <Link className="dropdown-item dropdowncolor" to="/service">
                    IBD (UC & CD)
                      </Link>
                    </li>
                    {/* Add more dropdown items as needed */}
                  </ul>
                </li>

                <li className="nav-item " onClick={closeNav}>
                  <Link className="nav-link " to="/case">
                    Services
                  </Link>
                </li>

                <li className="nav-item " onClick={closeNav}>
                  <Link className="nav-link" to="/caseStudy">
                    Case Study
                  </Link>
                </li>

                <li className="nav-item " onClick={closeNav}>
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>

                
              </ul>
              <div className="ms-md-4  ">
                <button className="btn shadow  rounded-pill" onClick={appointment}>
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
