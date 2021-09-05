import React, { useMemo, useState } from "react";
import { Button } from "antd";
import Slick from "react-slick";

const ImagesZoom = ({ images, handleImageClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="images-zoom-container">
      <header>
        <h1> 상세 이미지 </h1>
        <Button onClick={handleImageClose}>X</Button>
      </header>

      <div className="slick-container">
        <Slick
          initialSlide={0}
          beforeChange={(prevSlide, nextSlide) => setCurrentSlide(nextSlide)}
          infinite
          arrows={false}
          slidesToShow={1}
          slidesToScroll={1}
        >
          {images.map(v => (
            <div key={v.src} className="slick-image">
              <img src={v.src} alt={v.src} />
            </div>
          ))}
        </Slick>
      </div>

      <footer>
        <div className="description">
          {currentSlide + 1} /{images.length}
        </div>
      </footer>
    </section>
  );
};

export default ImagesZoom;
