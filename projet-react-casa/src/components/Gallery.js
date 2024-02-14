import React, { useState } from "react";
import "./Gallery.scss";

const Gallery = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = props.images;
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.lenght);
  };
  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.lenght) % images.lenght
    );
  };
  return (
    <>
      {images.lenght > 1 && (
        <div>
          <button
            className="previous"
            onClick={prevSlide}
            disabled={currentSlide === 0}
          >
            Previous
          </button>
          <div className="Gallery-pictures">
            {images.map((image, index) => (
              <div
                className="Gallery-image"
                key={index}
                style={{ display: index === currentSlide ? "block" : "none" }}
              >
                <img key={index} src={image} alt={`slide ${index}`} />
              </div>
            ))}
          </div>
          <button
            className="next"
            onClick={nextSlide}
            disabled={currentSlide === images.length - 1}
          >
            Next
          </button>
          <div className="SlideNumbers">
            {currentSlide + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
