"use client";

import { useState } from "react";

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  accountType: "petOwner" | "petSitter";
}

const AccountForm = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    accountType: "petOwner",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAccountTypeChange = (accountType: "petOwner" | "petSitter") => {
    setFormData({ ...formData, accountType });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Handle form submission here (API call, etc.)
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col w-[506px] gap-[32px] items-center mx-auto">
        <h2 className="text-header text-center">Create your Account</h2>
        <div className="flex px-[16px] justify-center items-center gap-[20px]">
          <button
            type="button"
            onClick={() => handleAccountTypeChange("petOwner")}
            className={`text-button text-lg ${
              formData.accountType === "petOwner"
                ? "text-dark-blue underline font-semibold"
                : "text-gray-400"
            }`}
          >
            I am a pet owner
          </button>
          <button
            type="button"
            onClick={() => handleAccountTypeChange("petSitter")}
            className={`text-button text-lg ${
              formData.accountType === "petSitter"
                ? "text-dark-blue underline"
                : "text-gray-400"
            }`}
          >
            I am a pet sitter
          </button>
        </div>

        {/* Conditionally render based on account type */}
        {formData.accountType === "petSitter" && (
          <div className="flex flex-col  gap-[10px] w-[442px]">
            <label
              htmlFor="username"
              className="text-subheading2 text-dark-blue"
            >
              Username
            </label>
            <input
              className="text-body py-[15px] px-[18px] border border-[#D9D9D9] rounded-lg"
              type="text"
              id="username"
              name="username"
              placeholder="Enter your name"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <label htmlFor="email" className="text-subheading2 text-dark-blue">
              Email
            </label>
            <input
              className="text-body py-[15px] px-[18px] border border-[#D9D9D9] rounded-lg"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="phoneNumber"
              className="text-subheading2 text-dark-blue"
            >
              Phone Number
            </label>
            <input
              className="text-body py-[15px] px-[18px] border border-[#D9D9D9] rounded-lg"
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter your PhoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
        )}

        {formData.accountType === "petOwner" && (
          <div className="flex flex-col  gap-[10px] w-[442px]">
            <label
              htmlFor="username"
              className="text-subheading2 text-dark-blue"
            >
              Username
            </label>
            <input
              className="text-body py-[15px] px-[18px] border border-[#D9D9D9] rounded-lg"
              type="text"
              id="username"
              name="username"
              placeholder="Enter your name"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <label htmlFor="email" className="text-subheading2 text-dark-blue">
              Email
            </label>
            <input
              className="text-body py-[15px] px-[18px] border border-[#D9D9D9] rounded-lg"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="password"
              className="text-subheading2 text-dark-blue"
            >
              Password
            </label>
            <input
              className="text-body py-[15px] px-[18px] border border-[#D9D9D9] rounded-lg"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="confirmPassword"
              className="text-subheading2 text-dark-blue"
            >
              Confirm Password
            </label>
            <input
              className="text-body py-[15px] px-[18px] border border-[#D9D9D9] rounded-lg"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="phoneNumber"
              className="text-subheading2 text-dark-blue"
            >
              Phone Number
            </label>
            <input
              className="text-body py-[15px] px-[18px] border border-[#D9D9D9] rounded-lg"
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter your PhoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
        )}

        <div className="flex flex-col items-center gap-8">
          <button
            type="submit"
            className="px-6 py-4 text-button text-white bg-bright-blue rounded-lg"
          >
            {formData.accountType === "petOwner"
              ? "Create Account"
              : "Continue"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default AccountForm;
