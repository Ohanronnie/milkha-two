import React from "react";
import ProfileCard from "../components/Profile/ProfileCard";
import UserInfoPanel from "../components/Profile/UserInfoPanel";
import PhotoUploader from "../components/Profile/Photos";

const Profile = () => {
  return (
    <div>
      <ProfileCard />
      <UserInfoPanel />
      <PhotoUploader />
    </div>
  );
};

export default Profile;
