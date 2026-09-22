"use server";

import { cookies } from "next/headers";
import { z } from "zod";
import { API_BASE_URL } from "@/utils/constant";

export type AuthResult = { error?: string; success?: boolean };

const COOKIE_OPTIONS = {
  httpOnly: true,
  sameSite: "strict" as const,
  path: "/",
  secure: process.env.NODE_ENV === "production",
};

const loginSchema = z.object({
  username_or_email: z.string().min(1, "Username or email is required."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

export async function login(
  formData: FormData,
  rememberMe = false,
): Promise<AuthResult> {
  const parsed = loginSchema.safeParse({
    username_or_email: formData.get("username_or_email"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    return { error: parsed.error.errors[0]?.message ?? "Invalid credentials." };
  }

  const res = await fetch(`${API_BASE_URL}/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(parsed.data),
    cache: "no-store",
  }).catch(() => null);

  const data = await res?.json().catch(() => null);

  if (!res || !res.ok || !data?.token?.access_token) {
    return { error: data?.message ?? "Unable to reach the server. Please try again." };
  }

  const cookieStore = cookies();

  cookieStore.set("access_token", data.token.access_token, {
    ...COOKIE_OPTIONS,
    maxAge: rememberMe ? 60 * 60 * 24 * 30 : 60 * 60 * 24,
  });
  cookieStore.set("refresh_token", data.token.refresh_token, {
    ...COOKIE_OPTIONS,
    maxAge: 60 * 60 * 24 * 7,
  });

  return { success: true };
}

export async function logout(): Promise<void> {
  const cookieStore = cookies();
  cookieStore.delete("access_token");
  cookieStore.delete("refresh_token");
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access_token")?.value;
  if (!accessToken) return false;

  // The token is signed with Flask's secret, which we don't have locally, so
  // the backend is the only authority that can verify signature + expiry +
  // revocation. Any authenticated endpoint returning ok means the token is valid.
  const res = await fetch(`${API_BASE_URL}/users/profile`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    cache: "no-store",
  }).catch(() => null);

  return res?.ok ?? false;
}