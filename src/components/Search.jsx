
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  return (
    <div className="max-w-full mx-20  mt-6 flex items-center justify-between gap-20 rounded-xl  p-3 outline-none ">
      <input
        className="flex-1 rounded-lg border border-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-violet-50"
        type="text"
        placeholder="Search by Employee ID..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={() => onSearch(query)}
        className="px-5 py-2 rounded-lg bg-gray-200 text-black hover:bg-blue-300 transition"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
