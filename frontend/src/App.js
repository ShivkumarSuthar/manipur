import React, { useState, useRef } from 'react';
import axios from 'axios';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      console.error('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://localhost:8000/upload', formData);
      console.log('File uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
    handleUpload()
  };

  return (
    <section className="w-full h-screen bg-sky-500/50 flex justify-center items-center">
      <div className="w-1/2 h-1/2 bg-slate-200 flex flex-col justify-center items-center rounded-3xl shadow-sm p-10">
        <h1 className="text-3xl font-bold font-serif py-5">File Management System!</h1>
        <p className="text-[12px] pb-6">Save your files in the cloud with us..</p>

        <div>
          <button onClick={handleClick} className="bg-black px-10 py-2 text-white w-32 rounded-sm hover:bg-sky-400 hover:text-black active: ">
            Upload
          </button>
          <input
            type="file"
            className="py-4 hidden"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
        </div>
        <p className="py-3 text-blue-900 italic font-regular text-lg underline"></p>
      </div>
    </section>
  );
}

export default App;
