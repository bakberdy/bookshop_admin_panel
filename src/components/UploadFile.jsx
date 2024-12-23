import React, { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDs-BX8Lon9BVFOO1TXrraoI4xJ95Rd1tU",
  authDomain: "final-fron-7199f.firebaseapp.com",
  projectId: "final-fron-7199f",
  storageBucket: "final-fron-7199f.firebasestorage.app",
  messagingSenderId: "160864198745",
  appId: "1:160864198745:web:1eb4c7a77bb97398d11148",
  measurementId: "G-2ZEXEEDRYS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const UploadFile = ({
  labelText = "Click to upload image",
  borderColor = "border-gray-300",
  bgColor = "bg-white",
  textColor = "text-gray-600",
  width = "w-72",
  height = "h-48",
  iconSize = "h-20",
  onFileUpload
}) => {
  const [fileUrl, setFileUrl] = useState("");

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload a valid image file.");
      return;
    }

    const storageRef = ref(storage, `uploads/${file.name}`);

    try {
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      setFileUrl(url);
      if (onFileUpload) onFileUpload(url);
      alert("File uploaded successfully!");
    } catch (error) {
      console.error("Error uploading file: ", error);
      alert("Error uploading file.");
    }
  };

  return (
    <div>
      <label
        className={`flex flex-col items-center justify-center ${width} ${height} cursor-pointer gap-5 border-2 border-dashed ${borderColor} ${bgColor} p-6 rounded-lg shadow-lg`}
        htmlFor="file"
      >
        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${iconSize} fill-[#003F62]`}
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
            ></path>
          </svg>
        </div>
        <div className="flex items-center justify-center">
          <span className={`text-sm font-medium ${textColor}`}>
            {labelText}
          </span>
        </div>
        <input
          type="file"
          id="file"
          className="hidden"
          onChange={handleFileChange}
          accept="image/*"
        />
      </label>
      {fileUrl && (
        <p className="mt-4 text-sm text-green-600">Uploaded File URL: <a href={fileUrl} target="_blank" rel="noopener noreferrer">{fileUrl}</a></p>
      )}
    </div>
  );
};

export default UploadFile;