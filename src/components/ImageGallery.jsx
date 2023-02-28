import React, { useEffect, useState } from "react";
import Image from "./Image";

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
    )
      .then((res) => res.json())
      .then((images) => setImages(images));
  }, []);

  return (
    <>
      {!images.length ? (
        <h1 className="text-4xl font-bold text-slate-700 text-center mt-52">
          Loading ..
        </h1>
      ) : (
        <section className="xl:w-3/5 2xl:w-1/2 container mx-auto px-5">
          <h2 className="text-xl lg:text-3xl text-slate-700 font-bold mt-10 mb-6">
            Recommended for you
          </h2>
          <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-5">
            {images.map((image, index) => (
              <Image key={index} {...image} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default ImageGallery;
