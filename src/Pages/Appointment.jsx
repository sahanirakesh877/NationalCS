import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const Appointment = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    message: "",
    selectedDoctor: "",
    selectedSpecialist: "",
    selectedDate: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await axios.post(
        `${import.meta.env.VITE_SERVERAPI}/api/v1/booking`,
        formData
      ); // Adjust the API URL based on your backend
      console.log(response);
      if (response.status === 200) {
        setFormStatus("Success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
          selectedDoctor: "",
          selectedSpecialist: "",
          selectedDate: "",
        });
      }
    } catch (error) {
      setFormStatus("Error");
      console.error("There was an error submitting the form:", error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Appointment | NationalColorectalCenter</title>
        <meta
          name="description"
          content=" Detail the various colorectal conditions your center specializes in diagnosing and treating, such as hemorrhoids, anal fissures, IBD, colon cancer, constipation, rectal cancer, fistulas, pilonidal sinus, rectal prolapse, and polyps"
        />
        <meta
          name="keywords"
          content="hemorrhoids,anal fissure,IBD,colon cancer,constipation,rectal cancer,fistula,pilonidal sinus,rectal prolapse,polyp,medical therapy,surgical procedures,laparoscopic surgery,anal fistula treatment,endoscopy,colorectal surgery,rectal prolapse"
        />
      </Helmet>
      <div className="appointment py-5">
        <div className="container">
          <h3 className="text-center mb-2 text-white font-semibold">
            MAKE AN APPOINTMENT
          </h3>
          <p className="text-center">
            Book your appointment now to consult with our experienced doctors
            and receive personalized care tailored to your needs. Whether you're
            seeking routine check-ups, specialized treatments, or medical
            advice, our team is here to provide you with the highest quality
            healthcare services.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="row d-flex  justify-content-between py-4  align-items-center flex-row ">
              <div className="col-md-4 pb-4">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control rounded-0  "
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4 pb-4">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control rounded-0"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4 pb-4">
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control rounded-0"
                    placeholder="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="col-md-4 pb-4">
                <div className="form-group">
                  <select
                    className="form-control rounded-0 form-select"
                    name="selectedDoctor"
                    value={formData.selectedDoctor}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Doctor</option>
                    <option value="Dr.Rakesh Shah">Dr.Rakesh Shah</option>
                    <option value="Dr.Roshan Shah">Dr.Roshan Shah</option>
                    <option value="Dr.Binay Yadav">Dr.Binay Yadav</option>
                    <option value="Dr.Dinesh Prasad Koirala">
                      Dr.Dinesh Prasad Koirala
                    </option>
                    <option value="Dr.Rameshor Bhandari">
                      Dr.Rameshor Bhandari
                    </option>
                    {/* Add more options as needed */}
                  </select>
                </div>
              </div>
              <div className="col-md-4 pb-4">
                <div className="form-group">
                  <select
                    className="form-control rounded-0 form-select"
                    name="selectedSpecialist"
                    value={formData.selectedSpecialist}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Specialist</option>

                    <option value="Colorectal Surgeon">
                      Colorectal Surgeon
                    </option>
                    <option value="Colorectal Surgeon">
                      Gastrointerologies
                    </option>
                    <option value="Colorectal Surgeon">Gastro Surgeon</option>
                    <option value="Colorectal Surgeon">
                      Pediatric Surgeon
                    </option>
                    <option value="Colorectal Surgeon">Oncologiest</option>
                    <option value="Pediatric Surgeon">
                      {" "}
                      Hepatobiliary Surgeon
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-md-4 pb-4">
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control rounded-0"
                    name="selectedDate"
                    value={formData.selectedDate}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-12 pb-4">
                <div className="form-group">
                  <textarea
                    className="form-control rounded-0"
                    placeholder="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group text-center">
                  <button
                    type="submit"
                    className="btn rounded-0  btn-primary btn-block"
                  >
                    Submit Appointment
                  </button>
                </div>
              </div>
            </div>
          </form>
          {formStatus && (
              <p
                className={`text-center mt-3 ${
                  formStatus === "Success" ? "text-success" : "text-danger"
                }`}
              >
                {formStatus === "Success"
                  ? "Thank you! Your message has been sent."
                  : "Sorry, there was an error. Please try again."}
              </p>
            )}
        </div>
      </div>
    </>
  );
};

export default Appointment;
