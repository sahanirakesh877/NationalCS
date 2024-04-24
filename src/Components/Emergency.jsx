import React from "react";
import { useNavigate } from "react-router-dom";

const Emergency = () => {
  const navigate=useNavigate()
  const makeAppointment=() => {
    navigate('/appointment')
  }
 
  return (
    <>
      <div className="appointment py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="text-center pt-4 pb-3 text-white    ">
                In an emergency? Need help now?
              </h3>
              <p className="text-center  lead">
                "We're here to help in emergencies. Don't hesitate to contact us
                for immediate medical attention. Our dedicated team is ready to
                provide swift care and support."
              </p>

              <div className="text-center py-5">
                <button className="px-5 py-2 btn rounded-pill" onClick={makeAppointment}>
                  Make an Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Emergency;
