import React, { useState } from "react";

const CurrencyDropdown = ({ onCurrencyChange }) => {
  const [selectedCurrency, setSelectedCurrency] = useState("");

  const handleSelection = (currency) => {
    setSelectedCurrency(currency);
    if (onCurrencyChange) {
      onCurrencyChange(currency);
    }
  };

  return (
    <div className="w-[200px] bg-white flex flex-col gap-1 rounded-md ">
      <label
        htmlFor="kzt"
        className="font-medium h-14 relative hover:bg-zinc-100 flex items-center px-3 gap-3 rounded-lg peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:ring-blue-300 peer-checked:ring-1 select-none"
      >
        <div className="w-5 fill-blue-500"></div>
        KZT
        <input
          type="radio"
          name="currency"
          id="kzt"
          onChange={() => handleSelection("KZT")}
          className="peer/html w-4 h-4 absolute accent-current right-3"
        />
      </label>
      <label
        htmlFor="rubl"
        className="font-medium h-14 relative hover:bg-zinc-100 flex items-center px-3 gap-3 rounded-lg peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:ring-blue-300 peer-checked:ring-1 select-none"
      >
        <div className="w-5 fill-blue-500"></div>
        ROUBLE
        <input
          type="radio"
          name="currency"
          id="rubl"
          onChange={() => handleSelection("ROUBLE")}
          className="peer/html w-4 h-4 absolute accent-current right-3"
        />
      </label>
      <label
        htmlFor="dollar"
        className="font-medium h-14 relative hover:bg-zinc-100 flex items-center px-3 gap-3 rounded-lg peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:ring-blue-300 peer-checked:ring-1 select-none"
      >
        <div className="w-5 fill-blue-500"></div>
        DOLLAR
        <input
          type="radio"
          name="currency"
          id="dollar"
          onChange={() => handleSelection("DOLLAR")}
          className="peer/html w-4 h-4 absolute accent-current right-3"
        />
      </label>
      <p className="mt-2 text-sm text-gray-600">
        Selected Currency: {selectedCurrency || "None"}
      </p>
    </div>
  );
};

export default CurrencyDropdown;
