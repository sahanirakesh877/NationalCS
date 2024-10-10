import React from "react";
import { useParams } from "react-router-dom";
import Casedata from "../Data/CaseData";
import { Helmet } from "react-helmet";

const CaseDetails = () => {
  const { id } = useParams();
  const serviceDetails = Casedata.find((a) => a.id === parseInt(id));

  // Handle case not found scenario
  if (!serviceDetails) {
    return (
      <div className="container py-5 text-center">
        <h2 className="custom-heading">Case Not Found</h2>
        <p className="custom-message">
          Sorry, we couldn't find the case you're looking for.
        </p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{serviceDetails.title} | NationalColorectalCenter</title>
        <meta name="description" content={serviceDetails.description} />
      </Helmet>

      <div className="container py-5">
        <div className="custom-card card shadow-lg p-5">
          <div className="text-center mb-4">
            <img
              src={serviceDetails.icon}
              className="custom-icon img-fluid mb-1"
              alt={serviceDetails.title}
            />
            <h2 className="custom-title">{serviceDetails.title}</h2>
          </div>
          <div className="custom-description mb-4">
            <p>{serviceDetails.description}</p>
          </div>

          <div className="custom-section">
            <h3 className="custom-subtitle">Symptoms</h3>
            <ul className="custom-list">
              {serviceDetails.symptoms.map((symptom, index) => (
                <li key={index}>{symptom}</li>
              ))}
            </ul>
          </div>

          <div className="custom-section">
            <h3 className="custom-subtitle">Procedures</h3>
            <ul className="custom-list">
              {serviceDetails.procedures.map((procedure, index) => (
                <li key={index}>{procedure}</li>
              ))}
            </ul>
          </div>

          <div className="custom-section">
            <h3 className="custom-subtitle">Risks</h3>
            <ul className="custom-list">
              {serviceDetails.risks.map((risk, index) => (
                <li key={index}>{risk}</li>
              ))}
            </ul>
          </div>

          <div className="custom-section">
            <h3 className="custom-subtitle">Recovery Time</h3>
            <p>{serviceDetails.recoveryTime}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseDetails;
