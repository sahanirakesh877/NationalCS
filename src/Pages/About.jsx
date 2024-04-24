import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="container py-5 mx-auto px-4">
        <div className="row d-flex justify-content-between  align-items-center ">
          <h2 className="serviceHead"> About Us</h2>
          <p className="text-center pb-5">
            {" "}
            Our mission is to offer comprehensive and personalized solutions for
            all colorectal health concerns, prioritizing open communication and
            collaboration with our patients.
          </p>

          <div className="col-md-6">
            <h3></h3>
            <p className="aboutp">
              Welcome to{" "}
              <span className="text-danger fw-semibold   ">
                National Colorectal Center
              </span>
              , where compassionate care meets surgical excellence in the field
              of colorectal surgery. Driven by a commitment to our patients'
              well-being, we take pride in providing comprehensive and
              personalized solutions for all colorectal health concerns.
            </p>
            <p className="">We </p>
            <ul className="list-unstyled   ">
              <li>
                <FaCheckCircle className="me-2 text-success" />
                Colorectal Surgery
              </li>
              <li>
                <FaCheckCircle className="me-2 text-success" />
                Colonoscopy
              </li>
              <li>
                <FaCheckCircle className="me-2 text-success" />
                Anorectal Surgery
              </li>
              <li>
                <FaCheckCircle className="me-2 text-success" />
                Endoscopic Procedures
              </li>
              <li>
                <FaCheckCircle className="me-2 text-success" />
                Colorectal Cancer Screening
              </li>
              <li>
                <FaCheckCircle className="me-2 text-success" />
                Polypectomy
              </li>
              <li>
                <FaCheckCircle className="me-2 text-success" />
                Proctology Services
              </li>
              <li>
                {" "}
                <FaCheckCircle className="me-2 text-success" />
                Diagnostic Imaging
              </li>
              <li>
                <FaCheckCircle className="me-2 text-success" />
                Post-operative Care
              </li>
              <li>
                {" "}
                <FaCheckCircle className="me-2 text-success" />
                Colostomy/Ileostomy Care
              </li>
            </ul>
          </div>

          <div className="col-md-6">
            <img
              src="https://img.freepik.com/premium-photo/human-heart-diagram-3d-illustration_857340-1016.jpg?w=826"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
