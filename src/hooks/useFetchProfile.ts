import { ProfileType } from "@/types/type";
import api from "@/utils/api";
import { useState, useEffect } from "react";

export default function useFetchProfile() {
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchProfile = async () => {
    console.log("fetching profile");
    try {
      console.log("fetching profile try");
      const response = await api.get<ProfileType>("/users/profile");
      console.log("response", response);
      setProfile(response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching profile:", error);
      setError("Failed to fetch profile. Please try again.");
    }
  };

  const refetchProfile = async () => {
    await fetchProfile();
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return { profile, error, refetchProfile };
}
