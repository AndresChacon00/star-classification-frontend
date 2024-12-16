'use client';

import React, { useState } from 'react';
import axios from 'axios';
import Papa from 'papaparse';
import Image from 'next/image';
const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [newCsv, setNewCsv] = useState(null);

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
      const predictions = res.data.predictions;
      setResponse(predictions);
      console.log('Respuesta de starAPI: ', predictions);

      // Procesar el archivo CSV y agregar la respuesta de la API como una nueva columna
      Papa.parse(file, {
        complete: (results) => {
          const data = results.data;
          const newData = data.map((row, index) => {
            if (index === 0) {
              return [...row, 'Star type'];
            }
            return [...row, predictions[index - 1]];
          });
          const newCsv = Papa.unparse(newData);
          setNewCsv(newCsv);
        },
      });
    } catch (error) {
      console.error('Error subiendo el archivo', error);
    }

    console.log('Archivo subido', file);
  };

  const downloadCsv = () => {
    if (!newCsv) return;
    const blob = new Blob([newCsv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'star_types.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    
    <div className="items-center justify-center flex flex-col">

      <div className='w-1/2 h-1/2 justify-center items-center mt-20'>
        <form
          onSubmit={handleSumit}
          className="flex flex-col items-center bg-zinc-900 p-5" id='cuadro-fuera'
        >

        <label className="custom-file-upload m-4" id='cuadro-dentro'>
          <input
            type="file"
            accept=".csv"
            onChange={handleFileChange}
          />
             <div className="flex flex-col items-center w-full h-full justify-center">
              {file ? (
                <>
                  <img src="images/csv-green.svg" width="60" height="60" alt="Archivo cargado" className="mt-20" />
                  <p className="absolute mb-10">{file.name}</p>
                </>
              ) : (
                <img src="images/csv-file-icon 1.svg" width="90" height="90" alt="Seleccionar archivo" className="icon" />
              )}
            </div>
        </label>

          <button
            type="submit"
            className="bg-slate-500 text-white px-4 py-2 rounded mt-4"
          >
            Subir Archivo
          </button>
        </form>

        {response && (
          <div className="mt-4 p-4 bg-gray rounded shadow-md">
            <h2 className="text-lg font-bold">Respuesta de StarAPI</h2>
            <pre className="text-sm text-gray-300">
              {JSON.stringify(response, null, 2)}
            </pre>
            <button
              onClick={downloadCsv}
              className="mt-4 bg-green-800 text-white px-4 py-2 rounded"
            >
              Descargar estrellas clasificadas
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
