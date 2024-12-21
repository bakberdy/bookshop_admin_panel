import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import UploadFile from "../components/UploadFile";
import CurrencyDropdown from "../components/CurrencyDropdown";
import AuthorField from "../components/AuthorField";
import CategoryField from "../components/CategoryField";

const EditProductDetails = ({ book }) => {
  const [bookData, setBookData] = useState({ ...book });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (field, value) => {
    setBookData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleFileChange = (file) => {
    handleChange("imageData", file);
  };

  const handleSubmit = async () => {
    const updatedAt = new Date().toISOString();
    const updatedBookData = {
      ...bookData,
      updatedAt,
      imageUrl: bookData.imageData ? URL.createObjectURL(bookData.imageData) : "",
    };

    if (!bookData.categoryId) {
      setError("Category ID is required to update the product.");
      return;
    }

    try {
      const response = await fetch(`/categories/${bookData.categoryId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedBookData),
      });

      if (response.ok) {
        navigate("/products");
      } else {
        setError("Failed to update the product. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Edit Product Details
        </h1>
      </div>
      {error && <div className="text-red-500 mb-4">{error}</div>}
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
            labelText="Upload Product Image"
            onFileChange={(e) => handleFileChange(e.target.files[0])}
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-row gap-10">
          <div className="flex flex-col gap-5">
            <InputField
              label="Product Name"
              type="text"
              value={bookData.title}
              placeholder="Enter product name"
              onChange={(e) => handleChange("title", e.target.value)}
            />
            <AuthorField onChange={(e) => handleChange("authorId", e)} />
            <CategoryField onChange={(e) => handleChange("categoryId", e)} />
            <InputField
              label="Sale Price"
              type="number"
              value={bookData.price}
              placeholder="Enter sale price"
              onChange={(e) => handleChange("price", e.target.value)}
            />
            <InputField
              label="Discount"
              type="number"
              value={bookData.discount}
              placeholder="Enter discount"
              onChange={(e) => handleChange("discount", e.target.value)}
            />
            <InputField
              label="Stock Quantity"
              type="number"
              value={bookData.stockQuantity}
              placeholder="Enter stock quantity"
              onChange={(e) => handleChange("stockQuantity", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-5">
            <InputField
              label="Description"
              type="textarea"
              value={bookData.description}
              placeholder="Enter description"
              onChange={(e) => handleChange("description", e.target.value)}
            />
            <InputField
              label="Published Year"
              type="number"
              value={bookData.publishedYear}
              placeholder="Enter published year"
              onChange={(e) => handleChange("publishedYear", e.target.value)}
            />
            <div>
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
                selectedCurrency={bookData.currency}
              />
            </div>
            <div className="flex flex-row mt-8 gap-4">
              <button
                style={{ backgroundColor: "#c8c8c8" }}
                className="cursor-pointer transition-all text-black px-6 py-2 rounded-lg border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
                onClick={() => setBookData({ ...book })}
              >
                Cancel
              </button>
              <button
                className="cursor-pointer transition-all bg-yellow-500 text-black px-6 py-2 rounded-lg border-yellow-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
                onClick={handleSubmit}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProductDetails;
