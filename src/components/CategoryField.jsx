import React, { useState, useEffect } from "react";
import axios from "axios";

const CategoryField = ({ label, onChange }) => {
  const [query, setQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/admin/categories");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setFilteredCategories([]);
      return;
    }

    const results = categories.filter((category) =>
      category.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCategories(results);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setQuery("");
    setFilteredCategories([]);
    onChange(category);
  };

  const handleCreateCategory = async () => {
    if (!newCategoryName.trim()) {
      alert("Category name cannot be empty");
      return;
    }

    try {
      const newCategory = {
        name: newCategoryName,
      };

      const response = await axios.post(
        "http://localhost:8080/api/admin/categories",
        newCategory
      );

      setCategories((prev) => [...prev, response.data]);
      setIsModalOpen(false);
      setNewCategoryName("");
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };

  return (
    <div className="flex flex-col w-48">
      <label
        htmlFor={label}
        className="block mb-1 text-sm font-bold text-gray-700"
      >
        {label}
      </label>
      {selectedCategory ? (
        <div className="w-full h-11 px-4 bg-gray-100 rounded-md border-2 border-gray-300 text-base text-gray-900 flex items-center justify-between">
          <span>{selectedCategory.name}</span>
          <button
            className="text-sm text-blue-600 hover:underline"
            onClick={() => setSelectedCategory(null)}
          >
            Change
          </button>
        </div>
      ) : (
        <input
          value={query}
          onChange={handleInputChange}
          type="text"
          placeholder="Choose Category"
          autoComplete="off"
          className="w-full h-11 px-4 bg-gray-100 rounded-md border-2 border-transparent text-base text-gray-900 focus:outline-none focus:border-gray-800 focus:bg-white focus:text-gray-900 transition-colors duration-300"
        />
      )}
      <div className="mt-2">
        {query && !selectedCategory && (
          <div
            className="border border-gray-300 rounded-md p-2 bg-white shadow-sm"
            role="listbox"
          >
            {filteredCategories.length > 0 ? (
              <ul className="space-y-1">
                {filteredCategories.map((category) => (
                  <li
                    key={category.id}
                    className="text-sm text-gray-800 cursor-pointer hover:bg-gray-100 p-1 rounded"
                    onClick={() => handleCategorySelect(category)}
                    role="option"
                  >
                    {category.name}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">No categories found</span>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-sm text-blue-600 hover:underline"
                >
                  Create Category
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-md shadow-lg p-6 w-80">
            <h2 className="text-lg font-bold mb-4">Create New Category</h2>
            <input
              type="text"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              placeholder="Category Name"
              className="w-full h-11 px-4 bg-gray-100 rounded-md border-2 border-gray-300 text-base text-gray-900 focus:outline-none focus:border-gray-800 focus:bg-white focus:text-gray-900 transition-colors duration-300 mb-4"
            />
            <div className="flex justify-end space-x-2">
              <button
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                onClick={handleCreateCategory}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryField;
