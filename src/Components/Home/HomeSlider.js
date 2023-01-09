import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import IMG from '../../imgs/listing2-850x550-removebg-preview.png'

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };
  return (
    <div>
      <br />
      <br />
     
      <div className=" overflow-hidden max-w-[1536px] ml-auto mr-auto  md:rounded-md md:mt-4">
        {/* md:m-7 m-7 mt-4 */}

        <Slider {...settings}>
          <div className="z-0">
            <img
              className="md:h-96 w-full mr-auto ml-auto  "
              src="https://i.ibb.co/2kkypZq/White-Clean-Office-Space-Photo-Corporate-Canva-Banner.png"
              alt=""
            />
          </div>
          <div className="z-0">
            <img
              className="md:h-96 w-full mr-auto ml-auto  "
              src="https://i.ibb.co/2kkypZq/White-Clean-Office-Space-Photo-Corporate-Canva-Banner.png"
              alt=""
            />
          </div>
          <div className="z-0">
            <img
              className="md:h-96 w-full mr-auto ml-auto  "
              src="https://i.ibb.co/2kkypZq/White-Clean-Office-Space-Photo-Corporate-Canva-Banner.png"
              alt=""
            />
          </div>
         
        </Slider>
      </div>
    </div>
  );
};

export default HomeSlider;
