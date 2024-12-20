import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="">
        <Link key={book.id} to="/add-details">

    <div
      key={book.bookId}
      className="product-item w-[350px] bg-white rounded-lg shadow-md overflow-hidden text-center transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
    >
      <img
        src={book.imageData}
        alt={book.title}
        className="product-image w-full h-[400px] object-cover border-b border-gray-200"
      />
      <div className="product-details text-left p-10">
        <h2 className="product-title text-lg font-bold text-blue-800 my-2">
          {book.title}
        </h2>
        <p className="product-author text-sm text-gray-600 mb-2">
          Author: {book.author.name}
        </p>
        <p className="product-category text-sm text-gray-600 mb-2">
          Category: {book.category.name}
        </p>
        <p className="product-description text-sm text-gray-600 mb-2">
          {book.description}
        </p>
        <p className="product-price text-base font-bold text-green-600 mb-2">
          Price: {book.currency.symbol}
          {book.price}
        </p>
        <p className="product-discount text-sm text-gray-600 mb-2">
          Discount: {book.discount}%
        </p>
        <p className="product-stock text-sm text-gray-600 mb-2">
          Stock: {book.stockQuantity}
        </p>
        <p className="product-published text-sm text-gray-600 mb-2">
          Published Year: {book.publishedYear}
        </p>
        <p className="product-created text-sm text-gray-600 mb-2">
          Created At: {new Date(book.createdAt).toLocaleDateString()}
        </p>
        <p className="product-updated text-sm text-gray-600 mb-2">
          Updated At: {new Date(book.updatedAt).toLocaleDateString()}
        </p>
      </div>
    </div>
    </Link>
    </div>
  );
};

export default BookCard;
