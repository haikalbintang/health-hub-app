export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:5000";

export const PROFILE_API_URL = `${API_BASE_URL}/users/profile`;
export const LOGIN_API_URL = `${API_BASE_URL}/users/login`;
export const SIGNUP_API_URL = `${API_BASE_URL}/users/register`;