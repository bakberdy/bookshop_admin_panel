import React from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const users = [
    {
      userId: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+123456789",
      role: "USER",
      isActive: true,
      avatarUrl: "https://via.placeholder.com/50",
    },
    {
      userId: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "+987654321",
      role: "ADMIN",
      isActive: false,
      avatarUrl: "https://via.placeholder.com/50",
    },
    {
      userId: 3,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      phone: "+111222333",
      role: "USER",
      isActive: true,
      avatarUrl: "https://via.placeholder.com/50",
    },
  ];

  return (
    <div className="container mx-auto p-4 bg-[#c4c9e0] h-full">
      <h1 className="text-2xl font-bold mb-4">Пользователи</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600">
                ID
              </th>
              <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600">
                Имя
              </th>
              <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600">
                Email
              </th>
              <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600">
                Телефон
              </th>
              <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600">
                Роль
              </th>
              <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600">
                Активен
              </th>
              <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600">
                Аватар
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.userId}
                className="even:bg-gray-50 hover:bg-gray-100 cursor-pointer"
                onClick={() => window.location.href = `/users/${user.userId}`}
              >
                <td className="py-2 px-4 border-b border-gray-200">
                  {user.userId}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {user.name}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {user.email}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {user.phone}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {user.role}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {user.isActive ? "Да" : "Нет"}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <img
                    src={user.avatarUrl}
                    alt="Аватар"
                    className="w-12 h-12 rounded-full"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
