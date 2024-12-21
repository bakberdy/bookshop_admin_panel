import React, { useState, useEffect } from "react";
import "../css/Bestsellers.css";
import BookCard from "./BookCard";
import axios from "axios";

const Bestsellers = () => {
  const [initialData, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/books");
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bestsellers-container">
      <h1 className="bestsellers-title">Bestsellers Statistics</h1>
      <div className="flex flex-col gap-10 p-5 md:flex-row">
        {initialData.slice(0,3).map((book) => (
          <BookCard book={book} key={book.bookId} />
        ))}
      </div>
    </div>
  );
};

export default Bestsellers;
