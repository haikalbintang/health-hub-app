import React, { useState, useEffect } from "react";
import axios from "axios";
import useFetchProfile from "@/hooks/useFetchProfile";
import useEditProfile from "@/hooks/useEditProfile";
import { Button } from "@/components/ui/button";
import { chefMainCard2 } from "@/data";
import Swal from "sweetalert2";
import useUploadComponent from "@/hooks/useUploadComponent";

interface Props {
  username?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  location?: string;
  phone?: string;
  image?: string;
  role?: string;
  bio?: string;
}
const MyProfile: React.FC = () => {
  const { profile, error, refetchProfile } = useFetchProfile();
  const { loading, editError, editProfile } = useEditProfile();
  const [editing, setEditing] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const { file, imageUrl, handleFileChange, handleUpload, changeImage } =
    useUploadComponent();

  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    location: "",
    phone: "",
    bio: "",
  });
  const handleSave = async () => {
    try {
      // if (Object.values(data).some((value) => value === "")) {
      //   Swal.fire({
      //     icon: "error",
      //     title: "Oops...",
      //     text: "Please fill out all fields.",
      //   });
      //   console.error("Please fill out all fields.");
      //   return;
      // }

      await editProfile(data);
      setEditing(false);
      setRefresh(true);
      handleUpload();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (refresh) {
      refetchProfile();
      setRefresh(false);
    }

    if (profile && editing) {
      setData({
        first_name: profile.first_name || "",
        last_name: profile.last_name || "",
        location: profile.location || "",
        phone: profile.phone || "",
        bio: profile.bio || "",
      });
    }
  }, [refresh, profile, editing]);

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
            {profile ? (
              <div className="flex flex-col justify-center items-center gap-5">
                {editing ? (
                  <div>
                    {imageUrl && (
                      <img
                        src={imageUrl}
                        alt="Uploaded File"
                        className="h-20 w-20"
                      />
                    )}
                    <input
                      type="file"
                      onChange={handleFileChange}
                      name="image"
                    />
                    {/* <Button onClick={handleUpload}>Upload</Button>
                    {changeImage && <p>Image updated successfully!</p>} */}
                  </div>
                ) : (
                  <>
                    <div className="flex gap-5">
                      <img
                        src={profile.image}
                        alt=""
                        className="h-14 w-14 rounded-full object-cover"
                      />
                      {profile ? (
                        <div className=" justify-center items-center">
                          <div className="flex gap-2">
                            <h1>{profile.first_name}</h1>
                            <h1>{profile.last_name}</h1>
                          </div>
                          <h1 className=" font-light">{profile.role}</h1>
                          <h1 className=" font-extralight">
                            {profile.location}
                          </h1>
                        </div>
                      ) : (
                        <div className=" justify-center items-center">
                          <h1>Loading...</h1>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="flex justify-center items-center">
                <h1>Loading...</h1>
              </div>
            )}
          </div>
        </div>
        <div className="bg-white border-2 border-slate-200 shadow-lg px-10 rounded-lg">
          {chefMainCard2.map((chef, index) => (
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center  pt-5">
                <h1>Personal Information</h1>
                {editing ? (
                  <div className="flex gap-3">
                    <Button onClick={() => setEditing(false)}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                  </div>
                ) : (
                  <Button onClick={() => setEditing(true)}>Edit</Button>
                )}
              </div>
              {profile ? (
                <div className="flex flex-col gap-3 py-5">
                  {editing ? (
                    <div className="flex ">
                      <div className="w-1/2">
                        <h1 className=" font-extralight">First Name</h1>
                        <input
                          type="text"
                          value={data.first_name}
                          name="first_name"
                          className="border-b-2 border-black"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="w-1/2">
                        <h1 className=" font-extralight">Last Name</h1>
                        <input
                          type="text"
                          value={data.last_name}
                          name="last_name"
                          className="border-b-2 border-black "
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="flex ">
                      <div className="w-1/2">
                        <h1 className=" font-extralight">First Name</h1>
                        <h1>{profile.first_name}</h1>
                      </div>
                      <div className="w-1/2">
                        <h1 className=" font-extralight">Last Name</h1>
                        <h1>{profile.last_name}</h1>
                      </div>
                    </div>
                  )}

                  <div className="flex ">
                    <div className="w-1/2">
                      <h1 className=" font-extralight">Email Address</h1>
                      <h1>{profile.email}</h1>
                    </div>
                    {editing ? (
                      <div className="w-1/2">
                        <h1 className=" font-extralight">Phone Number</h1>
                        <input
                          type="text"
                          value={data.phone}
                          name="phone"
                          className="border-b-2 border-black"
                          onChange={handleChange}
                        />
                      </div>
                    ) : (
                      <div className="w-1/2">
                        <h1 className=" font-extralight">Phone Number</h1>
                        <h1>{profile.phone}</h1>
                      </div>
                    )}
                  </div>
                  <div className="flex ">
                    {editing ? (
                      <div className="w-1/2">
                        <h1 className=" font-extralight ">Location</h1>
                        <input
                          type="text"
                          value={data.location}
                          name="location"
                          className="border-b-2 border-black"
                          onChange={handleChange}
                        />
                      </div>
                    ) : (
                      <div className="w-1/2">
                        <h1 className=" font-extralight">Location</h1>
                        <h1>{profile?.location}</h1>
                      </div>
                    )}

                    {/* {editing ? (
                      <div className="w-1/2">
                        <h1 className=" font-extralight">City/State</h1>
                        <input
                          type="text"
                          value={chef.city}
                          onChange={handleChange}
                          className="border-b-2 border-black"
                        />
                      </div>
                    ) : (
                      <div className="w-1/2">
                        <h1 className=" font-extralight">City/State</h1>
                        <h1>{chef.city}</h1>
                      </div>
                    )} */}
                  </div>
                  {editing ? (
                    <div className="flex flex-col ">
                      <h1 className=" font-extralight">Bio</h1>
                      <input
                        type="text"
                        value={data.bio}
                        name="bio"
                        className="border-b-2 border-black"
                        onChange={handleChange}
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col ">
                      <h1 className=" font-extralight">Bio</h1>
                      <h1>{profile.bio}</h1>
                    </div>
                  )}
                </div>
              ) : (
                <div className=" justify-center items-center">
                  <h1>Loading...</h1>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
// <div>

// </div>

export default MyProfile;
