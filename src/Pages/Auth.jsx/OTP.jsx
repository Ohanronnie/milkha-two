import React, { useState } from "react";
import { FaApple, FaGoogle, FaEyeSlash } from "react-icons/fa";
import CoupleImage from "../../assets/Couple.png";
import Logo from "../../assets/Logo.png";

const OTP = () => {
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleOtpChange = (index, value) => {
    if (/^\d*$/.test(value)) {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);
      if (value && index < 3) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You would validate form fields here
    setShowOtp(true); // Show OTP screen after submission
  };

  return (
    <div className="min-h-screen flex items-stretch p-4">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-10 py-8 bg-white">
        {/* Logo */}
        <div className="mb-6">
          <img src={Logo} alt="Logo" className="h-10" />
        </div>

        {!showOtp ? (
          <>
            <h2 className="text-2xl font-semibold mb-2">
              A meaningful connection is just a click away
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              By signing up, I agree to Mitha's{" "}
              <span className="text-purple-600 underline">Terms</span> and{" "}
              <span className="text-purple-600 underline">Privacy Policy</span>
            </p>

            {/* OAuth Buttons */}
            <div className="space-y-3 w-full">
              <div className="px-20 flex items-center justify-center border rounded py-2 text-sm font-medium">
                <FaApple className="mr-2" /> Sign up with Apple
              </div>
              <div className="flex items-center justify-center border rounded py-2 text-sm font-medium">
                <FaGoogle className="mr-2" /> Sign up with Google
              </div>
            </div>

            {/* Divider */}
            <div className="my-4 text-center text-gray-400 text-sm">
              OR SIGN UP WITH YOUR EMAIL
            </div>

            {/* Email Signup Form */}
            <form className="space-y-4 w-full" onSubmit={handleSubmit}>
              <div>
                <label className="text-sm font-medium">Email Address*</label>
                <input
                  type="email"
                  placeholder="hello@gmail.com"
                  required
                  className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Create a Password*
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="••••••••"
                    required
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
                    required
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
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-2">Verify your email</h2>
            <p className="text-sm text-gray-500 mb-1">
              We’ve sent a verification email to <b>khalid@gmail.com</b>
            </p>
            <p className="text-sm text-gray-500 mb-6">Please enter the code</p>

            <div className="flex justify-center gap-3 mb-6">
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  id={`otp-${idx}`}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(idx, e.target.value)}
                  className="w-12 h-12 text-center text-xl border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              ))}
            </div>

            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded mb-4">
              Next
            </button>

            <p className="text-sm text-gray-500">
              Experiencing issues receiving your code?{" "}
              <span className="text-purple-600 underline cursor-pointer">
                Resend code
              </span>
            </p>
          </>
        )}
      </div>

      {/* Right Section - Local Image */}
      <div
        className="hidden md:block md:w-1/2 bg-cover bg-center rounded-l-[40px]"
        style={{ backgroundImage: `url(${CoupleImage})` }}
      />
    </div>
  );
};

export default OTP;
