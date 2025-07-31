import React from "react";
import { FaApple, FaGoogle, FaEyeSlash } from "react-icons/fa";
import CoupleImage from "../../assets/Couple.png"; // 👈 Your local image

import Logo from "../../assets/Logo.png"; // 👈 Your local image

const SignupPage = () => {
  return (
    <div className="min-h-screen flex items-stretch p-4">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-10 py-8 bg-white">
        {/* Logo */}
        <div className="mb-6">
          <img src={Logo} alt="Logo" className="h-10" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-2">
          A meaningful connection is just a click away
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          By signing up, I agree to Mitha's{" "}
          <span className="text-purple-600 underline">Terms</span> and{" "}
          <span className="text-purple-600 underline">Privacy Policy</span>
        </p>

        {/* OAuth Buttons */}
        <div className="space-y-3">
          <div className="w-full px-20 flex items-center justify-center border rounded py-2 text-sm font-medium">
            <FaApple className="mr-2" /> Sign up with Apple
          </div>
          <div className="w-full flex items-center justify-center border rounded py-2 text-sm font-medium">
            <FaGoogle className="mr-2" /> Sign up with Google
          </div>
        </div>

        {/* Divider */}
        <div className="my-4 text-center text-gray-400 text-sm">
          OR SIGN UP WITH YOUR EMAIL
        </div>

        {/* Email Signup Form */}
        <form className="space-y-4">
          <div>
            <label className="text-sm font-medium">Email Address*</label>
            <input
              type="email"
              placeholder="hello@gmail.com"
              className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Create a Password*</label>
            <div className="relative">
              <input
                type="password"
                placeholder="••••••••"
                className="w-full border rounded px-3 py-2 mt-1 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <FaEyeSlash className="absolute right-3 top-3 text-gray-400" />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Confirm Password*</label>
            <div className="relative">
              <input
                type="password"
                placeholder="••••••••"
                className="w-full border rounded px-3 py-2 mt-1 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <FaEyeSlash className="absolute right-3 top-3 text-gray-400" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded"
          >
            Next
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="#" className="text-purple-600 font-medium">
            Login
          </a>
        </p>
      </div>

      {/* Right Section - Local Image */}
      <div
        className="hidden md:block md:w-1/2 bg-cover bg-center rounded-l-[40px]"
        style={{ backgroundImage: `url(${CoupleImage})` }}
      />
    </div>
  );
};

export default SignupPage;
