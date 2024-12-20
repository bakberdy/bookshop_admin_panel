import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const [users, setUsers] = useState([
    {
      userId: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+123456789",
      role: "USER",
      isActive: true,
      avatarUrl: "https://via.placeholder.com/200",
      createdAt: "2023-01-15T10:20:30",
    },
    {
      userId: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "+987654321",
      role: "ADMIN",
      isActive: false,
      avatarUrl: "https://via.placeholder.com/200",
      createdAt: "2023-02-20T14:50:00",
    },
    {
      userId: 3,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      phone: "+111222333",
      role: "USER",
      isActive: true,
      avatarUrl: "https://via.placeholder.com/200",
      createdAt: "2023-03-10T09:15:45",
    },
  ]);

  const user = users.find((u) => u.userId === parseInt(userId));

  if (!user) {
    return (
      <div className="text-center text-xl text-red-500 mt-10">
        <p>User not found</p>
        <a href="/users" className="text-blue-500 underline">
          Go back to users
        </a>
      </div>
    );
  }

  const handleDelete = () => {
    const updatedUsers = users.filter((u) => u.userId !== user.userId);
    setUsers(updatedUsers);
    navigate("/users");
  };

  const toggleRole = () => {
    setUsers(
      users.map((u) =>
        u.userId === user.userId
          ? { ...u, role: u.role === "USER" ? "ADMIN" : "USER" }
          : u
      )
    );
  };

  return (
    <div className="w-full h-full p-6 bg-[#c4c9e0]">
      <div className="bg-white rounded-lg p-8 border-r-8">
        <div className="p-8">
          <div className="flex items-center space-x-6">
            <img
              src={user.avatarUrl}
              alt="Avatar"
              className="w-36 h-36 rounded-full border-4 border-gray-300"
            />
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold">{user.name}</h1>
              <p className="text-lg text-gray-600 mt-1">{user.role}</p>
              <p
                className={`mt-2 text-base font-semibold ${
                  user.isActive ? "text-green-600" : "text-red-600"
                }`}
              >
                {user.isActive ? "Active" : "Inactive"}
              </p>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-700">
              User Details
            </h2>
            <div className="mt-4 space-y-2">
              <p>
                <strong>ID:</strong> {user.userId}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Phone:</strong> {user.phone}
              </p>
              <p>
                <strong>Created At:</strong>{" "}
                {new Date(user.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
          <div className="mt-8 flex justify-between items-center">
            <button
              onClick={toggleRole}
              className="bg-yellow-500 text-white px-5 py-3 rounded-lg hover:bg-yellow-600 transition"
            >
              Change Role to {user.role === "USER" ? "Admin" : "User"}
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-5 py-3 rounded-lg hover:bg-red-600 transition"
            >
              Delete User
            </button>
          </div>
          <div className="mt-6 text-right">
            <a
              href="/users"
              className="text-white bg-blue-500 px-5 py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Go Back
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
