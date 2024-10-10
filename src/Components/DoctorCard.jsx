// DoctorCard.js
import React from "react";
import { Link } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  return (
    <>
      <div className="col-md-4 p-4">
        <div className="book">
          <div>
            <h3 className="text-center">{doctor.name}</h3>
            <p className="text-center">{doctor.role}</p>
            <div className="text-center">
              <Link to={`/doctors/${doctor.id}`}>
                <button className="px-4 py-1 rounded-pill btn">
                  Doctor Details
                </button>
              </Link>
            </div>
          </div>

          <div className="cover">
            <img src={doctor.img} alt={doctor.name} className="img-fluid" />
          </div>
        </div>

        <div className="social-links text-center mt-3">
          <h5 className="drname">{doctor.name}</h5>
          <p className="">{doctor.role}</p>
          <p className="text-center p-2 special icon fw-semibold">
            {doctor.special}
          </p>
          <ul className="list-unstyled d-flex justify-content-center p-2">
            {doctor.socialLinks?.map((link, index) => (
              <li className="me-3" key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <div className="fbicons">{link.icon}</div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DoctorCard;
