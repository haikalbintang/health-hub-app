import React, { useEffect, useState, type ChangeEvent } from "react";
import useFetch from "@/hooks/useFetch";
import useEditProfile from "@/hooks/useEditProfile";
import useUploadComponent from "@/hooks/useUploadComponent";
import FollowListModal from "@/features/user-profile/FollowListModal";
import { Button } from "@/components/ui/button";
import { ProfileType } from "@/types/type";
import {
  Users,
  UserPlus,
  Eye,
  MapPin,
  Mail,
  Phone,
  User,
  Hash,
  Facebook,
  Instagram,
  Music2,
} from "lucide-react";

const MyProfile: React.FC = () => {
  const {
    data: profile,
    error,
    isLoading,
    refetch,
  } = useFetch<ProfileType>("/users/profile");
  const { loading, editError, editProfile } = useEditProfile();
  const { imageUrl, handleFileChange, handleUpload } = useUploadComponent();

  const [editing, setEditing] = useState(false);
  const [followModal, setFollowModal] = useState<{
    title: string;
    endpoint: string;
  } | null>(null);
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    location: "",
    phone: "",
    bio: "",
  });

  useEffect(() => {
    if (profile && editing) {
      setData({
        first_name: profile.first_name || "",
        last_name: profile.last_name || "",
        location: profile.location || "",
        phone: profile.phone || "",
        bio: profile.bio || "",
      });
    }
  }, [profile, editing]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSave = async () => {
    await editProfile(data);
    setEditing(false);
    refetch();
    handleUpload();
  };

  const inputClass =
    "mt-1 w-full rounded-lg border-2 border-orange-200 bg-orange-50/60 px-3 py-2 text-sm text-gray-900 outline-none transition focus:border-red-400 focus:bg-white";
  const labelClass =
    "text-xs font-semibold uppercase tracking-wide text-gray-500";

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20 text-gray-500">
        Loading profile...
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 px-6 py-10 text-center text-sm text-red-600">
        {error}
      </div>
    );
  }

  if (!profile) return null;

  const socials = [
    { label: "Facebook", value: profile.social_facebook, Icon: Facebook },
    { label: "Instagram", value: profile.social_instagram, Icon: Instagram },
    { label: "TikTok", value: profile.social_tiktok, Icon: Music2 },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Profile hero */}
      <div className="rounded-2xl bg-orange-200 px-8 py-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
          <div className="flex flex-col items-center gap-4">
            <img
              src={imageUrl || profile.image}
              alt={`${profile.first_name} ${profile.last_name}`}
              className="h-24 w-24 rounded-full object-cover ring-4 ring-white/50"
            />
            {editing && (
              <label className="inline-flex cursor-pointer items-center justify-center rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-gray-900 transition hover:bg-white">
                Choose photo
                <input
                  type="file"
                  onChange={handleFileChange}
                  name="image"
                  className="hidden"
                />
              </label>
            )}
          </div>

          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-800">
              {profile.first_name} {profile.last_name}
            </h2>
            <p className="mt-1 text-sm text-gray-800/80">@{profile.username}</p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
              <span className="rounded-full bg-white/50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-800">
                {profile.role}
              </span>
              {profile.location && (
                <span className="flex items-center gap-1 text-sm text-gray-800/80">
                  <MapPin size={14} />
                  {profile.location}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-3 gap-3 rounded-xl bg-white/50 p-2">
          <button
            type="button"
            onClick={() =>
              setFollowModal({
                title: "Following",
                endpoint: "/collection/list/followed-users",
              })
            }
            className="flex flex-col items-center gap-1 rounded-lg transition hover:bg-white/40 p-2"
          >
            <UserPlus size={18} className="text-gray-800" />
            <span className="text-lg font-bold text-gray-800">
              {profile.total_following}
            </span>
            <span className="text-xs font-medium uppercase tracking-wide text-gray-800/80">
              Following
            </span>
          </button>
          <button
            type="button"
            onClick={() =>
              setFollowModal({
                title: "Followers",
                endpoint: "/collection/list/user-followers",
              })
            }
            className="flex flex-col items-center gap-1 rounded-lg transition hover:bg-white/40 p-2"
          >
            <Users size={18} className="text-gray-800" />
            <span className="text-lg font-bold text-gray-800">
              {profile.total_followers || 0}
            </span>
            <span className="text-xs font-medium uppercase tracking-wide text-gray-800/80">
              Followers
            </span>
          </button>
          <div className="flex flex-col items-center gap-1 p-2">
            <Eye size={18} className="text-gray-800" />
            <span className="text-lg font-bold text-gray-800">
              {profile.view_count}
            </span>
            <span className="text-xs font-medium uppercase tracking-wide text-gray-800/80">
              Views
            </span>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="rounded-2xl text-center border border-orange-100 bg-white px-8 py-6 shadow-sm">
        <h2 className="flex justify-center items-center gap-3 text-lg font-semibold text-gray-800">
          <span className="tracking-tight text-orange-300 hidden sm:inline">
            &mdash;&mdash;&mdash;
          </span>
          Bio
          <span className="tracking-tight text-orange-300 hidden sm:inline">
            &mdash;&mdash;&mdash;
          </span>
        </h2>
        {editing ? (
          <textarea
            rows={3}
            value={data.bio}
            name="bio"
            className={`${inputClass} mt-4`}
            onChange={handleChange}
          />
        ) : (
          <p className="mt-3 leading-relaxed text-gray-700">
            {profile.bio || "-"}
          </p>
        )}
      </div>

      {/* Personal information */}
      <div className="rounded-2xl border border-orange-100 bg-white px-8 py-6 shadow-sm">
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
                disabled={loading}
                className="rounded-full bg-red-500 hover:bg-red-600"
              >
                {loading ? "Saving..." : "Save"}
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

        {editError && (
          <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
            {editError}
          </p>
        )}

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label className={`flex items-center gap-1.5 ${labelClass}`}>
              <Hash size={14} className="text-gray-400" />
              <span className={labelClass}>Username</span>
            </label>
            <p className="mt-1 text-gray-900">{profile.username}</p>
          </div>
          <div>
            <label className={`flex items-center gap-1.5 ${labelClass}`}>
              <Mail size={14} className="text-gray-400" />
              <span className={labelClass}>Email Address</span>
            </label>
            <p className="mt-1 text-gray-900">{profile.email}</p>
          </div>
          <div>
            <label className={`flex items-center gap-1.5 ${labelClass}`}>
              <User size={14} className="text-gray-400" />
              <span className={labelClass}>First Name</span>
            </label>
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
            <label className={`flex items-center gap-1.5 ${labelClass}`}>
              <User size={14} className="text-gray-400" />
              <span className={labelClass}>Last Name</span>
            </label>
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
            <label className={`flex items-center gap-1.5 ${labelClass}`}>
              <Phone size={14} className="text-gray-400" />
              <span className={labelClass}>Phone Number</span>
            </label>
            {editing ? (
              <input
                type="text"
                value={data.phone}
                name="phone"
                className={inputClass}
                onChange={handleChange}
              />
            ) : (
              <p className="mt-1 text-gray-900">{profile.phone || "-"}</p>
            )}
          </div>
          <div>
            <label className={`flex items-center gap-1.5 ${labelClass}`}>
              <MapPin size={14} className="text-gray-400" />
              <span className={labelClass}>Location</span>
            </label>
            {editing ? (
              <input
                type="text"
                value={data.location}
                name="location"
                className={inputClass}
                onChange={handleChange}
              />
            ) : (
              <p className="mt-1 text-gray-900">{profile.location || "-"}</p>
            )}
          </div>
        </div>
      </div>

      {/* Social links */}
      <div className="rounded-2xl border border-orange-100 bg-white px-8 py-6 shadow-sm">
        <h2 className="flex items-center gap-3 text-lg font-semibold text-gray-800">
          <span className="tracking-tight text-orange-300 hidden sm:inline">
            &mdash;&mdash;&mdash;
          </span>
          Social Links
          <span className="tracking-tight text-orange-300 hidden sm:inline">
            &mdash;&mdash;&mdash;
          </span>
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {socials.map(({ label, value, Icon }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-xl border border-orange-100 px-4 py-3"
            >
              <Icon size={18} className="shrink-0 text-orange-400" />
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  {label}
                </p>
                <p className="truncate text-sm text-gray-900">
                  {value || "Not set"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {followModal && (
        <FollowListModal
          title={followModal.title}
          endpoint={followModal.endpoint}
          onClose={() => setFollowModal(null)}
        />
      )}
    </div>
  );
};

export default MyProfile;
