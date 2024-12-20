import React from "react";

const InputField = ({ label, type = "text", placeholder = "", onChange}) => {
  return (
    <div className="flex flex-col w-48">
      <label
        htmlFor={label}
        className="block mb-1 text-sm font-bold text-gray-700 transition-colors duration-300"
      >
        {label}
      </label>
      <input
      onChange={onChange}
        id={label}
        name={label}
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        className="w-full h-11 px-4 bg-gray-100 rounded-md border-2 border-transparent text-base text-gray-900 focus:outline-none focus:border-gray-800 focus:bg-white focus:text-gray-900 transition-colors duration-300"
      />
    </div>
  );
};

export default InputField;
