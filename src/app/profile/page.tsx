"use client";
import React, { useState } from "react";
import ProfileSidebar from "@/components/ProfileSidebar";

const MyProfile: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <ProfileSidebar />
    </div>
  );
};

export default MyProfile;
