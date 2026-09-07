"use client";

import { useState } from "react";
import LoginModal from "@/components/LoginModal";
import Navbar from "@/components/Navbar";
import NavbarDropdown from "@/components/NavbarDropdown";
import RegisterModal from "@/components/ModalRegister";

export default function NavbarWrapper() {
  const [showNavbarHamburgerMenu, setShowNavbarHamburgerMenu] =
    useState<boolean>(false);
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [showRegisterModal, setShowRegisterModal] = useState<boolean>(false);

  return (
    <header>
      <nav className="">
        <Navbar
          setShowLoginModal={setShowLoginModal}
          setShowNavbarHamburgerMenu={setShowNavbarHamburgerMenu}
        />
        {showNavbarHamburgerMenu && (
          <NavbarDropdown
            setShowNavbarHamburgerMenu={setShowNavbarHamburgerMenu}
            setShowLoginModal={setShowLoginModal}
          />
        )}
        {showLoginModal && (
          <LoginModal
            setShowLoginModal={setShowLoginModal}
            setShowRegisterModal={setShowRegisterModal}
          />
        )}
        {showRegisterModal && (
          <RegisterModal setShowRegisterModal={setShowRegisterModal} />
        )}
      </nav>
    </header>
  );
}
