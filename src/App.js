import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <ImageGallery />
    </div>
  );
}

export default App;
