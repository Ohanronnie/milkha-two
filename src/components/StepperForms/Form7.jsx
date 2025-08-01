import React, { useState, useRef } from "react";
import { FiUploadCloud } from "react-icons/fi";

const PhotoUploadStep = () => {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(URL.createObjectURL(selected));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(URL.createObjectURL(droppedFile));
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-12 flex flex-col items-center text-center">
      <h2 className="text-2xl font-semibold mb-8">Show off your best smile</h2>

      {/* Upload box */}
      <div
        className="w-60 h-60 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center cursor-pointer mb-4 bg-gray-50 hover:border-purple-500 transition"
        onClick={() => fileInputRef.current.click()}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        {file ? (
          <img
            src={file}
            alt="Preview"
            className="w-full h-full object-cover rounded-full"
          />
        ) : (
          <div className="flex flex-col items-center text-gray-400">
            <FiUploadCloud size={32} />
            <p className="text-sm mt-2">
              Choose a file or drag & drop it here.
            </p>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      {/* Description */}
      <p className="text-sm text-gray-500 max-w-sm mb-8">
        Upload a clear, recent photo of yourself. This increases your chances of
        making great connections.
      </p>
    </div>
  );
};

export default PhotoUploadStep;
