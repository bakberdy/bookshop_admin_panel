import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  if (!book) {
    return <div>Book data is missing</div>;
  }

  const {
    bookId,
    imageData = "https://via.placeholder.com/350x400",
    title = "Unknown Title",
    author = null,
    category = null,
    description = "No description available",
    currency,
    price = "N/A",
    discount = 0,
    stockQuantity = 0,
    publishedYear = "Unknown Year",
    createdAt,
    updatedAt,
  } = book;

  const authorName = author?.name || "Unknown Author";
  const categoryName = category?.name || "Uncategorized";

  return (
    <div className="">
      <Link key={bookId} to="/edit-details">
        <div
          key={bookId}
          className="product-item w-[350px] bg-white rounded-lg shadow-md overflow-hidden text-center transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
        >
          <img
            src={imageData}
            alt={title}
            className="product-image w-full h-[400px] object-cover border-b border-gray-200"
          />
          <div className="product-details text-left p-10">
            <h2 className="product-title text-lg font-bold text-blue-800 my-2">
              {title}
            </h2>
            <p className="product-author text-sm text-gray-600 mb-2">
              Author: {authorName}
            </p>
            <p className="product-category text-sm text-gray-600 mb-2">
              Category: {categoryName}
            </p>
            <p className="product-description text-sm text-gray-600 mb-2">
              {description}
            </p>
            <p className="product-price text-base font-bold text-green-600 mb-2">
              Price: {currency}
              {price}
            </p>
            <p className="product-discount text-sm text-gray-600 mb-2">
              Discount: {discount}%
            </p>
            <p className="product-stock text-sm text-gray-600 mb-2">
              Stock: {stockQuantity}
            </p>
            <p className="product-published text-sm text-gray-600 mb-2">
              Published Year: {publishedYear}
            </p>
            <p className="product-created text-sm text-gray-600 mb-2">
              Created At:{" "}
              {createdAt ? new Date(createdAt).toLocaleDateString() : "N/A"}
            </p>
            <p className="product-updated text-sm text-gray-600 mb-2">
              Updated At:{" "}
              {updatedAt ? new Date(updatedAt).toLocaleDateString() : "N/A"}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
