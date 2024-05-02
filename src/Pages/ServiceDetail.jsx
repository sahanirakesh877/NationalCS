import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import cards from "../Data/cardData";
import { Helmet } from "react-helmet";
import { FaCheckCircle } from "react-icons/fa";

const ServiceDetail = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const service = cards.find((a) => a.id === parseInt(id));
  if (!service) {
    return <div>Service not found</div>;
  }
  const { title, description, image, content } = service;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Helmet>
        <title>ServiceDetails | NationalColorectalCenter</title>
        <meta
          name="description"
          content=" Detail the various colorectal conditions your center specializes in diagnosing and treating, such as hemorrhoids, anal fissures, IBD, colon cancer, constipation, rectal cancer, fistulas, pilonidal sinus, rectal prolapse, and polyps"
        />
        <meta
          name="keywords"
          content="hemorrhoids,anal fissure,IBD,colon cancer,constipation,rectal cancer,fistula,pilonidal sinus,rectal prolapse,polyp,medical therapy,surgical procedures,laparoscopic surgery,anal fistula treatment,endoscopy,colorectal surgery,rectal prolapse"
        />
      </Helmet>

      <section className="bg-gray-500">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6">
              <h1 className="fs-1 service-title fw-semibold  ">{title}</h1>
              <div>
                <img
                  alt="ecommerce"
                  src={image}
                  className="img-fluid rounded"
                  style={{ width: "100%", height: "auto" }}
                />
                <p className="mt-3">{description}</p>
              </div>
            </div>
            <div className="col-md-6">
              <article className="p-0"> 
                {content.map((item, idx) => (
                  <div key={idx} className="m-0">
                    <h5 className="font-semibold servicetitle">{item.title}:</h5>
                    <div>
                      {item.items.map((point, idx) => (
                        <div key={idx}>
                          {typeof point === "object" ? (
                            <div className="">
                              <p className="">{point.sub_title}</p>
                              <div>
                                {point.sub_items.map((sub_point, idx) => (
                                  <ul key={idx} className="list-unstyled m-0 p-0">
                                    <li><FaCheckCircle className="me-2 text-success" />{sub_point}</li>
                                  </ul>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <ul key={idx} className="list-unstyled m-0 p-0">
                              <li> <FaCheckCircle className="me-2 text-success" />{point}</li>
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
