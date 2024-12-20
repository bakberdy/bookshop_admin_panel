import React, { useState } from "react";
import CurrencyDropdown from "../components/CurrencyDropdown";
import InputField from "../components/InputField";
import UploadFile from "../components/UploadFile";

const NewProductAdding = () => {
  const [bookData, setBookData] = useState({
    bookId: "",
    title: "",
    author: "",
    category: "",
    price: "",
    discount: "",
    stockQuantity: "",
    currency: "KZT",
    description: "",
    publishedYear: "",
    imageData: null,
  });

  const handleChange = (field, value) => {
    setBookData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleFileChange = (file) => {
    handleChange("imageData", file);
  };

  const handleSubmit = () => {
    const currentDate = new Date().toISOString();
    const bookWithTimestamps = {
      ...bookData,
      createdAt: currentDate,
      updatedAt: currentDate,
    };
    console.log("Book data to save:", bookWithTimestamps);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Add New Book</h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          <img
          
            src={
              bookData.imageData
                ? URL.createObjectURL(bookData.imageData)
                : "https://cdn2.iconfinder.com/data/icons/picons-basic-3/57/basic3-099_cloud_upload-1024.png"
            }
            alt="Book Preview"
            className="w-72 h-95 rounded-lg shadow-md mb-5"
          />
          <UploadFile
            labelText="Upload Book Image"
            onFileChange={(e) => handleFileChange(e.target.files[0])}
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-10">
          <div className="mr-0 lg:mr-14 flex flex-col gap-2">
            <InputField
              label="Book ID"
              type="text"
              placeholder="Enter book ID"
              onChange={(e) => handleChange("bookId", e.target.value)}
            />
            <InputField
              label="Title"
              type="text"
              placeholder="Enter title"
              onChange={(e) => handleChange("title", e.target.value)}
            />
            <InputField
              label="Author"
              type="text"
              placeholder="Enter author"
              onChange={(e) => handleChange("author", e.target.value)}
            />
            <InputField
              label="Category"
              type="text"
              placeholder="Enter category"
              onChange={(e) => handleChange("category", e.target.value)}
            />
            <InputField
              label="Price"
              type="number"
              placeholder="Enter price"
              onChange={(e) => handleChange("price", e.target.value)}
            />
            <InputField
              label="Discount"
              type="number"
              placeholder="Enter discount"
              onChange={(e) => handleChange("discount", e.target.value)}
            />
            <InputField
              label="Stock Quantity"
              type="number"
              placeholder="Enter stock quantity"
              onChange={(e) => handleChange("stockQuantity", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="block text-gray-700 font-medium mb-2">
              Currency
            </label>
            <CurrencyDropdown
              onCurrencyChange={(currency) =>
                setBookData((prevData) => ({
                  ...prevData,
                  currency,
                }))
              }
            />

            <InputField
              label="Description"
              type="textarea"
              placeholder="Enter description"
              onChange={(e) => handleChange("description", e.target.value)}
            />
            <InputField
              label="Published Year"
              type="number"
              placeholder="Enter published year"
              onChange={(e) => handleChange("publishedYear", e.target.value)}
            />
            <div className="flex flex-col sm:flex-row mt-8 gap-4">
              <button
                style={{ backgroundColor: "#c8c8c8" }}
                className="cursor-pointer transition-all text-black px-6 py-2 rounded-lg border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
                onClick={() =>
                  setBookData({
                    bookId: "",
                    title: "",
                    author: "",
                    category: "",
                    price: "",
                    discount: "",
                    stockQuantity: "",
                    currency: "KZT",
                    description: "",
                    publishedYear: "",
                    imageData: null,
                  })
                }
              >
                Cancel
              </button>
              <button
                className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
                onClick={handleSubmit}
              >
                Save Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProductAdding;
