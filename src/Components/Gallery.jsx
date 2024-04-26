import React from "react";
import images from "../Data/photo";

const Gallery = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          {images.map((image, index) => (
            <div
              key={index}
              className={`col-md-6 ${
                index % 2 === 0 ? "order-md-1" : "order-md-2"
              }`}
            >
              <img src={image.img} alt={image.alt} className="img-fluid mb-3" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
