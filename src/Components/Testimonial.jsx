import React, { useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { FaUser } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

const Testimonial = () => {
  const pathname = useLocation();
  const items = [
    <div className="review  text-white mx-2 border d-flex flex-column  justify-content-center  align-items-center">
      <div className="person ">
        <FaUser className="user" />
      </div>
      <h5 className="text-center ">Shristi Bhattarai</h5>

      <p className="text-justify px-4 mx-2 testimonial">
        After years of discomfort, I finally sought help for my colorectal
        issues. The team at National Colorectal Center provided exceptional
        care, guiding me through the entire process with compassion and
        expertise. Thanks to their skilled surgeons and attentive staff, I feel
        like a new person!
      </p>
    </div>,

    <div className="review text-white border mx-2 d-flex flex-column  justify-content-center  align-items-center">
      <div className="person ">
        <FaUser className="user" />
      </div>
      <h5 className="text-center ">Prakash Lama</h5>

      <p className="text-justify px-4 mx-2  testimonial">
        "I can't thank the doctors at National Colorectal Center enough for
        their life-changing treatment. From my initial consultation to
        post-surgery care, they were with me every step of the way. Their
        dedication to improving the quality of life for their patients is truly
        commendable."
      </p>
    </div>,

    <div className="review text-white border mx-2 d-flex flex-column  justify-content-center  align-items-center">
      <div className="person ">
        <FaUser className="user" />
      </div>
      <h5 className="text-center">Ranzeth sahani</h5>

      <p className="text-justify px-4 mx-2  testimonial">
        {" "}
        " I was hesitant to
        undergo surgery. However, the team at National Colorectal Center made me
        feel comfortable and confident in my decision. Their professionalism and
        expertise exceeded my expectations, and I'm grateful for the positive
        outcome."
      </p>
    </div>,
     <div className="review text-white border mx-2 d-flex flex-column  justify-content-center  align-items-center">
     <div className="person ">
       <FaUser className="user" />
     </div>
     <h5 className="text-center">Sudhira Ray</h5>

     <p className="text-justify px-4 mx-2  testimonial">
       {" "}
       " I was hesitant to
       undergo surgery. However, the team at National Colorectal Center made me
       feel comfortable and confident in my decision. Their professionalism and
       expertise exceeded my expectations, and I'm grateful for the positive
       outcome."
     </p>
   </div>,
  ];

  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 2 },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <section className="bg-light testimonialbg " id="reviews">
        <div className=" container mx-auto">
          <AliceCarousel
            mouseTracking
            controlsStrategy="alternate"
            autoPlay
            items={items}
            infinite
            disableButtonsControls
            disableDotsControls
            responsive={responsive}
            autoPlayInterval={2000}
            autoPlayDirection="rtl"
            startIndex={0}
            stagePadding={{ paddingLeft: 20, paddingRight: 20 }}
            lazyLoad
          />
        </div>
      </section>
    </>
  );
};

export default Testimonial;
