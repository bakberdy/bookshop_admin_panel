import React from "react";
import "../css/Bestsellers.css";
import { Link } from "react-router-dom";

const initialData = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: "$10.99",
    sales: 120,
    image:
      "https://www.manga-news.com/public/images/series/classroom-for-heroes-1-doki.jpg",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    price: "$8.99",
    sales: 200,
    image:
      "https://th.bing.com/th/id/OIP.jO8ukMZG1AmcHp7kqiPkwAHaK8?w=629&h=930&rs=1&pid=ImgDetMain",
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: "$12.99",
    sales: 150,
    image:
      "https://i.pinimg.com/originals/04/a7/32/04a732d980310aa49cff48122f95c007.jpg",
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: "$12.99",
    sales: 150,
    image:
      "https://i.pinimg.com/originals/04/a7/32/04a732d980310aa49cff48122f95c007.jpg",
  },
];

const Bestsellers = () => {
  return (
    <div className="bestsellers-container">
      <h1 className="bestsellers-title">Bestsellers Statistics</h1>
      <div className="bestsellers-grid">
        {initialData.map((book) => (
          <Link key={book.id} to="/add-details">
            <div key={book.id} className="bestseller-item">
              <img
                src={book.image}
                alt={book.title}
                className="bestseller-image"
              />
              <div className="bestseller-details">
                <h2 className="bestseller-title">{book.title}</h2>
                <p className="bestseller-author">by {book.author}</p>
                <p className="bestseller-price">{book.price}</p>
                <p className="bestseller-sales">Total Sales: {book.sales}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Bestsellers;
