"use client";

import Link from "next/link";
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
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col w-[506px] gap-[32px] items-center mx-auto pb-[64px]">
        <h2 className="text-header text-center">Create your account</h2>
        <div className="w-[442px] flex flex-row items-center border-b border-bd-gray text-button">
          <button
            type="button"
            onClick={() => handleAccountTypeChange("petOwner")}
            className={`flex-1 py-[16px] text-button text-lg ${
              formData.accountType === "petOwner"
                ? "text-dark-blue border-b-[3px] border-dark-blue"
                : "text-gray-400"
            }`}
          >
            I am a pet owner
          </button>
          <button
            type="button"
            onClick={() => handleAccountTypeChange("petSitter")}
            className={`flex-1 py-[16px] text-button text-lg ${
              formData.accountType === "petSitter"
                ? "text-dark-blue border-b-[3px] border-dark-blue"
                : "text-gray-400"
            }`}
          >
            I am a pet sitter
          </button>
        </div>
        {formData.accountType === "petSitter" && (
          <div className="flex flex-col gap-6 w-[442px]">
            <div className="flex flex-col items-start gap-2">
              <label
                htmlFor="username"
                className="text-subheading2 text-dark-blue"
              >
                Username
              </label>
              <input
                className="w-full text-body py-[15px] px-[18px] border border-[#D9D9D9] rounded-lg"
                type="text"
                id="username"
                name="username"
                placeholder="Enter your name"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col items-start gap-2">
              <label
                htmlFor="email"
                className="text-subheading2 text-dark-blue"
              >
                Email
              </label>
              <input
                className="w-full text-body py-[15px] px-[18px] border border-[#D9D9D9] rounded-lg"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col items-start gap-2">
              <label
                htmlFor="phoneNumber"
                className="text-subheading2 text-dark-blue"
              >
                Phone Number
              </label>
              <input
                className="w-full text-body py-[15px] px-[18px] border border-[#D9D9D9] rounded-lg"
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter your PhoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        )}

        {formData.accountType === "petOwner" && (
          <div className="flex flex-col gap-6 w-[442px]">
            <div className="flex flex-col items-start gap-2">
              <label
                htmlFor="username"
                className="text-subheading2 text-dark-blue"
              >
                Username
              </label>
              <input
                className="w-full text-body py-[15px] px-[18px] border border-[#D9D9D9] rounded-lg"
                type="text"
                id="username"
                name="username"
                placeholder="Enter your name"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col items-start gap-2">
              <label
                htmlFor="email"
                className="text-subheading2 text-dark-blue"
              >
                Email
              </label>
              <input
                className="w-full text-body py-[15px] px-[18px] border border-[#D9D9D9] rounded-lg"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col items-start gap-2">
              <label
                htmlFor="password"
                className="text-subheading2 text-dark-blue"
              >
                Password
              </label>
              <input
                className="w-full text-body py-[15px] px-[18px] border border-[#D9D9D9] rounded-lg"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col items-start gap-2">
              <label
                htmlFor="confirmPassword"
                className="text-subheading2 text-dark-blue"
              >
                Confirm Password
              </label>
              <input
                className="w-full text-body py-[15px] px-[18px] border border-[#D9D9D9] rounded-lg"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col items-start gap-2">
              <label
                htmlFor="phoneNumber"
                className="text-subheading2 text-dark-blue"
              >
                Phone Number
              </label>
              <input
                className="w-full text-body py-[15px] px-[18px] border border-[#D9D9D9] rounded-lg"
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter your PhoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        )}

        <div className="w-[442px] flex flex-col items-center gap-8">
          <button
            type="submit"
            className="w-full px-6 py-4 text-button text-white bg-bright-blue rounded-lg"
          >
            {formData.accountType === "petOwner"
              ? "Create account"
              : "Continue"}
          </button>
          <div className="flex flex-row items-baseline gap-2">
            <p className="text-small text-soft-gray">Already have an account?</p>
            <Link 
              href={"/auth/login"}
              className="text-body-bold text-bright-blue underline"
            >Log in</Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AccountForm;
