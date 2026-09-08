"use client";

import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/useAuthStore";
import Link from "next/link";
import React, { useState } from "react";
// import ProfileSidebar from "@/components/ProfileSidebar";

const MyProfilePage: React.FC = () => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const logout = useAuthStore((state) => state.logout);

  return (
    <div>
      {isLoggedIn && (
        <Link href={"/"}>
          <Button onClick={logout}>Logout</Button>
        </Link>
      )}
      {/* <ProfileSidebar /> */}
    </div>
  );
};

export default MyProfilePage;
