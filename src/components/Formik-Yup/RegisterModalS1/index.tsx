import { useState } from "react";
import { Button } from "../../ui/button";

import inboxsvg from "../../components/images/svg/email-1-svgrepo-com.svg";
import locksvg from "../../components/images/svg/4213432_closed_lock_password_protect_secure_icon.svg";

type SetToggleMenuType = (
  value: boolean | ((prev: boolean) => boolean)
) => void;

interface Props {
  setShowRegisterModal: SetToggleMenuType;
}

export default function RegisterModal({ setShowRegisterModal }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setShowRegisterModal(false)}
        ></div>
        {/* Modal */}
        <div className="fixed flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl z-50">
          {/* Form */}
          <div className="px-0 sm:px-6 md:px-0 lg:px-6">
            <div className="justify-center p-5 pb-0">
              <h1 className="text-3xl font-bold text-slate-700">
                REGISTER PAGE
              </h1>
              <p className="text-slate-600">Please enter your details.</p>
            </div>
            <div className="flex flex-col gap-2 p-5">
              <div className="flex justify-center items-center mt-6 gap-4">
                <h2 className="text-base">&mdash;&mdash;&mdash;</h2>
                <h2 className="text-base text-slate-700">
                  Or Sign-in with Email
                </h2>
                <h2 className="text-base">&mdash;&mdash;&mdash;</h2>
              </div>
              <form action="{{}}" method="post">
                <div className="py-2">
                  <label
                    htmlFor="email"
                    className="text-sm cursor-pointer text-slate-600 font-semibold"
                  >
                    Email
                  </label>
                  <div className="relative ">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      className="border border-gray-300 rounded-xl w-72 p-2 text-sm pl-9"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                    <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                      <img src={inboxsvg.src} alt="Logo" className="h-6 w-6" />
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <label
                    htmlFor="password"
                    className="text-sm cursor-pointer text-slate-600 font-semibold"
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
                      <img src={locksvg.src} alt="Logo" className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button
                    className="w-28 bg-red-500 hover:bg-red-600 mt-4"
                    type="submit"
                    value={"Login"}
                  >
                    <p className="text-base">Prev</p>
                  </Button>
                  <Button
                    className="w-28 bg-red-500 hover:bg-red-600 mt-4"
                    type="submit"
                    value={"Login"}
                  >
                    <p className="text-base">Next</p>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
