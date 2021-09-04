import React, { useState, useCallback } from "react";
import { PlusOutlined } from "@ant-design/icons";

const PostImages = ({ images }) => {
  const [showImagesZoom, setShowImagesZoom] = useState(false);

  const handleImageZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, []);

  const handleImageClose = useCallback(() => {
    setShowImagesZoom(false);
  }, []);

  if (images.length === 1) {
    return (
      <>
        <img
          role="presentation"
          src={images[0].src}
          alt={images[0].src}
          onClick={handleImageZoom}
        />
      </>
    );
  }
  if (images.length === 2) {
    return (
      <>
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
        </div>
      </>
    );
  }
  return (
    <>
      <div>
        <img
          role="presentation"
          src={images[0].src}
          alt={images[0].src}
          width="50%"
          onClick={handleImageZoom}
        />
        <div
          role="presentation"
          style={{
            display: "inline-block",
            width: "50%",
            textAlign: "center",
            verticalAlign: "middle",
          }}
          onClick={handleImageZoom}
        >
          <PlusOutlined />
          <br />
          {images.length - 1}
          개의 사진 더보기
        </div>
      </div>
    </>
  );
};

export default PostImages;
