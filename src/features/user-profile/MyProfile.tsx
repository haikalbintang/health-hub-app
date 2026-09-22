import React, { useState, useEffect } from "react";
import axios from "axios";
import useFetchProfile from "@/hooks/useFetchProfile";
import useEditProfile from "@/hooks/useEditProfile";
import { Button } from "@/components/ui/button";
import { chefMainCard } from "@/data";
import Swal from "sweetalert2";
import useUploadComponent from "@/hooks/useUploadComponent";
import useFetch from "@/hooks/useFetch";
import { ProfileType } from "@/types/type";

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
  const {
    data: profile,
    error,
    isLoading,
    refetch,
  } = useFetch<ProfileType>("/users/profile");
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
      refetch();
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
  const inputClass =
    "mt-1 w-full rounded-lg border-2 border-orange-200 bg-orange-50/60 px-3 py-2 text-sm text-gray-900 outline-none transition focus:border-red-400 focus:bg-white";
  const labelClass =
    "text-xs font-semibold uppercase tracking-wide text-gray-500";

  return (
    <div className="flex flex-col gap-6">
      {/* Profile hero */}
      <div className="bg-orange-300 rounded-2xl px-8 py-8 shadow-lg">
        {profile ? (
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            {editing ? (
              <div className="flex flex-col items-center gap-4">
                <img
                  src={imageUrl || profile.image}
                  alt="Profile"
                  className="h-24 w-24 rounded-full object-cover ring-4 ring-white/50"
                />
                <label className="inline-flex cursor-pointer items-center justify-center rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-gray-900 transition hover:bg-white">
                  Choose photo
                  <input
                    type="file"
                    onChange={handleFileChange}
                    name="image"
                    className="hidden"
                  />
                </label>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-5 sm:flex-row sm:gap-7">
                <img
                  src={profile.image}
                  alt=""
                  className="h-24 w-24 rounded-full object-cover ring-4 ring-white/60"
                />
                <div className="text-center sm:text-left">
                  <h2 className="text-2xl font-bold text-white">
                    {profile.first_name} {profile.last_name}
                  </h2>
                  <div className="mt-2 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                      {profile.role}
                    </span>
                    {profile.location && (
                      <span className="flex items-center gap-1 text-sm text-white/80">
                        <span aria-hidden>&#9873;</span>
                        {profile.location}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex justify-center items-center py-6 text-white/80">
            Loading...
          </div>
        )}
      </div>

      {/* Personal Information */}
      <div className="bg-white rounded-2xl border border-orange-100 px-8 py-6 shadow-lg">
        {chefMainCard.map((chef, index) => (
          <div key={index} className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-orange-100 pb-4">
              <h2 className="flex items-center gap-3 text-lg font-semibold text-gray-800">
                <span className="tracking-tight text-orange-300 hidden sm:inline">
                  &mdash;&mdash;&mdash;
                </span>
                Personal Information
                <span className="tracking-tight text-orange-300 hidden sm:inline">
                  &mdash;&mdash;&mdash;
                </span>
              </h2>
              {editing ? (
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setEditing(false)}
                    className="rounded-full"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSave}
                    className="rounded-full bg-red-500 hover:bg-red-600"
                  >
                    Save
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={() => setEditing(true)}
                  className="rounded-full bg-red-500 px-6 hover:bg-red-600"
                >
                  Edit
                </Button>
              )}
            </div>
            {profile ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>First Name</label>
                  {editing ? (
                    <input
                      type="text"
                      value={data.first_name}
                      name="first_name"
                      className={inputClass}
                      onChange={handleChange}
                    />
                  ) : (
                    <p className="mt-1 text-gray-900">{profile.first_name}</p>
                  )}
                </div>
                <div>
                  <label className={labelClass}>Last Name</label>
                  {editing ? (
                    <input
                      type="text"
                      value={data.last_name}
                      name="last_name"
                      className={inputClass}
                      onChange={handleChange}
                    />
                  ) : (
                    <p className="mt-1 text-gray-900">{profile.last_name}</p>
                  )}
                </div>
                <div>
                  <label className={labelClass}>Email Address</label>
                  <p className="mt-1 text-gray-900">{profile.email}</p>
                </div>
                <div>
                  <label className={labelClass}>Phone Number</label>
                  {editing ? (
                    <input
                      type="text"
                      value={data.phone}
                      name="phone"
                      className={inputClass}
                      onChange={handleChange}
                    />
                  ) : (
                    <p className="mt-1 text-gray-900">{profile.phone}</p>
                  )}
                </div>
                <div>
                  <label className={labelClass}>Location</label>
                  {editing ? (
                    <input
                      type="text"
                      value={data.location}
                      name="location"
                      className={inputClass}
                      onChange={handleChange}
                    />
                  ) : (
                    <p className="mt-1 text-gray-900">{profile?.location}</p>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass}>Bio</label>
                  {editing ? (
                    <textarea
                      rows={3}
                      value={data.bio}
                      name="bio"
                      className={inputClass}
                      onChange={handleChange}
                    />
                  ) : (
                    <p className="mt-1 leading-relaxed text-gray-700">
                      {profile.bio}
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex justify-center items-center py-6">
                Loading...
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProfile;
