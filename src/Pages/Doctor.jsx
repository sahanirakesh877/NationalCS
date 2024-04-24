import React from "react";
import drRakeshImg from "/drRakesh.png";
import drRoshan from "/drRoshan.png";
import drBinayImg from "/drBinay.png";


// import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa6";

const Doctor = () => {
  return (
    <>
      <div className="bg-body tertiary py-5">
        <div className="container mx-auto ">
          <h2 className="serviceHead py-4"> Specialist Doctors </h2>
          <p></p>
          <div className="row d-flex justify-content-around  align-items-center  ">
            <div className="col-md-4 p-4">
              <div class="book">
                <div>
                  <h3 className="text-center">Dr. Rakesh Shah</h3>
                  <p className="text-center">Colorectol Surgeon</p>
                  <div className="text-center">
                    <button className="px-4 py-1 rounded-pill btn">
                      Doctor Details
                    </button>
                  </div>
                </div>

                <div class="cover">
                  <img src={drRakeshImg} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-4 p-4">
              <div class="book">
                <div>
                  <h3 className="text-center">Dr. Roshan Shah</h3>
                  <p className="text-center">Pediatric Surgeon</p>
                  <div className="text-center">
                    <button className="px-4 py-1 rounded-pill btn">
                      Doctor Details
                    </button>
                  </div>
                </div>

                <div class="cover">
                  <img src={drRoshan} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-4 p-4">
              <div class="book">
                <div>
                  <h3 className="text-center">Dr.Binay Yadav</h3>
                  <p className="text-center">Colorectol Surgeon</p>
                  <div className="text-center">
                    <button className="px-4 py-1 rounded-pill btn">
                      Doctor Details
                    </button>
                  </div>
                </div>

                <div class="cover">
                  <img src={drBinayImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctor;
