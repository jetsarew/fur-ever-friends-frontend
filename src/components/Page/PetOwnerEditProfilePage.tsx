"use client";
import { getAttachmentSrc } from "@/hooks/useImage";
import { useAppSelector } from "@/store/hooks";
import Image from "next/image";
import { FormEvent } from "react";

export default function PetOwnerEditProfilePage() {
  const userData = useAppSelector((state) => state.auth.user);

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
    <div className="container mx-auto">
      <div>
        <form
          onSubmit={handleSave}
          className="flex flex-col items-center gap-8"
        >
          <div>
            <label htmlFor="upload-image" className="flex flex-col items-center">
              <div className="w-[150px] h-[150px] rounded-full border-4 border-bright-blue overflow-hidden items-center">
                <Image
                  id="profile-image"
                  src={userData?.avatar ? getAttachmentSrc(userData.avatar) : "/default_profile.jpg"}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover items-center "
                  alt="profile image"
                />
              </div>
              <input
                id="upload-image"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />

              <div className="flex flex-col justify-center items-center w-[200px] mt-4">
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

          <div className="w-[680px] text-left text-subheading2">
            <label className="text-dark-blue">First Name</label>
            <input
              id="firstName"
              type="text"
              className="text-body py-[15px] px-[18px] border border-[#D9D9D9] rounded-lg w-full mt-[10px]"
            />
          </div>

          <div className="w-[680px] text-left text-subheading2">
            <label className="text-dark-blue">Last Name</label>
            <input
              id="lastName"
              type="text"
              className="text-body py-[15px] px-[18px] border border-[#D9D9D9] rounded-lg w-full mt-[10px]"
            />
          </div>

          <div className="w-[680px] text-left text-subheading2">
            <label className="text-dark-blue">Phone Number</label>
            <input
              id="phone-number"
              type="text"
              className="text-body py-[15px] px-[18px] border border-[#D9D9D9] rounded-lg w-full mt-[10px]"
            />
          </div>

          <div className="col-span-3 flex justify-center">
            <button
              type="submit"
              className="text-button bg-bright-green text-white px-6 py-4 rounded-lg"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}