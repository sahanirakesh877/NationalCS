import React from "react";
import { useParams } from "react-router-dom";
import cards from "../Data/cardData";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = cards.find((a) => a.id === parseInt(id));
  if (!service) {
    return <div>Service not found</div>;
  }
  const { title, description, image, content } = service;

  return (
    <section className="bg-gray-500">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <h1>{title}</h1>
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
            <article>
              {content.map((item, idx) => (
                <div key={idx} className="my-3">
                  <h6 className="font-bold">{item.title}:</h6>
                  <div>
                    {item.items.map((point, idx) => (
                      <div key={idx}>
                        {typeof point === "object" ? (
                          <div className="">
                            <p className="">{point.sub_title}</p>
                            <div>
                              {point.sub_items.map((sub_point, idx) => (
                                <ul key={idx} className="">
                                  <li>{sub_point}</li>
                                </ul>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <ul key={idx} className="">
                            <li>{point}</li>
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
  );
};

export default ServiceDetail;
