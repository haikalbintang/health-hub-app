"use client";

import React, { useEffect, useState } from "react";
import Modal from "@/features/navbar/Modal";
import api, { getApiErrorMessage } from "@/utils/api";

interface FollowUser {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  image: string;
  role: string;
  bio: string;
  phone: string;
  location: string;
  total_following: number;
  total_follower: number;
  view_count: number;
  social_facebook: string;
  social_instagram: string;
  social_tiktok: string;
  created_at: string;
  updated_at: string;
}

function normalizeUsers(data: unknown): FollowUser[] {
  if (Array.isArray(data)) return data as FollowUser[];
  if (data && typeof data === "object") {
    const obj = data as Record<string, unknown>;
    if (typeof obj.id !== "undefined" && typeof obj.username === "string") {
      return [obj as unknown as FollowUser];
    }
    const candidates = ["data", "users", "followers", "following"];
    for (const key of candidates) {
      if (Array.isArray(obj[key])) return obj[key] as FollowUser[];
    }
  }
  return [];
}

export default function FollowListModal({
  title,
  endpoint,
  onClose,
}: {
  title: string;
  endpoint: string;
  onClose: () => void;
}) {
  const [users, setUsers] = useState<FollowUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    api
      .get<FollowUser[]>(endpoint)
      .then((response) => {
        if (!cancelled) setUsers(normalizeUsers(response.data));
      })
      .catch((err) => {
        if (!cancelled)
          setError(getApiErrorMessage(err, "Failed to load users."));
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [endpoint]);

  return (
    <Modal setShowModal={() => onClose()}>
      <div className="w-96 max-w-[90vw] p-6">
        <div className="flex items-center gap-2">
          <h1 className="text-lg text-slate-800 font-bold">{title}</h1>
          <div className="flex justify-center items-center h-7 w-7 bg-slate-800 text-white rounded-full text-xs">
            {users.length}
          </div>
        </div>

        {loading ? (
          <p className="mt-4 text-sm text-slate-500">Loading...</p>
        ) : error ? (
          <p className="mt-4 text-sm text-red-600">{error}</p>
        ) : users.length > 0 ? (
          <ul className="mt-4 flex flex-col max-h-80 overflow-y-auto gap-2">
            {users.map((user) => {
              const displayName =
                [user.first_name, user.last_name].filter(Boolean).join(" ") ||
                user.username;
              return (
                <li
                  key={user.id}
                  className="flex items-center gap-3 rounded-xl bg-white p-2"
                >
                  {user.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={user.image}
                      alt={user.username}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <span className="flex items-center justify-center h-10 w-10 rounded-full bg-orange-200 text-orange-700 text-sm font-semibold">
                      {displayName.charAt(0).toUpperCase()}
                    </span>
                  )}
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-semibold text-slate-800">
                      {displayName}
                    </span>
                    <span className="text-xs text-slate-500 truncate">
                      @{user.username}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="mt-4 text-sm text-slate-500">No users found.</p>
        )}
      </div>
    </Modal>
  );
}