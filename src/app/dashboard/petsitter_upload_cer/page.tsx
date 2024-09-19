"use client";

import { useState } from 'react';
import Image from "next/image";

const UploadCertificate = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert('Please select a file to upload.');
      return;
    }

    alert(`File selected: ${selectedFile.name}`);
  };

  const handleBack = () => {
    alert('Back button clicked!');  // Replace this with your actual navigation logic
  };

  return (
    <div className="upload-container">
      <h2>Upload your certificate</h2>
      <p>We will use this to verify your qualifications and eligibility</p>

      <div className="upload-box">
        
        <label htmlFor="file-upload" className="file-upload-label">
          <div className="upload-image">
            <Image src="/Upload file.png" width={150} height={150} alt="Upload file" className="icon" />
          </div>
          {selectedFile ? selectedFile.name : 'Click here to upload'}
        </label>
        
        <input
          id="file-upload"
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          className="file-input"
          style={{ display: 'none' }}
        />

        <div className="file-info">
          <h4>{selectedFile ? selectedFile.name : 'No file added'}</h4>
          <h5>Supports: pdf</h5>
        </div>
      </div>

      <div className="button-container">
        <button onClick={handleBack} className="back-button">
          Back
        </button>
        <button onClick={handleUpload} className="upload-button">
          Done
        </button>
      </div>

      <style>{`
        h2 {
          font-weight: bold;
          font-size: 30px;
        }
        p {
          color: grey;
          font-size: 15px;
        }
        .upload-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          max-width: 500px;
          margin: 0 auto;
        }

        .upload-box {
          border: 2px dashed #ccc;
          width: 500px;
          padding: 50px;
          margin-bottom: 25px;
          position: relative;
          text-align: center;
        }

        .upload-image {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .file-upload-label {
          display: block;
          cursor: pointer;
          color: #0070f3;
          position: relative;
        }

        .file-upload-label:hover {
          opacity: 0.8;
        }

        .file-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          margin-left: 20px;
          margin-bottom: 20px;
        }

        .upload-button{
          background-color: #0070f3;
          color: white;
          padding: 10px 20px;
          border: none;
          cursor: pointer;
          border-radius: 5px;
        }

        .back-button {
          color: grey;
          font-weight: bold;   
          padding: 10px 20px;
          border: none;
          cursor: pointer;
          border-radius: 5px;
        }

        .upload-button:hover {
          opacity: 0.8;
        }

        h4 {
          color: black;
          font-size: 15px;
        }

        h5 {
          color: grey;
          font-size: 15px;
          margin: 0;
        }

        .button-container {
          display: flex;
          justify-content: center;
          gap: 20px;
          width: 100%;
          padding: 0 20px; 
        }

      `}</style>
    </div>
  );
};

export default UploadCertificate;
