import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CurrencyDropdown from "../components/CurrencyDropdown";
import InputField from "../components/InputField";
import UploadFile from "../components/UploadFile";
import AuthorField from "../components/AuthorField";
import CategoryField from "../components/CategoryField";
import axios from "axios";

const NewProductAdding = () => {
  const navigate = useNavigate();
  const [bookData, setBookData] = useState({
    title: "",
    authorId: "",
    categoryId: "",
    price: "",
    discount: "",
    stockQuantity: "",
    currency: "KZT",
    description: "",
    publishedYear: "",
    imageData: null,
    createdAt: Date.now().toString(),
    updatedAt: Date.now().toString(),
  });
  const [error, setError] = useState("");

  const handleChange = (field, value) => {
    setBookData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleFileChange = (url) => {
    handleChange("imageData", url);
  };

  const handleSubmit = async () => {
    try {
      const currentDate = new Date().toISOString();
      const bookWithTimestamps = {
        ...bookData,
        createdAt: currentDate,
        updatedAt: currentDate,
      };

      const payload = {
        title: bookWithTimestamps.title,
        authorId: bookWithTimestamps.authorId,
        categoryId: "35", //bookWithTimestamps.categoryId,
        price: bookWithTimestamps.price,
        discount: bookWithTimestamps.discount,
        stockQuantity: bookWithTimestamps.stockQuantity,
        description: bookWithTimestamps.description,
        publishedYear: bookWithTimestamps.publishedYear,
        imageUrl: bookWithTimestamps.imageData,
      };

      const response = await axios.post(
        "http://localhost:8080/api/admin/books",
        payload
      );
      console.log("Book saved successfully:", response.data);

      navigate("/products");
    } catch (error) {
      console.error("Error saving book:", error);
      setError("Failed to save the book. Please try again.");
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Add New Book</h1>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          <img
            src={
              bookData.imageData
                ? bookData.imageData
                : "https://cdn2.iconfinder.com/data/icons/picons-basic-3/57/basic3-099_cloud_upload-1024.png"
            }
            alt="Book Preview"
            className="w-72 h-95 rounded-lg shadow-md mb-5"
          />
          <UploadFile
            labelText="Upload Book Image"
            onFileUpload={(e) => handleFileChange(e)}
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-10">
          <div className="mr-0 lg:mr-14 flex flex-col gap-2">
            <InputField
              label="Title"
              type="text"
              placeholder="Enter title"
              onChange={(e) => handleChange("title", e.target.value)}
            />
            <AuthorField onChange={(e) => handleChange("authorId", e)} />
            <CategoryField
              onChange={(e) => {
                handleChange("categoryId", e);
                console.log("add page: " + e);
              }}
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
                    title: "",
                    authorId: "",
                    categoryId: "",
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
