import React, { useState } from "react";
import "../css/Orders.css";

const ordersData = [
  {
    orderId: 101,
    productName: "The Great Gatsby",
    date: "2024-12-18",
    customerName: "John Doe",
    status: "Shipped",
    quantity: 2,
  },
  {
    orderId: 102,
    productName: "1984",
    date: "2024-12-17",
    customerName: "Jane Smith",
    status: "Processing",
    quantity: 1,
  },
  {
    orderId: 103,
    productName: "To Kill a Mockingbird",
    date: "2024-12-16",
    customerName: "Alice Brown",
    status: "Delivered",
    quantity: 3,
  },
];

const Orders = () => {
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [orders, setOrders] = useState(ordersData);

  const handleCheckboxChange = (order) => {
    setSelectedOrders((prevSelected) => {
      if (prevSelected.includes(order.orderId)) {
        return prevSelected.filter((id) => id !== order.orderId);
      } else {
        return [...prevSelected, order.orderId];
      }
    });
  };

  const handleStatusChange = (newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        selectedOrders.includes(order.orderId)
          ? { ...order, status: newStatus }
          : order
      )
    );
    setSelectedOrders([]); 
  };

  return (
    <div className="orders-container">
      <div className="orders-header">
        <h1 className="orders-title">Orders List</h1>
        <div className="status-dropdown">
          <label htmlFor="status">Change Status:</label>
          <select
            id="status"
            onChange={(e) => handleStatusChange(e.target.value)}
            defaultValue=""
          >
            <option value="" disabled>
              Select Status
            </option>
            <option value="Processing">Processing</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
      </div>
      <table className="orders-table">
        <thead>
          <tr>
            <th></th>
            <th>Order ID</th>
            <th>Product Name</th>
            <th>Date</th>
            <th>Customer Name</th>
            <th>Status</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.orderId} className="rounded-row">
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(order)}
                  checked={selectedOrders.includes(order.orderId)}
                />
              </td>
              <td>{order.orderId}</td>
              <td>{order.productName}</td>
              <td>{order.date}</td>
              <td>{order.customerName}</td>
              <td>{order.status}</td>
              <td>{order.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedOrders.length > 0 && (
        <div className="selected-orders">
          <h2>Selected Orders</h2>
          <p>
            You have selected {selectedOrders.length} order(s). Change their status
            using the dropdown above.
          </p>
        </div>
      )}
    </div>
  );
};

export default Orders;
