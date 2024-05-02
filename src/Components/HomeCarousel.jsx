import React from "react";

const HomeCarousel = () => {
  return (
    <>
      <div id="carouselExample" className="carousel slide position-relative"  data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://img.freepik.com/premium-photo/medical-team-performing-surgical-operation-modern-operating-room-neural-network-ai-generated_76080-61033.jpg?w=826"
              className="d-block w-100 img-fluid"
              alt="..."
            />
             <div className="carousel-caption position-absolute  d-flex justify-content-center align-items-center text-center">
            <div>
            <h1 className="display-4 fw-bold">Leading the Way in Colorectal Care</h1>
              <p className="lead">Providing Exceptional Medical & Colorectal Surgical Care</p>
            </div>
          </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/premium-photo/surgeon-performs-surgery-remotely-using-modern-hologram-virtual-reality-technology_747026-1696.jpg?w=826"
              className="d-block w-100 img-fluid"
              alt="..."
            />
            <div className="carousel-caption position-absolute  d-flex justify-content-center align-items-center text-center">
            <div>
            <h1 className="display-4 fw-bold">Expert Care for Colorectal Diseases</h1>
            <p className="lead">Your Journey to Wellness Starts From Here</p>
            </div>
          </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/premium-photo/generative-ai-futuristic-equipment-medical-devices-hybrid-operating-room_108985-1283.jpg?w=826"
              className="d-block w-100 img-fluid"
              alt="..."
            />
            <div className="carousel-caption position-absolute  d-flex justify-content-center align-items-center text-center">
            <div>
            <h1 className="display-4 fw-bold">Dedicated Care With, Exceptional Results</h1>
            <p className="lead">Where Your Health and Comfort Comes First</p>
            </div>
          </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default HomeCarousel;
