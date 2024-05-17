import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import { FaCheckCircle } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const About = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Helmet>
        <title>About |NationalColorectalCenter</title>
        <meta
          name="description"
          content=" Detail the various colorectal conditions your center specializes in diagnosing and treating, such as hemorrhoids, anal fissures, IBD, colon cancer, constipation, rectal cancer, fistulas, pilonidal sinus, rectal prolapse, and polyps"
        />
        <meta
          name="keywords"
          content="hemorrhoids,anal fissure,IBD,colon cancer,constipation,rectal cancer,fistula,pilonidal sinus,rectal prolapse,polyp,medical therapy,surgical procedures,laparoscopic surgery,anal fistula treatment,endoscopy,colorectal surgery,rectal prolapse"
        />
      </Helmet>
      <div className="container py-5 mx-auto px-4">
        <div className="row d-flex justify-content-between  align-items-center ">
          <h2 className="serviceHead"> About Us</h2>
          <div className="col-md-6">
            <h3></h3>
            <p className="aboutp">
              <span className="text-danger text-bold fw-bold ">NCRC</span> is
              the first dedicated center to providing state-of-the-art focused
              Colorectal care to patients across Nepal, combining advanced
              medical and surgical expertise with a commitment to compassion and
              patient’s satisfaction which is Led by a team of highly skilled
              Colorectal Surgeons and other associated specialists. We offer a
              comprehensive range of services including screenings, diagnostics,
              surgical interventions, and latest ongoing management of
              colorectal diseases. With a focus on promoting awareness,
              prevention, and early detection, we strive to empower our patients
              with the knowledge and support they need to achieve optimal
              colorectal health care.
            </p>
            <br />
            <strong className="quotes">
              "A good set of bowels is worth more to a man than any quality of
              brains" ~ <span className="text-danger quotes">Josh Billings</span>
            </strong>
          </div>

          <div className="col-md-6 ">
            {/* <img
              src="https://img.freepik.com/premium-photo/human-heart-diagram-3d-illustration_857340-1016.jpg?w=826"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            /> */}
            <img
              src="/intestine.jpg"
              class="w-100 shadow-1-strong rounded mb-4 "
              alt="Boat on Calm Water"
            />
             <strong className="quotes aboutimgdown">
              "A good set of bowels is worth more to a man than any quality of
              brains" ~ <span className="text-danger quotes">Josh Billings</span>
            </strong>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
