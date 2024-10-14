"use client";
import Image from "next/image";
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
                  src="/default-profile.png"
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
            <label className="text-dark-blue">Display Name</label>
            <input
              id="display-name"
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
              className="text-button bg-green-500 text-white px-6 py-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}



// "use client";

// import { useState } from "react";
// import Link from "next/link"; // Import Link from next/link
// import Image from "next/image";

// const Profile = () => {
//   const [profileImage, setProfileImage] = useState<File | null>(null);
//   const [additionalImage, setAdditionalImage] = useState<File | null>(null);
//   const [displayName, setDisplayName] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [address, setAddress] = useState("");
//   const [about, setAbout] = useState("");
//   const [experience, setExperience] = useState("");
//   const [quote, setQuote] = useState("");

//   // Handle profile image change
//   const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files.length > 0) {
//       setProfileImage(e.target.files[0]);
//     }
//   };

//   // Handle additional image change
//   const handleAdditionalImageChange = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     if (e.target.files && e.target.files.length > 0) {
//       setAdditionalImage(e.target.files[0]);
//     }
//   };

//   // Submit form data and display success alert
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("displayName", displayName);
//     formData.append("phoneNumber", phoneNumber);
//     formData.append("address", address);
//     formData.append("about", about);
//     formData.append("experience", experience);
//     formData.append("quote", quote);

//     if (profileImage) {
//       formData.append("profileImage", profileImage);
//     }

//     if (additionalImage) {
//       formData.append("additionalImage", additionalImage);
//     }

//     // Log the form data (you can replace this with actual submission logic)
//     console.log({
//       displayName,
//       phoneNumber,
//       address,
//       about,
//       experience,
//       quote,
//       profileImage,
//       additionalImage,
//     });

//     // Show an alert after the form data is logged
//     alert("Profile saved successfully!");
//   };

//   return (
//     <div className="container mx-auto p-6 max-w-4xl">
//       {/* Back Button */}
//       <div className="mb-6">
//         <Link
//           href="/dashboard/home"
//           className="text-button flex items-center text-bright-blue hover:text-dark-blue mb-1"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="2"
//             stroke="currentColor"
//             className="w-6 h-6 mr-2"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M15 19l-7-7 7-7"
//             />
//           </svg>
//           Back
//         </Link>
//       </div>

//       <form
//         onSubmit={handleSubmit}
//         className="grid grid-cols-1 sm:grid-cols-3 gap-8"
//       >
//         {/* Left Side - Profile Picture & Basic Info */}
//         <div className="space-y-4">
//           <div className="flex items-center justify-center">
//             <div className="relative">
//               <div className="w-28 h-28 rounded-full border border-gray-300 overflow-hidden">
//                 {profileImage ? (
//                   <Image
//                     src={URL.createObjectURL(profileImage)}
//                     alt="Profile Preview"
//                     className="w-full h-full object-cover"
//                   />
//                 ) : (
//                   <div className=" text-body w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
//                     No Image
//                   </div>
//                 )}
//               </div>
//               <div className="mt-2 text-center">
//                 <label className=" text-button cursor-pointer text-dark-blue mb-[10px">
//                   <input
//                     type="file"
//                     accept="image/*"
//                     className="hidden"
//                     onChange={handleProfileImageChange}
//                   />
//                   Upload Profile Image
//                 </label>
//                 {profileImage && (
//                   <button
//                     type="button"
//                     className=" text-button block text-red-500 mt-1"
//                     onClick={() => setProfileImage(null)}
//                   >
//                     Delete Image
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Display Name */}
//           <div>
//             <label className=" text-body-bold block text-dark-blue mb-1 ">
//               Display Name
//             </label>
//             <input
//               type="text"
//               value={displayName}
//               onChange={(e) => setDisplayName(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Phone Number */}
//           <div>
//             <label className=" text-body-bold block text-dark-blue mb-1 ">
//               Phone Number
//             </label>
//             <input
//               type="tel"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Address */}
//           <div>
//             <label className=" text-body-bold block text-dark-blue mb-1 ">
//               Address
//             </label>
//             <input
//               type="text"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//         </div>

//         {/* Right Side - About, Experience, Quote */}
//         <div className="col-span-2 space-y-4">
//           {/* About */}
//           <div>
//             <label className=" text-body-bold block text-dark-blue mb-1 ">
//               About
//             </label>
//             <textarea
//               value={about}
//               onChange={(e) => setAbout(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               rows={4}
//             />
//           </div>

//           {/* Experience */}
//           <div>
//             <label className=" text-body-bold block text-dark-blue mb-1 ">
//               My Experience
//             </label>
//             <textarea
//               value={experience}
//               onChange={(e) => setExperience(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               rows={4}
//             />
//           </div>

//           {/* Quote */}
//           <div>
//             <label className=" text-body-bold block text-dark-blue mb-1 ">
//               Quote
//             </label>
//             <textarea
//               value={quote}
//               onChange={(e) => setQuote(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               rows={2}
//             />
//           </div>
//         </div>

//         {/* Bottom Image Upload */}
//         <div className="col-span-3 flex justify-center mt-6">
//           <div className="w-full max-w-xs text-center">
//             <label className="block text-gray-700 text-sm font-semibold mb-2"></label>
//             <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg relative">
//               <input
//                 type="file"
//                 className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
//                 onChange={handleAdditionalImageChange}
//                 accept="image/*"
//               />
//               <div className="text-gray-500 flex items-center justify-center">
//                 {additionalImage ? (
//                   <Image
//                     src={URL.createObjectURL(additionalImage)}
//                     alt="Additional Preview"
//                     className="w-full h-full object-cover"
//                   />
//                 ) : (
//                   <span className="text-2xl">+</span>
//                 )}
//               </div>
//               {!additionalImage && (
//                 <div className="text-button mt-2 text-dark-blue">
//                   Upload Image
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Submit Button */}
//         <div className="col-span-3 flex justify-center mt-8">
//           <button
//             type="submit"
//             className="text-button bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
//           >
//             Save
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Profile;

