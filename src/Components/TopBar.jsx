import React from "react";
import { FaTiktok, FaYoutube } from "react-icons/fa";
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
                 nationalcolorectalcenter@gmail.com
                </span>
              </span>
              <span>
                <FaPhone
                  className="me-1"
                  style={{ color: "var(--secBrand)" }}
                />{" "}
                <span style={{ color: "var(--brandcolor)" }}>9817073670 / 9861555976</span>
              </span>
            </div>

            <div className="social-icons  d-flex gap-2 align-items-center  justify-content-center ">
              <div className="icons">
                {" "}
                <a href="https://www.facebook.com/ncrcnep"><FaFacebookF /></a>
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
              <div className="icons">
                <FaYoutube/>
              </div>
              <div className="icons">
                <FaTiktok/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
