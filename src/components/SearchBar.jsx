import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setQuery, clearQuery } from '../redux/features/search/searchSlice';
import { FaSearch, FaTimes } from 'react-icons/fa';
import "../css/SearchBar.css"
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
    <div className="search-bar">
      <div className="search-bar__container">
        <FaSearch className="search-bar__icon" />
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search..."
          className="search-bar__input"
        />
        {query && (
          <button className="search-bar__clear" onClick={handleClear}>
            <FaTimes />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;

