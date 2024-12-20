import React from "react";
import { Link } from "react-router-dom";
import Book from "../entities/Book";
import BookCard from "../components/BookCard";

const initialData = [
  new Book({
    bookId: 1,
    title: "JavaScript Mastery",
    authorId: 1,
    categoryId: 2,
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
    bookId: 1,
    title: "JavaScript Mastery",
    authorId: 1,
    categoryId: 2,
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
    bookId: 1,
    title: "JavaScript Mastery",
    authorId: 1,
    categoryId: 2,
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
    bookId: 1,
    title: "JavaScript Mastery",
    authorId: 1,
    categoryId: 2,
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
    bookId: 1,
    title: "JavaScript Mastery",
    authorId: 1,
    categoryId: 2,
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
];

const Products = () => {
  return (
    <div className="min-h-screen bg-[#c4c9e0] flex flex-col w-full p-10 ">
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
        <div className="flex flex-wrap gap-10" >
          {initialData.map((book) => (
            <BookCard book={book} key={book.bookId} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
