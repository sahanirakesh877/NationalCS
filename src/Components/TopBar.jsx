import React from "react";
import {
  
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa6";

const TopBar = () => {
  return (
    <>
      <div className="bg-body-tertiary d-none d-md-block ">
        <div className="container ">
          <div className="d-flex justify-content-between align-items-center   py-2">
            <div className="contact-info d-flex gap-4 align-items-center ">
              <span>
                <FaEnvelope
                  className="me-1 "
                  style={{ color: "var(--secBrand)" }}
                />{" "}
                <span style={{ color: "var(--brandcolor)" }}>
                  example@example.com
                </span>
              </span>
              <span>
                <FaPhone
                  className="me-1"
                  style={{ color: "var(--secBrand)" }}
                />{" "}
                <span style={{ color: "var(--brandcolor)" }}>98458736423</span>
              </span>
            </div>

            <div className="social-icons  d-flex gap-2 align-items-center  justify-content-center ">
              <div className="icons">
                {" "}
                <FaFacebookF />
              </div>

              <div className="icons">
                <FaWhatsapp />
              </div>
              <div className="icons">
                <FaInstagram />
              </div>
              <div className="icons">
                <FaTwitter/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
