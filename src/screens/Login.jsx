import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-svh w-svw flex align-middle justify-center mt-36">
      <div className="h-96 flex items-center justify-center">
        <div className="relative">
          <div className="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r from-[#003f62] via-black-500 to-[#003f62] shadow-lg animate-pulse" />
          <div
            id="form-container"
            className="bg-white p-16 rounded-lg shadow-2xl w-80 relative z-10 transform transition duration-500 ease-in-out"
          >
            <h2
              id="form-title"
              className="text-center text-3xl font-bold mb-10 text-gray-800"
            >
              Login
            </h2>
            <form className="space-y-5">
              <input
                className="w-full h-12 border border-gray-800 px-3 rounded-lg"
                placeholder="Email"
                id
                name
                type="text"
              />
              <input
                className="w-full h-12 border border-gray-800 px-3 rounded-lg"
                placeholder="Password"
                id
                name
                type="password"
              />
              <div className="mt-3">
                <Link to="/" key="1">
                  <button className="w-full h-12 bg-[#003f62] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Sign in
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
