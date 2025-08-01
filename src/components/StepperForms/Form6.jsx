import React, { useState } from "react";

const hobbiesList = [
  "Reading",
  "Travel",
  "Music",
  "Writing",
  "Fitness",
  "Painting",
  "Cooking",
  "Gym",
  "Baking",
  "Acting & Theatre",
  "Yoga & Meditation",
  "Swimming",
  "Dance (Ballet, Hip-Hop, Salsa)",
  "Food Blogging",
  "Public Speaking & Debating",
  "Comedy",
  "Fashion",
  "Collecting (Stamps, Coins, Sneakers, etc.)",
  "Social Volunteering & Charity Work",
  "Content Creation",
];

const partnerOptions = ["Yes", "No", "Open to any"];

const InterestsHobbiesForm = () => {
  const [selectedHobbies, setSelectedHobbies] = useState([]);

  const toggleHobby = (hobby) => {
    setSelectedHobbies((prev) =>
      prev.includes(hobby) ? prev.filter((h) => h !== hobby) : [...prev, hobby]
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <h2 className="text-xl font-semibold text-purple-700 mb-6">
        Tell us about your Interests & Hobbies
      </h2>

      {/* Hobbies Selection */}
      <div className="mb-8">
        <label className="block mb-3 font-medium text-sm">
          What are your hobbies
        </label>
        <div className="flex flex-wrap gap-3">
          {hobbiesList.map((hobby) => (
            <button
              key={hobby}
              onClick={() => toggleHobby(hobby)}
              className={`px-4 py-2 text-sm rounded-full border transition ${
                selectedHobbies.includes(hobby)
                  ? "bg-purple-100 text-purple-700 border-purple-300"
                  : "bg-white border-gray-300 hover:bg-gray-100"
              }`}
              type="button"
            >
              {hobby}
            </button>
          ))}
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-purple-200" />
      <h3 className="text-sm font-bold uppercase text-purple-600 mb-4">
        Your Partner Preferences
      </h3>

      {/* Partner Hobby Preference */}
      <div>
        <label className="block mb-2 text-sm font-medium">
          Do you want a partner with similar hobbies?
        </label>
        <div className="flex gap-6">
          {partnerOptions.map((opt) => (
            <label key={opt} className="flex items-center gap-2 text-sm">
              <input type="radio" name="partnerHobbies" />
              {opt}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InterestsHobbiesForm;
