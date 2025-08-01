import React from "react";
import { FaUser, FaCalendarAlt } from "react-icons/fa";

const PersonalInfoForm = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      {/* 1. Basic Info */}
      <h2 className="text-xl font-semibold text-purple-700 mb-6">
        Tell us a bit about yourself
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Name */}
        <div>
          <label className="block mb-1 font-medium text-sm">
            What is your First Name? <span className="text-purple-600">*</span>
          </label>
          <div className="relative">
            <FaUser className="absolute top-3 left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Placeholder text..."
              className="pl-10 w-full border rounded px-3 py-2"
            />
          </div>
        </div>

        {/* Last Name */}
        <div>
          <label className="block mb-1 font-medium text-sm">
            How about your Last Name? <span className="text-purple-600">*</span>
          </label>
          <div className="relative">
            <FaUser className="absolute top-3 left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Placeholder text..."
              className="pl-10 w-full border rounded px-3 py-2"
            />
          </div>
        </div>

        {/* Age */}
        <div>
          <label className="block mb-1 font-medium text-sm">
            How old are you? <span className="text-purple-600">*</span>
          </label>
          <div className="relative">
            <FaCalendarAlt className="absolute top-3 left-3 text-gray-400" />
            <input
              type="date"
              className="pl-10 w-full border rounded px-3 py-2"
            />
          </div>
        </div>

        {/* Gender */}
        <div>
          <label className="block mb-2 font-medium text-sm">
            What's your gender?
          </label>
          <div className="flex gap-4">
            {["Male", "Female"].map((gender) => (
              <label
                key={gender}
                className="flex items-center gap-2 border rounded px-4 py-2 cursor-pointer w-full justify-center 
                           hover:border-purple-400"
              >
                <FaUser />
                <input
                  type="radio"
                  name="gender"
                  value={gender}
                  className="hidden peer"
                />
                <span className="peer-checked:text-purple-700">{gender}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-8">
        <label className="block mb-2 font-medium text-sm">
          Bio Information
          <span className="text-[10px]">
            ( This will appear on your Profile page)
          </span>
        </label>
        <textarea className="w-full border-gray-700" rows={6} />
      </div>

      {/* Divider */}
      <hr className="my-10" />

      {/* 2. Detailed Info */}
      <h2 className="text-xl font-semibold text-purple-700 mb-6">
        Personal & Partner Preferences
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Marital Status */}
        <div>
          <label className="block mb-2 font-medium text-sm">
            Marital Status
          </label>
          <div className="flex gap-4">
            {["Divorced", "Widowed", "Single"].map((status) => (
              <label key={status} className="flex items-center gap-2">
                <input type="radio" name="maritalStatus" />
                <span>{status}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Children */}
        <div>
          <label className="block mb-2 font-medium text-sm">
            Do you have children?
          </label>
          <div className="flex gap-4">
            {["Yes", "No"].map((val) => (
              <label key={val} className="flex items-center gap-2">
                <input type="radio" name="haveChildren" />
                <span>{val}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Country & Emirate */}
        <div>
          <label className="block mb-1 text-sm font-medium">
            Country of Residence
          </label>
          <select className="w-full border rounded px-3 py-2">
            <option>United Arab Emirates</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">
            I reside in the Emirate of
          </label>
          <select className="w-full border rounded px-3 py-2">
            <option>Abu Dhabi</option>
          </select>
        </div>

        {/* Nationality & Background */}
        <div>
          <label className="block mb-1 text-sm font-medium">Nationality</label>
          <select className="w-full border rounded px-3 py-2">
            <option>Select Nationality</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">
            Social Background
          </label>
          <select className="w-full border rounded px-3 py-2">
            <option>Select background</option>
          </select>
        </div>
      </div>

      {/* Partner Preferences Section */}
      <h3 className="text-sm mt-8 font-bold uppercase text-purple-600 border-b pb-1 mb-4">
        Your Partner Preferences
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Partner Marital Status */}
        <div>
          <label className="block mb-2 font-medium text-sm">
            Preferred Partner's Marital Status
          </label>
          <div className="flex gap-4">
            {["Divorced", "Widowed", "Single"].map((status) => (
              <label key={status} className="flex items-center gap-2">
                <input type="radio" name="partnerStatus" />
                <span>{status}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Partner has children */}
        <div>
          <label className="block mb-2 font-medium text-sm">
            Do you prefer a partner with children?
          </label>
          <div className="flex gap-4">
            {["Yes", "No"].map((val) => (
              <label key={val} className="flex items-center gap-2">
                <input type="radio" name="partnerHasChildren" />
                <span>{val}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Partner Country & Emirate */}
        <div>
          <label className="block mb-1 text-sm font-medium">
            Partner's Country of Residence
          </label>
          <select className="w-full border rounded px-3 py-2">
            <option>United Arab Emirates</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">
            Partner's Residence
          </label>
          <select className="w-full border rounded px-3 py-2">
            <option>Abu Dhabi</option>
          </select>
        </div>

        {/* Partner Nationality & Background */}
        <div>
          <label className="block mb-1 text-sm font-medium">
            Partner’s Nationality
          </label>
          <select className="w-full border rounded px-3 py-2">
            <option>Select Nationality</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">
            Looking for a partner of what Background?
          </label>
          <select className="w-full border rounded px-3 py-2">
            <option>Bedouin</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
