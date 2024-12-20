import React from "react";
import "../css/Bestsellers.css";
import Book from '../entities/Book'
import BookCard from "./BookCard";

const initialData = [
  new Book({
    bookId: 1,
    title: "JavaScript Mastery",
    author: { authorId: 1, name: "John Doe" },
    category: { categoryId: 2, name: "Programming" },
    price: 29.99,
    discount: 5.0,
    stockQuantity: 100,
    currency: { currencyCode: "USD", symbol: "$" },
    description: "A comprehensive guide to mastering JavaScript.",
    publishedYear: 2023,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    imageData:
      "https://w0.peakpx.com/wallpaper/536/1014/HD-wallpaper-anime-landscape-school-girl-back-view-clouds-anime.jpg",
  }),
  new Book({
    bookId: 2,
    title: "Learn React",
    author: { authorId: 2, name: "Jane Smith" },
    category: { categoryId: 3, name: "Web Development" },
    price: 39.99,
    discount: 10.0,
    stockQuantity: 50,
    currency: { currencyCode: "USD", symbol: "$" },
    description: "Everything you need to know to become a React expert.",
    publishedYear: 2022,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    imageData:
      "https://w0.peakpx.com/wallpaper/536/1014/HD-wallpaper-anime-landscape-school-girl-back-view-clouds-anime.jpg",
  }),
  new Book({
    bookId: 3,
    title: "Python for Data Science",
    author: { authorId: 3, name: "Emily Johnson" },
    category: { categoryId: 4, name: "Data Science" },
    price: 49.99,
    discount: 15.0,
    stockQuantity: 25,
    currency: { currencyCode: "USD", symbol: "$" },
    description: "Master data science with Python programming.",
    publishedYear: 2021,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    imageData:
      "https://w0.peakpx.com/wallpaper/536/1014/HD-wallpaper-anime-landscape-school-girl-back-view-clouds-anime.jpg",
  }),

];

const Bestsellers = () => {
  return (
    <div className="bestsellers-container">
      <h1 className="bestsellers-title">Bestsellers Statistics</h1>
      <div className="flex flex-col gap-10 p-5 md:flex-row">
        {initialData.map((book) => (
          <BookCard book={book} />
        ))}
        </div>
      </div>
  );
};

export default Bestsellers;
