import axios from "axios";
import { useState, useEffect } from "react";

interface Profile {
  id: number;
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  location: string;
  phone: string;
  image: string;
  role: string;
  bio: string;
}

export default function useFetchProfile() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchProfile = async () => {
    const authToken = localStorage.getItem("access_token");
    if (authToken) {
      try {
        const headers = {
          Authorization: `Bearer ${authToken}`,
        };
        const response = await axios.get(
          "http://127.0.0.1:5000/users/profile",
          { headers }
        );
        console.log("response", response);
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setError("Failed to fetch profile. Please try again.");
      }
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
