import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Casedata from "../Data/CaseData";
import { Link, useLocation } from "react-router-dom";

const Case = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Helmet>
        <title>Case Study | NationalColorectalCenter</title>
        <meta
          name="description"
          content=" Detail the various colorectal conditions your center specializes in diagnosing and treating, such as hemorrhoids, anal fissures, IBD, colon cancer, constipation, rectal cancer, fistulas, pilonidal sinus, rectal prolapse, and polyps"
        />
        <meta
          name="keywords"
          content="hemorrhoids,anal fissure,IBD,colon cancer,constipation,rectal cancer,fistula,pilonidal sinus,rectal prolapse,polyp,medical therapy,surgical procedures,laparoscopic surgery,anal fistula treatment,endoscopy,colorectal surgery,rectal prolapse"
        />
      </Helmet>

      <div className="bg-body-tertiary py-5">
        <div className="container mx-auto  ">
          <h2 className="serviceHead">Our Services </h2>
          <div className="row d-flex justify-content-between  align-items-center     ">
            {Casedata.map((card, id) => (
              <div className="col-md-6 p-3" key={id}>
                <div className="card  shadow  border-danger ">
                  <div className="row p-2 ">
                    <div className="col-md-4 caseicon">
                      <div className="iconimg">
                        <img
                          src={card.icon}
                          className="img-fluid  "
                          alt={card.title}
                        />
                      </div>
                    </div>
                    <div className="col-md-8 py-2">
                      <Link to={`/service/${card.id}`}>
                        <div className="card-body">
                          <div className="">
                            <h6 className=" fw-bold text-start casetitle ">
                              {card.title}
                            </h6>
                            <p className="text-justify">{card.description.slice(0,100)}. . . </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Case;
