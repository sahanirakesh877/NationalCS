// Doctor.js
import { useLocation } from "react-router-dom";
import DoctorCard from "../Components/DoctorCard";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Doctordata } from "../Data/DoctorData";

const Hepato = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Helmet>
        <title>Doctor | NationalColorectalCenter</title>
        {/* SEO metadata */}
      </Helmet>
      <div className="bg-body tertiary py-5">
        <div className="container mx-auto">
          <h2 className="serviceHead">Specialist Doctors</h2>
          <div className="row d-flex justify-content-start align-items-center">
            {Doctordata.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hepato;
