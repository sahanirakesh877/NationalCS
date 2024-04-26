import React, { useEffect, useState } from "react";
import cards from "../Data/cardData";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const Service = () => {
  const { pathname } = useLocation();
  const [showAll, setShowAll] = useState(false);
  const visibleCards = showAll ? cards : cards.slice(0, 9);
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Helmet>
        <title>Service | NationalColorectalCenter</title>
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
          <h2 className="serviceHead"> Explore Cases </h2>
          <div className="row d-flex justify-content-between    ">
            {visibleCards.map((card, id) => (
              <div className="col-md-4  p-4   " key={id}>
                <div className="card  shadow ">
                  <img
                    src={card.image}
                    className=""
                    style={{ width: "100%", height: "150px" }}
                    alt={card.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center pt-2">
                      {card.title}
                    </h5>
                    <div className="cardbox">
                      <p className="text-justify">{card.description}. . .</p>
                    </div>
                    <div className="pt-3 text-center  ">
                      <Link to={`/service/${id + 1}`}>
                        <button className="btn  rounded-0 rounded-pill ">
                          Read Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center pt-3">
            <button className="btn rounded-0" onClick={toggleShowAll}>
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
