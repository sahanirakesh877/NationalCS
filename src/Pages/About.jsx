import React from "react";

const About = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row d-flex justify-content-between  align-items-center ">

          <div className="col-md-6">
            <h5 className="text-primary mb-4 "> About Us</h5>
            <h4 className="abouthead mb-4">Make our patients happy by giving services.</h4>
            <p className="aboutp">
              Welcome to <span className="text-danger fw-semibold   " >National Colorectal Center</span>, where compassionate care meets
              surgical excellence in the field of colorectal surgery. Driven by
              a commitment to our patients' well-being, we take pride in
              providing comprehensive and personalized solutions for all
              colorectal health concerns. National Colorectal Center is committed
              to a patient-centric approach, where open communication and
              collaboration between our team and patients are prioritized. We
              believe in empowering our patients with knowledge, involving them
              in the decision-making process, and providing comprehensive
              support throughout their healthcare journey.
            </p> 
            <button className="btn  rounded-0  ">Explore More Case</button>
          </div>

          <div className="col-md-6">
            <div class="row">
              <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                <img
                  src='/constipation.png'
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />

                <img
                  src="/fissure.png"
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Wintry Mountain Landscape"
                />
              </div>

              <div class="col-lg-4 mb-4 mb-lg-0">
                <img
                  src="/piles.png"
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Mountains in the Clouds"
                />

                <img
                  src="/fistula.png"
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
              </div>

              <div class="col-lg-4 mb-4 mb-lg-0">
                <img
                  src="/polyp.png"
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Waves at Sea"
                />

                <img
                  src="/colCan.png"
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Yosemite National Park"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
