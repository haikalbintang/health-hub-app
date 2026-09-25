"use client";

import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

import { Button } from "@/components/ui/button";
import api, { getApiErrorMessage } from "@/utils/api";

const storageKey = (authorId: number) => `author-followed-${authorId}`;

export default function FollowButton({
  authorId,
  initialFollowed = false,
}: {
  authorId: number;
  initialFollowed?: boolean;
}) {
  const [followed, setFollowed] = useState(initialFollowed);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem(storageKey(authorId));
    if (stored !== null) {
      setFollowed(stored === "true");
    }
  }, [authorId]);

  const toggleFollow = async () => {
    if (loading) return;
    setLoading(true);
    try {
      if (followed) {
        await api.post(`/users/unfollow/${authorId}`);
      } else {
        await api.post(`/users/follow/${authorId}`);
      }
      const next = !followed;
      setFollowed(next);
      localStorage.setItem(storageKey(authorId), String(next));
    } catch (error) {
      await Swal.fire({
        title: "Error",
        text: getApiErrorMessage(error, "Failed to update follow."),
        icon: "error",
        confirmButtonText: "Ok",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={toggleFollow}
      disabled={loading}
      size="sm"
      className={
        followed
          ? "bg-gray-300 text-gray-700 hover:bg-gray-400 disabled:opacity-60"
          : "bg-gray-900 hover:bg-gray-700 disabled:opacity-60"
      }
    >
      {followed ? "Following" : "Follow"}
    </Button>
  );
}