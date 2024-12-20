import React, { useState, useEffect } from "react";
import axios from "axios";

const AuthorField = ({
  label,
  type = "text",
  placeholder = "",
  onChange,
  onAddAuthor,
}) => {
  const [query, setQuery] = useState("");
  const [authors, setAuthors] = useState([]);
  const [filteredAuthors, setFilteredAuthors] = useState([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/authors");
        setAuthors(response.data);
      } catch (error) {
        console.error("Error fetching authors:", error);
      }
    };

    fetchAuthors();
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onChange(e);

    const results = authors.filter((author) =>
      author.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredAuthors(results);
  };

  return (
    <div className="flex flex-col w-48">
      <label
        htmlFor={label}
        className="block mb-1 text-sm font-bold text-gray-700 transition-colors duration-300"
      >
        {label}
      </label>
      <input
        onChange={handleInputChange}
        id={label}
        name={label}
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        className="w-full h-11 px-4 bg-gray-100 rounded-md border-2 border-transparent text-base text-gray-900 focus:outline-none focus:border-gray-800 focus:bg-white focus:text-gray-900 transition-colors duration-300"
      />
      <div className="mt-2">
        {query && (
          <div className="border border-gray-300 rounded-md p-2 bg-white shadow-sm">
            {filteredAuthors.length > 0 ? (
              <ul className="space-y-1">
                {filteredAuthors.map((author, index) => (
                  <li key={index} className="text-sm text-gray-800">
                    {author?.name || "Unknown Author"}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">No authors found</span>
                <button
                  onClick={() => onAddAuthor(query)}
                  className="text-sm text-blue-600 hover:underline"
                >
                  Add Author
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthorField;
