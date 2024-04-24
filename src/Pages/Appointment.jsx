import React, { useState } from "react";

const Appointment = () => {
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialFormData);
  };

  return (
    <>
      <div className="appointment py-5">
        <div className="container">
          <h3 className="text-center mb-2">MAKE AN APPOINTMENT</h3>
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
                      Colorectal Surgeon
                    </option>
                    <option value="Pediatric Surgeon">Pediatric Surgeon</option>
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
        </div>
      </div>
    </>
  );
};

export default Appointment;
