import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import logoImg from "/nccnepal.png";

const Footer = () => {
  return (
    <>
      <footer className="footerfirst py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3  ">
              <div className="imglogofooter">
                <img src={logoImg} alt="Logo" className="img-fluid" />
                <br />
              </div>
              <p className="logotextF">
                National Colorectal <span className="logotextF1">Center</span>
              </p>
            </div>

            <div className="col-md-3">
              <h5 className="text-uppercase text-white pb-2">Quick Links</h5>
              <ul className="list-unstyled footerlist">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/service">Services</a>
                </li>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5 className="text-uppercase text-white pb-2">Services</h5>
              <ul className="list-unstyled footerlist">
                <li>
                  <a href="#">Piles / Hemorrhoids</a>
                </li>
                <li>
                  <a href="#">Colon / Rectal Cancer</a>
                </li>
                <li>
                  <a href="#">Fissure / Fistula</a>
                </li>
                <li>
                  <a href="#">Rectal Prolapse</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5 className="text-uppercase text-white pb-2">Contact Us</h5>
              <ul className="list-unstyled text-start ">
             
                <li className="lastfooter">
                <FaPhoneAlt /> 9817073670 / 9861555976
                </li>
                
             {/* <li className="lastfooter footer-email">
                <FaEnvelope />{" "}
                  <span className="email-address">nationalcolorectalcenter @gmail.com</span>
                </li>  */}
              </ul>
            </div>
          </div>
        </div>
      </footer>


      <footer className="bg-dark text-light py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-md-start text-center mb-md-0 mb-2">
              <p className="mb-0  fs-sm-3 copyright">© Copyright NationalColorectalSurgeon. All Rights Reserved</p>
            </div>
            <div className="col-md-6 text-md-end text-center">
              <a href="https://technavata.com/" className="mb-0 text-decoration-none text-white">Design By: NAVATA TECH</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
