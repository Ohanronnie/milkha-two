import React, { useState } from "react";
import { FaMapMarkerAlt, FaStar, FaHeart, FaChevronDown } from "react-icons/fa";

export default function FilterBar() {
  const [selectedFilters, setSelectedFilters] = useState({
    location: false,
    rating: false,
    price: false,
    filters: false,
    wishlist: false,
  });

  const [sortBy, setSortBy] = useState("Top matches");

  const toggleFilter = (filterName) => {
    setSelectedFilters((prev) => {
      const newFilters = Object.keys(prev).reduce((acc, key) => {
        acc[key] = key === filterName ? !prev[key] : false;
        return acc;
      }, {});
      return newFilters;
    });
  };

  return (
    <div className="relative">
      <div className="bg-white border-b border-gray-200 px-4 py-4 md:px-12">
        {/* Filter buttons container */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Filter buttons */}
          <div className="flex overflow-x-auto md:overflow-visible space-x-3 pb-2">
            {/* Location */}
            <FilterButton
              active={selectedFilters.location}
              onClick={() => toggleFilter("location")}
              icon={<FaMapMarkerAlt className="w-4 h-4" />}
              label="Location"
            />

            {/* Hobbies */}
            <FilterButton
              active={selectedFilters.rating}
              onClick={() => toggleFilter("rating")}
              icon={<FaStar className="w-4 h-4" />}
              label="Hobbies"
              color="purple"
            />

            {/* Age Range */}
            <FilterButton
              active={selectedFilters.price}
              onClick={() => toggleFilter("price")}
              label="Age Range"
              color="purple"
            />

            {/* Religion */}
            <FilterButton
              active={selectedFilters.filters}
              onClick={() => toggleFilter("filters")}
              label="Religion"
            />

            {/* Marital Status */}
            <FilterButton
              active={selectedFilters.wishlist}
              onClick={() => toggleFilter("wishlist")}
              icon={<FaHeart className="w-4 h-4" />}
              label="Marital Status"
            />
          </div>

          {/* Sort select */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600 whitespace-nowrap">
              Sort By:
            </span>
            <div className="relative w-full md:w-auto">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none w-full bg-white border border-gray-200 rounded-lg px-3 py-2 pr-8 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Top matches</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating: High to Low</option>
                <option>Newest First</option>
                <option>Distance</option>
              </select>
              <FaChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Popups below filter bar */}
      <div className="px-4 md:px-12 mt-2 space-y-4">
        {selectedFilters.location && (
          <PopupCard title="Location">
            {["Abu Dhabi", "Dubai"].map((loc) => (
              <label key={loc} className="block text-sm">
                <input type="checkbox" className="mr-2" /> {loc}
              </label>
            ))}
          </PopupCard>
        )}

        {selectedFilters.rating && (
          <PopupCard title="Select Hobbies">
            <div className="flex flex-wrap gap-2">
              {["Reading", "Cooking", "Music", "Yoga", "Travel", "Fitness"].map(
                (hobby) => (
                  <span
                    key={hobby}
                    className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full"
                  >
                    {hobby}
                  </span>
                )
              )}
            </div>
          </PopupCard>
        )}

        {selectedFilters.price && (
          <PopupCard title="Select Age Range">
            {["18–20 yrs", "20–25 yrs", "25–35 yrs", "50–60 yrs"].map((age) => (
              <label key={age} className="block text-sm">
                <input type="checkbox" className="mr-2" /> {age}
              </label>
            ))}
          </PopupCard>
        )}

        {selectedFilters.filters && (
          <PopupCard title="Religion">
            {["Islam", "Christianity", "Hinduism", "Open to all Faiths"].map(
              (r) => (
                <label key={r} className="block text-sm">
                  <input type="checkbox" className="mr-2" /> {r}
                </label>
              )
            )}
          </PopupCard>
        )}

        {selectedFilters.wishlist && (
          <PopupCard title="Marital Status">
            {["Single", "Divorced", "Widowed"].map((status) => (
              <label key={status} className="block text-sm">
                <input type="checkbox" className="mr-2" /> {status}
              </label>
            ))}
          </PopupCard>
        )}
      </div>
    </div>
  );
}

// Reusable button component
const FilterButton = ({ icon, label, onClick, active, color = "gray" }) => {
  const baseColor =
    color === "purple"
      ? active
        ? "bg-purple-50 border-purple-200 text-purple-700"
        : "bg-purple-100 border-purple-200 text-purple-700"
      : active
      ? "bg-blue-50 border-blue-200 text-blue-700"
      : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100";

  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-3 py-2 rounded-full border transition-colors ${baseColor} whitespace-nowrap`}
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
};

// Reusable popup card component
const PopupCard = ({ title, children }) => (
  <div className="bg-white shadow-md rounded-md p-4 w-full sm:max-w-md md:max-w-lg">
    <p className="font-medium text-sm mb-2">{title}</p>
    {children}
    <div className="flex justify-between mt-3 text-xs text-gray-500">
      <button>Clear All</button>
      <button className="text-blue-600 font-medium">Apply</button>
    </div>
  </div>
);
