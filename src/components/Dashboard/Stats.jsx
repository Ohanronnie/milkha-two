import React from "react";
import { FaHeart, FaComments, FaStar } from "react-icons/fa";

const StatCard = ({ icon, title, count, subtitle, bgColor, iconColor }) => (
  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
    <div className="flex items-center space-x-4">
      <div
        className={`w-12 h-12 ${bgColor} rounded-full flex items-center justify-center`}
      >
        <div className={`${iconColor}`}>{icon}</div>
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
        <p className="text-3xl font-bold text-gray-900 mb-1">{count}</p>
        <p className="text-xs text-gray-400">{subtitle}</p>
      </div>
    </div>
  </div>
);

export default function Stats() {
  const stats = [
    {
      id: 1,
      icon: <FaHeart className="w-6 h-6" />,
      title: "Matches",
      count: "284",
      subtitle: "+5.1% from previous week",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      id: 2,
      icon: <FaComments className="w-6 h-6" />,
      title: "Active Chats",
      count: "14",
      subtitle: "+2.1% from previous week",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      id: 3,
      icon: <FaStar className="w-6 h-6" />,
      title: "Shortlisted Profiles",
      count: "14",
      subtitle: "+8.7% from previous week",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
  ];

  return (
    <div className=" p-4 md:p-12 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Welcome Header */}
        <div className="mb-8">
          <p className="text-sm text-gray-500 mb-2">Welcome back,</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Fatima
            <br />
            Al-Shami
          </h1>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.id} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
}
