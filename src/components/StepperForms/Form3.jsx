import React from "react";

const PhysicalAppearanceForm = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <h2 className="text-xl font-semibold text-purple-700 mb-6">
        Tell us about your Physical Appearance
      </h2>

      {/* Your Physical Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Height */}
        <div>
          <label className="block mb-1 font-medium text-sm">
            What is your Height?
          </label>
          <input
            type="text"
            placeholder="Input your height"
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Weight */}
        <div>
          <label className="block mb-1 font-medium text-sm">
            What is your weight?
          </label>
          <input
            type="text"
            placeholder="Input your weight"
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Skin Color */}
        <div>
          <label className="block mb-1 font-medium text-sm">Skin Color</label>
          <select className="w-full border px-3 py-2 rounded">
            <option>Select your skin color</option>
            <option>Fair</option>
            <option>Medium</option>
            <option>Dark</option>
          </select>
        </div>

        {/* Eye Color */}
        <div>
          <label className="block mb-1 font-medium text-sm">
            What's your Eye Color
          </label>
          <select className="w-full border px-3 py-2 rounded">
            <option>Blue</option>
            <option>Green</option>
            <option>Brown</option>
            <option>Black</option>
          </select>
        </div>

        {/* Hair Color */}
        <div>
          <label className="block mb-1 font-medium text-sm">Hair Color</label>
          <select className="w-full border px-3 py-2 rounded">
            <option>Black</option>
            <option>Brown</option>
            <option>Blonde</option>
            <option>Red</option>
            <option>Grey</option>
          </select>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-purple-200" />
      <h3 className="text-sm font-bold uppercase text-purple-600 mb-4">
        Your Partner Preferences
      </h3>

      {/* Partner Preferences */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Height */}
        <div>
          <label className="block mb-1 font-medium text-sm">
            Preferred Partner's Height?
          </label>
          <input
            type="text"
            placeholder="Input your height"
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Weight */}
        <div>
          <label className="block mb-1 font-medium text-sm">
            Preferred Partner's weight?
          </label>
          <input
            type="text"
            placeholder="Input your weight"
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Skin Color */}
        <div>
          <label className="block mb-1 font-medium text-sm">
            Preferred Partner's Skin Color
          </label>
          <select className="w-full border px-3 py-2 rounded">
            <option>Select skin color</option>
            <option>Fair</option>
            <option>Medium</option>
            <option>Dark</option>
          </select>
        </div>

        {/* Eye Color */}
        <div>
          <label className="block mb-1 font-medium text-sm">
            Preferred Partner's Eye Color
          </label>
          <select className="w-full border px-3 py-2 rounded">
            <option>Blue</option>
            <option>Green</option>
            <option>Brown</option>
            <option>Black</option>
          </select>
        </div>

        {/* Hair Color */}
        <div>
          <label className="block mb-1 font-medium text-sm">
            Preferred Partner's Hair Color
          </label>
          <select className="w-full border px-3 py-2 rounded">
            <option>Black</option>
            <option>Brown</option>
            <option>Blonde</option>
            <option>Red</option>
            <option>Grey</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PhysicalAppearanceForm;
