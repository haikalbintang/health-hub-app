import React from "react";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { useAuthStore } from "@/store/useAuthStore";

const Logout = () => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const logout = useAuthStore((state) => state.logout);
  return (
    <>
      {isLoggedIn && (
        <Link href={"/"}>
          <Button onClick={logout}>Logout</Button>
        </Link>
      )}
    </>
  );
};

export default Logout;
