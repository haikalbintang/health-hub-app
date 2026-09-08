"use client";
import { useEffect, useState } from "react";
// import svg1 from "../../images/svg/whole-foods-1.svg";
import Link from "next/link";
import Envelope from "@/components/Envelope";
import MagnifyingTool from "@/components/MagnifyingTool";
import YouTube from "@/components/YouTube";
import Instagram from "@/components/Instagram";
import Facebook from "@/components/Facebook";
import LoginModal from "@/features/navbar/LoginModal";
import RegisterModal from "@/features/navbar/ModalRegister";
import Navbar from "./Navbar";
import { useAuthStore } from "@/store/useAuthStore";

export default function Header() {
  const [isLoginModalShown, setIsLoginModalShown] = useState(false);
  const [isRegisterModalShown, setIsRegisterModalShown] = useState(false);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <>
      <header className="pb-1">
        {/* Top Bar */}
        <div className="items-center justify-between px-28 flex gap-6 rounded-b-xl py-2 bg-orange-200">
          <div className="flex gap-2">
            <Envelope />
            <div className="text-slate-800">
              have a question?{" "}
              <span className="sm:hover:border-b-2 border-slate-800 cursor-pointer">
                contact us
              </span>
            </div>
          </div>

          <div className="flex justify-between gap-8">
            <div className="flex border-b-2 border-slate-800 w-4844">
              <input
                type="text"
                placeholder="search here"
                className="w-44 px-2 bg-transparent border-transparent border-none"
              />
              <MagnifyingTool />
            </div>
            <ul className="flex justify-center items-center gap-3">
              <li>
                <YouTube />
              </li>
              <li>
                <Instagram />
              </li>
              <li>
                <Facebook />
              </li>
            </ul>
          </div>
        </div>

        {/* Main Navbar */}
        <Navbar
          isLoggedIn={hydrated ? isLoggedIn : false}
          setIsLoginModalShown={setIsLoginModalShown}
        />
      </header>

      {isLoginModalShown && (
        <LoginModal
          setShowLoginModal={setIsLoginModalShown}
          setShowRegisterModal={setIsRegisterModalShown}
        />
      )}
      {isRegisterModalShown && (
        <RegisterModal setShowRegisterModal={setIsRegisterModalShown} />
      )}
    </>
  );
}
