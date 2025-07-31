import React from "react";
import Stats from "../components/Dashboard/Stats";
import TodaysMatches from "../components/Dashboard/TodaysMatches";
import ActivityFeed from "../components/Dashboard/ActivityFeed";
import ProfileEnhancement from "../components/Dashboard/ProfileEnhancement";

const Dashboard = () => {
  return (
    <div>
      <Stats />
      <TodaysMatches />
      <div className="bg-gray-100 grid lg:grid-cols-3 gap-4 lg:px-12 px-4">
        <div className="lg:col-span-1 col-span-3">
          <ActivityFeed />
        </div>
        <div className="lg:col-span-2 col-span-3">
          <ProfileEnhancement />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
