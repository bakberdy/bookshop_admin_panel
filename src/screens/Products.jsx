import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import axios from "axios";

const Products = () => {
  const [initialData, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/books");
      setData(response.data);
      console.log(response.data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-[#c4c9e0] flex flex-col w-full p-10">
      <div className="px-5 py-8 flex-grow">
        <div className="flex flex-row justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Products</h1>
          <Link
            to="/add-product"
            className="h-12 px-4 py-2 text-base font-bold text-gray-100 bg-blue-800 rounded-lg cursor-pointer transition-transform duration-200 shadow-md hover:scale-105 active:scale-95 focus:outline focus:outline-2 focus:outline-blue-800 focus:outline-offset-2"
          >
            ADD new product
          </Link>
        </div>
        <div className="flex flex-wrap gap-10">
          {initialData.map((book) => (
            <BookCard book={book} key={book.bookId} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
