import React, { useEffect } from "react";
import {
  FaInstagram,FaWhatsapp, FaFacebookF,FaTwitter} from "react-icons/fa6";
import { Doctordata } from "../Data/DoctorData";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const Doctor = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Helmet>
        <title>Doctor | NationalColorectalCenter</title>
        <meta
          name="description"
          content=" Detail the various colorectal conditions your center specializes in diagnosing and treating, such as hemorrhoids, anal fissures, IBD, colon cancer, constipation, rectal cancer, fistulas, pilonidal sinus, rectal prolapse, and polyps"
        />
        <meta
          name="keywords"
          content="hemorrhoids,anal fissure,IBD,colon cancer,constipation,rectal cancer,fistula,pilonidal sinus,rectal prolapse,polyp,medical therapy,surgical procedures,laparoscopic surgery,anal fistula treatment,endoscopy,colorectal surgery,rectal prolapse"
        />
      </Helmet>
      <div className="bg-body tertiary py-5">
        <div className="container mx-auto ">
          <h2 className="serviceHead "> Specialist Doctors </h2>
          <p></p>
          <div className="row d-flex justify-content-around  align-items-center  ">
            {Doctordata.map((card, id) => {
              return (
                <div className="col-md-4 p-4" key={id}>
                  <div class="book">
                    <div>
                      <h3 className="text-center">{card.name}</h3>
                      <p className="text-center">{card.role}</p>
                      <div className="text-center">
                        <Link to={`/doctors/${card.id}`}>
                          <button className="px-4 py-1 rounded-pill btn">
                            Doctor Details
                          </button>
                        </Link>
                      </div>
                    </div>

                    <div class="cover">
                      <img src={card.img} alt="" />
                    </div>
                    <div></div>
                  </div>

                  <div className="social-links text-center mt-3 ">
                    <h5 className="drname">{card.name}</h5>
                    <p className="">{card.role}</p>
                    <ul className="list-unstyled d-flex justify-content-center">
                      <li className="me-3">
                        <a href="#" target="_blank">
                          <div className=" fbicons">
                            <FaFacebookF />
                          </div>
                        </a>
                      </li>
                      <li className="me-3">
                        <a href="#" target="_blank">
                          <div className="fbicons">
                            <FaInstagram />
                          </div>
                        </a>
                      </li>
                      <li className="me-3">
                        <a href="#" target="_blank">
                          <div className="fbicons">
                            <FaWhatsapp />
                          </div>
                        </a>
                      </li>
                      <li className="me-3">
                        <a href="#" target="_blank">
                          <div className="fbicons">
                            <FaTwitter />
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}

            {/* <div className="col-md-4 p-4">
              <div class="book">
                <div>
                  <h3 className="text-center">Dr. Roshan Shah</h3>
                  <p className="text-center">Pediatric Surgeon</p>
                  <div className="text-center">
                    <button className="px-4 py-1 rounded-pill btn">
                      Doctor Details
                    </button>
                  </div>
                </div>

                <div class="cover">
                  <img src={drRoshan} alt="" />
                </div>
              </div>
              <div className="social-links text-center mt-3 ">
                <h5 className="drname"> Dr. Rakesh Shah</h5>
                <ul className="list-unstyled d-flex justify-content-center">
                  <li className="me-3">
                    <a href="#" target="_blank">
                      <div className=" fbicons">
                        <FaFacebookF />
                      </div>
                    </a>
                  </li>
                  <li className="me-3">
                    <a href="#" target="_blank">
                      <div className="fbicons">
                        <FaInstagram />
                      </div>
                    </a>
                  </li>
                  <li className="me-3">
                    <a href="#" target="_blank">
                      <div className="fbicons">
                        <FaWhatsapp />
                      </div>
                    </a>
                  </li>
                  <li className="me-3">
                    <a href="#" target="_blank">
                      <div className="fbicons">
                        <FaTwitter />
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 p-4">
              <div class="book">
                <div>
                  <h3 className="text-center">Dr.Binay Yadav</h3>
                  <p className="text-center">Colorectol Surgeon</p>
                  <div className="text-center">
                    <button className="px-4 py-1 rounded-pill btn">
                      Doctor Details
                    </button>
                  </div>
                </div>

                <div class="cover">
                  <img src={drBinayImg} alt="" />
                </div>
              </div>
              <div className="social-links text-center mt-3 ">
                <h5 className="drname"> Dr. Rakesh Shah</h5>
                <ul className="list-unstyled d-flex justify-content-center">
                  <li className="me-3">
                    <a href="#" target="_blank">
                      <div className=" fbicons">
                        <FaFacebookF />
                      </div>
                    </a>
                  </li>
                  <li className="me-3">
                    <a href="#" target="_blank">
                      <div className="fbicons">
                        <FaInstagram />
                      </div>
                    </a>
                  </li>
                  <li className="me-3">
                    <a href="#" target="_blank">
                      <div className="fbicons">
                        <FaWhatsapp />
                      </div>
                    </a>
                  </li>
                  <li className="me-3">
                    <a href="#" target="_blank">
                      <div className="fbicons">
                        <FaTwitter />
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctor;
