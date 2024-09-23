'use client';

import { useState } from "react";
import Link from 'next/link'; // Import Link from next/link

const Profile = () => {
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [additionalImage, setAdditionalImage] = useState<File | null>(null);
  const [displayName, setDisplayName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [about, setAbout] = useState("");
  const [experience, setExperience] = useState("");
  const [quote, setQuote] = useState("");

  // Handle profile image change
  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setProfileImage(e.target.files[0]);
    }
  };

  // Handle additional image change
  const handleAdditionalImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setAdditionalImage(e.target.files[0]);
    }
  };

  // Submit form data and display success alert
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("displayName", displayName);
    formData.append("phoneNumber", phoneNumber);
    formData.append("address", address);
    formData.append("about", about);
    formData.append("experience", experience);
    formData.append("quote", quote);

    if (profileImage) {
      formData.append("profileImage", profileImage);
    }

    if (additionalImage) {
      formData.append("additionalImage", additionalImage);
    }

    // Log the form data (you can replace this with actual submission logic)
    console.log({
      displayName,
      phoneNumber,
      address,
      about,
      experience,
      quote,
      profileImage,
      additionalImage,
    });

    // Show an alert after the form data is logged
    alert("Profile saved successfully!");
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      {/* Back Button */}
      <div className="mb-6">
      <Link href="/dashboard/home" style={{color:'#1C7DBB'}} className="flex items-center text-blue-600 hover:text-blue-800 font-semibold mb-1">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 mr-2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
    Back
  </Link>
</div>


      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Left Side - Profile Picture & Basic Info */}
        <div className="space-y-4">
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="w-28 h-28 rounded-full border border-gray-300 overflow-hidden">
                {profileImage ? (
                  <img
                    src={URL.createObjectURL(profileImage)}
                    alt="Profile Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}
              </div>
              <div className="mt-2 text-center">
                <label className="cursor-pointer text-blue-600">
                  <input type="file" accept="image/*" className="hidden" onChange={handleProfileImageChange} />
                  Upload Profile Image
                </label>
                {profileImage && (
                  <button
                    type="button"
                    className="block text-red-500 mt-1"
                    onClick={() => setProfileImage(null)}
                  >
                    Delete Image
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Display Name */}
          <div>
            <label style={{ color: '#1C7DBB' }} className="block text-gray-700 text-sm font-semibold mb-1">Display Name</label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label style={{ color: '#1C7DBB' }} className="block text-gray-700 text-sm font-semibold mb-1">Phone Number</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Address */}
          <div>
            <label style={{ color: '#1C7DBB' }} className="block text-gray-700 text-sm font-semibold mb-1 ">Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Right Side - About, Experience, Quote */}
        <div className="col-span-2 space-y-4">
          {/* About */}
          <div>
            <label style={{ color: '#1C7DBB' }} className="block text-gray-700 text-sm font-semibold mb-1">About</label>
            <textarea
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
            />
          </div>

          {/* Experience */}
          <div>
            <label style={{ color: '#1C7DBB' }} className="block text-gray-700 text-sm font-semibold mb-1">My Experience</label>
            <textarea
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
            />
          </div>

          {/* Quote */}
          <div>
            <label style={{ color: '#1C7DBB' }} className="block text-gray-700 text-sm font-semibold mb-1">Quote</label>
            <textarea
              value={quote}
              onChange={(e) => setQuote(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={2}
            />
          </div>
        </div>

        {/* Bottom Image Upload */}
        <div className="col-span-3 flex justify-center mt-6">
          <div className="w-full max-w-xs text-center">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              
            </label>
            <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg relative">
              <input
                type="file"
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleAdditionalImageChange}
                accept="image/*"
              />
              <div className="text-gray-500 flex items-center justify-center">
                {additionalImage ? (
                  <img
                    src={URL.createObjectURL(additionalImage)}
                    alt="Additional Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-2xl">+</span>
                )}
              </div>
              {!additionalImage && <div className="mt-2 text-blue-600">Upload Image</div>}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="col-span-3 flex justify-center mt-8">
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
