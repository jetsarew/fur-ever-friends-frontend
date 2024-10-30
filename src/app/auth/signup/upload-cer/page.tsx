"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { qualificationService } from "@/services/qualification.service";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/store/hooks";
import { Toast } from "@/components/Toast/Toast";
import { useQualificationStep } from "@/hooks/useQualificationStep";

const UploadCertificate = () => {
  const [file, setFile] = useState<File | null>(null);
  const [previewCertificateImage, setPreviewCertificateImage] = useState<string>("/Upload file.svg");

  const { email, firstName, lastName, phone } = useAppSelector((state) => state.qualification);
  const { resetStateStore }=  useQualificationStep();
  const router = useRouter();

  const onFileUploaded = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files?.length) {
      setFile(files[0]);
    }
  };

  const handleSendQualification = async () => {
    if (!file || !email || !firstName || !lastName || !phone) return;

    try {
      const response = await qualificationService.sendQualification({
        email: email,
        password: "12345678",
        firstname: firstName,
        lastname: lastName,
        phone: phone,
        file: file,
      });
      console.log(response);
      resetStateStore();
      router.push("/auth/signup/upload-done");
    } catch (error) {
      if(error) {
          Toast(error as string, "error");
      }
      else {
          Toast("Failed to send qualification.", "error");
      }
    }
  };

  const handleBack = () => {
    router.back();
  };

  useEffect(() => {
    if (file && file instanceof Blob) {
      const objectUrl = URL.createObjectURL(file);
      setPreviewCertificateImage(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [file]);

  return (
    <div className="-mt-9 flex flex-col items-center gap-8">
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
              src={previewCertificateImage}
              width={194}
              height={121}
              alt="Upload file"
              className={`${
                previewCertificateImage != "/Upload file.svg"
                  ? "w-[208px] h-[161px] object-cover"
                  : ""
              }`}
            />
            <div className="text-body text-dark-blue items-center">
              Click here to upload
            </div>
          </div>
        </label>

        <input
          id="file-upload"
          type="file"
          accept="application/png"
          onChange={onFileUploaded}
          className="file-input"
          style={{ display: "none" }}
        />

        <div className="flex items-center gap-2">
          <div className="flex flex-col items-start gap-2">
            <div className="flex flex-row items-center gap-2">
              <Image src="/Vector.svg" width={24} height={24} alt="Clip icon" />
              <h4 className="text-body text-center">
                {file ? file.name : "No file added"}
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
          type="button"
          onClick={handleSendQualification}
          className="px-[24px] py-[16px] text-button text-white bg-bright-blue rounded-lg"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default UploadCertificate;
