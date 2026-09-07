import axios from "axios";
import { useEffect, useState } from "react";

interface Security {
  password: string;
  new_password: string;
  reset_password_question: string;
  reset_password_answer: string;
}

export default function useEditSecurity() {
  const [loading, setLoading] = useState(false);
  const [editError, setEditError] = useState(null);
  const [securityData, setSecurityData] = useState<Security | null>(null);

  const editSecurity = async (updatedSecurity: Security) => {
    const authToken = localStorage.getItem("access_token");
    if (authToken) {
      try {
        setLoading(true);
        const headers = {
          Authorization: `Bearer ${authToken}`,
        };
        await axios.put(
          "http://127.0.0.1:5000/users/reset-password",
          updatedSecurity,
          { headers }
        );
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return { loading, editError, securityData, editSecurity };
}
