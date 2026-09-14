import React, { useState, useEffect } from "react";
import useFetchProfile from "@/hooks/useFetchProfile";
import useEditSecurity from "@/hooks/useEditSecurity";
import Swal from "sweetalert2";
import { Button } from "@/components/ui/button";
const Security: React.FC = () => {
  const { profile, error, refetchProfile } = useFetchProfile();
  const { securityData, loading, editError, editSecurity } = useEditSecurity();
  const [editing, setEditing] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [data, setData] = useState({
    password: "",
    new_password: "",
    reset_password_question: "",
    reset_password_answer: "",
  });
  const handleSave = async () => {
    try {
      if (Object.values(data).some((value) => value === "")) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please fill out all fields.",
        });
        console.error("Please fill out all fields.");
        return;
      }

      await editSecurity(data);
      setEditing(false);
      setRefresh(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (refresh) {
      refetchProfile();
      setRefresh(false);
    }

    if (securityData && editing) {
      setData({
        password: securityData?.password || "",
        new_password: securityData?.new_password || "",
        reset_password_question: securityData?.reset_password_question || "",
        reset_password_answer: securityData?.reset_password_answer || "",
      });
    }
  }, [refresh, securityData, editing]);

  const handleChange = (event: any) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className="">
      <h1 className="py-10">My Profile</h1>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center bg-white border-2 border-slate-200 shadow-lg px-10 rounded-lg">
          <div className="flex gap-5 py-5">
            <div className="flex gap-3 py-5">
              <div className="flex flex-col gap-5">
                <div className="flex gap-5">
                  <div className="">
                    <h1 className=" font-extralight">Password</h1>
                    <input
                      type="text"
                      value={securityData?.new_password}
                      name="password"
                      className="border-b-2 border-black border-none outline-none"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="">
                    <h1 className=" font-extralight">New Password</h1>
                    <input
                      type="text"
                      value={securityData?.new_password}
                      name="new_password"
                      className="border-b-2 border-black border-none outline-none"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="">
                    <h1 className=" font-extralight">
                      Forget password question
                    </h1>
                    <input
                      type="text"
                      value={securityData?.reset_password_question}
                      name="reset_password_question"
                      className="border-b-2 border-black border-none outline-none"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h1 className=" font-extralight">reset password answer</h1>
                    <input
                      type="text"
                      value={securityData?.reset_password_answer}
                      name="reset_password_answer"
                      className="border-b-2 border-black outline-none"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <Button onClick={handleSave}>Save</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
