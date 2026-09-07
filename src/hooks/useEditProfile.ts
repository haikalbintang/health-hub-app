import axios from "axios";
import { useEffect, useState } from "react";

interface Profile {
  first_name: string;
  last_name: string;
  location: string;
  phone: string;
  bio: string;
}

export default function useEditProfile() {
  const [loading, setLoading] = useState(false);
  const [editError, setEditError] = useState(null);

  const editProfile = async (updatedProfile: Profile) => {
    const authToken = localStorage.getItem("access_token");
    if (authToken) {
      try {
        setLoading(true);
        const headers = {
          Authorization: `Bearer ${authToken}`,
        };
        await axios.put(
          "http://127.0.0.1:5000/users/update-info",
          updatedProfile,
          { headers }
        );
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
  };

  return { loading, editError, editProfile };
}
