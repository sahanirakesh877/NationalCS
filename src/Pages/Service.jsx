import React, { useEffect, useState } from "react";
import cards from "../Data/cardData";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const Service = () => {
  const { pathname } = useLocation();
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCards =
    selectedCategory === "all"
      ? cards
      : cards.filter((card) => card.category === selectedCategory);

  const visibleCards = showAll ? filteredCards : filteredCards.slice(0, 9);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setShowAll(false); // reset showAll when category changes
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
          content="Detail the various colorectal conditions your center specializes in diagnosing and treating, such as hemorrhoids, anal fissures, IBD, colon cancer, constipation, rectal cancer, fistulas, pilonidal sinus, rectal prolapse, and polyps"
        />
        <meta
          name="keywords"
          content="hemorrhoids,anal fissure,IBD,colon cancer,constipation,rectal cancer,fistula,pilonidal sinus,rectal prolapse,polyp,medical therapy,surgical procedures,laparoscopic surgery,anal fistula treatment,endoscopy,colorectal surgery,rectal prolapse"
        />
      </Helmet>

      <div className="bg-body-tertiary py-5">
        <div className="container mx-auto">
          <h2 className="serviceHead"> Explore Colorectal Disease </h2>

          <div className="text-center mb-4">
            {/* Filter Buttons */}
            <div className="filter-buttons d-flex flex-wrap justify-content-center gap-2">
              <button
                className={`btn filter-btn ${
                  selectedCategory === "all"
                    ? "btn-primary-active"
                    : "btn-primary"
                }`}
                onClick={() => handleCategoryChange("all")}
              >
                 All
              </button>

              <button
                className={`btn filter-btn ${
                  selectedCategory === "piles"
                    ? "btn-primary-active"
                    : "btn-primary"
                }`}
                onClick={() => handleCategoryChange("piles")}
              >
                Piles/Hemorrhoids
              </button>

              <button
                className={`btn filter-btn ${
                  selectedCategory === "fissure"
                    ? "btn-primary-active"
                    : "btn-primary"
                }`}
                onClick={() => handleCategoryChange("fissure")}
              >
                Fissure-in-Ano
              </button>

              <button
                className={`btn filter-btn ${
                  selectedCategory === "fistula"
                    ? "btn-primary-active"
                    : "btn-primary"
                }`}
                onClick={() => handleCategoryChange("fistula")}
              >
                <i className="fas fa-link me-2"></i> Fistula
              </button>

              <button
                className={`btn filter-btn ${
                  selectedCategory === "prolapse"
                    ? "btn-primary-active"
                    : "btn-primary"
                }`}
                onClick={() => handleCategoryChange("prolapse")}
              >
               Rectal Prolapse
              </button>

              <button
                className={`btn filter-btn ${
                  selectedCategory === "pilonidal"
                    ? "btn-primary-active"
                    : "btn-primary"
                }`}
                onClick={() => handleCategoryChange("pilonidal")}
              >
              Pilonidal Sinus
              </button>

              <button
                className={`btn filter-btn ${
                  selectedCategory === "constipation"
                    ? "btn-primary-active"
                    : "btn-primary"
                }`}
                onClick={() => handleCategoryChange("constipation")}
              >
                 Constipation
              </button>

              <button
                className={`btn filter-btn ${
                  selectedCategory === "colon"
                    ? "btn-primary-active"
                    : "btn-primary"
                }`}
                onClick={() => handleCategoryChange("colon")}
              >
                Colon Cancer
              </button>

              <button
                className={`btn filter-btn ${
                  selectedCategory === "rectal"
                    ? "btn-primary-active"
                    : "btn-primary"
                }`}
                onClick={() => handleCategoryChange("rectal")}
              >
               Rectal Cancer
              </button>

              <button
                className={`btn filter-btn ${
                  selectedCategory === "ibd"
                    ? "btn-primary-active"
                    : "btn-primary"
                }`}
                onClick={() => handleCategoryChange("ibd")}
              >
                 IBD
              </button>

              <button
                className={`btn filter-btn ${
                  selectedCategory === "polyp"
                    ? "btn-primary-active"
                    : "btn-primary"
                }`}
                onClick={() => handleCategoryChange("polyp")}
              >
                Polyp
              </button>
            </div>
          </div>

          <div className="row d-flex justify-content-between">
            {visibleCards.map((card, id) => (
              <div className="col-md-4 p-4" key={id}>
                <div className="card shadow">
                  <img
                    src={card.image}
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
                    <div className="pt-3 text-center">
                      <Link to={`/disease/${id + 1}`}>
                        <button className="btn rounded-0 rounded-pill">
                          Read Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show More / Show Less Button */}
          <div className="text-center pt-3">
            {filteredCards.length > 9 && (
              <button className="btn rounded-0" onClick={toggleShowAll}>
                {showAll ? "Show Less" : "Show More"}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
