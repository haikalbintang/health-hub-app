"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const username_or_email = formData.get("username_or_email");
  const password = formData.get("password");

  const res = await fetch("http://127.0.0.1:5000/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username_or_email, password }),
  });

  const data = await res.json();
  console.log(data);

  if (!res.ok) return { error: data.message || "Invalid Credentials" };

  const cookieStore = cookies();

  cookieStore.set("access_token", data.token.access_token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 60 * 60 * 24,
    path: "/",
  });

  cookieStore.set("refresh_token", data.token.refresh_token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  redirect("/profile");
}
