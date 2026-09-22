import axios, { AxiosError } from "axios";

export { API_BASE_URL } from "./constant";

// All requests go through the Next.js proxy (/api/*), which attaches the
// httpOnly access token server-side. The token is never exposed to the browser.
const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

export function getApiErrorMessage(error: unknown, fallback: string): string {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<{ message?: string }>;
    return axiosError.response?.data?.message ?? fallback;
  }
  return fallback;
}

export default api;
