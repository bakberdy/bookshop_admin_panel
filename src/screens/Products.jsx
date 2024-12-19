import React from "react";
import "../css/Products.css";
import { Link, useLocation } from "react-router-dom";

const initialData = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: "$10.99",
    sales: 120,
    stock: 50,
    image: "https://wallpapercave.com/wp/wp8057637.jpg",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    price: "$8.99",
    sales: 200,
    stock: 30,
    image: "https://wallpapercave.com/wp/wp8057637.jpg",
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: "$12.99",
    sales: 150,
    stock: 20,
    image: "https://wallpapercave.com/wp/wp8057637.jpg",
  },
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: "$10.99",
    sales: 120,
    stock: 50,
    image: "https://wallpapercave.com/wp/wp8057637.jpg",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    price: "$8.99",
    sales: 200,
    stock: 30,
    image: "https://wallpapercave.com/wp/wp8057637.jpg",
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: "$12.99",
    sales: 150,
    stock: 20,
    image: "https://wallpapercave.com/wp/wp8057637.jpg",
  },
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: "$10.99",
    sales: 120,
    stock: 50,
    image: "https://wallpapercave.com/wp/wp8057637.jpg",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    price: "$8.99",
    sales: 200,
    stock: 30,
    image: "https://wallpapercave.com/wp/wp8057637.jpg",
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: "$12.99",
    sales: 150,
    stock: 20,
    image: "https://wallpapercave.com/wp/wp8057637.jpg",
  },
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: "$10.99",
    sales: 120,
    stock: 50,
    image: "https://wallpapercave.com/wp/wp8057637.jpg",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    price: "$8.99",
    sales: 200,
    stock: 30,
    image: "https://wallpapercave.com/wp/wp8057637.jpg",
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: "$12.99",
    sales: 150,
    stock: 20,
    image: "https://wallpapercave.com/wp/wp8057637.jpg",
  },
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: "$10.99",
    sales: 120,
    stock: 50,
    image: "https://wallpapercave.com/wp/wp8057637.jpg",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    price: "$8.99",
    sales: 200,
    stock: 30,
    image: "https://wallpapercave.com/wp/wp8057637.jpg",
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: "$12.99",
    sales: 150,
    stock: 20,
    image: "https://wallpapercave.com/wp/wp8057637.jpg",
  },
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: "$10.99",
    sales: 120,
    stock: 50,
    image: "https://wallpapercave.com/wp/wp8057637.jpg",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    price: "$8.99",
    sales: 200,
    stock: 30,
    image: "https://wallpapercave.com/wp/wp8057637.jpg",
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: "$12.99",
    sales: 150,
    stock: 20,
    image: "https://wallpapercave.com/wp/wp8057637.jpg",
  },
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: "$10.99",
    sales: 120,
    stock: 50,
    image: "https://wallpapercave.com/wp/wp8057637.jpg",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    price: "$8.99",
    sales: 200,
    stock: 30,
    image: "https://wallpapercave.com/wp/wp8057637.jpg",
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: "$12.99",
    sales: 150,
    stock: 20,
    image: "https://wallpapercave.com/wp/wp8057637.jpg",
  },
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: "$10.99",
    sales: 120,
    stock: 50,
    image: "https://wallpapercave.com/wp/wp8057637.jpg",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    price: "$8.99",
    sales: 200,
    stock: 30,
    image: "https://wallpapercave.com/wp/wp8057637.jpg",
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: "$12.99",
    sales: 150,
    stock: 20,
    image: "https://wallpapercave.com/wp/wp8057637.jpg",
  },
];

const Products = () => {
  return (
    <div className="products">
      <div className="products-container">
        <div className="products__app-bar">
          <h1 className="products-title">Products</h1>
          <Link to="/add-product" className={`add-product-btn`}>
            <h1>ADD new product</h1>
          </Link>
        </div>
        <div className="products-grid">
          {initialData.map((book) => (
            <Link
              key={book.id}
              to="/add-details"
            >
              <div key={book.id} className="product-item">
                <img
                  src={book.image}
                  alt={book.title}
                  className="product-image"
                />
                <div className="product-details">
                  <h2 className="product-title">{book.title}</h2>
                  <p className="product-author">by {book.author}</p>
                  <p className="product-price">{book.price}</p>
                  <div className="product-progress-container">
                    <p className="product-sales">Total Sales: {book.sales}</p>
                    <p className="product-stock">
                      Stock Remaining: {book.stock}
                    </p>
                    <div className="progress-bar">
                      <div
                        className="progress"
                        style={{
                          width: `${
                            (book.sales / (book.sales + book.stock)) * 100
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
