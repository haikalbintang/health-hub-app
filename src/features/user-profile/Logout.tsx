"use client";
import React, { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/useAuthStore";
import { logout as serverLogout } from "@/actions/auth";

const Logout = () => {
  const router = useRouter();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const logout = useAuthStore((state) => state.logout);
  const [isPending, startTransition] = useTransition();

  const handleLogout = () => {
    startTransition(async () => {
      await serverLogout();
      logout();
      router.push("/login");
      router.refresh();
    });
  };

  return (
    <>
      <Button onClick={handleLogout} disabled={isPending}>
        {isPending ? "Logging out..." : "Logout"}
      </Button>
    </>
  );
};

export default Logout;
