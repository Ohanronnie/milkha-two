import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import Profile from "../../assets/Profile.png";

const suggestions = [
  {
    title: "Add More Photos",
    description: "Profiles with 5+ photos get 2x more matches",
    points: 50,
  },
  {
    title: "Complete your Bio",
    description: "A detailed bio helps others know you better",
    points: 50,
  },
  {
    title: "Hobbies Tags",
    description: "Hobbies help people find your profile easier",
    points: 50,
  },
  {
    title: "Verify Your Profile",
    description: "Verified profiles make your profile visible",
    points: 50,
  },
];

const SuggestionItem = ({ title, description, points }) => (
  <div className="flex items-center justify-between border-b py-3 last:border-0">
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-gray-500 text-[10px]">{description}</p>
    </div>
    <div className="flex items-center space-x-2">
      <span className="bg-purple-100 text-purple-600 text-[10px] font-semibold px-2 py-1 rounded-full">
        💎 {points} POINTS
      </span>
      <FiChevronRight className="text-gray-400" />
    </div>
  </div>
);

const ProfileEnhancement = () => {
  return (
    <div className="  bg-white shadow rounded-lg p-6 flex md:flex-row flex-col justify-center items-center lg:space-x-8 border border-purple-200">
      {/* Left Section - Progress + Image */}
      <div className="flex flex-col items-center text-center lg:w-1/3 w-full pb-8 lg-pb-0">
        <div className="relative">
          <img
            src={Profile}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover"
          />
        </div>
        <p className="mt-4 font-semibold text-lg">25% Complete</p>
        <p className="text-gray-600 text-sm">Your Profile is hidden.</p>
        <p className="text-xs text-gray-400 mt-1">
          Complete up to 70% of your profile to make it visible to others
        </p>
      </div>

      {/* Right Section - Suggestions */}
      <div className="lg:w-2/3 w-full">
        <div className="flex items-center mb-4 space-x-2">
          <FaUserCircle className="text-purple-600 text-xl" />
          <h2 className="text-md font-semibold">
            Profile Enhancement Suggestions
          </h2>
        </div>
        <div className="space-y-3">
          {suggestions.map((item, idx) => (
            <SuggestionItem key={idx} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileEnhancement;
