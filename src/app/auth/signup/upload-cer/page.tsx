"use client";

import { useState } from "react";
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
      alert("Please select a file to upload.");
      return;
    }

    alert(`File selected: ${selectedFile.name}`);
  };

  const handleBack = () => {
    alert("Back button clicked!"); // Replace this with your actual navigation logic
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col gap-[16px] items-center">
        <h2 className="text-header ">Upload your certificate</h2>
        <p className="text-body text-soft-gray">
          We will use this to verify your qualifications and eligibility
        </p>
      </div>

      <div className="w-[454px] flex flex-col pt-12 px-6 pb-8 items-start gap-8 rounded-lg shadow-custom">
        <label
          htmlFor="file-upload"
          className="mx-[56px] border-dashed border-2 border-bd-gray rounded-lg cursor-pointer"
        >
          <div className="flex flex-col w-[304px] py-[24px] items-center gap-[16px]">
            <Image
              src="/Upload file.svg"
              width={194}
              height={121}
              alt="Upload file"
              className="icon"
            />
            <div className="text-body text-dark-blue items-center">
              {selectedFile ? selectedFile.name : "Click here to upload"}
            </div>
          </div>
        </label>

        <input
          id="file-upload"
          type="file"
          accept="application/png"
          onChange={handleFileChange}
          className="file-input"
          style={{ display: "none" }}
        />

        <div className="flex items-center gap-2 w-[157px]">
          <div className="flex flex-col items-start gap-2 w-[200px]">
            <div className="flex flex-row items-center gap-2">
              <Image src="/Vector.svg" width={24} height={24} alt="Clip icon" />
              <h4 className="text-body text-center">
                {selectedFile ? selectedFile.name : "No file added"}
              </h4>
            </div>
            <h5 className="text-small text-soft-gray">Supports: png, jpg</h5>
          </div>
        </div>
      </div>

      <div className="flex w-[454px] items-center gap-[146px]">
        <button
          onClick={handleBack}
          className="text-body-bold text-soft-gray items-center"
        >
          Back
        </button>
        <button
          onClick={handleUpload}
          className="px-[24px] py-[16px] text-button text-white bg-bright-blue rounded-lg"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default UploadCertificate;
