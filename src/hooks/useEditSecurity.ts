import api from "@/utils/api";
import { useState } from "react";

interface Security {
  password: string;
  new_password: string;
  reset_password_question: string;
  reset_password_answer: string;
}

export default function useEditSecurity() {
  const [loading, setLoading] = useState(false);
  const [editError, setEditError] = useState<string | null>(null);
  const [securityData, setSecurityData] = useState<Security | null>(null);

  const editSecurity = async (updatedSecurity: Security) => {
    try {
      setLoading(true);
      setEditError(null);
      await api.put("/users/reset-password", updatedSecurity);
    } catch (error) {
      setEditError("Failed to update security settings. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, editError, securityData, editSecurity };
}