"use client";

import { useState } from 'react';

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  accountType: 'petOwner' | 'petSitter';
}

const AccountForm = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    accountType: 'petOwner',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAccountTypeChange = (accountType: 'petOwner' | 'petSitter') => {
    setFormData({ ...formData, accountType });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Handle form submission here (API call, etc.)
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="signup-container">
        <h2>Create your Account</h2>
        <div>
          <button
            type="button"
            onClick={() => handleAccountTypeChange('petOwner')}
            className={formData.accountType === 'petOwner' ? 'active' : ''}
          >
            I am a pet owner
          </button>
          <button
            type="button"
            onClick={() => handleAccountTypeChange('petSitter')}
            className={formData.accountType === 'petSitter' ? 'active' : ''}
          >
            I am a pet sitter
          </button>
        </div>

        {/* Conditionally render based on account type */}
        {formData.accountType === 'petSitter' && (
          <div className='petsitter'>
            <label htmlFor="username" className='input-group'>Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your name"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <label htmlFor="email" className='input-group'>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="phoneNumber" className='input-group'>Phone Number</label>
            <input
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

        {formData.accountType === 'petOwner' && (
          <div className='customer'>
            <label htmlFor="username" className='input-group'>Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your name"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <label htmlFor="email" className='input-group'>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="password" className='input-group'>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label htmlFor="confirmPassword" className='input-group'>Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <label htmlFor="phoneNumber" className='input-group'>Phone Number</label>
            <input
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

        <button type="submit" className='confirm-btn'>Create Account</button>
      </div>

      <style jsx>{`
        h2 {
          margin-bottom: 20px;
          font-weight: bold;
          font-size: 20px;
        }

        .signup-container {
          max-width: 400px;
          margin: 100px auto;
          padding: 20px;
          text-align: center;
          background-color: transparent;
          border-radius: 10px;
        }

        button {
          margin: 10px;
          padding: 10px 20px;
          background-color: white;
          border: none;
          cursor: pointer;
        }

        button.active {
          color: #0070f3;
          text-decoration: underline;
          font-weight: bold;
        }

        label {
          display: block;
          margin-bottom: 5px;
          font-size: 14px;
        }

        input {
          display: block;
          margin: 10px 0;
          padding: 8px;
          width: 100%;
          box-sizing: border-box;
        }

        .input-group {
          margin-bottom: 15px;
          text-align: left;
          color: #1C7DBB;
          font-weight: bold;
        }

        .confirm-btn {
          width: 50%;
          padding: 10px;
          font-size: 16px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          text-align: center;
        }

        .confirm-btn:hover {
          background-color: #005bb5;
        }
      `}</style>
    </form>
  );
};

export default AccountForm;
