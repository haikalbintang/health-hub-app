"use client";
import React, { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import emailLogo from "@/components/images/email.svg";
import passwordLogo from "@/components/images/passwordLogo.svg";
import Modal from "@/features/navbar/Modal";
import Image from "next/image";
import Close from "@/components/Close";
import { SIGN_IN_OPTIONS } from "@/data/data";
import Link from "next/link";
import { SetToggleMenuType } from "@/types/type";
import { useAuthStore } from "@/store/useAuthStore";
import { login } from "@/actions/auth";
import { useRouter } from "next/navigation";

export default function ModalLogin({
  setShowLoginModal,
  setShowRegisterModal,
}: {
  setShowLoginModal: SetToggleMenuType;
  setShowRegisterModal: SetToggleMenuType;
}) {
  const router = useRouter();
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const setLoggedIn = useAuthStore((state) => state.login);

  function handleLogin() {
    setError(null);

    const formData = new FormData();

    formData.append("username_or_email", usernameOrEmail);
    formData.append("password", password);

    startTransition(async () => {
      const result = await login(formData, rememberMe);

      if (result?.error) {
        setError(result.error);
        return;
      }

      setLoggedIn();
      setShowLoginModal(false);
      router.push("/profile");
      router.refresh();
    });
  }

  function goToRegisterFromLogin() {
    setShowLoginModal(false);
    setShowRegisterModal(true);
  }

  return (
    <Modal setShowModal={setShowLoginModal}>
      <div className="w-1/2 flex flex-col justify-center items-center mx-auto p-6">
        {/* Header */}
        <div className="justify-center p-5 pb-0">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back!</h1>
          <p className="text-gray-700">Please enter your credentials.</p>
        </div>

        {/* Sign-in Options */}
        <ul className="flex flex-col gap-2 p-5">
          {SIGN_IN_OPTIONS.map((sio) => (
            <li key={sio.id} className="flex py-2">
              <Button
                disabled
                className="gap-1 w-72 py-6 pl-1 text-base text-gray-600 bg-orange-200 hover:bg-orange-100 hover:text-gray-800"
              >
                <Image
                  src={sio.src}
                  height={40}
                  width={40}
                  alt={sio.name}
                  className={`${sio.icon === "facebook" ? "w-8 h-8 mr-2" : "w-12 h-12"}`}
                />
                Sign-in with {sio.name}
              </Button>
            </li>
          ))}

          {/* Div */}
          <div className="flex justify-center items-center mt-6 gap-4">
            <h2 className="text-base">&mdash;&mdash;&mdash;</h2>
            <h2 className="text-base text-gray-700">Or Sign-in with Email</h2>
            <h2 className="text-base">&mdash;&mdash;&mdash;</h2>
          </div>

          {/* Login Form */}

          {/* Email */}
          <div className="py-2">
            <label
              htmlFor="email"
              className="text-sm cursor-pointer text-gray-600 font-semibold"
            >
              Email
            </label>
            <div className="relative ">
              <input
                type="text"
                name="email"
                id="email"
                value={usernameOrEmail}
                className="border border-gray-300 rounded-xl w-72 p-2 text-sm pl-9"
                onChange={(e) => setUsernameOrEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
              <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                <Image
                  src={emailLogo.src}
                  alt="Logo"
                  height={10}
                  width={10}
                  className="h-6 w-6"
                />
              </div>
            </div>
          </div>
          {/* Password */}
          <div className="py-2">
            <label
              htmlFor="password"
              className="text-sm cursor-pointer text-gray-600 font-semibold"
            >
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                className="border border-gray-300 rounded-xl w-72 p-2 text-sm pl-9"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
              <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                <Image
                  src={passwordLogo.src}
                  alt="Logo"
                  height={10}
                  width={10}
                  className="h-5 w-5"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            {/* Remember me */}
            <div className="flex gap-1">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="cursor-pointer"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label
                htmlFor="remember"
                className="text-xs cursor-pointer text-gray-600 hover:text-gray-800 active:text-gray-800"
              >
                Remember Me
              </label>
            </div>
            {/* Forgot Password */}

            <Link
              href={"/forgot-password"}
              onClick={() => setShowLoginModal(false)}
              className="cursor-pointer text-xs border-b-2 border-gray-700 hover:border-gray-800 text-gray-600 hover:text-gray-800"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
              {error}
            </p>
          )}
          <Button
            className="w-72 bg-red-500 hover:bg-red-600 mt-4"
            type="submit"
            value={"Login"}
            onClick={handleLogin}
            disabled={isPending}
          >
            <p className="text-base">{isPending ? "Signing in..." : "Login"}</p>
          </Button>

          <div className="mt-2">
            <p className="text-sm text-gray-700">
              Don&apos;t have an account? Sign up{" "}
              <span
                onClick={() => goToRegisterFromLogin()}
                className="text-red-500 hover:text-red-600 cursor-pointer hover:font-semibold"
              >
                here
              </span>
            </p>
          </div>
        </ul>

        <div className="absolute top-1 right-1">
          <button
            onClick={() => setShowLoginModal(false)}
            type="button"
            className="bg-transparent rounded-md m-3 inline-flex items-center justify-center text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Close menu</span>
            <Close />
          </button>
        </div>
      </div>

      <Image
        height={500}
        width={500}
        src={"/food3.jpg"}
        alt=""
        className="w-1/2 min-w-96 object-cover rounded-tr-xl rounded-br-xl"
      />
    </Modal>
  );
}
