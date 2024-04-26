import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { FaEnvelope, FaLocationArrow, FaMap, FaPhone } from "react-icons/fa";

const Contact = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Helmet>
        <title>Contact | NationalColorectalCenter</title>
        <meta
          name="description"
          content=" Detail the various colorectal conditions your center specializes in diagnosing and treating, such as hemorrhoids, anal fissures, IBD, colon cancer, constipation, rectal cancer, fistulas, pilonidal sinus, rectal prolapse, and polyps"
        />
        <meta
          name="keywords"
          content="hemorrhoids,anal fissure,IBD,colon cancer,constipation,rectal cancer,fistula,pilonidal sinus,rectal prolapse,polyp,medical therapy,surgical procedures,laparoscopic surgery,anal fistula treatment,endoscopy,colorectal surgery,rectal prolapse"
        />
      </Helmet>
      <div className="container mx-auto py-5 ">
        <div className="row border">
          <div className="col-md-6 testimonialbg">
            <div className="contact-info text-center">
              <h4 className="text-white pb-4">Contact Information</h4>
              <ul className="list-unstyled text-white  ">
              <li className="py-2 d-flex justify-content-center  align-items-center flex-column   ">
              <div className="iconsbg   p-2">
                  <FaEnvelope className="icon fs-4 " />
                  </div>
                  <p className="fs-5 lead ps-3 pt-2">
                    Email: example@example.com
                  </p>
                </li>
                <li className="py-2 d-flex justify-content-center  align-items-center flex-column   ">
                <div className="iconsbg   p-2">
                <FaPhone className="icon fs-4   " />
               
                </div>
                <p className="fs-5 lead pt-2">
                    Phone: +977-9861555976 <br />
                    &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                    +977-9817073670
                  </p>
                
                </li>
                <li className="py-2 d-flex justify-content-center  align-items-center flex-column   ">
                <div className="iconsbg   p-2">
                  <FaLocationArrow className="icon fs-4 " />
                  </div>
                  <p className="fs-5 lead pt-2">
                    Location : Everest Hospital,<br />
                    &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  
                    New Baneshwor
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="text-center pb-2">Contact Us</h2>
            <p className="pb-2">
              Feel free to reach out to us with any questions or concerns!
            </p>
            <form className=" p-2">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone:
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Enter Your Phone"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn rounded-pill px-5 py-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
