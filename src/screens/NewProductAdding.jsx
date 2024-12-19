import React from "react";
import InputField from "../components/InputField";
import UploadFile from "../components/UploadFile";

const NewProductAdding = () => {
  return (
    <div className="p-6">
      {/* Заголовок */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Product Details</h1>
      </div>

      {/* Форма */}
      <div className="flex flex-row gap-10">
        {/* Левая сторона */}
        <div className="flex flex-col gap-4 w-1/2">
          <img
            src="https://wallpapercave.com/wp/wp8057637.jpg"
            alt="Product"
            className="w-72 h-80 max-w-sm rounded-lg shadow-md mb-5"
          />
          <UploadFile
            labelText="Upload product image"
            onFileChange={(e) =>
              console.log("Uploaded file:", e.target.files[0])
            }
          />
        </div>

        {/* Правая сторона */}
        <div className="w-1/2 flex flex-col gap-5">
          <InputField
            label="Product Name"
            type="text"
            placeholder="Enter product name"
          />
          <InputField
            label="Category Name"
            type="text"
            placeholder="Enter category name"
          />
          <InputField
            label="Sale Price"
            type="number"
            placeholder="Enter sale price"
          />
          <InputField
            label="Stock Quantity"
            type="number"
            placeholder="Enter stock quantity"
          />
          <div className="flex flex-row h-50 mt-8 ">
        
          <button
          style={{ backgroundColor: '#c8c8c8' }}
            class="cursor-pointer transition-all text-black px-6 py-2 rounded-lg
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
          >
            Cancel
          </button>
          <button
            class="ml-2 cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
          >
            Create
          </button>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default NewProductAdding;
