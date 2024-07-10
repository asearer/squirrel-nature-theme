import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = () => {
  const images = [
    "https://placekitten.com/400/300",
    "https://placekitten.com/401/301",
    "https://placekitten.com/402/302",
    "https://placekitten.com/403/303",
    "https://placekitten.com/404/304"
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Squirrel ${index + 1}`} className="carousel-image"/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
