import React, { useState, useCallback } from "react";
import ImagesZoom from "./ImagesZoom";
import { PlusOutlined } from "@ant-design/icons";

const PostImages = ({ images }) => {
  const [showImagesZoom, setShowImagesZoom] = useState(false);

  const handleImageZoom = useCallback(() => {
    setShowImagesZoom((prev) => !prev);
  }, []);

  const handleImageClose = useCallback(() => {
    setShowImagesZoom((prev) => !prev);
  }, []);

  if (images.length === 1) {
    return (
      <section className="post-images-container">
        <img
          role="presentation"
          src={images[0].src}
          alt={images[0].src}
          onClick={handleImageZoom}
        />
        {showImagesZoom && (
          <ImagesZoom images={images} handleImageClose={handleImageClose} />
        )}
      </section>
    );
  }
  if (images.length === 2) {
    return (
      <section className="post-images-container">
        <div>
          <img
            role="presentation"
            src={images[0].src}
            alt={images[0].src}
            width="50%"
            onClick={handleImageZoom}
          />
          <img
            role="presentation"
            src={images[1].src}
            alt={images[1].src}
            width="50%"
            onClick={handleImageZoom}
          />
          {showImagesZoom && (
            <ImagesZoom images={images} handleImageClose={handleImageClose} />
          )}
        </div>
      </section>
    );
  }
  return (
    <section className="post-images-container">
      <img
        role="presentation"
        src={images[0].src}
        alt={images[0].src}
        width="50%"
        onClick={handleImageZoom}
      />
      <div
        role="presentation"
        className="rest-images"
        onClick={handleImageZoom}
      >
        <PlusOutlined />
        <br />
        {images.length - 1}
        개의 사진 더보기
      </div>
      {showImagesZoom && (
        <ImagesZoom images={images} handleImageClose={handleImageClose} />
      )}
    </section>
  );
};

export default PostImages;
