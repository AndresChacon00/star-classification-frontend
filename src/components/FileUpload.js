'use client';

import { formatDynamicAPIAccesses } from 'next/dist/server/app-render/dynamic-rendering';
import React, { useState } from 'react';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSumit = (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    // Aca debe ir la solicitud a StarAPI

    console.log('Archivo subido', file);
  };

  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={handleSumit}
        className="flex flex-col items-center bg-white p-6 rounded-lg"
      >
        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          className="mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Subir Archivo
        </button>
      </form>
    </div>
  );
};

export default FileUpload;
