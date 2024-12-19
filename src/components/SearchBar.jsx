import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setQuery, clearQuery } from "../redux/features/search/searchSlice";
import { FaSearch, FaTimes } from "react-icons/fa";

const SearchBar = () => {
  const query = useSelector((state) => state.search.query);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(setQuery(e.target.value));
  };

  const handleClear = () => {
    dispatch(clearQuery());
  };

  return (
    <div className="relative">
      {/* Search Bar */}
      <div className="flex justify-center items-center">
        <div className="flex items-center border-2 border-blue-800 rounded-lg px-3 py-2 w-full max-w-[300px] sm:max-w-[200px]">
          <FaSearch className="text-blue-800 text-lg mr-2" />
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search..."
            className="flex-1 bg-transparent border-none outline-none text-base text-gray-800"
          />
          {query && (
            <button
              onClick={handleClear}
              className="bg-none border-none text-gray-500 hover:text-gray-800 cursor-pointer text-lg sm:hidden"
            >
              <FaTimes />
            </button>
          )}
        </div>
      </div>

      {/* Results Bar */}
      {query && (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md mt-1 shadow-lg z-50">
          <ul className="divide-y divide-gray-200">
            <li className="p-2 text-gray-700 hover:bg-gray-100">
              Result for "{query}"
            </li>
            <li className="p-2 text-gray-700 hover:bg-gray-100">Another Result</li>
            <li className="p-2 text-gray-700 hover:bg-gray-100">Yet Another Result</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
