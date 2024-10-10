import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoImg from "/nccnepal.png";

const Header = () => {
  const navigate = useNavigate();
  const appointment = () => {
    navigate("/appointment");
  };

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  // Data for doctors and services
  const doctors = [
    { name: "Colorectal Surgeon", path: "/colorectal" },
    { name: "Gastrointerologist", path: "/gastrointerologist" },
    { name: "Gastro Surgeon", path: "/gastro" },
    { name: "Pediatric Surgeon", path: "/pediatric" },
    { name: "Oncologist", path: "/oncologist" },
    { name: "Hepatobiliary Surgeon", path: "/hepatobiliary" },
  ];

  // Filter logic based on the searchTerm
  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="">
        <nav className="navbar navbar-expand-lg  shadow">
          <div className="container-fluid ">
            <div className="d-flex items-center justify-content-center imglogo ">
              <a href="/">
                <img src={logoImg} alt="Logo" className=" " />
              </a>
              <div className="d-flex items-center justify-content-center flex-column imglogo  ">
                <a href="/">
                  <span className="logotext">National Colorectal Center</span>
                </a>
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

                <li className="nav-item dropdown">
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
                  <ul className="dropdown-menu border-0">
                    {filteredDoctors.length > 0 ? (
                      filteredDoctors.map((doctor, index) => (
                        <li key={index} onClick={closeNav}>
                          <Link
                            className="dropdown-item dropdowncolor"
                            to={doctor.path}
                          >
                            {doctor.name}
                          </Link>
                        </li>
                      ))
                    ) : (
                      <li className="dropdown-item">No doctors found</li>
                    )}
                  </ul>
                </li>

                <li className="nav-item" onClick={closeNav}>
                  <Link className="nav-link" to="/disease">
                    Colorectal Disease
                  </Link>
                </li>

                <li className="nav-item" onClick={closeNav}>
                  <Link className="nav-link" to="/service">
                    Services
                  </Link>
                </li>

                <li className="nav-item" onClick={closeNav}>
                  <Link className="nav-link" to="/caseStudy">
                    Case Study
                  </Link>
                </li>

                <li className="nav-item" onClick={closeNav}>
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="ms-md-4">
                <button
                  className="btn shadow rounded-pill"
                  onClick={appointment}
                >
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
