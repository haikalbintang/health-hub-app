"use client";

import { useState } from "react";
import LoginModal from "../../Modals/ModalLogin";
import Navbar from "../Navbar";
import NavbarDropdown from "../NavbarDropdown";
import RegisterModal from "../../Modals/ModalRegister";

export default function NavbarWrapper() {
  const [showNavbarHamburgerMenu, setShowNavbarHamburgerMenu] =
    useState<boolean>(false);
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [showRegisterModal, setShowRegisterModal] = useState<boolean>(false);

  return (
    <>
      <div className="">
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
      </div>
    </>
  );
}
