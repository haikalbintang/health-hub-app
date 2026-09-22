import api from "@/utils/api";
import { useState } from "react";

interface Profile {
  first_name: string;
  last_name: string;
  location: string;
  phone: string;
  bio: string;
}

export default function useEditProfile() {
  const [loading, setLoading] = useState(false);
  const [editError, setEditError] = useState<string | null>(null);

  const editProfile = async (updatedProfile: Profile) => {
    try {
      setLoading(true);
      setEditError(null);
      await api.put("/users/update-info", updatedProfile);
    } catch (error) {
      setEditError("Failed to update profile. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, editError, editProfile };
}