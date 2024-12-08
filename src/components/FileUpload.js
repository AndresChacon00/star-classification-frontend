'use client';

import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSumit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    // Aca debe ir la solicitud a StarAPI
    try {
      const res = await axios.post('http://127.0.0.1:5000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setResponse(res.data);
      console.log('Respuesta de starAPI: ', res.data);
    } catch (error) {
      console.error('Error subiendo el archivo', error);
    }

    console.log('Archivo subido', file);
  };

  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={handleSumit}
        className="flex flex-col items-center bg-zinc-900 p-6 rounded-lg shadow-md"
      >
        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          className="mb-4"
        />
        <button
          type="submit"
          className="bg-slate-500 text-white px-4 py-2 rounded"
        >
          Subir Archivo
        </button>
      </form>
    </div>
  );
};

export default FileUpload;
