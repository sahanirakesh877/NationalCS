import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Doctordata } from "../Data/DoctorData";
import { Helmet } from "react-helmet";

const DoctorDetails = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  console.log(id);
  const doctor = Doctordata.find((a) => a.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Helmet>
        <title>DoctorDetails | NationalColorectalCenter</title>
        <meta
          name="description"
          content=" Detail the various colorectal conditions your center specializes in diagnosing and treating, such as hemorrhoids, anal fissures, IBD, colon cancer, constipation, rectal cancer, fistulas, pilonidal sinus, rectal prolapse, and polyps"
        />
        <meta
          name="keywords"
          content="hemorrhoids,anal fissure,IBD,colon cancer,constipation,rectal cancer,fistula,pilonidal sinus,rectal prolapse,polyp,medical therapy,surgical procedures,laparoscopic surgery,anal fistula treatment,endoscopy,colorectal surgery,rectal prolapse"
        />
      </Helmet>

      <div className="container mt-5">
        <p className="text-center fs-4 pb-3 fw-semibold font-monospace  DoctorProfile">
          Doctors Profile
        </p>

        <div className="row  border-bottom  shadow  p-4  ">
          <div className="col-md-6  pb-4 leftimg  d-flex justify-content-center  align-items-center  ">
            <div className=" doctorimg  ">
              <img
                src={doctor.img}
                alt={doctor.name}
                className="img-fluid  docimg  p-5"
              />
            </div>
          </div>
          <div className="col-md-6 px-1 ">
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
              <strong>Experience:</strong> {doctor.experience}
            </p>
            <p>
              <strong>Designation:</strong> {doctor.designation}
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

        <div className="row mt-5 px-5 ">
          <div className="col-md-6">
            <h3 className="text-uppercase  service-title">Journals:</h3>
            <hr className="w-50 text-primary" />
            <ul>
              {doctor.Journals.map((journal, index) => (
                <li key={index} className="py-1">
                  <p>
                    <strong>Title:</strong> {journal.title}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-6">
            <h3 className="text-uppercase service-title">Awards:</h3>
            <hr className="w-50 text-danger " />
            <ul>
              {doctor.Awards.map((award, index) => (
                <li key={index} className="py-1">
                  <p>
                    <strong>Title:</strong> {award.title}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDetails;
