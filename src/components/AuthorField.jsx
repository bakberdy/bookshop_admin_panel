import React, { useState } from "react";
import axios from "axios";

const AuthorField = ({ label, onChange }) => {
  
  const [query, setQuery] = useState("");
  const [authors, setAuthors] = useState([]);
  const [filteredAuthors, setFilteredAuthors] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newAuthor, setNewAuthor] = useState({
    name: "",
    biography: "",
    dateOfBirth: "",
  });

  const fetchAuthors = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/authors");
      setAuthors(response.data);
    } catch (error) {
      console.error("Error fetching authors:", error);
    }
  };

  const handleInputChange = (e) => {
    fetchAuthors()
    const value = e.target.value;
    setQuery(value);

    const results = authors.filter((author) =>
      author.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredAuthors(results);
  };

  const handleAuthorSelect = (author) => {
    setSelectedAuthor(author);
    setQuery("");
    setFilteredAuthors([]);
    onChange(author.id);
  };

  const handleAddAuthor = async () => {
    try {
      await axios.post("http://localhost:8080/api/admin/authors", newAuthor);
      alert("Author added successfully!");
      setShowAddModal(false);
      setNewAuthor({ name: "", biography: "", dateOfBirth: "" });
      fetchAuthors();
    } catch (error) {
      alert("Failed to add author. Please try again.");
      console.error("Error adding author:", error);
    }
  };

  
  return (
    <div className="flex flex-col w-48">
      <label
        htmlFor={label}
        className="block mb-1 text-sm font-bold text-gray-700"
      >
        Author
      </label>
      {selectedAuthor ? (
        <div className="w-full h-11 px-4 bg-gray-100 rounded-md border-2 border-gray-300 text-base text-gray-900 flex items-center justify-between">
          <span>{selectedAuthor.name}</span>
          <button
            className="text-sm text-blue-600 hover:underline"
            onClick={() => setSelectedAuthor(null)}
          >
            Change
          </button>
        </div>
      ) : (
        <input
          value={query}
          onChange={handleInputChange}
          type="text"
          placeholder="Choose Author"
          autoComplete="off"
          className="w-full h-11 px-4 bg-gray-100 rounded-md border-2 border-transparent text-base text-gray-900 focus:outline-none focus:border-gray-800 focus:bg-white focus:text-gray-900 transition-colors duration-300"
        />
      )}
      <div className="mt-2">
        {query && !selectedAuthor && (
          <div className="border border-gray-300 rounded-md p-2 bg-white shadow-sm">
            {filteredAuthors.length > 0 ? (
              <ul className="space-y-1">
                {filteredAuthors.map((author) => (
                  <li
                    key={author.id}
                    className="text-sm text-gray-800 cursor-pointer hover:bg-gray-100 p-1 rounded"
                    onClick={() => handleAuthorSelect(author)}
                  >
                    {author.name}
                  </li>
                ))}
              </ul>
            ) : (
              <span className="text-sm text-gray-600">
                No authors found{" "}
                <button
                  className="ml-4 text-blue-600 underline"
                  onClick={() => setShowAddModal(true)}
                >
                  ADD
                </button>
              </span>
            )}
          </div>
        )}
      </div>

      {showAddModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Add New Author</h2>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={newAuthor.name}
                onChange={(e) =>
                  setNewAuthor({ ...newAuthor, name: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-1"
                htmlFor="biography"
              >
                Biography
              </label>
              <textarea
                id="biography"
                value={newAuthor.biography}
                onChange={(e) =>
                  setNewAuthor({ ...newAuthor, biography: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-1"
                htmlFor="dateOfBirth"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dateOfBirth"
                value={newAuthor.dateOfBirth}
                onChange={(e) =>
                  setNewAuthor({ ...newAuthor, dateOfBirth: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-gray-300 rounded-md mr-2"
                onClick={() => setShowAddModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
                onClick={handleAddAuthor}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthorField;