import React from "react";

const SearchBar = () => {
  return (
    <div className="flex justify-center pt-16">
      <form>
        <input
          type="text"
          placeholder="search"
          className="py-2 px-4 focus:outline-none border md:w-80 rounded-l-md"
        />
        <button
          type="submit"
          className="bg-indigo-500 border border-indigo-500 text-white px-6 py-2 rounded-r-md"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
