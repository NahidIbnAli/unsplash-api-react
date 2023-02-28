import React, { useEffect, useState } from "react";

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(async () => {
    const response = await fetch(
      `https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
    );
    const images = await response.json();
    setImages(images);
  }, []);
  return (
    <div>
      <h2 className="text-3xl">Recomened image for you!</h2>
    </div>
  );
};

export default ImageGallery;
