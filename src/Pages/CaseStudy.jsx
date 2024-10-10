import React from "react";
import { FaTools } from "react-icons/fa";

const CaseStudy = () => {
  return (
    <div
      className="container text-center d-flex justify-content-center align-items-center"
      style={{ height: "80vh" }}
    >
      <div>
        <FaTools size={80} className="mb-4 text-danger" />
        <h1 className="display-5">Case Study</h1>
        <p className="lead">This page is currently under construction.</p>
        <p>We're working hard to bring you exciting content. Stay tuned!</p>
        <div
          className="progress"
          style={{ height: "40px", width: "300px", margin: "0 auto" }}
        >
          <div
            className="progress-bar progress-bar-striped bg-danger"
            role="progressbar"
            style={{ width: "40%" }}
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            30% Complete
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
