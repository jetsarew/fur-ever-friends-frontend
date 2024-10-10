"use client";

import Link from "next/link";
import { FormEvent } from "react";

export default function ProfilePage() {
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imgElement = document.getElementById(
          "profile-image"
        ) as HTMLImageElement;
        if (imgElement) {
          imgElement.src = reader.result as string;
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (event: FormEvent) => {
    event.preventDefault();
    const displayName = (
      document.getElementById("display-name") as HTMLInputElement
    ).value;
    const phoneNumber = (
      document.getElementById("phone-number") as HTMLInputElement
    ).value;
    const imgSrc = (
      document.getElementById("profile-image") as HTMLImageElement
    ).src;

    console.log("Display Name:", displayName);
    console.log("Phone Number:", phoneNumber);
    console.log("Image URL:", imgSrc);
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      {/* Back Button */}
      <div className="mb-6">
        <Link
          href="/dashboard/home"
          className="text-button flex items-center text-bright-blue hover:text-dark-blue mb-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </Link>
      </div>

      <div>
        <form
          onSubmit={handleSave}
          className="flex flex-col items-center gap-8"
        >
          <div>
            <label htmlFor="upload-image">
              <div className="w-[150px] h-[150px] rounded-full border-4 border-bright-blue overflow-hidden items-center">
                <img
                  id="profile-image"
                  src="/default-profile.png"
                  className="w-full h-full object-cover items-center "
                />
              </div>
              <input
                id="upload-image"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />

              <div className="flex flex-col justify-center items-center gap-[10px] w-[200px] mt-[10px]">
                <button
                  type="button"
                  onClick={() =>
                    document.getElementById("upload-image")?.click()
                  }
                  className="px-[24px] py-[8px] text-center text-button text-white bg-bright-blue rounded-lg"
                >
                  Upload image
                </button>
              </div>
            </label>
          </div>

          <div className="mb-[15px] text-left text-subheading2 text-dark-blue">
            <label>Display Name</label>
            <input
              id="display-name"
              type="text"
              className="text-body py-[15px] px-[18px] border border-[#D9D9D9] rounded-lg w-full mt-[10px]"
            />
          </div>

          <div className="mb-[15px] text-left text-subheading2 text-dark-blue">
            <label>Phone Number</label>
            <input
              id="phone-number"
              type="text"
              className="text-body py-[15px] px-[18px] border border-[#D9D9D9] rounded-lg w-full mt-[10px]"
            />
          </div>

          <div className="col-span-3 flex justify-center">
            <button
              type="submit"
              className="text-button bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
