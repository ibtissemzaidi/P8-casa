import React, { useState } from "react";
import "./Gallery.scss";
import ArrowRight from "../../assets/arrow-right.png";
import ArrowLeft from "../../assets/arrow-left.png";

const Gallery = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0); // State > Index de l'image actuelle
  const images = props.images;
  const totalSlides = images.length;
  const nextSlide = () => {
    // Passe a l'image suivante
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };
  function prevSlide() {
    // Passe a l'image precedente
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  return (
    <section className="ContSlider">
      {images.length > 1 && ( // Si il n'y a qu'une seul image, on n'affiche seulement l'image
        <>
          {/* // Affiche les fleches de navigation, au click on passe a l'image suivante ou precedente */}
          <img
            className="ArrowSliderLeft"
            src={ArrowLeft}
            alt="Flèche gauche"
            onClick={nextSlide}
          />
          <img
            className="ArrowSliderRight"
            src={ArrowRight}
            alt="Flèche droite"
            onClick={prevSlide}
          />
        </>
      )}
      {/* // Affiche l'image actuelle en fonction de l'index */}
      <img className="ImgSlider" src={images[currentSlide]} alt="Logement" />
      {/* Compteur d'images */}

      <div className="ImageCounter">
        {currentSlide + 1} / {totalSlides}
      </div>
    </section>
  );
};

export default Gallery;
