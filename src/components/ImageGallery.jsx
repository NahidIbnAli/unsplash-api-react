import axios from "axios";
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

  const handleSearchImage = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchText = form.searchField.value;
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=${searchText}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
      )
      .then((response) => {
        setImages(response.data.results);
        form.reset();
      });
  };

  return (
    <>
      <div className="flex justify-center pt-6 lg:pt-12 px-5 lg:px-0">
        <form onSubmit={handleSearchImage} className="flex w-screen sm:w-96">
          <input
            name="searchField"
            type="text"
            placeholder="search"
            className="py-2 px-4 border outline-none focus:border-indigo-200 focus:ring-2 w-full rounded-l-md"
          />
          <button
            type="submit"
            className="bg-indigo-500 border border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-white px-4 sm:px-6 py-2 rounded-r-md"
          >
            Search
          </button>
        </form>
      </div>
      {!images.length ? (
        <h1 className="text-4xl font-bold text-slate-700 text-center mt-52">
          Loading ..
        </h1>
      ) : (
        <section className="xl:w-3/5 2xl:w-1/2 container mx-auto px-5 xl:px-0">
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
