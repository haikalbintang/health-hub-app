"use client";

import React, { useEffect, useState } from "react";
import { Bookmark } from "lucide-react";
import Swal from "sweetalert2";

import { Button } from "@/components/ui/button";
import api, { getApiErrorMessage } from "@/utils/api";

const storageKey = (recipeId: number) => `recipe-liked-${recipeId}`;

export default function SaveRecipeButton({
  recipeId,
  initialLiked = false,
  onToggle,
}: {
  recipeId: number;
  initialLiked?: boolean;
  onToggle?: (liked: boolean) => void;
}) {
  const [liked, setLiked] = useState(initialLiked);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem(storageKey(recipeId));
    if (stored !== null) {
      setLiked(stored === "true");
    }
  }, [recipeId]);

  const toggleLike = async () => {
    if (loading) return;
    setLoading(true);
    try {
      if (liked) {
        await api.post(`/recipes/unlike/${recipeId}`);
      } else {
        await api.post(`/recipes/like/${recipeId}`);
      }
      const next = !liked;
      setLiked(next);
      localStorage.setItem(storageKey(recipeId), String(next));
      onToggle?.(next);
    } catch (error) {
      await Swal.fire({
        title: "Error",
        text: getApiErrorMessage(error, "Failed to update recipe."),
        icon: "error",
        confirmButtonText: "Ok",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={toggleLike}
      disabled={loading}
      variant="outline"
      size="sm"
      className={
        liked
          ? "bg-pink-600 text-white hover:bg-pink-700 disabled:opacity-60"
          : "hover:text-pink-700 disabled:opacity-60"
      }
    >
      <Bookmark
        size={14}
        className="mr-1.5"
        fill={liked ? "currentColor" : "none"}
      />
      {liked ? "Saved" : "Save recipe"}
    </Button>
  );
}