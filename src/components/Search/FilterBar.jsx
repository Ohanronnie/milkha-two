import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaStar,
  FaDollarSign,
  FaFilter,
  FaHeart,
  FaSort,
  FaChevronDown,
} from "react-icons/fa";

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
    setSelectedFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };

  return (
    <div className="bg-white border-b border-gray-200 lg:px-12 px-4 py-4">
      <div className="flex items-center justify-between">
        {/* Left side filters */}
        <div className="flex items-center space-x-3">
          {/* Location */}
          <button
            onClick={() => toggleFilter("location")}
            className={`flex items-center space-x-2 px-3 py-2 rounded-full border transition-colors ${
              selectedFilters.location
                ? "bg-blue-50 border-blue-200 text-blue-700"
                : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
            }`}
          >
            <FaMapMarkerAlt className="w-4 h-4" />
            <span className="text-sm font-medium">Location</span>
          </button>

          {/* Rating */}
          <button
            onClick={() => toggleFilter("rating")}
            className={`flex items-center space-x-2 px-3 py-2 rounded-full border transition-colors ${
              selectedFilters.rating
                ? "bg-purple-50 border-purple-200 text-purple-700"
                : "bg-purple-100 border-purple-200 text-purple-700"
            }`}
          >
            <FaStar className="w-4 h-4" />
            <span className="text-sm font-medium">Rating 4+</span>
          </button>

          {/* Price */}
          <button
            onClick={() => toggleFilter("price")}
            className={`flex items-center space-x-2 px-3 py-2 rounded-full border transition-colors ${
              selectedFilters.price
                ? "bg-purple-50 border-purple-200 text-purple-700"
                : "bg-purple-100 border-purple-200 text-purple-700"
            }`}
          >
            <FaDollarSign className="w-4 h-4" />
            <span className="text-sm font-medium">$$ - $$$ (mid-range)</span>
          </button>

          {/* Filters */}
          <button
            onClick={() => toggleFilter("filters")}
            className={`flex items-center space-x-2 px-3 py-2 rounded-full border transition-colors ${
              selectedFilters.filters
                ? "bg-blue-50 border-blue-200 text-blue-700"
                : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
            }`}
          >
            <FaFilter className="w-4 h-4" />
            <span className="text-sm font-medium">Filters</span>
          </button>

          {/* Wishlist */}
          <button
            onClick={() => toggleFilter("wishlist")}
            className={`flex items-center space-x-2 px-3 py-2 rounded-full border transition-colors ${
              selectedFilters.wishlist
                ? "bg-blue-50 border-blue-200 text-blue-700"
                : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
            }`}
          >
            <FaHeart className="w-4 h-4" />
            <span className="text-sm font-medium">Wishlist Status</span>
          </button>
        </div>

        {/* Right side sort */}
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Sort By:</span>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-gray-200 rounded-lg px-3 py-2 pr-8 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
  );
}
