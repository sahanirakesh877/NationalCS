import React from "react";
import { useParams } from "react-router-dom";
import { Doctordata } from "../Data/DoctorData";

const DoctorDetails = () => {
  const { id } = useParams();
  console.log(id);
  const doctor = Doctordata.find((a) => a.id === parseInt(id));
  console.log("doctor detasisls", doctor);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
        <div className="border doctorimg">

       
          <img
            src={doctor.img}
            alt={doctor.name}
            className="img-fluid rounded-circle"
          />
           </div>
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold text-success">{doctor.name}</h2>
          <p>
            <strong>Specialist:</strong> {doctor.role}
          </p>
          <p>
            <strong>Phone:</strong> {doctor.phoneNo}
          </p>
          <p>
            <strong>Email:</strong> {doctor.email}
          </p>
          <p>
            <strong>Experience:</strong> {doctor.experience} years
          </p>
          <p>
            <strong>Designation:</strong> {doctor.Designation}
          </p>
          <p>
            <strong>Degree:</strong>
          </p>
          <ul className="ps-5">
            {doctor.Degree.map((degree, index) => (
              <li key={index}>{degree}</li>
            ))}
          </ul>
         
          <p>
            <strong>Working Hospitals:</strong>
          </p>
          <ul className="ps-5">
            {doctor.WorkingHospitals.map((hospital, index) => (
              <li key={index}>{hospital}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <h3 className="text-uppercase  text-primary" >Journals:</h3>
          <hr  className="w-50 text-primary"/>
          <ul>
            {doctor.Journals.map((journal, index) => (
              <li key={index} className="py-2">
                <p>
                  <strong>Title:</strong> {journal.title}
                </p>
                <p>
                  <strong>Publication:</strong> {journal.publication}
                </p>
                <p>
                  <strong>Year:</strong> {journal.year}
                </p>
                <p>
                  <strong>Volume:</strong> {journal.volume}
                </p>
                <p>
                  <strong>Issue:</strong> {journal.issue}
                </p>
                <p>
                  <strong>Pages:</strong> {journal.pages}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-6">
          <h3 className="text-uppercase text-primary">Awards:</h3>
          <hr  className="w-50 text-danger "/>
          <ul >
            {doctor.Awards.map((award, index) => (
              <li key={index} className="py-2">
                <p>
                  <strong>Title:</strong> {award.title}
                </p>
                <p>
                  <strong>Year:</strong> {award.year}
                </p>
                <p>
                  <strong>Organization:</strong> {award.organization}
                </p>
              </li>
            ))}
          </ul>
      
      </div>
      </div>
   
      
    </div>
  );
};

export default DoctorDetails;
